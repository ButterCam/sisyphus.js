import * as $protobuf from "protobufjs"
import * as $reflection from "../../../../_reflection"
import * as $product from "./product"


/** 获取商品资源的 API 请求 */
export interface IGetProductRequest {
    /** 商品的资源名 */
    name?: string
}

export class GetProductRequest extends $protobuf.Message<GetProductRequest> implements IGetProductRequest {
    name!: string
    get $type() {
        return GetProductRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.shop.v1.GetProductRequest")
}
GetProductRequest.$type.generatedObject = GetProductRequest
GetProductRequest.prototype.name = GetProductRequest.$type.fieldsById[1].defaultValue


/**
 * 批量获取商品资源的 API 请求
 * (-- api-linter: core::0231::request-parent-field=disabled
 * aip.dev/not-precedent: 商品为全局资源，没有 parent. --)
 */
export interface IBatchGetProductsRequest {
    /** 商品的资源名 */
    names?: readonly string[]
}

export class BatchGetProductsRequest extends $protobuf.Message<BatchGetProductsRequest> implements IBatchGetProductsRequest {
    names!: readonly string[]
    get $type() {
        return BatchGetProductsRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.shop.v1.BatchGetProductsRequest")
}
BatchGetProductsRequest.$type.generatedObject = BatchGetProductsRequest
BatchGetProductsRequest.prototype.names = BatchGetProductsRequest.$type.fieldsById[1].defaultValue


/** 批量获取商品资源的 API 响应 */
export interface IBatchGetProductsResponse {
    /** 返回的商品资源 */
    products?: readonly $product.IProduct[]
}

export class BatchGetProductsResponse extends $protobuf.Message<BatchGetProductsResponse> implements IBatchGetProductsResponse {
    products!: readonly $product.Product[]
    get $type() {
        return BatchGetProductsResponse.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.shop.v1.BatchGetProductsResponse")
}
BatchGetProductsResponse.$type.generatedObject = BatchGetProductsResponse
BatchGetProductsResponse.prototype.products = BatchGetProductsResponse.$type.fieldsById[1].defaultValue


/**
 * 列举商品资源的 API 请求
 * (-- api-linter: core::0132::request-parent-required=disabled
 * aip.dev/not-precedent: 商品为全局资源，没有 parent. --)
 */
export interface IListProductsRequest {
    /** 用于列举商品的筛选器，语法符合 [AIP-160](https://aip.bybutter.com/160) */
    filter?: string
    /** 需要获取商品数量，取值为 1..100，如果超出范围默认取 30 */
    pageSize?: number
    /** 翻页信息 */
    pageToken?: string
    /** 需要按照排序的信息 */
    orderBy?: string
}

export class ListProductsRequest extends $protobuf.Message<ListProductsRequest> implements IListProductsRequest {
    filter!: string
    pageSize!: number
    pageToken!: string
    orderBy!: string
    get $type() {
        return ListProductsRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.shop.v1.ListProductsRequest")
}
ListProductsRequest.$type.generatedObject = ListProductsRequest
ListProductsRequest.prototype.filter = ListProductsRequest.$type.fieldsById[1].defaultValue
ListProductsRequest.prototype.pageSize = ListProductsRequest.$type.fieldsById[2].defaultValue
ListProductsRequest.prototype.pageToken = ListProductsRequest.$type.fieldsById[3].defaultValue
ListProductsRequest.prototype.orderBy = ListProductsRequest.$type.fieldsById[4].defaultValue


/** 列举商品资源的 API 响应 */
export interface IListProductsResponse {
    /** 返回的商品资源 */
    products?: readonly $product.IProduct[]
    /** 下一页所需要的翻页信息 */
    nextPageToken?: string
}

export class ListProductsResponse extends $protobuf.Message<ListProductsResponse> implements IListProductsResponse {
    products!: readonly $product.Product[]
    nextPageToken!: string
    get $type() {
        return ListProductsResponse.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.shop.v1.ListProductsResponse")
}
ListProductsResponse.$type.generatedObject = ListProductsResponse
ListProductsResponse.prototype.products = ListProductsResponse.$type.fieldsById[1].defaultValue
ListProductsResponse.prototype.nextPageToken = ListProductsResponse.$type.fieldsById[2].defaultValue