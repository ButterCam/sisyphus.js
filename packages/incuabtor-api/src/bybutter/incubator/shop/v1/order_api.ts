import * as $sisyphus from "@sisyphus.js/core"
import * as $protobuf from "protobufjs"
import * as $order from "./order"
import * as $any from "../../../../google/protobuf/any"
import * as $reflection from "../../../../_reflection"


/** 创建订单或者向订单内追加新的商品的 API 请求 */
export interface IPlaceOrderRequest {
    /** 订单 ID，留空用于创建一个订单，如果非空将会将商品加入指定的订单 */
    order?: string
    /** 需要购买的物品 */
    items?: ($order.Order.IItem[] | null)
    /**
     * 创建订单所提供的订单 Meta 信息，例如收货信息，物流信息。Meta 会追加到之前的 Meta 信息中
     * (-- api-linter: core::0146::any=disabled
     * aip.dev/not-precedent: 通用组件 --)
     */
    metadata?: ($any.IAny[] | null)
}

export class PlaceOrderRequest extends $sisyphus.Message<IPlaceOrderRequest> implements IPlaceOrderRequest {
    order!: string
    items!: ($order.Order.IItem[] | null)
    metadata!: ($any.IAny[] | null)
    get $reflection() {
        return PlaceOrderRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.shop.v1.PlaceOrderRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): PlaceOrderRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.order = reader.string()
                    break
                case 2:
                    if (!result.items) result.items = []
                    result.items.push(PlaceOrderRequest.Item.decodeDelimited(reader))
                    break
                case 3:
                    if (!result.metadata) result.metadata = []
                    result.metadata.push($any.Any.decodeDelimited(reader))
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): PlaceOrderRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IPlaceOrderRequest): PlaceOrderRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "order":
                    result[key] = String(properties[key])
                    break
                case "items":
                    result[key] = PlaceOrderRequest.Item.create(properties[key])
                    break
                case "metadata":
                    result[key] = $any.Any.create(properties[key])
                    break
            }
        }
        return result
    }
}
PlaceOrderRequest.prototype.order = ""
PlaceOrderRequest.prototype.items = null
PlaceOrderRequest.prototype.metadata = null

export namespace PlaceOrderRequest {

    /** 订单中购买的物品 */
    export interface IItem {
        /** 物品的条形码数据 */
        payment?: string
        /**
         * 创建订单所提供的物品 Meta 信息
         * (-- api-linter: core::0146::any=disabled
         * aip.dev/not-precedent: 通用组件 --)
         */
        metadata?: ($any.IAny[] | null)
    }

    export class Item extends $sisyphus.Message<IItem> implements IItem {
        payment!: string
        metadata!: ($any.IAny[] | null)
        get $reflection() {
            return Item.reflection
        }

        static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.shop.v1.PlaceOrderRequest.Item")
        static decode(reader: Uint8Array | $protobuf.Reader, length?: number): Item {
            if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
            const end = length === undefined ? reader.len : reader.pos + length
            const result = new this()
            while(reader.pos < end) {
                let tag = reader.uint32()
                switch(tag>>>3) {
                    case 1:
                        result.payment = reader.string()
                        break
                    case 2:
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
                    case "payment":
                        result[key] = String(properties[key])
                        break
                    case "metadata":
                        result[key] = $any.Any.create(properties[key])
                        break
                }
            }
            return result
        }
    }
    Item.prototype.payment = ""
    Item.prototype.metadata = null
}

/** 创建订单 API 的响应 */
export interface IPlaceOrderResponse {
    /** 更改后的订单结构 */
    order?: ($order.IOrder | null)
}

export class PlaceOrderResponse extends $sisyphus.Message<IPlaceOrderResponse> implements IPlaceOrderResponse {
    order!: ($order.IOrder | null)
    get $reflection() {
        return PlaceOrderResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.shop.v1.PlaceOrderResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): PlaceOrderResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.order = $order.Order.decodeDelimited(reader)
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): PlaceOrderResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IPlaceOrderResponse): PlaceOrderResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "order":
                    result[key] = $order.Order.create(properties[key])
                    break
            }
        }
        return result
    }
}
PlaceOrderResponse.prototype.order = null


/** 将订单进行结算。 */
export interface ICheckoutOrderRequest {
    /** 订单资源名称 */
    name?: string
    /** 使用的支付渠道 */
    paymentChannel?: string
}

export class CheckoutOrderRequest extends $sisyphus.Message<ICheckoutOrderRequest> implements ICheckoutOrderRequest {
    name!: string
    paymentChannel!: string
    get $reflection() {
        return CheckoutOrderRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.shop.v1.CheckoutOrderRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): CheckoutOrderRequest {
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
                    result.paymentChannel = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): CheckoutOrderRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: ICheckoutOrderRequest): CheckoutOrderRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "name":
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
CheckoutOrderRequest.prototype.name = ""
CheckoutOrderRequest.prototype.paymentChannel = ""


/** 订单结算 API 的响应 */
export interface ICheckoutOrderResponse {
    /** 更改后的订单结构 */
    order?: ($order.IOrder | null)
}

export class CheckoutOrderResponse extends $sisyphus.Message<ICheckoutOrderResponse> implements ICheckoutOrderResponse {
    order!: ($order.IOrder | null)
    get $reflection() {
        return CheckoutOrderResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.shop.v1.CheckoutOrderResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): CheckoutOrderResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.order = $order.Order.decodeDelimited(reader)
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): CheckoutOrderResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: ICheckoutOrderResponse): CheckoutOrderResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "order":
                    result[key] = $order.Order.create(properties[key])
                    break
            }
        }
        return result
    }
}
CheckoutOrderResponse.prototype.order = null


/** 为订单校验收据 */
export interface IVerifyOrderRequest {
    /** 订单资源名称 */
    order?: string
    /**
     * 支付所用的 Meta 信息
     * (-- api-linter: core::0146::any=disabled
     * aip.dev/not-precedent: 通用组件 --)
     */
    receipt?: ($any.IAny | null)
}

export class VerifyOrderRequest extends $sisyphus.Message<IVerifyOrderRequest> implements IVerifyOrderRequest {
    order!: string
    receipt!: ($any.IAny | null)
    get $reflection() {
        return VerifyOrderRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.shop.v1.VerifyOrderRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): VerifyOrderRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.order = reader.string()
                    break
                case 2:
                    result.receipt = $any.Any.decodeDelimited(reader)
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): VerifyOrderRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IVerifyOrderRequest): VerifyOrderRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "order":
                    result[key] = String(properties[key])
                    break
                case "receipt":
                    result[key] = $any.Any.create(properties[key])
                    break
            }
        }
        return result
    }
}
VerifyOrderRequest.prototype.order = ""
VerifyOrderRequest.prototype.receipt = null


/** 校验收据 API 的响应 */
export interface IVerifyOrderResponse {
    /** 更改后的订单结构 */
    order?: ($order.IOrder | null)
}

export class VerifyOrderResponse extends $sisyphus.Message<IVerifyOrderResponse> implements IVerifyOrderResponse {
    order!: ($order.IOrder | null)
    get $reflection() {
        return VerifyOrderResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.shop.v1.VerifyOrderResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): VerifyOrderResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.order = $order.Order.decodeDelimited(reader)
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): VerifyOrderResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IVerifyOrderResponse): VerifyOrderResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "order":
                    result[key] = $order.Order.create(properties[key])
                    break
            }
        }
        return result
    }
}
VerifyOrderResponse.prototype.order = null


/** 订单退款 */
export interface IRefundOrderRequest {
    /** 订单资源名称 */
    order?: string
    /**
     * 退款所用的 Meta 信息
     * (-- api-linter: core::0146::any=disabled
     * aip.dev/not-precedent: 通用组件 --)
     */
    refund?: ($any.IAny | null)
}

export class RefundOrderRequest extends $sisyphus.Message<IRefundOrderRequest> implements IRefundOrderRequest {
    order!: string
    refund!: ($any.IAny | null)
    get $reflection() {
        return RefundOrderRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.shop.v1.RefundOrderRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): RefundOrderRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.order = reader.string()
                    break
                case 2:
                    result.refund = $any.Any.decodeDelimited(reader)
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): RefundOrderRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IRefundOrderRequest): RefundOrderRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "order":
                    result[key] = String(properties[key])
                    break
                case "refund":
                    result[key] = $any.Any.create(properties[key])
                    break
            }
        }
        return result
    }
}
RefundOrderRequest.prototype.order = ""
RefundOrderRequest.prototype.refund = null


/** 退款订单的响应 */
export interface IRefundOrderResponse {
    /** 更改后的订单结构 */
    order?: ($order.IOrder | null)
}

export class RefundOrderResponse extends $sisyphus.Message<IRefundOrderResponse> implements IRefundOrderResponse {
    order!: ($order.IOrder | null)
    get $reflection() {
        return RefundOrderResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.shop.v1.RefundOrderResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): RefundOrderResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.order = $order.Order.decodeDelimited(reader)
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): RefundOrderResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IRefundOrderResponse): RefundOrderResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "order":
                    result[key] = $order.Order.create(properties[key])
                    break
            }
        }
        return result
    }
}
RefundOrderResponse.prototype.order = null


/** 获取订单的 API 请求 */
export interface IGetOrderRequest {
    /** 订单的资源名称 */
    name?: string
}

export class GetOrderRequest extends $sisyphus.Message<IGetOrderRequest> implements IGetOrderRequest {
    name!: string
    get $reflection() {
        return GetOrderRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.shop.v1.GetOrderRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): GetOrderRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.name = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): GetOrderRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IGetOrderRequest): GetOrderRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "name":
                    result[key] = String(properties[key])
                    break
            }
        }
        return result
    }
}
GetOrderRequest.prototype.name = ""


/** 列举订单的 API 请求 */
export interface IListOrdersRequest {
    /** 订单所属用户 */
    parent?: string
    /** 使用的筛选器，语法符合 [AIP-160](https://api.bybutter.com/160) */
    filter?: string
    /** 请求的订单个数 */
    pageSize?: number
    /** 翻页信息 */
    pageToken?: string
    /**
     * (-- api-linter: core::0132::request-unknown-fields=disabled
     * aip.dev/not-precedent: 提供可以根据iap收据列举订单的功能. --)
     * IAP 收据
     */
    iapReceipt?: string
}

export class ListOrdersRequest extends $sisyphus.Message<IListOrdersRequest> implements IListOrdersRequest {
    parent!: string
    filter!: string
    pageSize!: number
    pageToken!: string
    iapReceipt!: string
    get $reflection() {
        return ListOrdersRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.shop.v1.ListOrdersRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListOrdersRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.parent = reader.string()
                    break
                case 2:
                    result.filter = reader.string()
                    break
                case 3:
                    result.pageSize = reader.int32()
                    break
                case 4:
                    result.pageToken = reader.string()
                    break
                case 5:
                    result.iapReceipt = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListOrdersRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListOrdersRequest): ListOrdersRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "parent":
                    result[key] = String(properties[key])
                    break
                case "filter":
                    result[key] = String(properties[key])
                    break
                case "pageSize":
                    result[key] = Number(properties[key])
                    break
                case "pageToken":
                    result[key] = String(properties[key])
                    break
                case "iapReceipt":
                    result[key] = String(properties[key])
                    break
            }
        }
        return result
    }
}
ListOrdersRequest.prototype.parent = ""
ListOrdersRequest.prototype.filter = ""
ListOrdersRequest.prototype.pageSize = 0
ListOrdersRequest.prototype.pageToken = ""
ListOrdersRequest.prototype.iapReceipt = ""


/** 列举订单的 API 响应 */
export interface IListOrdersResponse {
    /** 返回的订单信息 */
    orders?: ($order.IOrder[] | null)
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListOrdersResponse extends $sisyphus.Message<IListOrdersResponse> implements IListOrdersResponse {
    orders!: ($order.IOrder[] | null)
    nextPageToken!: string
    get $reflection() {
        return ListOrdersResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.shop.v1.ListOrdersResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListOrdersResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    if (!result.orders) result.orders = []
                    result.orders.push($order.Order.decodeDelimited(reader))
                    break
                case 2:
                    result.nextPageToken = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListOrdersResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListOrdersResponse): ListOrdersResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "orders":
                    result[key] = $order.Order.create(properties[key])
                    break
                case "nextPageToken":
                    result[key] = String(properties[key])
                    break
            }
        }
        return result
    }
}
ListOrdersResponse.prototype.orders = null
ListOrdersResponse.prototype.nextPageToken = ""


/** 批量获取订单的请求 */
export interface IBatchGetOrdersRequest {
    /** 订单所属用户 */
    parent?: string
    /** 订单的资源名 */
    names?: (string[] | null)
}

export class BatchGetOrdersRequest extends $sisyphus.Message<IBatchGetOrdersRequest> implements IBatchGetOrdersRequest {
    parent!: string
    names!: (string[] | null)
    get $reflection() {
        return BatchGetOrdersRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.shop.v1.BatchGetOrdersRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): BatchGetOrdersRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.parent = reader.string()
                    break
                case 2:
                    if (!result.names) result.names = []
                    result.names.push(reader.string())
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): BatchGetOrdersRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IBatchGetOrdersRequest): BatchGetOrdersRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "parent":
                    result[key] = String(properties[key])
                    break
                case "names":
                    result[key] = String(properties[key])
                    break
            }
        }
        return result
    }
}
BatchGetOrdersRequest.prototype.parent = ""
BatchGetOrdersRequest.prototype.names = null


/** 批量获取订单的 API 响应 */
export interface IBatchGetOrdersResponse {
    /** 返回的订单资源 */
    orders?: ($order.IOrder[] | null)
}

export class BatchGetOrdersResponse extends $sisyphus.Message<IBatchGetOrdersResponse> implements IBatchGetOrdersResponse {
    orders!: ($order.IOrder[] | null)
    get $reflection() {
        return BatchGetOrdersResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.shop.v1.BatchGetOrdersResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): BatchGetOrdersResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    if (!result.orders) result.orders = []
                    result.orders.push($order.Order.decodeDelimited(reader))
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): BatchGetOrdersResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IBatchGetOrdersResponse): BatchGetOrdersResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "orders":
                    result[key] = $order.Order.create(properties[key])
                    break
            }
        }
        return result
    }
}
BatchGetOrdersResponse.prototype.orders = null