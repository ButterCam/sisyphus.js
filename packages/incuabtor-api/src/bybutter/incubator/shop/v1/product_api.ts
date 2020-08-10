import * as $sisyphus from "@sisyphus.js/core"
import * as $protobuf from "protobufjs"
import * as $reflection from "../../../../_reflection"
import * as $product from "./product"


/** 获取商品资源的 API 请求 */
export interface IGetProductRequest {
    /** 商品的资源名 */
    name?: string
}

export class GetProductRequest extends $sisyphus.Message<IGetProductRequest> implements IGetProductRequest {
    name!: string
    get $reflection() {
        return GetProductRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.shop.v1.GetProductRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): GetProductRequest {
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

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): GetProductRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IGetProductRequest): GetProductRequest {
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
GetProductRequest.prototype.name = ""


/**
 * 批量获取商品资源的 API 请求
 * (-- api-linter: core::0231::request-parent-field=disabled
 * aip.dev/not-precedent: 商品为全局资源，没有 parent. --)
 */
export interface IBatchGetProductsRequest {
    /** 商品的资源名 */
    names?: (string[] | null)
}

export class BatchGetProductsRequest extends $sisyphus.Message<IBatchGetProductsRequest> implements IBatchGetProductsRequest {
    names!: (string[] | null)
    get $reflection() {
        return BatchGetProductsRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.shop.v1.BatchGetProductsRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): BatchGetProductsRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    if (!result.names) result.names = []
                    result.names.push(reader.string())
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): BatchGetProductsRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IBatchGetProductsRequest): BatchGetProductsRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "names":
                    result[key] = String(properties[key])
                    break
            }
        }
        return result
    }
}
BatchGetProductsRequest.prototype.names = null


/** 批量获取商品资源的 API 响应 */
export interface IBatchGetProductsResponse {
    /** 返回的商品资源 */
    products?: ($product.IProduct[] | null)
}

export class BatchGetProductsResponse extends $sisyphus.Message<IBatchGetProductsResponse> implements IBatchGetProductsResponse {
    products!: ($product.IProduct[] | null)
    get $reflection() {
        return BatchGetProductsResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.shop.v1.BatchGetProductsResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): BatchGetProductsResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    if (!result.products) result.products = []
                    result.products.push($product.Product.decodeDelimited(reader))
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): BatchGetProductsResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IBatchGetProductsResponse): BatchGetProductsResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "products":
                    result[key] = $product.Product.create(properties[key])
                    break
            }
        }
        return result
    }
}
BatchGetProductsResponse.prototype.products = null


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

export class ListProductsRequest extends $sisyphus.Message<IListProductsRequest> implements IListProductsRequest {
    filter!: string
    pageSize!: number
    pageToken!: string
    orderBy!: string
    get $reflection() {
        return ListProductsRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.shop.v1.ListProductsRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListProductsRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.filter = reader.string()
                    break
                case 2:
                    result.pageSize = reader.int32()
                    break
                case 3:
                    result.pageToken = reader.string()
                    break
                case 4:
                    result.orderBy = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListProductsRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListProductsRequest): ListProductsRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "filter":
                    result[key] = String(properties[key])
                    break
                case "pageSize":
                    result[key] = Number(properties[key])
                    break
                case "pageToken":
                    result[key] = String(properties[key])
                    break
                case "orderBy":
                    result[key] = String(properties[key])
                    break
            }
        }
        return result
    }
}
ListProductsRequest.prototype.filter = ""
ListProductsRequest.prototype.pageSize = 0
ListProductsRequest.prototype.pageToken = ""
ListProductsRequest.prototype.orderBy = ""


/** 列举商品资源的 API 响应 */
export interface IListProductsResponse {
    /** 返回的商品资源 */
    products?: ($product.IProduct[] | null)
    /** 下一页所需要的翻页信息 */
    nextPageToken?: string
}

export class ListProductsResponse extends $sisyphus.Message<IListProductsResponse> implements IListProductsResponse {
    products!: ($product.IProduct[] | null)
    nextPageToken!: string
    get $reflection() {
        return ListProductsResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.shop.v1.ListProductsResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListProductsResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    if (!result.products) result.products = []
                    result.products.push($product.Product.decodeDelimited(reader))
                    break
                case 2:
                    result.nextPageToken = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListProductsResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListProductsResponse): ListProductsResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "products":
                    result[key] = $product.Product.create(properties[key])
                    break
                case "nextPageToken":
                    result[key] = String(properties[key])
                    break
            }
        }
        return result
    }
}
ListProductsResponse.prototype.products = null
ListProductsResponse.prototype.nextPageToken = ""