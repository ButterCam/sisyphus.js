import * as $protobuf from "protobufjs"
import * as $timestamp from "../../../../google/protobuf/timestamp"
import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"
import * as $struct from "../../../../google/protobuf/struct"


/** 商品的元信息数据，仅包含数据库中的数据，用于后端内部使用。 */
export interface IProductMeta {
    /** 商品资源名 */
    name?: string
    /** 商品所属分类 */
    type?: string
    /** 商品标题 */
    title?: string
    /** 商品的展示图片 */
    pictureUri?: string
    /**
     * 商品的基础价格，单位为 ST。
     * 1 STD = 1 人民币分
     */
    basePrice?: $protobuf.Long
    /** 商品的可见范围 */
    requirements?: readonly string[]
    /** 商品的上线日期 */
    startTime?: $timestamp.ITimestamp
    /** 商品的下线时间 */
    endTime?: $timestamp.ITimestamp
}

export class ProductMeta extends $sisyphus.Message<ProductMeta> implements IProductMeta {
    name!: string
    type!: string
    title!: string
    pictureUri!: string
    basePrice!: $protobuf.Long
    requirements!: readonly string[]
    startTime!: $timestamp.Timestamp
    endTime!: $timestamp.Timestamp
}
$reflection.root.lookupType(".bybutter.incubator.shop.v1.ProductMeta").messageCtor = ProductMeta


/** 商品特性的元数据，仅包含数据库中的数据，用于后端内部使用。 */
export interface IProductAttributeMeta {
    /** 商品特性资源名 */
    name?: string
    /** 特性类型 */
    type?: string
    /** 特性的参数，可以为任意 Json 值 */
    parameter?: $struct.IValue
    /** 特性的索引参数，可用于后续索引 */
    indexedParameter1?: string
    /** 特性的第二个索引参数，可用于后续索引 */
    indexedParameter2?: string
    /** 商品特性的可见范围 */
    requirements?: readonly string[]
    /** 商品特性的上线时间 */
    startTime?: $timestamp.ITimestamp
    /** 商品特性的下线时间 */
    endTime?: $timestamp.ITimestamp
}

export class ProductAttributeMeta extends $sisyphus.Message<ProductAttributeMeta> implements IProductAttributeMeta {
    name!: string
    type!: string
    parameter!: $struct.Value
    indexedParameter1!: string
    indexedParameter2!: string
    requirements!: readonly string[]
    startTime!: $timestamp.Timestamp
    endTime!: $timestamp.Timestamp
}
$reflection.root.lookupType(".bybutter.incubator.shop.v1.ProductAttributeMeta").messageCtor = ProductAttributeMeta