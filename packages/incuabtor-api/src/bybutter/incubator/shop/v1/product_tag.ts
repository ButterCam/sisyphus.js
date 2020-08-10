import * as $sisyphus from "@sisyphus.js/core"
import * as $protobuf from "protobufjs"
import * as $reflection from "../../../../_reflection"


/** 附加在商品或者 Plan 上的通用 Tag 信息。 */
export interface ICommonTag {
    /** Tag 的 Key，用于标识 Tag Value 格式。 */
    key?: string
    /** Tag 的 Value。 */
    value?: string
}

export class CommonTag extends $sisyphus.Message<ICommonTag> implements ICommonTag {
    key!: string
    value!: string
    get $reflection() {
        return CommonTag.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.shop.v1.CommonTag")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): CommonTag {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.key = reader.string()
                    break
                case 2:
                    result.value = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): CommonTag {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: ICommonTag): CommonTag {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "key":
                    result[key] = String(properties[key])
                    break
                case "value":
                    result[key] = String(properties[key])
                    break
            }
        }
        return result
    }
}
CommonTag.prototype.key = ""
CommonTag.prototype.value = ""


/** 苹果 IAP 购买时的 IAP 商品 id */
export interface IAppleIapProductIdTag {
    /** IAP 商品 id */
    productId?: string
}

export class AppleIapProductIdTag extends $sisyphus.Message<IAppleIapProductIdTag> implements IAppleIapProductIdTag {
    productId!: string
    get $reflection() {
        return AppleIapProductIdTag.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.shop.v1.AppleIapProductIdTag")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): AppleIapProductIdTag {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.productId = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): AppleIapProductIdTag {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IAppleIapProductIdTag): AppleIapProductIdTag {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "productId":
                    result[key] = String(properties[key])
                    break
            }
        }
        return result
    }
}
AppleIapProductIdTag.prototype.productId = ""