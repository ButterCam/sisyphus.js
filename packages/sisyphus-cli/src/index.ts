#!/usr/bin/env node

import {FileDescriptorSet as FileDescSet, FilesGeneratingState, GeneratedFile} from '@sisyphus.js/compiler'
import protoc from '@sisyphus.js/protoc/lib/protoc'
import {FileDescriptorSet} from '@sisyphus.js/runtime.proto'
import {program} from 'commander'
import * as fs from 'fs'
import fsp from 'fs/promises'
import * as Module from 'module'
import log from 'npmlog'
import * as path from 'path'
import * as process from 'process'
import {PackageJson, readConfigJson, SisyphusDistJson} from './config'
import {discoverPluginsInGlobal, discoverPluginsInModule, registeredPlugins} from './plugins'
import {discoverRootsInModule, generatedModules, protoRoots} from './root'
import {discoverSourceInDir, discoverSourceInModule} from './source'

log.heading = 'sisyphus'

function collect(value: string, previous: string[]): string[] {
    return previous.concat(value)
}

export async function main(args: string[]): Promise<number> {
    const packageInfo = (await readConfigJson<PackageJson>(path.join(__dirname, '../package.json')))!
    program.version(packageInfo.version)
    program.requiredOption('-O --output <output>', 'Folder to output ts files.')
        .parse(args)
    program.opts()

    log.info('cli', `Sisygen v${packageInfo.version}`)
    const currentPackage = path.join(process.cwd(), 'package.json')
    if (!fs.existsSync(currentPackage)) {
        log.error('cli', `Sisygen command must run under a valid package: ${currentPackage} not exists.`)
        return -1
    }
    const currentPackageInfo: PackageJson = require(currentPackage)
    log.info('cli', `Generating for package: ${currentPackageInfo.name}`)
    let currentModule: Module | undefined
    for (let child of module.children) {
        if (child.path == process.cwd()) {
            currentModule = child
        }
    }

    if (currentModule === undefined) {
        log.error('cli', `Failed to load module ${currentPackageInfo.name}.`)
        return -1
    }

    await discoverRootsInModule(currentPackageInfo, currentModule.paths)

    const targetProtoDir = path.join(process.cwd(), currentPackageInfo.directories?.proto ?? 'proto')
    let targetProtos: string[] = []

    if (fs.existsSync(targetProtoDir)) {
        const protos = await discoverSourceInDir(targetProtoDir)
        log.info('cli', `Found ${protos.length} proto source files from work package.`)
        targetProtos.push(...protos)
    }

    await discoverSourceInModule(currentPackageInfo, currentModule.paths, targetProtos)

    if (targetProtos.length == 0) {
        log.info('cli', `No protos need to generate, put .proto files into '${targetProtoDir}' directory`)
        return 0
    } else {
        log.info('cli', `${targetProtos.length} proto files picked to generate.`)
    }

    targetProtos = Array.from(new Set(targetProtos))

    await discoverPluginsInGlobal()
    await discoverPluginsInModule(currentPackageInfo, currentModule.paths)

    const descOutput = path.join(process.cwd(), '.gen.desc.pb')

    const protocArgs = [
        `-o${descOutput}`,
        ...protoRoots.map(it => `-I${it}`),
        `-I${targetProtoDir}`,
        '--include_imports',
        '--include_source_info',
        ...targetProtos
    ]

    if (packageInfo.protobuf?.version) {
        protocArgs.unshift("--version", packageInfo.protobuf.version)
    }

    log.info('cli', `Run protoc ${protocArgs.join(' ')}`)

    const result = await protoc(...protocArgs)

    if (result !== 0) {
        log.error('cli', `Protoc return ${result} on exit.`)
        return -1
    }

    const usedPlugins: string[] = []

    if (currentPackageInfo.protobuf?.plugins != undefined) {
        if (currentPackageInfo.protobuf.plugins.length > 0) {
            log.info('cli', `Plugins ${currentPackageInfo.protobuf.plugins.join(', ')} picked by package.json.`)
            usedPlugins.push(...currentPackageInfo.protobuf.plugins)
        }
    }

    if (usedPlugins.length == 0) {
        log.error('cli', `No generating plugin.`)
        return -1
    }

    for (let usedPlugin of usedPlugins) {
        const plugin = registeredPlugins[usedPlugin]
        if (plugin == undefined) {
            log.error('cli', `Plugin ${usedPlugin} not registered.`)
            return -1
        }
        require(plugin)
    }

    const desc = await fsp.readFile(descOutput)
    await fsp.unlink(descOutput)
    const fileDescSet = FileDescriptorSet.parse(desc)

    const files: GeneratedFile[] = []
    advance<FilesGeneratingState>({
        kind: 'files',
        parent: undefined,
        descriptor: new FileDescSet(<any>fileDescSet),
        target: files,
        src: targetProtos,
        lib: generatedModules
    })

    const info: SisyphusDistJson = {
        version: '1.0',
        generatedFiles: []
    }

    for (let file of files) {
        const filename = path.join(process.cwd(), program.opts()['output'], file.name)
        info.generatedFiles.push(file.name)

        fs.mkdirSync(path.dirname(filename), {recursive: true})
        fs.writeFileSync(filename, file.content)
    }

    log.info('cli', `${files.length} files generated, listed in sisyphus-dist.json`)
    fs.writeFileSync(path.join(process.cwd(), 'sisyphus-dist.json'), JSON.stringify(info, undefined, 2))

    return 0
}

main(process.argv).then(ret => {
    process.exit(ret)
}).catch(err => {
    console.error(err)
    process.exit(1)
})