import {RoutingParameter, RoutingRule} from '@sisyphus.js/google/lib/google/api/routing'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/api/routing' {
    namespace RoutingRule {
        let descriptor: MessageDescriptor<RoutingRule>

        function binaryify(v: RoutingRule): Uint8Array

        function parse(buffer: Uint8Array): RoutingRule
    }

    namespace RoutingParameter {
        let descriptor: MessageDescriptor<RoutingParameter>

        function binaryify(v: RoutingParameter): Uint8Array

        function parse(buffer: Uint8Array): RoutingParameter
    }
}

export * from '@sisyphus.js/google/lib/google/api/routing'

RoutingRule.descriptor = protobufDefinition({
    name: '.google.api.RoutingRule',

    fields: [{kind: 'message', name: 'routingParameters', num: 2, type: () => RoutingParameter.descriptor, repeat: true}]
})

RoutingRule.binaryify = binaryifyFun(RoutingRule.descriptor)

RoutingRule.parse = parseFun(RoutingRule.descriptor)

RoutingParameter.descriptor = protobufDefinition({
    name: '.google.api.RoutingParameter',

    fields: [
        {kind: 'scalar', name: 'field', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'pathTemplate', num: 2, type: 9 /* STRING */}
    ]
})

RoutingParameter.binaryify = binaryifyFun(RoutingParameter.descriptor)

RoutingParameter.parse = parseFun(RoutingParameter.descriptor)

extendDefinition('.google.protobuf.MethodOptions', {kind: 'message', name: 'routing', num: 72295729, type: () => RoutingRule.descriptor})
