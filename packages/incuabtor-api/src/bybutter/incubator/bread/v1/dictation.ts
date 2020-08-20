import * as $reflection from "../../../../_reflection"
import * as $sisyphus from "@sisyphus.js/core"
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

export class DictationOperationMetadata extends $sisyphus.Message<DictationOperationMetadata> implements IDictationOperationMetadata {
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.DictationOperationMetadata").messageCtor = DictationOperationMetadata


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

export class DictationTask extends $sisyphus.Message<DictationTask> implements IDictationTask {
    name!: string
    audioFileKey!: string
    audioFileUri!: string
    audioDuration!: $duration.Duration
    sentences!: readonly DictationSentence[]
    state!: DictationState
    vendor!: DictationVendor
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.DictationTask").messageCtor = DictationTask


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

export class DictationSentence extends $sisyphus.Message<DictationSentence> implements IDictationSentence {
    beginOffset!: $duration.Duration
    endOffset!: $duration.Duration
    content!: string
    words!: readonly DictationWord[]
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.DictationSentence").messageCtor = DictationSentence


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

export class DictationWord extends $sisyphus.Message<DictationWord> implements IDictationWord {
    beginOffset!: $duration.Duration
    endOffset!: $duration.Duration
    content!: string
    type!: DictationWord.Type
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.DictationWord").messageCtor = DictationWord

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