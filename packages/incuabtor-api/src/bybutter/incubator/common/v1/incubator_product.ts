import * as $reflection from "../../../../_reflection"


/** 孵化器后端产品枚举 */
export enum IncubatorProduct {
    /** 未确定 */
    INCUBATOR_PRODUCT_UNSPECIFIED = 0,
    /** 面包视频 */
    INCUBATOR_PRODUCT_BREAD = 1,
}

export namespace IncubatorProduct {
    export const reflection = $reflection.root.lookupEnum(".bybutter.incubator.common.v1.IncubatorProduct")
}