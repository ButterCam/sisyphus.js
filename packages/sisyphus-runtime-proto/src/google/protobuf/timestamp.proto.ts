import {binaryifyFun, parseFun} from '../../message'
import {MessageDescriptor} from '../../reflection'
import {box, read, unbox, write} from '../../wellknown/timestamp'
import {Timestamp} from '@sisyphus.js/runtime/lib/google/protobuf/timestamp'

declare module '@sisyphus.js/runtime/lib/google/protobuf/timestamp' {
    namespace Timestamp {
        let descriptor: MessageDescriptor<Timestamp>

        function binaryify(v: Timestamp): Uint8Array

        function parse(buffer: Uint8Array): Timestamp
    }
}

export * from '@sisyphus.js/runtime/lib/google/protobuf/timestamp'

Timestamp.descriptor = protobufDefinition({
    name: '.google.protobuf.Timestamp',

    fields: [
        {kind: 'scalar', name: 'seconds', num: 1, type: 3 /* INT64 */},

        {kind: 'scalar', name: 'nanos', num: 2, type: 5 /* INT32 */}
    ],

    write, read, box, unbox
})

Timestamp.binaryify = binaryifyFun(Timestamp.descriptor)

Timestamp.parse = parseFun(Timestamp.descriptor)
