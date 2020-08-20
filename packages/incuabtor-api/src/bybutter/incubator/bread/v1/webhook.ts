import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"


/** Pingpp 回调请求 */
export interface IInvokeWebhookRequest {
    /** Pingpp 回调的参数，应该是 Json 形式，但是也不一定 */
    body?: string
}

export class InvokeWebhookRequest extends $sisyphus.Message<InvokeWebhookRequest> implements IInvokeWebhookRequest {
    body!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.InvokeWebhookRequest").messageCtor = InvokeWebhookRequest


/** Pingpp 回调返回值 */
export interface IInvokeWebhookResponse {
    /** Pingpp 回调返回值，任意包含 Pingxx 的字段即可 */
    body?: string
}

export class InvokeWebhookResponse extends $sisyphus.Message<InvokeWebhookResponse> implements IInvokeWebhookResponse {
    body!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.InvokeWebhookResponse").messageCtor = InvokeWebhookResponse

/** 提供各种第三方服务的 WebHook API */
export class Webhook extends $sisyphus.Client {
    get $service() {
        return Webhook.$service
    }
    /**
     * Pingpp 支付回调 API
     * (-- api-linter: core::0136::http-body=disabled
     * aip.dev/not-precedent: 第三方服务，结构简化处理. --)
     */
    async InvokePingpp(input: IInvokeWebhookRequest, metadata?: { [k: string]: string }): Promise<InvokeWebhookResponse> {
        return await this.$call(this.$service.methods["InvokePingpp"], input, metadata)
    }
    static readonly $service = $reflection.root.lookupService(".bybutter.incubator.bread.v1.Webhook")
}