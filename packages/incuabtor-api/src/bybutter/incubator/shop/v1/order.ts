import * as $money from "../../../../google/type/money"
import * as $any from "../../../../google/protobuf/any"
import * as $protobuf from "protobufjs"
import * as $reflection from "../../../../_reflection"
import * as $product from "./product"


/** 订单资源 */
export interface IOrder {
    /** 订单的资源名称，形式为 ‘users/{user}/orders/{order}’ */
    name?: string
    /** 订单包含的物品 */
    items?: readonly Order.IItem[]
    /** 订单的用于支付信息 */
    charge?: Order.ICharge
    /** 订单的状态 */
    status?: Order.State
    /** 展示用商品原价，一般以本地化价格展示 */
    price?: $money.IMoney
    /** 计算用商品原价，必须以 STD 为单位，1 STD 为 1 人民币分 */
    standardPrice?: $money.IMoney
    /**
     * 创建订单所提供的订单 Meta 信息，例如收货信息，物流信息
     * (-- api-linter: core::0146::any=disabled
     * aip.dev/not-precedent: 通用组件 --)
     */
    metadata?: readonly $any.IAny[]
}

export class Order extends $protobuf.Message<Order> implements IOrder {
    name!: string
    items!: readonly Order.Item[]
    charge!: Order.Charge
    status!: Order.State
    price!: $money.Money
    standardPrice!: $money.Money
    metadata!: readonly $any.Any[]
    get $type() {
        return Order.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.shop.v1.Order")
}
Order.$type.generatedObject = Order
Order.prototype.name = Order.$type.fieldsById[1].defaultValue
Order.prototype.items = Order.$type.fieldsById[2].defaultValue
Order.prototype.charge = Order.$type.fieldsById[3].defaultValue
Order.prototype.status = Order.$type.fieldsById[4].defaultValue
Order.prototype.price = Order.$type.fieldsById[5].defaultValue
Order.prototype.standardPrice = Order.$type.fieldsById[6].defaultValue
Order.prototype.metadata = Order.$type.fieldsById[7].defaultValue

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
        product?: $product.IProduct
        /**
         * 创建订单时物品的 Meta 信息
         * (-- api-linter: core::0146::any=disabled
         * aip.dev/not-precedent: 通用组件 --)
         */
        metadata?: readonly $any.IAny[]
    }

    export class Item extends $protobuf.Message<Item> implements IItem {
        name!: string
        payment!: string
        product!: $product.Product
        metadata!: readonly $any.Any[]
        get $type() {
            return Item.$type
        }

        static readonly $type = $reflection.root.lookupType(".bybutter.incubator.shop.v1.Order.Item")
    }
    Item.$type.generatedObject = Item
    Item.prototype.name = Item.$type.fieldsById[1].defaultValue
    Item.prototype.payment = Item.$type.fieldsById[2].defaultValue
    Item.prototype.product = Item.$type.fieldsById[3].defaultValue
    Item.prototype.metadata = Item.$type.fieldsById[4].defaultValue


    /** 订单的支付相关信息 */
    export interface ICharge {
        /** Charge 的标识，将会写到 charge_meta 字段 */
        id?: string
        /** 用于各渠道的支付信息 */
        data?: string
        /** 支付渠道 */
        paymentChannel?: string
    }

    export class Charge extends $protobuf.Message<Charge> implements ICharge {
        id!: string
        data!: string
        paymentChannel!: string
        get $type() {
            return Charge.$type
        }

        static readonly $type = $reflection.root.lookupType(".bybutter.incubator.shop.v1.Order.Charge")
    }
    Charge.$type.generatedObject = Charge
    Charge.prototype.id = Charge.$type.fieldsById[1].defaultValue
    Charge.prototype.data = Charge.$type.fieldsById[2].defaultValue
    Charge.prototype.paymentChannel = Charge.$type.fieldsById[3].defaultValue
}