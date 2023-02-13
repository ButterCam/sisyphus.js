import {HttpRule} from '@sisyphus.js/google/lib/google/api/http'
import {Status} from '@sisyphus.js/google/lib/google/rpc/status'
import {MethodDescriptor, ServiceDescriptor} from './descriptor'

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
        let rawInput = input
        input = {...input}
        const rule: HttpRule = method.options?.http
        if (rule === undefined) throw new Error(`Transcoding not support for '${method.name}', 'http' option required.`)
        if (method.is || method.os) {
            throw new Error(`Transcoding not support for streaming rpc '${method.name}'.`)
        }
        let path: string = ''
        const headers = new Headers()
        headers.set('Accept', 'application/json')
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

        let request = new Request(host + path, requestInfo)
        if (config?.onRequest !== undefined) {
            request = await config.onRequest(method, rawInput, request)
        }
        const response = await fetch(request)
        if (config?.onResponse !== undefined) {
            await config.onResponse(method, request, response)
        }

        if (response.ok) {
            if (response.status === 204) {
                return {}
            }
            if (parseInt(response.headers.get('content-length') || '0') === 0) {
                return {}
            }
            return await response.json()
        } else {
            const status = await response.json()
            throw new StatusError(status, method, request, response)
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