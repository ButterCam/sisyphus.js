import * as $reflection from "../../../../_reflection"
import * as $ownership from "../../shop/v1/ownership"
import * as $timestamp from "../../../../google/protobuf/timestamp"
import * as $protobuf from "protobufjs"
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

export class Filter extends $protobuf.Message<Filter> implements IFilter {
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
    get $type() {
        return Filter.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.Filter")
}
Filter.$type.generatedObject = Filter
Filter.prototype.name = Filter.$type.fieldsById[1].defaultValue
Filter.prototype.title = Filter.$type.fieldsById[2].defaultValue
Filter.prototype.iconUri = Filter.$type.fieldsById[3].defaultValue
Filter.prototype.uri = Filter.$type.fieldsById[4].defaultValue
Filter.prototype.downloadUri = Filter.$type.fieldsById[5].defaultValue
Filter.prototype.fileHash = Filter.$type.fieldsById[6].defaultValue
Filter.prototype.remark = Filter.$type.fieldsById[7].defaultValue
Filter.prototype.ownership = Filter.$type.fieldsById[8].defaultValue
Filter.prototype.usage = Filter.$type.fieldsById[9].defaultValue
Filter.prototype.startTime = Filter.$type.fieldsById[10].defaultValue
Filter.prototype.endTime = Filter.$type.fieldsById[11].defaultValue
Filter.prototype.defaultStrength = Filter.$type.fieldsById[20].defaultValue


/** 滤镜组 */
export interface IFilterGroup {
    /** 组资源名 */
    name?: string
    /** 组名词 */
    title?: string
    /** 组的图标 */
    iconUri?: string
}

export class FilterGroup extends $protobuf.Message<FilterGroup> implements IFilterGroup {
    name!: string
    title!: string
    iconUri!: string
    get $type() {
        return FilterGroup.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.FilterGroup")
}
FilterGroup.$type.generatedObject = FilterGroup
FilterGroup.prototype.name = FilterGroup.$type.fieldsById[1].defaultValue
FilterGroup.prototype.title = FilterGroup.$type.fieldsById[2].defaultValue
FilterGroup.prototype.iconUri = FilterGroup.$type.fieldsById[3].defaultValue


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

export class Border extends $protobuf.Message<Border> implements IBorder {
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
    get $type() {
        return Border.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.Border")
}
Border.$type.generatedObject = Border
Border.prototype.name = Border.$type.fieldsById[1].defaultValue
Border.prototype.title = Border.$type.fieldsById[2].defaultValue
Border.prototype.iconUri = Border.$type.fieldsById[3].defaultValue
Border.prototype.uri = Border.$type.fieldsById[4].defaultValue
Border.prototype.downloadUri = Border.$type.fieldsById[5].defaultValue
Border.prototype.fileHash = Border.$type.fieldsById[6].defaultValue
Border.prototype.remark = Border.$type.fieldsById[7].defaultValue
Border.prototype.ownership = Border.$type.fieldsById[8].defaultValue
Border.prototype.usage = Border.$type.fieldsById[9].defaultValue
Border.prototype.startTime = Border.$type.fieldsById[10].defaultValue
Border.prototype.endTime = Border.$type.fieldsById[11].defaultValue
Border.prototype.defaultStrength = Border.$type.fieldsById[20].defaultValue


/** 边框特权组 */
export interface IBorderGroup {
    /** 组资源名 */
    name?: string
    /** 组名词 */
    title?: string
    /** 组的图标 */
    iconUri?: string
}

export class BorderGroup extends $protobuf.Message<BorderGroup> implements IBorderGroup {
    name!: string
    title!: string
    iconUri!: string
    get $type() {
        return BorderGroup.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.BorderGroup")
}
BorderGroup.$type.generatedObject = BorderGroup
BorderGroup.prototype.name = BorderGroup.$type.fieldsById[1].defaultValue
BorderGroup.prototype.title = BorderGroup.$type.fieldsById[2].defaultValue
BorderGroup.prototype.iconUri = BorderGroup.$type.fieldsById[3].defaultValue


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

export class Label extends $protobuf.Message<Label> implements ILabel {
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
    get $type() {
        return Label.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.Label")
}
Label.$type.generatedObject = Label
Label.prototype.name = Label.$type.fieldsById[1].defaultValue
Label.prototype.title = Label.$type.fieldsById[2].defaultValue
Label.prototype.iconUri = Label.$type.fieldsById[3].defaultValue
Label.prototype.uri = Label.$type.fieldsById[4].defaultValue
Label.prototype.downloadUri = Label.$type.fieldsById[5].defaultValue
Label.prototype.fileHash = Label.$type.fieldsById[6].defaultValue
Label.prototype.remark = Label.$type.fieldsById[7].defaultValue
Label.prototype.ownership = Label.$type.fieldsById[8].defaultValue
Label.prototype.usage = Label.$type.fieldsById[9].defaultValue
Label.prototype.startTime = Label.$type.fieldsById[10].defaultValue
Label.prototype.endTime = Label.$type.fieldsById[11].defaultValue
Label.prototype.style = Label.$type.fieldsById[20].defaultValue


/** 标签组资源 */
export interface ILabelGroup {
    /** 组资源名 */
    name?: string
    /** 组名词 */
    title?: string
    /** 组的图标 */
    iconUri?: string
}

export class LabelGroup extends $protobuf.Message<LabelGroup> implements ILabelGroup {
    name!: string
    title!: string
    iconUri!: string
    get $type() {
        return LabelGroup.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.LabelGroup")
}
LabelGroup.$type.generatedObject = LabelGroup
LabelGroup.prototype.name = LabelGroup.$type.fieldsById[1].defaultValue
LabelGroup.prototype.title = LabelGroup.$type.fieldsById[2].defaultValue
LabelGroup.prototype.iconUri = LabelGroup.$type.fieldsById[3].defaultValue


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

export class Sticker extends $protobuf.Message<Sticker> implements ISticker {
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
    get $type() {
        return Sticker.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.Sticker")
}
Sticker.$type.generatedObject = Sticker
Sticker.prototype.name = Sticker.$type.fieldsById[1].defaultValue
Sticker.prototype.title = Sticker.$type.fieldsById[2].defaultValue
Sticker.prototype.iconUri = Sticker.$type.fieldsById[3].defaultValue
Sticker.prototype.uri = Sticker.$type.fieldsById[4].defaultValue
Sticker.prototype.downloadUri = Sticker.$type.fieldsById[5].defaultValue
Sticker.prototype.fileHash = Sticker.$type.fieldsById[6].defaultValue
Sticker.prototype.remark = Sticker.$type.fieldsById[7].defaultValue
Sticker.prototype.ownership = Sticker.$type.fieldsById[8].defaultValue
Sticker.prototype.usage = Sticker.$type.fieldsById[9].defaultValue
Sticker.prototype.startTime = Sticker.$type.fieldsById[10].defaultValue
Sticker.prototype.endTime = Sticker.$type.fieldsById[11].defaultValue
Sticker.prototype.paletteType = Sticker.$type.fieldsById[20].defaultValue
Sticker.prototype.fileType = Sticker.$type.fieldsById[21].defaultValue
Sticker.prototype.width = Sticker.$type.fieldsById[22].defaultValue
Sticker.prototype.height = Sticker.$type.fieldsById[23].defaultValue


/** 贴纸组资源 */
export interface IStickerGroup {
    /** 组资源名 */
    name?: string
    /** 组名词 */
    title?: string
    /** 组的图标 */
    iconUri?: string
}

export class StickerGroup extends $protobuf.Message<StickerGroup> implements IStickerGroup {
    name!: string
    title!: string
    iconUri!: string
    get $type() {
        return StickerGroup.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.StickerGroup")
}
StickerGroup.$type.generatedObject = StickerGroup
StickerGroup.prototype.name = StickerGroup.$type.fieldsById[1].defaultValue
StickerGroup.prototype.title = StickerGroup.$type.fieldsById[2].defaultValue
StickerGroup.prototype.iconUri = StickerGroup.$type.fieldsById[3].defaultValue


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

export class Music extends $protobuf.Message<Music> implements IMusic {
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
    get $type() {
        return Music.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.Music")
}
Music.$type.generatedObject = Music
Music.prototype.name = Music.$type.fieldsById[1].defaultValue
Music.prototype.title = Music.$type.fieldsById[2].defaultValue
Music.prototype.iconUri = Music.$type.fieldsById[3].defaultValue
Music.prototype.uri = Music.$type.fieldsById[4].defaultValue
Music.prototype.downloadUri = Music.$type.fieldsById[5].defaultValue
Music.prototype.fileHash = Music.$type.fieldsById[6].defaultValue
Music.prototype.remark = Music.$type.fieldsById[7].defaultValue
Music.prototype.ownership = Music.$type.fieldsById[8].defaultValue
Music.prototype.usage = Music.$type.fieldsById[9].defaultValue
Music.prototype.startTime = Music.$type.fieldsById[10].defaultValue
Music.prototype.endTime = Music.$type.fieldsById[11].defaultValue
Music.prototype.author = Music.$type.fieldsById[21].defaultValue


/** 音乐组资源 */
export interface IMusicGroup {
    /** 组资源名 */
    name?: string
    /** 组名词 */
    title?: string
    /** 组的图标 */
    iconUri?: string
}

export class MusicGroup extends $protobuf.Message<MusicGroup> implements IMusicGroup {
    name!: string
    title!: string
    iconUri!: string
    get $type() {
        return MusicGroup.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.MusicGroup")
}
MusicGroup.$type.generatedObject = MusicGroup
MusicGroup.prototype.name = MusicGroup.$type.fieldsById[1].defaultValue
MusicGroup.prototype.title = MusicGroup.$type.fieldsById[2].defaultValue
MusicGroup.prototype.iconUri = MusicGroup.$type.fieldsById[3].defaultValue


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

export class Sound extends $protobuf.Message<Sound> implements ISound {
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
    get $type() {
        return Sound.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.Sound")
}
Sound.$type.generatedObject = Sound
Sound.prototype.name = Sound.$type.fieldsById[1].defaultValue
Sound.prototype.title = Sound.$type.fieldsById[2].defaultValue
Sound.prototype.iconUri = Sound.$type.fieldsById[3].defaultValue
Sound.prototype.uri = Sound.$type.fieldsById[4].defaultValue
Sound.prototype.downloadUri = Sound.$type.fieldsById[5].defaultValue
Sound.prototype.fileHash = Sound.$type.fieldsById[6].defaultValue
Sound.prototype.remark = Sound.$type.fieldsById[7].defaultValue
Sound.prototype.ownership = Sound.$type.fieldsById[8].defaultValue
Sound.prototype.usage = Sound.$type.fieldsById[9].defaultValue
Sound.prototype.startTime = Sound.$type.fieldsById[10].defaultValue
Sound.prototype.endTime = Sound.$type.fieldsById[11].defaultValue


/** 音效组资源 */
export interface ISoundGroup {
    /** 组资源名 */
    name?: string
    /** 组名词 */
    title?: string
    /** 组的图标 */
    iconUri?: string
}

export class SoundGroup extends $protobuf.Message<SoundGroup> implements ISoundGroup {
    name!: string
    title!: string
    iconUri!: string
    get $type() {
        return SoundGroup.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.SoundGroup")
}
SoundGroup.$type.generatedObject = SoundGroup
SoundGroup.prototype.name = SoundGroup.$type.fieldsById[1].defaultValue
SoundGroup.prototype.title = SoundGroup.$type.fieldsById[2].defaultValue
SoundGroup.prototype.iconUri = SoundGroup.$type.fieldsById[3].defaultValue


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

export class Membership extends $protobuf.Message<Membership> implements IMembership {
    name!: string
    title!: string
    iconUri!: string
    uri!: string
    remark!: string
    ownership!: $ownership.OwnershipType
    usage!: $ownership.UsageType
    startTime!: $timestamp.Timestamp
    endTime!: $timestamp.Timestamp
    get $type() {
        return Membership.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.Membership")
}
Membership.$type.generatedObject = Membership
Membership.prototype.name = Membership.$type.fieldsById[1].defaultValue
Membership.prototype.title = Membership.$type.fieldsById[2].defaultValue
Membership.prototype.iconUri = Membership.$type.fieldsById[3].defaultValue
Membership.prototype.uri = Membership.$type.fieldsById[4].defaultValue
Membership.prototype.remark = Membership.$type.fieldsById[7].defaultValue
Membership.prototype.ownership = Membership.$type.fieldsById[8].defaultValue
Membership.prototype.usage = Membership.$type.fieldsById[9].defaultValue
Membership.prototype.startTime = Membership.$type.fieldsById[10].defaultValue
Membership.prototype.endTime = Membership.$type.fieldsById[11].defaultValue