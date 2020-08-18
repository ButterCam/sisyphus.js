import * as $protobuf from "protobufjs"
import * as $reflection from "../../../../_reflection"
import * as $sisyphus from "@sisyphus.js/core"
import * as $userMeta from "./user_meta"


/** 获取用户元信息的 API 请求 */
export interface IGetUserMetadataRequest {
    name?: string
}

export class GetUserMetadataRequest extends $protobuf.Message<GetUserMetadataRequest> implements IGetUserMetadataRequest {
    name!: string

    get $type() {
        return GetUserMetadataRequest.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.GetUserMetadataRequest")
}

GetUserMetadataRequest.$type.generatedObject = GetUserMetadataRequest
GetUserMetadataRequest.prototype.name = GetUserMetadataRequest.$type.fieldsById[1].defaultValue

/** 用户元信息 API */
export class UserMetadataApi extends $sisyphus.Client {
    get $reflection() {
        return UserMetadataApi.reflection
    }

    /** 获取用户元信息的 API */
    async GetUserMetadata(input: IGetUserMetadataRequest, metadata?: { [k: string]: string }): Promise<$userMeta.IUserMetadata> {
        return await this.$call(this.$reflection.methods["GetUserMetadata"], input, metadata)
    }

    static readonly reflection = $reflection.root.lookupService(".bybutter.incubator.bread.v1.UserMetadataApi")
}