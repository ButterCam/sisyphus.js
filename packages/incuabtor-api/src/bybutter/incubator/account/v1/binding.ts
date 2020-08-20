import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"


/** 账户绑定信息 */
export interface IAccountBinding {
    /** 绑定信息的账户资源名称 */
    account?: string
    /** 绑定的手机号 */
    mobile?: AccountBinding.IMobile
    /** 绑定的帐号码 */
    identification?: AccountBinding.IIdentification
    Target?: string
}

export class AccountBinding extends $sisyphus.Message<AccountBinding> implements IAccountBinding {
    account!: string
    mobile!: AccountBinding.Mobile
    identification!: AccountBinding.Identification
    Target?: string
}
$reflection.root.lookupType(".bybutter.incubator.account.v1.AccountBinding").messageCtor = AccountBinding

export namespace AccountBinding {

    /** 手机号绑定信息 */
    export interface IMobile {
        /** 区域代号，例如 86 */
        regionCode?: string
        /** 手机号 */
        phoneNumber?: string
    }

    export class Mobile extends $sisyphus.Message<Mobile> implements IMobile {
        regionCode!: string
        phoneNumber!: string
    }
    $reflection.root.lookupType(".bybutter.incubator.account.v1.AccountBinding.Mobile").messageCtor = Mobile


    /** 帐号码绑定信息 */
    export interface IIdentification {
        /** 帐号码 */
        identification?: string
    }

    export class Identification extends $sisyphus.Message<Identification> implements IIdentification {
        identification!: string
    }
    $reflection.root.lookupType(".bybutter.incubator.account.v1.AccountBinding.Identification").messageCtor = Identification
}