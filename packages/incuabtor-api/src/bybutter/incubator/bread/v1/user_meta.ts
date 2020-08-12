import * as $sisyphus from "@sisyphus.js/core"
import * as $protobuf from "protobufjs"
import * as $reflection from "../../../../_reflection"


/** 获取用户在 Bread 产品中的元信息，主要包含会员之类的和产品相关的信息。 */
export interface IUserMetadata {
    /** 用户资源名称 */
    user?: string
    /** 用户在 Bread 产品中的会员信息，包含了所有用户现在有效的会员资源名称 */
    memberships?: (string[] | null)
}

export class UserMetadata extends $sisyphus.Message<IUserMetadata> implements IUserMetadata {
    user!: string
    memberships!: (string[] | null)
    get $reflection() {
        return UserMetadata.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.UserMetadata")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): UserMetadata {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.user = reader.string()
                    break
                case 2:
                    if (!result.memberships) result.memberships = []
                    result.memberships.push(reader.string())
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): UserMetadata {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IUserMetadata): UserMetadata {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("user") && properties.user !== undefined) result.user = properties.user
        if(properties.hasOwnProperty("memberships") && properties.memberships !== undefined) result.memberships = properties.memberships
        return result
    }
}
UserMetadata.prototype.user = ""
UserMetadata.prototype.memberships = null