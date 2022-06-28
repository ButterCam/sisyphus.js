import {FieldBehavior} from '@sisyphus.js/google/lib/google/api/field_behavior'
import {EnumDescriptor} from '@sisyphus.js/runtime.proto'

declare module '@sisyphus.js/google/lib/google/api/field_behavior' {
    namespace FieldBehavior {
        let descriptor: EnumDescriptor
    }
}

export * from '@sisyphus.js/google/lib/google/api/field_behavior'

FieldBehavior.descriptor = {
    name: '.google.api.FieldBehavior',

    enum: {
        0: 'FIELD_BEHAVIOR_UNSPECIFIED',

        FIELD_BEHAVIOR_UNSPECIFIED: 0,

        1: 'OPTIONAL',

        OPTIONAL: 1,

        2: 'REQUIRED',

        REQUIRED: 2,

        3: 'OUTPUT_ONLY',

        OUTPUT_ONLY: 3,

        4: 'INPUT_ONLY',

        INPUT_ONLY: 4,

        5: 'IMMUTABLE',

        IMMUTABLE: 5,

        6: 'UNORDERED_LIST',

        UNORDERED_LIST: 6,

        7: 'NON_EMPTY_DEFAULT',

        NON_EMPTY_DEFAULT: 7,
    }
}

extendDefinition('.google.protobuf.FieldOptions', {kind: 'enum', name: 'fieldBehavior', num: 1052, type: () => FieldBehavior.descriptor, repeat: 0})
