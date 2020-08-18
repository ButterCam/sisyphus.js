import * as $protobuf from "protobufjs"
import * as $reflection from "../../../../_reflection"
import * as $sisyphus from "@sisyphus.js/core"


/** 记录事件请求 */
export interface IRecordEventRequest {
    /** 加密的事件 */
    encryptedEvents?: string
}

export class RecordEventRequest extends $protobuf.Message<RecordEventRequest> implements IRecordEventRequest {
    encryptedEvents!: string
    get $type() {
        return RecordEventRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.event.v1.RecordEventRequest")
}
RecordEventRequest.$type.generatedObject = RecordEventRequest
RecordEventRequest.prototype.encryptedEvents = RecordEventRequest.$type.fieldsById[1].defaultValue


/** 记录事件响应 */
export interface IRecordEventResponse {
}

export class RecordEventResponse extends $protobuf.Message<RecordEventResponse> implements IRecordEventResponse {
    get $type() {
        return RecordEventResponse.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.event.v1.RecordEventResponse")
}
RecordEventResponse.$type.generatedObject = RecordEventResponse

/** Event Api */
export class EventApi extends $sisyphus.Client {
    get $reflection() {
        return EventApi.reflection
    }
    /** 记录日志 */
    async RecordEvent(input: IRecordEventRequest, metadata?: { [k: string]: string }): Promise<IRecordEventResponse> {
        return await this.$call(this.$reflection.methods["RecordEvent"], input, metadata)
    }
    static readonly reflection = $reflection.root.lookupService(".bybutter.incubator.event.v1.EventApi")
}