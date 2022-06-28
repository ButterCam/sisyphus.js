const decoder = new TextDecoder('utf-8', {
    fatal: true
})

const encoder = new TextEncoder()

export function decodeUtf8(buffer: Uint8Array): string {
    return decoder.decode(buffer)
}

export function encodeUtf8(value: string): Uint8Array {
    return encoder.encode(value)
}

export function utf8Size(value: string): number {
    return encodeUtf8(value).byteLength
}