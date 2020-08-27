import {IConversionOptions, Long, Reader, Type, util, Writer} from "protobufjs"
import {fromJson, normalizeField, toJson} from "./converter";
import {encodeField} from "./encoder";
import {decodeField} from "./decoder";

export type JsonValue = string | number | Long | { [k: string]: JsonValue } | JsonValue[] | boolean | undefined | null

export interface MessageConstructor<T extends Message<T> = Message> {
    $type: Type

    new(properties: T | { [k: string]: any }): T

    create(properties?: T | { [k: string]: any }): T

    encode(message: T | { [k: string]: any }, writer?: Writer): Writer

    encodeDelimited(message: T | { [k: string]: any }, writer?: Writer): Writer

    decode(reader: (Reader | Uint8Array)): T

    decodeDelimited(reader: (Reader | Uint8Array)): T

    verify(message: T | { [k: string]: any }): (string | null)

    fromJson(object: JsonValue): T

    toJson(message: T | { [k: string]: any }, options?: IConversionOptions): JsonValue
}

declare module "protobufjs" {
    interface Type {
        messageCtor: MessageConstructor
    }
}

Object.defineProperty(Type.prototype, "messageCtor", {
    get: function () {
        if (!this._messageCtor)
            throw new Error(`Constructor missed for type '${this.fullName}'.`)
        return <MessageConstructor>this._messageCtor
    },
    set: function (value: MessageConstructor) {
        this._messageCtor = value
        value.$type = this
        value.prototype.$type = this

        const type: Type = this
        for (const field of type.fieldsArray) {
            value.prototype[field.name] = field.defaultValue
        }

        const ctorProperties: PropertyDescriptorMap = {}
        for (const oneOf of type.oneofsArray) {
            ctorProperties[oneOf.name] = {
                get: util.oneOfGetter(oneOf.oneof),
                set: util.oneOfSetter(oneOf.oneof)
            }
        }
        Object.defineProperties(value.prototype, ctorProperties);
    }
})

export class Message<T extends object = object> {
    static readonly $type: Type

    readonly $type!: Type

    static create(properties?: Message | { [k: string]: any }): Message {
        if (properties instanceof this) return <any>properties

        const result: any = new this()
        if (!properties) return result

        for (let field of this.$type.fieldsArray) {
            // @ts-ignore
            const fieldValue = properties[field.name]
            if (properties.hasOwnProperty(field.name) && fieldValue != null) {
                (<any>result)[field.name] = normalizeField(field, fieldValue)
            }
        }

        return result
    }

    static encode(message: Message | { [k: string]: any }, writer?: Writer): Writer {
        if (!writer) writer = Writer.create()

        for (let field of this.$type.fieldsArray) {
            if (message.hasOwnProperty(field.name) && (<any>message)[field.name] != null) {
                encodeField(field, (<any>message)[field.name], writer)
            }
        }

        return writer
    }

    static encodeDelimited(message: Message | { [k: string]: any }, writer?: Writer): Writer {
        return this.encode(message, writer).ldelim()
    }

    static decode(reader: (Reader | Uint8Array), length?: number): Message {
        if (!(reader instanceof Reader)) reader = Reader.create(reader)
        const end = length ? reader.pos + length : reader.len
        const result: any = new this()
        while (end > reader.pos) {
            const tag = reader.uint32()
            const field = this.$type.fieldsById[tag >> 3]
            if (!field) {
                reader.skipType(tag & 7)
            } else {
                let current = (<any>result)[field.name]
                if (!result.hasOwnProperty(field.name) || current == null) {
                    current = undefined
                }
                result[field.name] = decodeField(tag, field, reader, current)
            }
        }
        return result
    }

    static decodeDelimited(reader: (Reader | Uint8Array)): Message {
        if (!(reader instanceof Reader)) reader = Reader.create(reader)

        return this.decode(reader, reader.uint32())
    }

    static verify(message: Message | { [k: string]: any }): (string | null) {
        return null
    }

    static fromJson(object: JsonValue): Message {
        if (typeof object !== "object" || Array.isArray(object)) {
            throw new Error(`Only object can be convert to type '${this.$type.fullName}'.`)
        }
        const result: any = new this()
        for (let key in object) {
            if (!object.hasOwnProperty(key)) continue
            let field = this.$type.fields[key]
            if (!field) continue

            (<any>result)[key] = fromJson(field, (<any>object)[key])
        }
        return result
    }

    static toJson(message: Message | { [k: string]: any }): JsonValue {
        const result: JsonValue = {}
        for (let key in message) {
            if (!message.hasOwnProperty(key)) continue
            let field = this.$type.fields[key]
            if (!field) continue

            result[key] = toJson(field, (<any>message)[key])
        }
        return result
    }
}