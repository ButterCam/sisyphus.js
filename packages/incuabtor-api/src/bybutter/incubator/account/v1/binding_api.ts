import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"
import * as $binding from "./binding"
import * as $auth from "./auth"


/** 获取账户的所有绑定信息的 API 请求 */
export interface IListBindingsRequest {
    /** 需要查询绑定信息的账户资源名 */
    parent?: string
    /** 翻页大小 */
    pageSize?: number
    /** 翻页信息 */
    pageToken?: string
}

export class ListBindingsRequest extends $sisyphus.Message<ListBindingsRequest> implements IListBindingsRequest {
    parent!: string
    pageSize!: number
    pageToken!: string
}
$reflection.root.lookupType(".bybutter.incubator.account.v1.ListBindingsRequest").messageCtor = ListBindingsRequest


/** 获取账户的所有绑定信息的 API 响应 */
export interface IListBindingsResponse {
    /** 账户的绑定信息 */
    bindings?: readonly $binding.IAccountBinding[]
    /** 下一页翻页信息 */
    nextPageToken?: string
}

export class ListBindingsResponse extends $sisyphus.Message<ListBindingsResponse> implements IListBindingsResponse {
    bindings!: readonly $binding.AccountBinding[]
    nextPageToken!: string
}
$reflection.root.lookupType(".bybutter.incubator.account.v1.ListBindingsResponse").messageCtor = ListBindingsResponse


/** 修改用户绑定信息的 API 请求 */
export interface IChangeBindingRequest {
    /** 需要修改的绑定 */
    binding?: $binding.IAccountBinding
    /** 原始手机号的验证信息 */
    mobileAccountCredential?: $auth.IMobileCredential
    /** 新手机号的验证信息 */
    mobileBindingCredential?: $auth.IMobileCredential
    /** 更换绑定信息需要的账户凭证，确保账户属于当前用户 */
    AccountCredential?: string
    /** 更换绑定信息需要的绑定目标凭证,确保绑定目标属于当前用户 */
    BindingCredential?: string
}

export class ChangeBindingRequest extends $sisyphus.Message<ChangeBindingRequest> implements IChangeBindingRequest {
    binding!: $binding.AccountBinding
    mobileAccountCredential!: $auth.MobileCredential
    mobileBindingCredential!: $auth.MobileCredential
    AccountCredential?: string

    BindingCredential?: string
}
$reflection.root.lookupType(".bybutter.incubator.account.v1.ChangeBindingRequest").messageCtor = ChangeBindingRequest


/** 修改用户绑定信息的 API 响应 */
export interface IChangeBindingResponse {
    /** 修改后的用户绑定信息 */
    binding?: $binding.IAccountBinding
}

export class ChangeBindingResponse extends $sisyphus.Message<ChangeBindingResponse> implements IChangeBindingResponse {
    binding!: $binding.AccountBinding
}
$reflection.root.lookupType(".bybutter.incubator.account.v1.ChangeBindingResponse").messageCtor = ChangeBindingResponse

/** 账户绑定相关的 API */
export class BindingApi extends $sisyphus.Client {
    get $reflection() {
        return BindingApi.reflection
    }
    /** 获取用户的所有绑定信息。 */
    async ListBindings(input: IListBindingsRequest, metadata?: { [k: string]: string }): Promise<IListBindingsResponse> {
        return await this.$call(this.$reflection.methods["ListBindings"], input, metadata)
    }
    /** 修改用户的绑定信息 */
    async ChangeBinding(input: IChangeBindingRequest, metadata?: { [k: string]: string }): Promise<IChangeBindingResponse> {
        return await this.$call(this.$reflection.methods["ChangeBinding"], input, metadata)
    }
    static readonly reflection = $reflection.root.lookupService(".bybutter.incubator.account.v1.BindingApi")
}