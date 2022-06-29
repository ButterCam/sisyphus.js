import {long} from '@sisyphus.js/runtime'

/**
 *  Quota configuration helps to achieve fairness and budgeting in service
 *  usage.
 * 
 *  The metric based quota configuration works this way:
 *  - The service configuration defines a set of metrics.
 *  - For API calls, the quota.metric_rules maps methods to metrics with
 *    corresponding costs.
 *  - The quota.limits defines limits on the metrics, which will be used for
 *    quota checks at runtime.
 * 
 *  An example quota configuration in yaml format:
 * 
 *     quota:
 *       limits:
 * 
 *       - name: apiWriteQpsPerProject
 *         metric: library.googleapis.com/write_calls
 *         unit: "1/min/{project}"  # rate limit for consumer projects
 *         values:
 *           STANDARD: 10000
 * 
 * 
 *       # The metric rules bind all methods to the read_calls metric,
 *       # except for the UpdateBook and DeleteBook methods. These two methods
 *       # are mapped to the write_calls metric, with the UpdateBook method
 *       # consuming at twice rate as the DeleteBook method.
 *       metric_rules:
 *       - selector: "*"
 *         metric_costs:
 *           library.googleapis.com/read_calls: 1
 *       - selector: google.example.library.v1.LibraryService.UpdateBook
 *         metric_costs:
 *           library.googleapis.com/write_calls: 2
 *       - selector: google.example.library.v1.LibraryService.DeleteBook
 *         metric_costs:
 *           library.googleapis.com/write_calls: 1
 * 
 *   Corresponding Metric definition:
 * 
 *       metrics:
 *       - name: library.googleapis.com/read_calls
 *         display_name: Read requests
 *         metric_kind: DELTA
 *         value_type: INT64
 * 
 *       - name: library.googleapis.com/write_calls
 *         display_name: Write requests
 *         metric_kind: DELTA
 *         value_type: INT64
 */
export interface Quota {
    /**  List of `QuotaLimit` definitions for the service. */
    limits?: QuotaLimit[]

    /**
     *  List of `MetricRule` definitions, each one mapping a selected method to one
     *  or more metrics.
     */
    metricRules?: MetricRule[]
}

export namespace Quota {
    export const name = 'google.api.Quota'
}

/**
 *  Bind API methods to metrics. Binding a method to a metric causes that
 *  metric's configured quota behaviors to apply to the method call.
 */
export interface MetricRule {
    /**
     *  Selects the methods to which this rule applies.
     * 
     *  Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
     */
    selector?: string

    /**
     *  Metrics to update when the selected methods are called, and the associated
     *  cost applied to each metric.
     * 
     *  The key of the map is the metric name, and the values are the amount
     *  increased for the metric against which the quota limits are defined.
     *  The value must not be negative.
     */
    metricCosts?: {[k: string]: long}
}

export namespace MetricRule {
    export const name = 'google.api.MetricRule'
}

/**
 *  `QuotaLimit` defines a specific limit that applies over a specified duration
 *  for a limit type. There can be at most one limit for a duration and limit
 *  type combination defined within a `QuotaGroup`.
 */
export interface QuotaLimit {
    /**
     *  Name of the quota limit.
     * 
     *  The name must be provided, and it must be unique within the service. The
     *  name can only include alphanumeric characters as well as '-'.
     * 
     *  The maximum length of the limit name is 64 characters.
     */
    name?: string

    /**
     *  Optional. User-visible, extended description for this quota limit.
     *  Should be used only when more context is needed to understand this limit
     *  than provided by the limit's display name (see: `display_name`).
     */
    description?: string

    /**
     *  Default number of tokens that can be consumed during the specified
     *  duration. This is the number of tokens assigned when a client
     *  application developer activates the service for his/her project.
     * 
     *  Specifying a value of 0 will block all requests. This can be used if you
     *  are provisioning quota to selected consumers and blocking others.
     *  Similarly, a value of -1 will indicate an unlimited quota. No other
     *  negative values are allowed.
     * 
     *  Used by group-based quotas only.
     */
    defaultLimit?: long

    /**
     *  Maximum number of tokens that can be consumed during the specified
     *  duration. Client application developers can override the default limit up
     *  to this maximum. If specified, this value cannot be set to a value less
     *  than the default limit. If not specified, it is set to the default limit.
     * 
     *  To allow clients to apply overrides with no upper bound, set this to -1,
     *  indicating unlimited maximum quota.
     * 
     *  Used by group-based quotas only.
     */
    maxLimit?: long

    /**
     *  Free tier value displayed in the Developers Console for this limit.
     *  The free tier is the number of tokens that will be subtracted from the
     *  billed amount when billing is enabled.
     *  This field can only be set on a limit with duration "1d", in a billable
     *  group; it is invalid on any other limit. If this field is not set, it
     *  defaults to 0, indicating that there is no free tier for this service.
     * 
     *  Used by group-based quotas only.
     */
    freeTier?: long

    /**
     *  Duration of this limit in textual notation. Must be "100s" or "1d".
     * 
     *  Used by group-based quotas only.
     */
    duration?: string

    /**
     *  The name of the metric this quota limit applies to. The quota limits with
     *  the same metric will be checked together during runtime. The metric must be
     *  defined within the service config.
     */
    metric?: string

    /**
     *  Specify the unit of the quota limit. It uses the same syntax as
     *  [Metric.unit][]. The supported unit kinds are determined by the quota
     *  backend system.
     * 
     *  Here are some examples:
     *  * "1/min/{project}" for quota per minute per project.
     * 
     *  Note: the order of unit components is insignificant.
     *  The "1" at the beginning is required to follow the metric unit syntax.
     */
    unit?: string

    /**
     *  Tiered limit values. You must specify this as a key:value pair, with an
     *  integer value that is the maximum number of requests allowed for the
     *  specified unit. Currently only STANDARD is supported.
     */
    values?: {[k: string]: long}

    /**
     *  User-visible display name for this limit.
     *  Optional. If not set, the UI will provide a default display name based on
     *  the quota configuration. This field can be used to override the default
     *  display name generated from the configuration.
     */
    displayName?: string
}

export namespace QuotaLimit {
    export const name = 'google.api.QuotaLimit'
}
