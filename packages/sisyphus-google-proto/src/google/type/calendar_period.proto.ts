import {CalendarPeriod} from '@sisyphus.js/google/lib/google/type/calendar_period'
import {EnumDescriptor} from '@sisyphus.js/runtime.proto'

declare module '@sisyphus.js/google/lib/google/type/calendar_period' {
    namespace CalendarPeriod {
        let descriptor: EnumDescriptor
    }
}

export * from '@sisyphus.js/google/lib/google/type/calendar_period'

CalendarPeriod.descriptor = {
    name: '.google.type.CalendarPeriod',

    enum: {
        0: 'CALENDAR_PERIOD_UNSPECIFIED',

        CALENDAR_PERIOD_UNSPECIFIED: 0,

        1: 'DAY',

        DAY: 1,

        2: 'WEEK',

        WEEK: 2,

        3: 'FORTNIGHT',

        FORTNIGHT: 3,

        4: 'MONTH',

        MONTH: 4,

        5: 'QUARTER',

        QUARTER: 5,

        6: 'HALF',

        HALF: 6,

        7: 'YEAR',

        YEAR: 7,
    }
}
