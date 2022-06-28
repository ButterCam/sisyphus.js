const MAX_FLOAT = 3.4028234663852886e+38
const MIN_FLOAT = -3.4028234663852886e+38
const MAX_UINT32 = 0xFFFFFFFF
const MIN_UINT32 = 0
const MAX_INT32 = 0X7FFFFFFF
const MIN_INT32 = -0X80000000

export function assertFloat(arg: any): asserts arg is number {
    if (typeof arg !== 'number')
        throw new Error(`invalid float: ${arg}(${typeof arg})`)
    if (!Number.isFinite(arg))
        return
    if (arg > MAX_FLOAT || arg < MIN_FLOAT)
        throw new Error(`invalid float: ${arg}`)
}

export function assertUInt32(arg: any): asserts arg is number {
    if (typeof arg !== 'number')
        throw new Error(`invalid uint32: ${arg}(${typeof arg})`)
    if (!Number.isInteger(arg) || arg > MAX_UINT32 || arg < MIN_UINT32)
        throw new Error(`invalid uint32: ${arg}`)
}

export function assertInt32(arg: any): asserts arg is number {
    if (typeof arg !== 'number')
        throw new Error(`invalid int32: ${arg}(${typeof arg})`)
    if (!Number.isInteger(arg) || arg > MAX_INT32 || arg < MIN_INT32)
        throw new Error(`invalid int32: ${arg}`)
}