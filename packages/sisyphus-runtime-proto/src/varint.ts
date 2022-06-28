import {Int64, long, UInt64, uint64} from '@sisyphus.js/runtime'
import {InputStream} from './stream'

const buffer = new Uint8Array(1)

function readByte(input: InputStream): number {
    if (input.read(buffer) == 0)
        throw new Error('Unexpected EOF to read varint')
    return buffer[0]
}

export function readVarint(input: InputStream): Uint8Array {
    const result: number[] = []
    while (true) {
        const byte = readByte(input)
        if((byte & 0x80) == 0) {
            result.push(byte)
            break
        } else {
            result.push(byte)
        }
    }
    return Uint8Array.from(result)
}

/**
 * Read a varint and fill to uint64, you should convert it to
 * signed int64 by yourself after read if necessary.
 */
export function readVarint64(input: InputStream): uint64 {
    let lowBits = 0
    let highBits = 0

    for (let shift = 0; shift < 28; shift += 7) {
        const b = readByte(input)
        lowBits |= (b & 0x7F) << shift
        if ((b & 0x80) == 0) {
            return [lowBits, highBits]
        }
    }

    const middleByte = readByte(input)

    // last four bits of the first 32 bit number
    lowBits |= (middleByte & 0x0F) << 28

    // 3 upper bits are part of the next 32 bit number
    highBits = (middleByte & 0x70) >> 4

    if ((middleByte & 0x80) == 0) {
        return [lowBits, highBits]
    }

    for (let shift = 3; shift <= 31; shift += 7) {
        const b = readByte(input)
        highBits |= (b & 0x7F) << shift
        if ((b & 0x80) == 0) {
            return [lowBits, highBits]
        }
    }

    throw new Error('invalid varint')
}

/**
 * Convert a long to bytes data as uint64, if 'value' is negative,
 * it will convert to int64, otherwise convert to uint64.
 */
function bytesOfLong(value: long): uint64 {
    switch (typeof value) {
        case 'number':
            if (value < 0) {
                return Int64.toUInt64(Int64.fromLong(value))
            } else {
                return UInt64.fromLong(value)
            }
        case 'string':
            if (value[0] === '-') {
                return Int64.toUInt64(Int64.parse(value))
            } else {
                return UInt64.parse(value)
            }
        default:
            throw new Error(`invalid long value ${value}`)
    }
}

/**
 * Write a long as varint to buffer.
 */
export function writeVarint64(value: long): Uint8Array {
    return writeVarintUInt64(bytesOfLong(value))
}

/**
 * Read a varint and fill to uint32, you should convert it to
 * signed int32 by yourself after read if necessary.
 */
export function readVarint32(input: InputStream): number {
    let result = 0
    let count = 0

    do {
        const byte = readByte(input) & 0xFF
        result |= (byte & 0x7F) << (7 * count)
        count++
        if ((byte & 0x80) == 0) break
    } while (true)

    return result >>> 0
}

/**
 * Write a number as varint to buffer, if 'value' is negative.
 */
export function writeVarint32(value: number): Uint8Array {
    const buf = new Uint8Array(varintSize32(value))
    for (let i = 0; i < buf.byteLength; i++) {
        buf[i] = (value >>> (7 * i)) & 0x7F | 0x80
    }
    buf[buf.byteLength - 1] &= 0x7F
    return buf
}

/**
 * Decode an uint32 to int32 with zigzag format.
 */
export function decodeZigZag32(value: number): number {
    return (value >>> 1) ^ -(value & 1)
}

/**
 * Decode an uint64 to long(int64) with zigzag format.
 */
export function decodeZigZag64(value: uint64): long {
    let [lo, hi] = value
    const s = -(lo & 1)
    lo = ((lo >>> 1 | (hi & 1) << 31) ^ s)
    hi = (hi >>> 1 ^ s)
    return Int64.toLong(UInt64.toInt64([lo, hi]))
}

/**
 * Encode an int32 to uint32 with zigzag format.
 */
export function encodeZigZag32(value: number): number {
    return ((value << 1) ^ (value >> 31)) >>> 0
}

/**
 * Encode an long(int64) to uint64 with zigzag format.
 */
export function encodeZigZag64(value: long): uint64 {
    let [lo, hi] = Int64.toUInt64(Int64.fromLong(value))
    const s = hi >> 31
    hi = ((hi << 1) | (lo >>> 31)) ^ s
    lo = (lo << 1) ^ s
    return UInt64.normalize([lo, hi])
}

/**
 * Calculate bytes length of an uint32 or int32 converted to a varint.
 */
export function varintSize32(value: number): number {
    return Math.max(1, Math.ceil((32 - numberOfLeadingZeros32(value)) / 7))
}

/**
 * Calculate bytes length of a long converted to a varint.
 */
export function varintSize64(value: long): number {
    return varintSizeUInt64(bytesOfLong(value))
}

/**
 * Calculate bytes length of an uint64 converted to a varint.
 */
export function varintSizeUInt64(value: uint64): number {
    return Math.max(1, Math.ceil((64 - numberOfLeadingZeros64(value)) / 7))
}

/**
 * Write an uint32 as varint to buffer, if 'value' is negative.
 */
export function writeVarintUInt64(value: uint64): Uint8Array {
    const buf = new Uint8Array(varintSizeUInt64(value))
    let [lo, hi] = value

    for (let i = 0; i < buf.byteLength; i++) {
        buf[i] = lo & 0x7F | 0x80
        lo >>>= 7
        lo |= (hi & 0x7F) << 25
        hi >>>= 7
    }
    buf[buf.byteLength - 1] &= 0x7F
    return buf
}

function numberOfLeadingZeros32(value: number): number {
    // value | 0 -> int
    // -1 -> 0xfffffff
    // -1 >>> 0
    // 0xfffffff

    if (value <= 0)
        return value == 0 ? 32 : 0
    let n = 31
    if (value >= 1 << 16) {
        n -= 16
        value >>>= 16
    }
    if (value >= 1 << 8) {
        n -= 8
        value >>>= 8
    }
    if (value >= 1 << 4) {
        n -= 4
        value >>>= 4
    }
    if (value >= 1 << 2) {
        n -= 2
        value >>>= 2
    }
    return n - (value >>> 1)
}

function numberOfLeadingZeros64(value: uint64): number {
    const [lo, hi] = value
    const hiZero = numberOfLeadingZeros32(hi)
    if (hiZero != 32) {
        return hiZero
    }
    return hiZero + numberOfLeadingZeros32(lo)
}
