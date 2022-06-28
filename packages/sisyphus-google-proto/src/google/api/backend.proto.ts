import {Backend, BackendRule} from '@sisyphus.js/google/lib/google/api/backend'
import {EnumDescriptor, MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/api/backend' {
    namespace Backend {
        let descriptor: MessageDescriptor<Backend>

        function binaryify(v: Backend): Uint8Array

        function parse(buffer: Uint8Array): Backend
    }

    namespace BackendRule {
        let descriptor: MessageDescriptor<BackendRule>

        function binaryify(v: BackendRule): Uint8Array

        function parse(buffer: Uint8Array): BackendRule

        namespace PathTranslation {
            let descriptor: EnumDescriptor
        }
    }
}

export * from '@sisyphus.js/google/lib/google/api/backend'

Backend.descriptor = protobufDefinition({
    name: '.google.api.Backend',

    fields: [{kind: 'message', name: 'rules', num: 1, type: () => BackendRule.descriptor, repeat: true}]
})

Backend.binaryify = binaryifyFun(Backend.descriptor)

Backend.parse = parseFun(Backend.descriptor)

BackendRule.descriptor = protobufDefinition({
    name: '.google.api.BackendRule',

    fields: [
        {kind: 'scalar', name: 'selector', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'address', num: 2, type: 9 /* STRING */},

        {kind: 'scalar', name: 'deadline', num: 3, type: 1 /* DOUBLE */},

        {kind: 'scalar', name: 'minDeadline', num: 4, type: 1 /* DOUBLE */},

        {kind: 'scalar', name: 'operationDeadline', num: 5, type: 1 /* DOUBLE */},

        {kind: 'enum', name: 'pathTranslation', num: 6, type: () => BackendRule.PathTranslation.descriptor},

        {kind: 'scalar', name: 'jwtAudience', num: 7, type: 9 /* STRING */},

        {kind: 'scalar', name: 'disableAuth', num: 8, type: 8 /* BOOL */},

        {kind: 'scalar', name: 'protocol', num: 9, type: 9 /* STRING */}
    ]
})

BackendRule.binaryify = binaryifyFun(BackendRule.descriptor)

BackendRule.parse = parseFun(BackendRule.descriptor)

BackendRule.PathTranslation.descriptor = {
    name: '.google.api.BackendRule.PathTranslation',

    enum: {
        0: 'PATH_TRANSLATION_UNSPECIFIED',

        PATH_TRANSLATION_UNSPECIFIED: 0,

        1: 'CONSTANT_ADDRESS',

        CONSTANT_ADDRESS: 1,

        2: 'APPEND_PATH_TO_ADDRESS',

        APPEND_PATH_TO_ADDRESS: 2,
    }
}
