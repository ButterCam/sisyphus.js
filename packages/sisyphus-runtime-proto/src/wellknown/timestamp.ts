import {long, Long, Timestamp} from '@sisyphus.js/runtime'
import {boxFun, unboxFun} from '../generate-utils'
import {ProtobufReader, ProtobufWriter, WireType} from '../protobuf'

export const write = function (writer: ProtobufWriter, value: Timestamp): void {
    const [seconds, nanos] = Timestamp.toPayload(value)

    writer.tag(1, WireType.VARINT)
        .int64(seconds >>> 0)
    writer.tag(2, WireType.VARINT)
        .int32(nanos)
}

export const read = function (reader: ProtobufReader, size: number): Timestamp {
    const pos = reader.readBytes()
    let seconds: long = 0, nanos: number = 0

    while (reader.readBytes() - pos < size) {
        const [field, wire] = reader.tag()
        if (field === undefined) break

        switch (field) {
            case 1:
                seconds = reader.int64()
                break
            case 2:
                nanos = reader.int32()
                break
            default:
                reader.skip(wire)
                break
        }
    }

    return Timestamp.fromPayload([Long.toNumber(seconds), nanos])
}

export const box = boxFun(Timestamp.name)

export const unbox = unboxFun()