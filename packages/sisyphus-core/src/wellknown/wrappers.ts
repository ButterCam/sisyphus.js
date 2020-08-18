import {IConversionOptions, Long, Message, util} from "protobufjs";
import long from "long"
import {emptyBytes, longUZero, longZero} from "../defaults";
import base64 = util.base64;

export interface IDoubleValue {
    value?: number
}

export class DoubleValue extends Message<DoubleValue> implements IDoubleValue {
    value!: number

    static fromObject<T extends Message<T>>(object: any): T {
        if (typeof object !== "number") {
            throw new Error("object must be a number")
        }
        return <T>DoubleValue.create({value: object})
    }

    static toObject<T extends Message<T>>(message: T, options?: IConversionOptions): any {
        if (!(message instanceof DoubleValue)) {
            throw new Error("message must be DoubleValue")
        }
        return message.value
    }
}

DoubleValue.prototype.value = 0

export interface IFloatValue {
    value?: number
}

export class FloatValue extends Message<FloatValue> implements IFloatValue {
    value!: number

    static fromObject<T extends Message<T>>(object: any): T {
        if (typeof object !== "number") {
            throw new Error("object must be a number")
        }
        return <T>FloatValue.create({value: object})
    }

    static toObject<T extends Message<T>>(message: T, options?: IConversionOptions): any {
        if (!(message instanceof FloatValue)) {
            throw new Error("message must be FloatValue")
        }
        return message.value
    }
}

FloatValue.prototype.value = 0

export interface IInt64Value {
    value?: Long
}

export class Int64Value extends Message<Int64Value> implements IInt64Value {
    value!: Long

    static fromObject<T extends Message<T>>(object: any): T {
        if (long.isLong(object)) {
            throw new Error("object must be a long")
        }
        return <T>Int64Value.create({value: object})
    }

    static toObject<T extends Message<T>>(message: T, options?: IConversionOptions): any {
        if (!(message instanceof Int64Value)) {
            throw new Error("message must be Int64Value")
        }
        return message.value
    }
}

Int64Value.prototype.value = longZero

export interface IUInt64Value {
    value?: Long
}

export class UInt64Value extends Message<UInt64Value> implements IUInt64Value {
    value!: Long

    static fromObject<T extends Message<T>>(object: any): T {
        if (long.isLong(object)) {
            throw new Error("object must be a long")
        }
        return <T>UInt64Value.create({value: object})
    }

    static toObject<T extends Message<T>>(message: T, options?: IConversionOptions): any {
        if (!(message instanceof UInt64Value)) {
            throw new Error("message must be UInt64Value")
        }
        return message.value
    }
}

UInt64Value.prototype.value = longUZero

export interface IInt32Value {
    value?: number
}

export class Int32Value extends Message<Int32Value> implements IInt32Value {
    value!: number

    static fromObject<T extends Message<T>>(object: any): T {
        if (typeof object !== "number") {
            throw new Error("object must be a number")
        }
        return <T>Int32Value.create({value: object})
    }

    static toObject<T extends Message<T>>(message: T, options?: IConversionOptions): any {
        if (!(message instanceof Int32Value)) {
            throw new Error("message must be Int32Value")
        }
        return message.value
    }
}

Int32Value.prototype.value = 0

export interface IUInt32Value {
    value?: number
}

export class UInt32Value extends Message<UInt32Value> implements IUInt32Value {
    value!: number

    static fromObject<T extends Message<T>>(object: any): T {
        if (typeof object !== "number") {
            throw new Error("object must be a number")
        }
        return <T>UInt32Value.create({value: object})
    }

    static toObject<T extends Message<T>>(message: T, options?: IConversionOptions): any {
        if (!(message instanceof UInt32Value)) {
            throw new Error("message must be UInt32Value")
        }
        return message.value
    }
}

UInt32Value.prototype.value = 0

export interface IBoolValue {
    value?: boolean
}

export class BoolValue extends Message<BoolValue> implements IBoolValue {
    value!: boolean

    static fromObject<T extends Message<T>>(object: any): T {
        if (typeof object !== "boolean") {
            throw new Error("object must be a boolean")
        }
        return <T>BoolValue.create({value: object})
    }

    static toObject<T extends Message<T>>(message: T, options?: IConversionOptions): any {
        if (!(message instanceof BoolValue)) {
            throw new Error("message must be BytesValue")
        }
        return message.value
    }
}

BoolValue.prototype.value = false

export interface IStringValue {
    value?: string
}

export class StringValue extends Message<StringValue> implements IStringValue {
    value!: string

    static fromObject<T extends Message<T>>(object: any): T {
        if (typeof object !== "string") {
            throw new Error("object must be a string")
        }
        return <T>StringValue.create({value: object})
    }

    static toObject<T extends Message<T>>(message: T, options?: IConversionOptions): any {
        if (!(message instanceof StringValue)) {
            throw new Error("message must be StringValue")
        }
        return message.value
    }
}

StringValue.prototype.value = ""

export interface IBytesValue {
    value?: Uint8Array
}

export class BytesValue extends Message<BytesValue> implements IBytesValue {
    value!: Uint8Array

    static fromObject<T extends Message<T>>(object: any): T {
        if (object !== "string") {
            throw new Error("object must be a string")
        }
        const buffer = new Uint8Array(0)
        base64.decode(object, buffer, 0)
        return <T>BytesValue.create({value: buffer})
    }

    static toObject<T extends Message<T>>(message: T, options?: IConversionOptions): any {
        if (!(message instanceof BytesValue)) {
            throw new Error("message must be BytesValue")
        }

        return base64.encode(message.value, 0, message.value.length)
    }
}

BytesValue.prototype.value = emptyBytes
