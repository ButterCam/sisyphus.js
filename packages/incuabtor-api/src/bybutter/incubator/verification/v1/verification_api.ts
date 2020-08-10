import * as $sisyphus from "@sisyphus.js/core"
import * as $protobuf from "protobufjs"
import * as $verification from "./verification"
import * as $reflection from "../../../../_reflection"


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
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "phoneTextTarget":
                    result[key] = $verification.PhoneTarget.create(properties[key])
                    break
                case "phoneSoundTarget":
                    result[key] = $verification.PhoneTarget.create(properties[key])
                    break
                case "emailTarget":
                    result[key] = $verification.EmailTarget.create(properties[key])
                    break
                case "context":
                    result[key] = String(properties[key])
                    break
            }
        }
        return result
    }
}
Object.defineProperty(SendVerificationCodeRequest.prototype, "target", $sisyphus.oneOfProperty("phoneTextTarget", "phoneSoundTarget", "emailTarget"))
SendVerificationCodeRequest.prototype.phoneTextTarget = null
SendVerificationCodeRequest.prototype.phoneSoundTarget = null
SendVerificationCodeRequest.prototype.emailTarget = null
SendVerificationCodeRequest.prototype.context = ""


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
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
            }
        }
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
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "phoneTextTarget":
                    result[key] = $verification.PhoneTarget.create(properties[key])
                    break
                case "phoneSoundTarget":
                    result[key] = $verification.PhoneTarget.create(properties[key])
                    break
                case "emailTarget":
                    result[key] = $verification.EmailTarget.create(properties[key])
                    break
                case "context":
                    result[key] = String(properties[key])
                    break
                case "code":
                    result[key] = String(properties[key])
                    break
            }
        }
        return result
    }
}
Object.defineProperty(VerifyVerificationCodeRequest.prototype, "target", $sisyphus.oneOfProperty("phoneTextTarget", "phoneSoundTarget", "emailTarget"))
VerifyVerificationCodeRequest.prototype.phoneTextTarget = null
VerifyVerificationCodeRequest.prototype.phoneSoundTarget = null
VerifyVerificationCodeRequest.prototype.emailTarget = null
VerifyVerificationCodeRequest.prototype.context = ""
VerifyVerificationCodeRequest.prototype.code = ""


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
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "result":
                    result[key] = Boolean(properties[key])
                    break
            }
        }
        return result
    }
}
VerifyVerificationCodeResponse.prototype.result = false


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
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "pageSize":
                    result[key] = Number(properties[key])
                    break
                case "pageToken":
                    result[key] = String(properties[key])
                    break
            }
        }
        return result
    }
}
ListRegionCodeRequest.prototype.pageSize = 0
ListRegionCodeRequest.prototype.pageToken = ""


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
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "regionCodes":
                    result[key] = $verification.RegionCode.create(properties[key])
                    break
                case "nextPageToken":
                    result[key] = String(properties[key])
                    break
            }
        }
        return result
    }
}
ListRegionCodeResponse.prototype.regionCodes = null
ListRegionCodeResponse.prototype.nextPageToken = ""

//Service: .bybutter.incubator.verification.v1.VerificationApi