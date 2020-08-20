import * as $imageResource from "../../common/v1/image_resource"
import * as $money from "../../../../google/type/money"
import * as $protobuf from "protobufjs"
import * as $sisyphus from "@sisyphus.js/core"
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
    details?: $protobuf.Message
    /**
     * 商品标签，由使用者决定要不要处理里面相关的内容
     * (-- api-linter: core::0146::any=disabled
     * aip.dev/not-precedent: 通用组件 --)
     */
    tags?: readonly $protobuf.Message[]
    /** 商品是否对当前用户可用 */
    enable?: boolean
}

export class Product extends $sisyphus.Message<Product> implements IProduct {
    name!: string
    type!: string
    title!: string
    picture!: $imageResource.ImageResource
    price!: $money.Money
    standardPrice!: $money.Money
    plans!: readonly Plan[]
    details!: $protobuf.Message
    tags!: readonly $protobuf.Message[]
    enable!: boolean
}
$reflection.root.lookupType(".bybutter.incubator.shop.v1.Product").messageCtor = Product


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
    items?: readonly $protobuf.Message[]
    /**
     * 价格标签，由使用者决定要不要处理里面相关的内容
     * (-- api-linter: core::0146::any=disabled
     * aip.dev/not-precedent: 通用组件 --)
     */
    tags?: readonly $protobuf.Message[]
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

export class Plan extends $sisyphus.Message<Plan> implements IPlan {
    price!: $money.Money
    standardPrice!: $money.Money
    payment!: string
    priceLabel!: PriceLabel
    items!: readonly $protobuf.Message[]
    tags!: readonly $protobuf.Message[]
    paymentChannels!: readonly string[]
    group!: string
    weight!: $protobuf.Long
    enable!: boolean
    startTime!: $timestamp.Timestamp
    endTime!: $timestamp.Timestamp
    appliedAttributes!: readonly string[]
}
$reflection.root.lookupType(".bybutter.incubator.shop.v1.Plan").messageCtor = Plan


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

export class PriceLabel extends $sisyphus.Message<PriceLabel> implements IPriceLabel {
    tag!: string
    label!: string
    checkout!: string
    style!: string
}
$reflection.root.lookupType(".bybutter.incubator.shop.v1.PriceLabel").messageCtor = PriceLabel