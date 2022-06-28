import {binaryifyFun, parseFun} from '../../message'
import {MessageDescriptor} from '../../reflection'
import {SourceContext} from './source_context.proto'
import {Option, Syntax} from './type.proto'
import {Api, Method, Mixin} from '@sisyphus.js/runtime/lib/google/protobuf/api'

declare module '@sisyphus.js/runtime/lib/google/protobuf/api' {
    namespace Api {
        let descriptor: MessageDescriptor<Api>

        function binaryify(v: Api): Uint8Array

        function parse(buffer: Uint8Array): Api
    }

    namespace Method {
        let descriptor: MessageDescriptor<Method>

        function binaryify(v: Method): Uint8Array

        function parse(buffer: Uint8Array): Method
    }

    namespace Mixin {
        let descriptor: MessageDescriptor<Mixin>

        function binaryify(v: Mixin): Uint8Array

        function parse(buffer: Uint8Array): Mixin
    }
}

export * from '@sisyphus.js/runtime/lib/google/protobuf/api'

Api.descriptor = protobufDefinition({
    name: '.google.protobuf.Api',

    fields: [
        {kind: 'scalar', name: 'name', num: 1, type: 9 /* STRING */},

        {kind: 'message', name: 'methods', num: 2, type: () => Method.descriptor, repeat: true},

        {kind: 'message', name: 'options', num: 3, type: () => Option.descriptor, repeat: true},

        {kind: 'scalar', name: 'version', num: 4, type: 9 /* STRING */},

        {kind: 'message', name: 'sourceContext', num: 5, type: () => SourceContext.descriptor},

        {kind: 'message', name: 'mixins', num: 6, type: () => Mixin.descriptor, repeat: true},

        {kind: 'enum', name: 'syntax', num: 7, type: () => Syntax.descriptor}
    ]
})

Api.binaryify = binaryifyFun(Api.descriptor)

Api.parse = parseFun(Api.descriptor)

Method.descriptor = protobufDefinition({
    name: '.google.protobuf.Method',

    fields: [
        {kind: 'scalar', name: 'name', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'requestTypeUrl', num: 2, type: 9 /* STRING */},

        {kind: 'scalar', name: 'requestStreaming', num: 3, type: 8 /* BOOL */},

        {kind: 'scalar', name: 'responseTypeUrl', num: 4, type: 9 /* STRING */},

        {kind: 'scalar', name: 'responseStreaming', num: 5, type: 8 /* BOOL */},

        {kind: 'message', name: 'options', num: 6, type: () => Option.descriptor, repeat: true},

        {kind: 'enum', name: 'syntax', num: 7, type: () => Syntax.descriptor}
    ]
})

Method.binaryify = binaryifyFun(Method.descriptor)

Method.parse = parseFun(Method.descriptor)

Mixin.descriptor = protobufDefinition({
    name: '.google.protobuf.Mixin',

    fields: [
        {kind: 'scalar', name: 'name', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'root', num: 2, type: 9 /* STRING */}
    ]
})

Mixin.binaryify = binaryifyFun(Mixin.descriptor)

Mixin.parse = parseFun(Mixin.descriptor)
