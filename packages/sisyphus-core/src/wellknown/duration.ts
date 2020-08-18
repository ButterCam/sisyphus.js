import {IConversionOptions, Long, Message} from "protobufjs";
import long from "long";
import {longZero} from "../defaults";

export interface IDuration {
    seconds?: Long
    nanos?: number
}

const durationRegex = /^(-)?([0-9]+)(?:\.([0-9]+))?s$/

export class Duration extends Message<Duration> implements IDuration {
    seconds!: Long
    nanos!: number

    static fromObject<T extends Message<T>>(object: any): T {
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
        return <T>this.create({
            seconds, nanos
        })
    }

    static toObject<T extends Message<T>>(message: T, options?: IConversionOptions): any {
        if (!(message instanceof Duration)) {
            throw new Error("Message must be a duration")
        }
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

Duration.prototype.seconds = longZero
Duration.prototype.nanos = 0