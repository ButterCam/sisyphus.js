import {TimeOfDay} from '@sisyphus.js/google/lib/google/type/timeofday'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/type/timeofday' {
    namespace TimeOfDay {
        let descriptor: MessageDescriptor<TimeOfDay>

        function binaryify(v: TimeOfDay): Uint8Array

        function parse(buffer: Uint8Array): TimeOfDay
    }
}

export * from '@sisyphus.js/google/lib/google/type/timeofday'

TimeOfDay.descriptor = protobufDefinition({
    name: '.google.type.TimeOfDay',

    fields: [
        {kind: 'scalar', name: 'hours', num: 1, type: 5 /* INT32 */},

        {kind: 'scalar', name: 'minutes', num: 2, type: 5 /* INT32 */},

        {kind: 'scalar', name: 'seconds', num: 3, type: 5 /* INT32 */},

        {kind: 'scalar', name: 'nanos', num: 4, type: 5 /* INT32 */}
    ]
})

TimeOfDay.binaryify = binaryifyFun(TimeOfDay.descriptor)

TimeOfDay.parse = parseFun(TimeOfDay.descriptor)
