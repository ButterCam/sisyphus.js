import {WrapperType} from '../../wrappers'

/**
 *  `Struct` represents a structured data value, consisting of fields
 *  which map to dynamically typed values. In some languages, `Struct`
 *  might be supported by a native representation. For example, in
 *  scripting languages like JS a struct is represented as an
 *  object. The details of that representation are described together
 *  with the proto support for the language.
 * 
 *  The JSON representation for `Struct` is JSON object.
 */
export type Struct = { [k: string]: Value } & WrapperType

export namespace Struct {
    export const name = 'google.protobuf.Struct'
}

/**
 *  `Value` represents a dynamically typed value which can be either
 *  null, a number, a string, a boolean, a recursive struct value, or a
 *  list of values. A producer of value is expected to set one of these
 *  variants. Absence of any variant indicates an error.
 * 
 *  The JSON representation for `Value` is JSON value.
 */
export type Value = Struct | ListValue | NullValue | ((boolean | string | number) & WrapperType)

export namespace Value {
    export const name = 'google.protobuf.Value'
}

/**
 *  `ListValue` is a wrapper around a repeated field of values.
 * 
 *  The JSON representation for `ListValue` is JSON array.
 */
export type ListValue = Value[] & WrapperType

export namespace ListValue {
    export const name = 'google.protobuf.ListValue'
}

/**
 *  `NullValue` is a singleton enumeration to represent the null value for the
 *  `Value` type union.
 * 
 *   The JSON representation for `NullValue` is JSON `null`.
 */
export type NullValue = null & WrapperType

export namespace NullValue {
    export const name = 'google.protobuf.NullValue'
}
