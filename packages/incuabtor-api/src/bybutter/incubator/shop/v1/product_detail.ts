import * as $sisyphus from "@sisyphus.js/core"
import * as $protobuf from "protobufjs"
import * as $struct from "../../../../google/protobuf/struct"
import * as $reflection from "../../../../_reflection"


/** 由前端自解析的商品详情，结构对后端透明 */
export interface ITransparentProductDetail {
    /** 商品详情信息 */
    detail?: ($struct.IValue | null)
}

export class TransparentProductDetail extends $sisyphus.Message<ITransparentProductDetail> implements ITransparentProductDetail {
    detail!: ($struct.IValue | null)
    get $reflection() {
        return TransparentProductDetail.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.shop.v1.TransparentProductDetail")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): TransparentProductDetail {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.detail = $struct.Value.decodeDelimited(reader)
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): TransparentProductDetail {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: ITransparentProductDetail): TransparentProductDetail {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("detail") && properties.detail !== undefined) result.detail = $struct.Value.create(properties.detail)
        return result
    }
}
TransparentProductDetail.prototype.detail = null