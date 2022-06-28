import {Context, ContextRule} from '@sisyphus.js/google/lib/google/api/context'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/api/context' {
    namespace Context {
        let descriptor: MessageDescriptor<Context>

        function binaryify(v: Context): Uint8Array

        function parse(buffer: Uint8Array): Context
    }

    namespace ContextRule {
        let descriptor: MessageDescriptor<ContextRule>

        function binaryify(v: ContextRule): Uint8Array

        function parse(buffer: Uint8Array): ContextRule
    }
}

export * from '@sisyphus.js/google/lib/google/api/context'

Context.descriptor = protobufDefinition({
    name: '.google.api.Context',

    fields: [{kind: 'message', name: 'rules', num: 1, type: () => ContextRule.descriptor, repeat: true}]
})

Context.binaryify = binaryifyFun(Context.descriptor)

Context.parse = parseFun(Context.descriptor)

ContextRule.descriptor = protobufDefinition({
    name: '.google.api.ContextRule',

    fields: [
        {kind: 'scalar', name: 'selector', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'requested', num: 2, type: 9 /* STRING */, repeat: 1},

        {kind: 'scalar', name: 'provided', num: 3, type: 9 /* STRING */, repeat: 1},

        {kind: 'scalar', name: 'allowedRequestExtensions', num: 4, type: 9 /* STRING */, repeat: 1},

        {kind: 'scalar', name: 'allowedResponseExtensions', num: 5, type: 9 /* STRING */, repeat: 1}
    ]
})

ContextRule.binaryify = binaryifyFun(ContextRule.descriptor)

ContextRule.parse = parseFun(ContextRule.descriptor)
