import {IRpcImpl} from "./client"
import {Method, util} from "protobufjs"
import {Message} from "./message"
import axios, {AxiosRequestConfig, AxiosResponse} from "axios"
import base64 = util.base64;

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
    return url.replace(/{([a-zA-Z0-9_]+)(?:=[^}]+)?}/g, (substring, args) => `${message[args[0]]}`)
}

export let transcoding = function (host: string, ref: any, metadata ?: { [k: string]: string }, interceptor?: (resp: AxiosResponse) => Promise<void>): IRpcImpl {
    metadata = {...metadata, Accept: "application/x-protobuf", "Content-Type": "application/x-protobuf"}

    return async function (desc: Method, message: Message, meta?: { [k: string]: string }): Promise<Message> {
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
            if((<any>rule)[string]) {
                rule.pattern = string
            }
        }

        const request: AxiosRequestConfig = {
            baseURL: host,
            headers: {...metadata, ...meta}
        }

        if(rule.pattern == undefined) {
            throw new Error(`Transcoding rule must have pattern.`)
        }
        if (rule.pattern == "custom") {
            request.method = <any>rule.custom?.kind
            request.url = fillUrl(<any>rule.custom?.path, message)
        } else {
            request.method = <any>rule.pattern
            request.url = fillUrl((<any>rule)[rule.pattern], message)
        }

        const inputType = desc.resolvedRequestType?.fullName?.split('.')
        if(!inputType) throw new Error("Input type not found.")
        let input = ref
        for (let string of inputType) {
            if(string.length == 0) continue
            input = input[string]
        }
        message = input.create(message)

        switch (rule.body) {
            case "*":
                request.data = message.$encode().finish()
                break
            case null:
            case undefined:
            case "":
                break
            default:
                request.data = (<any>message)[rule.body]
                if (request.data instanceof Message) {
                    request.data = request.data.$encode().finish()
                } else {
                    request.data = `${request.data}`
                }
                break
        }

        let response = await axios.request(request)
        if(interceptor) {
            await interceptor(response)
        }

        if(response.status < 300) {
            const outputType = desc.resolvedResponseType?.fullName?.split('.')
            if(!outputType) throw new Error("Output type not found.")
            let output = ref
            for (let string of outputType) {
                if(string.length == 0) continue
                output = output[string]
            }
            const enc = new TextEncoder()
            return output.decode(enc.encode(response.data))
        }else {
            throw new Error("")
        }
    }
}