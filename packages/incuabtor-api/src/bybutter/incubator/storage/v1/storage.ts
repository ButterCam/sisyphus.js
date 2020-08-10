import * as $reflection from "../../../../_reflection"


/** Oss 角色 */
export enum OssRole {
    /** 不确定 */
    OSS_ROLE_UNSPECIFIED = 0,
    /** 公用 */
    OSS_ROLE_PUBLIC = 1,
    /** 前台 */
    OSS_ROLE_FRONTEND = 2,
    /** 后台 */
    OSS_ROLE_BACKEND = 3,
}

export namespace OssRole {
    export const reflection = $reflection.root.lookupEnum(".bybutter.incubator.storage.v1.OssRole")
}