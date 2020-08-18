import * as $protobuf from "protobufjs"
import * as $timestamp from "../../../../google/protobuf/timestamp"
import * as $struct from "../../../../google/protobuf/struct"
import * as $clientInfo from "./client_info"
import * as $any from "../../../../google/protobuf/any"
import * as $reflection from "../../../../_reflection"


/**
 * Token 的 Payload 结构，描述了用户与服务，服务与服务间通信所使用的 Token 具体结构。
 * 下发给用户的 Token 为简化版本，在进入服务体系中会自动校验并填充完整，功能由 ':component:auth' 包完成。
 */
export interface ITokenPayload {
    /** 账户资源名称，通常为 'accounts/*' 的形式。 */
    account?: string
    /** Token 世代，每次登录将会递增，系统同时只接受 3 个世代内的 token。 */
    generation?: $protobuf.Long
    /**
     * Token 被签署的时间，Token 目前没有强制的失效时间。当 Token 被签发超过 1 天仍然被使用，
     * 服务端会尝试开始向客户端下发新的 Token。
     */
    createTime?: $timestamp.ITimestamp
    /** 该 Token 是否以及被完全解析，无需重新解析。 */
    resolved?: boolean
    /** 用户的权限信息。 */
    permissions?: readonly $struct.IValue[]
    /** 客户端信息。 */
    client?: $clientInfo.IClientInfo
    /** 用户的 Meta 信息。 */
    metadata?: { readonly [k: string]: $any.IAny }
}

export class TokenPayload extends $protobuf.Message<TokenPayload> implements ITokenPayload {
    account!: string
    generation!: $protobuf.Long
    createTime!: $timestamp.Timestamp
    resolved!: boolean
    permissions!: readonly $struct.Value[]
    client!: $clientInfo.ClientInfo
    metadata!: { readonly [k: string]: $any.Any }

    get $type() {
        return TokenPayload.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.common.v1.TokenPayload")
}

TokenPayload.$type.generatedObject = TokenPayload
TokenPayload.prototype.account = TokenPayload.$type.fieldsById[1].defaultValue
TokenPayload.prototype.generation = TokenPayload.$type.fieldsById[2].defaultValue
TokenPayload.prototype.createTime = TokenPayload.$type.fieldsById[3].defaultValue
TokenPayload.prototype.resolved = TokenPayload.$type.fieldsById[21].defaultValue
TokenPayload.prototype.permissions = TokenPayload.$type.fieldsById[22].defaultValue
TokenPayload.prototype.client = TokenPayload.$type.fieldsById[23].defaultValue
TokenPayload.prototype.metadata = TokenPayload.$type.fieldsById[24].defaultValue

export namespace TokenPayload {

    /**
     * TokenPayload 的编码方式，所有 Token 都会通过各种算法进行编码，在不同场景下采用的编码方式各不相同，
     * 但是大体上 Token 全是由 Base64 编码，且前面第一个 block(this) 编码的数字为本枚举值，通过不同的枚举值决定后续的编码过程。
     */
    export enum EncodingType {
        /** 未指定编码方式。 */
        ENCODING_TYPE_UNSPECIFIED = 0,
        /**
         * 明文编码方式，用于内部服务间调用以提升性能减少大小，将 TokenPayload 结构转为 Protobuf 格式，
         * 然后在前面加上 Varint 编码的模式枚举值（0x01），最后整体 Base64 Safe 编码即可。
         */
        ENCODING_TYPE_PLAINTEXT = 1,
        /**
         * AES 固定密钥加密模式，用于客户端调用以保证安全性，生成三个随机字节，并进行 md5 把结果字节数组当作 iv 矩阵，
         * 将 TokenPayload 结构转为 Protobuf 格式，并通过一个固定密钥，和生成的随机 iv 矩阵 AES/CBC/PKCS5Padding 加密，
         * 将加密结果前面加上 Varint 编码的模式枚举值（0x02）和生成的 3 个随机字节当作头部信息，最后整体 Base64 Safe 编码即可。
         */
        ENCODING_TYPE_AES = 2,
    }

    export namespace EncodingType {
        export const reflection = $reflection.root.lookupEnum(".bybutter.incubator.common.v1.TokenPayload.EncodingType")
    }
}