import * as $reflection from "../../_reflection"
import * as $sisyphus from "@sisyphus.js/core"


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

export namespace NullValue {
    export const reflection = $reflection.root.lookupEnum(".google.protobuf.NullValue")
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
export interface IStruct extends $sisyphus.IStruct {
}

export class Struct extends $sisyphus.Struct implements IStruct {
    get $type() {
        return Struct.$type
    }

    static readonly $type = $reflection.root.lookupType(".google.protobuf.Struct")
}
Struct.$type.generatedObject = Struct


/**
 * `Value` represents a dynamically typed value which can be either
 * null, a number, a string, a boolean, a recursive struct value, or a
 * list of values. A producer of value is expected to set one of that
 * variants, absence of any variant indicates an error.
 * 
 * The JSON representation for `Value` is JSON value.
 */
export interface IValue extends $sisyphus.IValue {
}

export class Value extends $sisyphus.Value implements IValue {
    get $type() {
        return Value.$type
    }

    static readonly $type = $reflection.root.lookupType(".google.protobuf.Value")
}
Value.$type.generatedObject = Value


/**
 * `ListValue` is a wrapper around a repeated field of values.
 * 
 * The JSON representation for `ListValue` is JSON array.
 */
export interface IListValue extends $sisyphus.IListValue {
}

export class ListValue extends $sisyphus.ListValue implements IListValue {
    get $type() {
        return ListValue.$type
    }

    static readonly $type = $reflection.root.lookupType(".google.protobuf.ListValue")
}
ListValue.$type.generatedObject = ListValue