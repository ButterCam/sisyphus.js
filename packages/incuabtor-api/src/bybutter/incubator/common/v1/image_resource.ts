import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"
import * as $protobuf from "protobufjs"


/** 图像资源 */
export interface IImageResource {
    /** 原始文件 */
    originUri?: string
    /** 比例相同的一般用作显示的图片，一般是屏幕大小 */
    standardUri?: string
    /** 比例相同的稍微小的图片，一般是 1/2 - 1-4 屏幕大小 */
    previewUri?: string
    /** 比例相同的小图，一般是 1-8 - 1/16 屏幕大小 */
    thumbnailUri?: string
    /** 图片宽度，可和图片高度一起可计算图片比例，单独值可能无意义 */
    width?: number
    /** 图片高度，可和图片宽度一起可计算图片比例，单独值可能无意义 */
    height?: number
}

export class ImageResource extends $sisyphus.Message<IImageResource> implements IImageResource {
    originUri!: string
    standardUri!: string
    previewUri!: string
    thumbnailUri!: string
    width!: number
    height!: number
    get $reflection() {
        return ImageResource.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.common.v1.ImageResource")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ImageResource {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.originUri = reader.string()
                    break
                case 2:
                    result.standardUri = reader.string()
                    break
                case 3:
                    result.previewUri = reader.string()
                    break
                case 4:
                    result.thumbnailUri = reader.string()
                    break
                case 11:
                    result.width = reader.int32()
                    break
                case 12:
                    result.height = reader.int32()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ImageResource {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IImageResource): ImageResource {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("originUri") && properties.originUri !== undefined) result.originUri = properties.originUri
        if(properties.hasOwnProperty("standardUri") && properties.standardUri !== undefined) result.standardUri = properties.standardUri
        if(properties.hasOwnProperty("previewUri") && properties.previewUri !== undefined) result.previewUri = properties.previewUri
        if(properties.hasOwnProperty("thumbnailUri") && properties.thumbnailUri !== undefined) result.thumbnailUri = properties.thumbnailUri
        if(properties.hasOwnProperty("width") && properties.width !== undefined) result.width = properties.width
        if(properties.hasOwnProperty("height") && properties.height !== undefined) result.height = properties.height
        return result
    }
}
ImageResource.prototype.originUri = ImageResource.reflection.fieldsById[1].defaultValue
ImageResource.prototype.standardUri = ImageResource.reflection.fieldsById[2].defaultValue
ImageResource.prototype.previewUri = ImageResource.reflection.fieldsById[3].defaultValue
ImageResource.prototype.thumbnailUri = ImageResource.reflection.fieldsById[4].defaultValue
ImageResource.prototype.width = ImageResource.reflection.fieldsById[11].defaultValue
ImageResource.prototype.height = ImageResource.reflection.fieldsById[12].defaultValue