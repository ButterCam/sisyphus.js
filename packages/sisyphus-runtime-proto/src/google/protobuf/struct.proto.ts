import {binaryifyFun, parseFun} from '../../message'
import {EnumDescriptor, MessageDescriptor} from '../../reflection'
import {boxListValue, boxStruct, boxValue, readListValue, readStruct, readValue, unboxListValue, unboxStruct, unboxValue, writeListValue, writeStruct, writeValue} from '../../wellknown/struct'
import {ListValue, NullValue, Struct, Value} from '@sisyphus.js/runtime/lib/google/protobuf/struct'

declare module '@sisyphus.js/runtime/lib/google/protobuf/struct' {
    namespace Struct {
        let descriptor: MessageDescriptor<Struct>

        function binaryify(v: Struct): Uint8Array

        function parse(buffer: Uint8Array): Struct
    }

    namespace Value {
        let descriptor: MessageDescriptor<Value>

        function binaryify(v: Value): Uint8Array

        function parse(buffer: Uint8Array): Value
    }

    namespace ListValue {
        let descriptor: MessageDescriptor<ListValue>

        function binaryify(v: ListValue): Uint8Array

        function parse(buffer: Uint8Array): ListValue
    }

    namespace NullValue {
        let descriptor: EnumDescriptor
    }
}

export * from '@sisyphus.js/runtime/lib/google/protobuf/struct'

Struct.descriptor = protobufDefinition({
    name: '.google.protobuf.Struct',

    fields: [{kind: 'map', name: 'fields', num: 1, key: 9 /* STRING */, value: () => Value.descriptor}],

    write: writeStruct, read: readStruct, box: boxStruct, unbox: unboxStruct
})

Struct.binaryify = binaryifyFun(Struct.descriptor)

Struct.parse = parseFun(Struct.descriptor)

Value.descriptor = protobufDefinition({
    name: '.google.protobuf.Value',

    fields: [
        {kind: 'enum', name: 'nullValue', num: 1, type: () => NullValue.descriptor},

        {kind: 'scalar', name: 'numberValue', num: 2, type: 1 /* DOUBLE */},

        {kind: 'scalar', name: 'stringValue', num: 3, type: 9 /* STRING */},

        {kind: 'scalar', name: 'boolValue', num: 4, type: 8 /* BOOL */},

        {kind: 'message', name: 'structValue', num: 5, type: () => Struct.descriptor},

        {kind: 'message', name: 'listValue', num: 6, type: () => ListValue.descriptor}
    ],

    write: writeValue, read: readValue, box: boxValue, unbox: unboxValue
})

Value.binaryify = binaryifyFun(Value.descriptor)

Value.parse = parseFun(Value.descriptor)

ListValue.descriptor = protobufDefinition({
    name: '.google.protobuf.ListValue',

    fields: [{kind: 'message', name: 'values', num: 1, type: () => Value.descriptor, repeat: true}],

    write: writeListValue, read: readListValue, box: boxListValue, unbox: unboxListValue
})

ListValue.binaryify = binaryifyFun(ListValue.descriptor)

ListValue.parse = parseFun(ListValue.descriptor)

NullValue.descriptor = {
    name: '.google.protobuf.NullValue',

    enum: {
        0: 'NULL_VALUE',

        NULL_VALUE: 0,
    }
}
