import * as $struct from "../../../../google/protobuf/struct"
import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"
import * as $protobuf from "protobufjs"
import * as $incubatorProduct from "../../common/v1/incubator_product"
import * as $timestamp from "../../../../google/protobuf/timestamp"


/** 用于访问 API 所签署的 Token。 */
export interface IApiToken {
    /** Token 签署的目标用户。 */
    account?: string
    /** 签署的 Token，内容为加密过的 TokenPayload。 */
    token?: string
    /** 用户当前具有的所有权限。 */
    permissions?: ($struct.IValue[] | null)
}

export class ApiToken extends $sisyphus.Message<IApiToken> implements IApiToken {
    account!: string
    token!: string
    permissions!: ($struct.IValue[] | null)
    get $reflection() {
        return ApiToken.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.account.v1.ApiToken")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ApiToken {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.account = reader.string()
                    break
                case 2:
                    result.token = reader.string()
                    break
                case 3:
                    if (!result.permissions) result.permissions = []
                    result.permissions.push($struct.Value.decodeDelimited(reader))
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ApiToken {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IApiToken): ApiToken {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("account") && properties.account !== undefined) result.account = properties.account
        if(properties.hasOwnProperty("token") && properties.token !== undefined) result.token = properties.token
        if(properties.hasOwnProperty("permissions") && properties.permissions !== undefined) result.permissions = $struct.Value.create(properties.permissions)
        return result
    }
}
ApiToken.prototype.account = ""
ApiToken.prototype.token = ""
ApiToken.prototype.permissions = null


/** 用于创建 API Token 的手机登陆凭据。 */
export interface IMobileCredential {
    /** 手机号的区号。 */
    regionCode?: string
    /** 手机号码。 */
    phoneNumber?: string
    /** 所接受到的验证码。 */
    code?: string
}

export class MobileCredential extends $sisyphus.Message<IMobileCredential> implements IMobileCredential {
    regionCode!: string
    phoneNumber!: string
    code!: string
    get $reflection() {
        return MobileCredential.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.account.v1.MobileCredential")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): MobileCredential {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.regionCode = reader.string()
                    break
                case 2:
                    result.phoneNumber = reader.string()
                    break
                case 3:
                    result.code = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): MobileCredential {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IMobileCredential): MobileCredential {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("regionCode") && properties.regionCode !== undefined) result.regionCode = properties.regionCode
        if(properties.hasOwnProperty("phoneNumber") && properties.phoneNumber !== undefined) result.phoneNumber = properties.phoneNumber
        if(properties.hasOwnProperty("code") && properties.code !== undefined) result.code = properties.code
        return result
    }
}
MobileCredential.prototype.regionCode = ""
MobileCredential.prototype.phoneNumber = ""
MobileCredential.prototype.code = ""


/** 用于创建 API Token 的基于静默登陆时创建的认证码的登陆凭据。 */
export interface IIdentificationCredential {
    /** 静默登陆时创建的认证码。 */
    identification?: string
}

export class IdentificationCredential extends $sisyphus.Message<IIdentificationCredential> implements IIdentificationCredential {
    identification!: string
    get $reflection() {
        return IdentificationCredential.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.account.v1.IdentificationCredential")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): IdentificationCredential {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.identification = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): IdentificationCredential {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IIdentificationCredential): IdentificationCredential {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("identification") && properties.identification !== undefined) result.identification = properties.identification
        return result
    }
}
IdentificationCredential.prototype.identification = ""


/** 用于创建 API Token 的基于IAP登录凭证。 */
export interface IIapCredential {
    /** 收据。 */
    receipt?: string
    /** iap服务 用于选择请求那个服务去获取订单信息 */
    product?: $incubatorProduct.IncubatorProduct
}

export class IapCredential extends $sisyphus.Message<IIapCredential> implements IIapCredential {
    receipt!: string
    product!: $incubatorProduct.IncubatorProduct
    get $reflection() {
        return IapCredential.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.account.v1.IapCredential")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): IapCredential {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.receipt = reader.string()
                    break
                case 2:
                    result.product = reader.uint32()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): IapCredential {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IIapCredential): IapCredential {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("receipt") && properties.receipt !== undefined) result.receipt = properties.receipt
        if(properties.hasOwnProperty("product") && properties.product !== undefined) result.product = properties.product
        return result
    }
}
IapCredential.prototype.receipt = ""
IapCredential.prototype.product = $incubatorProduct.IncubatorProduct.INCUBATOR_PRODUCT_UNSPECIFIED


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
    createTime?: ($timestamp.ITimestamp | null)
}

export class SignatureCredential extends $sisyphus.Message<ISignatureCredential> implements ISignatureCredential {
    signature!: Uint8Array
    createTime!: ($timestamp.ITimestamp | null)
    get $reflection() {
        return SignatureCredential.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.account.v1.SignatureCredential")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): SignatureCredential {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.signature = reader.bytes()
                    break
                case 2:
                    result.createTime = $timestamp.Timestamp.decodeDelimited(reader)
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): SignatureCredential {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: ISignatureCredential): SignatureCredential {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("signature") && properties.signature !== undefined) result.signature = properties.signature
        if(properties.hasOwnProperty("createTime") && properties.createTime !== undefined) result.createTime = $timestamp.Timestamp.create(properties.createTime)
        return result
    }
}
SignatureCredential.prototype.signature = $sisyphus.emptyBytes
SignatureCredential.prototype.createTime = null