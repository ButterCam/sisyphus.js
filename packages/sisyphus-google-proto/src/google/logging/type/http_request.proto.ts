import {HttpRequest} from '@sisyphus.js/google/lib/google/logging/type/http_request'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {Duration} from '@sisyphus.js/runtime.proto/lib/google/protobuf/duration.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/logging/type/http_request' {
    namespace HttpRequest {
        let descriptor: MessageDescriptor<HttpRequest>

        function binaryify(v: HttpRequest): Uint8Array

        function parse(buffer: Uint8Array): HttpRequest
    }
}

export * from '@sisyphus.js/google/lib/google/logging/type/http_request'

HttpRequest.descriptor = protobufDefinition({
    name: '.google.logging.type.HttpRequest',

    fields: [
        {kind: 'scalar', name: 'requestMethod', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'requestUrl', num: 2, type: 9 /* STRING */},

        {kind: 'scalar', name: 'requestSize', num: 3, type: 3 /* INT64 */},

        {kind: 'scalar', name: 'status', num: 4, type: 5 /* INT32 */},

        {kind: 'scalar', name: 'responseSize', num: 5, type: 3 /* INT64 */},

        {kind: 'scalar', name: 'userAgent', num: 6, type: 9 /* STRING */},

        {kind: 'scalar', name: 'remoteIp', num: 7, type: 9 /* STRING */},

        {kind: 'scalar', name: 'serverIp', num: 13, type: 9 /* STRING */},

        {kind: 'scalar', name: 'referer', num: 8, type: 9 /* STRING */},

        {kind: 'message', name: 'latency', num: 14, type: () => Duration.descriptor},

        {kind: 'scalar', name: 'cacheLookup', num: 11, type: 8 /* BOOL */},

        {kind: 'scalar', name: 'cacheHit', num: 9, type: 8 /* BOOL */},

        {kind: 'scalar', name: 'cacheValidatedWithOriginServer', num: 10, type: 8 /* BOOL */},

        {kind: 'scalar', name: 'cacheFillBytes', num: 12, type: 3 /* INT64 */},

        {kind: 'scalar', name: 'protocol', num: 15, type: 9 /* STRING */}
    ]
})

HttpRequest.binaryify = binaryifyFun(HttpRequest.descriptor)

HttpRequest.parse = parseFun(HttpRequest.descriptor)
