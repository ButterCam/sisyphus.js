import {
    base64Decode,
    base64Encode,
    BoolValue,
    BytesValue,
    DoubleValue,
    FloatValue,
    Int32Value,
    Int64Value,
    StringValue,
    UInt32Value,
    UInt64Value
} from '@sisyphus.js/runtime'
import {boxFun, unboxFun} from '../generate-utils'
import {ProtobufReader, ProtobufWriter, WireType} from '../protobuf'

export const writeDoubleValue = writeFun('double', WireType.FIXED64)

export const readDoubleValue = readFun('double')

export const boxDoubleValue = boxFun(DoubleValue.name)

export const unboxDoubleValue = unboxFun()

export const writeFloatValue = writeFun('float', WireType.FIXED32)

export const readFloatValue = readFun('float')

export const boxFloatValue = boxFun(FloatValue.name)

export const unboxFloatValue = unboxFun()

export const writeInt64Value = writeFun('int64', WireType.VARINT)

export const readInt64Value = readFun('int64')

export const boxInt64Value = boxFun(Int64Value.name)

export const unboxInt64Value = unboxFun()

export const writeUInt64Value = writeFun('uint64', WireType.VARINT)

export const readUInt64Value = readFun('uint64')

export const boxUInt64Value = boxFun(UInt64Value.name)

export const unboxUInt64Value = unboxFun()

export const writeInt32Value = writeFun('int32', WireType.VARINT)

export const readInt32Value = readFun('int32')

export const boxInt32Value = boxFun(Int32Value.name)

export const unboxInt32Value = unboxFun()

export const writeUInt32Value = writeFun('uint32', WireType.VARINT)

export const readUInt32Value = readFun('uint32')

export const boxUInt32Value = boxFun(UInt32Value.name)

export const unboxUInt32Value = unboxFun()

export const writeBoolValue = writeFun('bool', WireType.VARINT)

export const readBoolValue = readFun('bool')

export const boxBoolValue = boxFun(BoolValue.name)

export const unboxBoolValue = unboxFun()

export const writeStringValue = writeFun('string', WireType.LENGTH_DELIMITED)

export const readStringValue = readFun('string')

export const boxStringValue = boxFun(StringValue.name)

export const unboxStringValue = unboxFun()

export const writeBytesValue = function (writer: ProtobufWriter, value: BytesValue): void {
    writer.tag(1, WireType.VARINT)
        .bytes(base64Decode(value))
}

export const readBytesValue = function (reader: ProtobufReader, size: number): BytesValue {
    const pos = reader.readBytes()
    let result: Uint8Array | null = null

    while (reader.readBytes() - pos < size) {
        const [field, wire] = reader.tag()
        if (field === undefined) break

        switch (field) {
            case 1:
                result = reader.bytes()
                break
            default:
                reader.skip(wire)
                break
        }
    }

    return base64Encode(result ?? new Uint8Array())
}

export const boxBytesValue = boxFun(BytesValue.name)

export const unboxBytesValue = unboxFun()

function writeFun<T>(type: string, wire: WireType): (writer: ProtobufWriter, value: T) => void {
    return function (writer: ProtobufWriter, value: T): void {
        const w = <any>writer
        writer.tag(1, wire)
        w[type](value)
    }
}

function readFun<T>(type: string): (reader: ProtobufReader, size: number) => T {
    return function (reader: ProtobufReader, size: number): T {
        const r = <any>reader
        const pos = reader.readBytes()
        let result: any = null

        while (reader.readBytes() - pos < size) {
            const [field, wire] = reader.tag()
            if (field === undefined) break

            switch (field) {
                case 1:
                    result = r[type]()
                    break
                default:
                    reader.skip(wire)
                    break
            }
        }

        return result
    }
}