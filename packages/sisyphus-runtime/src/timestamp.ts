import {Timestamp} from './google/protobuf/timestamp'

declare module './google/protobuf/timestamp' {
    namespace Timestamp {
        export type Payload = [number, number]

        function toPayload(value: Timestamp): Payload

        function fromPayload(duration: Payload): Timestamp

        function now(): Timestamp

        function fromDate(date: Date): Timestamp

        function toDate(value: Timestamp): Date
    }
}

export * from './google/protobuf/timestamp'

Timestamp.now = function now(): Timestamp {
    return Timestamp.fromDate(new Date())
}

Timestamp.fromDate = function fromDate(date: Date): Timestamp {
    return date.toISOString()
}

Timestamp.toDate = function toDate(value: Timestamp): Date {
    return new Date(value)
}

Timestamp.toPayload = function toPayload(value: Timestamp): Timestamp.Payload {
    const time = Timestamp.toDate(value).getTime()
    const seconds = (time / 1000) | 0
    const nanos = (time % 1000) * 1000000
    return [seconds, nanos]
}

Timestamp.fromPayload = function fromPayload(value: Timestamp.Payload): Timestamp {
    const time = (value[0] * 1000) + (value[1] / 1000000)
    return Timestamp.fromDate(new Date(time))
}