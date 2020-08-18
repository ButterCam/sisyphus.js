import {Message, Reader, Writer} from "protobufjs";
import {emptyBytes} from "../defaults";

export interface IAny {
    typeUrl?: string
    value?: Uint8Array
}

export class Any extends Message<Any> implements IAny {
    typeUrl!: string
    value!: Uint8Array

    static encode<T extends Message<T>>(message: (T | { [k: string]: any }), writer?: Writer): Writer {
        if (!(message instanceof Any) && message instanceof Message) {
            if (!writer) writer = Writer.create()
            writer.uint32(10).string(`types.bybutter.com/${message.$type.fullName.substring(1)}`)
            message.$type.encode(message, writer.uint32(18).fork()).ldelim()
        }

        return this.$type.encode(message, writer)
    }

    static encodeDelimited<T extends Message<T>>(message: (T | { [k: string]: any }), writer?: Writer): Writer {
        if (!(message instanceof Any) && message instanceof Message) {
            Any.encode(message, writer).ldelim()
        }

        return this.$type.encodeDelimited(message, writer)
    }

    static decode<T extends Message<T>>(reader: (Reader | Uint8Array)): T {
        return this.unwrap(<IAny>this.$type.decode(reader))
    }

    static decodeDelimited<T extends Message<T>>(reader: (Reader | Uint8Array)): T {
        return this.unwrap(<IAny>this.$type.decodeDelimited(reader))
    }

    static wrap<T extends Message<T>>(value: T): Any {
        return <Any>this.create({
            typeUrl: `types.bybutter.com/${value.$type.fullName.substring(1)}`,
            value: value.$type.encode(value).finish()
        })
    }

    static unwrap<T extends Message<T>>(any: IAny): T {
        if (!any.typeUrl) {
            return <T>this.create(any)
        }

        const typename = `.${any.typeUrl.substring(any.typeUrl.lastIndexOf("/") + 1)}`
        const type = this.$type.root.lookupType(typename)
        if (!type || !any.value) {
            return <T>this.create(any)
        }
        return type.generatedObject.decode(any.value)
    }
}

Any.prototype.typeUrl = ""
Any.prototype.value = emptyBytes