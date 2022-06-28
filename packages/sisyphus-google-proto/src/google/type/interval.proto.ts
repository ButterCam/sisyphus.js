import {Interval} from '@sisyphus.js/google/lib/google/type/interval'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {Timestamp} from '@sisyphus.js/runtime.proto/lib/google/protobuf/timestamp.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/type/interval' {
    namespace Interval {
        let descriptor: MessageDescriptor<Interval>

        function binaryify(v: Interval): Uint8Array

        function parse(buffer: Uint8Array): Interval
    }
}

export * from '@sisyphus.js/google/lib/google/type/interval'

Interval.descriptor = protobufDefinition({
    name: '.google.type.Interval',

    fields: [
        {kind: 'message', name: 'startTime', num: 1, type: () => Timestamp.descriptor},

        {kind: 'message', name: 'endTime', num: 2, type: () => Timestamp.descriptor}
    ]
})

Interval.binaryify = binaryifyFun(Interval.descriptor)

Interval.parse = parseFun(Interval.descriptor)
