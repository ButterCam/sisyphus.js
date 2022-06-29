import {LabelDescriptor} from './label'

/**
 *  A description of a log type. Example in YAML format:
 * 
 *      - name: library.googleapis.com/activity_history
 *        description: The history of borrowing and returning library items.
 *        display_name: Activity
 *        labels:
 *        - key: /customer_id
 *          description: Identifier of a library customer
 */
export interface LogDescriptor {
    /**
     *  The name of the log. It must be less than 512 characters long and can
     *  include the following characters: upper- and lower-case alphanumeric
     *  characters [A-Za-z0-9], and punctuation characters including
     *  slash, underscore, hyphen, period [/_-.].
     */
    name?: string

    /**
     *  The set of labels that are available to describe a specific log entry.
     *  Runtime requests that contain labels not specified here are
     *  considered invalid.
     */
    labels?: LabelDescriptor[]

    /**
     *  A human-readable description of this log. This information appears in
     *  the documentation and can contain details.
     */
    description?: string

    /**
     *  The human-readable name for this log. This information appears on
     *  the user interface and should be concise.
     */
    displayName?: string
}

export namespace LogDescriptor {
    export const name = 'google.api.LogDescriptor'
}
