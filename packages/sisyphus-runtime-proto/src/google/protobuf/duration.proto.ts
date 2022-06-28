import {binaryifyFun, parseFun} from '../../message'
import {MessageDescriptor} from '../../reflection'
import {box, read, unbox, write} from '../../wellknown/duration'
import {Duration} from '@sisyphus.js/runtime/lib/google/protobuf/duration'

declare module '@sisyphus.js/runtime/lib/google/protobuf/duration' {
    namespace Duration {
        let descriptor: MessageDescriptor<Duration>

        function binaryify(v: Duration): Uint8Array

        function parse(buffer: Uint8Array): Duration
    }
}

export * from '@sisyphus.js/runtime/lib/google/protobuf/duration'

Duration.descriptor = protobufDefinition({
    name: '.google.protobuf.Duration',

    fields: [
        {kind: 'scalar', name: 'seconds', num: 1, type: 3 /* INT64 */},

        {kind: 'scalar', name: 'nanos', num: 2, type: 5 /* INT32 */}
    ],

    write, read, box, unbox
})

Duration.binaryify = binaryifyFun(Duration.descriptor)

Duration.parse = parseFun(Duration.descriptor)
