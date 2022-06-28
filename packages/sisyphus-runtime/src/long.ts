export type long = number | string

export namespace Long {
    const MAX_UINT32 = 0xFFFFFFFF
    const MIN_INT32 = 0x80000000 | 0

    export function isZero(value: long): boolean {
        return value == 0
    }

    export function sign(value: long): number {
        switch (typeof value) {
            case 'number':
                return Math.sign(value)
            case 'string':
                if (isZero(value)) return 0
                if (value.startsWith('-')) return -1
                return 1
            default:
                throw new Error(`Wrong long value '${value}'.`)
        }
    }

    export function toString(value: long): string {
        switch (typeof value) {
            case 'number':
                return value.toString()
            case 'string':
                return value
            default:
                throw new Error(`Wrong long value '${value}'.`)
        }
    }

    export function parse(value: string): long {
        const safeInt = parseInt(value)
        if (isNaN(safeInt)) throw new Error(`Wrong long value '${value}'.`)

        if (safeInt <= MAX_UINT32 && safeInt >= MIN_INT32) {
            return safeInt
        }

        return value
    }

    export function create(value: any): long {
        if (typeof value === 'number') {
            return value
        }

        if (typeof value === 'string') {
            return parse(value)
        }

        return parse(value.toString())
    }

    export function normalize(value: long): long {
        switch (typeof value) {
            case 'number':
                if (value < MAX_UINT32 && value > MIN_INT32) {
                    return value
                }
                return value.toString()
            case 'string':
                return parse(value)
            default:
                throw new Error(`Wrong long value '${value}'.`)
        }
    }

    export function toNumber(value: long): number {
        switch (typeof value) {
            case 'number':
                return value
            case 'string':
                return parseInt(value)
            default:
                throw new Error(`Wrong long value '${value}'.`)
        }
    }
}