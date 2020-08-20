import {JsonValue, Message} from "../message";

export interface IFieldMask {
    /** The set of field mask paths. */
    paths?: readonly string[]
}

export class FieldMask extends Message<FieldMask> implements IFieldMask {
    paths!: readonly string[]

    static create(properties: FieldMask | IFieldMask): FieldMask {
        return <FieldMask>super.create(properties)
    }

    static fromJson(object: JsonValue): FieldMask {
        if (typeof object !== "string") {
            throw new Error("Duration must be a string")
        }

        const paths = object.split(",").map(it => it.trim())
        return <FieldMask>this.create({
            paths
        })
    }

    static toJson(message: FieldMask | IFieldMask): JsonValue {
        if (!message.paths) return ""
        return message.paths.join(',')
    }
}