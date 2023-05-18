import {HttpRule} from '@sisyphus.js/google/lib/google/api/http'
import {Status} from '@sisyphus.js/google/lib/google/rpc/status'
import {MethodDescriptor, ServiceDescriptor} from './descriptor'
import {collect, Flow, flow} from "@sisyphus.js/runtime";
import {decodeServerSentEventToFlow} from "./sse";

export interface Rpc {
    (method: MethodDescriptor, input: any): Promise<any>
}

export interface TranscodingListener {
    onRequest?: (method: MethodDescriptor, input: any, request: Request) => Promise<Request>

    onResponse?: (method: MethodDescriptor, request: Request, response: Response) => Promise<void>
}

export class StatusError extends Error {
    status: Status
    method: MethodDescriptor
    request: Request
    response: Response

    constructor(status: Status, method: MethodDescriptor, request: Request, response: Response) {
        super(status.message)
        this.status = status
        this.method = method
        this.request = request
        this.response = response
    }
}

export function transcoding(host: string, config?: TranscodingListener): Rpc {
    host = host.replace(/\/+$/, '')
    return async function (method: MethodDescriptor, input: any): Promise<any> {
        let request = buildRequest(host, config, method, input)
        if (config?.onRequest !== undefined) {
            request = await config.onRequest(method, input, request)
        }

        const response = await fetch(request)
        if (method.os) {
            const body = response.body
            if (body === null) {
                if (config?.onResponse !== undefined) {
                    await config.onResponse(method, request, response)
                }
                return emptyFlow()
            }
            return flow(async emitter => {
                let status: Status = {
                    code: 0
                }
                let httpStatus: number = response.status
                let trailers: Headers = new Headers(response.headers)

                await collect(decodeServerSentEventToFlow(body), async it => {
                    switch (it.event) {
                        case 'message':
                            await emitter(JSON.parse(it.data))
                            break
                        case 'status':
                            status = JSON.parse(it.data)
                            httpStatus = mapGrpcStatusToHttpCode(status)
                            const statusHeaders = mapGrpcStatusToHttpHeader(status)
                            trailers = mergeHeaders(trailers, statusHeaders)
                            break
                        case 'trailer':
                            trailers = mergeHeaders(trailers, new Headers(JSON.parse(it.data)))
                            break
                    }
                })

                const dummyResponse = new Response(null, {
                    status: httpStatus,
                    headers: trailers
                })
                if (config?.onResponse !== undefined) {
                    await config.onResponse(method, request, dummyResponse)
                }
                if (!response.ok) {
                    throw new StatusError(status, method, request, dummyResponse)
                }
            })
        } else {
            if (config?.onResponse !== undefined) {
                await config.onResponse(method, request, response)
            }

            if (response.ok) {
                if (config?.onResponse !== undefined) {
                    await config.onResponse(method, request, response)
                }
                if (response.status === 204) {
                    return {}
                }
                if (response.headers.get('content-length') === '0') {
                    return {}
                }
                if (response.headers.get('content-type')?.startsWith('application/json')) {
                    return await response.json()
                }
                return {}
            } else {
                const status = await response.json()
                throw new StatusError(status, method, request, response)
            }
        }
    }
}

export function aipClient(desc: ServiceDescriptor, rpc: Rpc): any {
    const client: Record<any, (i: any) => Promise<any>> = {}
    for (let method in desc.methods) {
        client[method] = function (input: any): Promise<any> {
            return rpc(desc.methods[method], input)
        }
    }
    return client
}

function mapGrpcStatusToHttpCode(status: Status): number {
    switch (status.code) {
        case 0:
            return 200
        case 1:
            return 499
        case 2:
            return 500
        case 3:
            return 400
        case 4:
            return 504
        case 5:
            return 404
        case 6:
            return 409
        case 7:
            return 403
        case 16:
            return 401
        case 8:
            return 429
        case 9:
            return 400
        case 10:
            return 409
        case 11:
            return 400
        case 12:
            return 501
        case 13:
            return 500
        case 14:
            return 503
        case 15:
            return 500
        default:
            return 500
    }
}

function mapGrpcStatusToHttpHeader(status: Status): Headers {
    const init = {}

    if (status.code !== undefined) {
        Object.assign(init, {"grpc-status": `${status.code}`})
    }

    if (status.message !== undefined) {
        Object.assign(init, {"grpc-message": `${status.message}`})
    }

    return new Headers(init)
}

function buildRequest(host: string, config: TranscodingListener | undefined, method: MethodDescriptor, input: any): Request {
    input = {...input}
    const rule: HttpRule = method.options?.http
    if (rule === undefined) throw new Error(`Transcoding not support for '${method.name}', 'http' option required.`)
    if (method.is) {
        throw new Error(`Transcoding not support for input streaming rpc '${method.name}'.`)
    }
    let path: string = ''
    const headers = new Headers()

    if (method.os) {
        headers.set('Accept', 'text/event-stream')
    } else {
        headers.set('Accept', 'application/json')
    }

    headers.set('Content-Type', 'application/json')
    const requestInfo: RequestInit = {headers}
    if (rule.get !== undefined) {
        requestInfo.method = 'GET'
        path = rule.get
    }
    if (rule.post !== undefined) {
        requestInfo.method = 'POST'
        path = rule.post
    }
    if (rule.put !== undefined) {
        requestInfo.method = 'PUT'
        path = rule.put
    }
    if (rule.delete !== undefined) {
        requestInfo.method = 'DELETE'
        path = rule.delete
    }
    if (rule.patch !== undefined) {
        requestInfo.method = 'PATCH'
        path = rule.patch
    }
    if (rule.custom !== undefined) {
        requestInfo.method = rule.custom.kind
        path = rule.custom.path!
    }
    path = fillUrl(path, input)

    switch (rule.body) {
        case '*':
            requestInfo.body = JSON.stringify(input)
            input = {}
            break
        case null:
        case undefined:
        case '':
            break
        default:
            requestInfo.body = JSON.stringify(getFieldAndDelete(input, rule.body))
            break
    }

    const query = serializeParam(input)
    if (query.length > 0) {
        path = `${path}?${query}`
    }

    return new Request(host + path, requestInfo)
}

function serializeParam(params: any, prefix ?: string): string {
    if (!params) return ''
    if (typeof params !== 'object') return ''

    const result: string[] = []

    for (let key in params) {
        if (params.hasOwnProperty(key)) {
            const field = prefix == undefined ? key : `${prefix}.${key}`
            let value = params[key]
            if (!value) continue

            if (!Array.isArray(value)) {
                if (typeof value === 'object') {
                    result.push(serializeParam(value, field))
                    continue
                }
                value = [value]
            }

            for (const item of value) {
                const value = encodeURIComponent('' + item)
                result.push(`${field}=${value}`)
            }
        }
    }

    return result.join('&')
}

function fillUrl(url: string, message: any): string {
    return url.replace(/\{([a-zA-Z\d_.]+)(?:=[^}]+)?}/g,
        (substring, g1) => `${getFieldAndDelete(message, g1)}`)
}

function getFieldAndDelete(message: any, field: string): any {
    const camelizeField = camelize(field)
    const fields = camelizeField.split('.')

    let value = message
    for (let field of fields) {
        const current = value[field]
        if (field === fields[fields.length - 1]) {
            value[field] = undefined
        }
        value = current
    }
    return value
}

function camelize(str: string) {
    str = str.replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
    return str.substring(0, 1).toLowerCase() + str.substring(1)
}

function emptyFlow<T>(): Flow<T> {
    return flow(async _ => {
    })
}

function mergeHeaders(headers: Headers, ...args: Headers[]): Headers {
    const result = new Headers(headers)
    for (const arg of args) {
        arg.forEach((value, key) => {
            result.set(key, value)
        })
    }

    return result
}