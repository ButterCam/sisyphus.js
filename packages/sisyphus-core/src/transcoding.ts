import {IRpcImpl} from "./client"
import {Method} from "protobufjs"
import {Message} from "./message"
import axios, {AxiosRequestConfig} from "axios"

interface IHttp {
    rules?: (IHttpRule[] | null)
    fullyDecodeReservedExpansion?: boolean
}

interface IHttpRule {
    selector?: string
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
    return url.replace(/{([a-zA-Z0-9_]+)=[^}]+}/g, (substring, args) => `${message[args[0]]}`)
}

export let transcoding = function (host: string, metadata ?: { [k: string]: string }): IRpcImpl {
    metadata = {...metadata, Accept: "application/x-protobuf"}

    return async function (desc: Method, message: Message, meta?: { [k: string]: string }): Promise<Message> {
        const option = <IHttp>desc.getOption(".google.api.http")
        if (!option) throw new Error(`Transcoding not support for '${desc.fullName}', 'http' option required.`)
        if (!option.rules) throw new Error(`Transcoding not support for '${desc.fullName}', 'http.rules' field required.`)
        const rule = option.rules[0]

        const request: AxiosRequestConfig = {
            baseURL: host,
            headers: {...metadata, ...meta}
        }

        if (rule.pattern == "custom") {
            request.method = <any>rule.custom?.kind
            request.url = fillUrl(<any>rule.custom?.path, message)
        } else {
            request.method = <any>rule.pattern
            request.url = fillUrl((<any>rule)[<string>rule.pattern], message)
        }

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

        const response = await axios.request(request)
        if(response.headers["x-grpc-status"]) {

        }
    }
}