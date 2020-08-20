import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"


/** 附加在商品或者 Plan 上的通用 Tag 信息。 */
export interface ICommonTag {
    /** Tag 的 Key，用于标识 Tag Value 格式。 */
    key?: string
    /** Tag 的 Value。 */
    value?: string
}

export class CommonTag extends $sisyphus.Message<CommonTag> implements ICommonTag {
    key!: string
    value!: string
}
$reflection.root.lookupType(".bybutter.incubator.shop.v1.CommonTag").messageCtor = CommonTag


/** 苹果 IAP 购买时的 IAP 商品 id */
export interface IAppleIapProductIdTag {
    /** IAP 商品 id */
    productId?: string
}

export class AppleIapProductIdTag extends $sisyphus.Message<AppleIapProductIdTag> implements IAppleIapProductIdTag {
    productId!: string
}
$reflection.root.lookupType(".bybutter.incubator.shop.v1.AppleIapProductIdTag").messageCtor = AppleIapProductIdTag