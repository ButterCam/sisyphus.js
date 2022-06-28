import {long} from '@sisyphus.js/runtime'
import {Any} from '@sisyphus.js/runtime/lib/google/protobuf/any'
import {ProtobufReader, ProtobufWriter, WireType} from '../protobuf'
import {readMessage} from '../reflection-reader'
import {writeMessage} from '../reflection-writer'

export const write = function (writer: ProtobufWriter, value: Any): void {
    const type = '.' + value['@type'].substring(value['@type'].lastIndexOf('/'))
    const descriptor = protobufDefinition(type)
    if (descriptor === undefined) throw new Error(`Type info for '${type}' not found`)

    writer.tag(1, WireType.LENGTH_DELIMITED)
        .string(value['@type'])
        .tag(2, WireType.LENGTH_DELIMITED)
    if (descriptor.unbox != null) {
        writeMessage(writer.beginLd(), descriptor, descriptor.unbox(value))
    } else {
        writeMessage(writer.beginLd(), descriptor, value)
    }
    writer.endLd()
}

export const read = function (reader: ProtobufReader, size: number): Any {
    const pos = reader.readBytes()
    let seconds: long = 0, nanos: number = 0

    const [field, wire] = reader.tag()
    if (field !== 1) throw new Error('Any message must be start with @type field')
    if (wire !== WireType.LENGTH_DELIMITED) throw new Error('@type field must be string')

    const typeUrl = reader.string()
    const type = '.' + typeUrl.substring(typeUrl.lastIndexOf('/'))
    const descriptor = protobufDefinition(type)
    if (descriptor === undefined) throw new Error(`Type info for '${type}' not found`)

    const result = readMessage(reader, descriptor, size - (reader.readBytes() - pos))
    if (descriptor.box != null) {
        return descriptor.box(result)
    }

    return {
        '@type': typeUrl,
        ...result
    }
}