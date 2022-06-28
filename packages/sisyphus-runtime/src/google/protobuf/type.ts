import {Any} from './any'
import {SourceContext} from './source_context'

/**  A protocol buffer message type. */
export interface Type {
    /**  The fully qualified message name. */
    name?: string

    /**  The list of fields. */
    fields?: Field[]

    /**  The list of types appearing in `oneof` definitions in this type. */
    oneofs?: string[]

    /**  The protocol buffer options. */
    options?: Option[]

    /**  The source context. */
    sourceContext?: SourceContext

    /**  The source syntax. */
    syntax?: Syntax
}

export namespace Type {
    export const name = 'google.protobuf.Type'
}

/**  A single field of a message type. */
export interface Field {
    /**  The field type. */
    kind?: Field.Kind

    /**  The field cardinality. */
    cardinality?: Field.Cardinality

    /**  The field number. */
    number?: number

    /**  The field name. */
    name?: string

    /**
     *  The field type URL, without the scheme, for message or enumeration
     *  types. Example: `"type.googleapis.com/google.protobuf.Timestamp"`.
     */
    typeUrl?: string

    /**
     *  The index of the field type in `Type.oneofs`, for message or enumeration
     *  types. The first type has index 1; zero means the type is not in the list.
     */
    oneofIndex?: number

    /**  Whether to use alternative packed wire representation. */
    packed?: boolean

    /**  The protocol buffer options. */
    options?: Option[]

    /**  The field JSON name. */
    jsonName?: string

    /**  The string value of the default value of this field. Proto2 syntax only. */
    defaultValue?: string
}

export namespace Field {
    export const name = 'google.protobuf.Field'

    /**  Basic field types. */
    export enum Kind {
        /**  Field type unknown. */
        TYPE_UNKNOWN = 'TYPE_UNKNOWN',

        /**  Field type double. */
        TYPE_DOUBLE = 'TYPE_DOUBLE',

        /**  Field type float. */
        TYPE_FLOAT = 'TYPE_FLOAT',

        /**  Field type int64. */
        TYPE_INT64 = 'TYPE_INT64',

        /**  Field type uint64. */
        TYPE_UINT64 = 'TYPE_UINT64',

        /**  Field type int32. */
        TYPE_INT32 = 'TYPE_INT32',

        /**  Field type fixed64. */
        TYPE_FIXED64 = 'TYPE_FIXED64',

        /**  Field type fixed32. */
        TYPE_FIXED32 = 'TYPE_FIXED32',

        /**  Field type bool. */
        TYPE_BOOL = 'TYPE_BOOL',

        /**  Field type string. */
        TYPE_STRING = 'TYPE_STRING',

        /**  Field type group. Proto2 syntax only, and deprecated. */
        TYPE_GROUP = 'TYPE_GROUP',

        /**  Field type message. */
        TYPE_MESSAGE = 'TYPE_MESSAGE',

        /**  Field type bytes. */
        TYPE_BYTES = 'TYPE_BYTES',

        /**  Field type uint32. */
        TYPE_UINT32 = 'TYPE_UINT32',

        /**  Field type enum. */
        TYPE_ENUM = 'TYPE_ENUM',

        /**  Field type sfixed32. */
        TYPE_SFIXED32 = 'TYPE_SFIXED32',

        /**  Field type sfixed64. */
        TYPE_SFIXED64 = 'TYPE_SFIXED64',

        /**  Field type sint32. */
        TYPE_SINT32 = 'TYPE_SINT32',

        /**  Field type sint64. */
        TYPE_SINT64 = 'TYPE_SINT64',
    }

    export namespace Kind {
        export const name = 'google.protobuf.Field.Kind'
    }

    /**  Whether a field is optional, required, or repeated. */
    export enum Cardinality {
        /**  For fields with unknown cardinality. */
        UNKNOWN = 'CARDINALITY_UNKNOWN',

        /**  For optional fields. */
        OPTIONAL = 'CARDINALITY_OPTIONAL',

        /**  For required fields. Proto2 syntax only. */
        REQUIRED = 'CARDINALITY_REQUIRED',

        /**  For repeated fields. */
        REPEATED = 'CARDINALITY_REPEATED',
    }

    export namespace Cardinality {
        export const name = 'google.protobuf.Field.Cardinality'
    }
}

/**  Enum type definition. */
export interface Enum {
    /**  Enum type name. */
    name?: string

    /**  Enum value definitions. */
    enumvalue?: EnumValue[]

    /**  Protocol buffer options. */
    options?: Option[]

    /**  The source context. */
    sourceContext?: SourceContext

    /**  The source syntax. */
    syntax?: Syntax
}

export namespace Enum {
    export const name = 'google.protobuf.Enum'
}

/**  Enum value definition. */
export interface EnumValue {
    /**  Enum value name. */
    name?: string

    /**  Enum value number. */
    number?: number

    /**  Protocol buffer options. */
    options?: Option[]
}

export namespace EnumValue {
    export const name = 'google.protobuf.EnumValue'
}

/**
 *  A protocol buffer option, which can be attached to a message, field,
 *  enumeration, etc.
 */
export interface Option {
    /**
     *  The option's name. For protobuf built-in options (options defined in
     *  descriptor.proto), this is the short name. For example, `"map_entry"`.
     *  For custom options, it should be the fully-qualified name. For example,
     *  `"google.api.http"`.
     */
    name?: string

    /**
     *  The option's value packed in an Any message. If the value is a primitive,
     *  the corresponding wrapper type defined in google/protobuf/wrappers.proto
     *  should be used. If the value is an enum, it should be stored as an int32
     *  value using the google.protobuf.Int32Value type.
     */
    value?: Any
}

export namespace Option {
    export const name = 'google.protobuf.Option'
}

/**  The syntax in which a protocol buffer element is defined. */
export enum Syntax {
    /**  Syntax `proto2`. */
    PROTO2 = 'SYNTAX_PROTO2',

    /**  Syntax `proto3`. */
    PROTO3 = 'SYNTAX_PROTO3',
}

export namespace Syntax {
    export const name = 'google.protobuf.Syntax'
}
