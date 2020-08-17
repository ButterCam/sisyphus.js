import * as $dictation from "./dictation"
import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"
import * as $protobuf from "protobufjs"
import * as $operations from "../../../../google/longrunning/operations"


/** 创建语音识别任务请求 */
export interface ICreateDictationTaskRequest {
    /** 语音识别任务所属用户 */
    parent?: string
    /** body 语音识别任务信息 */
    dictationTask?: ($dictation.IDictationTask | null)
}

export class CreateDictationTaskRequest extends $sisyphus.Message<ICreateDictationTaskRequest> implements ICreateDictationTaskRequest {
    parent!: string
    dictationTask!: ($dictation.IDictationTask | null)
    get $reflection() {
        return CreateDictationTaskRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.CreateDictationTaskRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): CreateDictationTaskRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.parent = reader.string()
                    break
                case 2:
                    result.dictationTask = $dictation.DictationTask.decodeDelimited(reader)
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): CreateDictationTaskRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: ICreateDictationTaskRequest): CreateDictationTaskRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("parent") && properties.parent !== undefined) result.parent = properties.parent
        if(properties.hasOwnProperty("dictationTask") && properties.dictationTask != null) result.dictationTask = $dictation.DictationTask.create(properties.dictationTask)
        return result
    }
}
CreateDictationTaskRequest.prototype.parent = CreateDictationTaskRequest.reflection.fieldsById[1].defaultValue
CreateDictationTaskRequest.prototype.dictationTask = CreateDictationTaskRequest.reflection.fieldsById[2].defaultValue

/** 音频文字识别 */
export class DictationApi extends $sisyphus.Client {
    get $reflection() {
        return DictationApi.reflection
    }
    /** 创建语音识别任务 */
    async CreateDictationTask(input: ICreateDictationTaskRequest, metadata?: { [k: string]: string }): Promise<$operations.IOperation> {
        return await this.$call(this.$reflection.methods["CreateDictationTask"], input, metadata)
    }
    static readonly reflection = $reflection.root.lookupService(".bybutter.incubator.bread.v1.DictationApi")
}