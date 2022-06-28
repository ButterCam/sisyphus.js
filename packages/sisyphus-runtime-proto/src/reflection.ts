import {AnyType} from '@sisyphus.js/runtime'
import {ProtobufReader, ProtobufWriter} from './protobuf'

export type Options = { readonly [name: string]: any }

export interface EnumDescriptor {
    readonly name: string

    readonly enum: {
        readonly [key: number]: string
        readonly [k: string]: number | string
    }

    readonly options?: Options
}

export interface MessageDescriptor<T> {
    readonly name: string

    readonly fields: readonly FieldDescriptor[]

    readonly options?: Options

    read?: (reader: ProtobufReader, size: number) => T

    write?: (writer: ProtobufWriter, value: T) => void

    box?: (value: T) => AnyType<T>

    unbox?: (any: AnyType<T>) => T
}

export type FieldDescriptor = EnumFieldDescriptor | MessageFieldDescriptor | ScalarFieldDescriptor | MapFieldDescriptor

interface BaseFieldDescriptor {
    readonly num: number

    readonly name: string

    readonly oneof?: string

    readonly options?: Options
}

export interface EnumFieldDescriptor extends BaseFieldDescriptor {
    kind: 'enum'

    type: () => EnumDescriptor

    repeat?: RepeatType
}

export interface MessageFieldDescriptor extends BaseFieldDescriptor {
    kind: 'message'

    type: () => MessageDescriptor<any>

    repeat?: boolean
}

export interface ScalarFieldDescriptor extends BaseFieldDescriptor {
    kind: 'scalar'

    type: ScalarType

    repeat?: RepeatType
}

export interface MapFieldDescriptor extends BaseFieldDescriptor {
    kind: 'map'

    key: Exclude<ScalarType, ScalarType.FLOAT | ScalarType.DOUBLE | ScalarType.BYTES> | (() => EnumDescriptor)

    value: (() => EnumDescriptor | MessageDescriptor<any>) | ScalarType
}

export enum ScalarType {
    DOUBLE = 1,
    FLOAT = 2,
    // Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
    // negative values are likely.
    INT64 = 3,
    UINT64 = 4,
    // Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
    // negative values are likely.
    INT32 = 5,
    FIXED64 = 6,
    FIXED32 = 7,
    BOOL = 8,
    STRING = 9,
    // Tag-delimited aggregate.
    // Group type is deprecated and not supported in proto3. However, Proto3
    // implementations should still be able to parse the group wire format and
    // treat group fields as unknown fields.
    // TYPE_GROUP = 10,
    // TYPE_MESSAGE = 11,  // Length-delimited aggregate.

    // New in version 2.
    BYTES = 12,
    UINT32 = 13,
    // TYPE_ENUM = 14,
    SFIXED32 = 15,
    SFIXED64 = 16,
    SINT32 = 17,  // Uses ZigZag encoding.
    SINT64 = 18,  // Uses ZigZag encoding.
}

export enum RepeatType {
    PACKED, UNPACKED
}

const definitions: { [type: string]: MessageDescriptor<any> } = {}

const extensions: { [type: string]: FieldDescriptor[] } = {}

declare global {
    function protobufDefinition(type: string): MessageDescriptor<any> | undefined

    function protobufDefinition(descriptor: MessageDescriptor<any>): MessageDescriptor<any>

    function extendDefinition(type: string, field: FieldDescriptor): FieldDescriptor

    function extendDefinitions(type: string): FieldDescriptor[]
}

global.protobufDefinition = function (typeOrDescriptor: MessageDescriptor<any> | string): MessageDescriptor<any> {
    if (typeof typeOrDescriptor === 'string') {
        return definitions[typeOrDescriptor]
    } else {
        if (typeOrDescriptor == null || typeOrDescriptor.name == null) throw new Error('Wrong message descriptor.')
        definitions[typeOrDescriptor.name] = typeOrDescriptor
        return typeOrDescriptor
    }
}

global.extendDefinition = function (type: string, field: FieldDescriptor): FieldDescriptor {
    const list = extensions[type] ?? []
    list.push(field)
    extensions[type] = list
    return field
}

global.extendDefinitions = function (type: string): FieldDescriptor[] {
    return extensions[type] ?? []
}
