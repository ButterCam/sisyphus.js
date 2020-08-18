import * as $protobuf from "protobufjs"
import * as $reflection from "../../../../_reflection"


/** 手机 */
export interface IPhoneTarget {
    /** 手机号的区号。 */
    regionCode?: string
    /** 手机号码。 */
    phoneNumber?: string
}

export class PhoneTarget extends $protobuf.Message<PhoneTarget> implements IPhoneTarget {
    regionCode!: string
    phoneNumber!: string

    get $type() {
        return PhoneTarget.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.verification.v1.PhoneTarget")
}

PhoneTarget.$type.generatedObject = PhoneTarget
PhoneTarget.prototype.regionCode = PhoneTarget.$type.fieldsById[1].defaultValue
PhoneTarget.prototype.phoneNumber = PhoneTarget.$type.fieldsById[2].defaultValue


/** 邮箱 */
export interface IEmailTarget {
    /** 邮箱地址 */
    email?: string
}

export class EmailTarget extends $protobuf.Message<EmailTarget> implements IEmailTarget {
    email!: string

    get $type() {
        return EmailTarget.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.verification.v1.EmailTarget")
}

EmailTarget.$type.generatedObject = EmailTarget
EmailTarget.prototype.email = EmailTarget.$type.fieldsById[1].defaultValue


/** 地区代码 */
export interface IRegionCode {
    /** 代码 */
    regionCode?: string
    /** 国家 */
    region?: string
    /** 显示的代码 */
    displayRegionCode?: string
}

export class RegionCode extends $protobuf.Message<RegionCode> implements IRegionCode {
    regionCode!: string
    region!: string
    displayRegionCode!: string

    get $type() {
        return RegionCode.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.verification.v1.RegionCode")
}

RegionCode.$type.generatedObject = RegionCode
RegionCode.prototype.regionCode = RegionCode.$type.fieldsById[1].defaultValue
RegionCode.prototype.region = RegionCode.$type.fieldsById[2].defaultValue
RegionCode.prototype.displayRegionCode = RegionCode.$type.fieldsById[3].defaultValue