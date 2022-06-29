/**
 *  A `CalendarPeriod` represents the abstract concept of a time period that has
 *  a canonical start. Grammatically, "the start of the current
 *  `CalendarPeriod`." All calendar times begin at midnight UTC.
 */
export enum CalendarPeriod {
    /**  Undefined period, raises an error. */
    UNSPECIFIED = 'CALENDAR_PERIOD_UNSPECIFIED',

    /**  A day. */
    DAY = 'DAY',

    /**
     *  A week. Weeks begin on Monday, following
     *  [ISO 8601](https://en.wikipedia.org/wiki/ISO_week_date).
     */
    WEEK = 'WEEK',

    /**
     *  A fortnight. The first calendar fortnight of the year begins at the start
     *  of week 1 according to
     *  [ISO 8601](https://en.wikipedia.org/wiki/ISO_week_date).
     */
    FORTNIGHT = 'FORTNIGHT',

    /**  A month. */
    MONTH = 'MONTH',

    /**
     *  A quarter. Quarters start on dates 1-Jan, 1-Apr, 1-Jul, and 1-Oct of each
     *  year.
     */
    QUARTER = 'QUARTER',

    /**  A half-year. Half-years start on dates 1-Jan and 1-Jul. */
    HALF = 'HALF',

    /**  A year. */
    YEAR = 'YEAR',
}

export namespace CalendarPeriod {
    export const name = 'google.type.CalendarPeriod'
}
