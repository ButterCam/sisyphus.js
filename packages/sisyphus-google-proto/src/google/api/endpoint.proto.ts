import {Endpoint} from '@sisyphus.js/google/lib/google/api/endpoint'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/api/endpoint' {
    namespace Endpoint {
        let descriptor: MessageDescriptor<Endpoint>

        function binaryify(v: Endpoint): Uint8Array

        function parse(buffer: Uint8Array): Endpoint
    }
}

export * from '@sisyphus.js/google/lib/google/api/endpoint'

Endpoint.descriptor = protobufDefinition({
    name: '.google.api.Endpoint',

    fields: [
        {kind: 'scalar', name: 'name', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'aliases', num: 2, type: 9 /* STRING */, repeat: 1, options: { deprecated: true }},

        {kind: 'scalar', name: 'target', num: 101, type: 9 /* STRING */},

        {kind: 'scalar', name: 'allowCors', num: 5, type: 8 /* BOOL */}
    ]
})

Endpoint.binaryify = binaryifyFun(Endpoint.descriptor)

Endpoint.parse = parseFun(Endpoint.descriptor)
