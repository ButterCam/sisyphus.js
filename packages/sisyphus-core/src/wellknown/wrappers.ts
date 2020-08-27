import {Long, Message, util} from "protobufjs";
import long from "long"
import {JsonValue} from "../message";
import base64 = util.base64;

export interface IDoubleValue {
    value?: number
}

export class DoubleValue extends Message<DoubleValue> implements IDoubleValue {
    value!: number

    static create(properties: DoubleValue | IDoubleValue): DoubleValue {
        return <DoubleValue>super.create(properties)
    }

    static fromJson(object: JsonValue): DoubleValue {
        if (typeof object !== "number") {
            throw new Error("object must be a number")
        }
        return this.create({value: object})
    }

    static toJson(message: DoubleValue | IDoubleValue): JsonValue {
        return message.value
    }
}

export interface IFloatValue {
    value?: number
}

export class FloatValue extends Message<FloatValue> implements IFloatValue {
    value!: number

    static create(properties: FloatValue | IFloatValue): FloatValue {
        return <FloatValue>super.create(properties)
    }

    static fromJson(object: JsonValue): FloatValue {
        if (typeof object !== "number") {
            throw new Error("object must be a number")
        }
        return this.create({value: object})
    }

    static toJson(message: FloatValue | IFloatValue): JsonValue {
        return message.value
    }
}

export interface IInt64Value {
    value?: Long
}

export class Int64Value extends Message<Int64Value> implements IInt64Value {
    value!: Long

    static create(properties: Int64Value | IInt64Value): Int64Value {
        return <Int64Value>super.create(properties)
    }

    static fromJson(object: JsonValue): Int64Value {
        if (long.isLong(object)) {
            throw new Error("object must be a long")
        }
        return this.create({value: <Long>object})
    }

    static toJson(message: Int64Value | IInt64Value): JsonValue {
        return message.value
    }
}

export interface IUInt64Value {
    value?: Long
}

export class UInt64Value extends Message<UInt64Value> implements IUInt64Value {
    value!: Long

    static create(properties: UInt64Value | IUInt64Value): UInt64Value {
        return <UInt64Value>super.create(properties)
    }

    static fromJson(object: JsonValue): UInt64Value {
        if (long.isLong(object)) {
            throw new Error("object must be a long")
        }
        return this.create({value: <Long>object})
    }

    static toJson(message: UInt64Value | IUInt64Value): JsonValue {
        return message.value
    }
}

export interface IInt32Value {
    value?: number
}

export class Int32Value extends Message<Int32Value> implements IInt32Value {
    value!: number

    static create(properties: Int32Value | IInt32Value): Int32Value {
        return <Int32Value>super.create(properties)
    }

    static fromJson(object: JsonValue): Int32Value {
        if (typeof object !== "number") {
            throw new Error("object must be a number")
        }
        return this.create({value: object})
    }

    static toJson(message: Int32Value | IInt32Value): JsonValue {
        return message.value
    }
}

export interface IUInt32Value {
    value?: number
}

export class UInt32Value extends Message<UInt32Value> implements IUInt32Value {
    value!: number

    static create(properties: UInt32Value | IUInt32Value): UInt32Value {
        return <UInt32Value>super.create(properties)
    }

    static fromJson(object: JsonValue): UInt32Value {
        if (typeof object !== "number") {
            throw new Error("object must be a number")
        }
        return this.create({value: object})
    }

    static toJson(message: UInt32Value | IUInt32Value): JsonValue {
        return message.value
    }
}

export interface IBoolValue {
    value?: boolean
}

export class BoolValue extends Message<BoolValue> implements IBoolValue {
    value!: boolean

    static create(properties: BoolValue | IBoolValue): BoolValue {
        return <BoolValue>super.create(properties)
    }

    static fromJson(object: JsonValue): BoolValue {
        if (typeof object !== "boolean") {
            throw new Error("object must be a boolean")
        }
        return this.create({value: object})
    }

    static toJson(message: BoolValue | IBoolValue): JsonValue {
        return message.value
    }
}

export interface IStringValue {
    value?: string
}

export class StringValue extends Message<StringValue> implements IStringValue {
    value!: string

    static create(properties: StringValue | IStringValue): StringValue {
        return <StringValue>super.create(properties)
    }

    static fromJson(object: JsonValue): StringValue {
        if (typeof object !== "string") {
            throw new Error("object must be a string")
        }
        return this.create({value: object})
    }

    static toJson(message: StringValue | IStringValue): JsonValue {
        return message.value
    }
}

export interface IBytesValue {
    value?: Uint8Array
}

export class BytesValue extends Message<BytesValue> implements IBytesValue {
    value!: Uint8Array

    static create(properties: BytesValue | IBytesValue): BytesValue {
        return <BytesValue>super.create(properties)
    }

    static fromJson(object: JsonValue): BytesValue {
        if (object !== "string") {
            throw new Error("object must be a string")
        }
        const buffer = new Uint8Array(0)
        base64.decode(object, buffer, 0)
        return this.create({value: buffer})
    }

    static toJson(message: BytesValue | IBytesValue): JsonValue {
        if (!message.value) return undefined
        return base64.encode(message.value, 0, message.value.length)
    }
}