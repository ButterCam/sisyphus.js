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
}
$reflection.root.lookupType(".google.protobuf.DoubleValue").messageCtor = DoubleValue


/**
 * Wrapper message for `float`.
 * 
 * The JSON representation for `FloatValue` is JSON number.
 */
export interface IFloatValue extends $sisyphus.IFloatValue {
}

export class FloatValue extends $sisyphus.FloatValue implements IFloatValue {
}
$reflection.root.lookupType(".google.protobuf.FloatValue").messageCtor = FloatValue


/**
 * Wrapper message for `int64`.
 * 
 * The JSON representation for `Int64Value` is JSON string.
 */
export interface IInt64Value extends $sisyphus.IInt64Value {
}

export class Int64Value extends $sisyphus.Int64Value implements IInt64Value {
}
$reflection.root.lookupType(".google.protobuf.Int64Value").messageCtor = Int64Value


/**
 * Wrapper message for `uint64`.
 * 
 * The JSON representation for `UInt64Value` is JSON string.
 */
export interface IUInt64Value extends $sisyphus.IUInt64Value {
}

export class UInt64Value extends $sisyphus.UInt64Value implements IUInt64Value {
}
$reflection.root.lookupType(".google.protobuf.UInt64Value").messageCtor = UInt64Value


/**
 * Wrapper message for `int32`.
 * 
 * The JSON representation for `Int32Value` is JSON number.
 */
export interface IInt32Value extends $sisyphus.IInt32Value {
}

export class Int32Value extends $sisyphus.Int32Value implements IInt32Value {
}
$reflection.root.lookupType(".google.protobuf.Int32Value").messageCtor = Int32Value


/**
 * Wrapper message for `uint32`.
 * 
 * The JSON representation for `UInt32Value` is JSON number.
 */
export interface IUInt32Value extends $sisyphus.IUInt32Value {
}

export class UInt32Value extends $sisyphus.UInt32Value implements IUInt32Value {
}
$reflection.root.lookupType(".google.protobuf.UInt32Value").messageCtor = UInt32Value


/**
 * Wrapper message for `bool`.
 * 
 * The JSON representation for `BoolValue` is JSON `true` and `false`.
 */
export interface IBoolValue extends $sisyphus.IBoolValue {
}

export class BoolValue extends $sisyphus.BoolValue implements IBoolValue {
}
$reflection.root.lookupType(".google.protobuf.BoolValue").messageCtor = BoolValue


/**
 * Wrapper message for `string`.
 * 
 * The JSON representation for `StringValue` is JSON string.
 */
export interface IStringValue extends $sisyphus.IStringValue {
}

export class StringValue extends $sisyphus.StringValue implements IStringValue {
}
$reflection.root.lookupType(".google.protobuf.StringValue").messageCtor = StringValue


/**
 * Wrapper message for `bytes`.
 * 
 * The JSON representation for `BytesValue` is JSON string.
 */
export interface IBytesValue extends $sisyphus.IBytesValue {
}

export class BytesValue extends $sisyphus.BytesValue implements IBytesValue {
}
$reflection.root.lookupType(".google.protobuf.BytesValue").messageCtor = BytesValue