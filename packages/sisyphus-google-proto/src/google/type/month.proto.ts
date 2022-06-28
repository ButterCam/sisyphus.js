import {Month} from '@sisyphus.js/google/lib/google/type/month'
import {EnumDescriptor} from '@sisyphus.js/runtime.proto'

declare module '@sisyphus.js/google/lib/google/type/month' {
    namespace Month {
        let descriptor: EnumDescriptor
    }
}

export * from '@sisyphus.js/google/lib/google/type/month'

Month.descriptor = {
    name: '.google.type.Month',

    enum: {
        0: 'MONTH_UNSPECIFIED',

        MONTH_UNSPECIFIED: 0,

        1: 'JANUARY',

        JANUARY: 1,

        2: 'FEBRUARY',

        FEBRUARY: 2,

        3: 'MARCH',

        MARCH: 3,

        4: 'APRIL',

        APRIL: 4,

        5: 'MAY',

        MAY: 5,

        6: 'JUNE',

        JUNE: 6,

        7: 'JULY',

        JULY: 7,

        8: 'AUGUST',

        AUGUST: 8,

        9: 'SEPTEMBER',

        SEPTEMBER: 9,

        10: 'OCTOBER',

        OCTOBER: 10,

        11: 'NOVEMBER',

        NOVEMBER: 11,

        12: 'DECEMBER',

        DECEMBER: 12,
    }
}
