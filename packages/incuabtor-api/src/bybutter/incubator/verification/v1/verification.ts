import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"


/** 手机 */
export interface IPhoneTarget {
    /** 手机号的区号。 */
    regionCode?: string
    /** 手机号码。 */
    phoneNumber?: string
}

export class PhoneTarget extends $sisyphus.Message<PhoneTarget> implements IPhoneTarget {
    regionCode!: string
    phoneNumber!: string
}
$reflection.root.lookupType(".bybutter.incubator.verification.v1.PhoneTarget").messageCtor = PhoneTarget


/** 邮箱 */
export interface IEmailTarget {
    /** 邮箱地址 */
    email?: string
}

export class EmailTarget extends $sisyphus.Message<EmailTarget> implements IEmailTarget {
    email!: string
}
$reflection.root.lookupType(".bybutter.incubator.verification.v1.EmailTarget").messageCtor = EmailTarget


/** 地区代码 */
export interface IRegionCode {
    /** 代码 */
    regionCode?: string
    /** 国家 */
    region?: string
    /** 显示的代码 */
    displayRegionCode?: string
}

export class RegionCode extends $sisyphus.Message<RegionCode> implements IRegionCode {
    regionCode!: string
    region!: string
    displayRegionCode!: string
}
$reflection.root.lookupType(".bybutter.incubator.verification.v1.RegionCode").messageCtor = RegionCode