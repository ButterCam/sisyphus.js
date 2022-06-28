import {binaryifyFun, parseFun} from '../../message'
import {MessageDescriptor} from '../../reflection'
import {read, write} from '../../wellknown/any'
import {Any} from '@sisyphus.js/runtime/lib/google/protobuf/any'

declare module '@sisyphus.js/runtime/lib/google/protobuf/any' {
    namespace Any {
        let descriptor: MessageDescriptor<Any>

        function binaryify(v: Any): Uint8Array

        function parse(buffer: Uint8Array): Any
    }
}

export * from '@sisyphus.js/runtime/lib/google/protobuf/any'

Any.descriptor = protobufDefinition({
    name: '.google.protobuf.Any',

    fields: [
        {kind: 'scalar', name: 'typeUrl', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'value', num: 2, type: 12 /* BYTES */}
    ],

    write, read
})

Any.binaryify = binaryifyFun(Any.descriptor)

Any.parse = parseFun(Any.descriptor)
