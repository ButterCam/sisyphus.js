import {binaryifyFun, parseFun} from '../../message'
import {EnumDescriptor, MessageDescriptor} from '../../reflection'
import {Any} from './any.proto'
import {SourceContext} from './source_context.proto'
import {Enum, EnumValue, Field, Option, Syntax, Type} from '@sisyphus.js/runtime/lib/google/protobuf/type'

declare module '@sisyphus.js/runtime/lib/google/protobuf/type' {
    namespace Type {
        let descriptor: MessageDescriptor<Type>

        function binaryify(v: Type): Uint8Array

        function parse(buffer: Uint8Array): Type
    }

    namespace Field {
        let descriptor: MessageDescriptor<Field>

        function binaryify(v: Field): Uint8Array

        function parse(buffer: Uint8Array): Field

        namespace Kind {
            let descriptor: EnumDescriptor
        }

        namespace Cardinality {
            let descriptor: EnumDescriptor
        }
    }

    namespace Enum {
        let descriptor: MessageDescriptor<Enum>

        function binaryify(v: Enum): Uint8Array

        function parse(buffer: Uint8Array): Enum
    }

    namespace EnumValue {
        let descriptor: MessageDescriptor<EnumValue>

        function binaryify(v: EnumValue): Uint8Array

        function parse(buffer: Uint8Array): EnumValue
    }

    namespace Option {
        let descriptor: MessageDescriptor<Option>

        function binaryify(v: Option): Uint8Array

        function parse(buffer: Uint8Array): Option
    }

    namespace Syntax {
        let descriptor: EnumDescriptor
    }
}

export * from '@sisyphus.js/runtime/lib/google/protobuf/type'

Type.descriptor = protobufDefinition({
    name: '.google.protobuf.Type',

    fields: [
        {kind: 'scalar', name: 'name', num: 1, type: 9 /* STRING */},

        {kind: 'message', name: 'fields', num: 2, type: () => Field.descriptor, repeat: true},

        {kind: 'scalar', name: 'oneofs', num: 3, type: 9 /* STRING */, repeat: 1},

        {kind: 'message', name: 'options', num: 4, type: () => Option.descriptor, repeat: true},

        {kind: 'message', name: 'sourceContext', num: 5, type: () => SourceContext.descriptor},

        {kind: 'enum', name: 'syntax', num: 6, type: () => Syntax.descriptor}
    ]
})

Type.binaryify = binaryifyFun(Type.descriptor)

Type.parse = parseFun(Type.descriptor)

Field.descriptor = protobufDefinition({
    name: '.google.protobuf.Field',

    fields: [
        {kind: 'enum', name: 'kind', num: 1, type: () => Field.Kind.descriptor},

        {kind: 'enum', name: 'cardinality', num: 2, type: () => Field.Cardinality.descriptor},

        {kind: 'scalar', name: 'number', num: 3, type: 5 /* INT32 */},

        {kind: 'scalar', name: 'name', num: 4, type: 9 /* STRING */},

        {kind: 'scalar', name: 'typeUrl', num: 6, type: 9 /* STRING */},

        {kind: 'scalar', name: 'oneofIndex', num: 7, type: 5 /* INT32 */},

        {kind: 'scalar', name: 'packed', num: 8, type: 8 /* BOOL */},

        {kind: 'message', name: 'options', num: 9, type: () => Option.descriptor, repeat: true},

        {kind: 'scalar', name: 'jsonName', num: 10, type: 9 /* STRING */},

        {kind: 'scalar', name: 'defaultValue', num: 11, type: 9 /* STRING */}
    ]
})

Field.binaryify = binaryifyFun(Field.descriptor)

Field.parse = parseFun(Field.descriptor)

Field.Kind.descriptor = {
    name: '.google.protobuf.Field.Kind',

    enum: {
        0: 'TYPE_UNKNOWN',

        TYPE_UNKNOWN: 0,

        1: 'TYPE_DOUBLE',

        TYPE_DOUBLE: 1,

        2: 'TYPE_FLOAT',

        TYPE_FLOAT: 2,

        3: 'TYPE_INT64',

        TYPE_INT64: 3,

        4: 'TYPE_UINT64',

        TYPE_UINT64: 4,

        5: 'TYPE_INT32',

        TYPE_INT32: 5,

        6: 'TYPE_FIXED64',

        TYPE_FIXED64: 6,

        7: 'TYPE_FIXED32',

        TYPE_FIXED32: 7,

        8: 'TYPE_BOOL',

        TYPE_BOOL: 8,

        9: 'TYPE_STRING',

        TYPE_STRING: 9,

        10: 'TYPE_GROUP',

        TYPE_GROUP: 10,

        11: 'TYPE_MESSAGE',

        TYPE_MESSAGE: 11,

        12: 'TYPE_BYTES',

        TYPE_BYTES: 12,

        13: 'TYPE_UINT32',

        TYPE_UINT32: 13,

        14: 'TYPE_ENUM',

        TYPE_ENUM: 14,

        15: 'TYPE_SFIXED32',

        TYPE_SFIXED32: 15,

        16: 'TYPE_SFIXED64',

        TYPE_SFIXED64: 16,

        17: 'TYPE_SINT32',

        TYPE_SINT32: 17,

        18: 'TYPE_SINT64',

        TYPE_SINT64: 18,
    }
}

Field.Cardinality.descriptor = {
    name: '.google.protobuf.Field.Cardinality',

    enum: {
        0: 'CARDINALITY_UNKNOWN',

        CARDINALITY_UNKNOWN: 0,

        1: 'CARDINALITY_OPTIONAL',

        CARDINALITY_OPTIONAL: 1,

        2: 'CARDINALITY_REQUIRED',

        CARDINALITY_REQUIRED: 2,

        3: 'CARDINALITY_REPEATED',

        CARDINALITY_REPEATED: 3,
    }
}

Enum.descriptor = protobufDefinition({
    name: '.google.protobuf.Enum',

    fields: [
        {kind: 'scalar', name: 'name', num: 1, type: 9 /* STRING */},

        {kind: 'message', name: 'enumvalue', num: 2, type: () => EnumValue.descriptor, repeat: true},

        {kind: 'message', name: 'options', num: 3, type: () => Option.descriptor, repeat: true},

        {kind: 'message', name: 'sourceContext', num: 4, type: () => SourceContext.descriptor},

        {kind: 'enum', name: 'syntax', num: 5, type: () => Syntax.descriptor}
    ]
})

Enum.binaryify = binaryifyFun(Enum.descriptor)

Enum.parse = parseFun(Enum.descriptor)

EnumValue.descriptor = protobufDefinition({
    name: '.google.protobuf.EnumValue',

    fields: [
        {kind: 'scalar', name: 'name', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'number', num: 2, type: 5 /* INT32 */},

        {kind: 'message', name: 'options', num: 3, type: () => Option.descriptor, repeat: true}
    ]
})

EnumValue.binaryify = binaryifyFun(EnumValue.descriptor)

EnumValue.parse = parseFun(EnumValue.descriptor)

Option.descriptor = protobufDefinition({
    name: '.google.protobuf.Option',

    fields: [
        {kind: 'scalar', name: 'name', num: 1, type: 9 /* STRING */},

        {kind: 'message', name: 'value', num: 2, type: () => Any.descriptor}
    ]
})

Option.binaryify = binaryifyFun(Option.descriptor)

Option.parse = parseFun(Option.descriptor)

Syntax.descriptor = {
    name: '.google.protobuf.Syntax',

    enum: {
        0: 'SYNTAX_PROTO2',

        SYNTAX_PROTO2: 0,

        1: 'SYNTAX_PROTO3',

        SYNTAX_PROTO3: 1,
    }
}
