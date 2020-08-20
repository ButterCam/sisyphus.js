import * as $verification from "./verification"
import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"


/** 发送验证码请求 */
export interface ISendVerificationCodeRequest {
    /** 文本验证码手机信息 */
    phoneTextTarget?: $verification.IPhoneTarget
    /** 语音验证码手机信息 */
    phoneSoundTarget?: $verification.IPhoneTarget
    /** 邮箱信息 */
    emailTarget?: $verification.IEmailTarget
    /** 情景 */
    context?: string
    target?: string
}

export class SendVerificationCodeRequest extends $sisyphus.Message<SendVerificationCodeRequest> implements ISendVerificationCodeRequest {
    phoneTextTarget!: $verification.PhoneTarget
    phoneSoundTarget!: $verification.PhoneTarget
    emailTarget!: $verification.EmailTarget
    context!: string
    target?: string
}
$reflection.root.lookupType(".bybutter.incubator.verification.v1.SendVerificationCodeRequest").messageCtor = SendVerificationCodeRequest


/** 发送验证码响应 */
export interface ISendVerificationCodeResponse {
}

export class SendVerificationCodeResponse extends $sisyphus.Message<SendVerificationCodeResponse> implements ISendVerificationCodeResponse {
}
$reflection.root.lookupType(".bybutter.incubator.verification.v1.SendVerificationCodeResponse").messageCtor = SendVerificationCodeResponse


/** 验证验证码请求 */
export interface IVerifyVerificationCodeRequest {
    /** 文本验证码手机信息 */
    phoneTextTarget?: $verification.IPhoneTarget
    /** 语音验证码手机信息 */
    phoneSoundTarget?: $verification.IPhoneTarget
    /** 邮箱信息 */
    emailTarget?: $verification.IEmailTarget
    /** 情景 */
    context?: string
    /** 验证码 */
    code?: string
    target?: string
}

export class VerifyVerificationCodeRequest extends $sisyphus.Message<VerifyVerificationCodeRequest> implements IVerifyVerificationCodeRequest {
    phoneTextTarget!: $verification.PhoneTarget
    phoneSoundTarget!: $verification.PhoneTarget
    emailTarget!: $verification.EmailTarget
    context!: string
    code!: string
    target?: string
}
$reflection.root.lookupType(".bybutter.incubator.verification.v1.VerifyVerificationCodeRequest").messageCtor = VerifyVerificationCodeRequest


/** 验证验证码响应 */
export interface IVerifyVerificationCodeResponse {
    /** 验证结果 */
    result?: boolean
}

export class VerifyVerificationCodeResponse extends $sisyphus.Message<VerifyVerificationCodeResponse> implements IVerifyVerificationCodeResponse {
    result!: boolean
}
$reflection.root.lookupType(".bybutter.incubator.verification.v1.VerifyVerificationCodeResponse").messageCtor = VerifyVerificationCodeResponse


/**
 * (-- api-linter: core::0132::request-parent-required=disabled
 * aip.dev/not-precedent: 这是顶级资源，不需要 parent. --)
 * 批量获取地区代码请求
 */
export interface IListRegionCodeRequest {
    /** 每页条数 */
    pageSize?: number
    /** 当前页的token */
    pageToken?: string
}

export class ListRegionCodeRequest extends $sisyphus.Message<ListRegionCodeRequest> implements IListRegionCodeRequest {
    pageSize!: number
    pageToken!: string
}
$reflection.root.lookupType(".bybutter.incubator.verification.v1.ListRegionCodeRequest").messageCtor = ListRegionCodeRequest


/** 批量获取地区代码响应 */
export interface IListRegionCodeResponse {
    /**
     * (-- api-linter: core::0132::response-unknown-fields=disabled
     * aip.dev/not-precedent: 不知道为什么 非说不认识他 --)
     * 地区代码列表
     */
    regionCodes?: readonly $verification.IRegionCode[]
    /** 下一页的token */
    nextPageToken?: string
}

export class ListRegionCodeResponse extends $sisyphus.Message<ListRegionCodeResponse> implements IListRegionCodeResponse {
    regionCodes!: readonly $verification.RegionCode[]
    nextPageToken!: string
}
$reflection.root.lookupType(".bybutter.incubator.verification.v1.ListRegionCodeResponse").messageCtor = ListRegionCodeResponse

/** 验证Api */
export class VerificationApi extends $sisyphus.Client {
    get $reflection() {
        return VerificationApi.reflection
    }
    /** 发送手机验证码 */
    async SendVerificationCode(input: ISendVerificationCodeRequest, metadata?: { [k: string]: string }): Promise<ISendVerificationCodeResponse> {
        return await this.$call(this.$reflection.methods["SendVerificationCode"], input, metadata)
    }
    /** 验证手机验证码 */
    async VerifyVerificationCode(input: IVerifyVerificationCodeRequest, metadata?: { [k: string]: string }): Promise<IVerifyVerificationCodeResponse> {
        return await this.$call(this.$reflection.methods["VerifyVerificationCode"], input, metadata)
    }
    /** 列举地区代码 */
    async ListRegionCode(input: IListRegionCodeRequest, metadata?: { [k: string]: string }): Promise<IListRegionCodeResponse> {
        return await this.$call(this.$reflection.methods["ListRegionCode"], input, metadata)
    }
    static readonly reflection = $reflection.root.lookupService(".bybutter.incubator.verification.v1.VerificationApi")
}