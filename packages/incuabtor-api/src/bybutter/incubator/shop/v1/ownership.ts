import * as $sisyphus from "@sisyphus.js/core"
import * as $protobuf from "protobufjs"
import * as $reflection from "../../../../_reflection"
import * as $timestamp from "../../../../google/protobuf/timestamp"


/** Privilege 使用权限 */
export enum UsageType {
    /** 未知或者未指定的使用权限 */
    USAGE_TYPE_UNSPECIFIED = 0,
    /** 只能看到该权限 */
    USAGE_TYPE_VIEW = 100,
    /** 只能在编辑器中试用 */
    USAGE_TYPE_TRIAL = 800,
    /** 无限制使用权限 */
    USAGE_TYPE_UNLIMITED = 900,
}

export namespace UsageType {
    export const reflection = $reflection.root.lookupEnum(".bybutter.incubator.shop.v1.UsageType")
}

/** Privilege 所有权 */
export enum OwnershipType {
    /** 未知或者未指定的所有方式 */
    OWNERSHIP_TYPE_UNSPECIFIED = 0,
    /** 促销赋予的所有权，该所有权不会赋予用户实际使用权限（USAGE_TYPE_VIEW）。只会导致用户可以看到该 Privilege，仅此而已。 */
    OWNERSHIP_TYPE_PROMOTION = 100,
    /** 预览赋予的所有权，该所有权只会赋予用户最低的使用权限（USAGE_TYPE_TRIAL）。可能无法对 Privilege 元素进行添加或者修改。 */
    OWNERSHIP_TYPE_PREVIEW = 400,
    /** 标识用户临时拥有该 Privilege，该所有权会在一段时间内赋予用户完整的使用权限（USAGE_TYPE_UNLIMITED）。但是也只是临时拥有。 */
    OWNERSHIP_TYPE_TEMPORARY = 700,
    /** 标识用户是因为会员才拥有该 Privilege，该所有权会在用户会员期内赋予用户完整的使用权限（USAGE_TYPE_UNLIMITED）。当用户的会员期结束后将会自动消失。 */
    OWNERSHIP_TYPE_MEMBERSHIP = 800,
    /** 标识用户是免费获取该 Privilege，该所有权会拥有赋予用户永久的完整使用权限（USAGE_TYPE_UNLIMITED）。 */
    OWNERSHIP_TYPE_FREE = 900,
    /** 标识用户是通过购买获取该 Privilege，该所有权会拥有赋予用户永久的完整使用权限（USAGE_TYPE_UNLIMITED）。 */
    OWNERSHIP_TYPE_PERMANENT = 901,
}

export namespace OwnershipType {
    export const reflection = $reflection.root.lookupEnum(".bybutter.incubator.shop.v1.OwnershipType")
}

/** 所有权信息 */
export interface IOwnership {
    /** 该所有权的对应 Privilege 资源名 */
    privilege?: string
    /** 所有权 */
    ownership?: OwnershipType
    /** 所有权的可见范围 */
    requirements?: (string[] | null)
    /** 所有权的有效期开始时间 */
    startTime?: ($timestamp.ITimestamp | null)
    /** 所有权的有效期结束时间 */
    endTime?: ($timestamp.ITimestamp | null)
    /** 所有权对于 Privilege 信息的标题重写内容 */
    overrideTitle?: string
    /** 所有权对于 Privilege 信息的图标重写内容 */
    overrideIconUri?: string
    /** 所有权对于 Privilege 信息的跳转信息的重写内容 */
    overrideUri?: string
}

export class Ownership extends $sisyphus.Message<IOwnership> implements IOwnership {
    privilege!: string
    ownership!: OwnershipType
    requirements!: (string[] | null)
    startTime!: ($timestamp.ITimestamp | null)
    endTime!: ($timestamp.ITimestamp | null)
    overrideTitle!: string
    overrideIconUri!: string
    overrideUri!: string
    get $reflection() {
        return Ownership.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.shop.v1.Ownership")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): Ownership {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.privilege = reader.string()
                    break
                case 2:
                    result.ownership = reader.uint32()
                    break
                case 3:
                    if (!result.requirements) result.requirements = []
                    result.requirements.push(reader.string())
                    break
                case 4:
                    result.startTime = $timestamp.Timestamp.decodeDelimited(reader)
                    break
                case 5:
                    result.endTime = $timestamp.Timestamp.decodeDelimited(reader)
                    break
                case 6:
                    result.overrideTitle = reader.string()
                    break
                case 7:
                    result.overrideIconUri = reader.string()
                    break
                case 8:
                    result.overrideUri = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): Ownership {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IOwnership): Ownership {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("privilege") && properties.privilege !== undefined) result.privilege = properties.privilege
        if(properties.hasOwnProperty("ownership") && properties.ownership !== undefined) result.ownership = properties.ownership
        if(properties.hasOwnProperty("requirements") && properties.requirements !== undefined) result.requirements = properties.requirements
        if(properties.hasOwnProperty("startTime") && properties.startTime !== undefined) result.startTime = $timestamp.Timestamp.create(properties.startTime)
        if(properties.hasOwnProperty("endTime") && properties.endTime !== undefined) result.endTime = $timestamp.Timestamp.create(properties.endTime)
        if(properties.hasOwnProperty("overrideTitle") && properties.overrideTitle !== undefined) result.overrideTitle = properties.overrideTitle
        if(properties.hasOwnProperty("overrideIconUri") && properties.overrideIconUri !== undefined) result.overrideIconUri = properties.overrideIconUri
        if(properties.hasOwnProperty("overrideUri") && properties.overrideUri !== undefined) result.overrideUri = properties.overrideUri
        return result
    }
}
Ownership.prototype.privilege = ""
Ownership.prototype.ownership = OwnershipType.OWNERSHIP_TYPE_UNSPECIFIED
Ownership.prototype.requirements = null
Ownership.prototype.startTime = null
Ownership.prototype.endTime = null
Ownership.prototype.overrideTitle = ""
Ownership.prototype.overrideIconUri = ""
Ownership.prototype.overrideUri = ""