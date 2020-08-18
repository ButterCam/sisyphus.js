import {IConversionOptions, Message} from "protobufjs";
import {emptyList} from "../defaults";

export interface IFieldMask {
    /** The set of field mask paths. */
    paths?: readonly string[]
}

export class FieldMask extends Message<FieldMask> implements IFieldMask {
    paths!: readonly string[]

    static fromObject<T extends Message<T>>(object: any): T {
        if (typeof object !== "string") {
            throw new Error("Duration must be a string")
        }

        const paths = object.split(",").map(it => it.trim())
        return <T>this.create({
            paths
        })
    }

    static toObject<T extends Message<T>>(message: T, options?: IConversionOptions): any {
        if (!(message instanceof FieldMask)) {
            throw new Error("Message must be a duration")
        }
        return message.paths.join(',')
    }
}

FieldMask.prototype.paths = emptyList