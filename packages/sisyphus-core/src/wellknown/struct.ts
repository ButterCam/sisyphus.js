import {IConversionOptions, Message} from "protobufjs";
import {emptyList, emptyMap} from "../defaults";
import {oneOfProperty} from "../oneof";

export enum NullValue {
    NULL_VALUE = 0,
}

export interface IStruct {
    fields?: { readonly [k: string]: IValue }
}

export class Struct extends Message<Struct> implements IStruct {
    fields!: { readonly [k: string]: Value }

    static fromObject<T extends Message<T>>(object: any): T {
        if (typeof object !== "object") {
            throw new Error("Duration must be a string")
        }

        const fields: { [k: string]: Value } = {}

        for (let key in object) {
            if (!object.hasOwnProperty(key)) continue
            fields[key] = Value.fromObject(object[key])
        }
        return <T>this.create({fields})
    }

    static toObject<T extends Message<T>>(message: T, options?: IConversionOptions): any {
        if (!(message instanceof Struct)) {
            throw new Error("Message must be a Struct")
        }
        const fields: { [k: string]: any } = {}
        for (let key in message.fields) {
            if (!message.fields.hasOwnProperty(key)) continue
            fields[key] = Value.toObject(message.fields[key])
        }
    }
}

Struct.prototype.fields = emptyMap

export interface IValue {
    nullValue?: NullValue
    numberValue?: number
    stringValue?: string
    boolValue?: boolean
    structValue?: (IStruct | null)
    listValue?: (IListValue | null)
    kind?: string
}

export class Value extends Message<Value> implements IValue {
    nullValue!: NullValue
    numberValue!: number
    stringValue!: string
    boolValue!: boolean
    structValue!: (Struct | null)
    listValue!: (ListValue | null)
    kind!: string

    static fromObject<T extends Message<T>>(object: any): T {
        switch (typeof object) {
            case "boolean":
                return <T>this.create({boolValue: object})
            case "number":
                return <T>this.create({numberValue: object})
            case "string":
                return <T>this.create({stringValue: object})
            default:
                if (object == null) {
                    return <T>this.create({nullValue: NullValue.NULL_VALUE})
                }
                if (Array.isArray(object)) {
                    return <T>this.create({listValue: ListValue.fromObject(object)})
                }
                return <T>this.create({structValue: Struct.fromObject(object)})
        }
    }

    static toObject<T extends Message<T>>(message: T, options?: IConversionOptions): any {
        if (!(message instanceof Value)) {
            throw new Error("Message must be a Value")
        }
        switch (message.kind) {
            case "nullValue":
                return null
            case "numberValue":
                return message.numberValue
            case "stringValue":
                return message.stringValue
            case "boolValue":
                return message.boolValue
            case "structValue":
                return message.structValue ? Struct.toObject(message.structValue) : undefined
            case "listValue":
                return message.listValue ? ListValue.toObject(message.listValue) : undefined
            default:
                return undefined
        }
    }
}

Object.defineProperty(Value.prototype, "kind", oneOfProperty("nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"))
Value.prototype.nullValue = NullValue.NULL_VALUE
Value.prototype.numberValue = 0
Value.prototype.stringValue = ""
Value.prototype.boolValue = false
Value.prototype.structValue = null
Value.prototype.listValue = null

export interface IListValue {
    values?: readonly IValue[]
}

export class ListValue extends Message<ListValue> implements IListValue {
    values!: readonly Value[]

    static fromObject<T extends Message<T>>(object: any): T {
        if (!Array.isArray(object)) throw new Error("object must be a Array")
        const array = <any[]>object
        const values = array.map(it => Value.fromObject(it))
        return <T>this.create({values})
    }

    static toObject<T extends Message<T>>(message: T, options?: IConversionOptions): any {
        if (!(message instanceof ListValue)) {
            throw new Error("Message must be a Value")
        }
        return message.values.map(it => Value.toObject(it))
    }
}

ListValue.prototype.values = emptyList
