import * as $sisyphus from "@sisyphus.js/core"
import * as $protobuf from "protobufjs"
import * as $reflection from "../../../../_reflection"
import * as $ownership from "../../shop/v1/ownership"
import * as $timestamp from "../../../../google/protobuf/timestamp"
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
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "name":
                    result[key] = String(properties[key])
                    break
                case "title":
                    result[key] = String(properties[key])
                    break
                case "iconUri":
                    result[key] = String(properties[key])
                    break
                case "uri":
                    result[key] = String(properties[key])
                    break
                case "downloadUri":
                    result[key] = String(properties[key])
                    break
                case "fileHash":
                    result[key] = String(properties[key])
                    break
                case "remark":
                    result[key] = String(properties[key])
                    break
                case "ownership":
                    result[key] = typeof properties[key] === "number" ? properties[key] : $ownership.OwnershipType[properties[key]]
                    break
                case "usage":
                    result[key] = typeof properties[key] === "number" ? properties[key] : $ownership.UsageType[properties[key]]
                    break
                case "startTime":
                    result[key] = $timestamp.Timestamp.create(properties[key])
                    break
                case "endTime":
                    result[key] = $timestamp.Timestamp.create(properties[key])
                    break
                case "defaultStrength":
                    result[key] = Number(properties[key])
                    break
            }
        }
        return result
    }
}
Filter.prototype.name = ""
Filter.prototype.title = ""
Filter.prototype.iconUri = ""
Filter.prototype.uri = ""
Filter.prototype.downloadUri = ""
Filter.prototype.fileHash = ""
Filter.prototype.remark = ""
Filter.prototype.ownership = $ownership.OwnershipType.OWNERSHIP_TYPE_UNSPECIFIED
Filter.prototype.usage = $ownership.UsageType.USAGE_TYPE_UNSPECIFIED
Filter.prototype.startTime = null
Filter.prototype.endTime = null
Filter.prototype.defaultStrength = 0


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
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "name":
                    result[key] = String(properties[key])
                    break
                case "title":
                    result[key] = String(properties[key])
                    break
                case "iconUri":
                    result[key] = String(properties[key])
                    break
            }
        }
        return result
    }
}
FilterGroup.prototype.name = ""
FilterGroup.prototype.title = ""
FilterGroup.prototype.iconUri = ""


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
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "name":
                    result[key] = String(properties[key])
                    break
                case "title":
                    result[key] = String(properties[key])
                    break
                case "iconUri":
                    result[key] = String(properties[key])
                    break
                case "uri":
                    result[key] = String(properties[key])
                    break
                case "downloadUri":
                    result[key] = String(properties[key])
                    break
                case "fileHash":
                    result[key] = String(properties[key])
                    break
                case "remark":
                    result[key] = String(properties[key])
                    break
                case "ownership":
                    result[key] = typeof properties[key] === "number" ? properties[key] : $ownership.OwnershipType[properties[key]]
                    break
                case "usage":
                    result[key] = typeof properties[key] === "number" ? properties[key] : $ownership.UsageType[properties[key]]
                    break
                case "startTime":
                    result[key] = $timestamp.Timestamp.create(properties[key])
                    break
                case "endTime":
                    result[key] = $timestamp.Timestamp.create(properties[key])
                    break
                case "defaultStrength":
                    result[key] = Number(properties[key])
                    break
            }
        }
        return result
    }
}
Border.prototype.name = ""
Border.prototype.title = ""
Border.prototype.iconUri = ""
Border.prototype.uri = ""
Border.prototype.downloadUri = ""
Border.prototype.fileHash = ""
Border.prototype.remark = ""
Border.prototype.ownership = $ownership.OwnershipType.OWNERSHIP_TYPE_UNSPECIFIED
Border.prototype.usage = $ownership.UsageType.USAGE_TYPE_UNSPECIFIED
Border.prototype.startTime = null
Border.prototype.endTime = null
Border.prototype.defaultStrength = 0


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
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "name":
                    result[key] = String(properties[key])
                    break
                case "title":
                    result[key] = String(properties[key])
                    break
                case "iconUri":
                    result[key] = String(properties[key])
                    break
            }
        }
        return result
    }
}
BorderGroup.prototype.name = ""
BorderGroup.prototype.title = ""
BorderGroup.prototype.iconUri = ""


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
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "name":
                    result[key] = String(properties[key])
                    break
                case "title":
                    result[key] = String(properties[key])
                    break
                case "iconUri":
                    result[key] = String(properties[key])
                    break
                case "uri":
                    result[key] = String(properties[key])
                    break
                case "downloadUri":
                    result[key] = String(properties[key])
                    break
                case "fileHash":
                    result[key] = String(properties[key])
                    break
                case "remark":
                    result[key] = String(properties[key])
                    break
                case "ownership":
                    result[key] = typeof properties[key] === "number" ? properties[key] : $ownership.OwnershipType[properties[key]]
                    break
                case "usage":
                    result[key] = typeof properties[key] === "number" ? properties[key] : $ownership.UsageType[properties[key]]
                    break
                case "startTime":
                    result[key] = $timestamp.Timestamp.create(properties[key])
                    break
                case "endTime":
                    result[key] = $timestamp.Timestamp.create(properties[key])
                    break
                case "style":
                    result[key] = $struct.Struct.create(properties[key])
                    break
            }
        }
        return result
    }
}
Label.prototype.name = ""
Label.prototype.title = ""
Label.prototype.iconUri = ""
Label.prototype.uri = ""
Label.prototype.downloadUri = ""
Label.prototype.fileHash = ""
Label.prototype.remark = ""
Label.prototype.ownership = $ownership.OwnershipType.OWNERSHIP_TYPE_UNSPECIFIED
Label.prototype.usage = $ownership.UsageType.USAGE_TYPE_UNSPECIFIED
Label.prototype.startTime = null
Label.prototype.endTime = null
Label.prototype.style = null


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
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "name":
                    result[key] = String(properties[key])
                    break
                case "title":
                    result[key] = String(properties[key])
                    break
                case "iconUri":
                    result[key] = String(properties[key])
                    break
            }
        }
        return result
    }
}
LabelGroup.prototype.name = ""
LabelGroup.prototype.title = ""
LabelGroup.prototype.iconUri = ""


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
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "name":
                    result[key] = String(properties[key])
                    break
                case "title":
                    result[key] = String(properties[key])
                    break
                case "iconUri":
                    result[key] = String(properties[key])
                    break
                case "uri":
                    result[key] = String(properties[key])
                    break
                case "downloadUri":
                    result[key] = String(properties[key])
                    break
                case "fileHash":
                    result[key] = String(properties[key])
                    break
                case "remark":
                    result[key] = String(properties[key])
                    break
                case "ownership":
                    result[key] = typeof properties[key] === "number" ? properties[key] : $ownership.OwnershipType[properties[key]]
                    break
                case "usage":
                    result[key] = typeof properties[key] === "number" ? properties[key] : $ownership.UsageType[properties[key]]
                    break
                case "startTime":
                    result[key] = $timestamp.Timestamp.create(properties[key])
                    break
                case "endTime":
                    result[key] = $timestamp.Timestamp.create(properties[key])
                    break
                case "paletteType":
                    result[key] = typeof properties[key] === "number" ? properties[key] : PaletteType[properties[key]]
                    break
                case "fileType":
                    result[key] = typeof properties[key] === "number" ? properties[key] : StickerType[properties[key]]
                    break
                case "width":
                    result[key] = Number(properties[key])
                    break
                case "height":
                    result[key] = Number(properties[key])
                    break
            }
        }
        return result
    }
}
Sticker.prototype.name = ""
Sticker.prototype.title = ""
Sticker.prototype.iconUri = ""
Sticker.prototype.uri = ""
Sticker.prototype.downloadUri = ""
Sticker.prototype.fileHash = ""
Sticker.prototype.remark = ""
Sticker.prototype.ownership = $ownership.OwnershipType.OWNERSHIP_TYPE_UNSPECIFIED
Sticker.prototype.usage = $ownership.UsageType.USAGE_TYPE_UNSPECIFIED
Sticker.prototype.startTime = null
Sticker.prototype.endTime = null
Sticker.prototype.paletteType = PaletteType.PALETTE_TYPE_UNSPECIFIED
Sticker.prototype.fileType = StickerType.STICKER_TYPE_UNSPECIFIED
Sticker.prototype.width = 0
Sticker.prototype.height = 0


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
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "name":
                    result[key] = String(properties[key])
                    break
                case "title":
                    result[key] = String(properties[key])
                    break
                case "iconUri":
                    result[key] = String(properties[key])
                    break
            }
        }
        return result
    }
}
StickerGroup.prototype.name = ""
StickerGroup.prototype.title = ""
StickerGroup.prototype.iconUri = ""


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
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "name":
                    result[key] = String(properties[key])
                    break
                case "title":
                    result[key] = String(properties[key])
                    break
                case "iconUri":
                    result[key] = String(properties[key])
                    break
                case "uri":
                    result[key] = String(properties[key])
                    break
                case "downloadUri":
                    result[key] = String(properties[key])
                    break
                case "fileHash":
                    result[key] = String(properties[key])
                    break
                case "remark":
                    result[key] = String(properties[key])
                    break
                case "ownership":
                    result[key] = typeof properties[key] === "number" ? properties[key] : $ownership.OwnershipType[properties[key]]
                    break
                case "usage":
                    result[key] = typeof properties[key] === "number" ? properties[key] : $ownership.UsageType[properties[key]]
                    break
                case "startTime":
                    result[key] = $timestamp.Timestamp.create(properties[key])
                    break
                case "endTime":
                    result[key] = $timestamp.Timestamp.create(properties[key])
                    break
                case "author":
                    result[key] = String(properties[key])
                    break
            }
        }
        return result
    }
}
Music.prototype.name = ""
Music.prototype.title = ""
Music.prototype.iconUri = ""
Music.prototype.uri = ""
Music.prototype.downloadUri = ""
Music.prototype.fileHash = ""
Music.prototype.remark = ""
Music.prototype.ownership = $ownership.OwnershipType.OWNERSHIP_TYPE_UNSPECIFIED
Music.prototype.usage = $ownership.UsageType.USAGE_TYPE_UNSPECIFIED
Music.prototype.startTime = null
Music.prototype.endTime = null
Music.prototype.author = ""


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
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "name":
                    result[key] = String(properties[key])
                    break
                case "title":
                    result[key] = String(properties[key])
                    break
                case "iconUri":
                    result[key] = String(properties[key])
                    break
            }
        }
        return result
    }
}
MusicGroup.prototype.name = ""
MusicGroup.prototype.title = ""
MusicGroup.prototype.iconUri = ""


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
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "name":
                    result[key] = String(properties[key])
                    break
                case "title":
                    result[key] = String(properties[key])
                    break
                case "iconUri":
                    result[key] = String(properties[key])
                    break
                case "uri":
                    result[key] = String(properties[key])
                    break
                case "downloadUri":
                    result[key] = String(properties[key])
                    break
                case "fileHash":
                    result[key] = String(properties[key])
                    break
                case "remark":
                    result[key] = String(properties[key])
                    break
                case "ownership":
                    result[key] = typeof properties[key] === "number" ? properties[key] : $ownership.OwnershipType[properties[key]]
                    break
                case "usage":
                    result[key] = typeof properties[key] === "number" ? properties[key] : $ownership.UsageType[properties[key]]
                    break
                case "startTime":
                    result[key] = $timestamp.Timestamp.create(properties[key])
                    break
                case "endTime":
                    result[key] = $timestamp.Timestamp.create(properties[key])
                    break
            }
        }
        return result
    }
}
Sound.prototype.name = ""
Sound.prototype.title = ""
Sound.prototype.iconUri = ""
Sound.prototype.uri = ""
Sound.prototype.downloadUri = ""
Sound.prototype.fileHash = ""
Sound.prototype.remark = ""
Sound.prototype.ownership = $ownership.OwnershipType.OWNERSHIP_TYPE_UNSPECIFIED
Sound.prototype.usage = $ownership.UsageType.USAGE_TYPE_UNSPECIFIED
Sound.prototype.startTime = null
Sound.prototype.endTime = null


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
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "name":
                    result[key] = String(properties[key])
                    break
                case "title":
                    result[key] = String(properties[key])
                    break
                case "iconUri":
                    result[key] = String(properties[key])
                    break
            }
        }
        return result
    }
}
SoundGroup.prototype.name = ""
SoundGroup.prototype.title = ""
SoundGroup.prototype.iconUri = ""


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
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "name":
                    result[key] = String(properties[key])
                    break
                case "title":
                    result[key] = String(properties[key])
                    break
                case "iconUri":
                    result[key] = String(properties[key])
                    break
                case "uri":
                    result[key] = String(properties[key])
                    break
                case "remark":
                    result[key] = String(properties[key])
                    break
                case "ownership":
                    result[key] = typeof properties[key] === "number" ? properties[key] : $ownership.OwnershipType[properties[key]]
                    break
                case "usage":
                    result[key] = typeof properties[key] === "number" ? properties[key] : $ownership.UsageType[properties[key]]
                    break
                case "startTime":
                    result[key] = $timestamp.Timestamp.create(properties[key])
                    break
                case "endTime":
                    result[key] = $timestamp.Timestamp.create(properties[key])
                    break
            }
        }
        return result
    }
}
Membership.prototype.name = ""
Membership.prototype.title = ""
Membership.prototype.iconUri = ""
Membership.prototype.uri = ""
Membership.prototype.remark = ""
Membership.prototype.ownership = $ownership.OwnershipType.OWNERSHIP_TYPE_UNSPECIFIED
Membership.prototype.usage = $ownership.UsageType.USAGE_TYPE_UNSPECIFIED
Membership.prototype.startTime = null
Membership.prototype.endTime = null