import {Code} from '@sisyphus.js/google/lib/google/rpc/code'
import {EnumDescriptor} from '@sisyphus.js/runtime.proto'

declare module '@sisyphus.js/google/lib/google/rpc/code' {
    namespace Code {
        let descriptor: EnumDescriptor
    }
}

export * from '@sisyphus.js/google/lib/google/rpc/code'

Code.descriptor = {
    name: '.google.rpc.Code',

    enum: {
        0: 'OK',

        OK: 0,

        1: 'CANCELLED',

        CANCELLED: 1,

        2: 'UNKNOWN',

        UNKNOWN: 2,

        3: 'INVALID_ARGUMENT',

        INVALID_ARGUMENT: 3,

        4: 'DEADLINE_EXCEEDED',

        DEADLINE_EXCEEDED: 4,

        5: 'NOT_FOUND',

        NOT_FOUND: 5,

        6: 'ALREADY_EXISTS',

        ALREADY_EXISTS: 6,

        7: 'PERMISSION_DENIED',

        PERMISSION_DENIED: 7,

        16: 'UNAUTHENTICATED',

        UNAUTHENTICATED: 16,

        8: 'RESOURCE_EXHAUSTED',

        RESOURCE_EXHAUSTED: 8,

        9: 'FAILED_PRECONDITION',

        FAILED_PRECONDITION: 9,

        10: 'ABORTED',

        ABORTED: 10,

        11: 'OUT_OF_RANGE',

        OUT_OF_RANGE: 11,

        12: 'UNIMPLEMENTED',

        UNIMPLEMENTED: 12,

        13: 'INTERNAL',

        INTERNAL: 13,

        14: 'UNAVAILABLE',

        UNAVAILABLE: 14,

        15: 'DATA_LOSS',

        DATA_LOSS: 15,
    }
}
