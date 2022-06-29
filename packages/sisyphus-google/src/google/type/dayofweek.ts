/**  Represents a day of the week. */
export enum DayOfWeek {
    /**  The day of the week is unspecified. */
    UNSPECIFIED = 'DAY_OF_WEEK_UNSPECIFIED',

    /**  Monday */
    MONDAY = 'MONDAY',

    /**  Tuesday */
    TUESDAY = 'TUESDAY',

    /**  Wednesday */
    WEDNESDAY = 'WEDNESDAY',

    /**  Thursday */
    THURSDAY = 'THURSDAY',

    /**  Friday */
    FRIDAY = 'FRIDAY',

    /**  Saturday */
    SATURDAY = 'SATURDAY',

    /**  Sunday */
    SUNDAY = 'SUNDAY',
}

export namespace DayOfWeek {
    export const name = 'google.type.DayOfWeek'
}
