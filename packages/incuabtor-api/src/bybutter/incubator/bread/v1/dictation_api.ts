import * as $dictation from "./dictation"
import * as $protobuf from "protobufjs"
import * as $reflection from "../../../../_reflection"
import * as $sisyphus from "@sisyphus.js/core"
import * as $operations from "../../../../google/longrunning/operations"


/** 创建语音识别任务请求 */
export interface ICreateDictationTaskRequest {
    /** 语音识别任务所属用户 */
    parent?: string
    /** body 语音识别任务信息 */
    dictationTask?: $dictation.IDictationTask
}

export class CreateDictationTaskRequest extends $protobuf.Message<CreateDictationTaskRequest> implements ICreateDictationTaskRequest {
    parent!: string
    dictationTask!: $dictation.DictationTask
    get $type() {
        return CreateDictationTaskRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.CreateDictationTaskRequest")
}
CreateDictationTaskRequest.$type.generatedObject = CreateDictationTaskRequest
CreateDictationTaskRequest.prototype.parent = CreateDictationTaskRequest.$type.fieldsById[1].defaultValue
CreateDictationTaskRequest.prototype.dictationTask = CreateDictationTaskRequest.$type.fieldsById[2].defaultValue

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