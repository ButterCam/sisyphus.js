import {long} from '@sisyphus.js/runtime'

/**  Represents a fraction in terms of a numerator divided by a denominator. */
export interface Fraction {
    /**  The numerator in the fraction, e.g. 2 in 2/3. */
    numerator?: long

    /**
     *  The value by which the numerator is divided, e.g. 3 in 2/3. Must be
     *  positive.
     */
    denominator?: long
}

export namespace Fraction {
    export const name = 'google.type.Fraction'
}
