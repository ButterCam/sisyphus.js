import * as $storage from "./storage"
import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"
import * as $timestamp from "../../../../google/protobuf/timestamp"


/** 获取Oss token 请求 */
export interface IGenerateOssTokenRequest {
    /** 角色 */
    ossRole?: $storage.OssRole
}

export class GenerateOssTokenRequest extends $sisyphus.Message<GenerateOssTokenRequest> implements IGenerateOssTokenRequest {
    ossRole!: $storage.OssRole
}
$reflection.root.lookupType(".bybutter.incubator.storage.v1.GenerateOssTokenRequest").messageCtor = GenerateOssTokenRequest


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

export class GenerateOssTokenResponse extends $sisyphus.Message<GenerateOssTokenResponse> implements IGenerateOssTokenResponse {
    accessKeyId!: string
    accessKeySecret!: string
    securityToken!: string
    expirationTime!: $timestamp.Timestamp
}
$reflection.root.lookupType(".bybutter.incubator.storage.v1.GenerateOssTokenResponse").messageCtor = GenerateOssTokenResponse

/** 存储Api */
export class StorageApi extends $sisyphus.Client {
    get $service() {
        return StorageApi.$service
    }
    /** 获取Oss token */
    async GenerateOssToken(input: IGenerateOssTokenRequest, metadata?: { [k: string]: string }): Promise<GenerateOssTokenResponse> {
        return await this.$call(this.$service.methods["GenerateOssToken"], input, metadata)
    }
    static readonly $service = $reflection.root.lookupService(".bybutter.incubator.storage.v1.StorageApi")
}