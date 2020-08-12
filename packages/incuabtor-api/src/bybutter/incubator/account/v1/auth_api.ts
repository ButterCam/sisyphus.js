import * as $sisyphus from "@sisyphus.js/core"
import * as $protobuf from "protobufjs"
import * as $auth from "./auth"
import * as $reflection from "../../../../_reflection"


/** 登陆请求结构。 */
export interface ILoginRequest {
    /** 静默登陆创建的认证码。 */
    identificationCredential?: ($auth.IIdentificationCredential | null)
    /** 手机号与短信验证码。 */
    mobileCredential?: ($auth.IMobileCredential | null)
    /** 静默登陆时的签名。 */
    signatureCredential?: ($auth.ISignatureCredential | null)
    /** IAP收据 */
    iapCredential?: ($auth.IIapCredential | null)
    /** 目前接受三种登陆凭证，分别是静默登陆创建的认证码，手机号以及静默登陆时的签名。 */
    Credential?: string
}

export class LoginRequest extends $sisyphus.Message<ILoginRequest> implements ILoginRequest {
    identificationCredential!: ($auth.IIdentificationCredential | null)
    mobileCredential!: ($auth.IMobileCredential | null)
    signatureCredential!: ($auth.ISignatureCredential | null)
    iapCredential!: ($auth.IIapCredential | null)
    Credential?: string

    get $reflection() {
        return LoginRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.account.v1.LoginRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): LoginRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 11:
                    result.identificationCredential = $auth.IdentificationCredential.decodeDelimited(reader)
                    break
                case 12:
                    result.mobileCredential = $auth.MobileCredential.decodeDelimited(reader)
                    break
                case 13:
                    result.signatureCredential = $auth.SignatureCredential.decodeDelimited(reader)
                    break
                case 14:
                    result.iapCredential = $auth.IapCredential.decodeDelimited(reader)
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): LoginRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: ILoginRequest): LoginRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("identificationCredential") && properties.identificationCredential !== undefined) result.identificationCredential = $auth.IdentificationCredential.create(properties.identificationCredential)
        if(properties.hasOwnProperty("mobileCredential") && properties.mobileCredential !== undefined) result.mobileCredential = $auth.MobileCredential.create(properties.mobileCredential)
        if(properties.hasOwnProperty("signatureCredential") && properties.signatureCredential !== undefined) result.signatureCredential = $auth.SignatureCredential.create(properties.signatureCredential)
        if(properties.hasOwnProperty("iapCredential") && properties.iapCredential !== undefined) result.iapCredential = $auth.IapCredential.create(properties.iapCredential)
        return result
    }
}
Object.defineProperty(LoginRequest.prototype, "Credential", $sisyphus.oneOfProperty("identificationCredential", "mobileCredential", "signatureCredential", "iapCredential"))
LoginRequest.prototype.identificationCredential = null
LoginRequest.prototype.mobileCredential = null
LoginRequest.prototype.signatureCredential = null
LoginRequest.prototype.iapCredential = null


/** 登陆响应结构。 */
export interface ILoginResponse {
    /** 服务端下发的 API 访问 Token。 */
    token?: ($auth.IApiToken | null)
    /** 静默登陆创建的认证码，SignatureCredential 类型的凭据最后也会解析成本凭据。 */
    identificationCredential?: ($auth.IIdentificationCredential | null)
    /** 手机号与短信验证码。 */
    mobileCredential?: ($auth.IMobileCredential | null)
    /** IAP收据 */
    iapCredential?: ($auth.IIapCredential | null)
    /** 登陆时所用的凭据，一般会原样返回给客户端，但在使用静默登陆签名时，会转化为 IdentificationCredential 返回。 */
    Credential?: string
}

export class LoginResponse extends $sisyphus.Message<ILoginResponse> implements ILoginResponse {
    token!: ($auth.IApiToken | null)
    identificationCredential!: ($auth.IIdentificationCredential | null)
    mobileCredential!: ($auth.IMobileCredential | null)
    iapCredential!: ($auth.IIapCredential | null)
    Credential?: string

    get $reflection() {
        return LoginResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.account.v1.LoginResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): LoginResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.token = $auth.ApiToken.decodeDelimited(reader)
                    break
                case 11:
                    result.identificationCredential = $auth.IdentificationCredential.decodeDelimited(reader)
                    break
                case 12:
                    result.mobileCredential = $auth.MobileCredential.decodeDelimited(reader)
                    break
                case 14:
                    result.iapCredential = $auth.IapCredential.decodeDelimited(reader)
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): LoginResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: ILoginResponse): LoginResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("token") && properties.token !== undefined) result.token = $auth.ApiToken.create(properties.token)
        if(properties.hasOwnProperty("identificationCredential") && properties.identificationCredential !== undefined) result.identificationCredential = $auth.IdentificationCredential.create(properties.identificationCredential)
        if(properties.hasOwnProperty("mobileCredential") && properties.mobileCredential !== undefined) result.mobileCredential = $auth.MobileCredential.create(properties.mobileCredential)
        if(properties.hasOwnProperty("iapCredential") && properties.iapCredential !== undefined) result.iapCredential = $auth.IapCredential.create(properties.iapCredential)
        return result
    }
}
Object.defineProperty(LoginResponse.prototype, "Credential", $sisyphus.oneOfProperty("identificationCredential", "mobileCredential", "iapCredential"))
LoginResponse.prototype.token = null
LoginResponse.prototype.identificationCredential = null
LoginResponse.prototype.mobileCredential = null
LoginResponse.prototype.iapCredential = null


/** 获取账户详情请求结构。 */
export interface IGetAccountRequest {
    /** 账户资源名称 */
    name?: string
}

export class GetAccountRequest extends $sisyphus.Message<IGetAccountRequest> implements IGetAccountRequest {
    name!: string
    get $reflection() {
        return GetAccountRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.account.v1.GetAccountRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): GetAccountRequest {
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

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): GetAccountRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IGetAccountRequest): GetAccountRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("name") && properties.name !== undefined) result.name = properties.name
        return result
    }
}
GetAccountRequest.prototype.name = ""

//Service: .bybutter.incubator.account.v1.AuthApi