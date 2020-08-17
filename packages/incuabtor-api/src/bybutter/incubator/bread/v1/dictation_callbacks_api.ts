import * as $struct from "../../../../google/protobuf/struct"
import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"
import * as $protobuf from "protobufjs"
import * as $empty from "../../../../google/protobuf/empty"


/** 阿里云回调 API 请求 */
export interface IInvokeDictationCallbackRequest {
    /** 阿里云的回调结构 */
    dictation?: ($struct.IStruct | null)
}

export class InvokeDictationCallbackRequest extends $sisyphus.Message<IInvokeDictationCallbackRequest> implements IInvokeDictationCallbackRequest {
    dictation!: ($struct.IStruct | null)
    get $reflection() {
        return InvokeDictationCallbackRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.InvokeDictationCallbackRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): InvokeDictationCallbackRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.dictation = $struct.Struct.decodeDelimited(reader)
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): InvokeDictationCallbackRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IInvokeDictationCallbackRequest): InvokeDictationCallbackRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("dictation") && properties.dictation != null) result.dictation = $struct.Struct.create(properties.dictation)
        return result
    }
}
InvokeDictationCallbackRequest.prototype.dictation = InvokeDictationCallbackRequest.reflection.fieldsById[1].defaultValue

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