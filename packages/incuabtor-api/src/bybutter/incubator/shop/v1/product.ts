import * as $imageResource from "../../common/v1/image_resource"
import * as $money from "../../../../google/type/money"
import * as $any from "../../../../google/protobuf/any"
import * as $protobuf from "protobufjs"
import * as $reflection from "../../../../_reflection"
import * as $timestamp from "../../../../google/protobuf/timestamp"


/** 商品资源，表示一个在商店中展示的商品。 */
export interface IProduct {
    /** 商品资源名称，形式为 "products/{product}" */
    name?: string
    /** 商品类型 */
    type?: string
    /** 商品标题 */
    title?: string
    /** 商品的展示图 */
    picture?: $imageResource.IImageResource
    /** 展示用商品原价，一般以本地化价格展示 */
    price?: $money.IMoney
    /** 计算用商品原价，必须以 STD 为单位，1 STD 为 1 人民币分 */
    standardPrice?: $money.IMoney
    /** 用户可见的 Plan */
    plans?: readonly IPlan[]
    /**
     * 商品的详情
     * (-- api-linter: core::0146::any=disabled
     * aip.dev/not-precedent: 通用组件 --)
     */
    details?: $any.IAny
    /**
     * 商品标签，由使用者决定要不要处理里面相关的内容
     * (-- api-linter: core::0146::any=disabled
     * aip.dev/not-precedent: 通用组件 --)
     */
    tags?: readonly $any.IAny[]
    /** 商品是否对当前用户可用 */
    enable?: boolean
}

export class Product extends $protobuf.Message<Product> implements IProduct {
    name!: string
    type!: string
    title!: string
    picture!: $imageResource.ImageResource
    price!: $money.Money
    standardPrice!: $money.Money
    plans!: readonly Plan[]
    details!: $any.Any
    tags!: readonly $any.Any[]
    enable!: boolean

    get $type() {
        return Product.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.shop.v1.Product")
}

Product.$type.generatedObject = Product
Product.prototype.name = Product.$type.fieldsById[1].defaultValue
Product.prototype.type = Product.$type.fieldsById[2].defaultValue
Product.prototype.title = Product.$type.fieldsById[3].defaultValue
Product.prototype.picture = Product.$type.fieldsById[4].defaultValue
Product.prototype.price = Product.$type.fieldsById[5].defaultValue
Product.prototype.standardPrice = Product.$type.fieldsById[6].defaultValue
Product.prototype.plans = Product.$type.fieldsById[7].defaultValue
Product.prototype.details = Product.$type.fieldsById[9].defaultValue
Product.prototype.tags = Product.$type.fieldsById[11].defaultValue
Product.prototype.enable = Product.$type.fieldsById[12].defaultValue


/** 购买计划，确定购买商品的某个具体的计划 */
export interface IPlan {
    /** 展示用商品价格，一般以本地化价格展示 */
    price?: $money.IMoney
    /** 计算用商品价格，必须以 STD 为单位，1 STD 为 1 人民币分 */
    standardPrice?: $money.IMoney
    /** 用于结账的条形码数据 */
    payment?: string
    /** 价格标签，包含列表中价格标签，详情页标签，与支付按钮标签 */
    priceLabel?: IPriceLabel
    /**
     * 本价格商品内包含物品
     * (-- api-linter: core::0146::any=disabled
     * aip.dev/not-precedent: 通用组件 --)
     */
    items?: readonly $any.IAny[]
    /**
     * 价格标签，由使用者决定要不要处理里面相关的内容
     * (-- api-linter: core::0146::any=disabled
     * aip.dev/not-precedent: 通用组件 --)
     */
    tags?: readonly $any.IAny[]
    /** 支持的支付方式 */
    paymentChannels?: readonly string[]
    /** 商品组 */
    group?: string
    /** 商品权重 */
    weight?: $protobuf.Long
    /** 价格是否对当前用户可用 */
    enable?: boolean
    /** 优惠价格的开始时间 */
    startTime?: $timestamp.ITimestamp
    /** 优惠价格的结束时间 */
    endTime?: $timestamp.ITimestamp
    /** 仅内部使用字段 */
    appliedAttributes?: readonly string[]
}

export class Plan extends $protobuf.Message<Plan> implements IPlan {
    price!: $money.Money
    standardPrice!: $money.Money
    payment!: string
    priceLabel!: PriceLabel
    items!: readonly $any.Any[]
    tags!: readonly $any.Any[]
    paymentChannels!: readonly string[]
    group!: string
    weight!: $protobuf.Long
    enable!: boolean
    startTime!: $timestamp.Timestamp
    endTime!: $timestamp.Timestamp
    appliedAttributes!: readonly string[]

    get $type() {
        return Plan.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.shop.v1.Plan")
}

Plan.$type.generatedObject = Plan
Plan.prototype.price = Plan.$type.fieldsById[1].defaultValue
Plan.prototype.standardPrice = Plan.$type.fieldsById[2].defaultValue
Plan.prototype.payment = Plan.$type.fieldsById[3].defaultValue
Plan.prototype.priceLabel = Plan.$type.fieldsById[4].defaultValue
Plan.prototype.items = Plan.$type.fieldsById[5].defaultValue
Plan.prototype.tags = Plan.$type.fieldsById[6].defaultValue
Plan.prototype.paymentChannels = Plan.$type.fieldsById[7].defaultValue
Plan.prototype.group = Plan.$type.fieldsById[8].defaultValue
Plan.prototype.weight = Plan.$type.fieldsById[9].defaultValue
Plan.prototype.enable = Plan.$type.fieldsById[10].defaultValue
Plan.prototype.startTime = Plan.$type.fieldsById[11].defaultValue
Plan.prototype.endTime = Plan.$type.fieldsById[12].defaultValue
Plan.prototype.appliedAttributes = Plan.$type.fieldsById[1000].defaultValue


/** 价格标签 */
export interface IPriceLabel {
    /** 在商品列表中展示的价格标签 */
    tag?: string
    /** 在商品详情中展示的价格标签 */
    label?: string
    /** 在支付按钮上展示的价格标签 */
    checkout?: string
    /** 展示风格 */
    style?: string
}

export class PriceLabel extends $protobuf.Message<PriceLabel> implements IPriceLabel {
    tag!: string
    label!: string
    checkout!: string
    style!: string

    get $type() {
        return PriceLabel.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.shop.v1.PriceLabel")
}

PriceLabel.$type.generatedObject = PriceLabel
PriceLabel.prototype.tag = PriceLabel.$type.fieldsById[1].defaultValue
PriceLabel.prototype.label = PriceLabel.$type.fieldsById[2].defaultValue
PriceLabel.prototype.checkout = PriceLabel.$type.fieldsById[3].defaultValue
PriceLabel.prototype.style = PriceLabel.$type.fieldsById[4].defaultValue