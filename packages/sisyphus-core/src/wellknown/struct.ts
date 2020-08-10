/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 * 
 * The JSON representation for `NullValue` is JSON `null`.
 */
export enum NullValue {
    /** Null value. */
    NULL_VALUE = 0,
}

/**
 * `Struct` represents a structured data value, consisting of fields
 * which map to dynamically typed values. In some languages, `Struct`
 * might be supported by a native representation. For example, in
 * scripting languages like JS a struct is represented as an
 * object. The details of that representation are described together
 * with the proto support for the language.
 * 
 * The JSON representation for `Struct` is JSON object.
 */
export interface IStruct {
    /** Unordered map of dynamically typed values. */
    fields?: ({ [k: string]: IValue } | null)
}

/**
 * `Value` represents a dynamically typed value which can be either
 * null, a number, a string, a boolean, a recursive struct value, or a
 * list of values. A producer of value is expected to set one of that
 * variants, absence of any variant indicates an error.
 * 
 * The JSON representation for `Value` is JSON value.
 */
export interface IValue {
    /** Represents a null value. */
    nullValue?: NullValue
    /** Represents a double value. */
    numberValue?: number
    /** Represents a string value. */
    stringValue?: string
    /** Represents a boolean value. */
    boolValue?: boolean
    /** Represents a structured value. */
    structValue?: (IStruct | null)
    /** Represents a repeated `Value`. */
    listValue?: (IListValue | null)
    /** The kind of value. */
    kind?: string
}

/**
 * `ListValue` is a wrapper around a repeated field of values.
 * 
 * The JSON representation for `ListValue` is JSON array.
 */
export interface IListValue {
    /** Repeated field of dynamically typed values. */
    values?: (IValue[] | null)
}
