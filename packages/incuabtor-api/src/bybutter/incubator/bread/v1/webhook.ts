import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"
import * as $protobuf from "protobufjs"


/** Pingpp 回调请求 */
export interface IInvokeWebhookRequest {
    /** Pingpp 回调的参数，应该是 Json 形式，但是也不一定 */
    body?: string
}

export class InvokeWebhookRequest extends $sisyphus.Message<IInvokeWebhookRequest> implements IInvokeWebhookRequest {
    body!: string
    get $reflection() {
        return InvokeWebhookRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.InvokeWebhookRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): InvokeWebhookRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.body = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): InvokeWebhookRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IInvokeWebhookRequest): InvokeWebhookRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("body") && properties.body !== undefined) result.body = properties.body
        return result
    }
}
InvokeWebhookRequest.prototype.body = ""


/** Pingpp 回调返回值 */
export interface IInvokeWebhookResponse {
    /** Pingpp 回调返回值，任意包含 Pingxx 的字段即可 */
    body?: string
}

export class InvokeWebhookResponse extends $sisyphus.Message<IInvokeWebhookResponse> implements IInvokeWebhookResponse {
    body!: string
    get $reflection() {
        return InvokeWebhookResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.InvokeWebhookResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): InvokeWebhookResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.body = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): InvokeWebhookResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IInvokeWebhookResponse): InvokeWebhookResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("body") && properties.body !== undefined) result.body = properties.body
        return result
    }
}
InvokeWebhookResponse.prototype.body = ""

//Service: .bybutter.incubator.bread.v1.Webhook