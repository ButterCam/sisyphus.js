import {long} from './long'

export type int64 = [boolean, number, number]

export type uint64 = [number, number]

export namespace UInt64 {
    const doubleView = new Float64Array(1)
    const uintView = new Uint32Array(doubleView.buffer)

    export function parse(value: string): uint64 {
        const [signed, lo, hi] = int64fromString(value)
        if (signed) throw new Error('uint64 can not be signed.')
        if (hi > 0xFFFFFFFF) throw new Error(`value(${value}) too big for uint64`)

        return normalize([lo, hi])
    }

    export function toString(value: uint64): string {
        const [lo, hi] = normalize(value)
        return int64toString(lo, hi)
    }

    export function toDouble(value: uint64): number {
        uintView[0] = value[0]
        uintView[1] = value[1]
        return doubleView[0]
    }

    export function fromDouble(value: number): uint64 {
        doubleView[0] = value
        return [uintView[0], uintView[1]]
    }

    export function fromLong(value: long): uint64 {
        return parse(value.toString())
    }

    export function toLong(value: uint64): long {
        const [lo, hi] = normalize(value)
        if (hi == 0) {
            return lo
        } else {
            return toString(value)
        }
    }

    export function plus(left: uint64, right: uint64): uint64 {
        left = normalize(left)
        right = normalize(right)

        let lo = left[0] + right[0]
        let hi = left[1] + right[1]
        if (lo >= TWO_PWR_32_DBL) {
            hi = hi + ((lo / TWO_PWR_32_DBL) | 0)
            lo = lo % TWO_PWR_32_DBL
        }
        if (hi >= TWO_PWR_32_DBL) {
            hi = hi % TWO_PWR_32_DBL
        }
        return [lo, hi]
    }

    export function minus(left: uint64, right: uint64): uint64 {
        let lo = left[0] - right[0]
        let hi = left[1] - right[1]

        if (lo < 0) {
            hi -= 1
            lo = TWO_PWR_32_DBL + lo
        }
        if (hi < 0) {
            hi = TWO_PWR_32_DBL + hi
        }
        return [lo, hi]
    }

    export function normalize(value: uint64): uint64 {
        return [value[0] >>> 0, value[1] >>> 0]
    }

    export function toInt64(value: uint64): int64 {
        const [lo, hi] = normalize(value)
        if ((hi >>> 31) > 0) {
            const result = minus([0, 0x80000000], [lo, hi - 0x80000000])
            return [true, ...result]
        } else {
            return [false, lo, hi]
        }
    }
}

export namespace Int64 {
    export function parse(value: string): int64 {
        const [signed, lo, hi] = int64fromString(value)
        if (!signed && hi > 0x7FFFFFFF) throw new Error(`value(${value}) too big for int64`)
        if (signed && hi > 0x80000000) throw new Error(`value(${value}) too big for int64`)
        return [signed, lo, hi]
    }

    export function toString(value: int64): string {
        const [signed, lo, hi] = value
        return (signed ? '-' : '') + int64toString(lo, hi)
    }

    export function toUInt64(value: int64): uint64 {
        if (!value[0]) return [value[1], value[2]]
        const result = UInt64.minus([0, 0x80000000], [value[1], value[2]])
        return [result[0], result[1] + 0x80000000]
    }

    export function fromLong(value: long): int64 {
        return parse(value.toString())
    }

    export function toLong(value: int64): long {
        const [sign, lo, hi] = value
        if (hi == 0) {
            return sign ? -lo : lo
        } else {
            return toString(value)
        }
    }

    export function plus(left: int64, right: int64): int64 {
        return UInt64.toInt64(UInt64.plus(toUInt64(left), toUInt64(right)))
    }

    export function minus(left: int64, right: int64): int64 {
        return UInt64.toInt64(UInt64.minus(toUInt64(left), toUInt64(right)))
    }
}

const TWO_PWR_32_DBL = (1 << 16) * (1 << 16)

function int64fromString(dec: string): [boolean, number, number] {
    const signed = dec[0] == '-'
    if (signed)
        dec = dec.slice(1)

    // Work 6 decimal digits at a time, acting like we're converting base 1e6
    // digits to binary. This is safe to do with floating point math because
    // Number.isSafeInteger(ALL_32_BITS * 1e6) == true.
    const base = 1e6
    let lowBits = 0
    let highBits = 0

    function add1e6digit(begin: number, end?: number) {
        // Note: Number('') is 0.
        const digit1e6 = Number(dec.slice(begin, end))
        if (digit1e6 == 0) return
        highBits *= base
        lowBits = lowBits * base + digit1e6
        // Carry bits from lowBits to
        if (lowBits >= TWO_PWR_32_DBL) {
            highBits = highBits + ((lowBits / TWO_PWR_32_DBL) | 0)
            lowBits = lowBits % TWO_PWR_32_DBL
        }
    }

    add1e6digit(-24, -18)
    add1e6digit(-18, -12)
    add1e6digit(-12, -6)
    add1e6digit(-6)
    return [signed, lowBits, highBits]
}

function int64toString(bitsLow: number, bitsHigh: number): string {
    // Skip the expensive conversion if the number is small enough to use the
    // built-in conversions.
    if (bitsHigh <= 0x1FFFFF) {
        return '' + (TWO_PWR_32_DBL * bitsHigh + bitsLow)
    }

    // What this code is doing is essentially converting the input number from
    // base-2 to base-1e7, which allows us to represent the 64-bit range with
    // only 3 (very large) digits. Those digits are then trivial to convert to
    // a base-10 string.

    // The magic numbers used here are -
    // 2^24 = 16777216 = (1,6777216) in base-1e7.
    // 2^48 = 281474976710656 = (2,8147497,6710656) in base-1e7.

    // Split 32:32 representation into 16:24:24 representation so our
    // intermediate digits don't overflow.
    let low = bitsLow & 0xFFFFFF
    let mid = (((bitsLow >>> 24) | (bitsHigh << 8)) >>> 0) & 0xFFFFFF
    let high = (bitsHigh >> 16) & 0xFFFF

    // Assemble our three base-1e7 digits, ignoring carries. The maximum
    // value in a digit at this step is representable as a 48-bit integer, which
    // can be stored in a 64-bit floating point number.
    let digitA = low + (mid * 6777216) + (high * 6710656)
    let digitB = mid + (high * 8147497)
    let digitC = (high * 2)

    // Apply carries from A to B and from B to C.
    let base = 10000000
    if (digitA >= base) {
        digitB += Math.floor(digitA / base)
        digitA %= base
    }

    if (digitB >= base) {
        digitC += Math.floor(digitB / base)
        digitB %= base
    }

    // Convert base-1e7 digits to base-10, with optional leading zeroes.
    function decimalFrom1e7(digit1e7: number, needLeadingZeros: number) {
        let partial = digit1e7 ? String(digit1e7) : ''
        if (needLeadingZeros) {
            return '0000000'.slice(partial.length) + partial
        }
        return partial
    }

    return decimalFrom1e7(digitC, /*needLeadingZeros=*/ 0) +
        decimalFrom1e7(digitB, /*needLeadingZeros=*/ digitC) +
        // If the final 1e7 digit didn't need leading zeros, we would have
        // returned via the trivial code path at the top.
        decimalFrom1e7(digitA, /*needLeadingZeros=*/ 1)
}