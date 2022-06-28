import {DateTime, TimeZone} from '@sisyphus.js/google/lib/google/type/datetime'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {Duration} from '@sisyphus.js/runtime.proto/lib/google/protobuf/duration.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/type/datetime' {
    namespace DateTime {
        let descriptor: MessageDescriptor<DateTime>

        function binaryify(v: DateTime): Uint8Array

        function parse(buffer: Uint8Array): DateTime
    }

    namespace TimeZone {
        let descriptor: MessageDescriptor<TimeZone>

        function binaryify(v: TimeZone): Uint8Array

        function parse(buffer: Uint8Array): TimeZone
    }
}

export * from '@sisyphus.js/google/lib/google/type/datetime'

DateTime.descriptor = protobufDefinition({
    name: '.google.type.DateTime',

    fields: [
        {kind: 'scalar', name: 'year', num: 1, type: 5 /* INT32 */},

        {kind: 'scalar', name: 'month', num: 2, type: 5 /* INT32 */},

        {kind: 'scalar', name: 'day', num: 3, type: 5 /* INT32 */},

        {kind: 'scalar', name: 'hours', num: 4, type: 5 /* INT32 */},

        {kind: 'scalar', name: 'minutes', num: 5, type: 5 /* INT32 */},

        {kind: 'scalar', name: 'seconds', num: 6, type: 5 /* INT32 */},

        {kind: 'scalar', name: 'nanos', num: 7, type: 5 /* INT32 */},

        {kind: 'message', name: 'utcOffset', num: 8, type: () => Duration.descriptor},

        {kind: 'message', name: 'timeZone', num: 9, type: () => TimeZone.descriptor}
    ]
})

DateTime.binaryify = binaryifyFun(DateTime.descriptor)

DateTime.parse = parseFun(DateTime.descriptor)

TimeZone.descriptor = protobufDefinition({
    name: '.google.type.TimeZone',

    fields: [
        {kind: 'scalar', name: 'id', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'version', num: 2, type: 9 /* STRING */}
    ]
})

TimeZone.binaryify = binaryifyFun(TimeZone.descriptor)

TimeZone.parse = parseFun(TimeZone.descriptor)
