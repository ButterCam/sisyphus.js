import * as $reflection from "../../../../_reflection"
import * as $timestamp from "../../../../google/protobuf/timestamp"
import * as $protobuf from "protobufjs"


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
    requirements?: readonly string[]
    /** 所有权的有效期开始时间 */
    startTime?: $timestamp.ITimestamp
    /** 所有权的有效期结束时间 */
    endTime?: $timestamp.ITimestamp
    /** 所有权对于 Privilege 信息的标题重写内容 */
    overrideTitle?: string
    /** 所有权对于 Privilege 信息的图标重写内容 */
    overrideIconUri?: string
    /** 所有权对于 Privilege 信息的跳转信息的重写内容 */
    overrideUri?: string
}

export class Ownership extends $protobuf.Message<Ownership> implements IOwnership {
    privilege!: string
    ownership!: OwnershipType
    requirements!: readonly string[]
    startTime!: $timestamp.Timestamp
    endTime!: $timestamp.Timestamp
    overrideTitle!: string
    overrideIconUri!: string
    overrideUri!: string

    get $type() {
        return Ownership.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.shop.v1.Ownership")
}

Ownership.$type.generatedObject = Ownership
Ownership.prototype.privilege = Ownership.$type.fieldsById[1].defaultValue
Ownership.prototype.ownership = Ownership.$type.fieldsById[2].defaultValue
Ownership.prototype.requirements = Ownership.$type.fieldsById[3].defaultValue
Ownership.prototype.startTime = Ownership.$type.fieldsById[4].defaultValue
Ownership.prototype.endTime = Ownership.$type.fieldsById[5].defaultValue
Ownership.prototype.overrideTitle = Ownership.$type.fieldsById[6].defaultValue
Ownership.prototype.overrideIconUri = Ownership.$type.fieldsById[7].defaultValue
Ownership.prototype.overrideUri = Ownership.$type.fieldsById[8].defaultValue