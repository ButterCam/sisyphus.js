import {long} from '../../long'
import {WrapperType} from '../../wrappers'

/**
 *  Wrapper message for `double`.
 * 
 *  The JSON representation for `DoubleValue` is JSON number.
 */
export type DoubleValue = number & WrapperType

export namespace DoubleValue {
    export const name = 'google.protobuf.DoubleValue'
}

/**
 *  Wrapper message for `float`.
 * 
 *  The JSON representation for `FloatValue` is JSON number.
 */
export type FloatValue = number & WrapperType

export namespace FloatValue {
    export const name = 'google.protobuf.FloatValue'
}

/**
 *  Wrapper message for `int64`.
 * 
 *  The JSON representation for `Int64Value` is JSON string.
 */
export type Int64Value = long & WrapperType

export namespace Int64Value {
    export const name = 'google.protobuf.Int64Value'
}

/**
 *  Wrapper message for `uint64`.
 * 
 *  The JSON representation for `UInt64Value` is JSON string.
 */
export type UInt64Value = long & WrapperType

export namespace UInt64Value {
    export const name = 'google.protobuf.UInt64Value'
}

/**
 *  Wrapper message for `int32`.
 * 
 *  The JSON representation for `Int32Value` is JSON number.
 */
export type Int32Value = number & WrapperType

export namespace Int32Value {
    export const name = 'google.protobuf.Int32Value'
}

/**
 *  Wrapper message for `uint32`.
 * 
 *  The JSON representation for `UInt32Value` is JSON number.
 */
export type UInt32Value = number & WrapperType

export namespace UInt32Value {
    export const name = 'google.protobuf.UInt32Value'
}

/**
 *  Wrapper message for `bool`.
 * 
 *  The JSON representation for `BoolValue` is JSON `true` and `false`.
 */
export type BoolValue = boolean & WrapperType

export namespace BoolValue {
    export const name = 'google.protobuf.BoolValue'
}

/**
 *  Wrapper message for `string`.
 * 
 *  The JSON representation for `StringValue` is JSON string.
 */
export type StringValue = string & WrapperType

export namespace StringValue {
    export const name = 'google.protobuf.StringValue'
}

/**
 *  Wrapper message for `bytes`.
 * 
 *  The JSON representation for `BytesValue` is JSON string.
 */
export type BytesValue = string & WrapperType

export namespace BytesValue {
    export const name = 'google.protobuf.BytesValue'
}
