import * as $verification from "./verification"
import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"
import * as $protobuf from "protobufjs"


/** 发送验证码请求 */
export interface ISendVerificationCodeRequest {
    /** 文本验证码手机信息 */
    phoneTextTarget?: ($verification.IPhoneTarget | null)
    /** 语音验证码手机信息 */
    phoneSoundTarget?: ($verification.IPhoneTarget | null)
    /** 邮箱信息 */
    emailTarget?: ($verification.IEmailTarget | null)
    /** 情景 */
    context?: string
    target?: string
}

export class SendVerificationCodeRequest extends $sisyphus.Message<ISendVerificationCodeRequest> implements ISendVerificationCodeRequest {
    phoneTextTarget!: ($verification.IPhoneTarget | null)
    phoneSoundTarget!: ($verification.IPhoneTarget | null)
    emailTarget!: ($verification.IEmailTarget | null)
    context!: string
    target?: string

    get $reflection() {
        return SendVerificationCodeRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.verification.v1.SendVerificationCodeRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): SendVerificationCodeRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.phoneTextTarget = $verification.PhoneTarget.decodeDelimited(reader)
                    break
                case 2:
                    result.phoneSoundTarget = $verification.PhoneTarget.decodeDelimited(reader)
                    break
                case 3:
                    result.emailTarget = $verification.EmailTarget.decodeDelimited(reader)
                    break
                case 11:
                    result.context = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): SendVerificationCodeRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: ISendVerificationCodeRequest): SendVerificationCodeRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("phoneTextTarget") && properties.phoneTextTarget != null) result.phoneTextTarget = $verification.PhoneTarget.create(properties.phoneTextTarget)
        if(properties.hasOwnProperty("phoneSoundTarget") && properties.phoneSoundTarget != null) result.phoneSoundTarget = $verification.PhoneTarget.create(properties.phoneSoundTarget)
        if(properties.hasOwnProperty("emailTarget") && properties.emailTarget != null) result.emailTarget = $verification.EmailTarget.create(properties.emailTarget)
        if(properties.hasOwnProperty("context") && properties.context !== undefined) result.context = properties.context
        return result
    }
}
Object.defineProperty(SendVerificationCodeRequest.prototype, "target", $sisyphus.oneOfProperty("phoneTextTarget", "phoneSoundTarget", "emailTarget"))
SendVerificationCodeRequest.prototype.phoneTextTarget = SendVerificationCodeRequest.reflection.fieldsById[1].defaultValue
SendVerificationCodeRequest.prototype.phoneSoundTarget = SendVerificationCodeRequest.reflection.fieldsById[2].defaultValue
SendVerificationCodeRequest.prototype.emailTarget = SendVerificationCodeRequest.reflection.fieldsById[3].defaultValue
SendVerificationCodeRequest.prototype.context = SendVerificationCodeRequest.reflection.fieldsById[11].defaultValue


/** 发送验证码响应 */
export interface ISendVerificationCodeResponse {
}

export class SendVerificationCodeResponse extends $sisyphus.Message<ISendVerificationCodeResponse> implements ISendVerificationCodeResponse {
    get $reflection() {
        return SendVerificationCodeResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.verification.v1.SendVerificationCodeResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): SendVerificationCodeResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): SendVerificationCodeResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: ISendVerificationCodeResponse): SendVerificationCodeResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        return result
    }
}


/** 验证验证码请求 */
export interface IVerifyVerificationCodeRequest {
    /** 文本验证码手机信息 */
    phoneTextTarget?: ($verification.IPhoneTarget | null)
    /** 语音验证码手机信息 */
    phoneSoundTarget?: ($verification.IPhoneTarget | null)
    /** 邮箱信息 */
    emailTarget?: ($verification.IEmailTarget | null)
    /** 情景 */
    context?: string
    /** 验证码 */
    code?: string
    target?: string
}

export class VerifyVerificationCodeRequest extends $sisyphus.Message<IVerifyVerificationCodeRequest> implements IVerifyVerificationCodeRequest {
    phoneTextTarget!: ($verification.IPhoneTarget | null)
    phoneSoundTarget!: ($verification.IPhoneTarget | null)
    emailTarget!: ($verification.IEmailTarget | null)
    context!: string
    code!: string
    target?: string

    get $reflection() {
        return VerifyVerificationCodeRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.verification.v1.VerifyVerificationCodeRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): VerifyVerificationCodeRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.phoneTextTarget = $verification.PhoneTarget.decodeDelimited(reader)
                    break
                case 2:
                    result.phoneSoundTarget = $verification.PhoneTarget.decodeDelimited(reader)
                    break
                case 3:
                    result.emailTarget = $verification.EmailTarget.decodeDelimited(reader)
                    break
                case 11:
                    result.context = reader.string()
                    break
                case 12:
                    result.code = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): VerifyVerificationCodeRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IVerifyVerificationCodeRequest): VerifyVerificationCodeRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("phoneTextTarget") && properties.phoneTextTarget != null) result.phoneTextTarget = $verification.PhoneTarget.create(properties.phoneTextTarget)
        if(properties.hasOwnProperty("phoneSoundTarget") && properties.phoneSoundTarget != null) result.phoneSoundTarget = $verification.PhoneTarget.create(properties.phoneSoundTarget)
        if(properties.hasOwnProperty("emailTarget") && properties.emailTarget != null) result.emailTarget = $verification.EmailTarget.create(properties.emailTarget)
        if(properties.hasOwnProperty("context") && properties.context !== undefined) result.context = properties.context
        if(properties.hasOwnProperty("code") && properties.code !== undefined) result.code = properties.code
        return result
    }
}
Object.defineProperty(VerifyVerificationCodeRequest.prototype, "target", $sisyphus.oneOfProperty("phoneTextTarget", "phoneSoundTarget", "emailTarget"))
VerifyVerificationCodeRequest.prototype.phoneTextTarget = VerifyVerificationCodeRequest.reflection.fieldsById[1].defaultValue
VerifyVerificationCodeRequest.prototype.phoneSoundTarget = VerifyVerificationCodeRequest.reflection.fieldsById[2].defaultValue
VerifyVerificationCodeRequest.prototype.emailTarget = VerifyVerificationCodeRequest.reflection.fieldsById[3].defaultValue
VerifyVerificationCodeRequest.prototype.context = VerifyVerificationCodeRequest.reflection.fieldsById[11].defaultValue
VerifyVerificationCodeRequest.prototype.code = VerifyVerificationCodeRequest.reflection.fieldsById[12].defaultValue


/** 验证验证码响应 */
export interface IVerifyVerificationCodeResponse {
    /** 验证结果 */
    result?: boolean
}

export class VerifyVerificationCodeResponse extends $sisyphus.Message<IVerifyVerificationCodeResponse> implements IVerifyVerificationCodeResponse {
    result!: boolean
    get $reflection() {
        return VerifyVerificationCodeResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.verification.v1.VerifyVerificationCodeResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): VerifyVerificationCodeResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.result = reader.bool()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): VerifyVerificationCodeResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IVerifyVerificationCodeResponse): VerifyVerificationCodeResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("result") && properties.result !== undefined) result.result = properties.result
        return result
    }
}
VerifyVerificationCodeResponse.prototype.result = VerifyVerificationCodeResponse.reflection.fieldsById[1].defaultValue


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

export class ListRegionCodeRequest extends $sisyphus.Message<IListRegionCodeRequest> implements IListRegionCodeRequest {
    pageSize!: number
    pageToken!: string
    get $reflection() {
        return ListRegionCodeRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.verification.v1.ListRegionCodeRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListRegionCodeRequest {
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
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListRegionCodeRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListRegionCodeRequest): ListRegionCodeRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("pageSize") && properties.pageSize !== undefined) result.pageSize = properties.pageSize
        if(properties.hasOwnProperty("pageToken") && properties.pageToken !== undefined) result.pageToken = properties.pageToken
        return result
    }
}
ListRegionCodeRequest.prototype.pageSize = ListRegionCodeRequest.reflection.fieldsById[1].defaultValue
ListRegionCodeRequest.prototype.pageToken = ListRegionCodeRequest.reflection.fieldsById[2].defaultValue


/** 批量获取地区代码响应 */
export interface IListRegionCodeResponse {
    /**
     * (-- api-linter: core::0132::response-unknown-fields=disabled
     * aip.dev/not-precedent: 不知道为什么 非说不认识他 --)
     * 地区代码列表
     */
    regionCodes?: ($verification.IRegionCode[] | null)
    /** 下一页的token */
    nextPageToken?: string
}

export class ListRegionCodeResponse extends $sisyphus.Message<IListRegionCodeResponse> implements IListRegionCodeResponse {
    regionCodes!: ($verification.IRegionCode[] | null)
    nextPageToken!: string
    get $reflection() {
        return ListRegionCodeResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.verification.v1.ListRegionCodeResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListRegionCodeResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    if (!result.regionCodes) result.regionCodes = []
                    result.regionCodes.push($verification.RegionCode.decodeDelimited(reader))
                    break
                case 2:
                    result.nextPageToken = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListRegionCodeResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListRegionCodeResponse): ListRegionCodeResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("regionCodes") && properties.regionCodes != null) result.regionCodes = properties.regionCodes.map(it => $verification.RegionCode.create(it))
        if(properties.hasOwnProperty("nextPageToken") && properties.nextPageToken !== undefined) result.nextPageToken = properties.nextPageToken
        return result
    }
}
ListRegionCodeResponse.prototype.regionCodes = ListRegionCodeResponse.reflection.fieldsById[1].defaultValue
ListRegionCodeResponse.prototype.nextPageToken = ListRegionCodeResponse.reflection.fieldsById[2].defaultValue

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