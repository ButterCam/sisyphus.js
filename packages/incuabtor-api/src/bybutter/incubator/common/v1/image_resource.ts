import * as $protobuf from "protobufjs"
import * as $reflection from "../../../../_reflection"


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

export class ImageResource extends $protobuf.Message<ImageResource> implements IImageResource {
    originUri!: string
    standardUri!: string
    previewUri!: string
    thumbnailUri!: string
    width!: number
    height!: number

    get $type() {
        return ImageResource.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.common.v1.ImageResource")
}

ImageResource.$type.generatedObject = ImageResource
ImageResource.prototype.originUri = ImageResource.$type.fieldsById[1].defaultValue
ImageResource.prototype.standardUri = ImageResource.$type.fieldsById[2].defaultValue
ImageResource.prototype.previewUri = ImageResource.$type.fieldsById[3].defaultValue
ImageResource.prototype.thumbnailUri = ImageResource.$type.fieldsById[4].defaultValue
ImageResource.prototype.width = ImageResource.$type.fieldsById[11].defaultValue
ImageResource.prototype.height = ImageResource.$type.fieldsById[12].defaultValue