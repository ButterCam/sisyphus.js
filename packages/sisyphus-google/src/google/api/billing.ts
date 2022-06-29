/**
 *  Billing related configuration of the service.
 * 
 *  The following example shows how to configure monitored resources and metrics
 *  for billing, `consumer_destinations` is the only supported destination and
 *  the monitored resources need at least one label key
 *  `cloud.googleapis.com/location` to indicate the location of the billing
 *  usage, using different monitored resources between monitoring and billing is
 *  recommended so they can be evolved independently:
 * 
 * 
 *      monitored_resources:
 *      - type: library.googleapis.com/billing_branch
 *        labels:
 *        - key: cloud.googleapis.com/location
 *          description: |
 *            Predefined label to support billing location restriction.
 *        - key: city
 *          description: |
 *            Custom label to define the city where the library branch is located
 *            in.
 *        - key: name
 *          description: Custom label to define the name of the library branch.
 *      metrics:
 *      - name: library.googleapis.com/book/borrowed_count
 *        metric_kind: DELTA
 *        value_type: INT64
 *        unit: "1"
 *      billing:
 *        consumer_destinations:
 *        - monitored_resource: library.googleapis.com/billing_branch
 *          metrics:
 *          - library.googleapis.com/book/borrowed_count
 */
export interface Billing {
    /**
     *  Billing configurations for sending metrics to the consumer project.
     *  There can be multiple consumer destinations per service, each one must have
     *  a different monitored resource type. A metric can be used in at most
     *  one consumer destination.
     */
    consumerDestinations?: Billing.BillingDestination[]
}

export namespace Billing {
    export const name = 'google.api.Billing'

    /**
     *  Configuration of a specific billing destination (Currently only support
     *  bill against consumer project).
     */
    export interface BillingDestination {
        /**
         *  The monitored resource type. The type must be defined in
         *  [Service.monitored_resources][google.api.Service.monitored_resources] section.
         */
        monitoredResource?: string

        /**
         *  Names of the metrics to report to this billing destination.
         *  Each name must be defined in [Service.metrics][google.api.Service.metrics] section.
         */
        metrics?: string[]
    }

    export namespace BillingDestination {
        export const name = 'google.api.Billing.BillingDestination'
    }
}
