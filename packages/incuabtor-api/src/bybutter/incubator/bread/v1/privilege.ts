import * as $reflection from "../../../../_reflection"
import * as $ownership from "../../shop/v1/ownership"
import * as $timestamp from "../../../../google/protobuf/timestamp"
import * as $sisyphus from "@sisyphus.js/core"
import * as $struct from "../../../../google/protobuf/struct"


/** 贴纸的调色类型 */
export enum PaletteType {
    /** 未指定或未支持的调色类型 */
    PALETTE_TYPE_UNSPECIFIED = 0,
    /** 固定调色，贴纸不可由用户变更贴纸颜色 */
    PALETTE_TYPE_FIXED = 1,
    /** 可配置调色，用户可变更贴纸颜色 */
    PALETTE_TYPE_CONFIGURABLE = 2,
}

export namespace PaletteType {
    export const reflection = $reflection.root.lookupEnum(".bybutter.incubator.bread.v1.PaletteType")
}

/** 贴纸类型 */
export enum StickerType {
    /** 未指定或未支持的贴纸类型 */
    STICKER_TYPE_UNSPECIFIED = 0,
    /** APNG 贴纸 */
    STICKER_TYPE_APNG = 1,
    /** PNG 贴纸 */
    STICKER_TYPE_PNG = 2,
    /** SVG 贴纸 */
    STICKER_TYPE_SVG = 3,
}

export namespace StickerType {
    export const reflection = $reflection.root.lookupEnum(".bybutter.incubator.bread.v1.StickerType")
}

/** 滤镜结构 */
export interface IFilter {
    /** 资源名称 */
    name?: string
    /** 标题 */
    title?: string
    /** 展示的图标地址 */
    iconUri?: string
    /** 特权点击行为 uri */
    uri?: string
    /** 下载连接，但用户未拥有该特权时为空 */
    downloadUri?: string
    /** 文件 Hash，当文件 Hash 变更时，客户端需要重新下载 */
    fileHash?: string
    /** 所有权文案 */
    remark?: string
    /** 所有权 */
    ownership?: $ownership.OwnershipType
    /** 使用权 */
    usage?: $ownership.UsageType
    /** 特权开始时间 */
    startTime?: $timestamp.ITimestamp
    /** 特权结束时间 */
    endTime?: $timestamp.ITimestamp
    /** 滤镜默认值 */
    defaultStrength?: number
}

export class Filter extends $sisyphus.Message<Filter> implements IFilter {
    name!: string
    title!: string
    iconUri!: string
    uri!: string
    downloadUri!: string
    fileHash!: string
    remark!: string
    ownership!: $ownership.OwnershipType
    usage!: $ownership.UsageType
    startTime!: $timestamp.Timestamp
    endTime!: $timestamp.Timestamp
    defaultStrength!: number
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.Filter").messageCtor = Filter


/** 滤镜组 */
export interface IFilterGroup {
    /** 组资源名 */
    name?: string
    /** 组名词 */
    title?: string
    /** 组的图标 */
    iconUri?: string
}

export class FilterGroup extends $sisyphus.Message<FilterGroup> implements IFilterGroup {
    name!: string
    title!: string
    iconUri!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.FilterGroup").messageCtor = FilterGroup


/** 边框特权资源 */
export interface IBorder {
    /** 资源名称 */
    name?: string
    /** 标题 */
    title?: string
    /** 展示的图标地址 */
    iconUri?: string
    /** 特权点击行为 uri */
    uri?: string
    /** 下载连接，但用户未拥有该特权时为空 */
    downloadUri?: string
    /** 文件 Hash，当文件 Hash 变更时，客户端需要重新下载 */
    fileHash?: string
    /** 所有权文案 */
    remark?: string
    /** 所有权 */
    ownership?: $ownership.OwnershipType
    /** 使用权 */
    usage?: $ownership.UsageType
    /** 特权开始时间 */
    startTime?: $timestamp.ITimestamp
    /** 特权结束时间 */
    endTime?: $timestamp.ITimestamp
    /** 滤镜默认值 */
    defaultStrength?: number
}

export class Border extends $sisyphus.Message<Border> implements IBorder {
    name!: string
    title!: string
    iconUri!: string
    uri!: string
    downloadUri!: string
    fileHash!: string
    remark!: string
    ownership!: $ownership.OwnershipType
    usage!: $ownership.UsageType
    startTime!: $timestamp.Timestamp
    endTime!: $timestamp.Timestamp
    defaultStrength!: number
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.Border").messageCtor = Border


/** 边框特权组 */
export interface IBorderGroup {
    /** 组资源名 */
    name?: string
    /** 组名词 */
    title?: string
    /** 组的图标 */
    iconUri?: string
}

export class BorderGroup extends $sisyphus.Message<BorderGroup> implements IBorderGroup {
    name!: string
    title!: string
    iconUri!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.BorderGroup").messageCtor = BorderGroup


/** 标签资源 */
export interface ILabel {
    /** 资源名称 */
    name?: string
    /** 标题 */
    title?: string
    /** 展示的图标地址 */
    iconUri?: string
    /** 特权点击行为 uri */
    uri?: string
    /** 下载连接，但用户未拥有该特权时为空 */
    downloadUri?: string
    /** 文件 Hash，当文件 Hash 变更时，客户端需要重新下载 */
    fileHash?: string
    /** 所有权文案 */
    remark?: string
    /** 所有权 */
    ownership?: $ownership.OwnershipType
    /** 使用权 */
    usage?: $ownership.UsageType
    /** 特权开始时间 */
    startTime?: $timestamp.ITimestamp
    /** 特权结束时间 */
    endTime?: $timestamp.ITimestamp
    /** 文本的 Style 结构 */
    style?: $struct.IStruct
}

export class Label extends $sisyphus.Message<Label> implements ILabel {
    name!: string
    title!: string
    iconUri!: string
    uri!: string
    downloadUri!: string
    fileHash!: string
    remark!: string
    ownership!: $ownership.OwnershipType
    usage!: $ownership.UsageType
    startTime!: $timestamp.Timestamp
    endTime!: $timestamp.Timestamp
    style!: $struct.Struct
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.Label").messageCtor = Label


/** 标签组资源 */
export interface ILabelGroup {
    /** 组资源名 */
    name?: string
    /** 组名词 */
    title?: string
    /** 组的图标 */
    iconUri?: string
}

export class LabelGroup extends $sisyphus.Message<LabelGroup> implements ILabelGroup {
    name!: string
    title!: string
    iconUri!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.LabelGroup").messageCtor = LabelGroup


/** 贴纸资源 */
export interface ISticker {
    /** 资源名称 */
    name?: string
    /** 标题 */
    title?: string
    /** 展示的图标地址 */
    iconUri?: string
    /** 特权点击行为 uri */
    uri?: string
    /** 下载连接，但用户未拥有该特权时为空 */
    downloadUri?: string
    /** 文件 Hash，当文件 Hash 变更时，客户端需要重新下载 */
    fileHash?: string
    /** 所有权文案 */
    remark?: string
    /** 所有权 */
    ownership?: $ownership.OwnershipType
    /** 使用权 */
    usage?: $ownership.UsageType
    /** 特权开始时间 */
    startTime?: $timestamp.ITimestamp
    /** 特权结束时间 */
    endTime?: $timestamp.ITimestamp
    /** 贴纸的调色类型 */
    paletteType?: PaletteType
    /** 贴纸的文件类型 */
    fileType?: StickerType
    /** 贴纸宽 */
    width?: number
    /** 贴纸高 */
    height?: number
}

export class Sticker extends $sisyphus.Message<Sticker> implements ISticker {
    name!: string
    title!: string
    iconUri!: string
    uri!: string
    downloadUri!: string
    fileHash!: string
    remark!: string
    ownership!: $ownership.OwnershipType
    usage!: $ownership.UsageType
    startTime!: $timestamp.Timestamp
    endTime!: $timestamp.Timestamp
    paletteType!: PaletteType
    fileType!: StickerType
    width!: number
    height!: number
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.Sticker").messageCtor = Sticker


/** 贴纸组资源 */
export interface IStickerGroup {
    /** 组资源名 */
    name?: string
    /** 组名词 */
    title?: string
    /** 组的图标 */
    iconUri?: string
}

export class StickerGroup extends $sisyphus.Message<StickerGroup> implements IStickerGroup {
    name!: string
    title!: string
    iconUri!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.StickerGroup").messageCtor = StickerGroup


/** 音乐资源 */
export interface IMusic {
    /** 资源名称 */
    name?: string
    /** 标题 */
    title?: string
    /** 展示的图标地址 */
    iconUri?: string
    /** 特权点击行为 uri */
    uri?: string
    /** 下载连接，但用户未拥有该特权时为空 */
    downloadUri?: string
    /** 文件 Hash，当文件 Hash 变更时，客户端需要重新下载 */
    fileHash?: string
    /** 所有权文案 */
    remark?: string
    /** 所有权 */
    ownership?: $ownership.OwnershipType
    /** 使用权 */
    usage?: $ownership.UsageType
    /** 特权开始时间 */
    startTime?: $timestamp.ITimestamp
    /** 特权结束时间 */
    endTime?: $timestamp.ITimestamp
    /** 音乐作者 */
    author?: string
}

export class Music extends $sisyphus.Message<Music> implements IMusic {
    name!: string
    title!: string
    iconUri!: string
    uri!: string
    downloadUri!: string
    fileHash!: string
    remark!: string
    ownership!: $ownership.OwnershipType
    usage!: $ownership.UsageType
    startTime!: $timestamp.Timestamp
    endTime!: $timestamp.Timestamp
    author!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.Music").messageCtor = Music


/** 音乐组资源 */
export interface IMusicGroup {
    /** 组资源名 */
    name?: string
    /** 组名词 */
    title?: string
    /** 组的图标 */
    iconUri?: string
}

export class MusicGroup extends $sisyphus.Message<MusicGroup> implements IMusicGroup {
    name!: string
    title!: string
    iconUri!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.MusicGroup").messageCtor = MusicGroup


/** 音效资源 */
export interface ISound {
    /** 资源名称 */
    name?: string
    /** 标题 */
    title?: string
    /** 展示的图标地址 */
    iconUri?: string
    /** 特权点击行为 uri */
    uri?: string
    /** 下载连接，但用户未拥有该特权时为空 */
    downloadUri?: string
    /** 文件 Hash，当文件 Hash 变更时，客户端需要重新下载 */
    fileHash?: string
    /** 所有权文案 */
    remark?: string
    /** 所有权 */
    ownership?: $ownership.OwnershipType
    /** 使用权 */
    usage?: $ownership.UsageType
    /** 特权开始时间 */
    startTime?: $timestamp.ITimestamp
    /** 特权结束时间 */
    endTime?: $timestamp.ITimestamp
}

export class Sound extends $sisyphus.Message<Sound> implements ISound {
    name!: string
    title!: string
    iconUri!: string
    uri!: string
    downloadUri!: string
    fileHash!: string
    remark!: string
    ownership!: $ownership.OwnershipType
    usage!: $ownership.UsageType
    startTime!: $timestamp.Timestamp
    endTime!: $timestamp.Timestamp
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.Sound").messageCtor = Sound


/** 音效组资源 */
export interface ISoundGroup {
    /** 组资源名 */
    name?: string
    /** 组名词 */
    title?: string
    /** 组的图标 */
    iconUri?: string
}

export class SoundGroup extends $sisyphus.Message<SoundGroup> implements ISoundGroup {
    name!: string
    title!: string
    iconUri!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.SoundGroup").messageCtor = SoundGroup


/** 会员特权资源 */
export interface IMembership {
    /** 资源名称 */
    name?: string
    /** 标题 */
    title?: string
    /** 展示的图标地址 */
    iconUri?: string
    /** 特权点击行为 uri */
    uri?: string
    /** 所有权文案 */
    remark?: string
    /** 所有权 */
    ownership?: $ownership.OwnershipType
    /** 使用权 */
    usage?: $ownership.UsageType
    /** 特权开始时间 */
    startTime?: $timestamp.ITimestamp
    /** 特权结束时间 */
    endTime?: $timestamp.ITimestamp
}

export class Membership extends $sisyphus.Message<Membership> implements IMembership {
    name!: string
    title!: string
    iconUri!: string
    uri!: string
    remark!: string
    ownership!: $ownership.OwnershipType
    usage!: $ownership.UsageType
    startTime!: $timestamp.Timestamp
    endTime!: $timestamp.Timestamp
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.Membership").messageCtor = Membership