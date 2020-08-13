import * as $storage from "./storage"
import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"
import * as $protobuf from "protobufjs"
import * as $timestamp from "../../../../google/protobuf/timestamp"


/** 获取Oss token 请求 */
export interface IGenerateOssTokenRequest {
    /** 角色 */
    ossRole?: $storage.OssRole
}

export class GenerateOssTokenRequest extends $sisyphus.Message<IGenerateOssTokenRequest> implements IGenerateOssTokenRequest {
    ossRole!: $storage.OssRole
    get $reflection() {
        return GenerateOssTokenRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.storage.v1.GenerateOssTokenRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): GenerateOssTokenRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.ossRole = reader.uint32()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): GenerateOssTokenRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IGenerateOssTokenRequest): GenerateOssTokenRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("ossRole") && properties.ossRole !== undefined) result.ossRole = properties.ossRole
        return result
    }
}
GenerateOssTokenRequest.prototype.ossRole = $storage.OssRole.OSS_ROLE_UNSPECIFIED


/** 获取Oss token 请求 */
export interface IGenerateOssTokenResponse {
    /** key */
    accessKeyId?: string
    /** secret */
    accessKeySecret?: string
    /** token */
    securityToken?: string
    /** 过期时间 */
    expirationTime?: ($timestamp.ITimestamp | null)
}

export class GenerateOssTokenResponse extends $sisyphus.Message<IGenerateOssTokenResponse> implements IGenerateOssTokenResponse {
    accessKeyId!: string
    accessKeySecret!: string
    securityToken!: string
    expirationTime!: ($timestamp.ITimestamp | null)
    get $reflection() {
        return GenerateOssTokenResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.storage.v1.GenerateOssTokenResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): GenerateOssTokenResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.accessKeyId = reader.string()
                    break
                case 2:
                    result.accessKeySecret = reader.string()
                    break
                case 3:
                    result.securityToken = reader.string()
                    break
                case 4:
                    result.expirationTime = $timestamp.Timestamp.decodeDelimited(reader)
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): GenerateOssTokenResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IGenerateOssTokenResponse): GenerateOssTokenResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("accessKeyId") && properties.accessKeyId !== undefined) result.accessKeyId = properties.accessKeyId
        if(properties.hasOwnProperty("accessKeySecret") && properties.accessKeySecret !== undefined) result.accessKeySecret = properties.accessKeySecret
        if(properties.hasOwnProperty("securityToken") && properties.securityToken !== undefined) result.securityToken = properties.securityToken
        if(properties.hasOwnProperty("expirationTime") && properties.expirationTime !== undefined) result.expirationTime = $timestamp.Timestamp.create(properties.expirationTime)
        return result
    }
}
GenerateOssTokenResponse.prototype.accessKeyId = ""
GenerateOssTokenResponse.prototype.accessKeySecret = ""
GenerateOssTokenResponse.prototype.securityToken = ""
GenerateOssTokenResponse.prototype.expirationTime = null

//Service: .bybutter.incubator.storage.v1.StorageApi