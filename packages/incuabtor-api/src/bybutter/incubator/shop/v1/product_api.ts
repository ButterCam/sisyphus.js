import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"
import * as $product from "./product"


/** 获取商品资源的 API 请求 */
export interface IGetProductRequest {
    /** 商品的资源名 */
    name?: string
}

export class GetProductRequest extends $sisyphus.Message<GetProductRequest> implements IGetProductRequest {
    name!: string
}
$reflection.root.lookupType(".bybutter.incubator.shop.v1.GetProductRequest").messageCtor = GetProductRequest


/**
 * 批量获取商品资源的 API 请求
 * (-- api-linter: core::0231::request-parent-field=disabled
 * aip.dev/not-precedent: 商品为全局资源，没有 parent. --)
 */
export interface IBatchGetProductsRequest {
    /** 商品的资源名 */
    names?: readonly string[]
}

export class BatchGetProductsRequest extends $sisyphus.Message<BatchGetProductsRequest> implements IBatchGetProductsRequest {
    names!: readonly string[]
}
$reflection.root.lookupType(".bybutter.incubator.shop.v1.BatchGetProductsRequest").messageCtor = BatchGetProductsRequest


/** 批量获取商品资源的 API 响应 */
export interface IBatchGetProductsResponse {
    /** 返回的商品资源 */
    products?: readonly $product.IProduct[]
}

export class BatchGetProductsResponse extends $sisyphus.Message<BatchGetProductsResponse> implements IBatchGetProductsResponse {
    products!: readonly $product.Product[]
}
$reflection.root.lookupType(".bybutter.incubator.shop.v1.BatchGetProductsResponse").messageCtor = BatchGetProductsResponse


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

export class ListProductsRequest extends $sisyphus.Message<ListProductsRequest> implements IListProductsRequest {
    filter!: string
    pageSize!: number
    pageToken!: string
    orderBy!: string
}
$reflection.root.lookupType(".bybutter.incubator.shop.v1.ListProductsRequest").messageCtor = ListProductsRequest


/** 列举商品资源的 API 响应 */
export interface IListProductsResponse {
    /** 返回的商品资源 */
    products?: readonly $product.IProduct[]
    /** 下一页所需要的翻页信息 */
    nextPageToken?: string
}

export class ListProductsResponse extends $sisyphus.Message<ListProductsResponse> implements IListProductsResponse {
    products!: readonly $product.Product[]
    nextPageToken!: string
}
$reflection.root.lookupType(".bybutter.incubator.shop.v1.ListProductsResponse").messageCtor = ListProductsResponse