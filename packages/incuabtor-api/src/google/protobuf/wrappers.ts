import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../_reflection"
import * as $protobuf from "protobufjs"


/**
 * Wrapper message for `double`.
 * 
 * The JSON representation for `DoubleValue` is JSON number.
 */
export interface IDoubleValue extends $sisyphus.IDoubleValue {
    /** The double value. */
    value?: number
}

export class DoubleValue extends $sisyphus.Message<IDoubleValue> implements IDoubleValue {
    value!: number
    get $reflection() {
        return DoubleValue.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.DoubleValue")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): DoubleValue {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.value = reader.double()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): DoubleValue {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IDoubleValue): DoubleValue {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("value") && properties.value !== undefined) result.value = properties.value
        return result
    }
}
DoubleValue.prototype.value = DoubleValue.reflection.fieldsById[1].defaultValue


/**
 * Wrapper message for `float`.
 * 
 * The JSON representation for `FloatValue` is JSON number.
 */
export interface IFloatValue extends $sisyphus.IFloatValue {
    /** The float value. */
    value?: number
}

export class FloatValue extends $sisyphus.Message<IFloatValue> implements IFloatValue {
    value!: number
    get $reflection() {
        return FloatValue.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.FloatValue")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): FloatValue {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.value = reader.float()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): FloatValue {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IFloatValue): FloatValue {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("value") && properties.value !== undefined) result.value = properties.value
        return result
    }
}
FloatValue.prototype.value = FloatValue.reflection.fieldsById[1].defaultValue


/**
 * Wrapper message for `int64`.
 * 
 * The JSON representation for `Int64Value` is JSON string.
 */
export interface IInt64Value extends $sisyphus.IInt64Value {
    /** The int64 value. */
    value?: $protobuf.Long
}

export class Int64Value extends $sisyphus.Message<IInt64Value> implements IInt64Value {
    value!: $protobuf.Long
    get $reflection() {
        return Int64Value.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.Int64Value")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): Int64Value {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.value = reader.int64()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): Int64Value {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IInt64Value): Int64Value {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("value") && properties.value !== undefined) result.value = properties.value
        return result
    }
}
Int64Value.prototype.value = Int64Value.reflection.fieldsById[1].defaultValue


/**
 * Wrapper message for `uint64`.
 * 
 * The JSON representation for `UInt64Value` is JSON string.
 */
export interface IUInt64Value extends $sisyphus.IUInt64Value {
    /** The uint64 value. */
    value?: $protobuf.Long
}

export class UInt64Value extends $sisyphus.Message<IUInt64Value> implements IUInt64Value {
    value!: $protobuf.Long
    get $reflection() {
        return UInt64Value.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.UInt64Value")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): UInt64Value {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.value = reader.uint64()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): UInt64Value {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IUInt64Value): UInt64Value {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("value") && properties.value !== undefined) result.value = properties.value
        return result
    }
}
UInt64Value.prototype.value = UInt64Value.reflection.fieldsById[1].defaultValue


/**
 * Wrapper message for `int32`.
 * 
 * The JSON representation for `Int32Value` is JSON number.
 */
export interface IInt32Value extends $sisyphus.IInt32Value {
    /** The int32 value. */
    value?: number
}

export class Int32Value extends $sisyphus.Message<IInt32Value> implements IInt32Value {
    value!: number
    get $reflection() {
        return Int32Value.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.Int32Value")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): Int32Value {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.value = reader.int32()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): Int32Value {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IInt32Value): Int32Value {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("value") && properties.value !== undefined) result.value = properties.value
        return result
    }
}
Int32Value.prototype.value = Int32Value.reflection.fieldsById[1].defaultValue


/**
 * Wrapper message for `uint32`.
 * 
 * The JSON representation for `UInt32Value` is JSON number.
 */
export interface IUInt32Value extends $sisyphus.IUInt32Value {
    /** The uint32 value. */
    value?: number
}

export class UInt32Value extends $sisyphus.Message<IUInt32Value> implements IUInt32Value {
    value!: number
    get $reflection() {
        return UInt32Value.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.UInt32Value")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): UInt32Value {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.value = reader.uint32()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): UInt32Value {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IUInt32Value): UInt32Value {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("value") && properties.value !== undefined) result.value = properties.value
        return result
    }
}
UInt32Value.prototype.value = UInt32Value.reflection.fieldsById[1].defaultValue


/**
 * Wrapper message for `bool`.
 * 
 * The JSON representation for `BoolValue` is JSON `true` and `false`.
 */
export interface IBoolValue extends $sisyphus.IIBoolValue {
    /** The bool value. */
    value?: boolean
}

export class BoolValue extends $sisyphus.Message<IBoolValue> implements IBoolValue {
    value!: boolean
    get $reflection() {
        return BoolValue.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.BoolValue")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): BoolValue {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.value = reader.bool()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): BoolValue {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IBoolValue): BoolValue {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("value") && properties.value !== undefined) result.value = properties.value
        return result
    }
}
BoolValue.prototype.value = BoolValue.reflection.fieldsById[1].defaultValue


/**
 * Wrapper message for `string`.
 * 
 * The JSON representation for `StringValue` is JSON string.
 */
export interface IStringValue extends $sisyphus.IStringValue {
    /** The string value. */
    value?: string
}

export class StringValue extends $sisyphus.Message<IStringValue> implements IStringValue {
    value!: string
    get $reflection() {
        return StringValue.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.StringValue")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): StringValue {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.value = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): StringValue {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IStringValue): StringValue {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("value") && properties.value !== undefined) result.value = properties.value
        return result
    }
}
StringValue.prototype.value = StringValue.reflection.fieldsById[1].defaultValue


/**
 * Wrapper message for `bytes`.
 * 
 * The JSON representation for `BytesValue` is JSON string.
 */
export interface IBytesValue extends $sisyphus.IBytesValue {
    /** The bytes value. */
    value?: Uint8Array
}

export class BytesValue extends $sisyphus.Message<IBytesValue> implements IBytesValue {
    value!: Uint8Array
    get $reflection() {
        return BytesValue.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.BytesValue")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): BytesValue {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.value = reader.bytes()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): BytesValue {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IBytesValue): BytesValue {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("value") && properties.value !== undefined) result.value = properties.value
        return result
    }
}
BytesValue.prototype.value = BytesValue.reflection.fieldsById[1].defaultValue