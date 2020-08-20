import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"


/** 用于设置 API 访问控制的拓展信息。 */
export interface IAccessControl {
    /** API 是否公开，不需要检验 Token 的合法性。 */
    anonymous?: boolean
    /** 访问 API 需要显式具备的权限，用户必须显式具备此权限才能访问此 API。 */
    requiredPermissions?: readonly string[]
    /** 访问 API 需要确认检查显式拒绝的权限，用户必须不被显式拒绝这些权限才能访问此 API。 */
    allowPermissions?: readonly string[]
}

export class AccessControl extends $sisyphus.Message<AccessControl> implements IAccessControl {
    anonymous!: boolean
    requiredPermissions!: readonly string[]
    allowPermissions!: readonly string[]
}
$reflection.root.lookupType(".bybutter.incubator.common.v1.AccessControl").messageCtor = AccessControl

export let access = $reflection.root.lookup(".bybutter.incubator.common.v1.access")