import * as $protobuf from "protobufjs"
import * as $reflection from "../../../../_reflection"
import * as $product from "./product"
import * as $any from "../../../../google/protobuf/any"


/** Payment 的内容 */
export interface IPaymentPayload {
    /** 选择的商品 */
    product?: string
    /** 计算出来的 Plan Hash，用于确定选取的 Plan */
    planHash?: Uint8Array
}

export class PaymentPayload extends $protobuf.Message<PaymentPayload> implements IPaymentPayload {
    product!: string
    planHash!: Uint8Array

    get $type() {
        return PaymentPayload.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.shop.v1.PaymentPayload")
}

PaymentPayload.$type.generatedObject = PaymentPayload
PaymentPayload.prototype.product = PaymentPayload.$type.fieldsById[1].defaultValue
PaymentPayload.prototype.planHash = PaymentPayload.$type.fieldsById[2].defaultValue


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
    metadata?: readonly $any.IAny[]
}

export class ResolvedOrderItem extends $protobuf.Message<ResolvedOrderItem> implements IResolvedOrderItem {
    payment!: PaymentPayload
    product!: $product.Product
    plan!: $product.Plan
    metadata!: readonly $any.Any[]

    get $type() {
        return ResolvedOrderItem.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.shop.v1.ResolvedOrderItem")
}

ResolvedOrderItem.$type.generatedObject = ResolvedOrderItem
ResolvedOrderItem.prototype.payment = ResolvedOrderItem.$type.fieldsById[1].defaultValue
ResolvedOrderItem.prototype.product = ResolvedOrderItem.$type.fieldsById[2].defaultValue
ResolvedOrderItem.prototype.plan = ResolvedOrderItem.$type.fieldsById[3].defaultValue
ResolvedOrderItem.prototype.metadata = ResolvedOrderItem.$type.fieldsById[4].defaultValue