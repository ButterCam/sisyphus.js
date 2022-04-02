import {JsonValue, Message} from '../message'

export interface IEmpty {
}

export class Empty extends Message<Empty> implements IEmpty {
    static readonly INSTANCE: Readonly<Empty> = new Empty()

    static create(properties: Empty | IEmpty | undefined | null): Empty {
        return Empty.INSTANCE
    }

    static fromJson(object: JsonValue): Empty {
        return Empty.INSTANCE
    }

    static toJson(message: Empty | IEmpty | undefined | null): JsonValue {
        return {}
    }
}