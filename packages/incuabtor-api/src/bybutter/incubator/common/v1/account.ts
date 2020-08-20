import * as $struct from "../../../../google/protobuf/struct"
import * as $any from "../../../../google/protobuf/any"
import * as $timestamp from "../../../../google/protobuf/timestamp"
import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"


/**
 * 在 incubator 应用中的账户资源，所有的 incubator 应用统一使用。
 * 请避免与应用自己的用户资源混淆，这里的资源是账户的概念，与用户的含义不相同。
 * 账户资源描述这个用户的登陆、权限和元数据等等与应用无关的信息。
 */
export interface IAccount {
    /** 账户资源名称，形式为 ‘accounts/*’。 */
    name?: string
    /** 用户当前具有的所有权限。 */
    permissions?: readonly $struct.IValue[]
    /** 由其他应用储存的用户元信息。 */
    metadata?: { readonly [k: string]: $any.IAny }
    /** 账户创建的时间。 */
    createTime?: $timestamp.ITimestamp
}

export class Account extends $sisyphus.Message<Account> implements IAccount {
    name!: string
    permissions!: readonly $struct.Value[]
    metadata!: { readonly [k: string]: $any.Any }
    createTime!: $timestamp.Timestamp
}
$reflection.root.lookupType(".bybutter.incubator.common.v1.Account").messageCtor = Account