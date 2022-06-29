import {long} from '@sisyphus.js/runtime'
import {Duration} from '@sisyphus.js/runtime/lib/google/protobuf/duration'

/**
 *  A common proto for logging HTTP requests. Only contains semantics
 *  defined by the HTTP specification. Product-specific logging
 *  information MUST be defined in a separate message.
 */
export interface HttpRequest {
    /**  The request method. Examples: `"GET"`, `"HEAD"`, `"PUT"`, `"POST"`. */
    requestMethod?: string

    /**
     *  The scheme (http, https), the host name, the path and the query
     *  portion of the URL that was requested.
     *  Example: `"http://example.com/some/info?color=red"`.
     */
    requestUrl?: string

    /**
     *  The size of the HTTP request message in bytes, including the request
     *  headers and the request body.
     */
    requestSize?: long

    /**
     *  The response code indicating the status of response.
     *  Examples: 200, 404.
     */
    status?: number

    /**
     *  The size of the HTTP response message sent back to the client, in bytes,
     *  including the response headers and the response body.
     */
    responseSize?: long

    /**
     *  The user agent sent by the client. Example:
     *  `"Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Q312461; .NET
     *  CLR 1.0.3705)"`.
     */
    userAgent?: string

    /**
     *  The IP address (IPv4 or IPv6) of the client that issued the HTTP
     *  request. This field can include port information. Examples:
     *  `"192.168.1.1"`, `"10.0.0.1:80"`, `"FE80::0202:B3FF:FE1E:8329"`.
     */
    remoteIp?: string

    /**
     *  The IP address (IPv4 or IPv6) of the origin server that the request was
     *  sent to. This field can include port information. Examples:
     *  `"192.168.1.1"`, `"10.0.0.1:80"`, `"FE80::0202:B3FF:FE1E:8329"`.
     */
    serverIp?: string

    /**
     *  The referer URL of the request, as defined in
     *  [HTTP/1.1 Header Field
     *  Definitions](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).
     */
    referer?: string

    /**
     *  The request processing latency on the server, from the time the request was
     *  received until the response was sent.
     */
    latency?: Duration

    /**  Whether or not a cache lookup was attempted. */
    cacheLookup?: boolean

    /**
     *  Whether or not an entity was served from cache
     *  (with or without validation).
     */
    cacheHit?: boolean

    /**
     *  Whether or not the response was validated with the origin server before
     *  being served from cache. This field is only meaningful if `cache_hit` is
     *  True.
     */
    cacheValidatedWithOriginServer?: boolean

    /**
     *  The number of HTTP response bytes inserted into cache. Set only when a
     *  cache fill was attempted.
     */
    cacheFillBytes?: long

    /**  Protocol used for the request. Examples: "HTTP/1.1", "HTTP/2", "websocket" */
    protocol?: string
}

export namespace HttpRequest {
    export const name = 'google.logging.type.HttpRequest'
}
