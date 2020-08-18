import * as $protobuf from "protobufjs"
import * as $reflection from "../../../../_reflection"


/** 面包用户资源 */
export interface IUser {
    /** 账户资源名称，形式为 ‘users/*’。 */
    name?: string
}

export class User extends $protobuf.Message<User> implements IUser {
    name!: string
    get $type() {
        return User.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.bread.v1.User")
}
User.$type.generatedObject = User
User.prototype.name = User.$type.fieldsById[1].defaultValue