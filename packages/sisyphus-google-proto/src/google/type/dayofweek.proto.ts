import {DayOfWeek} from '@sisyphus.js/google/lib/google/type/dayofweek'
import {EnumDescriptor} from '@sisyphus.js/runtime.proto'

declare module '@sisyphus.js/google/lib/google/type/dayofweek' {
    namespace DayOfWeek {
        let descriptor: EnumDescriptor
    }
}

export * from '@sisyphus.js/google/lib/google/type/dayofweek'

DayOfWeek.descriptor = {
    name: '.google.type.DayOfWeek',

    enum: {
        0: 'DAY_OF_WEEK_UNSPECIFIED',

        DAY_OF_WEEK_UNSPECIFIED: 0,

        1: 'MONDAY',

        MONDAY: 1,

        2: 'TUESDAY',

        TUESDAY: 2,

        3: 'WEDNESDAY',

        WEDNESDAY: 3,

        4: 'THURSDAY',

        THURSDAY: 4,

        5: 'FRIDAY',

        FRIDAY: 5,

        6: 'SATURDAY',

        SATURDAY: 6,

        7: 'SUNDAY',

        SUNDAY: 7,
    }
}
