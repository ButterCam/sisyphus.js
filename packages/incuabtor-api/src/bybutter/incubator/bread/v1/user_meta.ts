import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"


/** 获取用户在 Bread 产品中的元信息，主要包含会员之类的和产品相关的信息。 */
export interface IUserMetadata {
    /** 用户资源名称 */
    user?: string
    /** 用户在 Bread 产品中的会员信息，包含了所有用户现在有效的会员资源名称 */
    memberships?: readonly string[]
}

export class UserMetadata extends $sisyphus.Message<UserMetadata> implements IUserMetadata {
    user!: string
    memberships!: readonly string[]
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.UserMetadata").messageCtor = UserMetadata