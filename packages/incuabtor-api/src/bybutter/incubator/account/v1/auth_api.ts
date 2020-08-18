import * as $auth from "./auth"
import * as $protobuf from "protobufjs"
import * as $reflection from "../../../../_reflection"
import * as $sisyphus from "@sisyphus.js/core"
import * as $empty from "../../../../google/protobuf/empty"
import * as $account from "../../common/v1/account"


/** 登陆请求结构。 */
export interface ILoginRequest {
    /** 静默登陆创建的认证码。 */
    identificationCredential?: $auth.IIdentificationCredential
    /** 手机号与短信验证码。 */
    mobileCredential?: $auth.IMobileCredential
    /** 静默登陆时的签名。 */
    signatureCredential?: $auth.ISignatureCredential
    /** IAP收据 */
    iapCredential?: $auth.IIapCredential
    /** 目前接受三种登陆凭证，分别是静默登陆创建的认证码，手机号以及静默登陆时的签名。 */
    Credential?: string
}

export class LoginRequest extends $protobuf.Message<LoginRequest> implements ILoginRequest {
    identificationCredential!: $auth.IdentificationCredential
    mobileCredential!: $auth.MobileCredential
    signatureCredential!: $auth.SignatureCredential
    iapCredential!: $auth.IapCredential
    Credential?: string

    get $type() {
        return LoginRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.account.v1.LoginRequest")
}
LoginRequest.$type.generatedObject = LoginRequest
Object.defineProperty(LoginRequest.prototype, "Credential", $sisyphus.oneOfProperty("identificationCredential", "mobileCredential", "signatureCredential", "iapCredential"))
LoginRequest.prototype.identificationCredential = LoginRequest.$type.fieldsById[11].defaultValue
LoginRequest.prototype.mobileCredential = LoginRequest.$type.fieldsById[12].defaultValue
LoginRequest.prototype.signatureCredential = LoginRequest.$type.fieldsById[13].defaultValue
LoginRequest.prototype.iapCredential = LoginRequest.$type.fieldsById[14].defaultValue


/** 登陆响应结构。 */
export interface ILoginResponse {
    /** 服务端下发的 API 访问 Token。 */
    token?: $auth.IApiToken
    /** 静默登陆创建的认证码，SignatureCredential 类型的凭据最后也会解析成本凭据。 */
    identificationCredential?: $auth.IIdentificationCredential
    /** 手机号与短信验证码。 */
    mobileCredential?: $auth.IMobileCredential
    /** IAP收据 */
    iapCredential?: $auth.IIapCredential
    /** 登陆时所用的凭据，一般会原样返回给客户端，但在使用静默登陆签名时，会转化为 IdentificationCredential 返回。 */
    Credential?: string
}

export class LoginResponse extends $protobuf.Message<LoginResponse> implements ILoginResponse {
    token!: $auth.ApiToken
    identificationCredential!: $auth.IdentificationCredential
    mobileCredential!: $auth.MobileCredential
    iapCredential!: $auth.IapCredential
    Credential?: string

    get $type() {
        return LoginResponse.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.account.v1.LoginResponse")
}
LoginResponse.$type.generatedObject = LoginResponse
Object.defineProperty(LoginResponse.prototype, "Credential", $sisyphus.oneOfProperty("identificationCredential", "mobileCredential", "iapCredential"))
LoginResponse.prototype.token = LoginResponse.$type.fieldsById[1].defaultValue
LoginResponse.prototype.identificationCredential = LoginResponse.$type.fieldsById[11].defaultValue
LoginResponse.prototype.mobileCredential = LoginResponse.$type.fieldsById[12].defaultValue
LoginResponse.prototype.iapCredential = LoginResponse.$type.fieldsById[14].defaultValue


/** 获取账户详情请求结构。 */
export interface IGetAccountRequest {
    /** 账户资源名称 */
    name?: string
}

export class GetAccountRequest extends $protobuf.Message<GetAccountRequest> implements IGetAccountRequest {
    name!: string
    get $type() {
        return GetAccountRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.account.v1.GetAccountRequest")
}
GetAccountRequest.$type.generatedObject = GetAccountRequest
GetAccountRequest.prototype.name = GetAccountRequest.$type.fieldsById[1].defaultValue

/** 验证与登陆 API。 */
export class AuthApi extends $sisyphus.Client {
    get $reflection() {
        return AuthApi.reflection
    }
    /**
     * 登陆接口。
     * (-- api-linter: core::0136::verb-noun=disabled
     * aip.dev/not-precedent: Login 是不及物动词，且确实没有名词合适 --)
     */
    async Login(input: ILoginRequest, metadata?: { [k: string]: string }): Promise<ILoginResponse> {
        return await this.$call(this.$reflection.methods["Login"], input, metadata)
    }
    /**
     * 登出接口。
     * (-- api-linter: core::0136::verb-noun=disabled
     * aip.dev/not-precedent: Logout 是不及物动词，且确实没有名词合适 --)
     */
    async Logout(input: $empty.IEmpty, metadata?: { [k: string]: string }): Promise<$empty.IEmpty> {
        return await this.$call(this.$reflection.methods["Logout"], input, metadata)
    }
    /** 获取账户详情。 */
    async GetAccount(input: IGetAccountRequest, metadata?: { [k: string]: string }): Promise<$account.IAccount> {
        return await this.$call(this.$reflection.methods["GetAccount"], input, metadata)
    }
    static readonly reflection = $reflection.root.lookupService(".bybutter.incubator.account.v1.AuthApi")
}