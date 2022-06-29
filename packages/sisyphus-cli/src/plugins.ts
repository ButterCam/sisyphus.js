import fs from 'fs'
import fsp from 'fs/promises'
import log from 'npmlog'
import path from 'path'
import {PackageJson, readConfigJson} from './config'

export const registeredPlugins: { [name: string]: string } = {}

export async function discoverPluginsInGlobal() {
    const paths = require.resolve.paths('')
    if (paths == null) return

    for (let path of paths) {
        await discoverPluginsIn(path)
    }
}

export async function discoverPluginsInModule(packageInfo: PackageJson, paths: string[]) {
    let devDeps = Object.keys(packageInfo.devDependencies ?? {})
    let queue: string[] = []

    for (let searchPath of paths) {
        while (devDeps.length > 0) {
            const dep = devDeps.shift()!
            const modulePath = path.join(searchPath, dep)
            const info = await discoverPluginsInPackage(modulePath)
            if (info === undefined) {
                queue.push(dep)
                continue
            }
            if (info.main !== undefined) {
                require(modulePath)
            }
        }
        devDeps = queue
        queue = []
    }
}

async function discoverPluginsIn(dir: string) {
    if (!fs.existsSync(dir)) return

    const files = await fsp.readdir(dir)
    for (let file of files) {
        const module = path.join(dir, file)
        const stats = await fsp.stat(module)
        if (!stats.isDirectory()) continue

        if (file.startsWith('@')) {
            await discoverPluginsIn(module)
        } else {
            await discoverPluginsInPackage(module)
        }
    }
}

async function discoverPluginsInPackage(dir: string): Promise<PackageJson | undefined> {
    const packageJsonPath = path.join(dir, 'package.json')
    const packageInfo = await readConfigJson<PackageJson>(packageJsonPath)
    if (packageInfo === undefined) return

    if (packageInfo.sisyphus !== undefined) {
        const plugins = Object.keys(packageInfo.sisyphus.plugins ?? {})
        if (plugins.length > 0) {
            log.info('cli', `Protoc plugins found in ${packageInfo.name}: ${plugins.join(', ')}`)
        }
        for (const plugin of plugins) {
            registeredPlugins[plugin] = path.join(dir, packageInfo.sisyphus.plugins[plugin])
        }
    }

    return packageInfo
}
