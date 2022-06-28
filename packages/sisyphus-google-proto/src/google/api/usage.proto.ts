import {Usage, UsageRule} from '@sisyphus.js/google/lib/google/api/usage'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/api/usage' {
    namespace Usage {
        let descriptor: MessageDescriptor<Usage>

        function binaryify(v: Usage): Uint8Array

        function parse(buffer: Uint8Array): Usage
    }

    namespace UsageRule {
        let descriptor: MessageDescriptor<UsageRule>

        function binaryify(v: UsageRule): Uint8Array

        function parse(buffer: Uint8Array): UsageRule
    }
}

export * from '@sisyphus.js/google/lib/google/api/usage'

Usage.descriptor = protobufDefinition({
    name: '.google.api.Usage',

    fields: [
        {kind: 'scalar', name: 'requirements', num: 1, type: 9 /* STRING */, repeat: 1},

        {kind: 'message', name: 'rules', num: 6, type: () => UsageRule.descriptor, repeat: true},

        {kind: 'scalar', name: 'producerNotificationChannel', num: 7, type: 9 /* STRING */}
    ]
})

Usage.binaryify = binaryifyFun(Usage.descriptor)

Usage.parse = parseFun(Usage.descriptor)

UsageRule.descriptor = protobufDefinition({
    name: '.google.api.UsageRule',

    fields: [
        {kind: 'scalar', name: 'selector', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'allowUnregisteredCalls', num: 2, type: 8 /* BOOL */},

        {kind: 'scalar', name: 'skipServiceControl', num: 3, type: 8 /* BOOL */}
    ]
})

UsageRule.binaryify = binaryifyFun(UsageRule.descriptor)

UsageRule.parse = parseFun(UsageRule.descriptor)
