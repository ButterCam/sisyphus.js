import * as $reflection from "../../../../_reflection"
import * as $protobuf from "protobufjs"
import * as $duration from "../../../../google/protobuf/duration"


/** 语音识别厂商 */
export enum DictationVendor {
    /** 未指定 */
    DICTATION_VENDOR_UNSPECIFIED = 0,
    /** 阿里 */
    DICTATION_VENDOR_ALI = 1,
    /** 网易 */
    DICTATION_VENDOR_NETEASE = 2,
}

export namespace DictationVendor {
    export const reflection = $reflection.root.lookupEnum(".bybutter.incubator.bread.v1.DictationVendor")
}

/** 语音识别任务状态 */
export enum DictationState {
    /** 未指定 */
    DICTATION_STATE_UNSPECIFIED = 0,
    /** 成功 */
    DICTATION_STATE_SUCCESS = 1,
    /** 队列中 */
    DICTATION_STATE_QUEUING = 2,
    /** 失败 */
    DICTATION_STATE_ERROR = 3,
}

export namespace DictationState {
    export const reflection = $reflection.root.lookupEnum(".bybutter.incubator.bread.v1.DictationState")
}

/** 空的Meta date */
export interface IDictationOperationMetadata {
}

export class DictationOperationMetadata extends $protobuf.Message<DictationOperationMetadata> implements IDictationOperationMetadata {
    get $type() {
        return DictationOperationMetadata.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.DictationOperationMetadata")
}

DictationOperationMetadata.$type.generatedObject = DictationOperationMetadata


/** 语音识别任务 */
export interface IDictationTask {
    /** 语音识别任务 users/{user}/dictationTasks/{task} */
    name?: string
    /** 语音识别任务key */
    audioFileKey?: string
    /** 要识别的多媒体文件url */
    audioFileUri?: string
    /** 时长 */
    audioDuration?: $duration.IDuration
    /** 语音识别的句子相关 */
    sentences?: readonly IDictationSentence[]
    /** 语音识别任务状态 */
    state?: DictationState
    /** 语音识别任务厂商 */
    vendor?: DictationVendor
}

export class DictationTask extends $protobuf.Message<DictationTask> implements IDictationTask {
    name!: string
    audioFileKey!: string
    audioFileUri!: string
    audioDuration!: $duration.Duration
    sentences!: readonly DictationSentence[]
    state!: DictationState
    vendor!: DictationVendor

    get $type() {
        return DictationTask.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.DictationTask")
}

DictationTask.$type.generatedObject = DictationTask
DictationTask.prototype.name = DictationTask.$type.fieldsById[1].defaultValue
DictationTask.prototype.audioFileKey = DictationTask.$type.fieldsById[2].defaultValue
DictationTask.prototype.audioFileUri = DictationTask.$type.fieldsById[3].defaultValue
DictationTask.prototype.audioDuration = DictationTask.$type.fieldsById[4].defaultValue
DictationTask.prototype.sentences = DictationTask.$type.fieldsById[5].defaultValue
DictationTask.prototype.state = DictationTask.$type.fieldsById[6].defaultValue
DictationTask.prototype.vendor = DictationTask.$type.fieldsById[7].defaultValue


/** 语音识别出的句子 */
export interface IDictationSentence {
    /** 开始时间 */
    beginOffset?: $duration.IDuration
    /** 结束时间 */
    endOffset?: $duration.IDuration
    /** 内容 */
    content?: string
    /** 所有的词 */
    words?: readonly IDictationWord[]
}

export class DictationSentence extends $protobuf.Message<DictationSentence> implements IDictationSentence {
    beginOffset!: $duration.Duration
    endOffset!: $duration.Duration
    content!: string
    words!: readonly DictationWord[]

    get $type() {
        return DictationSentence.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.DictationSentence")
}

DictationSentence.$type.generatedObject = DictationSentence
DictationSentence.prototype.beginOffset = DictationSentence.$type.fieldsById[1].defaultValue
DictationSentence.prototype.endOffset = DictationSentence.$type.fieldsById[2].defaultValue
DictationSentence.prototype.content = DictationSentence.$type.fieldsById[3].defaultValue
DictationSentence.prototype.words = DictationSentence.$type.fieldsById[4].defaultValue


/** 语音识别的词 */
export interface IDictationWord {
    /** 开始时间 */
    beginOffset?: $duration.IDuration
    /** 结束时间 */
    endOffset?: $duration.IDuration
    /** 内容 */
    content?: string
    /** 类型 */
    type?: DictationWord.Type
}

export class DictationWord extends $protobuf.Message<DictationWord> implements IDictationWord {
    beginOffset!: $duration.Duration
    endOffset!: $duration.Duration
    content!: string
    type!: DictationWord.Type

    get $type() {
        return DictationWord.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.DictationWord")
}

DictationWord.$type.generatedObject = DictationWord
DictationWord.prototype.beginOffset = DictationWord.$type.fieldsById[1].defaultValue
DictationWord.prototype.endOffset = DictationWord.$type.fieldsById[2].defaultValue
DictationWord.prototype.content = DictationWord.$type.fieldsById[3].defaultValue
DictationWord.prototype.type = DictationWord.$type.fieldsById[4].defaultValue

export namespace DictationWord {

    /** 词的类型 */
    export enum Type {
        /** 未指定 */
        TYPE_UNSPECIFIED = 0,
        /** 词 */
        TYPE_WORD = 1,
        /** 标点符号 */
        TYPE_PUNCTUATION = 2,
    }

    export namespace Type {
        export const reflection = $reflection.root.lookupEnum(".bybutter.incubator.bread.v1.DictationWord.Type")
    }
}