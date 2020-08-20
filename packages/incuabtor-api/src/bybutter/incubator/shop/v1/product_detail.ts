import * as $struct from "../../../../google/protobuf/struct"
import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"


/** 由前端自解析的商品详情，结构对后端透明 */
export interface ITransparentProductDetail {
    /** 商品详情信息 */
    detail?: $struct.IValue
}

export class TransparentProductDetail extends $sisyphus.Message<TransparentProductDetail> implements ITransparentProductDetail {
    detail!: $struct.Value
}
$reflection.root.lookupType(".bybutter.incubator.shop.v1.TransparentProductDetail").messageCtor = TransparentProductDetail