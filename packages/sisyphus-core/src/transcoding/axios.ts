import {IRpcImpl} from "../client"
import {Method} from "protobufjs"
import axios, {AxiosRequestConfig, AxiosResponse} from "axios"
import {Message} from "../message";
import {GrpcStatusError} from "../error";

interface IHttpOption {
    "(google.api.http).selector": string
    "(google.api.http).get"?: string
    "(google.api.http).put"?: string
    "(google.api.http).post"?: string
    "(google.api.http).delete"?: string
    "(google.api.http).patch"?: string
    "(google.api.http).custom"?: (ICustomHttpPattern | null)
    "(google.api.http).body"?: string
    "(google.api.http).responseBody"?: string
    "(google.api.http).additionalBindings"?: (IHttpRule[] | null)
    "(google.api.http).pattern"?: string
}

interface IHttpRule {
    selector: string
    get?: string
    put?: string
    post?: string
    delete?: string
    patch?: string
    custom?: (ICustomHttpPattern | null)
    body?: string
    responseBody?: string
    additionalBindings?: (IHttpRule[] | null)
    pattern?: string
}

interface ICustomHttpPattern {
    kind?: string
    path?: string
}

function fillUrl(url: string, message: any): string {
    return url.replace(/{([a-zA-Z0-9_]+)(?:=[^}]+)?}/g, (substring, g1) => `${message[g1]}`)
}

export let transcoding = function (host: string, metadata ?: { [k: string]: string }, interceptor?: (resp: AxiosResponse) => Promise<void>): IRpcImpl {
    metadata = {...metadata, Accept: "application/x-protobuf"}

    return async function (desc: Method, message: Message | { [k: string]: any }, meta?: { [k: string]: string }): Promise<Message> {
        const option = <IHttpOption>desc.options
        if (!option) throw new Error(`Transcoding not support for '${desc.fullName}', 'http' option required.`)
        const rule: IHttpRule = {
            selector: option["(google.api.http).selector"],
            get: option["(google.api.http).get"],
            put: option["(google.api.http).put"],
            post: option["(google.api.http).post"],
            delete: option["(google.api.http).delete"],
            patch: option["(google.api.http).patch"],
            custom: option["(google.api.http).custom"],
            body: option["(google.api.http).body"],
            responseBody: option["(google.api.http).responseBody"],
            additionalBindings: option["(google.api.http).additionalBindings"],
            pattern: option["(google.api.http).pattern"],
        }

        for (const string of ["get", "put", "post", "delete", "patch", "custom"]) {
            if ((<any>rule)[string]) {
                rule.pattern = string
            }
        }

        const request: AxiosRequestConfig = {
            baseURL: host,
            headers: {...metadata, ...meta},
            responseType: "arraybuffer",
        }

        if (rule.pattern == undefined) {
            throw new Error(`Transcoding rule must have pattern.`)
        }
        if (rule.pattern == "custom") {
            request.method = <any>rule.custom?.kind
            request.url = fillUrl(<any>rule.custom?.path, message)
        } else {
            request.method = <any>rule.pattern
            request.url = fillUrl((<any>rule)[rule.pattern], message)
        }

        if (desc.resolvedRequestType?.messageCtor == null || desc.resolvedResponseType?.messageCtor == null) {
            throw Error("Reflection info missed.")
        }

        switch (rule.body) {
            case "*":
                request.data = desc.resolvedRequestType.messageCtor.encode(message).finish()
                break
            case null:
            case undefined:
            case "":
                break
            default:
                request.data = (<any>message)[rule.body]
                if (request.data instanceof Message) {
                    request.data = request.data.$type.messageCtor.encode(message).finish()
                } else {
                    request.data = `${request.data}`
                }
                break
        }

        if (request.data) {
            request.headers["Content-Type"] = "application/x-protobuf"
            request.data = request.data.slice(0, request.data.length).buffer
        }

        let response = await axios.request(request)
        if (interceptor) {
            await interceptor(response)
        }

        if (response.status < 300) {
            return desc.resolvedResponseType.messageCtor.decode(new Uint8Array(response.data))
        } else {
            const status: any = desc.root.lookupType(".google.rpc.Status").messageCtor.decode(new Uint8Array(response.data))
            throw new GrpcStatusError(status.code, status.message, status.details)
        }
    }
}
