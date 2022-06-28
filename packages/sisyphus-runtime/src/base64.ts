const enc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('')
const dec: number[] = []

for (let i = 0; i < enc.length; i++) {
    dec[enc[i].charCodeAt(0)] = i
}

dec['-'.charCodeAt(0)] = 62
dec['_'.charCodeAt(0)] = 63

export function base64Decode(value: string): Uint8Array {
    while (value[value.length - 1] == '=') {
        value = value.slice(0, -1)
    }

    const len = value.length * 3 / 4
    const bytes = new Uint8Array(len)

    let buffer = 0
    let count = 0
    let pos = 0

    for (let i = 0; i < value.length; i++) {
        const data = dec[value.charCodeAt(i)]
        if (data === undefined) {
            switch (value[i]) {
                case ' ':
                case '\r':
                case '\n':
                case '\t':
                    continue
            }
            throw new Error(`Wrong base64 char '${value[i]}' in string "${value}"`)
        }

        buffer <<= 6
        buffer |= data
        count++

        if (count == 4) {
            bytes[pos++] = (buffer >> 16) & 0xFF
            bytes[pos++] = (buffer >> 8) & 0xFF
            bytes[pos++] = buffer & 0xFF
            buffer = 0
            count = 0
        }
    }

    switch (count) {
        case 0:
            break
        case 2:
            buffer <<= 12
            bytes[pos++] = (buffer >> 16) & 0xFF
            break
        case 3:
            buffer <<= 6
            bytes[pos++] = (buffer >> 16) & 0xFF
            bytes[pos++] = (buffer >> 8) & 0xFF
            break
        default:
            throw new Error(`Wrong base64 string "${value}"`)
    }

    return bytes.slice(0, pos)
}

export function base64Encode(value: Uint8Array): string {
    let result = ''
    const groups = Math.floor(value.length / 3)

    let buffer = 0

    for (let i = 0; i < groups; i++) {
        buffer = value[i * 3] << 16
        buffer |= value[i * 3 + 1] << 8
        buffer |= value[i * 3 + 2]

        result += enc[buffer >> 18 & 63]
        result += enc[buffer >> 12 & 63]
        result += enc[buffer >> 6 & 63]
        result += enc[buffer & 63]
    }

    switch (value.byteLength - groups * 3) {
        case 0:
            break
        case 1:
            buffer = value[value.byteLength - 1] << 4
            result += enc[buffer >> 6 & 63]
            result += enc[buffer & 63]
            result += '=='
            break
        case 2:
            buffer = value[value.byteLength - 2] << 10
            buffer |= value[value.byteLength - 1] << 2
            result += enc[buffer >> 12 & 63]
            result += enc[buffer >> 6 & 63]
            result += enc[buffer & 63]
            result += '='
            break
    }

    return result
}