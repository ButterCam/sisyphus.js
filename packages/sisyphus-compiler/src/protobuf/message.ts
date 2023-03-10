import util from 'util'
import {CodeBuilder} from '../code-builder'
import {ExtensionDescriptor, FieldDescriptor, MessageDescriptor} from '../descriptor'
import {
    ExtensionProtobufGeneratingState,
    FieldProtobufDescriptorGeneratingState,
    MessageProtobufGeneratingState,
    MessageProtobufImplGeneratingState
} from './state'

generate<MessageProtobufGeneratingState>('message:proto', it => {
    if (it.descriptor.mapEntry()) return
    const builder = it.target
    it.generatedElements++

    builder.beginBlock(`namespace ${it.descriptor.interfaceName()}`)

    builder.normalize().appendLn(`let descriptor: ${builder.importManager.import('@sisyphus.js/runtime.proto', 'MessageDescriptor')}<${it.descriptor.interfaceName()}>`)

    builder.normalize().appendLn(`function binaryify(v: ${it.descriptor.interfaceName()}): Uint8Array`)

    builder.normalize().appendLn(`function parse(buffer: Uint8Array): ${it.descriptor.interfaceName()}`)

    for (let message of it.descriptor.messages) {
        advance({
            kind: 'message:proto', parent: it, descriptor: message, target: builder
        })
    }

    for (let enumType of it.descriptor.enums) {
        advance({
            kind: 'enum:proto', parent: it, descriptor: enumType, target: builder
        })
    }
    builder.endBlock()
})

generate<MessageProtobufImplGeneratingState>('message:proto:impl', it => {
    if (it.descriptor.mapEntry()) return
    it.generatedElements++

    const builder = it.target
    let importName = builder.importManager.import(`/${it.descriptor.file().tsModulePath()}`, it.descriptor.importName())
    builder.normalize().beginBlock(`${it.descriptor.fullImportName(importName)}.descriptor = protobufDefinition({`)
    builder.normalize().appendLn(`name: '.${it.descriptor.fullname()}',`)
    if (it.descriptor.fields.length > 1) {
        builder.normalize().appendLn(`fields: [`).indent()
    } else {
        builder.normalize().append(`fields: [`)
    }

    for (let value of it.descriptor.fields) {
        advance({
            kind: 'field:proto:descriptor', parent: it, descriptor: value, target: builder
        })
        builder.append(', ').normalize()
    }
    builder.trimEnd(', \n')

    if (it.descriptor.fields.length > 1) {
        builder.ln().dedent().appendLn('],')
    } else {
        builder.appendLn(`],`)
    }

    advance({
        kind: 'message:proto:desc', parent: it, descriptor: it.descriptor, target: builder
    })

    if (it.descriptor.descriptor.options) {
        builder.append(`options: ${JSON.stringify(it.descriptor.descriptor.options)}, `)
    }

    builder.trimEnd(', \n')

    builder.endBlock().trimEnd().appendLn(')')

    const binaryifyFun = builder.importManager.import('@sisyphus.js/runtime.proto/lib/message', 'binaryifyFun')
    const parseFun = builder.importManager.import('@sisyphus.js/runtime.proto/lib/message', 'parseFun')
    builder.normalize().appendLn(`${it.descriptor.fullImportName(importName)}.binaryify = ${binaryifyFun}(${it.descriptor.fullImportName(importName)}.descriptor)`)
    builder.normalize().appendLn(`${it.descriptor.fullImportName(importName)}.parse = ${parseFun}(${it.descriptor.fullImportName(importName)}.descriptor)`)

    for (let message of it.descriptor.messages) {
        advance({
            kind: 'message:proto:impl', parent: it, descriptor: message, target: builder
        })
    }

    for (let enumType of it.descriptor.enums) {
        advance({
            kind: 'enum:proto:impl', parent: it, descriptor: enumType, target: builder
        })
    }

    for (let extension of it.descriptor.extensions) {
        advance({
            kind: 'extension:proto', parent: it, descriptor: extension, target: builder
        })
    }
})

generate<FieldProtobufDescriptorGeneratingState>('field:proto:descriptor', it => {
    const builder = it.target
    it.generatedElements++

    const kind = fieldKind(it.descriptor)
    builder.append(`{kind: '${kind}', name: '${it.descriptor.name()}', num: ${it.descriptor.descriptor.number}, `)

    if (kind === 'map') {
        const entry = <MessageDescriptor>it.descriptor.root().lookup(it.descriptor.descriptor.typeName ?? '')
        const [key, value] = mapType(builder, entry)
        builder.append(`key: ${key}, `)
        builder.append(`value: ${value}, `)
    } else {
        builder.append(`type: ${type(builder, it.descriptor)}, `)
    }

    switch (kind) {
        case 'message':
            if (it.descriptor.packed() !== undefined) {
                builder.append(`repeat: true, `)
            }
            break
        case 'enum':
        case 'scalar':
            if (it.descriptor.packed() === true) {
                builder.append(`repeat: 0, `)
            } else if (it.descriptor.packed() === false) {
                builder.append(`repeat: 1, `)
            }
            break
    }

    if (it.descriptor.descriptor.options) {
        builder.append(`options: ${util.inspect(it.descriptor.descriptor.options)}, `)
    }

    builder.trimEnd(', ').append('}')
})

generate<ExtensionProtobufGeneratingState>('extension:proto', it => {
    const builder = it.target
    it.generatedElements++

    builder.importManager.import('@sisyphus.js/runtime.proto')

    const kind = fieldKind(it.descriptor)
    builder.normalize().append(`extendDefinition('${it.descriptor.descriptor.extendee}', `)

    advance({
        kind: 'field:proto:descriptor', parent: it, descriptor: it.descriptor, target: builder
    })

    builder.appendLn(`)`)
})

function fieldKind(desc: FieldDescriptor | ExtensionDescriptor): string {
    switch (desc.descriptor.type) {
        case 'TYPE_MESSAGE':
            const type = desc.root().lookup(desc.descriptor.typeName ?? '')
            if (type instanceof MessageDescriptor && type.mapEntry()) {
                return 'map'
            } else {
                return 'message'
            }
        case 'TYPE_ENUM':
            return 'enum'
        default:
            return 'scalar'
    }
}

function type(builder: CodeBuilder, field: FieldDescriptor | ExtensionDescriptor): string {
    switch (field.descriptor.type) {
        case 'TYPE_DOUBLE':
            return `1 /* DOUBLE */`
        case 'TYPE_FLOAT':
            return `2 /* FLOAT */`
        case 'TYPE_INT32':
            return `5 /* INT32 */`
        case 'TYPE_SINT32':
            return `17 /* SINT32 */`
        case 'TYPE_UINT32':
            return `13 /* UINT32 */`
        case 'TYPE_FIXED32':
            return `7 /* FIXED32 */`
        case 'TYPE_SFIXED32':
            return `15 /* SFIXED32 */`
        case 'TYPE_INT64':
            return `3 /* INT64 */`
        case 'TYPE_UINT64':
            return `4 /* UINT64 */`
        case 'TYPE_SINT64':
            return `18 /* SINT64 */`
        case 'TYPE_FIXED64':
            return `6 /* FIXED64 */`
        case 'TYPE_SFIXED64':
            return `16 /* SFIXED64 */`
        case 'TYPE_BOOL':
            return `8 /* BOOL */`
        case 'TYPE_BYTES':
            return `12 /* BYTES */`
        case 'TYPE_STRING':
            return `9 /* STRING */`
        case 'TYPE_MESSAGE':
        case 'TYPE_ENUM':
            const [lib, target] =
                field.file().import(field.descriptor.typeName ?? '', 'proto')
            const importName = builder.importManager.import(lib, target.importName())
            return `() => ${target.fullImportName(importName)}.descriptor`
        default:
            throw new Error(`Unsupported field type '${field.descriptor.type}'`)
    }
}

function mapType(builder: CodeBuilder, message: MessageDescriptor): [string, string] {
    const key = type(builder, message.fields[0])
    const value = type(builder, message.fields[1])

    return [key, value]
}