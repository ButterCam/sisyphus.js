import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"
import * as $protobuf from "protobufjs"


/** 用于设置 API 访问控制的拓展信息。 */
export interface IAccessControl {
    /** API 是否公开，不需要检验 Token 的合法性。 */
    anonymous?: boolean
    /** 访问 API 需要显式具备的权限，用户必须显式具备此权限才能访问此 API。 */
    requiredPermissions?: (string[] | null)
    /** 访问 API 需要确认检查显式拒绝的权限，用户必须不被显式拒绝这些权限才能访问此 API。 */
    allowPermissions?: (string[] | null)
}

export class AccessControl extends $sisyphus.Message<IAccessControl> implements IAccessControl {
    anonymous!: boolean
    requiredPermissions!: (string[] | null)
    allowPermissions!: (string[] | null)
    get $reflection() {
        return AccessControl.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.common.v1.AccessControl")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): AccessControl {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.anonymous = reader.bool()
                    break
                case 2:
                    if (!result.requiredPermissions) result.requiredPermissions = []
                    result.requiredPermissions.push(reader.string())
                    break
                case 3:
                    if (!result.allowPermissions) result.allowPermissions = []
                    result.allowPermissions.push(reader.string())
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): AccessControl {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IAccessControl): AccessControl {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("anonymous") && properties.anonymous !== undefined) result.anonymous = properties.anonymous
        if(properties.hasOwnProperty("requiredPermissions") && properties.requiredPermissions !== undefined) result.requiredPermissions = properties.requiredPermissions
        if(properties.hasOwnProperty("allowPermissions") && properties.allowPermissions !== undefined) result.allowPermissions = properties.allowPermissions
        return result
    }
}
AccessControl.prototype.anonymous = false
AccessControl.prototype.requiredPermissions = null
AccessControl.prototype.allowPermissions = null