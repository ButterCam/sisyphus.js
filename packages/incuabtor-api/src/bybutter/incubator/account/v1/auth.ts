import * as $struct from "../../../../google/protobuf/struct"
import * as $protobuf from "protobufjs"
import * as $reflection from "../../../../_reflection"
import * as $incubatorProduct from "../../common/v1/incubator_product"
import * as $timestamp from "../../../../google/protobuf/timestamp"


/** 用于访问 API 所签署的 Token。 */
export interface IApiToken {
    /** Token 签署的目标用户。 */
    account?: string
    /** 签署的 Token，内容为加密过的 TokenPayload。 */
    token?: string
    /** 用户当前具有的所有权限。 */
    permissions?: readonly $struct.IValue[]
}

export class ApiToken extends $protobuf.Message<ApiToken> implements IApiToken {
    account!: string
    token!: string
    permissions!: readonly $struct.Value[]

    get $type() {
        return ApiToken.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.account.v1.ApiToken")
}

ApiToken.$type.generatedObject = ApiToken
ApiToken.prototype.account = ApiToken.$type.fieldsById[1].defaultValue
ApiToken.prototype.token = ApiToken.$type.fieldsById[2].defaultValue
ApiToken.prototype.permissions = ApiToken.$type.fieldsById[3].defaultValue


/** 用于创建 API Token 的手机登陆凭据。 */
export interface IMobileCredential {
    /** 手机号的区号。 */
    regionCode?: string
    /** 手机号码。 */
    phoneNumber?: string
    /** 所接受到的验证码。 */
    code?: string
}

export class MobileCredential extends $protobuf.Message<MobileCredential> implements IMobileCredential {
    regionCode!: string
    phoneNumber!: string
    code!: string

    get $type() {
        return MobileCredential.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.account.v1.MobileCredential")
}

MobileCredential.$type.generatedObject = MobileCredential
MobileCredential.prototype.regionCode = MobileCredential.$type.fieldsById[1].defaultValue
MobileCredential.prototype.phoneNumber = MobileCredential.$type.fieldsById[2].defaultValue
MobileCredential.prototype.code = MobileCredential.$type.fieldsById[3].defaultValue


/** 用于创建 API Token 的基于静默登陆时创建的认证码的登陆凭据。 */
export interface IIdentificationCredential {
    /** 静默登陆时创建的认证码。 */
    identification?: string
}

export class IdentificationCredential extends $protobuf.Message<IdentificationCredential> implements IIdentificationCredential {
    identification!: string

    get $type() {
        return IdentificationCredential.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.account.v1.IdentificationCredential")
}

IdentificationCredential.$type.generatedObject = IdentificationCredential
IdentificationCredential.prototype.identification = IdentificationCredential.$type.fieldsById[1].defaultValue


/** 用于创建 API Token 的基于IAP登录凭证。 */
export interface IIapCredential {
    /** 收据。 */
    receipt?: string
    /** iap服务 用于选择请求那个服务去获取订单信息 */
    product?: $incubatorProduct.IncubatorProduct
}

export class IapCredential extends $protobuf.Message<IapCredential> implements IIapCredential {
    receipt!: string
    product!: $incubatorProduct.IncubatorProduct

    get $type() {
        return IapCredential.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.account.v1.IapCredential")
}

IapCredential.$type.generatedObject = IapCredential
IapCredential.prototype.receipt = IapCredential.$type.fieldsById[1].defaultValue
IapCredential.prototype.product = IapCredential.$type.fieldsById[2].defaultValue


/** 用于静默登陆时创建 API Token 的签名。 */
export interface ISignatureCredential {
    /**
     * 静默登陆签名，签名生成步骤为 "incubator:${create_time.toSeconds()}".md5Data().base64()
     * 01. 将常量和签名时间拼装创建 'incubator:<create_time>' 字符串，`<create_time>` 为签名时间的时间戳秒数
     * 02. 将整体签名通过 MD5 ，得到 Hash 后的的 16 个字节
     * 03. 将这 16 个字节 Base64 编码
     * 接受 ±30 分钟内签署的签名。
     */
    signature?: Uint8Array
    /** 签名签署时间。 */
    createTime?: $timestamp.ITimestamp
}

export class SignatureCredential extends $protobuf.Message<SignatureCredential> implements ISignatureCredential {
    signature!: Uint8Array
    createTime!: $timestamp.Timestamp

    get $type() {
        return SignatureCredential.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.account.v1.SignatureCredential")
}

SignatureCredential.$type.generatedObject = SignatureCredential
SignatureCredential.prototype.signature = SignatureCredential.$type.fieldsById[1].defaultValue
SignatureCredential.prototype.createTime = SignatureCredential.$type.fieldsById[2].defaultValue