import {ServiceGeneratingState, ServiceMethodGeneratingState} from './state'

generate<ServiceGeneratingState>('service', it => {
    it.generatedElements ++
    const builder = it.target

    builder.normalize().lineComment(...it.descriptor.comments())
    builder.normalize().document(it.descriptor.document())
    builder.beginBlock(`export interface ${it.descriptor.className()}`)
    for (let method of it.descriptor.methods) {
        advance<ServiceMethodGeneratingState>({
            kind: 'method', parent: it, descriptor: method, target: builder
        })
    }

    builder.endBlock(it.descriptor.trailingComment())

    builder.beginBlock(`export namespace ${it.descriptor.className()}`)

    builder.normalize().appendLn(`export const name = '${it.descriptor.fullname()}'`)

    builder.endBlock()
})

generate<ServiceMethodGeneratingState>('method', it => {
    it.generatedElements ++
    const builder = it.target

    builder.normalize().lineComment(...it.descriptor.comments())
    builder.normalize().document(it.descriptor.document())

    const [inputLib, inputTarget] =
        it.descriptor.file().import(it.descriptor.descriptor.inputType!)
    const [outputLib, outputTarget] =
        it.descriptor.file().import(it.descriptor.descriptor.outputType!)
    const inputImportName = builder.importManager.import(inputLib, inputTarget.importName())
    const outputImportName = builder.importManager.import(outputLib, outputTarget.importName())

    let flow: string | undefined
    if (it.descriptor.descriptor.clientStreaming || it.descriptor.descriptor.serverStreaming) {
        flow = builder.importManager.import('@sisyphus.js/runtime', 'Flow')
    }

    builder.append(`${it.descriptor.methodName()}(input: `)
    if (it.descriptor.descriptor.clientStreaming) {
        builder.append(`${flow}<`)
    }
    builder.append(inputTarget.fullImportName(inputImportName))
    if (it.descriptor.descriptor.clientStreaming) {
        builder.append(`>`)
    }
    builder.append(`): `)
    if (it.descriptor.descriptor.serverStreaming) {
        builder.append(`${flow}<`)
    } else {
        builder.append(`Promise<`)
    }
    builder.append(outputTarget.fullImportName(outputImportName))
    builder.append(`>`)
})