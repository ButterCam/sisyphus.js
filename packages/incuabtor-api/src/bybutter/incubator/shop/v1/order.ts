import * as $sisyphus from "@sisyphus.js/core"
import * as $protobuf from "protobufjs"
import * as $money from "../../../../google/type/money"
import * as $any from "../../../../google/protobuf/any"
import * as $reflection from "../../../../_reflection"
import * as $product from "./product"


/** 订单资源 */
export interface IOrder {
    /** 订单的资源名称，形式为 ‘users/{user}/orders/{order}’ */
    name?: string
    /** 订单包含的物品 */
    items?: (Order.IItem[] | null)
    /** 订单的用于支付信息 */
    charge?: (Order.ICharge | null)
    /** 订单的状态 */
    status?: Order.State
    /** 展示用商品原价，一般以本地化价格展示 */
    price?: ($money.IMoney | null)
    /** 计算用商品原价，必须以 STD 为单位，1 STD 为 1 人民币分 */
    standardPrice?: ($money.IMoney | null)
    /**
     * 创建订单所提供的订单 Meta 信息，例如收货信息，物流信息
     * (-- api-linter: core::0146::any=disabled
     * aip.dev/not-precedent: 通用组件 --)
     */
    metadata?: ($any.IAny[] | null)
}

export class Order extends $sisyphus.Message<IOrder> implements IOrder {
    name!: string
    items!: (Order.IItem[] | null)
    charge!: (Order.ICharge | null)
    status!: Order.State
    price!: ($money.IMoney | null)
    standardPrice!: ($money.IMoney | null)
    metadata!: ($any.IAny[] | null)
    get $reflection() {
        return Order.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.shop.v1.Order")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): Order {
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
                    if (!result.items) result.items = []
                    result.items.push(Order.Item.decodeDelimited(reader))
                    break
                case 3:
                    result.charge = Order.Charge.decodeDelimited(reader)
                    break
                case 4:
                    result.status = reader.uint32()
                    break
                case 5:
                    result.price = $money.Money.decodeDelimited(reader)
                    break
                case 6:
                    result.standardPrice = $money.Money.decodeDelimited(reader)
                    break
                case 7:
                    if (!result.metadata) result.metadata = []
                    result.metadata.push($any.Any.decodeDelimited(reader))
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): Order {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IOrder): Order {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "name":
                    result[key] = String(properties[key])
                    break
                case "items":
                    result[key] = Order.Item.create(properties[key])
                    break
                case "charge":
                    result[key] = Order.Charge.create(properties[key])
                    break
                case "status":
                    result[key] = typeof properties[key] === "number" ? properties[key] : Order.State[properties[key]]
                    break
                case "price":
                    result[key] = $money.Money.create(properties[key])
                    break
                case "standardPrice":
                    result[key] = $money.Money.create(properties[key])
                    break
                case "metadata":
                    result[key] = $any.Any.create(properties[key])
                    break
            }
        }
        return result
    }
}
Order.prototype.name = ""
Order.prototype.items = null
Order.prototype.charge = null
Order.prototype.status = Order.State.STATE_UNSPECIFIED
Order.prototype.price = null
Order.prototype.standardPrice = null
Order.prototype.metadata = null

export namespace Order {

    /** 订单状态信息 */
    export enum State {
        /** 未知或未指定的订单状态 */
        STATE_UNSPECIFIED = 0,
        /** 订单已经创建，正在等待确认 */
        STATE_WAIT_FOR_CHECKOUT = 1,
        /** 订单未支付，等待付款 */
        STATE_WAIT_FOR_PAYMENT = 2,
        /** 订单已支付 */
        STATE_VERIFIED = 3,
        /** 订单已发货 */
        STATE_DISPATCHED = 4,
        /** 订单已退款 */
        STATE_REFUNDED = 5,
    }

    export namespace State {
        export const reflection = $reflection.root.lookupEnum(".bybutter.incubator.shop.v1.Order.State")
    }

    /** 订单内包含的商品 */
    export interface IItem {
        /** 订单内物品资源名称，形式为 ‘users/{user}/orders/{order}/items/{item}’ */
        name?: string
        /** 订单内物品的条形码数据 */
        payment?: string
        /** 物品的商品资源 */
        product?: ($product.IProduct | null)
        /**
         * 创建订单时物品的 Meta 信息
         * (-- api-linter: core::0146::any=disabled
         * aip.dev/not-precedent: 通用组件 --)
         */
        metadata?: ($any.IAny[] | null)
    }

    export class Item extends $sisyphus.Message<IItem> implements IItem {
        name!: string
        payment!: string
        product!: ($product.IProduct | null)
        metadata!: ($any.IAny[] | null)
        get $reflection() {
            return Item.reflection
        }

        static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.shop.v1.Order.Item")
        static decode(reader: Uint8Array | $protobuf.Reader, length?: number): Item {
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
                        result.payment = reader.string()
                        break
                    case 3:
                        result.product = $product.Product.decodeDelimited(reader)
                        break
                    case 4:
                        if (!result.metadata) result.metadata = []
                        result.metadata.push($any.Any.decodeDelimited(reader))
                        break
                }
            }
            return result
        }

        static decodeDelimited(reader: Uint8Array | $protobuf.Reader): Item {
            if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
            return this.decode(reader, reader.uint32())
        }
        static create(properties?: IItem): Item {
            if(properties instanceof this) return properties
            const result = new this()
            if (!properties) return result
            for (const key in properties) {
                if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
                switch(key) {
                    case "name":
                        result[key] = String(properties[key])
                        break
                    case "payment":
                        result[key] = String(properties[key])
                        break
                    case "product":
                        result[key] = $product.Product.create(properties[key])
                        break
                    case "metadata":
                        result[key] = $any.Any.create(properties[key])
                        break
                }
            }
            return result
        }
    }
    Item.prototype.name = ""
    Item.prototype.payment = ""
    Item.prototype.product = null
    Item.prototype.metadata = null


    /** 订单的支付相关信息 */
    export interface ICharge {
        /** Charge 的标识，将会写到 charge_meta 字段 */
        id?: string
        /** 用于各渠道的支付信息 */
        data?: string
        /** 支付渠道 */
        paymentChannel?: string
    }

    export class Charge extends $sisyphus.Message<ICharge> implements ICharge {
        id!: string
        data!: string
        paymentChannel!: string
        get $reflection() {
            return Charge.reflection
        }

        static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.shop.v1.Order.Charge")
        static decode(reader: Uint8Array | $protobuf.Reader, length?: number): Charge {
            if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
            const end = length === undefined ? reader.len : reader.pos + length
            const result = new this()
            while(reader.pos < end) {
                let tag = reader.uint32()
                switch(tag>>>3) {
                    case 1:
                        result.id = reader.string()
                        break
                    case 2:
                        result.data = reader.string()
                        break
                    case 3:
                        result.paymentChannel = reader.string()
                        break
                }
            }
            return result
        }

        static decodeDelimited(reader: Uint8Array | $protobuf.Reader): Charge {
            if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
            return this.decode(reader, reader.uint32())
        }
        static create(properties?: ICharge): Charge {
            if(properties instanceof this) return properties
            const result = new this()
            if (!properties) return result
            for (const key in properties) {
                if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
                switch(key) {
                    case "id":
                        result[key] = String(properties[key])
                        break
                    case "data":
                        result[key] = String(properties[key])
                        break
                    case "paymentChannel":
                        result[key] = String(properties[key])
                        break
                }
            }
            return result
        }
    }
    Charge.prototype.id = ""
    Charge.prototype.data = ""
    Charge.prototype.paymentChannel = ""
}