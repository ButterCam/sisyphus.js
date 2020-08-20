import {Long} from "protobufjs";
import long from "long";
import {JsonValue, Message} from "../message";

export interface IDuration {
    seconds?: Long
    nanos?: number
}

const durationRegex = /^(-)?([0-9]+)(?:\.([0-9]+))?s$/

export class Duration extends Message<Duration> implements IDuration {
    seconds!: Long
    nanos!: number

    static create(properties: Duration | IDuration): Duration {
        return <Duration>super.create(properties)
    }

    static fromJson(object: JsonValue): Duration {
        if (typeof object !== "string") {
            throw new Error("Duration must be a string")
        }

        const result = durationRegex.exec(object)
        if (!result) {
            throw new Error("Wrong duration format")
        }

        let sign = result[1] ? "-" : ""
        let seconds = long.fromValue(`${sign}${result[2]}`)
        let nanos = Math.floor(parseFloat(`${sign}0.${result[3]}`) * 1000000000)
        return <Duration>this.create({
            seconds, nanos
        })
    }

    static toJson(message: Duration | IDuration): JsonValue {
        let second = message.seconds ? <long.Long>message.seconds : long.ZERO
        let nanos = message.nanos ? message.nanos : 0
        nanos = nanos / 1000000000

        if (second.isZero()) {
            return `${nanos}s`
        }
        if (nanos == 0) {
            return `${second.toString()}.0s`
        }

        let secondSign = second.isNegative() ? -1 : 1
        if (secondSign != Math.sign(nanos)) {
            nanos += secondSign
            if (second.isNegative()) {
                second.add(long.ONE)
            } else {
                second.add(long.NEG_ONE)
            }
        }
        return `${second.toString()}.${nanos.toString().substring(2)}s`
    }
}