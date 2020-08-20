import * as $ownership from "./ownership"
import * as $duration from "../../../../google/protobuf/duration"
import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"


/** Privilege 商品内容 */
export interface IPrivilegeProductItem {
    /** Privilege 资源名 */
    privilege?: string
    /** 所有权 */
    ownership?: $ownership.OwnershipType
    /** 特权有效期 */
    duration?: $duration.IDuration
}

export class PrivilegeProductItem extends $sisyphus.Message<PrivilegeProductItem> implements IPrivilegeProductItem {
    privilege!: string
    ownership!: $ownership.OwnershipType
    duration!: $duration.Duration
}
$reflection.root.lookupType(".bybutter.incubator.shop.v1.PrivilegeProductItem").messageCtor = PrivilegeProductItem


/** 实体商品内容 */
export interface IEntityProductItem {
    /** 实体商品 id */
    entity?: string
    /** 商品库存 */
    inventory?: number
}

export class EntityProductItem extends $sisyphus.Message<EntityProductItem> implements IEntityProductItem {
    entity!: string
    inventory!: number
}
$reflection.root.lookupType(".bybutter.incubator.shop.v1.EntityProductItem").messageCtor = EntityProductItem