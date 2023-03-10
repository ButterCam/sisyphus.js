import {long} from '@sisyphus.js/runtime'
import {Any} from '@sisyphus.js/runtime/lib/google/protobuf/any'
import {Struct} from '@sisyphus.js/runtime/lib/google/protobuf/struct'
import {AttributeContext} from '../../rpc/context/attribute_context'
import {Status} from '../../rpc/status'

/**  Common audit log format for Google Cloud Platform API operations. */
export interface AuditLog {
    /**
     *  The name of the API service performing the operation. For example,
     *  `"compute.googleapis.com"`.
     */
    serviceName?: string

    /**
     *  The name of the service method or operation.
     *  For API calls, this should be the name of the API method.
     *  For example,
     * 
     *      "google.cloud.bigquery.v2.TableService.InsertTable"
     *      "google.logging.v2.ConfigServiceV2.CreateSink"
     */
    methodName?: string

    /**
     *  The resource or collection that is the target of the operation.
     *  The name is a scheme-less URI, not including the API service name.
     *  For example:
     * 
     *      "projects/PROJECT_ID/zones/us-central1-a/instances"
     *      "projects/PROJECT_ID/datasets/DATASET_ID"
     */
    resourceName?: string

    /**  The resource location information. */
    resourceLocation?: ResourceLocation

    /**
     *  The resource's original state before mutation. Present only for
     *  operations which have successfully modified the targeted resource(s).
     *  In general, this field should contain all changed fields, except those
     *  that are already been included in `request`, `response`, `metadata` or
     *  `service_data` fields.
     *  When the JSON object represented here has a proto equivalent,
     *  the proto name will be indicated in the `@type` property.
     */
    resourceOriginalState?: Struct

    /**
     *  The number of items returned from a List or Query API method,
     *  if applicable.
     */
    numResponseItems?: long

    /**  The status of the overall operation. */
    status?: Status

    /**  Authentication information. */
    authenticationInfo?: AuthenticationInfo

    /**
     *  Authorization information. If there are multiple
     *  resources or permissions involved, then there is
     *  one AuthorizationInfo element for each {resource, permission} tuple.
     */
    authorizationInfo?: AuthorizationInfo[]

    /**  Metadata about the operation. */
    requestMetadata?: RequestMetadata

    /**
     *  The operation request. This may not include all request parameters,
     *  such as those that are too large, privacy-sensitive, or duplicated
     *  elsewhere in the log record.
     *  It should never include user-generated data, such as file contents.
     *  When the JSON object represented here has a proto equivalent, the proto
     *  name will be indicated in the `@type` property.
     */
    request?: Struct

    /**
     *  The operation response. This may not include all response elements,
     *  such as those that are too large, privacy-sensitive, or duplicated
     *  elsewhere in the log record.
     *  It should never include user-generated data, such as file contents.
     *  When the JSON object represented here has a proto equivalent, the proto
     *  name will be indicated in the `@type` property.
     */
    response?: Struct

    /**
     *  Other service-specific data about the request, response, and other
     *  information associated with the current audited event.
     */
    metadata?: Struct

    /**
     *  Deprecated. Use the `metadata` field instead.
     *  Other service-specific data about the request, response, and other
     *  activities.
     */
    serviceData?: Any
}

export namespace AuditLog {
    export const name = 'google.cloud.audit.AuditLog'
}

/**  Authentication information for the operation. */
export interface AuthenticationInfo {
    /**
     *  The email address of the authenticated user (or service account on behalf
     *  of third party principal) making the request. For third party identity
     *  callers, the `principal_subject` field is populated instead of this field.
     *  For privacy reasons, the principal email address is sometimes redacted.
     *  For more information, see
     *  https://cloud.google.com/logging/docs/audit#user-id.
     */
    principalEmail?: string

    /**
     *  The authority selector specified by the requestor, if any.
     *  It is not guaranteed that the principal was allowed to use this authority.
     */
    authoritySelector?: string

    /**
     *  The third party identification (if any) of the authenticated user making
     *  the request.
     *  When the JSON object represented here has a proto equivalent, the proto
     *  name will be indicated in the `@type` property.
     */
    thirdPartyPrincipal?: Struct

    /**
     *  The name of the service account key used to create or exchange
     *  credentials for authenticating the service account making the request.
     *  This is a scheme-less URI full resource name. For example:
     * 
     *  "//iam.googleapis.com/projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}"
     */
    serviceAccountKeyName?: string

    /**
     *  Identity delegation history of an authenticated service account that makes
     *  the request. It contains information on the real authorities that try to
     *  access GCP resources by delegating on a service account. When multiple
     *  authorities present, they are guaranteed to be sorted based on the original
     *  ordering of the identity delegation events.
     */
    serviceAccountDelegationInfo?: ServiceAccountDelegationInfo[]

    /**
     *  String representation of identity of requesting party.
     *  Populated for both first and third party identities.
     */
    principalSubject?: string
}

export namespace AuthenticationInfo {
    export const name = 'google.cloud.audit.AuthenticationInfo'
}

/**  Authorization information for the operation. */
export interface AuthorizationInfo {
    /**
     *  The resource being accessed, as a REST-style or cloud resource string.
     *  For example:
     * 
     *      bigquery.googleapis.com/projects/PROJECTID/datasets/DATASETID
     *  or
     *      projects/PROJECTID/datasets/DATASETID
     */
    resource?: string

    /**  The required IAM permission. */
    permission?: string

    /**
     *  Whether or not authorization for `resource` and `permission`
     *  was granted.
     */
    granted?: boolean

    /**
     *  Resource attributes used in IAM condition evaluation. This field contains
     *  resource attributes like resource type and resource name.
     * 
     *  To get the whole view of the attributes used in IAM
     *  condition evaluation, the user must also look into
     *  `AuditLog.request_metadata.request_attributes`.
     */
    resourceAttributes?: AttributeContext.Resource
}

export namespace AuthorizationInfo {
    export const name = 'google.cloud.audit.AuthorizationInfo'
}

/**  Metadata about the request. */
export interface RequestMetadata {
    /**
     *  The IP address of the caller.
     *  For caller from internet, this will be public IPv4 or IPv6 address.
     *  For caller from a Compute Engine VM with external IP address, this
     *  will be the VM's external IP address. For caller from a Compute
     *  Engine VM without external IP address, if the VM is in the same
     *  organization (or project) as the accessed resource, `caller_ip` will
     *  be the VM's internal IPv4 address, otherwise the `caller_ip` will be
     *  redacted to "gce-internal-ip".
     *  See https://cloud.google.com/compute/docs/vpc/ for more information.
     */
    callerIp?: string

    /**
     *  The user agent of the caller.
     *  This information is not authenticated and should be treated accordingly.
     *  For example:
     * 
     *  +   `google-api-python-client/1.4.0`:
     *      The request was made by the Google API client for Python.
     *  +   `Cloud SDK Command Line Tool apitools-client/1.0 gcloud/0.9.62`:
     *      The request was made by the Google Cloud SDK CLI (gcloud).
     *  +   `AppEngine-Google; (+http://code.google.com/appengine; appid:
     *  s~my-project`:
     *      The request was made from the `my-project` App Engine app.
     */
    callerSuppliedUserAgent?: string

    /**
     *  The network of the caller.
     *  Set only if the network host project is part of the same GCP organization
     *  (or project) as the accessed resource.
     *  See https://cloud.google.com/compute/docs/vpc/ for more information.
     *  This is a scheme-less URI full resource name. For example:
     * 
     *      "//compute.googleapis.com/projects/PROJECT_ID/global/networks/NETWORK_ID"
     */
    callerNetwork?: string

    /**
     *  Request attributes used in IAM condition evaluation. This field contains
     *  request attributes like request time and access levels associated with
     *  the request.
     * 
     * 
     *  To get the whole view of the attributes used in IAM
     *  condition evaluation, the user must also look into
     *  `AuditLog.authentication_info.resource_attributes`.
     */
    requestAttributes?: AttributeContext.Request

    /**
     *  The destination of a network activity, such as accepting a TCP connection.
     *  In a multi hop network activity, the destination represents the receiver of
     *  the last hop. Only two fields are used in this message, Peer.port and
     *  Peer.ip. These fields are optionally populated by those services utilizing
     *  the IAM condition feature.
     */
    destinationAttributes?: AttributeContext.Peer
}

export namespace RequestMetadata {
    export const name = 'google.cloud.audit.RequestMetadata'
}

/**  Location information about a resource. */
export interface ResourceLocation {
    /**
     *  The locations of a resource after the execution of the operation.
     *  Requests to create or delete a location based resource must populate
     *  the 'current_locations' field and not the 'original_locations' field.
     *  For example:
     * 
     *      "europe-west1-a"
     *      "us-east1"
     *      "nam3"
     */
    currentLocations?: string[]

    /**
     *  The locations of a resource prior to the execution of the operation.
     *  Requests that mutate the resource's location must populate both the
     *  'original_locations' as well as the 'current_locations' fields.
     *  For example:
     * 
     *      "europe-west1-a"
     *      "us-east1"
     *      "nam3"
     */
    originalLocations?: string[]
}

export namespace ResourceLocation {
    export const name = 'google.cloud.audit.ResourceLocation'
}

/**  Identity delegation history of an authenticated service account. */
export interface ServiceAccountDelegationInfo {
    /**
     *  A string representing the principal_subject associated with the identity.
     *  For most identities, the format will be
     *  `principal://iam.googleapis.com/{identity pool name}/subject/{subject)`
     *  except for some GKE identities (GKE_WORKLOAD, FREEFORM, GKE_HUB_WORKLOAD)
     *  that are still in the legacy format `serviceAccount:{identity pool
     *  name}[{subject}]`
     */
    principalSubject?: string

    /**  First party (Google) identity as the real authority. */
    firstPartyPrincipal?: ServiceAccountDelegationInfo.FirstPartyPrincipal

    /**  Third party identity as the real authority. */
    thirdPartyPrincipal?: ServiceAccountDelegationInfo.ThirdPartyPrincipal
}

export namespace ServiceAccountDelegationInfo {
    export const name = 'google.cloud.audit.ServiceAccountDelegationInfo'

    /**  First party identity principal. */
    export interface FirstPartyPrincipal {
        /**  The email address of a Google account. */
        principalEmail?: string

        /**  Metadata about the service that uses the service account. */
        serviceMetadata?: Struct
    }

    export namespace FirstPartyPrincipal {
        export const name = 'google.cloud.audit.ServiceAccountDelegationInfo.FirstPartyPrincipal'
    }

    /**  Third party identity principal. */
    export interface ThirdPartyPrincipal {
        /**  Metadata about third party identity. */
        thirdPartyClaims?: Struct
    }

    export namespace ThirdPartyPrincipal {
        export const name = 'google.cloud.audit.ServiceAccountDelegationInfo.ThirdPartyPrincipal'
    }
}
