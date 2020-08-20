import * as $sisyphus from "@sisyphus.js/core"
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

export class ImageResource extends $sisyphus.Message<ImageResource> implements IImageResource {
    originUri!: string
    standardUri!: string
    previewUri!: string
    thumbnailUri!: string
    width!: number
    height!: number
}
$reflection.root.lookupType(".bybutter.incubator.common.v1.ImageResource").messageCtor = ImageResource