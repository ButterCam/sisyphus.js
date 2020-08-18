import * as $protobuf from "protobufjs"
import * as $reflection from "../../../../_reflection"


/** 附加在商品或者 Plan 上的通用 Tag 信息。 */
export interface ICommonTag {
    /** Tag 的 Key，用于标识 Tag Value 格式。 */
    key?: string
    /** Tag 的 Value。 */
    value?: string
}

export class CommonTag extends $protobuf.Message<CommonTag> implements ICommonTag {
    key!: string
    value!: string
    get $type() {
        return CommonTag.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.shop.v1.CommonTag")
}
CommonTag.$type.generatedObject = CommonTag
CommonTag.prototype.key = CommonTag.$type.fieldsById[1].defaultValue
CommonTag.prototype.value = CommonTag.$type.fieldsById[2].defaultValue


/** 苹果 IAP 购买时的 IAP 商品 id */
export interface IAppleIapProductIdTag {
    /** IAP 商品 id */
    productId?: string
}

export class AppleIapProductIdTag extends $protobuf.Message<AppleIapProductIdTag> implements IAppleIapProductIdTag {
    productId!: string
    get $type() {
        return AppleIapProductIdTag.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.shop.v1.AppleIapProductIdTag")
}
AppleIapProductIdTag.$type.generatedObject = AppleIapProductIdTag
AppleIapProductIdTag.prototype.productId = AppleIapProductIdTag.$type.fieldsById[1].defaultValue