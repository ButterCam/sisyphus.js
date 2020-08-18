import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../_reflection"


/**
 * Wrapper message for `double`.
 *
 * The JSON representation for `DoubleValue` is JSON number.
 */
export interface IDoubleValue extends $sisyphus.IDoubleValue {
}

export class DoubleValue extends $sisyphus.DoubleValue implements IDoubleValue {
    get $type() {
        return DoubleValue.$type
    }

    static readonly $type = $reflection.root.lookupType(".google.protobuf.DoubleValue")
}

DoubleValue.$type.generatedObject = DoubleValue


/**
 * Wrapper message for `float`.
 *
 * The JSON representation for `FloatValue` is JSON number.
 */
export interface IFloatValue extends $sisyphus.IFloatValue {
}

export class FloatValue extends $sisyphus.FloatValue implements IFloatValue {
    get $type() {
        return FloatValue.$type
    }

    static readonly $type = $reflection.root.lookupType(".google.protobuf.FloatValue")
}

FloatValue.$type.generatedObject = FloatValue


/**
 * Wrapper message for `int64`.
 *
 * The JSON representation for `Int64Value` is JSON string.
 */
export interface IInt64Value extends $sisyphus.IInt64Value {
}

export class Int64Value extends $sisyphus.Int64Value implements IInt64Value {
    get $type() {
        return Int64Value.$type
    }

    static readonly $type = $reflection.root.lookupType(".google.protobuf.Int64Value")
}

Int64Value.$type.generatedObject = Int64Value


/**
 * Wrapper message for `uint64`.
 *
 * The JSON representation for `UInt64Value` is JSON string.
 */
export interface IUInt64Value extends $sisyphus.IUInt64Value {
}

export class UInt64Value extends $sisyphus.UInt64Value implements IUInt64Value {
    get $type() {
        return UInt64Value.$type
    }

    static readonly $type = $reflection.root.lookupType(".google.protobuf.UInt64Value")
}

UInt64Value.$type.generatedObject = UInt64Value


/**
 * Wrapper message for `int32`.
 *
 * The JSON representation for `Int32Value` is JSON number.
 */
export interface IInt32Value extends $sisyphus.IInt32Value {
}

export class Int32Value extends $sisyphus.Int32Value implements IInt32Value {
    get $type() {
        return Int32Value.$type
    }

    static readonly $type = $reflection.root.lookupType(".google.protobuf.Int32Value")
}

Int32Value.$type.generatedObject = Int32Value


/**
 * Wrapper message for `uint32`.
 *
 * The JSON representation for `UInt32Value` is JSON number.
 */
export interface IUInt32Value extends $sisyphus.IUInt32Value {
}

export class UInt32Value extends $sisyphus.UInt32Value implements IUInt32Value {
    get $type() {
        return UInt32Value.$type
    }

    static readonly $type = $reflection.root.lookupType(".google.protobuf.UInt32Value")
}

UInt32Value.$type.generatedObject = UInt32Value


/**
 * Wrapper message for `bool`.
 *
 * The JSON representation for `BoolValue` is JSON `true` and `false`.
 */
export interface IBoolValue extends $sisyphus.IBoolValue {
}

export class BoolValue extends $sisyphus.BoolValue implements IBoolValue {
    get $type() {
        return BoolValue.$type
    }

    static readonly $type = $reflection.root.lookupType(".google.protobuf.BoolValue")
}

BoolValue.$type.generatedObject = BoolValue


/**
 * Wrapper message for `string`.
 *
 * The JSON representation for `StringValue` is JSON string.
 */
export interface IStringValue extends $sisyphus.IStringValue {
}

export class StringValue extends $sisyphus.StringValue implements IStringValue {
    get $type() {
        return StringValue.$type
    }

    static readonly $type = $reflection.root.lookupType(".google.protobuf.StringValue")
}

StringValue.$type.generatedObject = StringValue


/**
 * Wrapper message for `bytes`.
 *
 * The JSON representation for `BytesValue` is JSON string.
 */
export interface IBytesValue extends $sisyphus.IBytesValue {
}

export class BytesValue extends $sisyphus.BytesValue implements IBytesValue {
    get $type() {
        return BytesValue.$type
    }

    static readonly $type = $reflection.root.lookupType(".google.protobuf.BytesValue")
}

BytesValue.$type.generatedObject = BytesValue