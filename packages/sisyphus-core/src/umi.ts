import {IRpcImpl} from "./client"
import u, {RequestOptionsWithResponse, RequestResponse} from "umi-request"
import {
    IHttpImpl,
    IHttpRequest,
    IHttpResponse,
    ITranscodingConfig,
    serializeParam,
    transcoding as baseTranscoding
} from "./transcoding";

function convertResponse(response: RequestResponse): IHttpResponse {
    const headers: { [k: string]: string } = {}
    response.response.headers.forEach((key, value) => {
        headers[key] = value
    })
    return {
        status: response.response.status,
        headers: headers,
        body: response.data
    }
}

export function umi(host: string): IHttpImpl {
    return async function (request: IHttpRequest): Promise<IHttpResponse> {
        const isBrowser = typeof process === "undefined"

        const requestConfig: RequestOptionsWithResponse = {
            headers: request.headers,
            responseType: request.bodyType == "protobuf" ? (isBrowser ? "arrayBuffer" : <any>"buffer") : "json",
            method: <any>request.method,
            params: request.params,
            paramsSerializer: serializeParam,
            data: request.body,
            getResponse: true
        }

        try {
            const response: RequestResponse = await u(host + request.url, requestConfig)
            return convertResponse(response)
        } catch (e) {
            if (e.response) {
                return convertResponse(e.response)
            } else {
                throw e
            }
        }
    }
}

export let transcoding = function (host: string, config?: ITranscodingConfig): IRpcImpl {
    return baseTranscoding(umi(host), config)
}