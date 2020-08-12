import * as $sisyphus from "@sisyphus.js/core"
import * as $protobuf from "protobufjs"
import * as $reflection from "../../_reflection"


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
export interface IStruct {
    /** Unordered map of dynamically typed values. */
    fields?: ({ [k: string]: IValue } | null)
}

export class Struct extends $sisyphus.Message<IStruct> implements IStruct {
    fields!: ({ [k: string]: IValue } | null)
    get $reflection() {
        return Struct.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.Struct")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): Struct {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    if (!result.fields) result.fields = {}
                    const [key, value] = sisyphus.readMapEntry(this.reflection.fields["fields"], reader, Value)
                    result.fields[key] = value
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): Struct {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IStruct): Struct {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("fields") && properties.fields !== undefined) result.fields = Value.create(properties.fields)
        return result
    }
}
Struct.prototype.fields = null


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

export class Value extends $sisyphus.Message<IValue> implements IValue {
    nullValue!: NullValue
    numberValue!: number
    stringValue!: string
    boolValue!: boolean
    structValue!: (IStruct | null)
    listValue!: (IListValue | null)
    kind?: string

    get $reflection() {
        return Value.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.Value")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): Value {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.nullValue = reader.uint32()
                    break
                case 2:
                    result.numberValue = reader.double()
                    break
                case 3:
                    result.stringValue = reader.string()
                    break
                case 4:
                    result.boolValue = reader.bool()
                    break
                case 5:
                    result.structValue = Struct.decodeDelimited(reader)
                    break
                case 6:
                    result.listValue = ListValue.decodeDelimited(reader)
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): Value {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IValue): Value {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("nullValue") && properties.nullValue !== undefined) result.nullValue = properties.nullValue
        if(properties.hasOwnProperty("numberValue") && properties.numberValue !== undefined) result.numberValue = properties.numberValue
        if(properties.hasOwnProperty("stringValue") && properties.stringValue !== undefined) result.stringValue = properties.stringValue
        if(properties.hasOwnProperty("boolValue") && properties.boolValue !== undefined) result.boolValue = properties.boolValue
        if(properties.hasOwnProperty("structValue") && properties.structValue !== undefined) result.structValue = Struct.create(properties.structValue)
        if(properties.hasOwnProperty("listValue") && properties.listValue !== undefined) result.listValue = ListValue.create(properties.listValue)
        return result
    }
}
Object.defineProperty(Value.prototype, "kind", $sisyphus.oneOfProperty("nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"))
Value.prototype.nullValue = NullValue.NULL_VALUE
Value.prototype.numberValue = 0
Value.prototype.stringValue = ""
Value.prototype.boolValue = false
Value.prototype.structValue = null
Value.prototype.listValue = null


/**
 * `ListValue` is a wrapper around a repeated field of values.
 * 
 * The JSON representation for `ListValue` is JSON array.
 */
export interface IListValue {
    /** Repeated field of dynamically typed values. */
    values?: (IValue[] | null)
}

export class ListValue extends $sisyphus.Message<IListValue> implements IListValue {
    values!: (IValue[] | null)
    get $reflection() {
        return ListValue.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.ListValue")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListValue {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    if (!result.values) result.values = []
                    result.values.push(Value.decodeDelimited(reader))
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListValue {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListValue): ListValue {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("values") && properties.values !== undefined) result.values = Value.create(properties.values)
        return result
    }
}
ListValue.prototype.values = null