import fsp from 'fs/promises'
import log from 'npmlog'
import path from 'path'
import {PackageJson, readConfigJson} from './config'

export async function discoverSourceInModule(packageInfo: PackageJson, paths: string[], result: string[]) {
    let deps = packageInfo.protobuf?.packages ?? []
    let queue: string[] = []

    for (let searchPath of paths) {
        while (deps.length > 0) {
            const dep = deps.shift()!
            const packageJsonPath = path.join(searchPath, dep, 'package.json')
            const packageJson = await readConfigJson<PackageJson>(packageJsonPath)
            if (packageJson === undefined) {
                queue.push(dep)
                continue
            }
            const protoDir = path.join(searchPath, dep, packageJson?.directories?.proto ?? 'proto')
            const protos = await discoverSourceInDir(protoDir)
            result.push(...protos)
            log.info('cli', `Found ${protos.length} proto source files from ${packageJson.name}.`)
        }
        deps = queue
        queue = []
    }
}

export async function discoverSourceInDir(dir: string): Promise<string[]> {
    const result: string[] = []
    await walkProtoDir(dir, result)
    return result
}

export async function walkProtoDir(dir: string, result: string[], parent?: string) {
    const files = await fsp.readdir(dir)

    for (let file of files) {
        const filepath = path.join(dir, file)
        const stat = await fsp.stat(filepath)
        const protopath = parent === undefined ? file : `${parent}/${file}`
        if (stat.isDirectory()) {
            await walkProtoDir(filepath, result, protopath)
        } else {
            if (file.endsWith('.proto')) {
                result.push(protopath)
            }
        }
    }
}