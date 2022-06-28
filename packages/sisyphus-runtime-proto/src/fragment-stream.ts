import {InputStream, OutputStream} from './stream'
import {writeVarint32} from './varint'

export class FragmentInputStream implements InputStream {
    constructor(fragments?: Uint8Array[]) {
        this.fragments = fragments ?? []
    }

    readonly fragments: Uint8Array[]

    _fragmentIndex: number = 0
    _byteIndex: number = 0

    _pos: number = 0

    pos(): number {
        return this._pos
    }

    read(buffer: Uint8Array): number {
        let read = 0
        while (read < buffer.byteLength) {
            if (this._fragmentIndex >= this.fragments.length) {
                break
            }
            const fragment = this.fragments[this._fragmentIndex]
            if (this._byteIndex >= fragment.length) {
                this._byteIndex = this._byteIndex - fragment.length
                this._fragmentIndex++
                continue
            }
            let toRead = buffer.byteLength - read
            const start = this._byteIndex
            if (toRead + start > fragment.length) {
                toRead = fragment.length - start
                this._byteIndex = 0
                this._fragmentIndex++
            } else {
                this._byteIndex += toRead
            }
            buffer.set(fragment.subarray(start, start + toRead), read)
            read += toRead
        }
        this._pos += read
        return read
    }

    size(): number {
        let size = 0
        for (let fragment of this.fragments) {
            size += fragment.byteLength
        }
        return size
    }
}

export class FragmentOutputStream implements OutputStream {
    readonly chunks: (Uint8Array | number)[] = []

    readonly stack: number[] = []

    readonly index: number[] = []

    length: number = 0

    fullSize: number = 0

    size(): number {
        return 0
    }

    write(buffer: Uint8Array): number {
        this.length += buffer.byteLength
        this.fullSize += buffer.byteLength
        this.chunks.push(buffer)
        return this.fullSize
    }

    beginLd() {
        this.index.push(this.chunks.length)
        this.stack.push(this.length)
        this.chunks.push(-1)
        this.length = 0
    }

    endLd() {
        const state = this.stack.pop()
        const index = this.index.pop()

        if (state === undefined) throw new Error('Stack over flower for measure state')
        if (index === undefined) throw new Error('Stack over flower for measure state')
        const currentBlockSize = this.length
        const ldChunk = writeVarint32(currentBlockSize)
        this.chunks[index] = ldChunk
        this.fullSize += ldChunk.byteLength
        this.length = currentBlockSize + state + ldChunk.length
        return this
    }

    join(): Uint8Array {
        const chunks = <Uint8Array[]>this.chunks
        let len = 0
        for (const chunk of chunks) {
            len += chunk.byteLength
        }
        const result = new Uint8Array(len)
        let offset = 0
        for (const chunk of chunks) {
            result.set(chunk, offset)
            offset += chunk.byteLength
        }
        return result
    }

    asInputStream(): FragmentInputStream {
        return new FragmentInputStream(<Uint8Array[]>this.chunks)
    }
}