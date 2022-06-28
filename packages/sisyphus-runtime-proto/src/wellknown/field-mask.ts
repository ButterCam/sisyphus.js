import {FieldMask} from '@sisyphus.js/runtime'
import {boxFun, unboxFun} from '../generate-utils'
import {ProtobufReader, ProtobufWriter, WireType} from '../protobuf'

export const write = function (writer: ProtobufWriter, value: FieldMask): void {
    for (const path in FieldMask.toPayload(value)) {
        writer.tag(1, WireType.LENGTH_DELIMITED).string(path)
    }
}

export const read = function (reader: ProtobufReader, size: number): FieldMask {
    const pos = reader.readBytes()

    const result: string[] = []

    while (reader.readBytes() - pos < size) {
        const [field, wire] = reader.tag()
        if (field === undefined) break

        switch (field) {
            case 1:
                result.push(reader.string())
                break
            default:
                reader.skip(wire)
                break
        }
    }

    return result.join(', ')
}

export const box = boxFun(FieldMask.name)

export const unbox = unboxFun()
