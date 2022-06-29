import {long} from '@sisyphus.js/runtime'
import {Any} from '@sisyphus.js/runtime/lib/google/protobuf/any'
import {Duration} from '@sisyphus.js/runtime/lib/google/protobuf/duration'
import {Struct} from '@sisyphus.js/runtime/lib/google/protobuf/struct'
import {Timestamp} from '@sisyphus.js/runtime/lib/google/protobuf/timestamp'

/**
 *  This message defines the standard attribute vocabulary for Google APIs.
 * 
 *  An attribute is a piece of metadata that describes an activity on a network
 *  service. For example, the size of an HTTP request, or the status code of
 *  an HTTP response.
 * 
 *  Each attribute has a type and a name, which is logically defined as
 *  a proto message field in `AttributeContext`. The field type becomes the
 *  attribute type, and the field path becomes the attribute name. For example,
 *  the attribute `source.ip` maps to field `AttributeContext.source.ip`.
 * 
 *  This message definition is guaranteed not to have any wire breaking change.
 *  So you can use it directly for passing attributes across different systems.
 * 
 *  NOTE: Different system may generate different subset of attributes. Please
 *  verify the system specification before relying on an attribute generated
 *  a system.
 */
export interface AttributeContext {
    /**
     *  The origin of a network activity. In a multi hop network activity,
     *  the origin represents the sender of the first hop. For the first hop,
     *  the `source` and the `origin` must have the same content.
     */
    origin?: AttributeContext.Peer

    /**
     *  The source of a network activity, such as starting a TCP connection.
     *  In a multi hop network activity, the source represents the sender of the
     *  last hop.
     */
    source?: AttributeContext.Peer

    /**
     *  The destination of a network activity, such as accepting a TCP connection.
     *  In a multi hop network activity, the destination represents the receiver of
     *  the last hop.
     */
    destination?: AttributeContext.Peer

    /**  Represents a network request, such as an HTTP request. */
    request?: AttributeContext.Request

    /**  Represents a network response, such as an HTTP response. */
    response?: AttributeContext.Response

    /**
     *  Represents a target resource that is involved with a network activity.
     *  If multiple resources are involved with an activity, this must be the
     *  primary one.
     */
    resource?: AttributeContext.Resource

    /**  Represents an API operation that is involved to a network activity. */
    api?: AttributeContext.Api

    /**  Supports extensions for advanced use cases, such as logs and metrics. */
    extensions?: Any[]
}

export namespace AttributeContext {
    export const name = 'google.rpc.context.AttributeContext'

    /**
     *  This message defines attributes for a node that handles a network request.
     *  The node can be either a service or an application that sends, forwards,
     *  or receives the request. Service peers should fill in
     *  `principal` and `labels` as appropriate.
     */
    export interface Peer {
        /**  The IP address of the peer. */
        ip?: string

        /**  The network port of the peer. */
        port?: long

        /**  The labels associated with the peer. */
        labels?: {[k: string]: string}

        /**
         *  The identity of this peer. Similar to `Request.auth.principal`, but
         *  relative to the peer instead of the request. For example, the
         *  idenity associated with a load balancer that forwared the request.
         */
        principal?: string

        /**
         *  The CLDR country/region code associated with the above IP address.
         *  If the IP address is private, the `region_code` should reflect the
         *  physical location where this peer is running.
         */
        regionCode?: string
    }

    export namespace Peer {
        export const name = 'google.rpc.context.AttributeContext.Peer'
    }

    /**
     *  This message defines attributes associated with API operations, such as
     *  a network API request. The terminology is based on the conventions used
     *  by Google APIs, Istio, and OpenAPI.
     */
    export interface Api {
        /**
         *  The API service name. It is a logical identifier for a networked API,
         *  such as "pubsub.googleapis.com". The naming syntax depends on the
         *  API management system being used for handling the request.
         */
        service?: string

        /**
         *  The API operation name. For gRPC requests, it is the fully qualified API
         *  method name, such as "google.pubsub.v1.Publisher.Publish". For OpenAPI
         *  requests, it is the `operationId`, such as "getPet".
         */
        operation?: string

        /**
         *  The API protocol used for sending the request, such as "http", "https",
         *  "grpc", or "internal".
         */
        protocol?: string

        /**
         *  The API version associated with the API operation above, such as "v1" or
         *  "v1alpha1".
         */
        version?: string
    }

    export namespace Api {
        export const name = 'google.rpc.context.AttributeContext.Api'
    }

    /**
     *  This message defines request authentication attributes. Terminology is
     *  based on the JSON Web Token (JWT) standard, but the terms also
     *  correlate to concepts in other standards.
     */
    export interface Auth {
        /**
         *  The authenticated principal. Reflects the issuer (`iss`) and subject
         *  (`sub`) claims within a JWT. The issuer and subject should be `/`
         *  delimited, with `/` percent-encoded within the subject fragment. For
         *  Google accounts, the principal format is:
         *  "https://accounts.google.com/{id}"
         */
        principal?: string

        /**
         *  The intended audience(s) for this authentication information. Reflects
         *  the audience (`aud`) claim within a JWT. The audience
         *  value(s) depends on the `issuer`, but typically include one or more of
         *  the following pieces of information:
         * 
         *  *  The services intended to receive the credential. For example,
         *     ["https://pubsub.googleapis.com/", "https://storage.googleapis.com/"].
         *  *  A set of service-based scopes. For example,
         *     ["https://www.googleapis.com/auth/cloud-platform"].
         *  *  The client id of an app, such as the Firebase project id for JWTs
         *     from Firebase Auth.
         * 
         *  Consult the documentation for the credential issuer to determine the
         *  information provided.
         */
        audiences?: string[]

        /**
         *  The authorized presenter of the credential. Reflects the optional
         *  Authorized Presenter (`azp`) claim within a JWT or the
         *  OAuth client id. For example, a Google Cloud Platform client id looks
         *  as follows: "123456789012.apps.googleusercontent.com".
         */
        presenter?: string

        /**
         *  Structured claims presented with the credential. JWTs include
         *  `{key: value}` pairs for standard and private claims. The following
         *  is a subset of the standard required and optional claims that would
         *  typically be presented for a Google-based JWT:
         * 
         *     {'iss': 'accounts.google.com',
         *      'sub': '113289723416554971153',
         *      'aud': ['123456789012', 'pubsub.googleapis.com'],
         *      'azp': '123456789012.apps.googleusercontent.com',
         *      'email': 'jsmith@example.com',
         *      'iat': 1353601026,
         *      'exp': 1353604926}
         * 
         *  SAML assertions are similarly specified, but with an identity provider
         *  dependent structure.
         */
        claims?: Struct

        /**
         *  A list of access level resource names that allow resources to be
         *  accessed by authenticated requester. It is part of Secure GCP processing
         *  for the incoming request. An access level string has the format:
         *  "//{api_service_name}/accessPolicies/{policy_id}/accessLevels/{short_name}"
         * 
         *  Example:
         *  "//accesscontextmanager.googleapis.com/accessPolicies/MY_POLICY_ID/accessLevels/MY_LEVEL"
         */
        accessLevels?: string[]
    }

    export namespace Auth {
        export const name = 'google.rpc.context.AttributeContext.Auth'
    }

    /**
     *  This message defines attributes for an HTTP request. If the actual
     *  request is not an HTTP request, the runtime system should try to map
     *  the actual request to an equivalent HTTP request.
     */
    export interface Request {
        /**
         *  The unique ID for a request, which can be propagated to downstream
         *  systems. The ID should have low probability of collision
         *  within a single day for a specific service.
         */
        id?: string

        /**  The HTTP request method, such as `GET`, `POST`. */
        method?: string

        /**
         *  The HTTP request headers. If multiple headers share the same key, they
         *  must be merged according to the HTTP spec. All header keys must be
         *  lowercased, because HTTP header keys are case-insensitive.
         */
        headers?: {[k: string]: string}

        /**  The HTTP URL path. */
        path?: string

        /**  The HTTP request `Host` header value. */
        host?: string

        /**  The HTTP URL scheme, such as `http` and `https`. */
        scheme?: string

        /**
         *  The HTTP URL query in the format of `name1=value1&name2=value2`, as it
         *  appears in the first line of the HTTP request. No decoding is performed.
         */
        query?: string

        /**
         *  The timestamp when the `destination` service receives the last byte of
         *  the request.
         */
        time?: Timestamp

        /**  The HTTP request size in bytes. If unknown, it must be -1. */
        size?: long

        /**
         *  The network protocol used with the request, such as "http/1.1",
         *  "spdy/3", "h2", "h2c", "webrtc", "tcp", "udp", "quic". See
         *  https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids
         *  for details.
         */
        protocol?: string

        /**
         *  A special parameter for request reason. It is used by security systems
         *  to associate auditing information with a request.
         */
        reason?: string

        /**
         *  The request authentication. May be absent for unauthenticated requests.
         *  Derived from the HTTP request `Authorization` header or equivalent.
         */
        auth?: AttributeContext.Auth
    }

    export namespace Request {
        export const name = 'google.rpc.context.AttributeContext.Request'
    }

    /**
     *  This message defines attributes for a typical network response. It
     *  generally models semantics of an HTTP response.
     */
    export interface Response {
        /**  The HTTP response status code, such as `200` and `404`. */
        code?: long

        /**  The HTTP response size in bytes. If unknown, it must be -1. */
        size?: long

        /**
         *  The HTTP response headers. If multiple headers share the same key, they
         *  must be merged according to HTTP spec. All header keys must be
         *  lowercased, because HTTP header keys are case-insensitive.
         */
        headers?: {[k: string]: string}

        /**
         *  The timestamp when the `destination` service sends the last byte of
         *  the response.
         */
        time?: Timestamp

        /**
         *  The length of time it takes the backend service to fully respond to a
         *  request. Measured from when the destination service starts to send the
         *  request to the backend until when the destination service receives the
         *  complete response from the backend.
         */
        backendLatency?: Duration
    }

    export namespace Response {
        export const name = 'google.rpc.context.AttributeContext.Response'
    }

    /**
     *  This message defines core attributes for a resource. A resource is an
     *  addressable (named) entity provided by the destination service. For
     *  example, a file stored on a network storage service.
     */
    export interface Resource {
        /**
         *  The name of the service that this resource belongs to, such as
         *  `pubsub.googleapis.com`. The service may be different from the DNS
         *  hostname that actually serves the request.
         */
        service?: string

        /**
         *  The stable identifier (name) of a resource on the `service`. A resource
         *  can be logically identified as "//{resource.service}/{resource.name}".
         *  The differences between a resource name and a URI are:
         * 
         *  *   Resource name is a logical identifier, independent of network
         *      protocol and API version. For example,
         *      `//pubsub.googleapis.com/projects/123/topics/news-feed`.
         *  *   URI often includes protocol and version information, so it can
         *      be used directly by applications. For example,
         *      `https://pubsub.googleapis.com/v1/projects/123/topics/news-feed`.
         * 
         *  See https://cloud.google.com/apis/design/resource_names for details.
         */
        name?: string

        /**
         *  The type of the resource. The syntax is platform-specific because
         *  different platforms define their resources differently.
         * 
         *  For Google APIs, the type format must be "{service}/{kind}".
         */
        type?: string

        /**
         *  The labels or tags on the resource, such as AWS resource tags and
         *  Kubernetes resource labels.
         */
        labels?: {[k: string]: string}

        /**
         *  The unique identifier of the resource. UID is unique in the time
         *  and space for this resource within the scope of the service. It is
         *  typically generated by the server on successful creation of a resource
         *  and must not be changed. UID is used to uniquely identify resources
         *  with resource name reuses. This should be a UUID4.
         */
        uid?: string

        /**
         *  Annotations is an unstructured key-value map stored with a resource that
         *  may be set by external tools to store and retrieve arbitrary metadata.
         *  They are not queryable and should be preserved when modifying objects.
         * 
         *  More info: https://kubernetes.io/docs/user-guide/annotations
         */
        annotations?: {[k: string]: string}

        /**  Mutable. The display name set by clients. Must be <= 63 characters. */
        displayName?: string

        /**
         *  Output only. The timestamp when the resource was created. This may
         *  be either the time creation was initiated or when it was completed.
         */
        createTime?: Timestamp

        /**
         *  Output only. The timestamp when the resource was last updated. Any
         *  change to the resource made by users must refresh this value.
         *  Changes to a resource made by the service should refresh this value.
         */
        updateTime?: Timestamp

        /**
         *  Output only. The timestamp when the resource was deleted.
         *  If the resource is not deleted, this must be empty.
         */
        deleteTime?: Timestamp

        /**
         *  Output only. An opaque value that uniquely identifies a version or
         *  generation of a resource. It can be used to confirm that the client
         *  and server agree on the ordering of a resource being written.
         */
        etag?: string

        /**
         *  Immutable. The location of the resource. The location encoding is
         *  specific to the service provider, and new encoding may be introduced
         *  as the service evolves.
         * 
         *  For Google Cloud products, the encoding is what is used by Google Cloud
         *  APIs, such as `us-east1`, `aws-us-east-1`, and `azure-eastus2`. The
         *  semantics of `location` is identical to the
         *  `cloud.googleapis.com/location` label used by some Google Cloud APIs.
         */
        location?: string
    }

    export namespace Resource {
        export const name = 'google.rpc.context.AttributeContext.Resource'
    }
}
