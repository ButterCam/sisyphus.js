import {LaunchStage} from '@sisyphus.js/google/lib/google/api/launch_stage'
import {EnumDescriptor} from '@sisyphus.js/runtime.proto'

declare module '@sisyphus.js/google/lib/google/api/launch_stage' {
    namespace LaunchStage {
        let descriptor: EnumDescriptor
    }
}

export * from '@sisyphus.js/google/lib/google/api/launch_stage'

LaunchStage.descriptor = {
    name: '.google.api.LaunchStage',

    enum: {
        0: 'LAUNCH_STAGE_UNSPECIFIED',

        LAUNCH_STAGE_UNSPECIFIED: 0,

        6: 'UNIMPLEMENTED',

        UNIMPLEMENTED: 6,

        7: 'PRELAUNCH',

        PRELAUNCH: 7,

        1: 'EARLY_ACCESS',

        EARLY_ACCESS: 1,

        2: 'ALPHA',

        ALPHA: 2,

        3: 'BETA',

        BETA: 3,

        4: 'GA',

        GA: 4,

        5: 'DEPRECATED',

        DEPRECATED: 5,
    }
}
