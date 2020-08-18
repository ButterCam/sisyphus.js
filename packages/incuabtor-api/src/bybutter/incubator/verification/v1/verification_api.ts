import * as $verification from "./verification"
import * as $protobuf from "protobufjs"
import * as $reflection from "../../../../_reflection"
import * as $sisyphus from "@sisyphus.js/core"


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

export class SendVerificationCodeRequest extends $protobuf.Message<SendVerificationCodeRequest> implements ISendVerificationCodeRequest {
    phoneTextTarget!: $verification.PhoneTarget
    phoneSoundTarget!: $verification.PhoneTarget
    emailTarget!: $verification.EmailTarget
    context!: string
    target?: string

    get $type() {
        return SendVerificationCodeRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.verification.v1.SendVerificationCodeRequest")
}
SendVerificationCodeRequest.$type.generatedObject = SendVerificationCodeRequest
Object.defineProperty(SendVerificationCodeRequest.prototype, "target", $sisyphus.oneOfProperty("phoneTextTarget", "phoneSoundTarget", "emailTarget"))
SendVerificationCodeRequest.prototype.phoneTextTarget = SendVerificationCodeRequest.$type.fieldsById[1].defaultValue
SendVerificationCodeRequest.prototype.phoneSoundTarget = SendVerificationCodeRequest.$type.fieldsById[2].defaultValue
SendVerificationCodeRequest.prototype.emailTarget = SendVerificationCodeRequest.$type.fieldsById[3].defaultValue
SendVerificationCodeRequest.prototype.context = SendVerificationCodeRequest.$type.fieldsById[11].defaultValue


/** 发送验证码响应 */
export interface ISendVerificationCodeResponse {
}

export class SendVerificationCodeResponse extends $protobuf.Message<SendVerificationCodeResponse> implements ISendVerificationCodeResponse {
    get $type() {
        return SendVerificationCodeResponse.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.verification.v1.SendVerificationCodeResponse")
}
SendVerificationCodeResponse.$type.generatedObject = SendVerificationCodeResponse


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

export class VerifyVerificationCodeRequest extends $protobuf.Message<VerifyVerificationCodeRequest> implements IVerifyVerificationCodeRequest {
    phoneTextTarget!: $verification.PhoneTarget
    phoneSoundTarget!: $verification.PhoneTarget
    emailTarget!: $verification.EmailTarget
    context!: string
    code!: string
    target?: string

    get $type() {
        return VerifyVerificationCodeRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.verification.v1.VerifyVerificationCodeRequest")
}
VerifyVerificationCodeRequest.$type.generatedObject = VerifyVerificationCodeRequest
Object.defineProperty(VerifyVerificationCodeRequest.prototype, "target", $sisyphus.oneOfProperty("phoneTextTarget", "phoneSoundTarget", "emailTarget"))
VerifyVerificationCodeRequest.prototype.phoneTextTarget = VerifyVerificationCodeRequest.$type.fieldsById[1].defaultValue
VerifyVerificationCodeRequest.prototype.phoneSoundTarget = VerifyVerificationCodeRequest.$type.fieldsById[2].defaultValue
VerifyVerificationCodeRequest.prototype.emailTarget = VerifyVerificationCodeRequest.$type.fieldsById[3].defaultValue
VerifyVerificationCodeRequest.prototype.context = VerifyVerificationCodeRequest.$type.fieldsById[11].defaultValue
VerifyVerificationCodeRequest.prototype.code = VerifyVerificationCodeRequest.$type.fieldsById[12].defaultValue


/** 验证验证码响应 */
export interface IVerifyVerificationCodeResponse {
    /** 验证结果 */
    result?: boolean
}

export class VerifyVerificationCodeResponse extends $protobuf.Message<VerifyVerificationCodeResponse> implements IVerifyVerificationCodeResponse {
    result!: boolean
    get $type() {
        return VerifyVerificationCodeResponse.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.verification.v1.VerifyVerificationCodeResponse")
}
VerifyVerificationCodeResponse.$type.generatedObject = VerifyVerificationCodeResponse
VerifyVerificationCodeResponse.prototype.result = VerifyVerificationCodeResponse.$type.fieldsById[1].defaultValue


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

export class ListRegionCodeRequest extends $protobuf.Message<ListRegionCodeRequest> implements IListRegionCodeRequest {
    pageSize!: number
    pageToken!: string
    get $type() {
        return ListRegionCodeRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.verification.v1.ListRegionCodeRequest")
}
ListRegionCodeRequest.$type.generatedObject = ListRegionCodeRequest
ListRegionCodeRequest.prototype.pageSize = ListRegionCodeRequest.$type.fieldsById[1].defaultValue
ListRegionCodeRequest.prototype.pageToken = ListRegionCodeRequest.$type.fieldsById[2].defaultValue


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

export class ListRegionCodeResponse extends $protobuf.Message<ListRegionCodeResponse> implements IListRegionCodeResponse {
    regionCodes!: readonly $verification.RegionCode[]
    nextPageToken!: string
    get $type() {
        return ListRegionCodeResponse.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.verification.v1.ListRegionCodeResponse")
}
ListRegionCodeResponse.$type.generatedObject = ListRegionCodeResponse
ListRegionCodeResponse.prototype.regionCodes = ListRegionCodeResponse.$type.fieldsById[1].defaultValue
ListRegionCodeResponse.prototype.nextPageToken = ListRegionCodeResponse.$type.fieldsById[2].defaultValue

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