import * as $timestamp from "../../../../google/protobuf/timestamp"
import * as $protobuf from "protobufjs"
import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"


/**
 * (-- api-linter: core::0142::time-field-type=disabled
 * aip.dev/not-precedent:  数据分析需要一个以秒为单位的(event_time)，一个年月日格式的做分组 （partition_time）  --)
 * 事件
 */
export interface IEvent {
    /** 用户id */
    uid?: string
    /** 设备 */
    platform?: string
    /** session */
    sessionId?: string
    /** 设备id */
    deviceId?: string
    /** 渠道 */
    channel?: string
    /** 事件名 */
    event?: string
    /** 事件触发事件  "yyyy-MM-dd HH:mm:ss" */
    eventTimestampTime?: $timestamp.ITimestamp
    /** 事件内容 */
    payload?: { readonly [k: string]: string }
    /** 拓展 */
    extra?: { readonly [k: string]: string }
    /** 事件触发事件数值(s) */
    eventTime?: $protobuf.Long
    /** 事件触发事件 "yyyy-MM-dd" */
    partitionTime?: string
    /** 序列号 */
    sequenceNumber?: string
}

export class Event extends $sisyphus.Message<Event> implements IEvent {
    uid!: string
    platform!: string
    sessionId!: string
    deviceId!: string
    channel!: string
    event!: string
    eventTimestampTime!: $timestamp.Timestamp
    payload!: { readonly [k: string]: string }
    extra!: { readonly [k: string]: string }
    eventTime!: $protobuf.Long
    partitionTime!: string
    sequenceNumber!: string
}
$reflection.root.lookupType(".bybutter.incubator.event.v1.Event").messageCtor = Event