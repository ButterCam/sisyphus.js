import * as $sisyphus from "@sisyphus.js/core"
import * as $orderApi from "../../shop/v1/order_api"
import * as $order from "../../shop/v1/order"
import * as $productApi from "../../shop/v1/product_api"
import * as $product from "../../shop/v1/product"
import * as $reflection from "../../../../_reflection"

/** 商店相关的 API */
export class ShopApi extends $sisyphus.Client {
    get $service() {
        return ShopApi.$service
    }
    /** 创建一个订单，或者向订单内追加新的商品。当 order 字段留空时创建新订单。 */
    async PlaceOrder(input: $orderApi.IPlaceOrderRequest, metadata?: { [k: string]: string }): Promise<$orderApi.PlaceOrderResponse> {
        return await this.$call(this.$service.methods["PlaceOrder"], input, metadata)
    }
    /** 提交订单去支付。 */
    async CheckoutOrder(input: $orderApi.ICheckoutOrderRequest, metadata?: { [k: string]: string }): Promise<$orderApi.CheckoutOrderResponse> {
        return await this.$call(this.$service.methods["CheckoutOrder"], input, metadata)
    }
    /** 获取订单详情 */
    async GetOrder(input: $orderApi.IGetOrderRequest, metadata?: { [k: string]: string }): Promise<$order.Order> {
        return await this.$call(this.$service.methods["GetOrder"], input, metadata)
    }
    /** 列举订单 */
    async ListOrders(input: $orderApi.IListOrdersRequest, metadata?: { [k: string]: string }): Promise<$orderApi.ListOrdersResponse> {
        return await this.$call(this.$service.methods["ListOrders"], input, metadata)
    }
    /** 批量获取订单详情 */
    async BatchGetOrders(input: $orderApi.IBatchGetOrdersRequest, metadata?: { [k: string]: string }): Promise<$orderApi.BatchGetOrdersResponse> {
        return await this.$call(this.$service.methods["BatchGetOrders"], input, metadata)
    }
    /** 获取商品信息 */
    async GetProduct(input: $productApi.IGetProductRequest, metadata?: { [k: string]: string }): Promise<$product.Product> {
        return await this.$call(this.$service.methods["GetProduct"], input, metadata)
    }
    /** 列举商品信息 */
    async ListProducts(input: $productApi.IListProductsRequest, metadata?: { [k: string]: string }): Promise<$productApi.ListProductsResponse> {
        return await this.$call(this.$service.methods["ListProducts"], input, metadata)
    }
    /** 批量获取商品信息 */
    async BatchGetProducts(input: $productApi.IBatchGetProductsRequest, metadata?: { [k: string]: string }): Promise<$productApi.BatchGetProductsResponse> {
        return await this.$call(this.$service.methods["BatchGetProducts"], input, metadata)
    }
    static readonly $service = $reflection.root.lookupService(".bybutter.incubator.bread.v1.ShopApi")
}