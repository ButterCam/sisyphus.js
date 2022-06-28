import {Status} from '@sisyphus.js/google/lib/google/rpc/status'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {Any} from '@sisyphus.js/runtime.proto/lib/google/protobuf/any.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/rpc/status' {
    namespace Status {
        let descriptor: MessageDescriptor<Status>

        function binaryify(v: Status): Uint8Array

        function parse(buffer: Uint8Array): Status
    }
}

export * from '@sisyphus.js/google/lib/google/rpc/status'

Status.descriptor = protobufDefinition({
    name: '.google.rpc.Status',

    fields: [
        {kind: 'scalar', name: 'code', num: 1, type: 5 /* INT32 */},

        {kind: 'scalar', name: 'message', num: 2, type: 9 /* STRING */},

        {kind: 'message', name: 'details', num: 3, type: () => Any.descriptor, repeat: true}
    ]
})

Status.binaryify = binaryifyFun(Status.descriptor)

Status.parse = parseFun(Status.descriptor)
