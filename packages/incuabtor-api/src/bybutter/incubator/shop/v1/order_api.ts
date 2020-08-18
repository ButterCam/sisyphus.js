import * as $any from "../../../../google/protobuf/any"
import * as $protobuf from "protobufjs"
import * as $reflection from "../../../../_reflection"
import * as $order from "./order"


/** 创建订单或者向订单内追加新的商品的 API 请求 */
export interface IPlaceOrderRequest {
    /** 订单 ID，留空用于创建一个订单，如果非空将会将商品加入指定的订单 */
    order?: string
    /** 需要购买的物品 */
    items?: readonly PlaceOrderRequest.IItem[]
    /**
     * 创建订单所提供的订单 Meta 信息，例如收货信息，物流信息。Meta 会追加到之前的 Meta 信息中
     * (-- api-linter: core::0146::any=disabled
     * aip.dev/not-precedent: 通用组件 --)
     */
    metadata?: readonly $any.IAny[]
}

export class PlaceOrderRequest extends $protobuf.Message<PlaceOrderRequest> implements IPlaceOrderRequest {
    order!: string
    items!: readonly PlaceOrderRequest.Item[]
    metadata!: readonly $any.Any[]
    get $type() {
        return PlaceOrderRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.shop.v1.PlaceOrderRequest")
}
PlaceOrderRequest.$type.generatedObject = PlaceOrderRequest
PlaceOrderRequest.prototype.order = PlaceOrderRequest.$type.fieldsById[1].defaultValue
PlaceOrderRequest.prototype.items = PlaceOrderRequest.$type.fieldsById[2].defaultValue
PlaceOrderRequest.prototype.metadata = PlaceOrderRequest.$type.fieldsById[3].defaultValue

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
        metadata?: readonly $any.IAny[]
    }

    export class Item extends $protobuf.Message<Item> implements IItem {
        payment!: string
        metadata!: readonly $any.Any[]
        get $type() {
            return Item.$type
        }

        static readonly $type = $reflection.root.lookupType(".bybutter.incubator.shop.v1.PlaceOrderRequest.Item")
    }
    Item.$type.generatedObject = Item
    Item.prototype.payment = Item.$type.fieldsById[1].defaultValue
    Item.prototype.metadata = Item.$type.fieldsById[2].defaultValue
}

/** 创建订单 API 的响应 */
export interface IPlaceOrderResponse {
    /** 更改后的订单结构 */
    order?: $order.IOrder
}

export class PlaceOrderResponse extends $protobuf.Message<PlaceOrderResponse> implements IPlaceOrderResponse {
    order!: $order.Order
    get $type() {
        return PlaceOrderResponse.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.shop.v1.PlaceOrderResponse")
}
PlaceOrderResponse.$type.generatedObject = PlaceOrderResponse
PlaceOrderResponse.prototype.order = PlaceOrderResponse.$type.fieldsById[1].defaultValue


/** 将订单进行结算。 */
export interface ICheckoutOrderRequest {
    /** 订单资源名称 */
    name?: string
    /** 使用的支付渠道 */
    paymentChannel?: string
}

export class CheckoutOrderRequest extends $protobuf.Message<CheckoutOrderRequest> implements ICheckoutOrderRequest {
    name!: string
    paymentChannel!: string
    get $type() {
        return CheckoutOrderRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.shop.v1.CheckoutOrderRequest")
}
CheckoutOrderRequest.$type.generatedObject = CheckoutOrderRequest
CheckoutOrderRequest.prototype.name = CheckoutOrderRequest.$type.fieldsById[1].defaultValue
CheckoutOrderRequest.prototype.paymentChannel = CheckoutOrderRequest.$type.fieldsById[2].defaultValue


/** 订单结算 API 的响应 */
export interface ICheckoutOrderResponse {
    /** 更改后的订单结构 */
    order?: $order.IOrder
}

export class CheckoutOrderResponse extends $protobuf.Message<CheckoutOrderResponse> implements ICheckoutOrderResponse {
    order!: $order.Order
    get $type() {
        return CheckoutOrderResponse.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.shop.v1.CheckoutOrderResponse")
}
CheckoutOrderResponse.$type.generatedObject = CheckoutOrderResponse
CheckoutOrderResponse.prototype.order = CheckoutOrderResponse.$type.fieldsById[1].defaultValue


/** 为订单校验收据 */
export interface IVerifyOrderRequest {
    /** 订单资源名称 */
    order?: string
    /**
     * 支付所用的 Meta 信息
     * (-- api-linter: core::0146::any=disabled
     * aip.dev/not-precedent: 通用组件 --)
     */
    receipt?: $any.IAny
}

export class VerifyOrderRequest extends $protobuf.Message<VerifyOrderRequest> implements IVerifyOrderRequest {
    order!: string
    receipt!: $any.Any
    get $type() {
        return VerifyOrderRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.shop.v1.VerifyOrderRequest")
}
VerifyOrderRequest.$type.generatedObject = VerifyOrderRequest
VerifyOrderRequest.prototype.order = VerifyOrderRequest.$type.fieldsById[1].defaultValue
VerifyOrderRequest.prototype.receipt = VerifyOrderRequest.$type.fieldsById[2].defaultValue


/** 校验收据 API 的响应 */
export interface IVerifyOrderResponse {
    /** 更改后的订单结构 */
    order?: $order.IOrder
}

export class VerifyOrderResponse extends $protobuf.Message<VerifyOrderResponse> implements IVerifyOrderResponse {
    order!: $order.Order
    get $type() {
        return VerifyOrderResponse.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.shop.v1.VerifyOrderResponse")
}
VerifyOrderResponse.$type.generatedObject = VerifyOrderResponse
VerifyOrderResponse.prototype.order = VerifyOrderResponse.$type.fieldsById[1].defaultValue


/** 订单退款 */
export interface IRefundOrderRequest {
    /** 订单资源名称 */
    order?: string
    /**
     * 退款所用的 Meta 信息
     * (-- api-linter: core::0146::any=disabled
     * aip.dev/not-precedent: 通用组件 --)
     */
    refund?: $any.IAny
}

export class RefundOrderRequest extends $protobuf.Message<RefundOrderRequest> implements IRefundOrderRequest {
    order!: string
    refund!: $any.Any
    get $type() {
        return RefundOrderRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.shop.v1.RefundOrderRequest")
}
RefundOrderRequest.$type.generatedObject = RefundOrderRequest
RefundOrderRequest.prototype.order = RefundOrderRequest.$type.fieldsById[1].defaultValue
RefundOrderRequest.prototype.refund = RefundOrderRequest.$type.fieldsById[2].defaultValue


/** 退款订单的响应 */
export interface IRefundOrderResponse {
    /** 更改后的订单结构 */
    order?: $order.IOrder
}

export class RefundOrderResponse extends $protobuf.Message<RefundOrderResponse> implements IRefundOrderResponse {
    order!: $order.Order
    get $type() {
        return RefundOrderResponse.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.shop.v1.RefundOrderResponse")
}
RefundOrderResponse.$type.generatedObject = RefundOrderResponse
RefundOrderResponse.prototype.order = RefundOrderResponse.$type.fieldsById[1].defaultValue


/** 获取订单的 API 请求 */
export interface IGetOrderRequest {
    /** 订单的资源名称 */
    name?: string
}

export class GetOrderRequest extends $protobuf.Message<GetOrderRequest> implements IGetOrderRequest {
    name!: string
    get $type() {
        return GetOrderRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.shop.v1.GetOrderRequest")
}
GetOrderRequest.$type.generatedObject = GetOrderRequest
GetOrderRequest.prototype.name = GetOrderRequest.$type.fieldsById[1].defaultValue


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

export class ListOrdersRequest extends $protobuf.Message<ListOrdersRequest> implements IListOrdersRequest {
    parent!: string
    filter!: string
    pageSize!: number
    pageToken!: string
    iapReceipt!: string
    get $type() {
        return ListOrdersRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.shop.v1.ListOrdersRequest")
}
ListOrdersRequest.$type.generatedObject = ListOrdersRequest
ListOrdersRequest.prototype.parent = ListOrdersRequest.$type.fieldsById[1].defaultValue
ListOrdersRequest.prototype.filter = ListOrdersRequest.$type.fieldsById[2].defaultValue
ListOrdersRequest.prototype.pageSize = ListOrdersRequest.$type.fieldsById[3].defaultValue
ListOrdersRequest.prototype.pageToken = ListOrdersRequest.$type.fieldsById[4].defaultValue
ListOrdersRequest.prototype.iapReceipt = ListOrdersRequest.$type.fieldsById[5].defaultValue


/** 列举订单的 API 响应 */
export interface IListOrdersResponse {
    /** 返回的订单信息 */
    orders?: readonly $order.IOrder[]
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListOrdersResponse extends $protobuf.Message<ListOrdersResponse> implements IListOrdersResponse {
    orders!: readonly $order.Order[]
    nextPageToken!: string
    get $type() {
        return ListOrdersResponse.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.shop.v1.ListOrdersResponse")
}
ListOrdersResponse.$type.generatedObject = ListOrdersResponse
ListOrdersResponse.prototype.orders = ListOrdersResponse.$type.fieldsById[1].defaultValue
ListOrdersResponse.prototype.nextPageToken = ListOrdersResponse.$type.fieldsById[2].defaultValue


/** 批量获取订单的请求 */
export interface IBatchGetOrdersRequest {
    /** 订单所属用户 */
    parent?: string
    /** 订单的资源名 */
    names?: readonly string[]
}

export class BatchGetOrdersRequest extends $protobuf.Message<BatchGetOrdersRequest> implements IBatchGetOrdersRequest {
    parent!: string
    names!: readonly string[]
    get $type() {
        return BatchGetOrdersRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.shop.v1.BatchGetOrdersRequest")
}
BatchGetOrdersRequest.$type.generatedObject = BatchGetOrdersRequest
BatchGetOrdersRequest.prototype.parent = BatchGetOrdersRequest.$type.fieldsById[1].defaultValue
BatchGetOrdersRequest.prototype.names = BatchGetOrdersRequest.$type.fieldsById[2].defaultValue


/** 批量获取订单的 API 响应 */
export interface IBatchGetOrdersResponse {
    /** 返回的订单资源 */
    orders?: readonly $order.IOrder[]
}

export class BatchGetOrdersResponse extends $protobuf.Message<BatchGetOrdersResponse> implements IBatchGetOrdersResponse {
    orders!: readonly $order.Order[]
    get $type() {
        return BatchGetOrdersResponse.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.shop.v1.BatchGetOrdersResponse")
}
BatchGetOrdersResponse.$type.generatedObject = BatchGetOrdersResponse
BatchGetOrdersResponse.prototype.orders = BatchGetOrdersResponse.$type.fieldsById[1].defaultValue