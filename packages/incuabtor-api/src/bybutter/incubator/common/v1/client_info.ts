import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"
import * as $protobuf from "protobufjs"


/**
 * 客户端相关信息
 * (-- api-linter: core::0123::resource-annotation=disabled
 * aip.dev/not-precedent: Not a resource. --)
 */
export interface IClientInfo {
    /** 客户端版本号 */
    version?: string
    /** 客户端发放渠道 */
    channel?: string
    /** 设备名称 */
    name?: string
    /** 设备操作系统 */
    os?: string
    /** 设备操作系统版本号 */
    osVersion?: string
    /** 设备生产商 */
    vendor?: string
    /** 设备屏幕分辨率 */
    resolution?: string
    /** 语言标签，参考 [RFC5646](https://tools.ietf.org/html/rfc5646) */
    languageTag?: string
    /** 时区ID */
    timeZone?: string
    /** 客户端 ip */
    ip?: string
}

export class ClientInfo extends $sisyphus.Message<IClientInfo> implements IClientInfo {
    version!: string
    channel!: string
    name!: string
    os!: string
    osVersion!: string
    vendor!: string
    resolution!: string
    languageTag!: string
    timeZone!: string
    ip!: string
    get $reflection() {
        return ClientInfo.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.common.v1.ClientInfo")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ClientInfo {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.version = reader.string()
                    break
                case 2:
                    result.channel = reader.string()
                    break
                case 3:
                    result.name = reader.string()
                    break
                case 4:
                    result.os = reader.string()
                    break
                case 5:
                    result.osVersion = reader.string()
                    break
                case 6:
                    result.vendor = reader.string()
                    break
                case 7:
                    result.resolution = reader.string()
                    break
                case 8:
                    result.languageTag = reader.string()
                    break
                case 9:
                    result.timeZone = reader.string()
                    break
                case 10:
                    result.ip = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ClientInfo {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IClientInfo): ClientInfo {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("version") && properties.version !== undefined) result.version = properties.version
        if(properties.hasOwnProperty("channel") && properties.channel !== undefined) result.channel = properties.channel
        if(properties.hasOwnProperty("name") && properties.name !== undefined) result.name = properties.name
        if(properties.hasOwnProperty("os") && properties.os !== undefined) result.os = properties.os
        if(properties.hasOwnProperty("osVersion") && properties.osVersion !== undefined) result.osVersion = properties.osVersion
        if(properties.hasOwnProperty("vendor") && properties.vendor !== undefined) result.vendor = properties.vendor
        if(properties.hasOwnProperty("resolution") && properties.resolution !== undefined) result.resolution = properties.resolution
        if(properties.hasOwnProperty("languageTag") && properties.languageTag !== undefined) result.languageTag = properties.languageTag
        if(properties.hasOwnProperty("timeZone") && properties.timeZone !== undefined) result.timeZone = properties.timeZone
        if(properties.hasOwnProperty("ip") && properties.ip !== undefined) result.ip = properties.ip
        return result
    }
}
ClientInfo.prototype.version = ""
ClientInfo.prototype.channel = ""
ClientInfo.prototype.name = ""
ClientInfo.prototype.os = ""
ClientInfo.prototype.osVersion = ""
ClientInfo.prototype.vendor = ""
ClientInfo.prototype.resolution = ""
ClientInfo.prototype.languageTag = ""
ClientInfo.prototype.timeZone = ""
ClientInfo.prototype.ip = ""