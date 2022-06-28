import {Duration} from './google/protobuf/duration'
import {Long, long} from './long'

declare module './google/protobuf/duration' {
    namespace Duration {
        export type Payload = [long, number]

        function toPayload(value: Duration): Payload

        function fromPayload(duration: Payload): Duration
    }
}

export * from './google/protobuf/duration'

const durationRegex = /^(-)?([0-9]+)(?:\.([0-9]+))?s$/

Duration.toPayload = function (value: Duration): Duration.Payload {
    const result = durationRegex.exec(value)
    if (!result) {
        throw new Error(`Wrong duration format: ${value}`)
    }

    const sign = result[1] ? -1 : 1
    const seconds = Long.parse((result[1] ? result[1] : '') + result[2])
    const nanos = sign * Math.floor(parseFloat(`0.${result[3] ?? 0}`) * 1000000000) | 0

    return [seconds, nanos]
}

Duration.fromPayload = function (duration: Duration.Payload): Duration {
    const [second, nanos] = duration
    const decimal = nanos / 1000000000

    if (decimal >= 1) throw new Error(`Wrong duration value, the nanos(${nanos}) must be from -999,999,999 to +999,999,999 inclusive.`)

    if (second == 0) {
        return <Duration>`${decimal}s`
    }

    if (decimal == 0) {
        return <Duration>`${Long.toString(second)}.0s`
    }

    const secondSign = Long.sign(second)
    if (secondSign != Math.sign(decimal)) {
        throw new Error(`Wrong duration value, the sign of second(${second}) and nanos(${nanos}) must be same.`)
    }

    return <Duration>`${Long.toString(second)}.${decimal.toString().split('.')[1]}s`
}