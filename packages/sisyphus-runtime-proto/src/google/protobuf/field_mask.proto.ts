import {binaryifyFun, parseFun} from '../../message'
import {MessageDescriptor} from '../../reflection'
import {box, read, unbox, write} from '../../wellknown/field-mask'
import {FieldMask} from '@sisyphus.js/runtime/lib/google/protobuf/field_mask'

declare module '@sisyphus.js/runtime/lib/google/protobuf/field_mask' {
    namespace FieldMask {
        let descriptor: MessageDescriptor<FieldMask>

        function binaryify(v: FieldMask): Uint8Array

        function parse(buffer: Uint8Array): FieldMask
    }
}

export * from '@sisyphus.js/runtime/lib/google/protobuf/field_mask'

FieldMask.descriptor = protobufDefinition({
    name: '.google.protobuf.FieldMask',

    fields: [{kind: 'scalar', name: 'paths', num: 1, type: 9 /* STRING */, repeat: 1}],

    write, read, box, unbox
})

FieldMask.binaryify = binaryifyFun(FieldMask.descriptor)

FieldMask.parse = parseFun(FieldMask.descriptor)
