import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"
import * as $privilege from "./privilege"


/** 获取滤镜资源的 API 请求 */
export interface IGetFilterRequest {
    /** 资源名称 */
    name?: string
}

export class GetFilterRequest extends $sisyphus.Message<GetFilterRequest> implements IGetFilterRequest {
    name!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.GetFilterRequest").messageCtor = GetFilterRequest


/**
 * 批量获取滤镜资源的 API 请求
 * (-- api-linter: core::0231::request-parent-field=disabled
 * aip.dev/not-precedent: 全局资源没有 parent. --)
 */
export interface IBatchGetFiltersRequest {
    /** 资源名称 */
    names?: readonly string[]
}

export class BatchGetFiltersRequest extends $sisyphus.Message<BatchGetFiltersRequest> implements IBatchGetFiltersRequest {
    names!: readonly string[]
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetFiltersRequest").messageCtor = BatchGetFiltersRequest


/** 批量获取滤镜资源的 API 响应 */
export interface IBatchGetFiltersResponse {
    /** 获取到的滤镜资源 */
    filters?: readonly $privilege.IFilter[]
}

export class BatchGetFiltersResponse extends $sisyphus.Message<BatchGetFiltersResponse> implements IBatchGetFiltersResponse {
    filters!: readonly $privilege.Filter[]
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetFiltersResponse").messageCtor = BatchGetFiltersResponse


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

export class ListFiltersRequest extends $sisyphus.Message<ListFiltersRequest> implements IListFiltersRequest {
    pageSize!: number
    pageToken!: string
    filter!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.ListFiltersRequest").messageCtor = ListFiltersRequest


/** 列举滤镜资源的 API 响应 */
export interface IListFiltersResponse {
    /** 返回的滤镜资源 */
    filters?: readonly $privilege.IFilter[]
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListFiltersResponse extends $sisyphus.Message<ListFiltersResponse> implements IListFiltersResponse {
    filters!: readonly $privilege.Filter[]
    nextPageToken!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.ListFiltersResponse").messageCtor = ListFiltersResponse


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

export class ListFilterGroupsRequest extends $sisyphus.Message<ListFilterGroupsRequest> implements IListFilterGroupsRequest {
    pageSize!: number
    pageToken!: string
    filter!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.ListFilterGroupsRequest").messageCtor = ListFilterGroupsRequest


/** 列举滤镜资源组的 API 响应 */
export interface IListFilterGroupsResponse {
    /** 返回的滤镜组资源 */
    filterGroups?: readonly $privilege.IFilterGroup[]
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListFilterGroupsResponse extends $sisyphus.Message<ListFilterGroupsResponse> implements IListFilterGroupsResponse {
    filterGroups!: readonly $privilege.FilterGroup[]
    nextPageToken!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.ListFilterGroupsResponse").messageCtor = ListFilterGroupsResponse


/** 获取边框资源的 API 请求 */
export interface IGetBorderRequest {
    /** 资源名称 */
    name?: string
}

export class GetBorderRequest extends $sisyphus.Message<GetBorderRequest> implements IGetBorderRequest {
    name!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.GetBorderRequest").messageCtor = GetBorderRequest


/**
 * 批量获取边框资源的 API 请求
 * (-- api-linter: core::0231::request-parent-field=disabled
 * aip.dev/not-precedent: 全局资源没有 parent. --)
 */
export interface IBatchGetBordersRequest {
    /** 资源名称 */
    names?: readonly string[]
}

export class BatchGetBordersRequest extends $sisyphus.Message<BatchGetBordersRequest> implements IBatchGetBordersRequest {
    names!: readonly string[]
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetBordersRequest").messageCtor = BatchGetBordersRequest


/** 批量获取边框资源的 API 响应 */
export interface IBatchGetBordersResponse {
    /** 返回的边框资源 */
    borders?: readonly $privilege.IBorder[]
}

export class BatchGetBordersResponse extends $sisyphus.Message<BatchGetBordersResponse> implements IBatchGetBordersResponse {
    borders!: readonly $privilege.Border[]
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetBordersResponse").messageCtor = BatchGetBordersResponse


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

export class ListBordersRequest extends $sisyphus.Message<ListBordersRequest> implements IListBordersRequest {
    pageSize!: number
    pageToken!: string
    filter!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.ListBordersRequest").messageCtor = ListBordersRequest


/** 批量获取边框资源的 API 响应 */
export interface IListBordersResponse {
    /** 返回的边框资源 */
    borders?: readonly $privilege.IBorder[]
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListBordersResponse extends $sisyphus.Message<ListBordersResponse> implements IListBordersResponse {
    borders!: readonly $privilege.Border[]
    nextPageToken!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.ListBordersResponse").messageCtor = ListBordersResponse


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

export class ListBorderGroupsRequest extends $sisyphus.Message<ListBorderGroupsRequest> implements IListBorderGroupsRequest {
    pageSize!: number
    pageToken!: string
    filter!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.ListBorderGroupsRequest").messageCtor = ListBorderGroupsRequest


/** 批量获取边框组资源的 API 响应 */
export interface IListBorderGroupsResponse {
    /** 返回的边框组资源 */
    borderGroups?: readonly $privilege.IBorderGroup[]
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListBorderGroupsResponse extends $sisyphus.Message<ListBorderGroupsResponse> implements IListBorderGroupsResponse {
    borderGroups!: readonly $privilege.BorderGroup[]
    nextPageToken!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.ListBorderGroupsResponse").messageCtor = ListBorderGroupsResponse


/** 获取标签资源的 API 响应 */
export interface IGetLabelRequest {
    /** 资源名 */
    name?: string
}

export class GetLabelRequest extends $sisyphus.Message<GetLabelRequest> implements IGetLabelRequest {
    name!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.GetLabelRequest").messageCtor = GetLabelRequest


/**
 * 批量获取标签资源的 API 请求
 * (-- api-linter: core::0231::request-parent-field=disabled
 * aip.dev/not-precedent: 全局资源没有 parent. --)
 */
export interface IBatchGetLabelsRequest {
    /** 资源名 */
    names?: readonly string[]
}

export class BatchGetLabelsRequest extends $sisyphus.Message<BatchGetLabelsRequest> implements IBatchGetLabelsRequest {
    names!: readonly string[]
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetLabelsRequest").messageCtor = BatchGetLabelsRequest


/** 批量获取标签资源的 API 响应 */
export interface IBatchGetLabelsResponse {
    /** 返回的标签资源 */
    labels?: readonly $privilege.ILabel[]
}

export class BatchGetLabelsResponse extends $sisyphus.Message<BatchGetLabelsResponse> implements IBatchGetLabelsResponse {
    labels!: readonly $privilege.Label[]
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetLabelsResponse").messageCtor = BatchGetLabelsResponse


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

export class ListLabelsRequest extends $sisyphus.Message<ListLabelsRequest> implements IListLabelsRequest {
    pageSize!: number
    pageToken!: string
    filter!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.ListLabelsRequest").messageCtor = ListLabelsRequest


/** 列举标签资源的 API 响应 */
export interface IListLabelsResponse {
    /** 返回的标签资源 */
    labels?: readonly $privilege.ILabel[]
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListLabelsResponse extends $sisyphus.Message<ListLabelsResponse> implements IListLabelsResponse {
    labels!: readonly $privilege.Label[]
    nextPageToken!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.ListLabelsResponse").messageCtor = ListLabelsResponse


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

export class ListLabelGroupsRequest extends $sisyphus.Message<ListLabelGroupsRequest> implements IListLabelGroupsRequest {
    pageSize!: number
    pageToken!: string
    filter!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.ListLabelGroupsRequest").messageCtor = ListLabelGroupsRequest


/** 列举标签组资源的 API 响应 */
export interface IListLabelGroupsResponse {
    /** 返回的标签组资源 */
    labelGroups?: readonly $privilege.ILabelGroup[]
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListLabelGroupsResponse extends $sisyphus.Message<ListLabelGroupsResponse> implements IListLabelGroupsResponse {
    labelGroups!: readonly $privilege.LabelGroup[]
    nextPageToken!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.ListLabelGroupsResponse").messageCtor = ListLabelGroupsResponse


/** 获取贴纸资源的 API 请求 */
export interface IGetStickerRequest {
    /** 资源名 */
    name?: string
}

export class GetStickerRequest extends $sisyphus.Message<GetStickerRequest> implements IGetStickerRequest {
    name!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.GetStickerRequest").messageCtor = GetStickerRequest


/**
 * 批量获取贴纸资源的 API 请求
 * (-- api-linter: core::0231::request-parent-field=disabled
 * aip.dev/not-precedent: 全局资源没有 parent. --)
 */
export interface IBatchGetStickersRequest {
    /** 资源名 */
    names?: readonly string[]
}

export class BatchGetStickersRequest extends $sisyphus.Message<BatchGetStickersRequest> implements IBatchGetStickersRequest {
    names!: readonly string[]
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetStickersRequest").messageCtor = BatchGetStickersRequest


/** 批量获取贴纸资源的 API 响应 */
export interface IBatchGetStickersResponse {
    /** 返回的贴纸资源 */
    stickers?: readonly $privilege.ISticker[]
}

export class BatchGetStickersResponse extends $sisyphus.Message<BatchGetStickersResponse> implements IBatchGetStickersResponse {
    stickers!: readonly $privilege.Sticker[]
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetStickersResponse").messageCtor = BatchGetStickersResponse


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

export class ListStickersRequest extends $sisyphus.Message<ListStickersRequest> implements IListStickersRequest {
    pageSize!: number
    pageToken!: string
    filter!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.ListStickersRequest").messageCtor = ListStickersRequest


/** 列举贴纸资源的 API 响应 */
export interface IListStickersResponse {
    /** 返回的贴纸资源 */
    stickers?: readonly $privilege.ISticker[]
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListStickersResponse extends $sisyphus.Message<ListStickersResponse> implements IListStickersResponse {
    stickers!: readonly $privilege.Sticker[]
    nextPageToken!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.ListStickersResponse").messageCtor = ListStickersResponse


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

export class ListStickerGroupsRequest extends $sisyphus.Message<ListStickerGroupsRequest> implements IListStickerGroupsRequest {
    pageSize!: number
    pageToken!: string
    filter!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.ListStickerGroupsRequest").messageCtor = ListStickerGroupsRequest


/** 列举贴纸组资源的 API 响应 */
export interface IListStickerGroupsResponse {
    /** 下一页的翻页信息 */
    stickerGroups?: readonly $privilege.IStickerGroup[]
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListStickerGroupsResponse extends $sisyphus.Message<ListStickerGroupsResponse> implements IListStickerGroupsResponse {
    stickerGroups!: readonly $privilege.StickerGroup[]
    nextPageToken!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.ListStickerGroupsResponse").messageCtor = ListStickerGroupsResponse


/** 获取音乐资源的 API 请求 */
export interface IGetMusicRequest {
    /** 资源名 */
    name?: string
}

export class GetMusicRequest extends $sisyphus.Message<GetMusicRequest> implements IGetMusicRequest {
    name!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.GetMusicRequest").messageCtor = GetMusicRequest


/**
 * 批量获取音乐资源的 API 请求
 * (-- api-linter: core::0231::request-parent-field=disabled
 * aip.dev/not-precedent: 全局资源没有 parent. --)
 */
export interface IBatchGetMusicRequest {
    /** 资源名 */
    names?: readonly string[]
}

export class BatchGetMusicRequest extends $sisyphus.Message<BatchGetMusicRequest> implements IBatchGetMusicRequest {
    names!: readonly string[]
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetMusicRequest").messageCtor = BatchGetMusicRequest


/**
 * 批量获取音乐资源的 API 响应
 * (-- api-linter: core::0231::response-resource-field=disabled
 * aip.dev/not-precedent: Music 为不可数名词，无复数形式. --)
 */
export interface IBatchGetMusicResponse {
    /** 返回的音乐资源 */
    music?: readonly $privilege.IMusic[]
}

export class BatchGetMusicResponse extends $sisyphus.Message<BatchGetMusicResponse> implements IBatchGetMusicResponse {
    music!: readonly $privilege.Music[]
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetMusicResponse").messageCtor = BatchGetMusicResponse


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

export class ListMusicRequest extends $sisyphus.Message<ListMusicRequest> implements IListMusicRequest {
    pageSize!: number
    pageToken!: string
    filter!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.ListMusicRequest").messageCtor = ListMusicRequest


/** 列举音乐资源的 API 响应 */
export interface IListMusicResponse {
    /** 返回的音乐资源 */
    music?: readonly $privilege.IMusic[]
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListMusicResponse extends $sisyphus.Message<ListMusicResponse> implements IListMusicResponse {
    music!: readonly $privilege.Music[]
    nextPageToken!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.ListMusicResponse").messageCtor = ListMusicResponse


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

export class ListMusicGroupsRequest extends $sisyphus.Message<ListMusicGroupsRequest> implements IListMusicGroupsRequest {
    pageSize!: number
    pageToken!: string
    filter!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.ListMusicGroupsRequest").messageCtor = ListMusicGroupsRequest


/** 列举音乐组资源的 API 响应 */
export interface IListMusicGroupsResponse {
    /** 返回的音乐组资源 */
    musicGroups?: readonly $privilege.IMusicGroup[]
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListMusicGroupsResponse extends $sisyphus.Message<ListMusicGroupsResponse> implements IListMusicGroupsResponse {
    musicGroups!: readonly $privilege.MusicGroup[]
    nextPageToken!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.ListMusicGroupsResponse").messageCtor = ListMusicGroupsResponse


/** 获取音效资源的 API 请求 */
export interface IGetSoundRequest {
    /** 资源名 */
    name?: string
}

export class GetSoundRequest extends $sisyphus.Message<GetSoundRequest> implements IGetSoundRequest {
    name!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.GetSoundRequest").messageCtor = GetSoundRequest


/**
 * 批量获取音效资源的 API 请求
 * (-- api-linter: core::0231::request-parent-field=disabled
 * aip.dev/not-precedent: 全局资源没有 parent. --)
 */
export interface IBatchGetSoundsRequest {
    /** 资源名 */
    names?: readonly string[]
}

export class BatchGetSoundsRequest extends $sisyphus.Message<BatchGetSoundsRequest> implements IBatchGetSoundsRequest {
    names!: readonly string[]
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetSoundsRequest").messageCtor = BatchGetSoundsRequest


/** 批量获取音效资源的 API 响应 */
export interface IBatchGetSoundsResponse {
    /** 返回的音效资源 */
    sounds?: readonly $privilege.ISound[]
}

export class BatchGetSoundsResponse extends $sisyphus.Message<BatchGetSoundsResponse> implements IBatchGetSoundsResponse {
    sounds!: readonly $privilege.Sound[]
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetSoundsResponse").messageCtor = BatchGetSoundsResponse


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

export class ListSoundsRequest extends $sisyphus.Message<ListSoundsRequest> implements IListSoundsRequest {
    pageSize!: number
    pageToken!: string
    filter!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.ListSoundsRequest").messageCtor = ListSoundsRequest


/** 列举音效资源的 API 响应 */
export interface IListSoundsResponse {
    /** 返回的音效资源 */
    sounds?: readonly $privilege.ISound[]
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListSoundsResponse extends $sisyphus.Message<ListSoundsResponse> implements IListSoundsResponse {
    sounds!: readonly $privilege.Sound[]
    nextPageToken!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.ListSoundsResponse").messageCtor = ListSoundsResponse


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

export class ListSoundGroupsRequest extends $sisyphus.Message<ListSoundGroupsRequest> implements IListSoundGroupsRequest {
    pageSize!: number
    pageToken!: string
    filter!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.ListSoundGroupsRequest").messageCtor = ListSoundGroupsRequest


/** 列举音效组资源的 API 响应 */
export interface IListSoundGroupsResponse {
    /** 返回的音效组资源 */
    soundGroups?: readonly $privilege.ISoundGroup[]
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListSoundGroupsResponse extends $sisyphus.Message<ListSoundGroupsResponse> implements IListSoundGroupsResponse {
    soundGroups!: readonly $privilege.SoundGroup[]
    nextPageToken!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.ListSoundGroupsResponse").messageCtor = ListSoundGroupsResponse


/** 获取会员资源的请求 */
export interface IGetMembershipRequest {
    /** 资源名称 */
    name?: string
}

export class GetMembershipRequest extends $sisyphus.Message<GetMembershipRequest> implements IGetMembershipRequest {
    name!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.GetMembershipRequest").messageCtor = GetMembershipRequest


/**
 * 批量获取会员资源的 API 请求
 * (-- api-linter: core::0231::response-resource-field=disabled
 * aip.dev/not-precedent: 全局资源没有 parent. --)
 */
export interface IBatchGetMembershipsRequest {
    /** 资源名称 */
    names?: readonly string[]
}

export class BatchGetMembershipsRequest extends $sisyphus.Message<BatchGetMembershipsRequest> implements IBatchGetMembershipsRequest {
    names!: readonly string[]
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetMembershipsRequest").messageCtor = BatchGetMembershipsRequest


/** 批量获取会员资源的 API 响应 */
export interface IBatchGetMembershipsResponse {
    /** 返回的会员资源 */
    memberships?: readonly $privilege.IMembership[]
}

export class BatchGetMembershipsResponse extends $sisyphus.Message<BatchGetMembershipsResponse> implements IBatchGetMembershipsResponse {
    memberships!: readonly $privilege.Membership[]
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.BatchGetMembershipsResponse").messageCtor = BatchGetMembershipsResponse


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

export class ListMembershipsRequest extends $sisyphus.Message<ListMembershipsRequest> implements IListMembershipsRequest {
    pageSize!: number
    pageToken!: string
    filter!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.ListMembershipsRequest").messageCtor = ListMembershipsRequest


/** 列举会员资源的 API 响应 */
export interface IListMembershipsResponse {
    /** 返回的会员资源 */
    memberships?: readonly $privilege.IMembership[]
    /** 下一页的翻页信息 */
    nextPageToken?: string
}

export class ListMembershipsResponse extends $sisyphus.Message<ListMembershipsResponse> implements IListMembershipsResponse {
    memberships!: readonly $privilege.Membership[]
    nextPageToken!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.ListMembershipsResponse").messageCtor = ListMembershipsResponse

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