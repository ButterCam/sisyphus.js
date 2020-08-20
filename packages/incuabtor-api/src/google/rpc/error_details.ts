import * as $duration from "../protobuf/duration"
import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../_reflection"


/**
 * Describes when the clients can retry a failed request. Clients could ignore
 * the recommendation here or retry when this information is missing from error
 * responses.
 * 
 * It's always recommended that clients should use exponential backoff when
 * retrying.
 * 
 * Clients should wait until `retry_delay` amount of time has passed since
 * receiving the error response before retrying.  If retrying requests also
 * fail, clients should use an exponential backoff scheme to gradually increase
 * the delay between retries based on `retry_delay`, until either a maximum
 * number of retries have been reached or a maximum retry delay cap has been
 * reached.
 */
export interface IRetryInfo {
    /** Clients should wait at least this long between retrying the same request. */
    retryDelay?: $duration.IDuration
}

export class RetryInfo extends $sisyphus.Message<RetryInfo> implements IRetryInfo {
    retryDelay!: $duration.Duration
}
$reflection.root.lookupType(".google.rpc.RetryInfo").messageCtor = RetryInfo


/** Describes additional debugging info. */
export interface IDebugInfo {
    /** The stack trace entries indicating where the error occurred. */
    stackEntries?: readonly string[]
    /** Additional debugging information provided by the server. */
    detail?: string
}

export class DebugInfo extends $sisyphus.Message<DebugInfo> implements IDebugInfo {
    stackEntries!: readonly string[]
    detail!: string
}
$reflection.root.lookupType(".google.rpc.DebugInfo").messageCtor = DebugInfo


/**
 * Describes how a quota check failed.
 * 
 * For example if a daily limit was exceeded for the calling project,
 * a service could respond with a QuotaFailure detail containing the project
 * id and the description of the quota limit that was exceeded.  If the
 * calling project hasn't enabled the service in the developer console, then
 * a service could respond with the project id and set `service_disabled`
 * to true.
 * 
 * Also see RetryInfo and Help types for other details about handling a
 * quota failure.
 */
export interface IQuotaFailure {
    /** Describes all quota violations. */
    violations?: readonly QuotaFailure.IViolation[]
}

export class QuotaFailure extends $sisyphus.Message<QuotaFailure> implements IQuotaFailure {
    violations!: readonly QuotaFailure.Violation[]
}
$reflection.root.lookupType(".google.rpc.QuotaFailure").messageCtor = QuotaFailure

export namespace QuotaFailure {

    /**
     * A message type used to describe a single quota violation.  For example, a
     * daily quota or a custom quota that was exceeded.
     */
    export interface IViolation {
        /**
         * The subject on which the quota check failed.
         * For example, "clientip:<ip address of client>" or "project:<Google
         * developer project id>".
         */
        subject?: string
        /**
         * A description of how the quota check failed. Clients can use this
         * description to find more about the quota configuration in the service's
         * public documentation, or find the relevant quota limit to adjust through
         * developer console.
         * 
         * For example: "Service disabled" or "Daily Limit for read operations
         * exceeded".
         */
        description?: string
    }

    export class Violation extends $sisyphus.Message<Violation> implements IViolation {
        subject!: string
        description!: string
    }
    $reflection.root.lookupType(".google.rpc.QuotaFailure.Violation").messageCtor = Violation
}

/**
 * Describes the cause of the error with structured details.
 * 
 * Example of an error when contacting the "pubsub.googleapis.com" API when it
 * is not enabled:
 * { "reason": "API_DISABLED"
 * "domain": "googleapis.com"
 * "metadata": {
 * "resource": "projects/123",
 * "service": "pubsub.googleapis.com"
 * }
 * }
 * This response indicates that the pubsub.googleapis.com API is not enabled.
 * 
 * Example of an error that is returned when attempting to create a Spanner
 * instance in a region that is out of stock:
 * { "reason": "STOCKOUT"
 * "domain": "spanner.googleapis.com",
 * "metadata": {
 * "availableRegions": "us-central1,us-east2"
 * }
 * }
 */
export interface IErrorInfo {
    /**
     * The reason of the error. This is a constant value that identifies the
     * proximate cause of the error. Error reasons are unique within a particular
     * domain of errors. This should be at most 63 characters and match
     * /[A-Z0-9_]+/.
     */
    reason?: string
    /**
     * The logical grouping to which the "reason" belongs.  Often "domain" will
     * contain the registered service name of the tool or product that is the
     * source of the error. Example: "pubsub.googleapis.com". If the error is
     * common across many APIs, the first segment of the example above will be
     * omitted.  The value will be, "googleapis.com".
     */
    domain?: string
    /**
     * Additional structured details about this error.
     * 
     * Keys should match /[a-zA-Z0-9-_]/ and be limited to 64 characters in
     * length. When identifying the current value of an exceeded limit, the units
     * should be contained in the key, not the value.  For example, rather than
     * {"instanceLimit": "100/request"}, should be returned as,
     * {"instanceLimitPerRequest": "100"}, if the client exceeds the number of
     * instances that can be created in a single (batch) request.
     */
    metadata?: { readonly [k: string]: string }
}

export class ErrorInfo extends $sisyphus.Message<ErrorInfo> implements IErrorInfo {
    reason!: string
    domain!: string
    metadata!: { readonly [k: string]: string }
}
$reflection.root.lookupType(".google.rpc.ErrorInfo").messageCtor = ErrorInfo


/**
 * Describes what preconditions have failed.
 * 
 * For example, if an RPC failed because it required the Terms of Service to be
 * acknowledged, it could list the terms of service violation in the
 * PreconditionFailure message.
 */
export interface IPreconditionFailure {
    /** Describes all precondition violations. */
    violations?: readonly PreconditionFailure.IViolation[]
}

export class PreconditionFailure extends $sisyphus.Message<PreconditionFailure> implements IPreconditionFailure {
    violations!: readonly PreconditionFailure.Violation[]
}
$reflection.root.lookupType(".google.rpc.PreconditionFailure").messageCtor = PreconditionFailure

export namespace PreconditionFailure {

    /** A message type used to describe a single precondition failure. */
    export interface IViolation {
        /**
         * The type of PreconditionFailure. We recommend using a service-specific
         * enum type to define the supported precondition violation subjects. For
         * example, "TOS" for "Terms of Service violation".
         */
        type?: string
        /**
         * The subject, relative to the type, that failed.
         * For example, "google.com/cloud" relative to the "TOS" type would indicate
         * which terms of service is being referenced.
         */
        subject?: string
        /**
         * A description of how the precondition failed. Developers can use this
         * description to understand how to fix the failure.
         * 
         * For example: "Terms of service not accepted".
         */
        description?: string
    }

    export class Violation extends $sisyphus.Message<Violation> implements IViolation {
        type!: string
        subject!: string
        description!: string
    }
    $reflection.root.lookupType(".google.rpc.PreconditionFailure.Violation").messageCtor = Violation
}

/**
 * Describes violations in a client request. This error type focuses on the
 * syntactic aspects of the request.
 */
export interface IBadRequest {
    /** Describes all violations in a client request. */
    fieldViolations?: readonly BadRequest.IFieldViolation[]
}

export class BadRequest extends $sisyphus.Message<BadRequest> implements IBadRequest {
    fieldViolations!: readonly BadRequest.FieldViolation[]
}
$reflection.root.lookupType(".google.rpc.BadRequest").messageCtor = BadRequest

export namespace BadRequest {

    /** A message type used to describe a single bad request field. */
    export interface IFieldViolation {
        /**
         * A path leading to a field in the request body. The value will be a
         * sequence of dot-separated identifiers that identify a protocol buffer
         * field. E.g., "field_violations.field" would identify this field.
         */
        field?: string
        /** A description of why the request element is bad. */
        description?: string
    }

    export class FieldViolation extends $sisyphus.Message<FieldViolation> implements IFieldViolation {
        field!: string
        description!: string
    }
    $reflection.root.lookupType(".google.rpc.BadRequest.FieldViolation").messageCtor = FieldViolation
}

/**
 * Contains metadata about the request that clients can attach when filing a bug
 * or providing other forms of feedback.
 */
export interface IRequestInfo {
    /**
     * An opaque string that should only be interpreted by the service generating
     * it. For example, it can be used to identify requests in the service's logs.
     */
    requestId?: string
    /**
     * Any data that was used to serve this request. For example, an encrypted
     * stack trace that can be sent back to the service provider for debugging.
     */
    servingData?: string
}

export class RequestInfo extends $sisyphus.Message<RequestInfo> implements IRequestInfo {
    requestId!: string
    servingData!: string
}
$reflection.root.lookupType(".google.rpc.RequestInfo").messageCtor = RequestInfo


/** Describes the resource that is being accessed. */
export interface IResourceInfo {
    /**
     * A name for the type of resource being accessed, e.g. "sql table",
     * "cloud storage bucket", "file", "Google calendar"; or the type URL
     * of the resource: e.g. "type.googleapis.com/google.pubsub.v1.Topic".
     */
    resourceType?: string
    /**
     * The name of the resource being accessed.  For example, a shared calendar
     * name: "example.com_4fghdhgsrgh@group.calendar.google.com", if the current
     * error is [google.rpc.Code.PERMISSION_DENIED][google.rpc.Code.PERMISSION_DENIED].
     */
    resourceName?: string
    /**
     * The owner of the resource (optional).
     * For example, "user:<owner email>" or "project:<Google developer project
     * id>".
     */
    owner?: string
    /**
     * Describes what error is encountered when accessing this resource.
     * For example, updating a cloud project may require the `writer` permission
     * on the developer console project.
     */
    description?: string
}

export class ResourceInfo extends $sisyphus.Message<ResourceInfo> implements IResourceInfo {
    resourceType!: string
    resourceName!: string
    owner!: string
    description!: string
}
$reflection.root.lookupType(".google.rpc.ResourceInfo").messageCtor = ResourceInfo


/**
 * Provides links to documentation or for performing an out of band action.
 * 
 * For example, if a quota check failed with an error indicating the calling
 * project hasn't enabled the accessed service, this can contain a URL pointing
 * directly to the right place in the developer console to flip the bit.
 */
export interface IHelp {
    /** URL(s) pointing to additional information on handling the current error. */
    links?: readonly Help.ILink[]
}

export class Help extends $sisyphus.Message<Help> implements IHelp {
    links!: readonly Help.Link[]
}
$reflection.root.lookupType(".google.rpc.Help").messageCtor = Help

export namespace Help {

    /** Describes a URL link. */
    export interface ILink {
        /** Describes what the link offers. */
        description?: string
        /** The URL of the link. */
        url?: string
    }

    export class Link extends $sisyphus.Message<Link> implements ILink {
        description!: string
        url!: string
    }
    $reflection.root.lookupType(".google.rpc.Help.Link").messageCtor = Link
}

/**
 * Provides a localized error message that is safe to return to the user
 * which can be attached to an RPC error.
 */
export interface ILocalizedMessage {
    /**
     * The locale used following the specification defined at
     * http://www.rfc-editor.org/rfc/bcp/bcp47.txt.
     * Examples are: "en-US", "fr-CH", "es-MX"
     */
    locale?: string
    /** The localized error message in the above locale. */
    message?: string
}

export class LocalizedMessage extends $sisyphus.Message<LocalizedMessage> implements ILocalizedMessage {
    locale!: string
    message!: string
}
$reflection.root.lookupType(".google.rpc.LocalizedMessage").messageCtor = LocalizedMessage