import {InputStream, OutputStream} from './stream'

export class ByteInputStream implements InputStream {
    buffer: Uint8Array

    _pos: number = 0

    constructor(buffer: Uint8Array) {
        this.buffer = buffer
    }

    pos(): number {
        return this._pos
    }

    read(buffer: Uint8Array): number {
        let toRead = buffer.byteLength

        if (this._pos + toRead >= this.buffer.byteLength) {
            toRead = this.buffer.byteLength - this._pos
        }

        buffer.set(this.buffer.subarray(this._pos, this._pos + toRead))
        this._pos += toRead
        return toRead
    }

    size(): number {
        return this.buffer.byteLength
    }

}

export class ByteOutputStream implements OutputStream {
    buffer: Uint8Array

    _pos = 0

    constructor(init?: number) {
        this.buffer = new Uint8Array(init ?? 128)
    }

    size(): number {
        return this._pos
    }

    write(buffer: Uint8Array): number {
        if (this._pos + buffer.length >= this.buffer.length) {
            const old = this.buffer
            this.buffer = new Uint8Array(
                Math.min(this.buffer.byteLength * 2, (buffer.byteLength + this.buffer.byteLength) * 2)
            )
            this.buffer.set(old)
        }
        this.buffer.set(buffer, this._pos)
        this._pos += buffer.byteLength
        return this._pos
    }

    join(): Uint8Array {
        return this.buffer.subarray(0, this._pos)
    }
}