import {LabelDescriptor} from '@sisyphus.js/google/lib/google/api/label'
import {EnumDescriptor, MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/api/label' {
    namespace LabelDescriptor {
        let descriptor: MessageDescriptor<LabelDescriptor>

        function binaryify(v: LabelDescriptor): Uint8Array

        function parse(buffer: Uint8Array): LabelDescriptor

        namespace ValueType {
            let descriptor: EnumDescriptor
        }
    }
}

export * from '@sisyphus.js/google/lib/google/api/label'

LabelDescriptor.descriptor = protobufDefinition({
    name: '.google.api.LabelDescriptor',

    fields: [
        {kind: 'scalar', name: 'key', num: 1, type: 9 /* STRING */},

        {kind: 'enum', name: 'valueType', num: 2, type: () => LabelDescriptor.ValueType.descriptor},

        {kind: 'scalar', name: 'description', num: 3, type: 9 /* STRING */}
    ]
})

LabelDescriptor.binaryify = binaryifyFun(LabelDescriptor.descriptor)

LabelDescriptor.parse = parseFun(LabelDescriptor.descriptor)

LabelDescriptor.ValueType.descriptor = {
    name: '.google.api.LabelDescriptor.ValueType',

    enum: {
        0: 'STRING',

        STRING: 0,

        1: 'BOOL',

        BOOL: 1,

        2: 'INT64',

        INT64: 2,
    }
}
