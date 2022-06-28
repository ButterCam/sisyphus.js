import {OperationResponseMapping} from '@sisyphus.js/google/lib/google/cloud/extended_operations'
import {EnumDescriptor} from '@sisyphus.js/runtime.proto'

declare module '@sisyphus.js/google/lib/google/cloud/extended_operations' {
    namespace OperationResponseMapping {
        let descriptor: EnumDescriptor
    }
}

export * from '@sisyphus.js/google/lib/google/cloud/extended_operations'

OperationResponseMapping.descriptor = {
    name: '.google.cloud.OperationResponseMapping',

    enum: {
        0: 'UNDEFINED',

        UNDEFINED: 0,

        1: 'NAME',

        NAME: 1,

        2: 'STATUS',

        STATUS: 2,

        3: 'ERROR_CODE',

        ERROR_CODE: 3,

        4: 'ERROR_MESSAGE',

        ERROR_MESSAGE: 4,
    }
}

extendDefinition('.google.protobuf.FieldOptions', {kind: 'enum', name: 'operationField', num: 1149, type: () => OperationResponseMapping.descriptor})

extendDefinition('.google.protobuf.FieldOptions', {kind: 'scalar', name: 'operationRequestField', num: 1150, type: 9 /* STRING */})

extendDefinition('.google.protobuf.FieldOptions', {kind: 'scalar', name: 'operationResponseField', num: 1151, type: 9 /* STRING */})

extendDefinition('.google.protobuf.MethodOptions', {kind: 'scalar', name: 'operationService', num: 1249, type: 9 /* STRING */})

extendDefinition('.google.protobuf.MethodOptions', {kind: 'scalar', name: 'operationPollingMethod', num: 1250, type: 8 /* BOOL */})
