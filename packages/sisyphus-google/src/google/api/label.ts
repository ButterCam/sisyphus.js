/**  A description of a label. */
export interface LabelDescriptor {
    /**  The label key. */
    key?: string

    /**  The type of data that can be assigned to the label. */
    valueType?: LabelDescriptor.ValueType

    /**  A human-readable description for the label. */
    description?: string
}

export namespace LabelDescriptor {
    export const name = 'google.api.LabelDescriptor'

    /**  Value types that can be used as label values. */
    export enum ValueType {
        /**  A variable-length string. This is the default. */
        STRING = 'STRING',

        /**  Boolean; true or false. */
        BOOL = 'BOOL',

        /**  A 64-bit signed integer. */
        INT64 = 'INT64',
    }

    export namespace ValueType {
        export const name = 'google.api.LabelDescriptor.ValueType'
    }
}
