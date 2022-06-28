import {Date} from '@sisyphus.js/google/lib/google/type/date'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/type/date' {
    namespace Date {
        let descriptor: MessageDescriptor<Date>

        function binaryify(v: Date): Uint8Array

        function parse(buffer: Uint8Array): Date
    }
}

export * from '@sisyphus.js/google/lib/google/type/date'

Date.descriptor = protobufDefinition({
    name: '.google.type.Date',

    fields: [
        {kind: 'scalar', name: 'year', num: 1, type: 5 /* INT32 */},

        {kind: 'scalar', name: 'month', num: 2, type: 5 /* INT32 */},

        {kind: 'scalar', name: 'day', num: 3, type: 5 /* INT32 */}
    ]
})

Date.binaryify = binaryifyFun(Date.descriptor)

Date.parse = parseFun(Date.descriptor)
