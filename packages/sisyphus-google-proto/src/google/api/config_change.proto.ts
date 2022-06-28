import {Advice, ChangeType, ConfigChange} from '@sisyphus.js/google/lib/google/api/config_change'
import {EnumDescriptor, MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/api/config_change' {
    namespace ConfigChange {
        let descriptor: MessageDescriptor<ConfigChange>

        function binaryify(v: ConfigChange): Uint8Array

        function parse(buffer: Uint8Array): ConfigChange
    }

    namespace Advice {
        let descriptor: MessageDescriptor<Advice>

        function binaryify(v: Advice): Uint8Array

        function parse(buffer: Uint8Array): Advice
    }

    namespace ChangeType {
        let descriptor: EnumDescriptor
    }
}

export * from '@sisyphus.js/google/lib/google/api/config_change'

ConfigChange.descriptor = protobufDefinition({
    name: '.google.api.ConfigChange',

    fields: [
        {kind: 'scalar', name: 'element', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'oldValue', num: 2, type: 9 /* STRING */},

        {kind: 'scalar', name: 'newValue', num: 3, type: 9 /* STRING */},

        {kind: 'enum', name: 'changeType', num: 4, type: () => ChangeType.descriptor},

        {kind: 'message', name: 'advices', num: 5, type: () => Advice.descriptor, repeat: true}
    ]
})

ConfigChange.binaryify = binaryifyFun(ConfigChange.descriptor)

ConfigChange.parse = parseFun(ConfigChange.descriptor)

Advice.descriptor = protobufDefinition({
    name: '.google.api.Advice',

    fields: [{kind: 'scalar', name: 'description', num: 2, type: 9 /* STRING */}]
})

Advice.binaryify = binaryifyFun(Advice.descriptor)

Advice.parse = parseFun(Advice.descriptor)

ChangeType.descriptor = {
    name: '.google.api.ChangeType',

    enum: {
        0: 'CHANGE_TYPE_UNSPECIFIED',

        CHANGE_TYPE_UNSPECIFIED: 0,

        1: 'ADDED',

        ADDED: 1,

        2: 'REMOVED',

        REMOVED: 2,

        3: 'MODIFIED',

        MODIFIED: 3,
    }
}
