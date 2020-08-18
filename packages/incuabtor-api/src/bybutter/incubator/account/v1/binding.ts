import * as $protobuf from "protobufjs"
import * as $reflection from "../../../../_reflection"
import * as $sisyphus from "@sisyphus.js/core"


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

export class AccountBinding extends $protobuf.Message<AccountBinding> implements IAccountBinding {
    account!: string
    mobile!: AccountBinding.Mobile
    identification!: AccountBinding.Identification
    Target?: string

    get $type() {
        return AccountBinding.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.account.v1.AccountBinding")
}

AccountBinding.$type.generatedObject = AccountBinding
Object.defineProperty(AccountBinding.prototype, "Target", $sisyphus.oneOfProperty("mobile", "identification"))
AccountBinding.prototype.account = AccountBinding.$type.fieldsById[1].defaultValue
AccountBinding.prototype.mobile = AccountBinding.$type.fieldsById[11].defaultValue
AccountBinding.prototype.identification = AccountBinding.$type.fieldsById[12].defaultValue

export namespace AccountBinding {

    /** 手机号绑定信息 */
    export interface IMobile {
        /** 区域代号，例如 86 */
        regionCode?: string
        /** 手机号 */
        phoneNumber?: string
    }

    export class Mobile extends $protobuf.Message<Mobile> implements IMobile {
        regionCode!: string
        phoneNumber!: string

        get $type() {
            return Mobile.$type
        }

        static readonly $type = $reflection.root.lookupType(".bybutter.incubator.account.v1.AccountBinding.Mobile")
    }

    Mobile.$type.generatedObject = Mobile
    Mobile.prototype.regionCode = Mobile.$type.fieldsById[1].defaultValue
    Mobile.prototype.phoneNumber = Mobile.$type.fieldsById[2].defaultValue


    /** 帐号码绑定信息 */
    export interface IIdentification {
        /** 帐号码 */
        identification?: string
    }

    export class Identification extends $protobuf.Message<Identification> implements IIdentification {
        identification!: string

        get $type() {
            return Identification.$type
        }

        static readonly $type = $reflection.root.lookupType(".bybutter.incubator.account.v1.AccountBinding.Identification")
    }

    Identification.$type.generatedObject = Identification
    Identification.prototype.identification = Identification.$type.fieldsById[1].defaultValue
}