import {JsonValue, Message} from "../message";

export enum NullValue {
    NULL_VALUE = 0,
}

export interface IStruct {
    fields?: { readonly [k: string]: IValue }
}

export class Struct extends Message<Struct> implements IStruct {
    fields!: { readonly [k: string]: Value }

    static create(properties: Struct | IStruct): Struct {
        return <Struct>super.create(properties)
    }

    static fromJson(object: JsonValue): Struct {
        if (typeof object !== "object" || Array.isArray(object)) {
            throw new Error("Struct must be a object")
        }

        const fields: { [k: string]: Value } = {}

        for (let key in object) {
            if (!object.hasOwnProperty(key)) continue
            fields[key] = <Value>this.$type.root.lookupType(".google.protobuf.Value").messageCtor.fromJson((<any>object)[key])
        }
        return <Struct>this.create({fields})
    }

    static toJson(message: Struct | IStruct): JsonValue {
        const fields: { [k: string]: any } = {}
        for (let key in message.fields) {
            if (!message.fields.hasOwnProperty(key)) continue
            fields[key] = Value.toJson(message.fields[key])
        }
        return fields
    }
}

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

    static create(properties: Value | IValue): Value {
        return <Value>super.create(properties)
    }

    static fromJson(object: JsonValue): Value {
        switch (typeof object) {
            case "boolean":
                return this.create({boolValue: object})
            case "number":
                return this.create({numberValue: object})
            case "string":
                return this.create({stringValue: object})
            default:
                if (object == null) {
                    return this.create({nullValue: NullValue.NULL_VALUE})
                }
                if (Array.isArray(object)) {
                    return this.create({listValue: <ListValue>this.$type.root.lookupType(".google.protobuf.ListValue").messageCtor.fromJson(object)})
                }
                return this.create({structValue: <Struct>this.$type.root.lookupType(".google.protobuf.Struct").messageCtor.fromJson(object)})
        }
    }

    static toJson(message: Value | IValue): any {
        message = <Value>this.create(message)
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
                return message.structValue ? Struct.toJson(message.structValue) : undefined
            case "listValue":
                return message.listValue ? ListValue.toJson(message.listValue) : undefined
            default:
                return undefined
        }
    }
}

export interface IListValue {
    values?: readonly IValue[]
}

export class ListValue extends Message<ListValue> implements IListValue {
    values!: readonly Value[]

    static create(properties: ListValue | IListValue): ListValue {
        return <ListValue>super.create(properties)
    }

    static fromJson(object: JsonValue): ListValue {
        if (!Array.isArray(object)) throw new Error("object must be a Array")
        const array = <any[]>object
        const values = array.map(it => <Value>this.$type.root.lookupType(".google.protobuf.Value").messageCtor.fromJson(it))
        return this.create({values})
    }

    static toJson(message: ListValue | IListValue): JsonValue {
        const result: JsonValue[] = []
        if (!message.values) return result
        for (const item of message.values) {
            result.push(Value.toJson(item))
        }
        return result
    }
}
