import * as $storage from "./storage"
import * as $protobuf from "protobufjs"
import * as $reflection from "../../../../_reflection"
import * as $timestamp from "../../../../google/protobuf/timestamp"
import * as $sisyphus from "@sisyphus.js/core"


/** 获取Oss token 请求 */
export interface IGenerateOssTokenRequest {
    /** 角色 */
    ossRole?: $storage.OssRole
}

export class GenerateOssTokenRequest extends $protobuf.Message<GenerateOssTokenRequest> implements IGenerateOssTokenRequest {
    ossRole!: $storage.OssRole
    get $type() {
        return GenerateOssTokenRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.storage.v1.GenerateOssTokenRequest")
}
GenerateOssTokenRequest.$type.generatedObject = GenerateOssTokenRequest
GenerateOssTokenRequest.prototype.ossRole = GenerateOssTokenRequest.$type.fieldsById[1].defaultValue


/** 获取Oss token 请求 */
export interface IGenerateOssTokenResponse {
    /** key */
    accessKeyId?: string
    /** secret */
    accessKeySecret?: string
    /** token */
    securityToken?: string
    /** 过期时间 */
    expirationTime?: $timestamp.ITimestamp
}

export class GenerateOssTokenResponse extends $protobuf.Message<GenerateOssTokenResponse> implements IGenerateOssTokenResponse {
    accessKeyId!: string
    accessKeySecret!: string
    securityToken!: string
    expirationTime!: $timestamp.Timestamp
    get $type() {
        return GenerateOssTokenResponse.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.storage.v1.GenerateOssTokenResponse")
}
GenerateOssTokenResponse.$type.generatedObject = GenerateOssTokenResponse
GenerateOssTokenResponse.prototype.accessKeyId = GenerateOssTokenResponse.$type.fieldsById[1].defaultValue
GenerateOssTokenResponse.prototype.accessKeySecret = GenerateOssTokenResponse.$type.fieldsById[2].defaultValue
GenerateOssTokenResponse.prototype.securityToken = GenerateOssTokenResponse.$type.fieldsById[3].defaultValue
GenerateOssTokenResponse.prototype.expirationTime = GenerateOssTokenResponse.$type.fieldsById[4].defaultValue

/** 存储Api */
export class StorageApi extends $sisyphus.Client {
    get $reflection() {
        return StorageApi.reflection
    }
    /** 获取Oss token */
    async GenerateOssToken(input: IGenerateOssTokenRequest, metadata?: { [k: string]: string }): Promise<IGenerateOssTokenResponse> {
        return await this.$call(this.$reflection.methods["GenerateOssToken"], input, metadata)
    }
    static readonly reflection = $reflection.root.lookupService(".bybutter.incubator.storage.v1.StorageApi")
}