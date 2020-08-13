import * as $protobuf from "protobufjs"
import * as $timestamp from "../../../../google/protobuf/timestamp"
import * as $struct from "../../../../google/protobuf/struct"
import * as $clientInfo from "./client_info"
import * as $any from "../../../../google/protobuf/any"
import * as $sisyphus from "@sisyphus.js/core"
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
    createTime?: ($timestamp.ITimestamp | null)
    /** 该 Token 是否以及被完全解析，无需重新解析。 */
    resolved?: boolean
    /** 用户的权限信息。 */
    permissions?: ($struct.IValue[] | null)
    /** 客户端信息。 */
    client?: ($clientInfo.IClientInfo | null)
    /** 用户的 Meta 信息。 */
    metadata?: ({ [k: string]: $any.IAny } | null)
}

export class TokenPayload extends $sisyphus.Message<ITokenPayload> implements ITokenPayload {
    account!: string
    generation!: $protobuf.Long
    createTime!: ($timestamp.ITimestamp | null)
    resolved!: boolean
    permissions!: ($struct.IValue[] | null)
    client!: ($clientInfo.IClientInfo | null)
    metadata!: ({ [k: string]: $any.IAny } | null)
    get $reflection() {
        return TokenPayload.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.common.v1.TokenPayload")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): TokenPayload {
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
                    result.generation = reader.int64()
                    break
                case 3:
                    result.createTime = $timestamp.Timestamp.decodeDelimited(reader)
                    break
                case 21:
                    result.resolved = reader.bool()
                    break
                case 22:
                    if (!result.permissions) result.permissions = []
                    result.permissions.push($struct.Value.decodeDelimited(reader))
                    break
                case 23:
                    result.client = $clientInfo.ClientInfo.decodeDelimited(reader)
                    break
                case 24:
                    if (!result.metadata) result.metadata = {}
                    const [key, value] = sisyphus.readMapEntry(this.reflection.fields["metadata"], reader, $any.Any)
                    result.metadata[key] = value
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): TokenPayload {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: ITokenPayload): TokenPayload {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("account") && properties.account !== undefined) result.account = properties.account
        if(properties.hasOwnProperty("generation") && properties.generation !== undefined) result.generation = properties.generation
        if(properties.hasOwnProperty("createTime") && properties.createTime !== undefined) result.createTime = $timestamp.Timestamp.create(properties.createTime)
        if(properties.hasOwnProperty("resolved") && properties.resolved !== undefined) result.resolved = properties.resolved
        if(properties.hasOwnProperty("permissions") && properties.permissions !== undefined) result.permissions = $struct.Value.create(properties.permissions)
        if(properties.hasOwnProperty("client") && properties.client !== undefined) result.client = $clientInfo.ClientInfo.create(properties.client)
        if(properties.hasOwnProperty("metadata") && properties.metadata !== undefined) result.metadata = $any.Any.create(properties.metadata)
        return result
    }
}
TokenPayload.prototype.account = ""
TokenPayload.prototype.generation = $sisyphus.Long.ZERO
TokenPayload.prototype.createTime = null
TokenPayload.prototype.resolved = false
TokenPayload.prototype.permissions = null
TokenPayload.prototype.client = null
TokenPayload.prototype.metadata = null

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