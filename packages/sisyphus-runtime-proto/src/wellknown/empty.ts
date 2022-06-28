import {Empty} from '@sisyphus.js/runtime'
import {ProtobufReader, ProtobufWriter} from '../protobuf'

export const write = function (writer: ProtobufWriter, value: Empty): void {
}

export const read = function (reader: ProtobufReader, size: number): Empty {
    const pos = reader.readBytes()

    while (reader.readBytes() - pos < size) {
        const [field, wire] = reader.tag()
        if (field === undefined) break
        reader.skip(wire)
    }

    return {}
}
