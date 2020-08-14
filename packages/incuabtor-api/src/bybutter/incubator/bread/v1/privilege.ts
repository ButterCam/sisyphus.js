import * as $reflection from "../../../../_reflection"
import * as $ownership from "../../shop/v1/ownership"
import * as $timestamp from "../../../../google/protobuf/timestamp"
import * as $sisyphus from "@sisyphus.js/core"
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
    startTime?: ($timestamp.ITimestamp | null)
    /** 特权结束时间 */
    endTime?: ($timestamp.ITimestamp | null)
    /** 滤镜默认值 */
    defaultStrength?: number
}

export class Filter extends $sisyphus.Message<IFilter> implements IFilter {
    name!: string
    title!: string
    iconUri!: string
    uri!: string
    downloadUri!: string
    fileHash!: string
    remark!: string
    ownership!: $ownership.OwnershipType
    usage!: $ownership.UsageType
    startTime!: ($timestamp.ITimestamp | null)
    endTime!: ($timestamp.ITimestamp | null)
    defaultStrength!: number
    get $reflection() {
        return Filter.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.Filter")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): Filter {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.name = reader.string()
                    break
                case 2:
                    result.title = reader.string()
                    break
                case 3:
                    result.iconUri = reader.string()
                    break
                case 4:
                    result.uri = reader.string()
                    break
                case 5:
                    result.downloadUri = reader.string()
                    break
                case 6:
                    result.fileHash = reader.string()
                    break
                case 7:
                    result.remark = reader.string()
                    break
                case 8:
                    result.ownership = reader.uint32()
                    break
                case 9:
                    result.usage = reader.uint32()
                    break
                case 10:
                    result.startTime = $timestamp.Timestamp.decodeDelimited(reader)
                    break
                case 11:
                    result.endTime = $timestamp.Timestamp.decodeDelimited(reader)
                    break
                case 20:
                    result.defaultStrength = reader.int32()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): Filter {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IFilter): Filter {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("name") && properties.name !== undefined) result.name = properties.name
        if(properties.hasOwnProperty("title") && properties.title !== undefined) result.title = properties.title
        if(properties.hasOwnProperty("iconUri") && properties.iconUri !== undefined) result.iconUri = properties.iconUri
        if(properties.hasOwnProperty("uri") && properties.uri !== undefined) result.uri = properties.uri
        if(properties.hasOwnProperty("downloadUri") && properties.downloadUri !== undefined) result.downloadUri = properties.downloadUri
        if(properties.hasOwnProperty("fileHash") && properties.fileHash !== undefined) result.fileHash = properties.fileHash
        if(properties.hasOwnProperty("remark") && properties.remark !== undefined) result.remark = properties.remark
        if(properties.hasOwnProperty("ownership") && properties.ownership !== undefined) result.ownership = properties.ownership
        if(properties.hasOwnProperty("usage") && properties.usage !== undefined) result.usage = properties.usage
        if(properties.hasOwnProperty("startTime") && properties.startTime != null) result.startTime = $timestamp.Timestamp.create(properties.startTime)
        if(properties.hasOwnProperty("endTime") && properties.endTime != null) result.endTime = $timestamp.Timestamp.create(properties.endTime)
        if(properties.hasOwnProperty("defaultStrength") && properties.defaultStrength !== undefined) result.defaultStrength = properties.defaultStrength
        return result
    }
}
Filter.prototype.name = Filter.reflection.fieldsById[1].defaultValue
Filter.prototype.title = Filter.reflection.fieldsById[2].defaultValue
Filter.prototype.iconUri = Filter.reflection.fieldsById[3].defaultValue
Filter.prototype.uri = Filter.reflection.fieldsById[4].defaultValue
Filter.prototype.downloadUri = Filter.reflection.fieldsById[5].defaultValue
Filter.prototype.fileHash = Filter.reflection.fieldsById[6].defaultValue
Filter.prototype.remark = Filter.reflection.fieldsById[7].defaultValue
Filter.prototype.ownership = Filter.reflection.fieldsById[8].defaultValue
Filter.prototype.usage = Filter.reflection.fieldsById[9].defaultValue
Filter.prototype.startTime = Filter.reflection.fieldsById[10].defaultValue
Filter.prototype.endTime = Filter.reflection.fieldsById[11].defaultValue
Filter.prototype.defaultStrength = Filter.reflection.fieldsById[20].defaultValue


/** 滤镜组 */
export interface IFilterGroup {
    /** 组资源名 */
    name?: string
    /** 组名词 */
    title?: string
    /** 组的图标 */
    iconUri?: string
}

export class FilterGroup extends $sisyphus.Message<IFilterGroup> implements IFilterGroup {
    name!: string
    title!: string
    iconUri!: string
    get $reflection() {
        return FilterGroup.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.FilterGroup")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): FilterGroup {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.name = reader.string()
                    break
                case 2:
                    result.title = reader.string()
                    break
                case 3:
                    result.iconUri = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): FilterGroup {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IFilterGroup): FilterGroup {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("name") && properties.name !== undefined) result.name = properties.name
        if(properties.hasOwnProperty("title") && properties.title !== undefined) result.title = properties.title
        if(properties.hasOwnProperty("iconUri") && properties.iconUri !== undefined) result.iconUri = properties.iconUri
        return result
    }
}
FilterGroup.prototype.name = FilterGroup.reflection.fieldsById[1].defaultValue
FilterGroup.prototype.title = FilterGroup.reflection.fieldsById[2].defaultValue
FilterGroup.prototype.iconUri = FilterGroup.reflection.fieldsById[3].defaultValue


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
    startTime?: ($timestamp.ITimestamp | null)
    /** 特权结束时间 */
    endTime?: ($timestamp.ITimestamp | null)
    /** 滤镜默认值 */
    defaultStrength?: number
}

export class Border extends $sisyphus.Message<IBorder> implements IBorder {
    name!: string
    title!: string
    iconUri!: string
    uri!: string
    downloadUri!: string
    fileHash!: string
    remark!: string
    ownership!: $ownership.OwnershipType
    usage!: $ownership.UsageType
    startTime!: ($timestamp.ITimestamp | null)
    endTime!: ($timestamp.ITimestamp | null)
    defaultStrength!: number
    get $reflection() {
        return Border.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.Border")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): Border {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.name = reader.string()
                    break
                case 2:
                    result.title = reader.string()
                    break
                case 3:
                    result.iconUri = reader.string()
                    break
                case 4:
                    result.uri = reader.string()
                    break
                case 5:
                    result.downloadUri = reader.string()
                    break
                case 6:
                    result.fileHash = reader.string()
                    break
                case 7:
                    result.remark = reader.string()
                    break
                case 8:
                    result.ownership = reader.uint32()
                    break
                case 9:
                    result.usage = reader.uint32()
                    break
                case 10:
                    result.startTime = $timestamp.Timestamp.decodeDelimited(reader)
                    break
                case 11:
                    result.endTime = $timestamp.Timestamp.decodeDelimited(reader)
                    break
                case 20:
                    result.defaultStrength = reader.int32()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): Border {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IBorder): Border {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("name") && properties.name !== undefined) result.name = properties.name
        if(properties.hasOwnProperty("title") && properties.title !== undefined) result.title = properties.title
        if(properties.hasOwnProperty("iconUri") && properties.iconUri !== undefined) result.iconUri = properties.iconUri
        if(properties.hasOwnProperty("uri") && properties.uri !== undefined) result.uri = properties.uri
        if(properties.hasOwnProperty("downloadUri") && properties.downloadUri !== undefined) result.downloadUri = properties.downloadUri
        if(properties.hasOwnProperty("fileHash") && properties.fileHash !== undefined) result.fileHash = properties.fileHash
        if(properties.hasOwnProperty("remark") && properties.remark !== undefined) result.remark = properties.remark
        if(properties.hasOwnProperty("ownership") && properties.ownership !== undefined) result.ownership = properties.ownership
        if(properties.hasOwnProperty("usage") && properties.usage !== undefined) result.usage = properties.usage
        if(properties.hasOwnProperty("startTime") && properties.startTime != null) result.startTime = $timestamp.Timestamp.create(properties.startTime)
        if(properties.hasOwnProperty("endTime") && properties.endTime != null) result.endTime = $timestamp.Timestamp.create(properties.endTime)
        if(properties.hasOwnProperty("defaultStrength") && properties.defaultStrength !== undefined) result.defaultStrength = properties.defaultStrength
        return result
    }
}
Border.prototype.name = Border.reflection.fieldsById[1].defaultValue
Border.prototype.title = Border.reflection.fieldsById[2].defaultValue
Border.prototype.iconUri = Border.reflection.fieldsById[3].defaultValue
Border.prototype.uri = Border.reflection.fieldsById[4].defaultValue
Border.prototype.downloadUri = Border.reflection.fieldsById[5].defaultValue
Border.prototype.fileHash = Border.reflection.fieldsById[6].defaultValue
Border.prototype.remark = Border.reflection.fieldsById[7].defaultValue
Border.prototype.ownership = Border.reflection.fieldsById[8].defaultValue
Border.prototype.usage = Border.reflection.fieldsById[9].defaultValue
Border.prototype.startTime = Border.reflection.fieldsById[10].defaultValue
Border.prototype.endTime = Border.reflection.fieldsById[11].defaultValue
Border.prototype.defaultStrength = Border.reflection.fieldsById[20].defaultValue


/** 边框特权组 */
export interface IBorderGroup {
    /** 组资源名 */
    name?: string
    /** 组名词 */
    title?: string
    /** 组的图标 */
    iconUri?: string
}

export class BorderGroup extends $sisyphus.Message<IBorderGroup> implements IBorderGroup {
    name!: string
    title!: string
    iconUri!: string
    get $reflection() {
        return BorderGroup.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.BorderGroup")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): BorderGroup {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.name = reader.string()
                    break
                case 2:
                    result.title = reader.string()
                    break
                case 3:
                    result.iconUri = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): BorderGroup {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IBorderGroup): BorderGroup {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("name") && properties.name !== undefined) result.name = properties.name
        if(properties.hasOwnProperty("title") && properties.title !== undefined) result.title = properties.title
        if(properties.hasOwnProperty("iconUri") && properties.iconUri !== undefined) result.iconUri = properties.iconUri
        return result
    }
}
BorderGroup.prototype.name = BorderGroup.reflection.fieldsById[1].defaultValue
BorderGroup.prototype.title = BorderGroup.reflection.fieldsById[2].defaultValue
BorderGroup.prototype.iconUri = BorderGroup.reflection.fieldsById[3].defaultValue


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
    startTime?: ($timestamp.ITimestamp | null)
    /** 特权结束时间 */
    endTime?: ($timestamp.ITimestamp | null)
    /** 文本的 Style 结构 */
    style?: ($struct.IStruct | null)
}

export class Label extends $sisyphus.Message<ILabel> implements ILabel {
    name!: string
    title!: string
    iconUri!: string
    uri!: string
    downloadUri!: string
    fileHash!: string
    remark!: string
    ownership!: $ownership.OwnershipType
    usage!: $ownership.UsageType
    startTime!: ($timestamp.ITimestamp | null)
    endTime!: ($timestamp.ITimestamp | null)
    style!: ($struct.IStruct | null)
    get $reflection() {
        return Label.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.Label")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): Label {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.name = reader.string()
                    break
                case 2:
                    result.title = reader.string()
                    break
                case 3:
                    result.iconUri = reader.string()
                    break
                case 4:
                    result.uri = reader.string()
                    break
                case 5:
                    result.downloadUri = reader.string()
                    break
                case 6:
                    result.fileHash = reader.string()
                    break
                case 7:
                    result.remark = reader.string()
                    break
                case 8:
                    result.ownership = reader.uint32()
                    break
                case 9:
                    result.usage = reader.uint32()
                    break
                case 10:
                    result.startTime = $timestamp.Timestamp.decodeDelimited(reader)
                    break
                case 11:
                    result.endTime = $timestamp.Timestamp.decodeDelimited(reader)
                    break
                case 20:
                    result.style = $struct.Struct.decodeDelimited(reader)
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): Label {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: ILabel): Label {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("name") && properties.name !== undefined) result.name = properties.name
        if(properties.hasOwnProperty("title") && properties.title !== undefined) result.title = properties.title
        if(properties.hasOwnProperty("iconUri") && properties.iconUri !== undefined) result.iconUri = properties.iconUri
        if(properties.hasOwnProperty("uri") && properties.uri !== undefined) result.uri = properties.uri
        if(properties.hasOwnProperty("downloadUri") && properties.downloadUri !== undefined) result.downloadUri = properties.downloadUri
        if(properties.hasOwnProperty("fileHash") && properties.fileHash !== undefined) result.fileHash = properties.fileHash
        if(properties.hasOwnProperty("remark") && properties.remark !== undefined) result.remark = properties.remark
        if(properties.hasOwnProperty("ownership") && properties.ownership !== undefined) result.ownership = properties.ownership
        if(properties.hasOwnProperty("usage") && properties.usage !== undefined) result.usage = properties.usage
        if(properties.hasOwnProperty("startTime") && properties.startTime != null) result.startTime = $timestamp.Timestamp.create(properties.startTime)
        if(properties.hasOwnProperty("endTime") && properties.endTime != null) result.endTime = $timestamp.Timestamp.create(properties.endTime)
        if(properties.hasOwnProperty("style") && properties.style != null) result.style = $struct.Struct.create(properties.style)
        return result
    }
}
Label.prototype.name = Label.reflection.fieldsById[1].defaultValue
Label.prototype.title = Label.reflection.fieldsById[2].defaultValue
Label.prototype.iconUri = Label.reflection.fieldsById[3].defaultValue
Label.prototype.uri = Label.reflection.fieldsById[4].defaultValue
Label.prototype.downloadUri = Label.reflection.fieldsById[5].defaultValue
Label.prototype.fileHash = Label.reflection.fieldsById[6].defaultValue
Label.prototype.remark = Label.reflection.fieldsById[7].defaultValue
Label.prototype.ownership = Label.reflection.fieldsById[8].defaultValue
Label.prototype.usage = Label.reflection.fieldsById[9].defaultValue
Label.prototype.startTime = Label.reflection.fieldsById[10].defaultValue
Label.prototype.endTime = Label.reflection.fieldsById[11].defaultValue
Label.prototype.style = Label.reflection.fieldsById[20].defaultValue


/** 标签组资源 */
export interface ILabelGroup {
    /** 组资源名 */
    name?: string
    /** 组名词 */
    title?: string
    /** 组的图标 */
    iconUri?: string
}

export class LabelGroup extends $sisyphus.Message<ILabelGroup> implements ILabelGroup {
    name!: string
    title!: string
    iconUri!: string
    get $reflection() {
        return LabelGroup.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.LabelGroup")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): LabelGroup {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.name = reader.string()
                    break
                case 2:
                    result.title = reader.string()
                    break
                case 3:
                    result.iconUri = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): LabelGroup {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: ILabelGroup): LabelGroup {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("name") && properties.name !== undefined) result.name = properties.name
        if(properties.hasOwnProperty("title") && properties.title !== undefined) result.title = properties.title
        if(properties.hasOwnProperty("iconUri") && properties.iconUri !== undefined) result.iconUri = properties.iconUri
        return result
    }
}
LabelGroup.prototype.name = LabelGroup.reflection.fieldsById[1].defaultValue
LabelGroup.prototype.title = LabelGroup.reflection.fieldsById[2].defaultValue
LabelGroup.prototype.iconUri = LabelGroup.reflection.fieldsById[3].defaultValue


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
    startTime?: ($timestamp.ITimestamp | null)
    /** 特权结束时间 */
    endTime?: ($timestamp.ITimestamp | null)
    /** 贴纸的调色类型 */
    paletteType?: PaletteType
    /** 贴纸的文件类型 */
    fileType?: StickerType
    /** 贴纸宽 */
    width?: number
    /** 贴纸高 */
    height?: number
}

export class Sticker extends $sisyphus.Message<ISticker> implements ISticker {
    name!: string
    title!: string
    iconUri!: string
    uri!: string
    downloadUri!: string
    fileHash!: string
    remark!: string
    ownership!: $ownership.OwnershipType
    usage!: $ownership.UsageType
    startTime!: ($timestamp.ITimestamp | null)
    endTime!: ($timestamp.ITimestamp | null)
    paletteType!: PaletteType
    fileType!: StickerType
    width!: number
    height!: number
    get $reflection() {
        return Sticker.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.Sticker")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): Sticker {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.name = reader.string()
                    break
                case 2:
                    result.title = reader.string()
                    break
                case 3:
                    result.iconUri = reader.string()
                    break
                case 4:
                    result.uri = reader.string()
                    break
                case 5:
                    result.downloadUri = reader.string()
                    break
                case 6:
                    result.fileHash = reader.string()
                    break
                case 7:
                    result.remark = reader.string()
                    break
                case 8:
                    result.ownership = reader.uint32()
                    break
                case 9:
                    result.usage = reader.uint32()
                    break
                case 10:
                    result.startTime = $timestamp.Timestamp.decodeDelimited(reader)
                    break
                case 11:
                    result.endTime = $timestamp.Timestamp.decodeDelimited(reader)
                    break
                case 20:
                    result.paletteType = reader.uint32()
                    break
                case 21:
                    result.fileType = reader.uint32()
                    break
                case 22:
                    result.width = reader.int32()
                    break
                case 23:
                    result.height = reader.int32()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): Sticker {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: ISticker): Sticker {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("name") && properties.name !== undefined) result.name = properties.name
        if(properties.hasOwnProperty("title") && properties.title !== undefined) result.title = properties.title
        if(properties.hasOwnProperty("iconUri") && properties.iconUri !== undefined) result.iconUri = properties.iconUri
        if(properties.hasOwnProperty("uri") && properties.uri !== undefined) result.uri = properties.uri
        if(properties.hasOwnProperty("downloadUri") && properties.downloadUri !== undefined) result.downloadUri = properties.downloadUri
        if(properties.hasOwnProperty("fileHash") && properties.fileHash !== undefined) result.fileHash = properties.fileHash
        if(properties.hasOwnProperty("remark") && properties.remark !== undefined) result.remark = properties.remark
        if(properties.hasOwnProperty("ownership") && properties.ownership !== undefined) result.ownership = properties.ownership
        if(properties.hasOwnProperty("usage") && properties.usage !== undefined) result.usage = properties.usage
        if(properties.hasOwnProperty("startTime") && properties.startTime != null) result.startTime = $timestamp.Timestamp.create(properties.startTime)
        if(properties.hasOwnProperty("endTime") && properties.endTime != null) result.endTime = $timestamp.Timestamp.create(properties.endTime)
        if(properties.hasOwnProperty("paletteType") && properties.paletteType !== undefined) result.paletteType = properties.paletteType
        if(properties.hasOwnProperty("fileType") && properties.fileType !== undefined) result.fileType = properties.fileType
        if(properties.hasOwnProperty("width") && properties.width !== undefined) result.width = properties.width
        if(properties.hasOwnProperty("height") && properties.height !== undefined) result.height = properties.height
        return result
    }
}
Sticker.prototype.name = Sticker.reflection.fieldsById[1].defaultValue
Sticker.prototype.title = Sticker.reflection.fieldsById[2].defaultValue
Sticker.prototype.iconUri = Sticker.reflection.fieldsById[3].defaultValue
Sticker.prototype.uri = Sticker.reflection.fieldsById[4].defaultValue
Sticker.prototype.downloadUri = Sticker.reflection.fieldsById[5].defaultValue
Sticker.prototype.fileHash = Sticker.reflection.fieldsById[6].defaultValue
Sticker.prototype.remark = Sticker.reflection.fieldsById[7].defaultValue
Sticker.prototype.ownership = Sticker.reflection.fieldsById[8].defaultValue
Sticker.prototype.usage = Sticker.reflection.fieldsById[9].defaultValue
Sticker.prototype.startTime = Sticker.reflection.fieldsById[10].defaultValue
Sticker.prototype.endTime = Sticker.reflection.fieldsById[11].defaultValue
Sticker.prototype.paletteType = Sticker.reflection.fieldsById[20].defaultValue
Sticker.prototype.fileType = Sticker.reflection.fieldsById[21].defaultValue
Sticker.prototype.width = Sticker.reflection.fieldsById[22].defaultValue
Sticker.prototype.height = Sticker.reflection.fieldsById[23].defaultValue


/** 贴纸组资源 */
export interface IStickerGroup {
    /** 组资源名 */
    name?: string
    /** 组名词 */
    title?: string
    /** 组的图标 */
    iconUri?: string
}

export class StickerGroup extends $sisyphus.Message<IStickerGroup> implements IStickerGroup {
    name!: string
    title!: string
    iconUri!: string
    get $reflection() {
        return StickerGroup.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.StickerGroup")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): StickerGroup {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.name = reader.string()
                    break
                case 2:
                    result.title = reader.string()
                    break
                case 3:
                    result.iconUri = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): StickerGroup {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IStickerGroup): StickerGroup {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("name") && properties.name !== undefined) result.name = properties.name
        if(properties.hasOwnProperty("title") && properties.title !== undefined) result.title = properties.title
        if(properties.hasOwnProperty("iconUri") && properties.iconUri !== undefined) result.iconUri = properties.iconUri
        return result
    }
}
StickerGroup.prototype.name = StickerGroup.reflection.fieldsById[1].defaultValue
StickerGroup.prototype.title = StickerGroup.reflection.fieldsById[2].defaultValue
StickerGroup.prototype.iconUri = StickerGroup.reflection.fieldsById[3].defaultValue


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
    startTime?: ($timestamp.ITimestamp | null)
    /** 特权结束时间 */
    endTime?: ($timestamp.ITimestamp | null)
    /** 音乐作者 */
    author?: string
}

export class Music extends $sisyphus.Message<IMusic> implements IMusic {
    name!: string
    title!: string
    iconUri!: string
    uri!: string
    downloadUri!: string
    fileHash!: string
    remark!: string
    ownership!: $ownership.OwnershipType
    usage!: $ownership.UsageType
    startTime!: ($timestamp.ITimestamp | null)
    endTime!: ($timestamp.ITimestamp | null)
    author!: string
    get $reflection() {
        return Music.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.Music")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): Music {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.name = reader.string()
                    break
                case 2:
                    result.title = reader.string()
                    break
                case 3:
                    result.iconUri = reader.string()
                    break
                case 4:
                    result.uri = reader.string()
                    break
                case 5:
                    result.downloadUri = reader.string()
                    break
                case 6:
                    result.fileHash = reader.string()
                    break
                case 7:
                    result.remark = reader.string()
                    break
                case 8:
                    result.ownership = reader.uint32()
                    break
                case 9:
                    result.usage = reader.uint32()
                    break
                case 10:
                    result.startTime = $timestamp.Timestamp.decodeDelimited(reader)
                    break
                case 11:
                    result.endTime = $timestamp.Timestamp.decodeDelimited(reader)
                    break
                case 21:
                    result.author = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): Music {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IMusic): Music {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("name") && properties.name !== undefined) result.name = properties.name
        if(properties.hasOwnProperty("title") && properties.title !== undefined) result.title = properties.title
        if(properties.hasOwnProperty("iconUri") && properties.iconUri !== undefined) result.iconUri = properties.iconUri
        if(properties.hasOwnProperty("uri") && properties.uri !== undefined) result.uri = properties.uri
        if(properties.hasOwnProperty("downloadUri") && properties.downloadUri !== undefined) result.downloadUri = properties.downloadUri
        if(properties.hasOwnProperty("fileHash") && properties.fileHash !== undefined) result.fileHash = properties.fileHash
        if(properties.hasOwnProperty("remark") && properties.remark !== undefined) result.remark = properties.remark
        if(properties.hasOwnProperty("ownership") && properties.ownership !== undefined) result.ownership = properties.ownership
        if(properties.hasOwnProperty("usage") && properties.usage !== undefined) result.usage = properties.usage
        if(properties.hasOwnProperty("startTime") && properties.startTime != null) result.startTime = $timestamp.Timestamp.create(properties.startTime)
        if(properties.hasOwnProperty("endTime") && properties.endTime != null) result.endTime = $timestamp.Timestamp.create(properties.endTime)
        if(properties.hasOwnProperty("author") && properties.author !== undefined) result.author = properties.author
        return result
    }
}
Music.prototype.name = Music.reflection.fieldsById[1].defaultValue
Music.prototype.title = Music.reflection.fieldsById[2].defaultValue
Music.prototype.iconUri = Music.reflection.fieldsById[3].defaultValue
Music.prototype.uri = Music.reflection.fieldsById[4].defaultValue
Music.prototype.downloadUri = Music.reflection.fieldsById[5].defaultValue
Music.prototype.fileHash = Music.reflection.fieldsById[6].defaultValue
Music.prototype.remark = Music.reflection.fieldsById[7].defaultValue
Music.prototype.ownership = Music.reflection.fieldsById[8].defaultValue
Music.prototype.usage = Music.reflection.fieldsById[9].defaultValue
Music.prototype.startTime = Music.reflection.fieldsById[10].defaultValue
Music.prototype.endTime = Music.reflection.fieldsById[11].defaultValue
Music.prototype.author = Music.reflection.fieldsById[21].defaultValue


/** 音乐组资源 */
export interface IMusicGroup {
    /** 组资源名 */
    name?: string
    /** 组名词 */
    title?: string
    /** 组的图标 */
    iconUri?: string
}

export class MusicGroup extends $sisyphus.Message<IMusicGroup> implements IMusicGroup {
    name!: string
    title!: string
    iconUri!: string
    get $reflection() {
        return MusicGroup.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.MusicGroup")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): MusicGroup {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.name = reader.string()
                    break
                case 2:
                    result.title = reader.string()
                    break
                case 3:
                    result.iconUri = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): MusicGroup {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IMusicGroup): MusicGroup {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("name") && properties.name !== undefined) result.name = properties.name
        if(properties.hasOwnProperty("title") && properties.title !== undefined) result.title = properties.title
        if(properties.hasOwnProperty("iconUri") && properties.iconUri !== undefined) result.iconUri = properties.iconUri
        return result
    }
}
MusicGroup.prototype.name = MusicGroup.reflection.fieldsById[1].defaultValue
MusicGroup.prototype.title = MusicGroup.reflection.fieldsById[2].defaultValue
MusicGroup.prototype.iconUri = MusicGroup.reflection.fieldsById[3].defaultValue


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
    startTime?: ($timestamp.ITimestamp | null)
    /** 特权结束时间 */
    endTime?: ($timestamp.ITimestamp | null)
}

export class Sound extends $sisyphus.Message<ISound> implements ISound {
    name!: string
    title!: string
    iconUri!: string
    uri!: string
    downloadUri!: string
    fileHash!: string
    remark!: string
    ownership!: $ownership.OwnershipType
    usage!: $ownership.UsageType
    startTime!: ($timestamp.ITimestamp | null)
    endTime!: ($timestamp.ITimestamp | null)
    get $reflection() {
        return Sound.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.Sound")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): Sound {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.name = reader.string()
                    break
                case 2:
                    result.title = reader.string()
                    break
                case 3:
                    result.iconUri = reader.string()
                    break
                case 4:
                    result.uri = reader.string()
                    break
                case 5:
                    result.downloadUri = reader.string()
                    break
                case 6:
                    result.fileHash = reader.string()
                    break
                case 7:
                    result.remark = reader.string()
                    break
                case 8:
                    result.ownership = reader.uint32()
                    break
                case 9:
                    result.usage = reader.uint32()
                    break
                case 10:
                    result.startTime = $timestamp.Timestamp.decodeDelimited(reader)
                    break
                case 11:
                    result.endTime = $timestamp.Timestamp.decodeDelimited(reader)
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): Sound {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: ISound): Sound {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("name") && properties.name !== undefined) result.name = properties.name
        if(properties.hasOwnProperty("title") && properties.title !== undefined) result.title = properties.title
        if(properties.hasOwnProperty("iconUri") && properties.iconUri !== undefined) result.iconUri = properties.iconUri
        if(properties.hasOwnProperty("uri") && properties.uri !== undefined) result.uri = properties.uri
        if(properties.hasOwnProperty("downloadUri") && properties.downloadUri !== undefined) result.downloadUri = properties.downloadUri
        if(properties.hasOwnProperty("fileHash") && properties.fileHash !== undefined) result.fileHash = properties.fileHash
        if(properties.hasOwnProperty("remark") && properties.remark !== undefined) result.remark = properties.remark
        if(properties.hasOwnProperty("ownership") && properties.ownership !== undefined) result.ownership = properties.ownership
        if(properties.hasOwnProperty("usage") && properties.usage !== undefined) result.usage = properties.usage
        if(properties.hasOwnProperty("startTime") && properties.startTime != null) result.startTime = $timestamp.Timestamp.create(properties.startTime)
        if(properties.hasOwnProperty("endTime") && properties.endTime != null) result.endTime = $timestamp.Timestamp.create(properties.endTime)
        return result
    }
}
Sound.prototype.name = Sound.reflection.fieldsById[1].defaultValue
Sound.prototype.title = Sound.reflection.fieldsById[2].defaultValue
Sound.prototype.iconUri = Sound.reflection.fieldsById[3].defaultValue
Sound.prototype.uri = Sound.reflection.fieldsById[4].defaultValue
Sound.prototype.downloadUri = Sound.reflection.fieldsById[5].defaultValue
Sound.prototype.fileHash = Sound.reflection.fieldsById[6].defaultValue
Sound.prototype.remark = Sound.reflection.fieldsById[7].defaultValue
Sound.prototype.ownership = Sound.reflection.fieldsById[8].defaultValue
Sound.prototype.usage = Sound.reflection.fieldsById[9].defaultValue
Sound.prototype.startTime = Sound.reflection.fieldsById[10].defaultValue
Sound.prototype.endTime = Sound.reflection.fieldsById[11].defaultValue


/** 音效组资源 */
export interface ISoundGroup {
    /** 组资源名 */
    name?: string
    /** 组名词 */
    title?: string
    /** 组的图标 */
    iconUri?: string
}

export class SoundGroup extends $sisyphus.Message<ISoundGroup> implements ISoundGroup {
    name!: string
    title!: string
    iconUri!: string
    get $reflection() {
        return SoundGroup.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.SoundGroup")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): SoundGroup {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.name = reader.string()
                    break
                case 2:
                    result.title = reader.string()
                    break
                case 3:
                    result.iconUri = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): SoundGroup {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: ISoundGroup): SoundGroup {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("name") && properties.name !== undefined) result.name = properties.name
        if(properties.hasOwnProperty("title") && properties.title !== undefined) result.title = properties.title
        if(properties.hasOwnProperty("iconUri") && properties.iconUri !== undefined) result.iconUri = properties.iconUri
        return result
    }
}
SoundGroup.prototype.name = SoundGroup.reflection.fieldsById[1].defaultValue
SoundGroup.prototype.title = SoundGroup.reflection.fieldsById[2].defaultValue
SoundGroup.prototype.iconUri = SoundGroup.reflection.fieldsById[3].defaultValue


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
    startTime?: ($timestamp.ITimestamp | null)
    /** 特权结束时间 */
    endTime?: ($timestamp.ITimestamp | null)
}

export class Membership extends $sisyphus.Message<IMembership> implements IMembership {
    name!: string
    title!: string
    iconUri!: string
    uri!: string
    remark!: string
    ownership!: $ownership.OwnershipType
    usage!: $ownership.UsageType
    startTime!: ($timestamp.ITimestamp | null)
    endTime!: ($timestamp.ITimestamp | null)
    get $reflection() {
        return Membership.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.Membership")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): Membership {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.name = reader.string()
                    break
                case 2:
                    result.title = reader.string()
                    break
                case 3:
                    result.iconUri = reader.string()
                    break
                case 4:
                    result.uri = reader.string()
                    break
                case 7:
                    result.remark = reader.string()
                    break
                case 8:
                    result.ownership = reader.uint32()
                    break
                case 9:
                    result.usage = reader.uint32()
                    break
                case 10:
                    result.startTime = $timestamp.Timestamp.decodeDelimited(reader)
                    break
                case 11:
                    result.endTime = $timestamp.Timestamp.decodeDelimited(reader)
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): Membership {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IMembership): Membership {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("name") && properties.name !== undefined) result.name = properties.name
        if(properties.hasOwnProperty("title") && properties.title !== undefined) result.title = properties.title
        if(properties.hasOwnProperty("iconUri") && properties.iconUri !== undefined) result.iconUri = properties.iconUri
        if(properties.hasOwnProperty("uri") && properties.uri !== undefined) result.uri = properties.uri
        if(properties.hasOwnProperty("remark") && properties.remark !== undefined) result.remark = properties.remark
        if(properties.hasOwnProperty("ownership") && properties.ownership !== undefined) result.ownership = properties.ownership
        if(properties.hasOwnProperty("usage") && properties.usage !== undefined) result.usage = properties.usage
        if(properties.hasOwnProperty("startTime") && properties.startTime != null) result.startTime = $timestamp.Timestamp.create(properties.startTime)
        if(properties.hasOwnProperty("endTime") && properties.endTime != null) result.endTime = $timestamp.Timestamp.create(properties.endTime)
        return result
    }
}
Membership.prototype.name = Membership.reflection.fieldsById[1].defaultValue
Membership.prototype.title = Membership.reflection.fieldsById[2].defaultValue
Membership.prototype.iconUri = Membership.reflection.fieldsById[3].defaultValue
Membership.prototype.uri = Membership.reflection.fieldsById[4].defaultValue
Membership.prototype.remark = Membership.reflection.fieldsById[7].defaultValue
Membership.prototype.ownership = Membership.reflection.fieldsById[8].defaultValue
Membership.prototype.usage = Membership.reflection.fieldsById[9].defaultValue
Membership.prototype.startTime = Membership.reflection.fieldsById[10].defaultValue
Membership.prototype.endTime = Membership.reflection.fieldsById[11].defaultValue