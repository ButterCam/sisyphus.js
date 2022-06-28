import fs from 'fs'
import log from 'npmlog'
import path from 'path'
import {PackageJson, readConfigJson, SisyphusDistJson} from './config'

export const protoRoots: string[] = []

export const generatedModules: { [k: string]: string } = {}

export async function discoverRootsInModule(packageInfo: PackageJson, paths: string[]) {
    let deps = Object.keys(packageInfo.dependencies ?? {})
    let queue: string[] = []

    for (let searchPath of paths) {
        while (deps.length > 0) {
            const dep = deps.shift()!
            const modulePath = path.join(searchPath, dep)
            const info = await discoverRootInPackage(modulePath)
            if (info === undefined) {
                queue.push(dep)
                continue
            }
            await discoverGeneratedModuleInPackage(info, modulePath)
        }
        deps = queue
        queue = []
    }
}

async function discoverGeneratedModuleInPackage(packageInfo: PackageJson, dir: string): Promise<PackageJson | undefined> {
    const distJsonPath = path.join(dir, 'sisyphus-dist.json')
    const sisyphusDist = await readConfigJson<SisyphusDistJson>(distJsonPath)
    if (sisyphusDist === undefined) return

    for (let file of sisyphusDist.generatedFiles) {
        const moduleName = tsModuleName(file)
        if (moduleName == undefined) return
        generatedModules['/' + moduleName] = path.join(packageInfo.name, packageInfo.directories?.lib ?? 'lib', moduleName)
    }

    return packageInfo
}

function tsModuleName(file: string): string | undefined {
    if (!file.endsWith('.ts')) return undefined
    return file.substring(0, file.length - 3)
}

async function discoverRootInPackage(dir: string): Promise<PackageJson | undefined> {
    const packageJsonPath = path.join(dir, 'package.json')
    const packageInfo = await readConfigJson<PackageJson>(packageJsonPath)
    if (packageInfo === undefined) return

    const input = path.join(dir, packageInfo.directories?.proto ?? 'proto')
    if (fs.existsSync(input)) {
        if(packageInfo.main) {
            require(dir)
        }
        log.info('cli', `Proto dependency found in ${packageInfo.name}.`)
        protoRoots.push(input)
    }

    return packageInfo
}