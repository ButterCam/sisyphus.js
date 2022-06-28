import util from 'util'
import {CodeBuilder} from '../code-builder'
import {ExtensionDescriptor, FieldDescriptor, MessageDescriptor} from '../descriptor'
import {FieldDescriptorProto} from '../google/protobuf/descriptor'
import {
    ExtensionProtobufGeneratingState,
    FieldProtobufDescriptorGeneratingState,
    MessageProtobufGeneratingState,
    MessageProtobufImplGeneratingState
} from './state'

generate<MessageProtobufGeneratingState>('message:proto', it => {
    if (it.descriptor.mapEntry()) return
    const builder = it.target

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
//    fields: [{kind: 'message', name: 'values', num: 1, type: () => Value.descriptor, repeat: true}]

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
        case FieldDescriptorProto.Type.MESSAGE:
            const type = desc.root().lookup(desc.descriptor.typeName ?? '')
            if (type instanceof MessageDescriptor && type.mapEntry()) {
                return 'map'
            } else {
                return 'message'
            }
        case FieldDescriptorProto.Type.ENUM:
            return 'enum'
        default:
            return 'scalar'
    }
}

function type(builder: CodeBuilder, field: FieldDescriptor | ExtensionDescriptor): string {
    switch (field.descriptor.type) {
        case FieldDescriptorProto.Type.DOUBLE:
            return `1 /* DOUBLE */`
        case FieldDescriptorProto.Type.FLOAT:
            return `2 /* FLOAT */`
        case FieldDescriptorProto.Type.INT32:
            return `5 /* INT32 */`
        case FieldDescriptorProto.Type.SINT32:
            return `17 /* SINT32 */`
        case FieldDescriptorProto.Type.UINT32:
            return `13 /* UINT32 */`
        case FieldDescriptorProto.Type.FIXED32:
            return `7 /* FIXED32 */`
        case FieldDescriptorProto.Type.SFIXED32:
            return `15 /* SFIXED32 */`
        case FieldDescriptorProto.Type.INT64:
            return `3 /* INT64 */`
        case FieldDescriptorProto.Type.UINT64:
            return `4 /* UINT64 */`
        case FieldDescriptorProto.Type.SINT64:
            return `18 /* SINT64 */`
        case FieldDescriptorProto.Type.FIXED64:
            return `6 /* FIXED64 */`
        case FieldDescriptorProto.Type.SFIXED64:
            return `16 /* SFIXED64 */`
        case FieldDescriptorProto.Type.BOOL:
            return `8 /* BOOL */`
        case FieldDescriptorProto.Type.BYTES:
            return `12 /* BYTES */`
        case FieldDescriptorProto.Type.STRING:
            return `9 /* STRING */`
        case FieldDescriptorProto.Type.MESSAGE:
        case FieldDescriptorProto.Type.ENUM:
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