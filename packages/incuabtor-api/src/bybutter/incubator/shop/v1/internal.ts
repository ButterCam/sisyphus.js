import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"
import * as $product from "./product"
import * as $protobuf from "protobufjs"


/** Payment 的内容 */
export interface IPaymentPayload {
    /** 选择的商品 */
    product?: string
    /** 计算出来的 Plan Hash，用于确定选取的 Plan */
    planHash?: Uint8Array
}

export class PaymentPayload extends $sisyphus.Message<PaymentPayload> implements IPaymentPayload {
    product!: string
    planHash!: Uint8Array
}
$reflection.root.lookupType(".bybutter.incubator.shop.v1.PaymentPayload").messageCtor = PaymentPayload


/** 解析完成的订单商品 */
export interface IResolvedOrderItem {
    /** 订单内容的 Payment 信息 */
    payment?: IPaymentPayload
    /** 商品接哦古 */
    product?: $product.IProduct
    /** 所选择的规格 */
    plan?: $product.IPlan
    /**
     * 创建订单所提供的物品 Meta 信息
     * (-- api-linter: core::0146::any=disabled
     * aip.dev/not-precedent: 通用组件 --)
     */
    metadata?: readonly $protobuf.Message[]
}

export class ResolvedOrderItem extends $sisyphus.Message<ResolvedOrderItem> implements IResolvedOrderItem {
    payment!: PaymentPayload
    product!: $product.Product
    plan!: $product.Plan
    metadata!: readonly $protobuf.Message[]
}
$reflection.root.lookupType(".bybutter.incubator.shop.v1.ResolvedOrderItem").messageCtor = ResolvedOrderItem