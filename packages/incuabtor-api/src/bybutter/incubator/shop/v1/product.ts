import * as $sisyphus from "@sisyphus.js/core"
import * as $protobuf from "protobufjs"
import * as $imageResource from "../../common/v1/image_resource"
import * as $money from "../../../../google/type/money"
import * as $any from "../../../../google/protobuf/any"
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
    picture?: ($imageResource.IImageResource | null)
    /** 展示用商品原价，一般以本地化价格展示 */
    price?: ($money.IMoney | null)
    /** 计算用商品原价，必须以 STD 为单位，1 STD 为 1 人民币分 */
    standardPrice?: ($money.IMoney | null)
    /** 用户可见的 Plan */
    plans?: (IPlan[] | null)
    /**
     * 商品的详情
     * (-- api-linter: core::0146::any=disabled
     * aip.dev/not-precedent: 通用组件 --)
     */
    details?: ($any.IAny | null)
    /**
     * 商品标签，由使用者决定要不要处理里面相关的内容
     * (-- api-linter: core::0146::any=disabled
     * aip.dev/not-precedent: 通用组件 --)
     */
    tags?: ($any.IAny[] | null)
    /** 商品是否对当前用户可用 */
    enable?: boolean
}

export class Product extends $sisyphus.Message<IProduct> implements IProduct {
    name!: string
    type!: string
    title!: string
    picture!: ($imageResource.IImageResource | null)
    price!: ($money.IMoney | null)
    standardPrice!: ($money.IMoney | null)
    plans!: (IPlan[] | null)
    details!: ($any.IAny | null)
    tags!: ($any.IAny[] | null)
    enable!: boolean
    get $reflection() {
        return Product.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.shop.v1.Product")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): Product {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.name = reader.string()
                    break
                case 2:
                    result.type = reader.string()
                    break
                case 3:
                    result.title = reader.string()
                    break
                case 4:
                    result.picture = $imageResource.ImageResource.decodeDelimited(reader)
                    break
                case 5:
                    result.price = $money.Money.decodeDelimited(reader)
                    break
                case 6:
                    result.standardPrice = $money.Money.decodeDelimited(reader)
                    break
                case 7:
                    if (!result.plans) result.plans = []
                    result.plans.push(Plan.decodeDelimited(reader))
                    break
                case 9:
                    result.details = $any.Any.decodeDelimited(reader)
                    break
                case 11:
                    if (!result.tags) result.tags = []
                    result.tags.push($any.Any.decodeDelimited(reader))
                    break
                case 12:
                    result.enable = reader.bool()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): Product {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IProduct): Product {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "name":
                    result[key] = String(properties[key])
                    break
                case "type":
                    result[key] = String(properties[key])
                    break
                case "title":
                    result[key] = String(properties[key])
                    break
                case "picture":
                    result[key] = $imageResource.ImageResource.create(properties[key])
                    break
                case "price":
                    result[key] = $money.Money.create(properties[key])
                    break
                case "standardPrice":
                    result[key] = $money.Money.create(properties[key])
                    break
                case "plans":
                    result[key] = Plan.create(properties[key])
                    break
                case "details":
                    result[key] = $any.Any.create(properties[key])
                    break
                case "tags":
                    result[key] = $any.Any.create(properties[key])
                    break
                case "enable":
                    result[key] = Boolean(properties[key])
                    break
            }
        }
        return result
    }
}
Product.prototype.name = ""
Product.prototype.type = ""
Product.prototype.title = ""
Product.prototype.picture = null
Product.prototype.price = null
Product.prototype.standardPrice = null
Product.prototype.plans = null
Product.prototype.details = null
Product.prototype.tags = null
Product.prototype.enable = false


/** 购买计划，确定购买商品的某个具体的计划 */
export interface IPlan {
    /** 展示用商品价格，一般以本地化价格展示 */
    price?: ($money.IMoney | null)
    /** 计算用商品价格，必须以 STD 为单位，1 STD 为 1 人民币分 */
    standardPrice?: ($money.IMoney | null)
    /** 用于结账的条形码数据 */
    payment?: string
    /** 价格标签，包含列表中价格标签，详情页标签，与支付按钮标签 */
    priceLabel?: (IPriceLabel | null)
    /**
     * 本价格商品内包含物品
     * (-- api-linter: core::0146::any=disabled
     * aip.dev/not-precedent: 通用组件 --)
     */
    items?: ($any.IAny[] | null)
    /**
     * 价格标签，由使用者决定要不要处理里面相关的内容
     * (-- api-linter: core::0146::any=disabled
     * aip.dev/not-precedent: 通用组件 --)
     */
    tags?: ($any.IAny[] | null)
    /** 支持的支付方式 */
    paymentChannels?: (string[] | null)
    /** 商品组 */
    group?: string
    /** 商品权重 */
    weight?: $protobuf.Long
    /** 价格是否对当前用户可用 */
    enable?: boolean
    /** 优惠价格的开始时间 */
    startTime?: ($timestamp.ITimestamp | null)
    /** 优惠价格的结束时间 */
    endTime?: ($timestamp.ITimestamp | null)
    /** 仅内部使用字段 */
    appliedAttributes?: (string[] | null)
}

export class Plan extends $sisyphus.Message<IPlan> implements IPlan {
    price!: ($money.IMoney | null)
    standardPrice!: ($money.IMoney | null)
    payment!: string
    priceLabel!: (IPriceLabel | null)
    items!: ($any.IAny[] | null)
    tags!: ($any.IAny[] | null)
    paymentChannels!: (string[] | null)
    group!: string
    weight!: $protobuf.Long
    enable!: boolean
    startTime!: ($timestamp.ITimestamp | null)
    endTime!: ($timestamp.ITimestamp | null)
    appliedAttributes!: (string[] | null)
    get $reflection() {
        return Plan.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.shop.v1.Plan")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): Plan {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.price = $money.Money.decodeDelimited(reader)
                    break
                case 2:
                    result.standardPrice = $money.Money.decodeDelimited(reader)
                    break
                case 3:
                    result.payment = reader.string()
                    break
                case 4:
                    result.priceLabel = PriceLabel.decodeDelimited(reader)
                    break
                case 5:
                    if (!result.items) result.items = []
                    result.items.push($any.Any.decodeDelimited(reader))
                    break
                case 6:
                    if (!result.tags) result.tags = []
                    result.tags.push($any.Any.decodeDelimited(reader))
                    break
                case 7:
                    if (!result.paymentChannels) result.paymentChannels = []
                    result.paymentChannels.push(reader.string())
                    break
                case 8:
                    result.group = reader.string()
                    break
                case 9:
                    result.weight = reader.int64()
                    break
                case 10:
                    result.enable = reader.bool()
                    break
                case 11:
                    result.startTime = $timestamp.Timestamp.decodeDelimited(reader)
                    break
                case 12:
                    result.endTime = $timestamp.Timestamp.decodeDelimited(reader)
                    break
                case 1000:
                    if (!result.appliedAttributes) result.appliedAttributes = []
                    result.appliedAttributes.push(reader.string())
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): Plan {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IPlan): Plan {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "price":
                    result[key] = $money.Money.create(properties[key])
                    break
                case "standardPrice":
                    result[key] = $money.Money.create(properties[key])
                    break
                case "payment":
                    result[key] = String(properties[key])
                    break
                case "priceLabel":
                    result[key] = PriceLabel.create(properties[key])
                    break
                case "items":
                    result[key] = $any.Any.create(properties[key])
                    break
                case "tags":
                    result[key] = $any.Any.create(properties[key])
                    break
                case "paymentChannels":
                    result[key] = String(properties[key])
                    break
                case "group":
                    result[key] = String(properties[key])
                    break
                case "weight":
                    result[key] = $sisyphus.Long.fromValue(properties[key])
                    break
                case "enable":
                    result[key] = Boolean(properties[key])
                    break
                case "startTime":
                    result[key] = $timestamp.Timestamp.create(properties[key])
                    break
                case "endTime":
                    result[key] = $timestamp.Timestamp.create(properties[key])
                    break
                case "appliedAttributes":
                    result[key] = String(properties[key])
                    break
            }
        }
        return result
    }
}
Plan.prototype.price = null
Plan.prototype.standardPrice = null
Plan.prototype.payment = ""
Plan.prototype.priceLabel = null
Plan.prototype.items = null
Plan.prototype.tags = null
Plan.prototype.paymentChannels = null
Plan.prototype.group = ""
Plan.prototype.weight = $sisyphus.Long.ZERO
Plan.prototype.enable = false
Plan.prototype.startTime = null
Plan.prototype.endTime = null
Plan.prototype.appliedAttributes = null


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

export class PriceLabel extends $sisyphus.Message<IPriceLabel> implements IPriceLabel {
    tag!: string
    label!: string
    checkout!: string
    style!: string
    get $reflection() {
        return PriceLabel.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.shop.v1.PriceLabel")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): PriceLabel {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.tag = reader.string()
                    break
                case 2:
                    result.label = reader.string()
                    break
                case 3:
                    result.checkout = reader.string()
                    break
                case 4:
                    result.style = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): PriceLabel {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IPriceLabel): PriceLabel {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "tag":
                    result[key] = String(properties[key])
                    break
                case "label":
                    result[key] = String(properties[key])
                    break
                case "checkout":
                    result[key] = String(properties[key])
                    break
                case "style":
                    result[key] = String(properties[key])
                    break
            }
        }
        return result
    }
}
PriceLabel.prototype.tag = ""
PriceLabel.prototype.label = ""
PriceLabel.prototype.checkout = ""
PriceLabel.prototype.style = ""