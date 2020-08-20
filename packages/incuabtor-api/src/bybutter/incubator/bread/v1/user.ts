import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"


/** 面包用户资源 */
export interface IUser {
    /** 账户资源名称，形式为 ‘users/*’。 */
    name?: string
}

export class User extends $sisyphus.Message<User> implements IUser {
    name!: string
}
$reflection.root.lookupType(".bybutter.incubator.bread.v1.User").messageCtor = User