import * as $ownership from "./ownership"
import * as $duration from "../../../../google/protobuf/duration"
import * as $protobuf from "protobufjs"
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

export class PrivilegeProductItem extends $protobuf.Message<PrivilegeProductItem> implements IPrivilegeProductItem {
    privilege!: string
    ownership!: $ownership.OwnershipType
    duration!: $duration.Duration
    get $type() {
        return PrivilegeProductItem.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.shop.v1.PrivilegeProductItem")
}
PrivilegeProductItem.$type.generatedObject = PrivilegeProductItem
PrivilegeProductItem.prototype.privilege = PrivilegeProductItem.$type.fieldsById[1].defaultValue
PrivilegeProductItem.prototype.ownership = PrivilegeProductItem.$type.fieldsById[3].defaultValue
PrivilegeProductItem.prototype.duration = PrivilegeProductItem.$type.fieldsById[4].defaultValue


/** 实体商品内容 */
export interface IEntityProductItem {
    /** 实体商品 id */
    entity?: string
    /** 商品库存 */
    inventory?: number
}

export class EntityProductItem extends $protobuf.Message<EntityProductItem> implements IEntityProductItem {
    entity!: string
    inventory!: number
    get $type() {
        return EntityProductItem.$type
    }

    static readonly $type = $reflection.root.lookupType(".bybutter.incubator.shop.v1.EntityProductItem")
}
EntityProductItem.$type.generatedObject = EntityProductItem
EntityProductItem.prototype.entity = EntityProductItem.$type.fieldsById[1].defaultValue
EntityProductItem.prototype.inventory = EntityProductItem.$type.fieldsById[10].defaultValue