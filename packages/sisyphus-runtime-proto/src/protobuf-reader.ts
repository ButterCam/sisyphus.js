import {Int64, long, UInt64} from '@sisyphus.js/runtime'
import {ProtobufReader, WireType} from './protobuf'
import {InputStream} from './stream'
import {decodeUtf8} from './utf8'
import {decodeZigZag32, decodeZigZag64, readVarint, readVarint32, readVarint64} from './varint'

function readBytes(input: InputStream, size: number): Uint8Array {
    const buffer = new Uint8Array(size)
    if (input.read(buffer) != size) {
        throw new Error('Unexpected EOF to read bytes')
    }
    return buffer
}


export class ProtobufReaderImpl implements ProtobufReader {
    input: InputStream
    readonly startPos: number

    readonly buffer = new ArrayBuffer(8)
    readonly buff4 = new Uint8Array(this.buffer, 0, 4)
    readonly buff8 = new Uint8Array(this.buffer)
    readonly bufferView = new DataView(this.buffer)

    constructor(input: InputStream) {
        this.input = input
        this.startPos = input.pos()
    }

    readBytes(): number {
        return this.input.pos() - this.startPos
    }

    bool(): boolean {
        return this.uint32() != 0
    }

    bytes(): Uint8Array {
        const len = this.uint32()
        return readBytes(this.input, len)
    }

    double(): number {
        if (this.input.read(this.buff8) != 8) {
            throw new Error('Unexpected EOF to read double')
        }
        return this.bufferView.getFloat64(0, true)
    }

    fixed32(): number {
        if (this.input.read(this.buff4) != 4) {
            throw new Error('Unexpected EOF to read fixed32')
        }
        return this.bufferView.getUint32(0, true)
    }

    fixed64(): long {
        if (this.input.read(this.buff8) != 8) {
            throw new Error('Unexpected EOF to read fixed64')
        }
        return UInt64.toLong([this.bufferView.getUint32(0, true), this.bufferView.getUint32(4, true)])
    }

    float(): number {
        if (this.input.read(this.buff4) != 4) {
            throw new Error('Unexpected EOF to read float')
        }
        return this.bufferView.getFloat32(0, true)
    }

    int32(): number {
        return readVarint32(this.input) | 0
    }

    int64(): long {
        return Int64.toLong(UInt64.toInt64(readVarint64(this.input)))
    }

    sfixed32(): number {
        if (this.input.read(this.buff4) != 4) {
            throw new Error('Unexpected EOF to read sfixed32')
        }
        return this.bufferView.getInt32(0, true)
    }

    sfixed64(): long {
        if (this.input.read(this.buff8) != 8) {
            throw new Error('Unexpected EOF to read sfixed64')
        }
        return Int64.toLong(UInt64.toInt64([this.bufferView.getUint32(0, true), this.bufferView.getUint32(4, true)]))
    }

    sint32(): number {
        return decodeZigZag32(this.int32()) | 0
    }

    sint64(): long {
        return decodeZigZag64(readVarint64(this.input))
    }

    skip(type: WireType): Uint8Array {
        switch (type) {
            case WireType.VARINT:
                return readVarint(this.input)
            case WireType.FIXED64:
                return readBytes(this.input, 8)
            case WireType.LENGTH_DELIMITED:
                return readBytes(this.input, this.int32())
            case WireType.START_GROUP:
                throw new Error('group is not support')
            case WireType.FIXED32:
                return readBytes(this.input, 4)
            default:
                throw new Error(`wrong wire type '${type}'`)
        }
    }

    string(): string {
        return decodeUtf8(this.bytes())
    }

    tag(): [number | undefined, WireType] {
        try {
            const tag = this.uint32()
            return [tag >>> 3, tag & 7]
        } catch (e) {
            return [undefined, 0]
        }
    }

    uint32(): number {
        return readVarint32(this.input) >>> 0
    }

    uint64(): long {
        return UInt64.toLong(readVarint64(this.input))
    }
}