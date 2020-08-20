import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"
import * as $userMeta from "./user_meta"


/** 获取用户元信息的 API 请求 */
export interface IGetUserMetadataRequest {
    name?: string
}

export class GetUserMetadataRequest extends $sisyphus.Message<GetUserMetadataRequest> implements IGetUserMetadataRequest {
    name!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.GetUserMetadataRequest").messageCtor = GetUserMetadataRequest

/** 用户元信息 API */
export class UserMetadataApi extends $sisyphus.Client {
    get $service() {
        return UserMetadataApi.$service
    }
    /** 获取用户元信息的 API */
    async GetUserMetadata(input: IGetUserMetadataRequest, metadata?: { [k: string]: string }): Promise<$userMeta.UserMetadata> {
        return await this.$call(this.$service.methods["GetUserMetadata"], input, metadata)
    }
    static readonly $service = $reflection.root.lookupService(".bybutter.incubator.bread.v1.UserMetadataApi")
}