import * as $protobuf from "protobufjs"
import * as $reflection from "../../../../_reflection"
import * as $privilege from "./privilege"
import * as $sisyphus from "@sisyphus.js/core"


/** 获取滤镜资源的 API 请求 */
export interface IGetFilterRequest {
    /** 资源名称 */
    name?: string
}

export class GetFilterRequest extends $protobuf.Message<GetFilterRequest> implements IGetFilterRequest {
    name!: string

    get $type() {
        return GetFilterRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.GetFilterRequest")
}

GetFilterRequest.$type.generatedObject = GetFilterRequest
GetFilterRequest.prototype.name = GetFilterRequest.$type.fieldsById[1].defaultValue


/**
 * 批量获取滤镜资源的 API 请求
 * (-- api-linter: core::0231::request-parent-field=disabled
 * aip.dev/not-precedent: 全局资源没有 parent. --)
 */
export interface IBatchGetFiltersRequest {
    /** 资源名称 */
    names?: readonly string[]
}

export class BatchGetFiltersRequest extends $protobuf.Message<BatchGetFiltersRequest> implements IBatchGetFiltersRequest {
    names!: readonly string[]

    get $type() {
        return BatchGetFiltersRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetFiltersRequest")
}

BatchGetFiltersRequest.$type.generatedObject = BatchGetFiltersRequest
BatchGetFiltersRequest.prototype.names = BatchGetFiltersRequest.$type.fieldsById[1].defaultValue


/** 批量获取滤镜资源的 API 响应 */
export interface IBatchGetFiltersResponse {
    /** 获取到的滤镜资源 */
    filters?: readonly $privilege.IFilter[]
}

export class BatchGetFiltersResponse extends $protobuf.Message<BatchGetFiltersResponse> implements IBatchGetFiltersResponse {
    filters!: readonly $privilege.Filter[]

    get $type() {
        return BatchGetFiltersResponse.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetFiltersResponse")
}

BatchGetFiltersResponse.$type.generatedObject = BatchGetFiltersResponse
BatchGetFiltersResponse.prototype.filters = BatchGetFiltersResponse.$type.fieldsById[1].defaultValue


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

export class ListFiltersRequest extends $protobuf.Message<ListFiltersRequest> implements IListFiltersRequest {
    pageSize!: number
    pageToken!: string
    filter!: string

    get $type() {
        return ListFiltersRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListFiltersRequest")
}

ListFiltersRequest.$type.generatedObject = ListFiltersRequest
ListFiltersRequest.prototype.pageSize = ListFiltersRequest.$type.fieldsById[1].defaultValue
ListFiltersRequest.prototype.pageToken = ListFiltersRequest.$type.fieldsById[2].defaultValue
ListFiltersRequest.prototype.filter = ListFiltersRequest.$type.fieldsById[3].defaultValue


/** 列举滤镜资源的 API 响应 */
export interface IListFiltersResponse {
    /** 返回的滤镜资源 */
    filters?: readonly $privilege.IFilter[]
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListFiltersResponse extends $protobuf.Message<ListFiltersResponse> implements IListFiltersResponse {
    filters!: readonly $privilege.Filter[]
    nextPageToken!: string

    get $type() {
        return ListFiltersResponse.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListFiltersResponse")
}

ListFiltersResponse.$type.generatedObject = ListFiltersResponse
ListFiltersResponse.prototype.filters = ListFiltersResponse.$type.fieldsById[1].defaultValue
ListFiltersResponse.prototype.nextPageToken = ListFiltersResponse.$type.fieldsById[2].defaultValue


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

export class ListFilterGroupsRequest extends $protobuf.Message<ListFilterGroupsRequest> implements IListFilterGroupsRequest {
    pageSize!: number
    pageToken!: string
    filter!: string

    get $type() {
        return ListFilterGroupsRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListFilterGroupsRequest")
}

ListFilterGroupsRequest.$type.generatedObject = ListFilterGroupsRequest
ListFilterGroupsRequest.prototype.pageSize = ListFilterGroupsRequest.$type.fieldsById[1].defaultValue
ListFilterGroupsRequest.prototype.pageToken = ListFilterGroupsRequest.$type.fieldsById[2].defaultValue
ListFilterGroupsRequest.prototype.filter = ListFilterGroupsRequest.$type.fieldsById[3].defaultValue


/** 列举滤镜资源组的 API 响应 */
export interface IListFilterGroupsResponse {
    /** 返回的滤镜组资源 */
    filterGroups?: readonly $privilege.IFilterGroup[]
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListFilterGroupsResponse extends $protobuf.Message<ListFilterGroupsResponse> implements IListFilterGroupsResponse {
    filterGroups!: readonly $privilege.FilterGroup[]
    nextPageToken!: string

    get $type() {
        return ListFilterGroupsResponse.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListFilterGroupsResponse")
}

ListFilterGroupsResponse.$type.generatedObject = ListFilterGroupsResponse
ListFilterGroupsResponse.prototype.filterGroups = ListFilterGroupsResponse.$type.fieldsById[1].defaultValue
ListFilterGroupsResponse.prototype.nextPageToken = ListFilterGroupsResponse.$type.fieldsById[2].defaultValue


/** 获取边框资源的 API 请求 */
export interface IGetBorderRequest {
    /** 资源名称 */
    name?: string
}

export class GetBorderRequest extends $protobuf.Message<GetBorderRequest> implements IGetBorderRequest {
    name!: string

    get $type() {
        return GetBorderRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.GetBorderRequest")
}

GetBorderRequest.$type.generatedObject = GetBorderRequest
GetBorderRequest.prototype.name = GetBorderRequest.$type.fieldsById[1].defaultValue


/**
 * 批量获取边框资源的 API 请求
 * (-- api-linter: core::0231::request-parent-field=disabled
 * aip.dev/not-precedent: 全局资源没有 parent. --)
 */
export interface IBatchGetBordersRequest {
    /** 资源名称 */
    names?: readonly string[]
}

export class BatchGetBordersRequest extends $protobuf.Message<BatchGetBordersRequest> implements IBatchGetBordersRequest {
    names!: readonly string[]

    get $type() {
        return BatchGetBordersRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetBordersRequest")
}

BatchGetBordersRequest.$type.generatedObject = BatchGetBordersRequest
BatchGetBordersRequest.prototype.names = BatchGetBordersRequest.$type.fieldsById[1].defaultValue


/** 批量获取边框资源的 API 响应 */
export interface IBatchGetBordersResponse {
    /** 返回的边框资源 */
    borders?: readonly $privilege.IBorder[]
}

export class BatchGetBordersResponse extends $protobuf.Message<BatchGetBordersResponse> implements IBatchGetBordersResponse {
    borders!: readonly $privilege.Border[]

    get $type() {
        return BatchGetBordersResponse.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetBordersResponse")
}

BatchGetBordersResponse.$type.generatedObject = BatchGetBordersResponse
BatchGetBordersResponse.prototype.borders = BatchGetBordersResponse.$type.fieldsById[1].defaultValue


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

export class ListBordersRequest extends $protobuf.Message<ListBordersRequest> implements IListBordersRequest {
    pageSize!: number
    pageToken!: string
    filter!: string

    get $type() {
        return ListBordersRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListBordersRequest")
}

ListBordersRequest.$type.generatedObject = ListBordersRequest
ListBordersRequest.prototype.pageSize = ListBordersRequest.$type.fieldsById[1].defaultValue
ListBordersRequest.prototype.pageToken = ListBordersRequest.$type.fieldsById[2].defaultValue
ListBordersRequest.prototype.filter = ListBordersRequest.$type.fieldsById[3].defaultValue


/** 批量获取边框资源的 API 响应 */
export interface IListBordersResponse {
    /** 返回的边框资源 */
    borders?: readonly $privilege.IBorder[]
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListBordersResponse extends $protobuf.Message<ListBordersResponse> implements IListBordersResponse {
    borders!: readonly $privilege.Border[]
    nextPageToken!: string

    get $type() {
        return ListBordersResponse.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListBordersResponse")
}

ListBordersResponse.$type.generatedObject = ListBordersResponse
ListBordersResponse.prototype.borders = ListBordersResponse.$type.fieldsById[1].defaultValue
ListBordersResponse.prototype.nextPageToken = ListBordersResponse.$type.fieldsById[2].defaultValue


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

export class ListBorderGroupsRequest extends $protobuf.Message<ListBorderGroupsRequest> implements IListBorderGroupsRequest {
    pageSize!: number
    pageToken!: string
    filter!: string

    get $type() {
        return ListBorderGroupsRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListBorderGroupsRequest")
}

ListBorderGroupsRequest.$type.generatedObject = ListBorderGroupsRequest
ListBorderGroupsRequest.prototype.pageSize = ListBorderGroupsRequest.$type.fieldsById[1].defaultValue
ListBorderGroupsRequest.prototype.pageToken = ListBorderGroupsRequest.$type.fieldsById[2].defaultValue
ListBorderGroupsRequest.prototype.filter = ListBorderGroupsRequest.$type.fieldsById[3].defaultValue


/** 批量获取边框组资源的 API 响应 */
export interface IListBorderGroupsResponse {
    /** 返回的边框组资源 */
    borderGroups?: readonly $privilege.IBorderGroup[]
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListBorderGroupsResponse extends $protobuf.Message<ListBorderGroupsResponse> implements IListBorderGroupsResponse {
    borderGroups!: readonly $privilege.BorderGroup[]
    nextPageToken!: string

    get $type() {
        return ListBorderGroupsResponse.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListBorderGroupsResponse")
}

ListBorderGroupsResponse.$type.generatedObject = ListBorderGroupsResponse
ListBorderGroupsResponse.prototype.borderGroups = ListBorderGroupsResponse.$type.fieldsById[1].defaultValue
ListBorderGroupsResponse.prototype.nextPageToken = ListBorderGroupsResponse.$type.fieldsById[2].defaultValue


/** 获取标签资源的 API 响应 */
export interface IGetLabelRequest {
    /** 资源名 */
    name?: string
}

export class GetLabelRequest extends $protobuf.Message<GetLabelRequest> implements IGetLabelRequest {
    name!: string

    get $type() {
        return GetLabelRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.GetLabelRequest")
}

GetLabelRequest.$type.generatedObject = GetLabelRequest
GetLabelRequest.prototype.name = GetLabelRequest.$type.fieldsById[1].defaultValue


/**
 * 批量获取标签资源的 API 请求
 * (-- api-linter: core::0231::request-parent-field=disabled
 * aip.dev/not-precedent: 全局资源没有 parent. --)
 */
export interface IBatchGetLabelsRequest {
    /** 资源名 */
    names?: readonly string[]
}

export class BatchGetLabelsRequest extends $protobuf.Message<BatchGetLabelsRequest> implements IBatchGetLabelsRequest {
    names!: readonly string[]

    get $type() {
        return BatchGetLabelsRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetLabelsRequest")
}

BatchGetLabelsRequest.$type.generatedObject = BatchGetLabelsRequest
BatchGetLabelsRequest.prototype.names = BatchGetLabelsRequest.$type.fieldsById[1].defaultValue


/** 批量获取标签资源的 API 响应 */
export interface IBatchGetLabelsResponse {
    /** 返回的标签资源 */
    labels?: readonly $privilege.ILabel[]
}

export class BatchGetLabelsResponse extends $protobuf.Message<BatchGetLabelsResponse> implements IBatchGetLabelsResponse {
    labels!: readonly $privilege.Label[]

    get $type() {
        return BatchGetLabelsResponse.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetLabelsResponse")
}

BatchGetLabelsResponse.$type.generatedObject = BatchGetLabelsResponse
BatchGetLabelsResponse.prototype.labels = BatchGetLabelsResponse.$type.fieldsById[1].defaultValue


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

export class ListLabelsRequest extends $protobuf.Message<ListLabelsRequest> implements IListLabelsRequest {
    pageSize!: number
    pageToken!: string
    filter!: string

    get $type() {
        return ListLabelsRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListLabelsRequest")
}

ListLabelsRequest.$type.generatedObject = ListLabelsRequest
ListLabelsRequest.prototype.pageSize = ListLabelsRequest.$type.fieldsById[1].defaultValue
ListLabelsRequest.prototype.pageToken = ListLabelsRequest.$type.fieldsById[2].defaultValue
ListLabelsRequest.prototype.filter = ListLabelsRequest.$type.fieldsById[3].defaultValue


/** 列举标签资源的 API 响应 */
export interface IListLabelsResponse {
    /** 返回的标签资源 */
    labels?: readonly $privilege.ILabel[]
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListLabelsResponse extends $protobuf.Message<ListLabelsResponse> implements IListLabelsResponse {
    labels!: readonly $privilege.Label[]
    nextPageToken!: string

    get $type() {
        return ListLabelsResponse.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListLabelsResponse")
}

ListLabelsResponse.$type.generatedObject = ListLabelsResponse
ListLabelsResponse.prototype.labels = ListLabelsResponse.$type.fieldsById[1].defaultValue
ListLabelsResponse.prototype.nextPageToken = ListLabelsResponse.$type.fieldsById[2].defaultValue


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

export class ListLabelGroupsRequest extends $protobuf.Message<ListLabelGroupsRequest> implements IListLabelGroupsRequest {
    pageSize!: number
    pageToken!: string
    filter!: string

    get $type() {
        return ListLabelGroupsRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListLabelGroupsRequest")
}

ListLabelGroupsRequest.$type.generatedObject = ListLabelGroupsRequest
ListLabelGroupsRequest.prototype.pageSize = ListLabelGroupsRequest.$type.fieldsById[1].defaultValue
ListLabelGroupsRequest.prototype.pageToken = ListLabelGroupsRequest.$type.fieldsById[2].defaultValue
ListLabelGroupsRequest.prototype.filter = ListLabelGroupsRequest.$type.fieldsById[3].defaultValue


/** 列举标签组资源的 API 响应 */
export interface IListLabelGroupsResponse {
    /** 返回的标签组资源 */
    labelGroups?: readonly $privilege.ILabelGroup[]
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListLabelGroupsResponse extends $protobuf.Message<ListLabelGroupsResponse> implements IListLabelGroupsResponse {
    labelGroups!: readonly $privilege.LabelGroup[]
    nextPageToken!: string

    get $type() {
        return ListLabelGroupsResponse.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListLabelGroupsResponse")
}

ListLabelGroupsResponse.$type.generatedObject = ListLabelGroupsResponse
ListLabelGroupsResponse.prototype.labelGroups = ListLabelGroupsResponse.$type.fieldsById[1].defaultValue
ListLabelGroupsResponse.prototype.nextPageToken = ListLabelGroupsResponse.$type.fieldsById[2].defaultValue


/** 获取贴纸资源的 API 请求 */
export interface IGetStickerRequest {
    /** 资源名 */
    name?: string
}

export class GetStickerRequest extends $protobuf.Message<GetStickerRequest> implements IGetStickerRequest {
    name!: string

    get $type() {
        return GetStickerRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.GetStickerRequest")
}

GetStickerRequest.$type.generatedObject = GetStickerRequest
GetStickerRequest.prototype.name = GetStickerRequest.$type.fieldsById[1].defaultValue


/**
 * 批量获取贴纸资源的 API 请求
 * (-- api-linter: core::0231::request-parent-field=disabled
 * aip.dev/not-precedent: 全局资源没有 parent. --)
 */
export interface IBatchGetStickersRequest {
    /** 资源名 */
    names?: readonly string[]
}

export class BatchGetStickersRequest extends $protobuf.Message<BatchGetStickersRequest> implements IBatchGetStickersRequest {
    names!: readonly string[]

    get $type() {
        return BatchGetStickersRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetStickersRequest")
}

BatchGetStickersRequest.$type.generatedObject = BatchGetStickersRequest
BatchGetStickersRequest.prototype.names = BatchGetStickersRequest.$type.fieldsById[1].defaultValue


/** 批量获取贴纸资源的 API 响应 */
export interface IBatchGetStickersResponse {
    /** 返回的贴纸资源 */
    stickers?: readonly $privilege.ISticker[]
}

export class BatchGetStickersResponse extends $protobuf.Message<BatchGetStickersResponse> implements IBatchGetStickersResponse {
    stickers!: readonly $privilege.Sticker[]

    get $type() {
        return BatchGetStickersResponse.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetStickersResponse")
}

BatchGetStickersResponse.$type.generatedObject = BatchGetStickersResponse
BatchGetStickersResponse.prototype.stickers = BatchGetStickersResponse.$type.fieldsById[1].defaultValue


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

export class ListStickersRequest extends $protobuf.Message<ListStickersRequest> implements IListStickersRequest {
    pageSize!: number
    pageToken!: string
    filter!: string

    get $type() {
        return ListStickersRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListStickersRequest")
}

ListStickersRequest.$type.generatedObject = ListStickersRequest
ListStickersRequest.prototype.pageSize = ListStickersRequest.$type.fieldsById[1].defaultValue
ListStickersRequest.prototype.pageToken = ListStickersRequest.$type.fieldsById[2].defaultValue
ListStickersRequest.prototype.filter = ListStickersRequest.$type.fieldsById[3].defaultValue


/** 列举贴纸资源的 API 响应 */
export interface IListStickersResponse {
    /** 返回的贴纸资源 */
    stickers?: readonly $privilege.ISticker[]
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListStickersResponse extends $protobuf.Message<ListStickersResponse> implements IListStickersResponse {
    stickers!: readonly $privilege.Sticker[]
    nextPageToken!: string

    get $type() {
        return ListStickersResponse.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListStickersResponse")
}

ListStickersResponse.$type.generatedObject = ListStickersResponse
ListStickersResponse.prototype.stickers = ListStickersResponse.$type.fieldsById[1].defaultValue
ListStickersResponse.prototype.nextPageToken = ListStickersResponse.$type.fieldsById[2].defaultValue


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

export class ListStickerGroupsRequest extends $protobuf.Message<ListStickerGroupsRequest> implements IListStickerGroupsRequest {
    pageSize!: number
    pageToken!: string
    filter!: string

    get $type() {
        return ListStickerGroupsRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListStickerGroupsRequest")
}

ListStickerGroupsRequest.$type.generatedObject = ListStickerGroupsRequest
ListStickerGroupsRequest.prototype.pageSize = ListStickerGroupsRequest.$type.fieldsById[1].defaultValue
ListStickerGroupsRequest.prototype.pageToken = ListStickerGroupsRequest.$type.fieldsById[2].defaultValue
ListStickerGroupsRequest.prototype.filter = ListStickerGroupsRequest.$type.fieldsById[3].defaultValue


/** 列举贴纸组资源的 API 响应 */
export interface IListStickerGroupsResponse {
    /** 下一页的翻页信息 */
    stickerGroups?: readonly $privilege.IStickerGroup[]
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListStickerGroupsResponse extends $protobuf.Message<ListStickerGroupsResponse> implements IListStickerGroupsResponse {
    stickerGroups!: readonly $privilege.StickerGroup[]
    nextPageToken!: string

    get $type() {
        return ListStickerGroupsResponse.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListStickerGroupsResponse")
}

ListStickerGroupsResponse.$type.generatedObject = ListStickerGroupsResponse
ListStickerGroupsResponse.prototype.stickerGroups = ListStickerGroupsResponse.$type.fieldsById[1].defaultValue
ListStickerGroupsResponse.prototype.nextPageToken = ListStickerGroupsResponse.$type.fieldsById[2].defaultValue


/** 获取音乐资源的 API 请求 */
export interface IGetMusicRequest {
    /** 资源名 */
    name?: string
}

export class GetMusicRequest extends $protobuf.Message<GetMusicRequest> implements IGetMusicRequest {
    name!: string

    get $type() {
        return GetMusicRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.GetMusicRequest")
}

GetMusicRequest.$type.generatedObject = GetMusicRequest
GetMusicRequest.prototype.name = GetMusicRequest.$type.fieldsById[1].defaultValue


/**
 * 批量获取音乐资源的 API 请求
 * (-- api-linter: core::0231::request-parent-field=disabled
 * aip.dev/not-precedent: 全局资源没有 parent. --)
 */
export interface IBatchGetMusicRequest {
    /** 资源名 */
    names?: readonly string[]
}

export class BatchGetMusicRequest extends $protobuf.Message<BatchGetMusicRequest> implements IBatchGetMusicRequest {
    names!: readonly string[]

    get $type() {
        return BatchGetMusicRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetMusicRequest")
}

BatchGetMusicRequest.$type.generatedObject = BatchGetMusicRequest
BatchGetMusicRequest.prototype.names = BatchGetMusicRequest.$type.fieldsById[1].defaultValue


/**
 * 批量获取音乐资源的 API 响应
 * (-- api-linter: core::0231::response-resource-field=disabled
 * aip.dev/not-precedent: Music 为不可数名词，无复数形式. --)
 */
export interface IBatchGetMusicResponse {
    /** 返回的音乐资源 */
    music?: readonly $privilege.IMusic[]
}

export class BatchGetMusicResponse extends $protobuf.Message<BatchGetMusicResponse> implements IBatchGetMusicResponse {
    music!: readonly $privilege.Music[]

    get $type() {
        return BatchGetMusicResponse.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetMusicResponse")
}

BatchGetMusicResponse.$type.generatedObject = BatchGetMusicResponse
BatchGetMusicResponse.prototype.music = BatchGetMusicResponse.$type.fieldsById[1].defaultValue


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

export class ListMusicRequest extends $protobuf.Message<ListMusicRequest> implements IListMusicRequest {
    pageSize!: number
    pageToken!: string
    filter!: string

    get $type() {
        return ListMusicRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListMusicRequest")
}

ListMusicRequest.$type.generatedObject = ListMusicRequest
ListMusicRequest.prototype.pageSize = ListMusicRequest.$type.fieldsById[1].defaultValue
ListMusicRequest.prototype.pageToken = ListMusicRequest.$type.fieldsById[2].defaultValue
ListMusicRequest.prototype.filter = ListMusicRequest.$type.fieldsById[3].defaultValue


/** 列举音乐资源的 API 响应 */
export interface IListMusicResponse {
    /** 返回的音乐资源 */
    music?: readonly $privilege.IMusic[]
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListMusicResponse extends $protobuf.Message<ListMusicResponse> implements IListMusicResponse {
    music!: readonly $privilege.Music[]
    nextPageToken!: string

    get $type() {
        return ListMusicResponse.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListMusicResponse")
}

ListMusicResponse.$type.generatedObject = ListMusicResponse
ListMusicResponse.prototype.music = ListMusicResponse.$type.fieldsById[1].defaultValue
ListMusicResponse.prototype.nextPageToken = ListMusicResponse.$type.fieldsById[2].defaultValue


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

export class ListMusicGroupsRequest extends $protobuf.Message<ListMusicGroupsRequest> implements IListMusicGroupsRequest {
    pageSize!: number
    pageToken!: string
    filter!: string

    get $type() {
        return ListMusicGroupsRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListMusicGroupsRequest")
}

ListMusicGroupsRequest.$type.generatedObject = ListMusicGroupsRequest
ListMusicGroupsRequest.prototype.pageSize = ListMusicGroupsRequest.$type.fieldsById[1].defaultValue
ListMusicGroupsRequest.prototype.pageToken = ListMusicGroupsRequest.$type.fieldsById[2].defaultValue
ListMusicGroupsRequest.prototype.filter = ListMusicGroupsRequest.$type.fieldsById[3].defaultValue


/** 列举音乐组资源的 API 响应 */
export interface IListMusicGroupsResponse {
    /** 返回的音乐组资源 */
    musicGroups?: readonly $privilege.IMusicGroup[]
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListMusicGroupsResponse extends $protobuf.Message<ListMusicGroupsResponse> implements IListMusicGroupsResponse {
    musicGroups!: readonly $privilege.MusicGroup[]
    nextPageToken!: string

    get $type() {
        return ListMusicGroupsResponse.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListMusicGroupsResponse")
}

ListMusicGroupsResponse.$type.generatedObject = ListMusicGroupsResponse
ListMusicGroupsResponse.prototype.musicGroups = ListMusicGroupsResponse.$type.fieldsById[1].defaultValue
ListMusicGroupsResponse.prototype.nextPageToken = ListMusicGroupsResponse.$type.fieldsById[2].defaultValue


/** 获取音效资源的 API 请求 */
export interface IGetSoundRequest {
    /** 资源名 */
    name?: string
}

export class GetSoundRequest extends $protobuf.Message<GetSoundRequest> implements IGetSoundRequest {
    name!: string

    get $type() {
        return GetSoundRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.GetSoundRequest")
}

GetSoundRequest.$type.generatedObject = GetSoundRequest
GetSoundRequest.prototype.name = GetSoundRequest.$type.fieldsById[1].defaultValue


/**
 * 批量获取音效资源的 API 请求
 * (-- api-linter: core::0231::request-parent-field=disabled
 * aip.dev/not-precedent: 全局资源没有 parent. --)
 */
export interface IBatchGetSoundsRequest {
    /** 资源名 */
    names?: readonly string[]
}

export class BatchGetSoundsRequest extends $protobuf.Message<BatchGetSoundsRequest> implements IBatchGetSoundsRequest {
    names!: readonly string[]

    get $type() {
        return BatchGetSoundsRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetSoundsRequest")
}

BatchGetSoundsRequest.$type.generatedObject = BatchGetSoundsRequest
BatchGetSoundsRequest.prototype.names = BatchGetSoundsRequest.$type.fieldsById[1].defaultValue


/** 批量获取音效资源的 API 响应 */
export interface IBatchGetSoundsResponse {
    /** 返回的音效资源 */
    sounds?: readonly $privilege.ISound[]
}

export class BatchGetSoundsResponse extends $protobuf.Message<BatchGetSoundsResponse> implements IBatchGetSoundsResponse {
    sounds!: readonly $privilege.Sound[]

    get $type() {
        return BatchGetSoundsResponse.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetSoundsResponse")
}

BatchGetSoundsResponse.$type.generatedObject = BatchGetSoundsResponse
BatchGetSoundsResponse.prototype.sounds = BatchGetSoundsResponse.$type.fieldsById[1].defaultValue


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

export class ListSoundsRequest extends $protobuf.Message<ListSoundsRequest> implements IListSoundsRequest {
    pageSize!: number
    pageToken!: string
    filter!: string

    get $type() {
        return ListSoundsRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListSoundsRequest")
}

ListSoundsRequest.$type.generatedObject = ListSoundsRequest
ListSoundsRequest.prototype.pageSize = ListSoundsRequest.$type.fieldsById[1].defaultValue
ListSoundsRequest.prototype.pageToken = ListSoundsRequest.$type.fieldsById[2].defaultValue
ListSoundsRequest.prototype.filter = ListSoundsRequest.$type.fieldsById[3].defaultValue


/** 列举音效资源的 API 响应 */
export interface IListSoundsResponse {
    /** 返回的音效资源 */
    sounds?: readonly $privilege.ISound[]
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListSoundsResponse extends $protobuf.Message<ListSoundsResponse> implements IListSoundsResponse {
    sounds!: readonly $privilege.Sound[]
    nextPageToken!: string

    get $type() {
        return ListSoundsResponse.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListSoundsResponse")
}

ListSoundsResponse.$type.generatedObject = ListSoundsResponse
ListSoundsResponse.prototype.sounds = ListSoundsResponse.$type.fieldsById[1].defaultValue
ListSoundsResponse.prototype.nextPageToken = ListSoundsResponse.$type.fieldsById[2].defaultValue


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

export class ListSoundGroupsRequest extends $protobuf.Message<ListSoundGroupsRequest> implements IListSoundGroupsRequest {
    pageSize!: number
    pageToken!: string
    filter!: string

    get $type() {
        return ListSoundGroupsRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListSoundGroupsRequest")
}

ListSoundGroupsRequest.$type.generatedObject = ListSoundGroupsRequest
ListSoundGroupsRequest.prototype.pageSize = ListSoundGroupsRequest.$type.fieldsById[1].defaultValue
ListSoundGroupsRequest.prototype.pageToken = ListSoundGroupsRequest.$type.fieldsById[2].defaultValue
ListSoundGroupsRequest.prototype.filter = ListSoundGroupsRequest.$type.fieldsById[3].defaultValue


/** 列举音效组资源的 API 响应 */
export interface IListSoundGroupsResponse {
    /** 返回的音效组资源 */
    soundGroups?: readonly $privilege.ISoundGroup[]
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListSoundGroupsResponse extends $protobuf.Message<ListSoundGroupsResponse> implements IListSoundGroupsResponse {
    soundGroups!: readonly $privilege.SoundGroup[]
    nextPageToken!: string

    get $type() {
        return ListSoundGroupsResponse.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListSoundGroupsResponse")
}

ListSoundGroupsResponse.$type.generatedObject = ListSoundGroupsResponse
ListSoundGroupsResponse.prototype.soundGroups = ListSoundGroupsResponse.$type.fieldsById[1].defaultValue
ListSoundGroupsResponse.prototype.nextPageToken = ListSoundGroupsResponse.$type.fieldsById[2].defaultValue


/** 获取会员资源的请求 */
export interface IGetMembershipRequest {
    /** 资源名称 */
    name?: string
}

export class GetMembershipRequest extends $protobuf.Message<GetMembershipRequest> implements IGetMembershipRequest {
    name!: string

    get $type() {
        return GetMembershipRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.GetMembershipRequest")
}

GetMembershipRequest.$type.generatedObject = GetMembershipRequest
GetMembershipRequest.prototype.name = GetMembershipRequest.$type.fieldsById[1].defaultValue


/**
 * 批量获取会员资源的 API 请求
 * (-- api-linter: core::0231::response-resource-field=disabled
 * aip.dev/not-precedent: 全局资源没有 parent. --)
 */
export interface IBatchGetMembershipsRequest {
    /** 资源名称 */
    names?: readonly string[]
}

export class BatchGetMembershipsRequest extends $protobuf.Message<BatchGetMembershipsRequest> implements IBatchGetMembershipsRequest {
    names!: readonly string[]

    get $type() {
        return BatchGetMembershipsRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetMembershipsRequest")
}

BatchGetMembershipsRequest.$type.generatedObject = BatchGetMembershipsRequest
BatchGetMembershipsRequest.prototype.names = BatchGetMembershipsRequest.$type.fieldsById[1].defaultValue


/** 批量获取会员资源的 API 响应 */
export interface IBatchGetMembershipsResponse {
    /** 返回的会员资源 */
    memberships?: readonly $privilege.IMembership[]
}

export class BatchGetMembershipsResponse extends $protobuf.Message<BatchGetMembershipsResponse> implements IBatchGetMembershipsResponse {
    memberships!: readonly $privilege.Membership[]

    get $type() {
        return BatchGetMembershipsResponse.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetMembershipsResponse")
}

BatchGetMembershipsResponse.$type.generatedObject = BatchGetMembershipsResponse
BatchGetMembershipsResponse.prototype.memberships = BatchGetMembershipsResponse.$type.fieldsById[1].defaultValue


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

export class ListMembershipsRequest extends $protobuf.Message<ListMembershipsRequest> implements IListMembershipsRequest {
    pageSize!: number
    pageToken!: string
    filter!: string

    get $type() {
        return ListMembershipsRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListMembershipsRequest")
}

ListMembershipsRequest.$type.generatedObject = ListMembershipsRequest
ListMembershipsRequest.prototype.pageSize = ListMembershipsRequest.$type.fieldsById[1].defaultValue
ListMembershipsRequest.prototype.pageToken = ListMembershipsRequest.$type.fieldsById[2].defaultValue
ListMembershipsRequest.prototype.filter = ListMembershipsRequest.$type.fieldsById[3].defaultValue


/** 列举会员资源的 API 响应 */
export interface IListMembershipsResponse {
    /** 返回的会员资源 */
    memberships?: readonly $privilege.IMembership[]
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListMembershipsResponse extends $protobuf.Message<ListMembershipsResponse> implements IListMembershipsResponse {
    memberships!: readonly $privilege.Membership[]
    nextPageToken!: string

    get $type() {
        return ListMembershipsResponse.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.ListMembershipsResponse")
}

ListMembershipsResponse.$type.generatedObject = ListMembershipsResponse
ListMembershipsResponse.prototype.memberships = ListMembershipsResponse.$type.fieldsById[1].defaultValue
ListMembershipsResponse.prototype.nextPageToken = ListMembershipsResponse.$type.fieldsById[2].defaultValue

/** 特权资源相关 API */
export class PrivilegeApi extends $sisyphus.Client {
    get $reflection() {
        return PrivilegeApi.reflection
    }

    /** 通过滤镜资源名称获取滤镜资源 */
    async GetFilter(input: IGetFilterRequest, metadata?: { [k: string]: string }): Promise<$privilege.IFilter> {
        return await this.$call(this.$reflection.methods["GetFilter"], input, metadata)
    }

    /** 批量通过滤镜资源名称获取滤镜资源 */
    async BatchGetFilters(input: IBatchGetFiltersRequest, metadata?: { [k: string]: string }): Promise<IBatchGetFiltersResponse> {
        return await this.$call(this.$reflection.methods["BatchGetFilters"], input, metadata)
    }

    /** 列举滤镜资源 */
    async ListFilters(input: IListFiltersRequest, metadata?: { [k: string]: string }): Promise<IListFiltersResponse> {
        return await this.$call(this.$reflection.methods["ListFilters"], input, metadata)
    }

    /** 列举滤镜组资源 */
    async ListFilterGroups(input: IListFilterGroupsRequest, metadata?: { [k: string]: string }): Promise<IListFilterGroupsResponse> {
        return await this.$call(this.$reflection.methods["ListFilterGroups"], input, metadata)
    }

    /** 通过边框资源名称获取边框资源 */
    async GetBorder(input: IGetBorderRequest, metadata?: { [k: string]: string }): Promise<$privilege.IBorder> {
        return await this.$call(this.$reflection.methods["GetBorder"], input, metadata)
    }

    /** 批量通过边框资源名称获取边框资源 */
    async BatchGetBorders(input: IBatchGetBordersRequest, metadata?: { [k: string]: string }): Promise<IBatchGetBordersResponse> {
        return await this.$call(this.$reflection.methods["BatchGetBorders"], input, metadata)
    }

    /** 列举边框资源 */
    async ListBorders(input: IListBordersRequest, metadata?: { [k: string]: string }): Promise<IListBordersResponse> {
        return await this.$call(this.$reflection.methods["ListBorders"], input, metadata)
    }

    /** 列举边框组资源 */
    async ListBorderGroups(input: IListBorderGroupsRequest, metadata?: { [k: string]: string }): Promise<IListBorderGroupsResponse> {
        return await this.$call(this.$reflection.methods["ListBorderGroups"], input, metadata)
    }

    /** 通过标签资源名称获取标签资源 */
    async GetLabel(input: IGetLabelRequest, metadata?: { [k: string]: string }): Promise<$privilege.ILabel> {
        return await this.$call(this.$reflection.methods["GetLabel"], input, metadata)
    }

    /** 批量通过标签资源名称获取标签资源 */
    async BatchGetLabels(input: IBatchGetLabelsRequest, metadata?: { [k: string]: string }): Promise<IBatchGetLabelsResponse> {
        return await this.$call(this.$reflection.methods["BatchGetLabels"], input, metadata)
    }

    /** 列举标签资源 */
    async ListLabels(input: IListLabelsRequest, metadata?: { [k: string]: string }): Promise<IListLabelsResponse> {
        return await this.$call(this.$reflection.methods["ListLabels"], input, metadata)
    }

    /** 列举标签组资源 */
    async ListLabelGroups(input: IListLabelGroupsRequest, metadata?: { [k: string]: string }): Promise<IListLabelGroupsResponse> {
        return await this.$call(this.$reflection.methods["ListLabelGroups"], input, metadata)
    }

    /** 通过贴纸资源名称获取贴纸资源 */
    async GetSticker(input: IGetStickerRequest, metadata?: { [k: string]: string }): Promise<$privilege.ISticker> {
        return await this.$call(this.$reflection.methods["GetSticker"], input, metadata)
    }

    /** 批量通过贴纸资源名称获取贴纸资源 */
    async BatchGetStickers(input: IBatchGetStickersRequest, metadata?: { [k: string]: string }): Promise<IBatchGetStickersResponse> {
        return await this.$call(this.$reflection.methods["BatchGetStickers"], input, metadata)
    }

    /** 列举贴纸资源 */
    async ListStickers(input: IListStickersRequest, metadata?: { [k: string]: string }): Promise<IListStickersResponse> {
        return await this.$call(this.$reflection.methods["ListStickers"], input, metadata)
    }

    /** 列举贴纸组资源 */
    async ListStickerGroups(input: IListStickerGroupsRequest, metadata?: { [k: string]: string }): Promise<IListStickerGroupsResponse> {
        return await this.$call(this.$reflection.methods["ListStickerGroups"], input, metadata)
    }

    /** 通过音乐资源名称获取音乐资源 */
    async GetMusic(input: IGetMusicRequest, metadata?: { [k: string]: string }): Promise<$privilege.IMusic> {
        return await this.$call(this.$reflection.methods["GetMusic"], input, metadata)
    }

    /** 批量通过音乐资源名称获取音乐资源 */
    async BatchGetMusic(input: IBatchGetMusicRequest, metadata?: { [k: string]: string }): Promise<IBatchGetMusicResponse> {
        return await this.$call(this.$reflection.methods["BatchGetMusic"], input, metadata)
    }

    /** 列举音乐资源 */
    async ListMusic(input: IListMusicRequest, metadata?: { [k: string]: string }): Promise<IListMusicResponse> {
        return await this.$call(this.$reflection.methods["ListMusic"], input, metadata)
    }

    /** 列举音乐组资源 */
    async ListMusicGroups(input: IListMusicGroupsRequest, metadata?: { [k: string]: string }): Promise<IListMusicGroupsResponse> {
        return await this.$call(this.$reflection.methods["ListMusicGroups"], input, metadata)
    }

    /** 通过音效资源名称获取音效资源 */
    async GetSound(input: IGetSoundRequest, metadata?: { [k: string]: string }): Promise<$privilege.ISound> {
        return await this.$call(this.$reflection.methods["GetSound"], input, metadata)
    }

    /** 批量通过音效资源名称获取音效资源 */
    async BatchGetSounds(input: IBatchGetSoundsRequest, metadata?: { [k: string]: string }): Promise<IBatchGetSoundsResponse> {
        return await this.$call(this.$reflection.methods["BatchGetSounds"], input, metadata)
    }

    /** 列举音效资源 */
    async ListSounds(input: IListSoundsRequest, metadata?: { [k: string]: string }): Promise<IListSoundsResponse> {
        return await this.$call(this.$reflection.methods["ListSounds"], input, metadata)
    }

    /** 列举音效组资源 */
    async ListSoundGroups(input: IListSoundGroupsRequest, metadata?: { [k: string]: string }): Promise<IListSoundGroupsResponse> {
        return await this.$call(this.$reflection.methods["ListSoundGroups"], input, metadata)
    }

    /** 通过会员资源名称获取会员资源 */
    async GetMembership(input: IGetMembershipRequest, metadata?: { [k: string]: string }): Promise<$privilege.IMembership> {
        return await this.$call(this.$reflection.methods["GetMembership"], input, metadata)
    }

    /** 批量通过会员资源名称获取会员资源 */
    async BatchGetMemberships(input: IBatchGetMembershipsRequest, metadata?: { [k: string]: string }): Promise<IBatchGetMembershipsResponse> {
        return await this.$call(this.$reflection.methods["BatchGetMemberships"], input, metadata)
    }

    /** 列举会员资源 */
    async ListMemberships(input: IListMembershipsRequest, metadata?: { [k: string]: string }): Promise<IListMembershipsResponse> {
        return await this.$call(this.$reflection.methods["ListMemberships"], input, metadata)
    }

    static readonly reflection = $reflection.root.lookupService(".bybutter.incubator.bread.v1.PrivilegeApi")
}