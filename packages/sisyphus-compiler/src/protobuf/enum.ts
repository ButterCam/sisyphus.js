import {
    EnumProtobufGeneratingState,
    EnumProtobufImplGeneratingState,
    EnumValueProtobufDescriptorGeneratingState
} from './state'

generate<EnumProtobufGeneratingState>('enum:proto', it => {
    const builder = it.target
    it.generatedElements++

    builder.normalize().beginBlock(`namespace ${it.descriptor.enumName()}`)

    builder.normalize().appendLn(`let descriptor: ${builder.importManager.import('@sisyphus.js/runtime.proto', 'EnumDescriptor')}`)

    builder.endBlock()
})

generate<EnumProtobufImplGeneratingState>('enum:proto:impl', it => {
    const builder = it.target
    it.generatedElements++

    let importName = builder.importManager.import(`/${it.descriptor.file().tsModulePath()}`, it.descriptor.importName())
    builder.normalize().beginBlock(`${it.descriptor.fullImportName(importName)}.descriptor =`)

    builder.normalize().appendLn(`name: '.${it.descriptor.fullname()}',`)
    builder.normalize().beginBlock(`enum:`)

    for (let value of it.descriptor.values) {
        advance({
            kind: 'enumValue:proto:descriptor', parent: it, descriptor: value, target: builder
        })
    }

    builder.normalize().endBlock()

    if (it.descriptor.descriptor.options) {
        builder.append(`options: ${JSON.stringify(it.descriptor.descriptor.options)}, `)
    }

    builder.endBlock()
})

generate<EnumValueProtobufDescriptorGeneratingState>('enumValue:proto:descriptor', it => {
    const builder = it.target
    it.generatedElements++

    builder.normalize().appendLn(`${it.descriptor.number()}: '${it.descriptor.name()}',`)
    builder.normalize().appendLn(`${it.descriptor.name()}: ${it.descriptor.number()},`)
})