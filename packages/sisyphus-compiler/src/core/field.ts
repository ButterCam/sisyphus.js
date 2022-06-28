import {CodeBuilder} from '../code-builder'
import {ExtensionDescriptor, FieldDescriptor, MessageDescriptor} from '../descriptor'
import {ExtensionGeneratingState, FieldGeneratingState, OneofGeneratingState} from './state'

generate<FieldGeneratingState>('field', it => {
    it.generatedElements ++
    const builder = it.target

    builder.normalize().lineComment(...it.descriptor.comments())
    builder.normalize().document(it.descriptor.document())
    builder.append(it.descriptor.descriptor.jsonName || '')
    if (<any>it.descriptor.descriptor.label != 'LABEL_REQUIRED') {
        builder.append('?')
    }
    builder.append(': ')
    builder.append(type(it.target, it.descriptor))
    builder.trailingComment(it.descriptor.trailingComment())
    builder.ln()
})

generate<OneofGeneratingState>('oneof', it => {
    return
    // Disable oneof field generating
    // it.generatedElements ++
    // const builder = it.target
    //
    // builder.normalize().lineComment(...it.descriptor.comments())
    // builder.normalize().document(it.descriptor.document())
    // builder.append(it.descriptor.descriptor.name || '')
    // builder.append('?: ')
    // const index = it.descriptor.fields()
    // builder.append(it.descriptor.fields().map(it => `'${it.name()}'`).join(' | '))
    // builder.trailingComment(it.descriptor.trailingComment())
    // builder.ln()
})

generate<ExtensionGeneratingState>('extension', it => {
    it.generatedElements ++
    const builder = it.target

    builder.normalize().lineComment(...it.descriptor.comments())
    builder.normalize().document(it.descriptor.document())
    builder.append(it.descriptor.descriptor.jsonName || '')
    builder.append(': ')
    builder.append(type(it.target, it.descriptor))
    builder.trailingComment(it.descriptor.trailingComment())
    builder.ln()
})

function type(builder: CodeBuilder, field: FieldDescriptor | ExtensionDescriptor, protobuf?: boolean): string {
    let result = ''

    switch (field.descriptor.type) {
        case 'TYPE_DOUBLE':
        case 'TYPE_FLOAT':
        case 'TYPE_INT32':
        case 'TYPE_SINT32':
        case 'TYPE_UINT32':
        case 'TYPE_FIXED32':
        case 'TYPE_SFIXED32':
            result = 'number'
            break
        case 'TYPE_INT64':
        case 'TYPE_UINT64':
        case 'TYPE_SINT64':
        case 'TYPE_FIXED64':
        case 'TYPE_SFIXED64':
            result = builder.importManager.import('@sisyphus.js/runtime', 'long')
            break
        case 'TYPE_BOOL':
            result = 'boolean'
            break
        case 'TYPE_BYTES':
        case 'TYPE_STRING':
            result = 'string'
            break
        // case 'TYPE_GROUP':
        case 'TYPE_MESSAGE':
        case 'TYPE_ENUM':
            const wellknown = wellknownType(builder, field.descriptor.typeName ?? '', protobuf)
            if (wellknown !== null) {
                return wellknown
            }
            const [lib, target] =
                field.file().import(field.descriptor.typeName ?? '')
            if (target instanceof MessageDescriptor && target.mapEntry())
                return mapType(builder, target)
            const importName = builder.importManager.import(lib, target.importName())
            result = target.fullImportName(importName)
            break
        default:
            throw new Error(`Unsupported field type '${field.descriptor.type}'`)
    }

    switch (field.descriptor.label) {
        case 'LABEL_OPTIONAL':
        case 'LABEL_REQUIRED':
            break
        case 'LABEL_REPEATED':
            result += '[]'
            break
    }

    return result
}

function wellknownType(builder: CodeBuilder, typename: string, protobuf?: boolean): string | null {
    switch (typename) {
        case '.google.protobuf.NullValue':
            return 'null'
        default:
            return null
    }
}

function mapType(builder: CodeBuilder, message: MessageDescriptor, protobuf?: boolean): string {
    const key = type(builder, message.fields[0], protobuf)
    const value = type(builder, message.fields[1], protobuf)

    return `{[k: ${key}]: ${value}}`
}
