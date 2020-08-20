import * as $protobuf from "protobufjs"
import * as $sisyphus from "@sisyphus.js/core"
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
    metadata?: readonly $protobuf.Message[]
}

export class PlaceOrderRequest extends $sisyphus.Message<PlaceOrderRequest> implements IPlaceOrderRequest {
    order!: string
    items!: readonly PlaceOrderRequest.Item[]
    metadata!: readonly $protobuf.Message[]
}
$reflection.root.lookupType(".bybutter.incubator.shop.v1.PlaceOrderRequest").messageCtor = PlaceOrderRequest

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
        metadata?: readonly $protobuf.Message[]
    }

    export class Item extends $sisyphus.Message<Item> implements IItem {
        payment!: string
        metadata!: readonly $protobuf.Message[]
    }
    $reflection.root.lookupType(".bybutter.incubator.shop.v1.PlaceOrderRequest.Item").messageCtor = Item
}

/** 创建订单 API 的响应 */
export interface IPlaceOrderResponse {
    /** 更改后的订单结构 */
    order?: $order.IOrder
}

export class PlaceOrderResponse extends $sisyphus.Message<PlaceOrderResponse> implements IPlaceOrderResponse {
    order!: $order.Order
}
$reflection.root.lookupType(".bybutter.incubator.shop.v1.PlaceOrderResponse").messageCtor = PlaceOrderResponse


/** 将订单进行结算。 */
export interface ICheckoutOrderRequest {
    /** 订单资源名称 */
    name?: string
    /** 使用的支付渠道 */
    paymentChannel?: string
}

export class CheckoutOrderRequest extends $sisyphus.Message<CheckoutOrderRequest> implements ICheckoutOrderRequest {
    name!: string
    paymentChannel!: string
}
$reflection.root.lookupType(".bybutter.incubator.shop.v1.CheckoutOrderRequest").messageCtor = CheckoutOrderRequest


/** 订单结算 API 的响应 */
export interface ICheckoutOrderResponse {
    /** 更改后的订单结构 */
    order?: $order.IOrder
}

export class CheckoutOrderResponse extends $sisyphus.Message<CheckoutOrderResponse> implements ICheckoutOrderResponse {
    order!: $order.Order
}
$reflection.root.lookupType(".bybutter.incubator.shop.v1.CheckoutOrderResponse").messageCtor = CheckoutOrderResponse


/** 为订单校验收据 */
export interface IVerifyOrderRequest {
    /** 订单资源名称 */
    order?: string
    /**
     * 支付所用的 Meta 信息
     * (-- api-linter: core::0146::any=disabled
     * aip.dev/not-precedent: 通用组件 --)
     */
    receipt?: $protobuf.Message
}

export class VerifyOrderRequest extends $sisyphus.Message<VerifyOrderRequest> implements IVerifyOrderRequest {
    order!: string
    receipt!: $protobuf.Message
}
$reflection.root.lookupType(".bybutter.incubator.shop.v1.VerifyOrderRequest").messageCtor = VerifyOrderRequest


/** 校验收据 API 的响应 */
export interface IVerifyOrderResponse {
    /** 更改后的订单结构 */
    order?: $order.IOrder
}

export class VerifyOrderResponse extends $sisyphus.Message<VerifyOrderResponse> implements IVerifyOrderResponse {
    order!: $order.Order
}
$reflection.root.lookupType(".bybutter.incubator.shop.v1.VerifyOrderResponse").messageCtor = VerifyOrderResponse


/** 订单退款 */
export interface IRefundOrderRequest {
    /** 订单资源名称 */
    order?: string
    /**
     * 退款所用的 Meta 信息
     * (-- api-linter: core::0146::any=disabled
     * aip.dev/not-precedent: 通用组件 --)
     */
    refund?: $protobuf.Message
}

export class RefundOrderRequest extends $sisyphus.Message<RefundOrderRequest> implements IRefundOrderRequest {
    order!: string
    refund!: $protobuf.Message
}
$reflection.root.lookupType(".bybutter.incubator.shop.v1.RefundOrderRequest").messageCtor = RefundOrderRequest


/** 退款订单的响应 */
export interface IRefundOrderResponse {
    /** 更改后的订单结构 */
    order?: $order.IOrder
}

export class RefundOrderResponse extends $sisyphus.Message<RefundOrderResponse> implements IRefundOrderResponse {
    order!: $order.Order
}
$reflection.root.lookupType(".bybutter.incubator.shop.v1.RefundOrderResponse").messageCtor = RefundOrderResponse


/** 获取订单的 API 请求 */
export interface IGetOrderRequest {
    /** 订单的资源名称 */
    name?: string
}

export class GetOrderRequest extends $sisyphus.Message<GetOrderRequest> implements IGetOrderRequest {
    name!: string
}
$reflection.root.lookupType(".bybutter.incubator.shop.v1.GetOrderRequest").messageCtor = GetOrderRequest


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

export class ListOrdersRequest extends $sisyphus.Message<ListOrdersRequest> implements IListOrdersRequest {
    parent!: string
    filter!: string
    pageSize!: number
    pageToken!: string
    iapReceipt!: string
}
$reflection.root.lookupType(".bybutter.incubator.shop.v1.ListOrdersRequest").messageCtor = ListOrdersRequest


/** 列举订单的 API 响应 */
export interface IListOrdersResponse {
    /** 返回的订单信息 */
    orders?: readonly $order.IOrder[]
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListOrdersResponse extends $sisyphus.Message<ListOrdersResponse> implements IListOrdersResponse {
    orders!: readonly $order.Order[]
    nextPageToken!: string
}
$reflection.root.lookupType(".bybutter.incubator.shop.v1.ListOrdersResponse").messageCtor = ListOrdersResponse


/** 批量获取订单的请求 */
export interface IBatchGetOrdersRequest {
    /** 订单所属用户 */
    parent?: string
    /** 订单的资源名 */
    names?: readonly string[]
}

export class BatchGetOrdersRequest extends $sisyphus.Message<BatchGetOrdersRequest> implements IBatchGetOrdersRequest {
    parent!: string
    names!: readonly string[]
}
$reflection.root.lookupType(".bybutter.incubator.shop.v1.BatchGetOrdersRequest").messageCtor = BatchGetOrdersRequest


/** 批量获取订单的 API 响应 */
export interface IBatchGetOrdersResponse {
    /** 返回的订单资源 */
    orders?: readonly $order.IOrder[]
}

export class BatchGetOrdersResponse extends $sisyphus.Message<BatchGetOrdersResponse> implements IBatchGetOrdersResponse {
    orders!: readonly $order.Order[]
}
$reflection.root.lookupType(".bybutter.incubator.shop.v1.BatchGetOrdersResponse").messageCtor = BatchGetOrdersResponse