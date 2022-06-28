import {HttpBody} from '@sisyphus.js/google/lib/google/api/httpbody'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {Any} from '@sisyphus.js/runtime.proto/lib/google/protobuf/any.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/api/httpbody' {
    namespace HttpBody {
        let descriptor: MessageDescriptor<HttpBody>

        function binaryify(v: HttpBody): Uint8Array

        function parse(buffer: Uint8Array): HttpBody
    }
}

export * from '@sisyphus.js/google/lib/google/api/httpbody'

HttpBody.descriptor = protobufDefinition({
    name: '.google.api.HttpBody',

    fields: [
        {kind: 'scalar', name: 'contentType', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'data', num: 2, type: 12 /* BYTES */},

        {kind: 'message', name: 'extensions', num: 3, type: () => Any.descriptor, repeat: true}
    ]
})

HttpBody.binaryify = binaryifyFun(HttpBody.descriptor)

HttpBody.parse = parseFun(HttpBody.descriptor)
