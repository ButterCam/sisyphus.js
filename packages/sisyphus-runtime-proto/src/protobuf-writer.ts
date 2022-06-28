import {Int64, long, UInt64} from '@sisyphus.js/runtime'
import {FragmentOutputStream} from './fragment-stream'
import {ProtobufWriter, WireType} from './protobuf'
import {encodeUtf8} from './utf8'
import {encodeZigZag32, encodeZigZag64, writeVarint32, writeVarint64, writeVarintUInt64} from './varint'

export class ProtobufWriterImpl implements ProtobufWriter {
    readonly outputStream = new FragmentOutputStream()

    result(): Uint8Array {
        return this.outputStream.join()
    }

    beginLd(): ProtobufWriter {
        this.outputStream.beginLd()
        return this
    }

    endLd(): ProtobufWriter {
        this.outputStream.endLd()
        return this
    }

    bool(value: boolean): ProtobufWriter {
        this.uint32(value ? 1 : 0)
        return this
    }

    bytes(value: Uint8Array): ProtobufWriter {
        this.uint32(value.byteLength)
        this.raw(value)
        return this
    }

    double(value: number): ProtobufWriter {
        const chunk = new Uint8Array(8)
        new DataView(chunk.buffer).setFloat64(0, value, true)
        return this.raw(chunk)
    }

    fixed32(value: number): ProtobufWriter {
        const chunk = new Uint8Array(4)
        new DataView(chunk.buffer).setUint32(0, value, true)
        return this.raw(chunk)
    }

    fixed64(value: long): ProtobufWriter {
        const chunk = new Uint8Array(8)
        const view = new DataView(chunk.buffer)
        const [lo, hi] = UInt64.fromLong(value)
        view.setInt32(0, lo, true)
        view.setInt32(4, hi, true)
        return this.raw(chunk)
    }

    float(value: number): ProtobufWriter {
        const chunk = new Uint8Array(4)
        new DataView(chunk.buffer).setFloat32(0, value, true)
        return this.raw(chunk)
    }

    int32(value: number): ProtobufWriter {
        this.raw(writeVarint32(value))
        return this
    }

    int64(value: long): ProtobufWriter {
        this.raw(writeVarint64(value))
        return this
    }

    raw(buffer: Uint8Array): ProtobufWriter {
        this.outputStream.write(buffer)
        return this
    }

    sfixed32(value: number): ProtobufWriter {
        const chunk = new Uint8Array(4)
        new DataView(chunk.buffer).setInt32(0, value, true)
        return this.raw(chunk)
    }

    sfixed64(value: long): ProtobufWriter {
        const chunk = new Uint8Array(8)
        const view = new DataView(chunk.buffer)
        const [lo, hi] = Int64.toUInt64(Int64.fromLong(value))
        view.setInt32(0, lo, true)
        view.setInt32(4, hi, true)
        return this.raw(chunk)
    }

    sint32(value: number): ProtobufWriter {
        this.raw(writeVarint32(encodeZigZag32(value)))
        return this
    }

    sint64(value: long): ProtobufWriter {
        this.raw(writeVarintUInt64(encodeZigZag64(value)))
        return this
    }

    string(value: string): ProtobufWriter {
        this.bytes(encodeUtf8(value))
        return this
    }

    tag(field: number, wire: WireType): ProtobufWriter {
        this.uint32(field << 3 | wire)
        return this
    }

    uint32(value: number): ProtobufWriter {
        this.raw(writeVarint32(value))
        return this
    }

    uint64(value: long): ProtobufWriter {
        this.raw(writeVarint64(value))
        return this
    }
}