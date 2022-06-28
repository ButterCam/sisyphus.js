import {binaryifyFun, parseFun} from '../../message'
import {MessageDescriptor} from '../../reflection'
import {boxBoolValue, boxBytesValue, boxDoubleValue, boxFloatValue, boxInt32Value, boxInt64Value, boxStringValue, boxUInt32Value, boxUInt64Value, readBoolValue, readBytesValue, readDoubleValue, readFloatValue, readInt32Value, readInt64Value, readStringValue, readUInt32Value, readUInt64Value, unboxBoolValue, unboxBytesValue, unboxDoubleValue, unboxFloatValue, unboxInt32Value, unboxInt64Value, unboxStringValue, unboxUInt32Value, unboxUInt64Value, writeBoolValue, writeBytesValue, writeDoubleValue, writeFloatValue, writeInt32Value, writeInt64Value, writeStringValue, writeUInt32Value, writeUInt64Value} from '../../wellknown/wrappers'
import {BoolValue, BytesValue, DoubleValue, FloatValue, Int32Value, Int64Value, StringValue, UInt32Value, UInt64Value} from '@sisyphus.js/runtime/lib/google/protobuf/wrappers'

declare module '@sisyphus.js/runtime/lib/google/protobuf/wrappers' {
    namespace DoubleValue {
        let descriptor: MessageDescriptor<DoubleValue>

        function binaryify(v: DoubleValue): Uint8Array

        function parse(buffer: Uint8Array): DoubleValue
    }

    namespace FloatValue {
        let descriptor: MessageDescriptor<FloatValue>

        function binaryify(v: FloatValue): Uint8Array

        function parse(buffer: Uint8Array): FloatValue
    }

    namespace Int64Value {
        let descriptor: MessageDescriptor<Int64Value>

        function binaryify(v: Int64Value): Uint8Array

        function parse(buffer: Uint8Array): Int64Value
    }

    namespace UInt64Value {
        let descriptor: MessageDescriptor<UInt64Value>

        function binaryify(v: UInt64Value): Uint8Array

        function parse(buffer: Uint8Array): UInt64Value
    }

    namespace Int32Value {
        let descriptor: MessageDescriptor<Int32Value>

        function binaryify(v: Int32Value): Uint8Array

        function parse(buffer: Uint8Array): Int32Value
    }

    namespace UInt32Value {
        let descriptor: MessageDescriptor<UInt32Value>

        function binaryify(v: UInt32Value): Uint8Array

        function parse(buffer: Uint8Array): UInt32Value
    }

    namespace BoolValue {
        let descriptor: MessageDescriptor<BoolValue>

        function binaryify(v: BoolValue): Uint8Array

        function parse(buffer: Uint8Array): BoolValue
    }

    namespace StringValue {
        let descriptor: MessageDescriptor<StringValue>

        function binaryify(v: StringValue): Uint8Array

        function parse(buffer: Uint8Array): StringValue
    }

    namespace BytesValue {
        let descriptor: MessageDescriptor<BytesValue>

        function binaryify(v: BytesValue): Uint8Array

        function parse(buffer: Uint8Array): BytesValue
    }
}

export * from '@sisyphus.js/runtime/lib/google/protobuf/wrappers'

DoubleValue.descriptor = protobufDefinition({
    name: '.google.protobuf.DoubleValue',

    fields: [{kind: 'scalar', name: 'value', num: 1, type: 1 /* DOUBLE */}],

    write: writeDoubleValue, read: readDoubleValue, box: boxDoubleValue, unbox: unboxDoubleValue
})

DoubleValue.binaryify = binaryifyFun(DoubleValue.descriptor)

DoubleValue.parse = parseFun(DoubleValue.descriptor)

FloatValue.descriptor = protobufDefinition({
    name: '.google.protobuf.FloatValue',

    fields: [{kind: 'scalar', name: 'value', num: 1, type: 2 /* FLOAT */}],

    write: writeFloatValue, read: readFloatValue, box: boxFloatValue, unbox: unboxFloatValue
})

FloatValue.binaryify = binaryifyFun(FloatValue.descriptor)

FloatValue.parse = parseFun(FloatValue.descriptor)

Int64Value.descriptor = protobufDefinition({
    name: '.google.protobuf.Int64Value',

    fields: [{kind: 'scalar', name: 'value', num: 1, type: 3 /* INT64 */}],

    write: writeInt64Value, read: readInt64Value, box: boxInt64Value, unbox: unboxInt64Value
})

Int64Value.binaryify = binaryifyFun(Int64Value.descriptor)

Int64Value.parse = parseFun(Int64Value.descriptor)

UInt64Value.descriptor = protobufDefinition({
    name: '.google.protobuf.UInt64Value',

    fields: [{kind: 'scalar', name: 'value', num: 1, type: 4 /* UINT64 */}],

    write: writeUInt64Value, read: readUInt64Value, box: boxUInt64Value, unbox: unboxUInt64Value
})

UInt64Value.binaryify = binaryifyFun(UInt64Value.descriptor)

UInt64Value.parse = parseFun(UInt64Value.descriptor)

Int32Value.descriptor = protobufDefinition({
    name: '.google.protobuf.Int32Value',

    fields: [{kind: 'scalar', name: 'value', num: 1, type: 5 /* INT32 */}],

    write: writeInt32Value, read: readInt32Value, box: boxInt32Value, unbox: unboxInt32Value
})

Int32Value.binaryify = binaryifyFun(Int32Value.descriptor)

Int32Value.parse = parseFun(Int32Value.descriptor)

UInt32Value.descriptor = protobufDefinition({
    name: '.google.protobuf.UInt32Value',

    fields: [{kind: 'scalar', name: 'value', num: 1, type: 13 /* UINT32 */}],

    write: writeUInt32Value, read: readUInt32Value, box: boxUInt32Value, unbox: unboxUInt32Value
})

UInt32Value.binaryify = binaryifyFun(UInt32Value.descriptor)

UInt32Value.parse = parseFun(UInt32Value.descriptor)

BoolValue.descriptor = protobufDefinition({
    name: '.google.protobuf.BoolValue',

    fields: [{kind: 'scalar', name: 'value', num: 1, type: 8 /* BOOL */}],

    write: writeBoolValue, read: readBoolValue, box: boxBoolValue, unbox: unboxBoolValue
})

BoolValue.binaryify = binaryifyFun(BoolValue.descriptor)

BoolValue.parse = parseFun(BoolValue.descriptor)

StringValue.descriptor = protobufDefinition({
    name: '.google.protobuf.StringValue',

    fields: [{kind: 'scalar', name: 'value', num: 1, type: 9 /* STRING */}],

    write: writeStringValue, read: readStringValue, box: boxStringValue, unbox: unboxStringValue
})

StringValue.binaryify = binaryifyFun(StringValue.descriptor)

StringValue.parse = parseFun(StringValue.descriptor)

BytesValue.descriptor = protobufDefinition({
    name: '.google.protobuf.BytesValue',

    fields: [{kind: 'scalar', name: 'value', num: 1, type: 12 /* BYTES */}],

    write: writeBytesValue, read: readBytesValue, box: boxBytesValue, unbox: unboxBytesValue
})

BytesValue.binaryify = binaryifyFun(BytesValue.descriptor)

BytesValue.parse = parseFun(BytesValue.descriptor)
