import {Message, MessageConstructor} from "./message"
import {IRpcConfig, IRpcImpl} from "./client"
import {Method, Type, util} from "protobufjs"
import {GrpcStatusError} from "./error";

export interface IHttpRule {
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

export interface ICustomHttpPattern {
    kind?: string
    path?: string
}

export function exportHttpRule(options: any): IHttpRule {
    const result: IHttpRule = {
        selector: options["(google.api.http).selector"],
        get: options["(google.api.http).get"],
        put: options["(google.api.http).put"],
        post: options["(google.api.http).post"],
        delete: options["(google.api.http).delete"],
        patch: options["(google.api.http).patch"],
        custom: options["(google.api.http).custom"],
        body: options["(google.api.http).body"],
        responseBody: options["(google.api.http).responseBody"]
    }

    for (const string of ["get", "put", "post", "delete", "patch", "custom"]) {
        if ((<any>result)[string]) {
            result.pattern = string
        }
    }

    return result
}

export interface IHttpRequest {
    url: string,
    method: string,
    params: { [k: string]: any },
    body?: ArrayBuffer | any,
    bodyType: BodyType
    headers: { [k: string]: string }
}

export interface IHttpResponse {
    status: number,
    headers: { [k: string]: string },
    body: ArrayBuffer | any
}

export interface IHttpImpl {
    (request: IHttpRequest): Promise<IHttpResponse>
}

export interface ITranscodingConfig extends IRpcConfig {
    bodyType: (desc: Method, message: any) => Promise<BodyType>
}

export type BodyType = "protobuf" | "json"

function getField(message: any, field: string | string[]): any {
    if (typeof field === "string") {
        return getField(message, field.split("."))
    }

    for (let string of field) {
        message = message[util.camelCase(string)]
    }
    return message
}

function getFieldInfo(type: Type, field: string | string[]): Type | null {
    if (typeof field === "string") {
        return getFieldInfo(type, field.split("."))
    }

    for (let string of field) {
        type = <any>type.fields[util.camelCase(string)].resolvedType
        if (!type) return null
    }

    return type
}

export function fillUrl(url: string, message: any): string {
    return url.replace(/{([a-zA-Z0-9_.]+)(?:=[^}]+)?}/g, (substring, g1) => `${getField(message, g1)}`)
}

export function transcoding(http: IHttpImpl, config?: ITranscodingConfig): IRpcImpl {
    return async function (desc: Method, message: Message | { [k: string]: any }, meta?: { [k: string]: string }): Promise<Message> {
        const rule: IHttpRule = exportHttpRule(desc.options)
        if (!rule.pattern) throw new Error(`Transcoding not support for '${desc.fullName}', 'http' option required.`)

        if (desc.resolvedRequestType?.messageCtor == null || desc.resolvedResponseType?.messageCtor == null) {
            throw Error("Reflection info missed.")
        }

        const metadata = config?.metadataProvider ? await config.metadataProvider(desc, message) : undefined
        const bodyType = config?.bodyType ? await config.bodyType(desc, message) : "protobuf"

        let method: string,
            url: string,
            data,
            params: { [k: string]: any } = {},
            messageCtor: MessageConstructor | null = null,
            headers: { [k: string]: string } = {...metadata, ...meta}

        if (rule.pattern == "custom") {
            method = <any>rule.custom?.kind
            url = fillUrl(<any>rule.custom?.path, message)
        } else {
            method = <any>rule.pattern
            url = fillUrl((<any>rule)[rule.pattern], message)
        }

        headers["Accept"] = bodyType == "protobuf" ? "application/x-protobuf" : "application/json"

        switch (rule.body) {
            case "*":
                data = message
                messageCtor = desc.resolvedRequestType.messageCtor
                break
            case null:
            case undefined:
            case "":
                break
            default:
                data = getField(message, rule.body)
                let type = getFieldInfo(desc.resolvedRequestType.messageCtor.$type, rule.body)
                if (data && type) {
                    messageCtor = type.messageCtor
                }
                break
        }

        if (data) {
            if (messageCtor) {
                if (bodyType == "protobuf") {
                    data = messageCtor.encode(data).finish()
                    data = data.slice(0, data.length).buffer
                    headers["Content-Type"] = "application/x-protobuf"
                } else {
                    data = messageCtor.toJson(data)
                    headers["Content-Type"] = "application/json"
                }
            } else {
                headers["Content-Type"] = "application/json"
            }
        }

        if (rule.body != "*") {
            for (let key in message) {
                if (message.hasOwnProperty(key) && key != rule.body) {
                    params[key] = (<any>message)[key]
                }
            }
        }

        const request: IHttpRequest = {
            url, headers, bodyType, params, method,
            body: data
        }

        const response = await http(request)

        if (config?.metadataHandler) {
            await config.metadataHandler(desc, response.headers)
        }

        if (response.status < 300) {
            if (request.bodyType == "protobuf") {
                return desc.resolvedResponseType.messageCtor.decode(<any>response.body)
            } else {
                return desc.resolvedResponseType.messageCtor.fromJson(<any>response.body)
            }
        } else {
            let status: any
            if (request.bodyType == "protobuf") {
                status = desc.root.lookupType(".google.rpc.Status").messageCtor.decode(<any>response.body)
            } else {
                status = desc.root.lookupType(".google.rpc.Status").messageCtor.fromJson(<any>response.body)
            }
            const error = new GrpcStatusError(status.code, status.message, status.details)
            if (config?.errorHandler) {
                return await config.errorHandler(desc, error)
            }
            throw error
        }
    }
}

export function serializeParam(params: any, prefix ?: string): string {
    if (!params) return ''
    if (typeof params !== "object") return ''

    const result: string[] = []

    for (let key in params) {
        if (params.hasOwnProperty(key)) {
            let value = params[key]
            if (!value) continue

            if (!Array.isArray(value)) {
                if (typeof value === "object") {
                    result.push(serializeParam(value, key))
                    continue
                }
                value = [value]
            }

            for (const item of value) {
                if (prefix) {
                    result.push(`${prefix}.${key}=${item}`)
                } else {
                    result.push(`${key}=${item}`)
                }
            }
        }
    }

    return result.join("&")
}