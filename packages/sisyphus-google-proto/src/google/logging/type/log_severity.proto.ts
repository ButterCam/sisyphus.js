import {LogSeverity} from '@sisyphus.js/google/lib/google/logging/type/log_severity'
import {EnumDescriptor} from '@sisyphus.js/runtime.proto'

declare module '@sisyphus.js/google/lib/google/logging/type/log_severity' {
    namespace LogSeverity {
        let descriptor: EnumDescriptor
    }
}

export * from '@sisyphus.js/google/lib/google/logging/type/log_severity'

LogSeverity.descriptor = {
    name: '.google.logging.type.LogSeverity',

    enum: {
        0: 'DEFAULT',

        DEFAULT: 0,

        100: 'DEBUG',

        DEBUG: 100,

        200: 'INFO',

        INFO: 200,

        300: 'NOTICE',

        NOTICE: 300,

        400: 'WARNING',

        WARNING: 400,

        500: 'ERROR',

        ERROR: 500,

        600: 'CRITICAL',

        CRITICAL: 600,

        700: 'ALERT',

        ALERT: 700,

        800: 'EMERGENCY',

        EMERGENCY: 800,
    }
}
