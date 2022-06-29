import * as util from 'util'
import {CodeBuilder} from '../code-builder'
import {FileHeaderGeneratingState} from '../core/state'
import {SimpleImportManager} from '../import-manager'
import {FilesGeneratingState} from '../state'
import {
    FileAipGeneratingState,
    MethodAipDescriptorGeneratingState,
    ServiceAipGeneratingState,
    ServiceAipImplGeneratingState
} from './state'

generate<FilesGeneratingState>('files', it => {
    for (let file of it.descriptor.files) {
        if (it.src.length != 0 && !it.src.includes(file.name())) {
            continue
        }
        const builder = new CodeBuilder(new SimpleImportManager('/' + file.tsModulePath('aip'), it.lib))
        const elements = advance<FileAipGeneratingState>({
            kind: 'file:aip', parent: it, descriptor: file, target: builder
        })
        if (elements > 0) {
            it.target.push({
                name: file.tsFile('aip'),
                content: builder.build()
            })
        }
    }
})

generate<FileAipGeneratingState>('file:aip', it => {
    if (it.descriptor.services.length == 0) return
    const builder = it.target
    advance<FileHeaderGeneratingState<'aip'>>({
        kind: 'file:header', parent: it, descriptor: 'aip', target: builder
    })
    const coreModule = builder.importManager.import(`/${it.descriptor.tsModulePath()}`)
    builder.beginBlock(`declare module '${coreModule}'`)
    for (let service of it.descriptor.services) {
        advance<ServiceAipGeneratingState>({
            kind: 'service:aip', parent: it, descriptor: service, target: builder
        })
    }
    builder.endBlock()

    builder.normalize().appendLn(`export * from '${coreModule}'`)

    for (let service of it.descriptor.services) {
        advance<ServiceAipImplGeneratingState>({
            kind: 'service:aip:impl', parent: it, descriptor: service, target: builder
        })
    }
})

generate<ServiceAipGeneratingState>('service:aip', it => {
    it.generatedElements++
    const builder = it.target

    builder.beginBlock(`namespace ${it.descriptor.className()}`)
    const serviceDescriptor = builder.importManager.import('@sisyphus.js/transport-aip', 'ServiceDescriptor')
    builder.normalize().appendLn(`let aipDescriptor: ${serviceDescriptor}`)

    const rpc = builder.importManager.import('@sisyphus.js/transport-aip', 'Rpc')
    const clientInterface = builder.importManager.import('/' + it.descriptor.file().tsModulePath(), it.descriptor.className())
    builder.normalize().appendLn(`function aipClient(rpc: ${rpc}): ${clientInterface}`)
    builder.endBlock()
})

generate<ServiceAipImplGeneratingState>('service:aip:impl', it => {
    it.generatedElements++
    const builder = it.target

    const importName = builder.importManager.import('/' + it.descriptor.file().tsModulePath(), it.descriptor.className())

    builder.normalize().beginBlock(`${importName}.aipDescriptor = `)
    builder.appendLn(`name: '${it.descriptor.className()}',`)

    builder.normalize().beginBlock(`methods:`)
    for (let method of it.descriptor.methods) {
        method.methodName()
        advance<MethodAipDescriptorGeneratingState>({
            kind: 'method:aip:desc', parent: it, descriptor: method, target: builder
        })
    }
    builder.trimEnd(', ').ln()
    builder.endBlock()
    builder.endBlock()

    const rpc = builder.importManager.import('@sisyphus.js/transport-aip', 'Rpc')
    builder.normalize().beginBlock(`${importName}.aipClient = function(rpc: ${rpc}): ${importName}`)
    const aipClient = builder.importManager.import('@sisyphus.js/transport-aip', 'aipClient')
    builder.appendLn(`return ${aipClient}(${importName}.aipDescriptor, rpc)`)
    builder.endBlock()
})

generate<MethodAipDescriptorGeneratingState>('method:aip:desc', it => {
    it.generatedElements++
    const builder = it.target

    builder.normalize().beginBlock(`${it.descriptor.methodName()}:`)
    builder.appendLn(`name: '${it.descriptor.descriptor.name}', `)
    builder.appendLn(`i: '${it.descriptor.descriptor.inputType}', `)
    builder.appendLn(`o: '${it.descriptor.descriptor.outputType}', `)
    if (it.descriptor.descriptor.clientStreaming) {
        builder.appendLn(`is: true, `)
    }
    if (it.descriptor.descriptor.serverStreaming) {
        builder.appendLn(`os: true, `)
    }
    if (it.descriptor.descriptor.options) {
        builder.appendLn(`options: ${util.inspect(it.descriptor.descriptor.options)}, `)
    }
    builder.trimEnd(', \n')
    builder.ln().endBlock().trimEnd().appendLn(', ')
})