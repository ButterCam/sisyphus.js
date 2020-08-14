/**
 * Wrapper message for `double`.
 *
 * The JSON representation for `DoubleValue` is JSON number.
 */
import {Long} from "protobufjs";

export interface IDoubleValue {
    /** The double value. */
    value?: number
}

/**
 * Wrapper message for `float`.
 * 
 * The JSON representation for `FloatValue` is JSON number.
 */
export interface IFloatValue {
    /** The float value. */
    value?: number
}

/**
 * Wrapper message for `int64`.
 * 
 * The JSON representation for `Int64Value` is JSON string.
 */
export interface IInt64Value {
    /** The int64 value. */
    value?: Long
}

/**
 * Wrapper message for `uint64`.
 * 
 * The JSON representation for `UInt64Value` is JSON string.
 */
export interface IUInt64Value {
    /** The uint64 value. */
    value?: Long
}

/**
 * Wrapper message for `int32`.
 * 
 * The JSON representation for `Int32Value` is JSON number.
 */
export interface IInt32Value {
    /** The int32 value. */
    value?: number
}

/**
 * Wrapper message for `uint32`.
 * 
 * The JSON representation for `UInt32Value` is JSON number.
 */
export interface IUInt32Value {
    /** The uint32 value. */
    value?: number
}

/**
 * Wrapper message for `bool`.
 * 
 * The JSON representation for `BoolValue` is JSON `true` and `false`.
 */
export interface IBoolValue {
    /** The bool value. */
    value?: boolean
}

/**
 * Wrapper message for `string`.
 * 
 * The JSON representation for `StringValue` is JSON string.
 */
export interface IStringValue {
    /** The string value. */
    value?: string
}

/**
 * Wrapper message for `bytes`.
 * 
 * The JSON representation for `BytesValue` is JSON string.
 */
export interface IBytesValue {
    /** The bytes value. */
    value?: Uint8Array
}
