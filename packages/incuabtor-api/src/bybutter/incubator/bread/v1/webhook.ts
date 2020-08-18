import * as $protobuf from "protobufjs"
import * as $reflection from "../../../../_reflection"
import * as $sisyphus from "@sisyphus.js/core"


/** Pingpp 回调请求 */
export interface IInvokeWebhookRequest {
    /** Pingpp 回调的参数，应该是 Json 形式，但是也不一定 */
    body?: string
}

export class InvokeWebhookRequest extends $protobuf.Message<InvokeWebhookRequest> implements IInvokeWebhookRequest {
    body!: string
    get $type() {
        return InvokeWebhookRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.InvokeWebhookRequest")
}
InvokeWebhookRequest.$type.generatedObject = InvokeWebhookRequest
InvokeWebhookRequest.prototype.body = InvokeWebhookRequest.$type.fieldsById[1].defaultValue


/** Pingpp 回调返回值 */
export interface IInvokeWebhookResponse {
    /** Pingpp 回调返回值，任意包含 Pingxx 的字段即可 */
    body?: string
}

export class InvokeWebhookResponse extends $protobuf.Message<InvokeWebhookResponse> implements IInvokeWebhookResponse {
    body!: string
    get $type() {
        return InvokeWebhookResponse.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.InvokeWebhookResponse")
}
InvokeWebhookResponse.$type.generatedObject = InvokeWebhookResponse
InvokeWebhookResponse.prototype.body = InvokeWebhookResponse.$type.fieldsById[1].defaultValue

/** 提供各种第三方服务的 WebHook API */
export class Webhook extends $sisyphus.Client {
    get $reflection() {
        return Webhook.reflection
    }
    /**
     * Pingpp 支付回调 API
     * (-- api-linter: core::0136::http-body=disabled
     * aip.dev/not-precedent: 第三方服务，结构简化处理. --)
     */
    async InvokePingpp(input: IInvokeWebhookRequest, metadata?: { [k: string]: string }): Promise<IInvokeWebhookResponse> {
        return await this.$call(this.$reflection.methods["InvokePingpp"], input, metadata)
    }
    static readonly reflection = $reflection.root.lookupService(".bybutter.incubator.bread.v1.Webhook")
}