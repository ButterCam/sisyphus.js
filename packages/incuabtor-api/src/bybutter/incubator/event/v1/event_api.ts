import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"


/** 记录事件请求 */
export interface IRecordEventRequest {
    /** 加密的事件 */
    encryptedEvents?: string
}

export class RecordEventRequest extends $sisyphus.Message<RecordEventRequest> implements IRecordEventRequest {
    encryptedEvents!: string
}
$reflection.root.lookupType(".bybutter.incubator.event.v1.RecordEventRequest").messageCtor = RecordEventRequest


/** 记录事件响应 */
export interface IRecordEventResponse {
}

export class RecordEventResponse extends $sisyphus.Message<RecordEventResponse> implements IRecordEventResponse {
}
$reflection.root.lookupType(".bybutter.incubator.event.v1.RecordEventResponse").messageCtor = RecordEventResponse

/** Event Api */
export class EventApi extends $sisyphus.Client {
    get $service() {
        return EventApi.$service
    }
    /** 记录日志 */
    async RecordEvent(input: IRecordEventRequest, metadata?: { [k: string]: string }): Promise<RecordEventResponse> {
        return await this.$call(this.$service.methods["RecordEvent"], input, metadata)
    }
    static readonly $service = $reflection.root.lookupService(".bybutter.incubator.event.v1.EventApi")
}