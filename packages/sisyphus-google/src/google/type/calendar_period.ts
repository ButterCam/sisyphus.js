/**
 *  A `CalendarPeriod` represents the abstract concept of a time period that has
 *  a canonical start. Grammatically, "the start of the current
 *  `CalendarPeriod`." All calendar times begin at midnight UTC.
 */
export enum CalendarPeriod {
    /**  Undefined period, raises an error. */
    CALENDAR_PERIOD_UNSPECIFIED = 0,

    /**  A day. */
    DAY = 1,

    /**
     *  A week. Weeks begin on Monday, following
     *  [ISO 8601](https://en.wikipedia.org/wiki/ISO_week_date).
     */
    WEEK = 2,

    /**
     *  A fortnight. The first calendar fortnight of the year begins at the start
     *  of week 1 according to
     *  [ISO 8601](https://en.wikipedia.org/wiki/ISO_week_date).
     */
    FORTNIGHT = 3,

    /**  A month. */
    MONTH = 4,

    /**
     *  A quarter. Quarters start on dates 1-Jan, 1-Apr, 1-Jul, and 1-Oct of each
     *  year.
     */
    QUARTER = 5,

    /**  A half-year. Half-years start on dates 1-Jan and 1-Jul. */
    HALF = 6,

    /**  A year. */
    YEAR = 7,
}

export namespace CalendarPeriod {
    export const name = 'google.type.CalendarPeriod'
}
