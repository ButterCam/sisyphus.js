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
    eventTimestampTime?: ($timestamp.ITimestamp | null)
    /** 事件内容 */
    payload?: ({ [k: string]: string } | null)
    /** 拓展 */
    extra?: ({ [k: string]: string } | null)
    /** 事件触发事件数值(s) */
    eventTime?: $protobuf.Long
    /** 事件触发事件 "yyyy-MM-dd" */
    partitionTime?: string
    /** 序列号 */
    sequenceNumber?: string
}

export class Event extends $sisyphus.Message<IEvent> implements IEvent {
    uid!: string
    platform!: string
    sessionId!: string
    deviceId!: string
    channel!: string
    event!: string
    eventTimestampTime!: ($timestamp.ITimestamp | null)
    payload!: ({ [k: string]: string } | null)
    extra!: ({ [k: string]: string } | null)
    eventTime!: $protobuf.Long
    partitionTime!: string
    sequenceNumber!: string
    get $reflection() {
        return Event.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.event.v1.Event")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): Event {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        let key: any, value: any
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.uid = reader.string()
                    break
                case 2:
                    result.platform = reader.string()
                    break
                case 3:
                    result.sessionId = reader.string()
                    break
                case 4:
                    result.deviceId = reader.string()
                    break
                case 5:
                    result.channel = reader.string()
                    break
                case 6:
                    result.event = reader.string()
                    break
                case 7:
                    result.eventTimestampTime = $timestamp.Timestamp.decodeDelimited(reader)
                    break
                case 8:
                    if (!result.payload) result.payload = {};
                    [key, value] = $sisyphus.readMapEntry(this.reflection.fields["payload"], reader)
                    result.payload[key] = value
                    break
                case 9:
                    if (!result.extra) result.extra = {};
                    [key, value] = $sisyphus.readMapEntry(this.reflection.fields["extra"], reader)
                    result.extra[key] = value
                    break
                case 10:
                    result.eventTime = reader.int64()
                    break
                case 11:
                    result.partitionTime = reader.string()
                    break
                case 12:
                    result.sequenceNumber = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): Event {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IEvent): Event {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("uid") && properties.uid !== undefined) result.uid = properties.uid
        if(properties.hasOwnProperty("platform") && properties.platform !== undefined) result.platform = properties.platform
        if(properties.hasOwnProperty("sessionId") && properties.sessionId !== undefined) result.sessionId = properties.sessionId
        if(properties.hasOwnProperty("deviceId") && properties.deviceId !== undefined) result.deviceId = properties.deviceId
        if(properties.hasOwnProperty("channel") && properties.channel !== undefined) result.channel = properties.channel
        if(properties.hasOwnProperty("event") && properties.event !== undefined) result.event = properties.event
        if(properties.hasOwnProperty("eventTimestampTime") && properties.eventTimestampTime != null) result.eventTimestampTime = $timestamp.Timestamp.create(properties.eventTimestampTime)
        if(properties.hasOwnProperty("payload") && properties.payload != null) {
            result.payload = {}
            for (let key in properties.payload) result.payload[key] = properties.payload[key]
        }
        return result
    }
}
Event.prototype.uid = Event.reflection.fieldsById[1].defaultValue
Event.prototype.platform = Event.reflection.fieldsById[2].defaultValue
Event.prototype.sessionId = Event.reflection.fieldsById[3].defaultValue
Event.prototype.deviceId = Event.reflection.fieldsById[4].defaultValue
Event.prototype.channel = Event.reflection.fieldsById[5].defaultValue
Event.prototype.event = Event.reflection.fieldsById[6].defaultValue
Event.prototype.eventTimestampTime = Event.reflection.fieldsById[7].defaultValue
Event.prototype.payload = Event.reflection.fieldsById[8].defaultValue
Event.prototype.extra = Event.reflection.fieldsById[9].defaultValue
Event.prototype.eventTime = Event.reflection.fieldsById[10].defaultValue
Event.prototype.partitionTime = Event.reflection.fieldsById[11].defaultValue
Event.prototype.sequenceNumber = Event.reflection.fieldsById[12].defaultValue