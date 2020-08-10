import * as $sisyphus from "@sisyphus.js/core"
import * as $protobuf from "protobufjs"
import * as $struct from "../../../../google/protobuf/struct"
import * as $reflection from "../../../../_reflection"


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
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "dictation":
                    result[key] = $struct.Struct.create(properties[key])
                    break
            }
        }
        return result
    }
}
InvokeDictationCallbackRequest.prototype.dictation = null

//Service: .bybutter.incubator.bread.v1.DictationCallbacksApi