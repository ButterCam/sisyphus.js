import {Reader, Writer} from "protobufjs";
import {JsonValue, Message, MessageConstructor} from "../message";

export interface IAny {
    typeUrl?: string
    value?: Uint8Array
}

export class Any extends Message<Any> implements IAny {
    typeUrl!: string
    value!: Uint8Array

    static create(properties?: Message | { [k: string]: any }): Message {
        if (properties instanceof Message) {
            return properties
        }
        return super.create(properties)
    }

    static encode(message: Message | { [k: string]: any }, writer?: Writer): Writer {
        if (!(message instanceof Any) && message instanceof Message) {
            if (!writer) writer = Writer.create()
            writer.uint32(10).string(`types.bybutter.com/${message.$type.fullName.substring(1)}`)
            message.$type.encode(message, writer.uint32(18).fork()).ldelim()
        }

        return this.$type.encode(message, writer)
    }

    static encodeDelimited(message: Message | { [k: string]: any }, writer?: Writer): Writer {
        if (!(message instanceof Any) && message instanceof Message) {
            Any.encode(message, writer).ldelim()
        }

        return this.$type.encodeDelimited(message, writer)
    }

    static decode(reader: (Reader | Uint8Array)): Message {
        return this.unwrap(<IAny>this.$type.decode(reader))
    }

    static decodeDelimited(reader: (Reader | Uint8Array)): Message {
        return this.unwrap(<IAny>this.$type.decodeDelimited(reader))
    }

    static fromJson(object: JsonValue): Message {
        if (typeof object !== "object" || Array.isArray(object)) {
            throw new Error(`Only object can be convert to type '${this.$type.fullName}'.`)
        }

        const obj = <{ [k: string]: JsonValue }>object
        const typeUrl = <string>obj["@type"]
        const typename = `.${typeUrl.substring(typeUrl.lastIndexOf("/") + 1)}`
        const type = this.$type.root.lookupType(typename)
        if (!type) throw new Error(`Definition of type '${type}' can't be found in reflection.`)

        if (type.fullName.startsWith(".google.protobuf.") && obj["value"] != undefined) {
            return type.messageCtor.fromJson(obj["value"])
        } else {
            return type.messageCtor.fromJson(obj)
        }
    }

    static toJson(message: Message): JsonValue {
        if (message instanceof Any) {
            message = this.unwrap(message)
        }

        const typeUrl = `types.bybutter.com/${message.$type.fullName.substring(1)}`
        const result = message.$type.messageCtor.toJson(message)
        if (typeof result !== "object") {
            return {
                "@type": typeUrl,
                value: result
            }
        }
        return {
            "@type": typeUrl,
            ...result
        }
    }

    static wrap(value: Message): Any {
        return <Any>super.create({
            typeUrl: `types.bybutter.com/${value.$type.fullName.substring(1)}`,
            value: value.$type.encode(value).finish()
        })
    }

    static unwrap(any: IAny): Message {
        if (!any.typeUrl) {
            return this.create(any)
        }

        const typename = `.${any.typeUrl.substring(any.typeUrl.lastIndexOf("/") + 1)}`
        const type = this.$type.root.lookupType(typename)
        if (!type || !any.value) {
            return this.create(any)
        }
        return (<MessageConstructor>type.ctor).decode(any.value)
    }
}