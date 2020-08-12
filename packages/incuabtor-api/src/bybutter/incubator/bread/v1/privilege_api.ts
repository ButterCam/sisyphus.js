import * as $sisyphus from "@sisyphus.js/core"
import * as $protobuf from "protobufjs"
import * as $reflection from "../../../../_reflection"
import * as $privilege from "./privilege"


/** 获取滤镜资源的 API 请求 */
export interface IGetFilterRequest {
    /** 资源名称 */
    name?: string
}

export class GetFilterRequest extends $sisyphus.Message<IGetFilterRequest> implements IGetFilterRequest {
    name!: string
    get $reflection() {
        return GetFilterRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.GetFilterRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): GetFilterRequest {
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

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): GetFilterRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IGetFilterRequest): GetFilterRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("name") && properties.name !== undefined) result.name = properties.name
        return result
    }
}
GetFilterRequest.prototype.name = ""


/**
 * 批量获取滤镜资源的 API 请求
 * (-- api-linter: core::0231::request-parent-field=disabled
 * aip.dev/not-precedent: 全局资源没有 parent. --)
 */
export interface IBatchGetFiltersRequest {
    /** 资源名称 */
    names?: (string[] | null)
}

export class BatchGetFiltersRequest extends $sisyphus.Message<IBatchGetFiltersRequest> implements IBatchGetFiltersRequest {
    names!: (string[] | null)
    get $reflection() {
        return BatchGetFiltersRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetFiltersRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): BatchGetFiltersRequest {
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

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): BatchGetFiltersRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IBatchGetFiltersRequest): BatchGetFiltersRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("names") && properties.names !== undefined) result.names = properties.names
        return result
    }
}
BatchGetFiltersRequest.prototype.names = null


/** 批量获取滤镜资源的 API 响应 */
export interface IBatchGetFiltersResponse {
    /** 获取到的滤镜资源 */
    filters?: ($privilege.IFilter[] | null)
}

export class BatchGetFiltersResponse extends $sisyphus.Message<IBatchGetFiltersResponse> implements IBatchGetFiltersResponse {
    filters!: ($privilege.IFilter[] | null)
    get $reflection() {
        return BatchGetFiltersResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetFiltersResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): BatchGetFiltersResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    if (!result.filters) result.filters = []
                    result.filters.push($privilege.Filter.decodeDelimited(reader))
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): BatchGetFiltersResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IBatchGetFiltersResponse): BatchGetFiltersResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("filters") && properties.filters !== undefined) result.filters = $privilege.Filter.create(properties.filters)
        return result
    }
}
BatchGetFiltersResponse.prototype.filters = null


/**
 * 列举滤镜资源的 API 请求
 * (-- api-linter: core::0132::request-parent-required=disabled
 * aip.dev/not-precedent: 全局资源，没有 parent. --)
 */
export interface IListFiltersRequest {
    /** 请求的每页资源的个数，取值为 0-30，超过范围会自动改为最接近的值 */
    pageSize?: number
    /** 翻页信息 */
    pageToken?: string
    /** 过滤器，遵循 AIP 标准 filter 语法，参考 [AIP-160](https://aip.bybutter.com/160) */
    filter?: string
}

export class ListFiltersRequest extends $sisyphus.Message<IListFiltersRequest> implements IListFiltersRequest {
    pageSize!: number
    pageToken!: string
    filter!: string
    get $reflection() {
        return ListFiltersRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListFiltersRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListFiltersRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.pageSize = reader.int32()
                    break
                case 2:
                    result.pageToken = reader.string()
                    break
                case 3:
                    result.filter = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListFiltersRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListFiltersRequest): ListFiltersRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("pageSize") && properties.pageSize !== undefined) result.pageSize = properties.pageSize
        if(properties.hasOwnProperty("pageToken") && properties.pageToken !== undefined) result.pageToken = properties.pageToken
        if(properties.hasOwnProperty("filter") && properties.filter !== undefined) result.filter = properties.filter
        return result
    }
}
ListFiltersRequest.prototype.pageSize = 0
ListFiltersRequest.prototype.pageToken = ""
ListFiltersRequest.prototype.filter = ""


/** 列举滤镜资源的 API 响应 */
export interface IListFiltersResponse {
    /** 返回的滤镜资源 */
    filters?: ($privilege.IFilter[] | null)
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListFiltersResponse extends $sisyphus.Message<IListFiltersResponse> implements IListFiltersResponse {
    filters!: ($privilege.IFilter[] | null)
    nextPageToken!: string
    get $reflection() {
        return ListFiltersResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListFiltersResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListFiltersResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    if (!result.filters) result.filters = []
                    result.filters.push($privilege.Filter.decodeDelimited(reader))
                    break
                case 2:
                    result.nextPageToken = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListFiltersResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListFiltersResponse): ListFiltersResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("filters") && properties.filters !== undefined) result.filters = $privilege.Filter.create(properties.filters)
        if(properties.hasOwnProperty("nextPageToken") && properties.nextPageToken !== undefined) result.nextPageToken = properties.nextPageToken
        return result
    }
}
ListFiltersResponse.prototype.filters = null
ListFiltersResponse.prototype.nextPageToken = ""


/**
 * 列举滤镜组资源的 API 请求
 * (-- api-linter: core::0132::request-parent-required=disabled
 * aip.dev/not-precedent: 全局资源，没有 parent. --)
 */
export interface IListFilterGroupsRequest {
    /** 请求的每页资源的个数，取值为 0-30，超过范围会自动改为最接近的值 */
    pageSize?: number
    /** 翻页信息 */
    pageToken?: string
    /** 过滤器 */
    filter?: string
}

export class ListFilterGroupsRequest extends $sisyphus.Message<IListFilterGroupsRequest> implements IListFilterGroupsRequest {
    pageSize!: number
    pageToken!: string
    filter!: string
    get $reflection() {
        return ListFilterGroupsRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListFilterGroupsRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListFilterGroupsRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.pageSize = reader.int32()
                    break
                case 2:
                    result.pageToken = reader.string()
                    break
                case 3:
                    result.filter = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListFilterGroupsRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListFilterGroupsRequest): ListFilterGroupsRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("pageSize") && properties.pageSize !== undefined) result.pageSize = properties.pageSize
        if(properties.hasOwnProperty("pageToken") && properties.pageToken !== undefined) result.pageToken = properties.pageToken
        if(properties.hasOwnProperty("filter") && properties.filter !== undefined) result.filter = properties.filter
        return result
    }
}
ListFilterGroupsRequest.prototype.pageSize = 0
ListFilterGroupsRequest.prototype.pageToken = ""
ListFilterGroupsRequest.prototype.filter = ""


/** 列举滤镜资源组的 API 响应 */
export interface IListFilterGroupsResponse {
    /** 返回的滤镜组资源 */
    filterGroups?: ($privilege.IFilterGroup[] | null)
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListFilterGroupsResponse extends $sisyphus.Message<IListFilterGroupsResponse> implements IListFilterGroupsResponse {
    filterGroups!: ($privilege.IFilterGroup[] | null)
    nextPageToken!: string
    get $reflection() {
        return ListFilterGroupsResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListFilterGroupsResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListFilterGroupsResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    if (!result.filterGroups) result.filterGroups = []
                    result.filterGroups.push($privilege.FilterGroup.decodeDelimited(reader))
                    break
                case 2:
                    result.nextPageToken = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListFilterGroupsResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListFilterGroupsResponse): ListFilterGroupsResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("filterGroups") && properties.filterGroups !== undefined) result.filterGroups = $privilege.FilterGroup.create(properties.filterGroups)
        if(properties.hasOwnProperty("nextPageToken") && properties.nextPageToken !== undefined) result.nextPageToken = properties.nextPageToken
        return result
    }
}
ListFilterGroupsResponse.prototype.filterGroups = null
ListFilterGroupsResponse.prototype.nextPageToken = ""


/** 获取边框资源的 API 请求 */
export interface IGetBorderRequest {
    /** 资源名称 */
    name?: string
}

export class GetBorderRequest extends $sisyphus.Message<IGetBorderRequest> implements IGetBorderRequest {
    name!: string
    get $reflection() {
        return GetBorderRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.GetBorderRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): GetBorderRequest {
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

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): GetBorderRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IGetBorderRequest): GetBorderRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("name") && properties.name !== undefined) result.name = properties.name
        return result
    }
}
GetBorderRequest.prototype.name = ""


/**
 * 批量获取边框资源的 API 请求
 * (-- api-linter: core::0231::request-parent-field=disabled
 * aip.dev/not-precedent: 全局资源没有 parent. --)
 */
export interface IBatchGetBordersRequest {
    /** 资源名称 */
    names?: (string[] | null)
}

export class BatchGetBordersRequest extends $sisyphus.Message<IBatchGetBordersRequest> implements IBatchGetBordersRequest {
    names!: (string[] | null)
    get $reflection() {
        return BatchGetBordersRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetBordersRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): BatchGetBordersRequest {
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

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): BatchGetBordersRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IBatchGetBordersRequest): BatchGetBordersRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("names") && properties.names !== undefined) result.names = properties.names
        return result
    }
}
BatchGetBordersRequest.prototype.names = null


/** 批量获取边框资源的 API 响应 */
export interface IBatchGetBordersResponse {
    /** 返回的边框资源 */
    borders?: ($privilege.IBorder[] | null)
}

export class BatchGetBordersResponse extends $sisyphus.Message<IBatchGetBordersResponse> implements IBatchGetBordersResponse {
    borders!: ($privilege.IBorder[] | null)
    get $reflection() {
        return BatchGetBordersResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetBordersResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): BatchGetBordersResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    if (!result.borders) result.borders = []
                    result.borders.push($privilege.Border.decodeDelimited(reader))
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): BatchGetBordersResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IBatchGetBordersResponse): BatchGetBordersResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("borders") && properties.borders !== undefined) result.borders = $privilege.Border.create(properties.borders)
        return result
    }
}
BatchGetBordersResponse.prototype.borders = null


/**
 * 列举获取边框资源的 API 请求
 * (-- api-linter: core::0132::request-parent-required=disabled
 * aip.dev/not-precedent: 全局资源，没有 parent. --)
 */
export interface IListBordersRequest {
    /** 请求的每页资源的个数，取值为 0-30，超过范围会自动改为最接近的值 */
    pageSize?: number
    /** 翻页信息 */
    pageToken?: string
    /** 过滤器 */
    filter?: string
}

export class ListBordersRequest extends $sisyphus.Message<IListBordersRequest> implements IListBordersRequest {
    pageSize!: number
    pageToken!: string
    filter!: string
    get $reflection() {
        return ListBordersRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListBordersRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListBordersRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.pageSize = reader.int32()
                    break
                case 2:
                    result.pageToken = reader.string()
                    break
                case 3:
                    result.filter = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListBordersRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListBordersRequest): ListBordersRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("pageSize") && properties.pageSize !== undefined) result.pageSize = properties.pageSize
        if(properties.hasOwnProperty("pageToken") && properties.pageToken !== undefined) result.pageToken = properties.pageToken
        if(properties.hasOwnProperty("filter") && properties.filter !== undefined) result.filter = properties.filter
        return result
    }
}
ListBordersRequest.prototype.pageSize = 0
ListBordersRequest.prototype.pageToken = ""
ListBordersRequest.prototype.filter = ""


/** 批量获取边框资源的 API 响应 */
export interface IListBordersResponse {
    /** 返回的边框资源 */
    borders?: ($privilege.IBorder[] | null)
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListBordersResponse extends $sisyphus.Message<IListBordersResponse> implements IListBordersResponse {
    borders!: ($privilege.IBorder[] | null)
    nextPageToken!: string
    get $reflection() {
        return ListBordersResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListBordersResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListBordersResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    if (!result.borders) result.borders = []
                    result.borders.push($privilege.Border.decodeDelimited(reader))
                    break
                case 2:
                    result.nextPageToken = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListBordersResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListBordersResponse): ListBordersResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("borders") && properties.borders !== undefined) result.borders = $privilege.Border.create(properties.borders)
        if(properties.hasOwnProperty("nextPageToken") && properties.nextPageToken !== undefined) result.nextPageToken = properties.nextPageToken
        return result
    }
}
ListBordersResponse.prototype.borders = null
ListBordersResponse.prototype.nextPageToken = ""


/**
 * 批量获取边框组资源的 API 请求
 * (-- api-linter: core::0132::request-parent-required=disabled
 * aip.dev/not-precedent: 全局资源，没有 parent. --)
 */
export interface IListBorderGroupsRequest {
    /** 请求的每页资源的个数，取值为 0-30，超过范围会自动改为最接近的值 */
    pageSize?: number
    /** 翻页信息 */
    pageToken?: string
    /** 过滤器 */
    filter?: string
}

export class ListBorderGroupsRequest extends $sisyphus.Message<IListBorderGroupsRequest> implements IListBorderGroupsRequest {
    pageSize!: number
    pageToken!: string
    filter!: string
    get $reflection() {
        return ListBorderGroupsRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListBorderGroupsRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListBorderGroupsRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.pageSize = reader.int32()
                    break
                case 2:
                    result.pageToken = reader.string()
                    break
                case 3:
                    result.filter = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListBorderGroupsRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListBorderGroupsRequest): ListBorderGroupsRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("pageSize") && properties.pageSize !== undefined) result.pageSize = properties.pageSize
        if(properties.hasOwnProperty("pageToken") && properties.pageToken !== undefined) result.pageToken = properties.pageToken
        if(properties.hasOwnProperty("filter") && properties.filter !== undefined) result.filter = properties.filter
        return result
    }
}
ListBorderGroupsRequest.prototype.pageSize = 0
ListBorderGroupsRequest.prototype.pageToken = ""
ListBorderGroupsRequest.prototype.filter = ""


/** 批量获取边框组资源的 API 响应 */
export interface IListBorderGroupsResponse {
    /** 返回的边框组资源 */
    borderGroups?: ($privilege.IBorderGroup[] | null)
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListBorderGroupsResponse extends $sisyphus.Message<IListBorderGroupsResponse> implements IListBorderGroupsResponse {
    borderGroups!: ($privilege.IBorderGroup[] | null)
    nextPageToken!: string
    get $reflection() {
        return ListBorderGroupsResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListBorderGroupsResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListBorderGroupsResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    if (!result.borderGroups) result.borderGroups = []
                    result.borderGroups.push($privilege.BorderGroup.decodeDelimited(reader))
                    break
                case 2:
                    result.nextPageToken = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListBorderGroupsResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListBorderGroupsResponse): ListBorderGroupsResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("borderGroups") && properties.borderGroups !== undefined) result.borderGroups = $privilege.BorderGroup.create(properties.borderGroups)
        if(properties.hasOwnProperty("nextPageToken") && properties.nextPageToken !== undefined) result.nextPageToken = properties.nextPageToken
        return result
    }
}
ListBorderGroupsResponse.prototype.borderGroups = null
ListBorderGroupsResponse.prototype.nextPageToken = ""


/** 获取标签资源的 API 响应 */
export interface IGetLabelRequest {
    /** 资源名 */
    name?: string
}

export class GetLabelRequest extends $sisyphus.Message<IGetLabelRequest> implements IGetLabelRequest {
    name!: string
    get $reflection() {
        return GetLabelRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.GetLabelRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): GetLabelRequest {
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

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): GetLabelRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IGetLabelRequest): GetLabelRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("name") && properties.name !== undefined) result.name = properties.name
        return result
    }
}
GetLabelRequest.prototype.name = ""


/**
 * 批量获取标签资源的 API 请求
 * (-- api-linter: core::0231::request-parent-field=disabled
 * aip.dev/not-precedent: 全局资源没有 parent. --)
 */
export interface IBatchGetLabelsRequest {
    /** 资源名 */
    names?: (string[] | null)
}

export class BatchGetLabelsRequest extends $sisyphus.Message<IBatchGetLabelsRequest> implements IBatchGetLabelsRequest {
    names!: (string[] | null)
    get $reflection() {
        return BatchGetLabelsRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetLabelsRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): BatchGetLabelsRequest {
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

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): BatchGetLabelsRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IBatchGetLabelsRequest): BatchGetLabelsRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("names") && properties.names !== undefined) result.names = properties.names
        return result
    }
}
BatchGetLabelsRequest.prototype.names = null


/** 批量获取标签资源的 API 响应 */
export interface IBatchGetLabelsResponse {
    /** 返回的标签资源 */
    labels?: ($privilege.ILabel[] | null)
}

export class BatchGetLabelsResponse extends $sisyphus.Message<IBatchGetLabelsResponse> implements IBatchGetLabelsResponse {
    labels!: ($privilege.ILabel[] | null)
    get $reflection() {
        return BatchGetLabelsResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetLabelsResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): BatchGetLabelsResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    if (!result.labels) result.labels = []
                    result.labels.push($privilege.Label.decodeDelimited(reader))
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): BatchGetLabelsResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IBatchGetLabelsResponse): BatchGetLabelsResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("labels") && properties.labels !== undefined) result.labels = $privilege.Label.create(properties.labels)
        return result
    }
}
BatchGetLabelsResponse.prototype.labels = null


/**
 * 列举边框组资源的 API 响应
 * (-- api-linter: core::0132::request-parent-required=disabled
 * aip.dev/not-precedent: 全局资源，没有 parent. --)
 */
export interface IListLabelsRequest {
    /** 请求的每页资源的个数，取值为 0-30，超过范围会自动改为最接近的值 */
    pageSize?: number
    /** 翻页信息 */
    pageToken?: string
    /** 过滤器 */
    filter?: string
}

export class ListLabelsRequest extends $sisyphus.Message<IListLabelsRequest> implements IListLabelsRequest {
    pageSize!: number
    pageToken!: string
    filter!: string
    get $reflection() {
        return ListLabelsRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListLabelsRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListLabelsRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.pageSize = reader.int32()
                    break
                case 2:
                    result.pageToken = reader.string()
                    break
                case 3:
                    result.filter = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListLabelsRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListLabelsRequest): ListLabelsRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("pageSize") && properties.pageSize !== undefined) result.pageSize = properties.pageSize
        if(properties.hasOwnProperty("pageToken") && properties.pageToken !== undefined) result.pageToken = properties.pageToken
        if(properties.hasOwnProperty("filter") && properties.filter !== undefined) result.filter = properties.filter
        return result
    }
}
ListLabelsRequest.prototype.pageSize = 0
ListLabelsRequest.prototype.pageToken = ""
ListLabelsRequest.prototype.filter = ""


/** 列举标签资源的 API 响应 */
export interface IListLabelsResponse {
    /** 返回的标签资源 */
    labels?: ($privilege.ILabel[] | null)
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListLabelsResponse extends $sisyphus.Message<IListLabelsResponse> implements IListLabelsResponse {
    labels!: ($privilege.ILabel[] | null)
    nextPageToken!: string
    get $reflection() {
        return ListLabelsResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListLabelsResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListLabelsResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    if (!result.labels) result.labels = []
                    result.labels.push($privilege.Label.decodeDelimited(reader))
                    break
                case 2:
                    result.nextPageToken = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListLabelsResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListLabelsResponse): ListLabelsResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("labels") && properties.labels !== undefined) result.labels = $privilege.Label.create(properties.labels)
        if(properties.hasOwnProperty("nextPageToken") && properties.nextPageToken !== undefined) result.nextPageToken = properties.nextPageToken
        return result
    }
}
ListLabelsResponse.prototype.labels = null
ListLabelsResponse.prototype.nextPageToken = ""


/**
 * 列举标签组资源的 API 请求
 * (-- api-linter: core::0132::request-parent-required=disabled
 * aip.dev/not-precedent: 全局资源，没有 parent. --)
 */
export interface IListLabelGroupsRequest {
    /** 请求的每页资源的个数，取值为 0-30，超过范围会自动改为最接近的值 */
    pageSize?: number
    /** 翻页信息 */
    pageToken?: string
    /** 过滤器 */
    filter?: string
}

export class ListLabelGroupsRequest extends $sisyphus.Message<IListLabelGroupsRequest> implements IListLabelGroupsRequest {
    pageSize!: number
    pageToken!: string
    filter!: string
    get $reflection() {
        return ListLabelGroupsRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListLabelGroupsRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListLabelGroupsRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.pageSize = reader.int32()
                    break
                case 2:
                    result.pageToken = reader.string()
                    break
                case 3:
                    result.filter = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListLabelGroupsRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListLabelGroupsRequest): ListLabelGroupsRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("pageSize") && properties.pageSize !== undefined) result.pageSize = properties.pageSize
        if(properties.hasOwnProperty("pageToken") && properties.pageToken !== undefined) result.pageToken = properties.pageToken
        if(properties.hasOwnProperty("filter") && properties.filter !== undefined) result.filter = properties.filter
        return result
    }
}
ListLabelGroupsRequest.prototype.pageSize = 0
ListLabelGroupsRequest.prototype.pageToken = ""
ListLabelGroupsRequest.prototype.filter = ""


/** 列举标签组资源的 API 响应 */
export interface IListLabelGroupsResponse {
    /** 返回的标签组资源 */
    labelGroups?: ($privilege.ILabelGroup[] | null)
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListLabelGroupsResponse extends $sisyphus.Message<IListLabelGroupsResponse> implements IListLabelGroupsResponse {
    labelGroups!: ($privilege.ILabelGroup[] | null)
    nextPageToken!: string
    get $reflection() {
        return ListLabelGroupsResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListLabelGroupsResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListLabelGroupsResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    if (!result.labelGroups) result.labelGroups = []
                    result.labelGroups.push($privilege.LabelGroup.decodeDelimited(reader))
                    break
                case 2:
                    result.nextPageToken = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListLabelGroupsResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListLabelGroupsResponse): ListLabelGroupsResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("labelGroups") && properties.labelGroups !== undefined) result.labelGroups = $privilege.LabelGroup.create(properties.labelGroups)
        if(properties.hasOwnProperty("nextPageToken") && properties.nextPageToken !== undefined) result.nextPageToken = properties.nextPageToken
        return result
    }
}
ListLabelGroupsResponse.prototype.labelGroups = null
ListLabelGroupsResponse.prototype.nextPageToken = ""


/** 获取贴纸资源的 API 请求 */
export interface IGetStickerRequest {
    /** 资源名 */
    name?: string
}

export class GetStickerRequest extends $sisyphus.Message<IGetStickerRequest> implements IGetStickerRequest {
    name!: string
    get $reflection() {
        return GetStickerRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.GetStickerRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): GetStickerRequest {
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

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): GetStickerRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IGetStickerRequest): GetStickerRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("name") && properties.name !== undefined) result.name = properties.name
        return result
    }
}
GetStickerRequest.prototype.name = ""


/**
 * 批量获取贴纸资源的 API 请求
 * (-- api-linter: core::0231::request-parent-field=disabled
 * aip.dev/not-precedent: 全局资源没有 parent. --)
 */
export interface IBatchGetStickersRequest {
    /** 资源名 */
    names?: (string[] | null)
}

export class BatchGetStickersRequest extends $sisyphus.Message<IBatchGetStickersRequest> implements IBatchGetStickersRequest {
    names!: (string[] | null)
    get $reflection() {
        return BatchGetStickersRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetStickersRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): BatchGetStickersRequest {
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

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): BatchGetStickersRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IBatchGetStickersRequest): BatchGetStickersRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("names") && properties.names !== undefined) result.names = properties.names
        return result
    }
}
BatchGetStickersRequest.prototype.names = null


/** 批量获取贴纸资源的 API 响应 */
export interface IBatchGetStickersResponse {
    /** 返回的贴纸资源 */
    stickers?: ($privilege.ISticker[] | null)
}

export class BatchGetStickersResponse extends $sisyphus.Message<IBatchGetStickersResponse> implements IBatchGetStickersResponse {
    stickers!: ($privilege.ISticker[] | null)
    get $reflection() {
        return BatchGetStickersResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetStickersResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): BatchGetStickersResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    if (!result.stickers) result.stickers = []
                    result.stickers.push($privilege.Sticker.decodeDelimited(reader))
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): BatchGetStickersResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IBatchGetStickersResponse): BatchGetStickersResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("stickers") && properties.stickers !== undefined) result.stickers = $privilege.Sticker.create(properties.stickers)
        return result
    }
}
BatchGetStickersResponse.prototype.stickers = null


/**
 * 列举贴纸资源的 API 请求
 * (-- api-linter: core::0132::request-parent-required=disabled
 * aip.dev/not-precedent: 全局资源，没有 parent. --)
 */
export interface IListStickersRequest {
    /** 请求的每页资源的个数，取值为 0-30，超过范围会自动改为最接近的值 */
    pageSize?: number
    /** 翻页信息 */
    pageToken?: string
    /** 过滤器 */
    filter?: string
}

export class ListStickersRequest extends $sisyphus.Message<IListStickersRequest> implements IListStickersRequest {
    pageSize!: number
    pageToken!: string
    filter!: string
    get $reflection() {
        return ListStickersRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListStickersRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListStickersRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.pageSize = reader.int32()
                    break
                case 2:
                    result.pageToken = reader.string()
                    break
                case 3:
                    result.filter = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListStickersRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListStickersRequest): ListStickersRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("pageSize") && properties.pageSize !== undefined) result.pageSize = properties.pageSize
        if(properties.hasOwnProperty("pageToken") && properties.pageToken !== undefined) result.pageToken = properties.pageToken
        if(properties.hasOwnProperty("filter") && properties.filter !== undefined) result.filter = properties.filter
        return result
    }
}
ListStickersRequest.prototype.pageSize = 0
ListStickersRequest.prototype.pageToken = ""
ListStickersRequest.prototype.filter = ""


/** 列举贴纸资源的 API 响应 */
export interface IListStickersResponse {
    /** 返回的贴纸资源 */
    stickers?: ($privilege.ISticker[] | null)
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListStickersResponse extends $sisyphus.Message<IListStickersResponse> implements IListStickersResponse {
    stickers!: ($privilege.ISticker[] | null)
    nextPageToken!: string
    get $reflection() {
        return ListStickersResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListStickersResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListStickersResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    if (!result.stickers) result.stickers = []
                    result.stickers.push($privilege.Sticker.decodeDelimited(reader))
                    break
                case 2:
                    result.nextPageToken = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListStickersResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListStickersResponse): ListStickersResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("stickers") && properties.stickers !== undefined) result.stickers = $privilege.Sticker.create(properties.stickers)
        if(properties.hasOwnProperty("nextPageToken") && properties.nextPageToken !== undefined) result.nextPageToken = properties.nextPageToken
        return result
    }
}
ListStickersResponse.prototype.stickers = null
ListStickersResponse.prototype.nextPageToken = ""


/**
 * 列举贴纸组资源的 API 请求
 * (-- api-linter: core::0132::request-parent-required=disabled
 * aip.dev/not-precedent: 全局资源，没有 parent. --)
 */
export interface IListStickerGroupsRequest {
    /** 请求的每页资源的个数，取值为 0-30，超过范围会自动改为最接近的值 */
    pageSize?: number
    /** 翻页信息 */
    pageToken?: string
    /** 过滤器 */
    filter?: string
}

export class ListStickerGroupsRequest extends $sisyphus.Message<IListStickerGroupsRequest> implements IListStickerGroupsRequest {
    pageSize!: number
    pageToken!: string
    filter!: string
    get $reflection() {
        return ListStickerGroupsRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListStickerGroupsRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListStickerGroupsRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.pageSize = reader.int32()
                    break
                case 2:
                    result.pageToken = reader.string()
                    break
                case 3:
                    result.filter = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListStickerGroupsRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListStickerGroupsRequest): ListStickerGroupsRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("pageSize") && properties.pageSize !== undefined) result.pageSize = properties.pageSize
        if(properties.hasOwnProperty("pageToken") && properties.pageToken !== undefined) result.pageToken = properties.pageToken
        if(properties.hasOwnProperty("filter") && properties.filter !== undefined) result.filter = properties.filter
        return result
    }
}
ListStickerGroupsRequest.prototype.pageSize = 0
ListStickerGroupsRequest.prototype.pageToken = ""
ListStickerGroupsRequest.prototype.filter = ""


/** 列举贴纸组资源的 API 响应 */
export interface IListStickerGroupsResponse {
    /** 下一页的翻页信息 */
    stickerGroups?: ($privilege.IStickerGroup[] | null)
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListStickerGroupsResponse extends $sisyphus.Message<IListStickerGroupsResponse> implements IListStickerGroupsResponse {
    stickerGroups!: ($privilege.IStickerGroup[] | null)
    nextPageToken!: string
    get $reflection() {
        return ListStickerGroupsResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListStickerGroupsResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListStickerGroupsResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    if (!result.stickerGroups) result.stickerGroups = []
                    result.stickerGroups.push($privilege.StickerGroup.decodeDelimited(reader))
                    break
                case 2:
                    result.nextPageToken = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListStickerGroupsResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListStickerGroupsResponse): ListStickerGroupsResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("stickerGroups") && properties.stickerGroups !== undefined) result.stickerGroups = $privilege.StickerGroup.create(properties.stickerGroups)
        if(properties.hasOwnProperty("nextPageToken") && properties.nextPageToken !== undefined) result.nextPageToken = properties.nextPageToken
        return result
    }
}
ListStickerGroupsResponse.prototype.stickerGroups = null
ListStickerGroupsResponse.prototype.nextPageToken = ""


/** 获取音乐资源的 API 请求 */
export interface IGetMusicRequest {
    /** 资源名 */
    name?: string
}

export class GetMusicRequest extends $sisyphus.Message<IGetMusicRequest> implements IGetMusicRequest {
    name!: string
    get $reflection() {
        return GetMusicRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.GetMusicRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): GetMusicRequest {
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

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): GetMusicRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IGetMusicRequest): GetMusicRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("name") && properties.name !== undefined) result.name = properties.name
        return result
    }
}
GetMusicRequest.prototype.name = ""


/**
 * 批量获取音乐资源的 API 请求
 * (-- api-linter: core::0231::request-parent-field=disabled
 * aip.dev/not-precedent: 全局资源没有 parent. --)
 */
export interface IBatchGetMusicRequest {
    /** 资源名 */
    names?: (string[] | null)
}

export class BatchGetMusicRequest extends $sisyphus.Message<IBatchGetMusicRequest> implements IBatchGetMusicRequest {
    names!: (string[] | null)
    get $reflection() {
        return BatchGetMusicRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetMusicRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): BatchGetMusicRequest {
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

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): BatchGetMusicRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IBatchGetMusicRequest): BatchGetMusicRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("names") && properties.names !== undefined) result.names = properties.names
        return result
    }
}
BatchGetMusicRequest.prototype.names = null


/**
 * 批量获取音乐资源的 API 响应
 * (-- api-linter: core::0231::response-resource-field=disabled
 * aip.dev/not-precedent: Music 为不可数名词，无复数形式. --)
 */
export interface IBatchGetMusicResponse {
    /** 返回的音乐资源 */
    music?: ($privilege.IMusic[] | null)
}

export class BatchGetMusicResponse extends $sisyphus.Message<IBatchGetMusicResponse> implements IBatchGetMusicResponse {
    music!: ($privilege.IMusic[] | null)
    get $reflection() {
        return BatchGetMusicResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetMusicResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): BatchGetMusicResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    if (!result.music) result.music = []
                    result.music.push($privilege.Music.decodeDelimited(reader))
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): BatchGetMusicResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IBatchGetMusicResponse): BatchGetMusicResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("music") && properties.music !== undefined) result.music = $privilege.Music.create(properties.music)
        return result
    }
}
BatchGetMusicResponse.prototype.music = null


/**
 * 列举音乐资源的 API 请求
 * (-- api-linter: core::0132::request-parent-required=disabled
 * aip.dev/not-precedent: 全局资源，没有 parent. --)
 */
export interface IListMusicRequest {
    /** 请求的每页资源的个数，取值为 0-30，超过范围会自动改为最接近的值 */
    pageSize?: number
    /** 翻页信息 */
    pageToken?: string
    /** 过滤器 */
    filter?: string
}

export class ListMusicRequest extends $sisyphus.Message<IListMusicRequest> implements IListMusicRequest {
    pageSize!: number
    pageToken!: string
    filter!: string
    get $reflection() {
        return ListMusicRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListMusicRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListMusicRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.pageSize = reader.int32()
                    break
                case 2:
                    result.pageToken = reader.string()
                    break
                case 3:
                    result.filter = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListMusicRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListMusicRequest): ListMusicRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("pageSize") && properties.pageSize !== undefined) result.pageSize = properties.pageSize
        if(properties.hasOwnProperty("pageToken") && properties.pageToken !== undefined) result.pageToken = properties.pageToken
        if(properties.hasOwnProperty("filter") && properties.filter !== undefined) result.filter = properties.filter
        return result
    }
}
ListMusicRequest.prototype.pageSize = 0
ListMusicRequest.prototype.pageToken = ""
ListMusicRequest.prototype.filter = ""


/** 列举音乐资源的 API 响应 */
export interface IListMusicResponse {
    /** 返回的音乐资源 */
    music?: ($privilege.IMusic[] | null)
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListMusicResponse extends $sisyphus.Message<IListMusicResponse> implements IListMusicResponse {
    music!: ($privilege.IMusic[] | null)
    nextPageToken!: string
    get $reflection() {
        return ListMusicResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListMusicResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListMusicResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    if (!result.music) result.music = []
                    result.music.push($privilege.Music.decodeDelimited(reader))
                    break
                case 2:
                    result.nextPageToken = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListMusicResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListMusicResponse): ListMusicResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("music") && properties.music !== undefined) result.music = $privilege.Music.create(properties.music)
        if(properties.hasOwnProperty("nextPageToken") && properties.nextPageToken !== undefined) result.nextPageToken = properties.nextPageToken
        return result
    }
}
ListMusicResponse.prototype.music = null
ListMusicResponse.prototype.nextPageToken = ""


/**
 * 列举音乐组资源的 API 请求
 * (-- api-linter: core::0132::request-parent-required=disabled
 * aip.dev/not-precedent: 全局资源，没有 parent. --)
 */
export interface IListMusicGroupsRequest {
    /** 请求的每页资源的个数，取值为 0-30，超过范围会自动改为最接近的值 */
    pageSize?: number
    /** 翻页信息 */
    pageToken?: string
    /** 过滤器 */
    filter?: string
}

export class ListMusicGroupsRequest extends $sisyphus.Message<IListMusicGroupsRequest> implements IListMusicGroupsRequest {
    pageSize!: number
    pageToken!: string
    filter!: string
    get $reflection() {
        return ListMusicGroupsRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListMusicGroupsRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListMusicGroupsRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.pageSize = reader.int32()
                    break
                case 2:
                    result.pageToken = reader.string()
                    break
                case 3:
                    result.filter = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListMusicGroupsRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListMusicGroupsRequest): ListMusicGroupsRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("pageSize") && properties.pageSize !== undefined) result.pageSize = properties.pageSize
        if(properties.hasOwnProperty("pageToken") && properties.pageToken !== undefined) result.pageToken = properties.pageToken
        if(properties.hasOwnProperty("filter") && properties.filter !== undefined) result.filter = properties.filter
        return result
    }
}
ListMusicGroupsRequest.prototype.pageSize = 0
ListMusicGroupsRequest.prototype.pageToken = ""
ListMusicGroupsRequest.prototype.filter = ""


/** 列举音乐组资源的 API 响应 */
export interface IListMusicGroupsResponse {
    /** 返回的音乐组资源 */
    musicGroups?: ($privilege.IMusicGroup[] | null)
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListMusicGroupsResponse extends $sisyphus.Message<IListMusicGroupsResponse> implements IListMusicGroupsResponse {
    musicGroups!: ($privilege.IMusicGroup[] | null)
    nextPageToken!: string
    get $reflection() {
        return ListMusicGroupsResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListMusicGroupsResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListMusicGroupsResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    if (!result.musicGroups) result.musicGroups = []
                    result.musicGroups.push($privilege.MusicGroup.decodeDelimited(reader))
                    break
                case 2:
                    result.nextPageToken = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListMusicGroupsResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListMusicGroupsResponse): ListMusicGroupsResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("musicGroups") && properties.musicGroups !== undefined) result.musicGroups = $privilege.MusicGroup.create(properties.musicGroups)
        if(properties.hasOwnProperty("nextPageToken") && properties.nextPageToken !== undefined) result.nextPageToken = properties.nextPageToken
        return result
    }
}
ListMusicGroupsResponse.prototype.musicGroups = null
ListMusicGroupsResponse.prototype.nextPageToken = ""


/** 获取音效资源的 API 请求 */
export interface IGetSoundRequest {
    /** 资源名 */
    name?: string
}

export class GetSoundRequest extends $sisyphus.Message<IGetSoundRequest> implements IGetSoundRequest {
    name!: string
    get $reflection() {
        return GetSoundRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.GetSoundRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): GetSoundRequest {
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

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): GetSoundRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IGetSoundRequest): GetSoundRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("name") && properties.name !== undefined) result.name = properties.name
        return result
    }
}
GetSoundRequest.prototype.name = ""


/**
 * 批量获取音效资源的 API 请求
 * (-- api-linter: core::0231::request-parent-field=disabled
 * aip.dev/not-precedent: 全局资源没有 parent. --)
 */
export interface IBatchGetSoundsRequest {
    /** 资源名 */
    names?: (string[] | null)
}

export class BatchGetSoundsRequest extends $sisyphus.Message<IBatchGetSoundsRequest> implements IBatchGetSoundsRequest {
    names!: (string[] | null)
    get $reflection() {
        return BatchGetSoundsRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetSoundsRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): BatchGetSoundsRequest {
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

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): BatchGetSoundsRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IBatchGetSoundsRequest): BatchGetSoundsRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("names") && properties.names !== undefined) result.names = properties.names
        return result
    }
}
BatchGetSoundsRequest.prototype.names = null


/** 批量获取音效资源的 API 响应 */
export interface IBatchGetSoundsResponse {
    /** 返回的音效资源 */
    sounds?: ($privilege.ISound[] | null)
}

export class BatchGetSoundsResponse extends $sisyphus.Message<IBatchGetSoundsResponse> implements IBatchGetSoundsResponse {
    sounds!: ($privilege.ISound[] | null)
    get $reflection() {
        return BatchGetSoundsResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetSoundsResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): BatchGetSoundsResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    if (!result.sounds) result.sounds = []
                    result.sounds.push($privilege.Sound.decodeDelimited(reader))
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): BatchGetSoundsResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IBatchGetSoundsResponse): BatchGetSoundsResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("sounds") && properties.sounds !== undefined) result.sounds = $privilege.Sound.create(properties.sounds)
        return result
    }
}
BatchGetSoundsResponse.prototype.sounds = null


/**
 * 列举音效的 API 请求
 * (-- api-linter: core::0132::request-parent-required=disabled
 * aip.dev/not-precedent: 全局资源没有 parent. --)
 */
export interface IListSoundsRequest {
    /** 请求的每页资源的个数，取值为 0-30，超过范围会自动改为最接近的值 */
    pageSize?: number
    /** 翻页信息 */
    pageToken?: string
    /** 过滤器 */
    filter?: string
}

export class ListSoundsRequest extends $sisyphus.Message<IListSoundsRequest> implements IListSoundsRequest {
    pageSize!: number
    pageToken!: string
    filter!: string
    get $reflection() {
        return ListSoundsRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListSoundsRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListSoundsRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.pageSize = reader.int32()
                    break
                case 2:
                    result.pageToken = reader.string()
                    break
                case 3:
                    result.filter = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListSoundsRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListSoundsRequest): ListSoundsRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("pageSize") && properties.pageSize !== undefined) result.pageSize = properties.pageSize
        if(properties.hasOwnProperty("pageToken") && properties.pageToken !== undefined) result.pageToken = properties.pageToken
        if(properties.hasOwnProperty("filter") && properties.filter !== undefined) result.filter = properties.filter
        return result
    }
}
ListSoundsRequest.prototype.pageSize = 0
ListSoundsRequest.prototype.pageToken = ""
ListSoundsRequest.prototype.filter = ""


/** 列举音效资源的 API 响应 */
export interface IListSoundsResponse {
    /** 返回的音效资源 */
    sounds?: ($privilege.ISound[] | null)
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListSoundsResponse extends $sisyphus.Message<IListSoundsResponse> implements IListSoundsResponse {
    sounds!: ($privilege.ISound[] | null)
    nextPageToken!: string
    get $reflection() {
        return ListSoundsResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListSoundsResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListSoundsResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    if (!result.sounds) result.sounds = []
                    result.sounds.push($privilege.Sound.decodeDelimited(reader))
                    break
                case 2:
                    result.nextPageToken = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListSoundsResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListSoundsResponse): ListSoundsResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("sounds") && properties.sounds !== undefined) result.sounds = $privilege.Sound.create(properties.sounds)
        if(properties.hasOwnProperty("nextPageToken") && properties.nextPageToken !== undefined) result.nextPageToken = properties.nextPageToken
        return result
    }
}
ListSoundsResponse.prototype.sounds = null
ListSoundsResponse.prototype.nextPageToken = ""


/**
 * 列举音效组资源的 API 请求
 * (-- api-linter: core::0132::request-parent-field=disabled
 * aip.dev/not-precedent: 全局资源没有 parent. --)
 */
export interface IListSoundGroupsRequest {
    /** 请求的每页资源的个数，取值为 0-30，超过范围会自动改为最接近的值 */
    pageSize?: number
    /** 翻页信息 */
    pageToken?: string
    /** 过滤器 */
    filter?: string
}

export class ListSoundGroupsRequest extends $sisyphus.Message<IListSoundGroupsRequest> implements IListSoundGroupsRequest {
    pageSize!: number
    pageToken!: string
    filter!: string
    get $reflection() {
        return ListSoundGroupsRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListSoundGroupsRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListSoundGroupsRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.pageSize = reader.int32()
                    break
                case 2:
                    result.pageToken = reader.string()
                    break
                case 3:
                    result.filter = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListSoundGroupsRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListSoundGroupsRequest): ListSoundGroupsRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("pageSize") && properties.pageSize !== undefined) result.pageSize = properties.pageSize
        if(properties.hasOwnProperty("pageToken") && properties.pageToken !== undefined) result.pageToken = properties.pageToken
        if(properties.hasOwnProperty("filter") && properties.filter !== undefined) result.filter = properties.filter
        return result
    }
}
ListSoundGroupsRequest.prototype.pageSize = 0
ListSoundGroupsRequest.prototype.pageToken = ""
ListSoundGroupsRequest.prototype.filter = ""


/** 列举音效组资源的 API 响应 */
export interface IListSoundGroupsResponse {
    /** 返回的音效组资源 */
    soundGroups?: ($privilege.ISoundGroup[] | null)
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListSoundGroupsResponse extends $sisyphus.Message<IListSoundGroupsResponse> implements IListSoundGroupsResponse {
    soundGroups!: ($privilege.ISoundGroup[] | null)
    nextPageToken!: string
    get $reflection() {
        return ListSoundGroupsResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListSoundGroupsResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListSoundGroupsResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    if (!result.soundGroups) result.soundGroups = []
                    result.soundGroups.push($privilege.SoundGroup.decodeDelimited(reader))
                    break
                case 2:
                    result.nextPageToken = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListSoundGroupsResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListSoundGroupsResponse): ListSoundGroupsResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("soundGroups") && properties.soundGroups !== undefined) result.soundGroups = $privilege.SoundGroup.create(properties.soundGroups)
        if(properties.hasOwnProperty("nextPageToken") && properties.nextPageToken !== undefined) result.nextPageToken = properties.nextPageToken
        return result
    }
}
ListSoundGroupsResponse.prototype.soundGroups = null
ListSoundGroupsResponse.prototype.nextPageToken = ""


/** 获取会员资源的请求 */
export interface IGetMembershipRequest {
    /** 资源名称 */
    name?: string
}

export class GetMembershipRequest extends $sisyphus.Message<IGetMembershipRequest> implements IGetMembershipRequest {
    name!: string
    get $reflection() {
        return GetMembershipRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.GetMembershipRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): GetMembershipRequest {
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

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): GetMembershipRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IGetMembershipRequest): GetMembershipRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("name") && properties.name !== undefined) result.name = properties.name
        return result
    }
}
GetMembershipRequest.prototype.name = ""


/**
 * 批量获取会员资源的 API 请求
 * (-- api-linter: core::0231::response-resource-field=disabled
 * aip.dev/not-precedent: 全局资源没有 parent. --)
 */
export interface IBatchGetMembershipsRequest {
    /** 资源名称 */
    names?: (string[] | null)
}

export class BatchGetMembershipsRequest extends $sisyphus.Message<IBatchGetMembershipsRequest> implements IBatchGetMembershipsRequest {
    names!: (string[] | null)
    get $reflection() {
        return BatchGetMembershipsRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetMembershipsRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): BatchGetMembershipsRequest {
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

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): BatchGetMembershipsRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IBatchGetMembershipsRequest): BatchGetMembershipsRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("names") && properties.names !== undefined) result.names = properties.names
        return result
    }
}
BatchGetMembershipsRequest.prototype.names = null


/** 批量获取会员资源的 API 响应 */
export interface IBatchGetMembershipsResponse {
    /** 返回的会员资源 */
    memberships?: ($privilege.IMembership[] | null)
}

export class BatchGetMembershipsResponse extends $sisyphus.Message<IBatchGetMembershipsResponse> implements IBatchGetMembershipsResponse {
    memberships!: ($privilege.IMembership[] | null)
    get $reflection() {
        return BatchGetMembershipsResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetMembershipsResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): BatchGetMembershipsResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    if (!result.memberships) result.memberships = []
                    result.memberships.push($privilege.Membership.decodeDelimited(reader))
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): BatchGetMembershipsResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IBatchGetMembershipsResponse): BatchGetMembershipsResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("memberships") && properties.memberships !== undefined) result.memberships = $privilege.Membership.create(properties.memberships)
        return result
    }
}
BatchGetMembershipsResponse.prototype.memberships = null


/**
 * 列举会员资源的 API 请求
 * (-- api-linter: core::0132::request-parent-required=disabled
 * aip.dev/not-precedent: 全局资源没有 parent. --)
 */
export interface IListMembershipsRequest {
    /** 请求的每页资源的个数，取值为 0-30，超过范围会自动改为最接近的值 */
    pageSize?: number
    /** 翻页信息 */
    pageToken?: string
    /** 过滤器 */
    filter?: string
}

export class ListMembershipsRequest extends $sisyphus.Message<IListMembershipsRequest> implements IListMembershipsRequest {
    pageSize!: number
    pageToken!: string
    filter!: string
    get $reflection() {
        return ListMembershipsRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListMembershipsRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListMembershipsRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.pageSize = reader.int32()
                    break
                case 2:
                    result.pageToken = reader.string()
                    break
                case 3:
                    result.filter = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListMembershipsRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListMembershipsRequest): ListMembershipsRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("pageSize") && properties.pageSize !== undefined) result.pageSize = properties.pageSize
        if(properties.hasOwnProperty("pageToken") && properties.pageToken !== undefined) result.pageToken = properties.pageToken
        if(properties.hasOwnProperty("filter") && properties.filter !== undefined) result.filter = properties.filter
        return result
    }
}
ListMembershipsRequest.prototype.pageSize = 0
ListMembershipsRequest.prototype.pageToken = ""
ListMembershipsRequest.prototype.filter = ""


/** 列举会员资源的 API 响应 */
export interface IListMembershipsResponse {
    /** 返回的会员资源 */
    memberships?: ($privilege.IMembership[] | null)
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListMembershipsResponse extends $sisyphus.Message<IListMembershipsResponse> implements IListMembershipsResponse {
    memberships!: ($privilege.IMembership[] | null)
    nextPageToken!: string
    get $reflection() {
        return ListMembershipsResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListMembershipsResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListMembershipsResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    if (!result.memberships) result.memberships = []
                    result.memberships.push($privilege.Membership.decodeDelimited(reader))
                    break
                case 2:
                    result.nextPageToken = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListMembershipsResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListMembershipsResponse): ListMembershipsResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("memberships") && properties.memberships !== undefined) result.memberships = $privilege.Membership.create(properties.memberships)
        if(properties.hasOwnProperty("nextPageToken") && properties.nextPageToken !== undefined) result.nextPageToken = properties.nextPageToken
        return result
    }
}
ListMembershipsResponse.prototype.memberships = null
ListMembershipsResponse.prototype.nextPageToken = ""

//Service: .bybutter.incubator.bread.v1.PrivilegeApi