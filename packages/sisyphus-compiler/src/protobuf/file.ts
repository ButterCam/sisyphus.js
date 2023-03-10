import {CodeBuilder} from '../code-builder'
import {FileHeaderGeneratingState} from '../core/state'
import {SimpleImportManager} from '../import-manager'
import {FilesGeneratingState} from '../state'
import {
    EnumProtobufGeneratingState,
    EnumProtobufImplGeneratingState,
    ExtensionProtobufGeneratingState,
    FileProtobufGeneratingState,
    MessageProtobufGeneratingState,
    MessageProtobufImplGeneratingState
} from './state'

generate<FilesGeneratingState>('files', it => {
    for (let file of it.descriptor.files) {
        if (it.src.length != 0 && !it.src.includes(file.name())) {
            continue
        }
        const builder = new CodeBuilder(new SimpleImportManager('/' + file.tsModulePath('proto'), it.lib))
        const elements = advance<FileProtobufGeneratingState>({
            kind: 'file:proto', parent: it, descriptor: file, target: builder
        })
        if (elements > 0) {
            it.target.push({
                name: file.tsFile('proto'),
                content: builder.build()
            })
        }
    }
})

generate<FileProtobufGeneratingState>('file:proto', it => {
    const builder = it.target
    const coreModule = builder.importManager.import(`/${it.descriptor.tsModulePath()}`)
    advance<FileHeaderGeneratingState<'proto'>>({
        kind: 'file:header', parent: it, descriptor: 'proto', target: builder
    })

    builder.beginBlock(`declare module '${coreModule}'`)

    for (let message of it.descriptor.messages) {
        advance<MessageProtobufGeneratingState>({
            kind: 'message:proto', parent: it, descriptor: message, target: builder
        })
    }

    for (let enumType of it.descriptor.enums) {
        advance<EnumProtobufGeneratingState>({
            kind: 'enum:proto', parent: it, descriptor: enumType, target: builder
        })
    }

    builder.endBlock()

    builder.normalize().appendLn(`export * from '${coreModule}'`)

    for (let message of it.descriptor.messages) {
        advance<MessageProtobufImplGeneratingState>({
            kind: 'message:proto:impl', parent: it, descriptor: message, target: builder
        })
    }

    for (let enumType of it.descriptor.enums) {
        advance<EnumProtobufImplGeneratingState>({
            kind: 'enum:proto:impl', parent: it, descriptor: enumType, target: builder
        })
    }

    for (let extension of it.descriptor.extensions) {
        advance<ExtensionProtobufGeneratingState>({
            kind: 'extension:proto', parent: it, descriptor: extension, target: builder
        })
    }
})
