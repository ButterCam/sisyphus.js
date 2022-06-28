import {AttributeContext} from '@sisyphus.js/google/lib/google/rpc/context/attribute_context'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {Any} from '@sisyphus.js/runtime.proto/lib/google/protobuf/any.proto'
import {Duration} from '@sisyphus.js/runtime.proto/lib/google/protobuf/duration.proto'
import {Struct} from '@sisyphus.js/runtime.proto/lib/google/protobuf/struct.proto'
import {Timestamp} from '@sisyphus.js/runtime.proto/lib/google/protobuf/timestamp.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/rpc/context/attribute_context' {
    namespace AttributeContext {
        let descriptor: MessageDescriptor<AttributeContext>

        function binaryify(v: AttributeContext): Uint8Array

        function parse(buffer: Uint8Array): AttributeContext
        namespace Peer {
            let descriptor: MessageDescriptor<Peer>

            function binaryify(v: Peer): Uint8Array

            function parse(buffer: Uint8Array): Peer
        }

        namespace Api {
            let descriptor: MessageDescriptor<Api>

            function binaryify(v: Api): Uint8Array

            function parse(buffer: Uint8Array): Api
        }

        namespace Auth {
            let descriptor: MessageDescriptor<Auth>

            function binaryify(v: Auth): Uint8Array

            function parse(buffer: Uint8Array): Auth
        }

        namespace Request {
            let descriptor: MessageDescriptor<Request>

            function binaryify(v: Request): Uint8Array

            function parse(buffer: Uint8Array): Request
        }

        namespace Response {
            let descriptor: MessageDescriptor<Response>

            function binaryify(v: Response): Uint8Array

            function parse(buffer: Uint8Array): Response
        }

        namespace Resource {
            let descriptor: MessageDescriptor<Resource>

            function binaryify(v: Resource): Uint8Array

            function parse(buffer: Uint8Array): Resource
        }
    }
}

export * from '@sisyphus.js/google/lib/google/rpc/context/attribute_context'

AttributeContext.descriptor = protobufDefinition({
    name: '.google.rpc.context.AttributeContext',

    fields: [
        {kind: 'message', name: 'origin', num: 7, type: () => AttributeContext.Peer.descriptor},

        {kind: 'message', name: 'source', num: 1, type: () => AttributeContext.Peer.descriptor},

        {kind: 'message', name: 'destination', num: 2, type: () => AttributeContext.Peer.descriptor},

        {kind: 'message', name: 'request', num: 3, type: () => AttributeContext.Request.descriptor},

        {kind: 'message', name: 'response', num: 4, type: () => AttributeContext.Response.descriptor},

        {kind: 'message', name: 'resource', num: 5, type: () => AttributeContext.Resource.descriptor},

        {kind: 'message', name: 'api', num: 6, type: () => AttributeContext.Api.descriptor},

        {kind: 'message', name: 'extensions', num: 8, type: () => Any.descriptor, repeat: true}
    ]
})

AttributeContext.binaryify = binaryifyFun(AttributeContext.descriptor)

AttributeContext.parse = parseFun(AttributeContext.descriptor)

AttributeContext.Peer.descriptor = protobufDefinition({
    name: '.google.rpc.context.AttributeContext.Peer',

    fields: [
        {kind: 'scalar', name: 'ip', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'port', num: 2, type: 3 /* INT64 */},

        {kind: 'map', name: 'labels', num: 6, key: 9 /* STRING */, value: 9 /* STRING */},

        {kind: 'scalar', name: 'principal', num: 7, type: 9 /* STRING */},

        {kind: 'scalar', name: 'regionCode', num: 8, type: 9 /* STRING */}
    ]
})

AttributeContext.Peer.binaryify = binaryifyFun(AttributeContext.Peer.descriptor)

AttributeContext.Peer.parse = parseFun(AttributeContext.Peer.descriptor)

AttributeContext.Api.descriptor = protobufDefinition({
    name: '.google.rpc.context.AttributeContext.Api',

    fields: [
        {kind: 'scalar', name: 'service', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'operation', num: 2, type: 9 /* STRING */},

        {kind: 'scalar', name: 'protocol', num: 3, type: 9 /* STRING */},

        {kind: 'scalar', name: 'version', num: 4, type: 9 /* STRING */}
    ]
})

AttributeContext.Api.binaryify = binaryifyFun(AttributeContext.Api.descriptor)

AttributeContext.Api.parse = parseFun(AttributeContext.Api.descriptor)

AttributeContext.Auth.descriptor = protobufDefinition({
    name: '.google.rpc.context.AttributeContext.Auth',

    fields: [
        {kind: 'scalar', name: 'principal', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'audiences', num: 2, type: 9 /* STRING */, repeat: 1},

        {kind: 'scalar', name: 'presenter', num: 3, type: 9 /* STRING */},

        {kind: 'message', name: 'claims', num: 4, type: () => Struct.descriptor},

        {kind: 'scalar', name: 'accessLevels', num: 5, type: 9 /* STRING */, repeat: 1}
    ]
})

AttributeContext.Auth.binaryify = binaryifyFun(AttributeContext.Auth.descriptor)

AttributeContext.Auth.parse = parseFun(AttributeContext.Auth.descriptor)

AttributeContext.Request.descriptor = protobufDefinition({
    name: '.google.rpc.context.AttributeContext.Request',

    fields: [
        {kind: 'scalar', name: 'id', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'method', num: 2, type: 9 /* STRING */},

        {kind: 'map', name: 'headers', num: 3, key: 9 /* STRING */, value: 9 /* STRING */},

        {kind: 'scalar', name: 'path', num: 4, type: 9 /* STRING */},

        {kind: 'scalar', name: 'host', num: 5, type: 9 /* STRING */},

        {kind: 'scalar', name: 'scheme', num: 6, type: 9 /* STRING */},

        {kind: 'scalar', name: 'query', num: 7, type: 9 /* STRING */},

        {kind: 'message', name: 'time', num: 9, type: () => Timestamp.descriptor},

        {kind: 'scalar', name: 'size', num: 10, type: 3 /* INT64 */},

        {kind: 'scalar', name: 'protocol', num: 11, type: 9 /* STRING */},

        {kind: 'scalar', name: 'reason', num: 12, type: 9 /* STRING */},

        {kind: 'message', name: 'auth', num: 13, type: () => AttributeContext.Auth.descriptor}
    ]
})

AttributeContext.Request.binaryify = binaryifyFun(AttributeContext.Request.descriptor)

AttributeContext.Request.parse = parseFun(AttributeContext.Request.descriptor)

AttributeContext.Response.descriptor = protobufDefinition({
    name: '.google.rpc.context.AttributeContext.Response',

    fields: [
        {kind: 'scalar', name: 'code', num: 1, type: 3 /* INT64 */},

        {kind: 'scalar', name: 'size', num: 2, type: 3 /* INT64 */},

        {kind: 'map', name: 'headers', num: 3, key: 9 /* STRING */, value: 9 /* STRING */},

        {kind: 'message', name: 'time', num: 4, type: () => Timestamp.descriptor},

        {kind: 'message', name: 'backendLatency', num: 5, type: () => Duration.descriptor}
    ]
})

AttributeContext.Response.binaryify = binaryifyFun(AttributeContext.Response.descriptor)

AttributeContext.Response.parse = parseFun(AttributeContext.Response.descriptor)

AttributeContext.Resource.descriptor = protobufDefinition({
    name: '.google.rpc.context.AttributeContext.Resource',

    fields: [
        {kind: 'scalar', name: 'service', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'name', num: 2, type: 9 /* STRING */},

        {kind: 'scalar', name: 'type', num: 3, type: 9 /* STRING */},

        {kind: 'map', name: 'labels', num: 4, key: 9 /* STRING */, value: 9 /* STRING */},

        {kind: 'scalar', name: 'uid', num: 5, type: 9 /* STRING */},

        {kind: 'map', name: 'annotations', num: 6, key: 9 /* STRING */, value: 9 /* STRING */},

        {kind: 'scalar', name: 'displayName', num: 7, type: 9 /* STRING */},

        {kind: 'message', name: 'createTime', num: 8, type: () => Timestamp.descriptor},

        {kind: 'message', name: 'updateTime', num: 9, type: () => Timestamp.descriptor},

        {kind: 'message', name: 'deleteTime', num: 10, type: () => Timestamp.descriptor},

        {kind: 'scalar', name: 'etag', num: 11, type: 9 /* STRING */},

        {kind: 'scalar', name: 'location', num: 12, type: 9 /* STRING */}
    ]
})

AttributeContext.Resource.binaryify = binaryifyFun(AttributeContext.Resource.descriptor)

AttributeContext.Resource.parse = parseFun(AttributeContext.Resource.descriptor)
