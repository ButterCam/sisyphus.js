import * as $struct from "../../../../google/protobuf/struct"
import * as $protobuf from "protobufjs"
import * as $reflection from "../../../../_reflection"


/** 由前端自解析的商品详情，结构对后端透明 */
export interface ITransparentProductDetail {
    /** 商品详情信息 */
    detail?: $struct.IValue
}

export class TransparentProductDetail extends $protobuf.Message<TransparentProductDetail> implements ITransparentProductDetail {
    detail!: $struct.Value
    get $type() {
        return TransparentProductDetail.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.shop.v1.TransparentProductDetail")
}
TransparentProductDetail.$type.generatedObject = TransparentProductDetail
TransparentProductDetail.prototype.detail = TransparentProductDetail.$type.fieldsById[1].defaultValue