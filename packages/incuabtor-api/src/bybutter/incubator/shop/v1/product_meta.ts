import * as $protobuf from "protobufjs"
import * as $sisyphus from "@sisyphus.js/core"
import * as $timestamp from "../../../../google/protobuf/timestamp"
import * as $reflection from "../../../../_reflection"
import * as $struct from "../../../../google/protobuf/struct"


/** 商品的元信息数据，仅包含数据库中的数据，用于后端内部使用。 */
export interface IProductMeta {
    /** 商品资源名 */
    name?: string
    /** 商品所属分类 */
    type?: string
    /** 商品标题 */
    title?: string
    /** 商品的展示图片 */
    pictureUri?: string
    /**
     * 商品的基础价格，单位为 ST。
     * 1 STD = 1 人民币分
     */
    basePrice?: $protobuf.Long
    /** 商品的可见范围 */
    requirements?: (string[] | null)
    /** 商品的上线日期 */
    startTime?: ($timestamp.ITimestamp | null)
    /** 商品的下线时间 */
    endTime?: ($timestamp.ITimestamp | null)
}

export class ProductMeta extends $sisyphus.Message<IProductMeta> implements IProductMeta {
    name!: string
    type!: string
    title!: string
    pictureUri!: string
    basePrice!: $protobuf.Long
    requirements!: (string[] | null)
    startTime!: ($timestamp.ITimestamp | null)
    endTime!: ($timestamp.ITimestamp | null)
    get $reflection() {
        return ProductMeta.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.shop.v1.ProductMeta")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ProductMeta {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.name = reader.string()
                    break
                case 2:
                    result.type = reader.string()
                    break
                case 3:
                    result.title = reader.string()
                    break
                case 4:
                    result.pictureUri = reader.string()
                    break
                case 5:
                    result.basePrice = reader.int64()
                    break
                case 6:
                    if (!result.requirements) result.requirements = []
                    result.requirements.push(reader.string())
                    break
                case 7:
                    result.startTime = $timestamp.Timestamp.decodeDelimited(reader)
                    break
                case 8:
                    result.endTime = $timestamp.Timestamp.decodeDelimited(reader)
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ProductMeta {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IProductMeta): ProductMeta {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "name":
                    result[key] = String(properties[key])
                    break
                case "type":
                    result[key] = String(properties[key])
                    break
                case "title":
                    result[key] = String(properties[key])
                    break
                case "pictureUri":
                    result[key] = String(properties[key])
                    break
                case "basePrice":
                    result[key] = $sisyphus.Long.fromValue(properties[key])
                    break
                case "requirements":
                    result[key] = String(properties[key])
                    break
                case "startTime":
                    result[key] = $timestamp.Timestamp.create(properties[key])
                    break
                case "endTime":
                    result[key] = $timestamp.Timestamp.create(properties[key])
                    break
            }
        }
        return result
    }
}
ProductMeta.prototype.name = ""
ProductMeta.prototype.type = ""
ProductMeta.prototype.title = ""
ProductMeta.prototype.pictureUri = ""
ProductMeta.prototype.basePrice = $sisyphus.Long.ZERO
ProductMeta.prototype.requirements = null
ProductMeta.prototype.startTime = null
ProductMeta.prototype.endTime = null


/** 商品特性的元数据，仅包含数据库中的数据，用于后端内部使用。 */
export interface IProductAttributeMeta {
    /** 商品特性资源名 */
    name?: string
    /** 特性类型 */
    type?: string
    /** 特性的参数，可以为任意 Json 值 */
    parameter?: ($struct.IValue | null)
    /** 特性的索引参数，可用于后续索引 */
    indexedParameter1?: string
    /** 特性的第二个索引参数，可用于后续索引 */
    indexedParameter2?: string
    /** 商品特性的可见范围 */
    requirements?: (string[] | null)
    /** 商品特性的上线时间 */
    startTime?: ($timestamp.ITimestamp | null)
    /** 商品特性的下线时间 */
    endTime?: ($timestamp.ITimestamp | null)
}

export class ProductAttributeMeta extends $sisyphus.Message<IProductAttributeMeta> implements IProductAttributeMeta {
    name!: string
    type!: string
    parameter!: ($struct.IValue | null)
    indexedParameter1!: string
    indexedParameter2!: string
    requirements!: (string[] | null)
    startTime!: ($timestamp.ITimestamp | null)
    endTime!: ($timestamp.ITimestamp | null)
    get $reflection() {
        return ProductAttributeMeta.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.shop.v1.ProductAttributeMeta")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ProductAttributeMeta {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.name = reader.string()
                    break
                case 2:
                    result.type = reader.string()
                    break
                case 3:
                    result.parameter = $struct.Value.decodeDelimited(reader)
                    break
                case 4:
                    result.indexedParameter1 = reader.string()
                    break
                case 5:
                    result.indexedParameter2 = reader.string()
                    break
                case 6:
                    if (!result.requirements) result.requirements = []
                    result.requirements.push(reader.string())
                    break
                case 7:
                    result.startTime = $timestamp.Timestamp.decodeDelimited(reader)
                    break
                case 8:
                    result.endTime = $timestamp.Timestamp.decodeDelimited(reader)
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ProductAttributeMeta {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IProductAttributeMeta): ProductAttributeMeta {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "name":
                    result[key] = String(properties[key])
                    break
                case "type":
                    result[key] = String(properties[key])
                    break
                case "parameter":
                    result[key] = $struct.Value.create(properties[key])
                    break
                case "indexedParameter1":
                    result[key] = String(properties[key])
                    break
                case "indexedParameter2":
                    result[key] = String(properties[key])
                    break
                case "requirements":
                    result[key] = String(properties[key])
                    break
                case "startTime":
                    result[key] = $timestamp.Timestamp.create(properties[key])
                    break
                case "endTime":
                    result[key] = $timestamp.Timestamp.create(properties[key])
                    break
            }
        }
        return result
    }
}
ProductAttributeMeta.prototype.name = ""
ProductAttributeMeta.prototype.type = ""
ProductAttributeMeta.prototype.parameter = null
ProductAttributeMeta.prototype.indexedParameter1 = ""
ProductAttributeMeta.prototype.indexedParameter2 = ""
ProductAttributeMeta.prototype.requirements = null
ProductAttributeMeta.prototype.startTime = null
ProductAttributeMeta.prototype.endTime = null