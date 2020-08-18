import * as $struct from "../../../../google/protobuf/struct"
import * as $protobuf from "protobufjs"
import * as $reflection from "../../../../_reflection"
import * as $sisyphus from "@sisyphus.js/core"
import * as $empty from "../../../../google/protobuf/empty"


/** 阿里云回调 API 请求 */
export interface IInvokeDictationCallbackRequest {
    /** 阿里云的回调结构 */
    dictation?: $struct.IStruct
}

export class InvokeDictationCallbackRequest extends $protobuf.Message<InvokeDictationCallbackRequest> implements IInvokeDictationCallbackRequest {
    dictation!: $struct.Struct

    get $type() {
        return InvokeDictationCallbackRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.InvokeDictationCallbackRequest")
}

InvokeDictationCallbackRequest.$type.generatedObject = InvokeDictationCallbackRequest
InvokeDictationCallbackRequest.prototype.dictation = InvokeDictationCallbackRequest.$type.fieldsById[1].defaultValue

/** 语音识别回调 API */
export class DictationCallbacksApi extends $sisyphus.Client {
    get $reflection() {
        return DictationCallbacksApi.reflection
    }

    /**
     * 阿里回调
     * (-- api-linter: core::0136::http-body=disabled
     * aip.dev/not-precedent: 第三方的模型结构，我们这边无法进行 Proto 建模. --)
     */
    async InvokeDictationAliCallback(input: IInvokeDictationCallbackRequest, metadata?: { [k: string]: string }): Promise<$empty.IEmpty> {
        return await this.$call(this.$reflection.methods["InvokeDictationAliCallback"], input, metadata)
    }

    static readonly reflection = $reflection.root.lookupService(".bybutter.incubator.bread.v1.DictationCallbacksApi")
}