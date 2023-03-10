/**  Represents a day of the week. */
export enum DayOfWeek {
    /**  The day of the week is unspecified. */
    DAY_OF_WEEK_UNSPECIFIED = 0,

    /**  Monday */
    MONDAY = 1,

    /**  Tuesday */
    TUESDAY = 2,

    /**  Wednesday */
    WEDNESDAY = 3,

    /**  Thursday */
    THURSDAY = 4,

    /**  Friday */
    FRIDAY = 5,

    /**  Saturday */
    SATURDAY = 6,

    /**  Sunday */
    SUNDAY = 7,
}

export namespace DayOfWeek {
    export const name = 'google.type.DayOfWeek'
}
