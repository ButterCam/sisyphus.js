import {
    SystemParameter,
    SystemParameterRule,
    SystemParameters
} from '@sisyphus.js/google/lib/google/api/system_parameter'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/api/system_parameter' {
    namespace SystemParameters {
        let descriptor: MessageDescriptor<SystemParameters>

        function binaryify(v: SystemParameters): Uint8Array

        function parse(buffer: Uint8Array): SystemParameters
    }

    namespace SystemParameterRule {
        let descriptor: MessageDescriptor<SystemParameterRule>

        function binaryify(v: SystemParameterRule): Uint8Array

        function parse(buffer: Uint8Array): SystemParameterRule
    }

    namespace SystemParameter {
        let descriptor: MessageDescriptor<SystemParameter>

        function binaryify(v: SystemParameter): Uint8Array

        function parse(buffer: Uint8Array): SystemParameter
    }
}

export * from '@sisyphus.js/google/lib/google/api/system_parameter'

SystemParameters.descriptor = protobufDefinition({
    name: '.google.api.SystemParameters',

    fields: [{kind: 'message', name: 'rules', num: 1, type: () => SystemParameterRule.descriptor, repeat: true}]
})

SystemParameters.binaryify = binaryifyFun(SystemParameters.descriptor)

SystemParameters.parse = parseFun(SystemParameters.descriptor)

SystemParameterRule.descriptor = protobufDefinition({
    name: '.google.api.SystemParameterRule',

    fields: [
        {kind: 'scalar', name: 'selector', num: 1, type: 9 /* STRING */},

        {kind: 'message', name: 'parameters', num: 2, type: () => SystemParameter.descriptor, repeat: true}
    ]
})

SystemParameterRule.binaryify = binaryifyFun(SystemParameterRule.descriptor)

SystemParameterRule.parse = parseFun(SystemParameterRule.descriptor)

SystemParameter.descriptor = protobufDefinition({
    name: '.google.api.SystemParameter',

    fields: [
        {kind: 'scalar', name: 'name', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'httpHeader', num: 2, type: 9 /* STRING */},

        {kind: 'scalar', name: 'urlQueryParameter', num: 3, type: 9 /* STRING */}
    ]
})

SystemParameter.binaryify = binaryifyFun(SystemParameter.descriptor)

SystemParameter.parse = parseFun(SystemParameter.descriptor)
