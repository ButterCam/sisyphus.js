import * as $struct from "../../../../google/protobuf/struct"
import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"
import * as $empty from "../../../../google/protobuf/empty"


/** 阿里云回调 API 请求 */
export interface IInvokeDictationCallbackRequest {
    /** 阿里云的回调结构 */
    dictation?: $struct.IStruct
}

export class InvokeDictationCallbackRequest extends $sisyphus.Message<InvokeDictationCallbackRequest> implements IInvokeDictationCallbackRequest {
    dictation!: $struct.Struct
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.InvokeDictationCallbackRequest").messageCtor = InvokeDictationCallbackRequest

/** 语音识别回调 API */
export class DictationCallbacksApi extends $sisyphus.Client {
    get $service() {
        return DictationCallbacksApi.$service
    }
    /**
     * 阿里回调
     * (-- api-linter: core::0136::http-body=disabled
     * aip.dev/not-precedent: 第三方的模型结构，我们这边无法进行 Proto 建模. --)
     */
    async InvokeDictationAliCallback(input: IInvokeDictationCallbackRequest, metadata?: { [k: string]: string }): Promise<$empty.Empty> {
        return await this.$call(this.$service.methods["InvokeDictationAliCallback"], input, metadata)
    }
    static readonly $service = $reflection.root.lookupService(".bybutter.incubator.bread.v1.DictationCallbacksApi")
}