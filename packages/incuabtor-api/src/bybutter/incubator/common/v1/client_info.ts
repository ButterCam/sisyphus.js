import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"


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

export class ClientInfo extends $sisyphus.Message<ClientInfo> implements IClientInfo {
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
}
$reflection.root.lookupType(".bybutter.incubator.common.v1.ClientInfo").messageCtor = ClientInfo