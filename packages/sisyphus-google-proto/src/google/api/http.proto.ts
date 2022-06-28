import {CustomHttpPattern, Http, HttpRule} from '@sisyphus.js/google/lib/google/api/http'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/api/http' {
    namespace Http {
        let descriptor: MessageDescriptor<Http>

        function binaryify(v: Http): Uint8Array

        function parse(buffer: Uint8Array): Http
    }

    namespace HttpRule {
        let descriptor: MessageDescriptor<HttpRule>

        function binaryify(v: HttpRule): Uint8Array

        function parse(buffer: Uint8Array): HttpRule
    }

    namespace CustomHttpPattern {
        let descriptor: MessageDescriptor<CustomHttpPattern>

        function binaryify(v: CustomHttpPattern): Uint8Array

        function parse(buffer: Uint8Array): CustomHttpPattern
    }
}

export * from '@sisyphus.js/google/lib/google/api/http'

Http.descriptor = protobufDefinition({
    name: '.google.api.Http',

    fields: [
        {kind: 'message', name: 'rules', num: 1, type: () => HttpRule.descriptor, repeat: true},

        {kind: 'scalar', name: 'fullyDecodeReservedExpansion', num: 2, type: 8 /* BOOL */}
    ]
})

Http.binaryify = binaryifyFun(Http.descriptor)

Http.parse = parseFun(Http.descriptor)

HttpRule.descriptor = protobufDefinition({
    name: '.google.api.HttpRule',

    fields: [
        {kind: 'scalar', name: 'selector', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'get', num: 2, type: 9 /* STRING */},

        {kind: 'scalar', name: 'put', num: 3, type: 9 /* STRING */},

        {kind: 'scalar', name: 'post', num: 4, type: 9 /* STRING */},

        {kind: 'scalar', name: 'delete', num: 5, type: 9 /* STRING */},

        {kind: 'scalar', name: 'patch', num: 6, type: 9 /* STRING */},

        {kind: 'message', name: 'custom', num: 8, type: () => CustomHttpPattern.descriptor},

        {kind: 'scalar', name: 'body', num: 7, type: 9 /* STRING */},

        {kind: 'scalar', name: 'responseBody', num: 12, type: 9 /* STRING */},

        {kind: 'message', name: 'additionalBindings', num: 11, type: () => HttpRule.descriptor, repeat: true}
    ]
})

HttpRule.binaryify = binaryifyFun(HttpRule.descriptor)

HttpRule.parse = parseFun(HttpRule.descriptor)

CustomHttpPattern.descriptor = protobufDefinition({
    name: '.google.api.CustomHttpPattern',

    fields: [
        {kind: 'scalar', name: 'kind', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'path', num: 2, type: 9 /* STRING */}
    ]
})

CustomHttpPattern.binaryify = binaryifyFun(CustomHttpPattern.descriptor)

CustomHttpPattern.parse = parseFun(CustomHttpPattern.descriptor)
