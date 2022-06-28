import {Duration, long} from '@sisyphus.js/runtime'
import {boxFun, unboxFun} from '../generate-utils'
import {ProtobufReader, ProtobufWriter, WireType} from '../protobuf'

export const write = function (writer: ProtobufWriter, value: Duration): void {
    const [seconds, nanos] = Duration.toPayload(value)
    writer.tag(1, WireType.VARINT)
        .int64(seconds)
    writer.tag(2, WireType.VARINT)
        .int32(nanos)
}

export const read = function (reader: ProtobufReader, size: number): Duration {
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

    return Duration.fromPayload([seconds, nanos])
}

export const box = boxFun(Duration.name)

export const unbox = unboxFun()