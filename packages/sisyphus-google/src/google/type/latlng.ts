/**
 *  An object that represents a latitude/longitude pair. This is expressed as a
 *  pair of doubles to represent degrees latitude and degrees longitude. Unless
 *  specified otherwise, this must conform to the
 *  <a href="http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf">WGS84
 *  standard</a>. Values must be within normalized ranges.
 */
export interface LatLng {
    /**  The latitude in degrees. It must be in the range [-90.0, +90.0]. */
    latitude?: number

    /**  The longitude in degrees. It must be in the range [-180.0, +180.0]. */
    longitude?: number
}

export namespace LatLng {
    export const name = 'google.type.LatLng'
}
