import {flow, Flow} from "@sisyphus.js/runtime"

export interface ServerSentEvent {
    /** The event ID to set the EventSource object's last event ID value. */
    id: string
    /** A string identifying the type of event described. */
    event: string
    /** The event data */
    data: string
    /** The reconnection interval (in milliseconds) to wait before retrying the connection */
    retry?: number
}

const NEW_LINE = 10
const CARRIAGE_RETURN = 13

const decoder = new TextDecoder('utf-8', {
    fatal: true
})

export function decodeServerSentEventToFlow(body: ReadableStream<Uint8Array>): Flow<ServerSentEvent> {
    return flow(async (emitter) => {
        let event = newServerSentEvent()
        await readLines(body, async (line) => {
            if (line.length === 0) {
                await emitter(event)
                event = newServerSentEvent()
                return
            }

            const colonIndex = line.indexOf(':')
            if (colonIndex === -1) return

            const field = line.slice(0, colonIndex)
            const data = line.slice(colonIndex + 1)
            const value = data.charAt(0) === ' ' ? data.slice(1) : data

            switch (field) {
                case 'id':
                    event.id = value
                    break
                case 'event':
                    event.event = value
                    break
                case 'data':
                    event.data = event.data ? event.data + '\n' + value : value
                    break
                case 'retry':
                    const retry = parseInt(value, 10)
                    if (!isNaN(retry)) { // per spec, ignore non-integers
                        event.retry = retry
                    }
                    break
            }
        })
        await emitter(event)
    })
}

async function readLines(body: ReadableStream<Uint8Array>, onLine: (line: string) => Promise<void>): Promise<void> {
    const reader = body.getReader()
    let result: ReadableStreamReadResult<Uint8Array>

    let buffer: Uint8Array | undefined
    let position: number = 0 // current read position
    let discardNextNewline = false

    while (!(result = await reader.read()).done) {
        if (buffer === undefined) {
            buffer = result.value
            position = 0
        } else {
            // we're still parsing the old line. Append the new bytes into buffer:
            buffer = concat(buffer, result.value)
        }

        const bufLength = buffer.length
        let lineStart = 0 // index where the current line starts

        while (position < bufLength) {
            if (discardNextNewline) {
                if (buffer[position] === NEW_LINE) {
                    lineStart = ++position // skip to next char
                }

                discardNextNewline = false
            }

            // start looking forward till the end of line:
            let lineEnd = -1 // index of the \r or \n char
            for (; position < bufLength && lineEnd === -1; ++position) {
                switch (buffer[position]) {
                    case CARRIAGE_RETURN:
                        discardNextNewline = true
                        lineEnd = position
                        break
                    case NEW_LINE:
                        lineEnd = position
                        break
                }
            }

            if (lineEnd === -1) {
                // We reached the end of the buffer but the line hasn't ended.
                // Wait for the next arr and then continue parsing:
                break
            }

            // we've reached the line end, send it out:
            await onLine(decoder.decode(buffer.subarray(lineStart, lineEnd)))
            lineStart = position // we're now on the next line
        }

        if (lineStart === bufLength) {
            buffer = undefined // we've finished reading it
        } else if (lineStart !== 0) {
            // Create a new view into buffer beginning at lineStart so we don't
            // need to copy over the previous lines when we get the new arr:
            buffer = buffer.subarray(lineStart)
            position -= lineStart
        }
    }

    if (buffer !== undefined) {
        await onLine(decoder.decode(buffer))
    }
}

function newServerSentEvent(): ServerSentEvent {
    return {
        data: '',
        event: '',
        id: '',
        retry: undefined,
    }
}

function concat(a: Uint8Array, b: Uint8Array) {
    const res = new Uint8Array(a.length + b.length)
    res.set(a)
    res.set(b, a.length)
    return res
}