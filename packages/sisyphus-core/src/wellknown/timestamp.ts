import {Long, Message} from "protobufjs";
import long from "long";
import {JsonValue} from "../message";

export interface ITimestamp {
    seconds?: Long
    nanos?: number
}

export class Timestamp extends Message<Timestamp> implements ITimestamp {
    seconds!: Long
    nanos!: number

    static create(properties: Timestamp | ITimestamp): Timestamp {
        return <Timestamp>super.create(properties)
    }

    static fromJson(object: JsonValue): Timestamp {
        if (typeof object !== "string") {
            throw new Error("Timestamp must be a string")
        }
        const date = new Date(object)
        return this.fromDate(date)
    }

    static toJson(message: Timestamp | ITimestamp): JsonValue {
        return this.toDate(message).toISOString()
    }

    static fromDate(date: Date): Timestamp {
        const seconds = long.fromNumber(date.getTime() / 1000)
        const nanos = (date.getTime() % 1000) * 1000000
        return this.create({
            seconds, nanos
        })
    }

    static toDate(object: Timestamp | ITimestamp): Date {
        const timestamp = this.create(object)
        return new Date((<long.Long>timestamp.seconds).toNumber() * 1000 + timestamp.nanos / 1000000)
    }
}