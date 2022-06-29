/**
 *  Monitoring configuration of the service.
 * 
 *  The example below shows how to configure monitored resources and metrics
 *  for monitoring. In the example, a monitored resource and two metrics are
 *  defined. The `library.googleapis.com/book/returned_count` metric is sent
 *  to both producer and consumer projects, whereas the
 *  `library.googleapis.com/book/num_overdue` metric is only sent to the
 *  consumer project.
 * 
 *      monitored_resources:
 *      - type: library.googleapis.com/Branch
 *        display_name: "Library Branch"
 *        description: "A branch of a library."
 *        launch_stage: GA
 *        labels:
 *        - key: resource_container
 *          description: "The Cloud container (ie. project id) for the Branch."
 *        - key: location
 *          description: "The location of the library branch."
 *        - key: branch_id
 *          description: "The id of the branch."
 *      metrics:
 *      - name: library.googleapis.com/book/returned_count
 *        display_name: "Books Returned"
 *        description: "The count of books that have been returned."
 *        launch_stage: GA
 *        metric_kind: DELTA
 *        value_type: INT64
 *        unit: "1"
 *        labels:
 *        - key: customer_id
 *          description: "The id of the customer."
 *      - name: library.googleapis.com/book/num_overdue
 *        display_name: "Books Overdue"
 *        description: "The current number of overdue books."
 *        launch_stage: GA
 *        metric_kind: GAUGE
 *        value_type: INT64
 *        unit: "1"
 *        labels:
 *        - key: customer_id
 *          description: "The id of the customer."
 *      monitoring:
 *        producer_destinations:
 *        - monitored_resource: library.googleapis.com/Branch
 *          metrics:
 *          - library.googleapis.com/book/returned_count
 *        consumer_destinations:
 *        - monitored_resource: library.googleapis.com/Branch
 *          metrics:
 *          - library.googleapis.com/book/returned_count
 *          - library.googleapis.com/book/num_overdue
 */
export interface Monitoring {
    /**
     *  Monitoring configurations for sending metrics to the producer project.
     *  There can be multiple producer destinations. A monitored resource type may
     *  appear in multiple monitoring destinations if different aggregations are
     *  needed for different sets of metrics associated with that monitored
     *  resource type. A monitored resource and metric pair may only be used once
     *  in the Monitoring configuration.
     */
    producerDestinations?: Monitoring.MonitoringDestination[]

    /**
     *  Monitoring configurations for sending metrics to the consumer project.
     *  There can be multiple consumer destinations. A monitored resource type may
     *  appear in multiple monitoring destinations if different aggregations are
     *  needed for different sets of metrics associated with that monitored
     *  resource type. A monitored resource and metric pair may only be used once
     *  in the Monitoring configuration.
     */
    consumerDestinations?: Monitoring.MonitoringDestination[]
}

export namespace Monitoring {
    export const name = 'google.api.Monitoring'

    /**
     *  Configuration of a specific monitoring destination (the producer project
     *  or the consumer project).
     */
    export interface MonitoringDestination {
        /**
         *  The monitored resource type. The type must be defined in
         *  [Service.monitored_resources][google.api.Service.monitored_resources] section.
         */
        monitoredResource?: string

        /**
         *  Types of the metrics to report to this monitoring destination.
         *  Each type must be defined in [Service.metrics][google.api.Service.metrics] section.
         */
        metrics?: string[]
    }

    export namespace MonitoringDestination {
        export const name = 'google.api.Monitoring.MonitoringDestination'
    }
}
