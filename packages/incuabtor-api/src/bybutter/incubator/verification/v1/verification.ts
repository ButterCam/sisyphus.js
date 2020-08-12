import * as $sisyphus from "@sisyphus.js/core"
import * as $protobuf from "protobufjs"
import * as $reflection from "../../../../_reflection"


/** 手机 */
export interface IPhoneTarget {
    /** 手机号的区号。 */
    regionCode?: string
    /** 手机号码。 */
    phoneNumber?: string
}

export class PhoneTarget extends $sisyphus.Message<IPhoneTarget> implements IPhoneTarget {
    regionCode!: string
    phoneNumber!: string
    get $reflection() {
        return PhoneTarget.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.verification.v1.PhoneTarget")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): PhoneTarget {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.regionCode = reader.string()
                    break
                case 2:
                    result.phoneNumber = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): PhoneTarget {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IPhoneTarget): PhoneTarget {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("regionCode") && properties.regionCode !== undefined) result.regionCode = properties.regionCode
        if(properties.hasOwnProperty("phoneNumber") && properties.phoneNumber !== undefined) result.phoneNumber = properties.phoneNumber
        return result
    }
}
PhoneTarget.prototype.regionCode = ""
PhoneTarget.prototype.phoneNumber = ""


/** 邮箱 */
export interface IEmailTarget {
    /** 邮箱地址 */
    email?: string
}

export class EmailTarget extends $sisyphus.Message<IEmailTarget> implements IEmailTarget {
    email!: string
    get $reflection() {
        return EmailTarget.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.verification.v1.EmailTarget")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): EmailTarget {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.email = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): EmailTarget {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IEmailTarget): EmailTarget {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("email") && properties.email !== undefined) result.email = properties.email
        return result
    }
}
EmailTarget.prototype.email = ""


/** 地区代码 */
export interface IRegionCode {
    /** 代码 */
    regionCode?: string
    /** 国家 */
    region?: string
    /** 显示的代码 */
    displayRegionCode?: string
}

export class RegionCode extends $sisyphus.Message<IRegionCode> implements IRegionCode {
    regionCode!: string
    region!: string
    displayRegionCode!: string
    get $reflection() {
        return RegionCode.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.verification.v1.RegionCode")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): RegionCode {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.regionCode = reader.string()
                    break
                case 2:
                    result.region = reader.string()
                    break
                case 3:
                    result.displayRegionCode = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): RegionCode {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IRegionCode): RegionCode {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("regionCode") && properties.regionCode !== undefined) result.regionCode = properties.regionCode
        if(properties.hasOwnProperty("region") && properties.region !== undefined) result.region = properties.region
        if(properties.hasOwnProperty("displayRegionCode") && properties.displayRegionCode !== undefined) result.displayRegionCode = properties.displayRegionCode
        return result
    }
}
RegionCode.prototype.regionCode = ""
RegionCode.prototype.region = ""
RegionCode.prototype.displayRegionCode = ""