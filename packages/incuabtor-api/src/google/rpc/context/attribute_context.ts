import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../_reflection"
import * as $protobuf from "protobufjs"
import * as $struct from "../../protobuf/struct"
import * as $timestamp from "../../protobuf/timestamp"


/**
 * This message defines the standard attribute vocabulary for Google APIs.
 * 
 * An attribute is a piece of metadata that describes an activity on a network
 * service. For example, the size of an HTTP request, or the status code of
 * an HTTP response.
 * 
 * Each attribute has a type and a name, which is logically defined as
 * a proto message field in `AttributeContext`. The field type becomes the
 * attribute type, and the field path becomes the attribute name. For example,
 * the attribute `source.ip` maps to field `AttributeContext.source.ip`.
 * 
 * This message definition is guaranteed not to have any wire breaking change.
 * So you can use it directly for passing attributes across different systems.
 * 
 * NOTE: Different system may generate different subset of attributes. Please
 * verify the system specification before relying on an attribute generated
 * a system.
 */
export interface IAttributeContext {
    /**
     * The origin of a network activity. In a multi hop network activity,
     * the origin represents the sender of the first hop. For the first hop,
     * the `source` and the `origin` must have the same content.
     */
    origin?: AttributeContext.IPeer
    /**
     * The source of a network activity, such as starting a TCP connection.
     * In a multi hop network activity, the source represents the sender of the
     * last hop.
     */
    source?: AttributeContext.IPeer
    /**
     * The destination of a network activity, such as accepting a TCP connection.
     * In a multi hop network activity, the destination represents the receiver of
     * the last hop.
     */
    destination?: AttributeContext.IPeer
    /** Represents a network request, such as an HTTP request. */
    request?: AttributeContext.IRequest
    /** Represents a network response, such as an HTTP response. */
    response?: AttributeContext.IResponse
    /**
     * Represents a target resource that is involved with a network activity.
     * If multiple resources are involved with an activity, this must be the
     * primary one.
     */
    resource?: AttributeContext.IResource
    /** Represents an API operation that is involved to a network activity. */
    api?: AttributeContext.IApi
}

export class AttributeContext extends $sisyphus.Message<AttributeContext> implements IAttributeContext {
    origin!: AttributeContext.Peer
    source!: AttributeContext.Peer
    destination!: AttributeContext.Peer
    request!: AttributeContext.Request
    response!: AttributeContext.Response
    resource!: AttributeContext.Resource
    api!: AttributeContext.Api
}
$reflection.root.lookupType(".google.rpc.context.AttributeContext").messageCtor = AttributeContext

export namespace AttributeContext {

    /**
     * This message defines attributes for a node that handles a network request.
     * The node can be either a service or an application that sends, forwards,
     * or receives the request. Service peers should fill in
     * `principal` and `labels` as appropriate.
     */
    export interface IPeer {
        /** The IP address of the peer. */
        ip?: string
        /** The network port of the peer. */
        port?: $protobuf.Long
        /** The labels associated with the peer. */
        labels?: { readonly [k: string]: string }
        /**
         * The identity of this peer. Similar to `Request.auth.principal`, but
         * relative to the peer instead of the request. For example, the
         * idenity associated with a load balancer that forwared the request.
         */
        principal?: string
        /**
         * The CLDR country/region code associated with the above IP address.
         * If the IP address is private, the `region_code` should reflect the
         * physical location where this peer is running.
         */
        regionCode?: string
    }

    export class Peer extends $sisyphus.Message<Peer> implements IPeer {
        ip!: string
        port!: $protobuf.Long
        labels!: { readonly [k: string]: string }
        principal!: string
        regionCode!: string
    }
    $reflection.root.lookupType(".google.rpc.context.AttributeContext.Peer").messageCtor = Peer


    /**
     * This message defines attributes associated with API operations, such as
     * a network API request. The terminology is based on the conventions used
     * by Google APIs, Istio, and OpenAPI.
     */
    export interface IApi {
        /**
         * The API service name. It is a logical identifier for a networked API,
         * such as "pubsub.googleapis.com". The naming syntax depends on the
         * API management system being used for handling the request.
         */
        service?: string
        /**
         * The API operation name. For gRPC requests, it is the fully qualified API
         * method name, such as "google.pubsub.v1.Publisher.Publish". For OpenAPI
         * requests, it is the `operationId`, such as "getPet".
         */
        operation?: string
        /**
         * The API protocol used for sending the request, such as "http", "https",
         * "grpc", or "internal".
         */
        protocol?: string
        /**
         * The API version associated with the API operation above, such as "v1" or
         * "v1alpha1".
         */
        version?: string
    }

    export class Api extends $sisyphus.Message<Api> implements IApi {
        service!: string
        operation!: string
        protocol!: string
        version!: string
    }
    $reflection.root.lookupType(".google.rpc.context.AttributeContext.Api").messageCtor = Api


    /**
     * This message defines request authentication attributes. Terminology is
     * based on the JSON Web Token (JWT) standard, but the terms also
     * correlate to concepts in other standards.
     */
    export interface IAuth {
        /**
         * The authenticated principal. Reflects the issuer (`iss`) and subject
         * (`sub`) claims within a JWT. The issuer and subject should be `/`
         * delimited, with `/` percent-encoded within the subject fragment. For
         * Google accounts, the principal format is:
         * "https://accounts.google.com/{id}"
         */
        principal?: string
        /**
         * The intended audience(s) for this authentication information. Reflects
         * the audience (`aud`) claim within a JWT. The audience
         * value(s) depends on the `issuer`, but typically include one or more of
         * the following pieces of information:
         * 
         * *  The services intended to receive the credential such as
         * ["pubsub.googleapis.com", "storage.googleapis.com"]
         * *  A set of service-based scopes. For example,
         * ["https://www.googleapis.com/auth/cloud-platform"]
         * *  The client id of an app, such as the Firebase project id for JWTs
         * from Firebase Auth.
         * 
         * Consult the documentation for the credential issuer to determine the
         * information provided.
         */
        audiences?: readonly string[]
        /**
         * The authorized presenter of the credential. Reflects the optional
         * Authorized Presenter (`azp`) claim within a JWT or the
         * OAuth client id. For example, a Google Cloud Platform client id looks
         * as follows: "123456789012.apps.googleusercontent.com".
         */
        presenter?: string
        /**
         * Structured claims presented with the credential. JWTs include
         * `{key: value}` pairs for standard and private claims. The following
         * is a subset of the standard required and optional claims that would
         * typically be presented for a Google-based JWT:
         * 
         * {'iss': 'accounts.google.com',
         * 'sub': '113289723416554971153',
         * 'aud': ['123456789012', 'pubsub.googleapis.com'],
         * 'azp': '123456789012.apps.googleusercontent.com',
         * 'email': 'jsmith@example.com',
         * 'iat': 1353601026,
         * 'exp': 1353604926}
         * 
         * SAML assertions are similarly specified, but with an identity provider
         * dependent structure.
         */
        claims?: $struct.IStruct
        /**
         * A list of access level resource names that allow resources to be
         * accessed by authenticated requester. It is part of Secure GCP processing
         * for the incoming request. An access level string has the format:
         * "//{api_service_name}/accessPolicies/{policy_id}/accessLevels/{short_name}"
         * 
         * Example:
         * "//accesscontextmanager.googleapis.com/accessPolicies/MY_POLICY_ID/accessLevels/MY_LEVEL"
         */
        accessLevels?: readonly string[]
    }

    export class Auth extends $sisyphus.Message<Auth> implements IAuth {
        principal!: string
        audiences!: readonly string[]
        presenter!: string
        claims!: $struct.Struct
        accessLevels!: readonly string[]
    }
    $reflection.root.lookupType(".google.rpc.context.AttributeContext.Auth").messageCtor = Auth


    /**
     * This message defines attributes for an HTTP request. If the actual
     * request is not an HTTP request, the runtime system should try to map
     * the actual request to an equivalent HTTP request.
     */
    export interface IRequest {
        /**
         * The unique ID for a request, which can be propagated to downstream
         * systems. The ID should have low probability of collision
         * within a single day for a specific service.
         */
        id?: string
        /** The HTTP request method, such as `GET`, `POST`. */
        method?: string
        /**
         * The HTTP request headers. If multiple headers share the same key, they
         * must be merged according to the HTTP spec. All header keys must be
         * lowercased, because HTTP header keys are case-insensitive.
         */
        headers?: { readonly [k: string]: string }
        /** The HTTP URL path. */
        path?: string
        /** The HTTP request `Host` header value. */
        host?: string
        /** The HTTP URL scheme, such as `http` and `https`. */
        scheme?: string
        /**
         * The HTTP URL query in the format of `name1=value1&name2=value2`, as it
         * appears in the first line of the HTTP request. No decoding is performed.
         */
        query?: string
        /**
         * The timestamp when the `destination` service receives the first byte of
         * the request.
         */
        time?: $timestamp.ITimestamp
        /** The HTTP request size in bytes. If unknown, it must be -1. */
        size?: $protobuf.Long
        /**
         * The network protocol used with the request, such as "http/1.1",
         * "spdy/3", "h2", "h2c", "webrtc", "tcp", "udp", "quic". See
         * https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids
         * for details.
         */
        protocol?: string
        /**
         * A special parameter for request reason. It is used by security systems
         * to associate auditing information with a request.
         */
        reason?: string
        /**
         * The request authentication. May be absent for unauthenticated requests.
         * Derived from the HTTP request `Authorization` header or equivalent.
         */
        auth?: AttributeContext.IAuth
    }

    export class Request extends $sisyphus.Message<Request> implements IRequest {
        id!: string
        method!: string
        headers!: { readonly [k: string]: string }
        path!: string
        host!: string
        scheme!: string
        query!: string
        time!: $timestamp.Timestamp
        size!: $protobuf.Long
        protocol!: string
        reason!: string
        auth!: AttributeContext.Auth
    }
    $reflection.root.lookupType(".google.rpc.context.AttributeContext.Request").messageCtor = Request


    /**
     * This message defines attributes for a typical network response. It
     * generally models semantics of an HTTP response.
     */
    export interface IResponse {
        /** The HTTP response status code, such as `200` and `404`. */
        code?: $protobuf.Long
        /** The HTTP response size in bytes. If unknown, it must be -1. */
        size?: $protobuf.Long
        /**
         * The HTTP response headers. If multiple headers share the same key, they
         * must be merged according to HTTP spec. All header keys must be
         * lowercased, because HTTP header keys are case-insensitive.
         */
        headers?: { readonly [k: string]: string }
        /**
         * The timestamp when the `destination` service generates the first byte of
         * the response.
         */
        time?: $timestamp.ITimestamp
    }

    export class Response extends $sisyphus.Message<Response> implements IResponse {
        code!: $protobuf.Long
        size!: $protobuf.Long
        headers!: { readonly [k: string]: string }
        time!: $timestamp.Timestamp
    }
    $reflection.root.lookupType(".google.rpc.context.AttributeContext.Response").messageCtor = Response


    /**
     * This message defines core attributes for a resource. A resource is an
     * addressable (named) entity provided by the destination service. For
     * example, a file stored on a network storage service.
     */
    export interface IResource {
        /**
         * The name of the service that this resource belongs to, such as
         * `pubsub.googleapis.com`. The service may be different from the DNS
         * hostname that actually serves the request.
         */
        service?: string
        /**
         * The stable identifier (name) of a resource on the `service`. A resource
         * can be logically identified as "//{resource.service}/{resource.name}".
         * The differences between a resource name and a URI are:
         * 
         * *   Resource name is a logical identifier, independent of network
         * protocol and API version. For example,
         * `//pubsub.googleapis.com/projects/123/topics/news-feed`.
         * *   URI often includes protocol and version information, so it can
         * be used directly by applications. For example,
         * `https://pubsub.googleapis.com/v1/projects/123/topics/news-feed`.
         * 
         * See https://cloud.google.com/apis/design/resource_names for details.
         */
        name?: string
        /**
         * The type of the resource. The syntax is platform-specific because
         * different platforms define their resources differently.
         * 
         * For Google APIs, the type format must be "{service}/{kind}".
         */
        type?: string
        /**
         * The labels or tags on the resource, such as AWS resource tags and
         * Kubernetes resource labels.
         */
        labels?: { readonly [k: string]: string }
    }

    export class Resource extends $sisyphus.Message<Resource> implements IResource {
        service!: string
        name!: string
        type!: string
        labels!: { readonly [k: string]: string }
    }
    $reflection.root.lookupType(".google.rpc.context.AttributeContext.Resource").messageCtor = Resource
}