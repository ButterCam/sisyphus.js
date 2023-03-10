/**
 *  A descriptor for defining project properties for a service. One service may
 *  have many consumer projects, and the service may want to behave differently
 *  depending on some properties on the project. For example, a project may be
 *  associated with a school, or a business, or a government agency, a business
 *  type property on the project may affect how a service responds to the client.
 *  This descriptor defines which properties are allowed to be set on a project.
 * 
 *  Example:
 * 
 *     project_properties:
 *       properties:
 *       - name: NO_WATERMARK
 *         type: BOOL
 *         description: Allows usage of the API without watermarks.
 *       - name: EXTENDED_TILE_CACHE_PERIOD
 *         type: INT64
 */
export interface ProjectProperties {
    /**  List of per consumer project-specific properties. */
    properties?: Property[]
}

export namespace ProjectProperties {
    export const name = 'google.api.ProjectProperties'
}

/**
 *  Defines project properties.
 * 
 *  API services can define properties that can be assigned to consumer projects
 *  so that backends can perform response customization without having to make
 *  additional calls or maintain additional storage. For example, Maps API
 *  defines properties that controls map tile cache period, or whether to embed a
 *  watermark in a result.
 * 
 *  These values can be set via API producer console. Only API providers can
 *  define and set these properties.
 */
export interface Property {
    /**  The name of the property (a.k.a key). */
    name?: string

    /**  The type of this property. */
    type?: Property.PropertyType | (keyof typeof Property.PropertyType)

    /**  The description of the property */
    description?: string
}

export namespace Property {
    export const name = 'google.api.Property'

    /**  Supported data type of the property values */
    export enum PropertyType {
        /**  The type is unspecified, and will result in an error. */
        UNSPECIFIED = 0,

        /**  The type is `int64`. */
        INT64 = 1,

        /**  The type is `bool`. */
        BOOL = 2,

        /**  The type is `string`. */
        STRING = 3,

        /**  The type is 'double'. */
        DOUBLE = 4,
    }

    export namespace PropertyType {
        export const name = 'google.api.Property.PropertyType'
    }
}
