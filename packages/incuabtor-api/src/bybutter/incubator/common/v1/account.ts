import * as $struct from "../../../../google/protobuf/struct"
import * as $any from "../../../../google/protobuf/any"
import * as $timestamp from "../../../../google/protobuf/timestamp"
import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"
import * as $protobuf from "protobufjs"


/**
 * 在 incubator 应用中的账户资源，所有的 incubator 应用统一使用。
 * 请避免与应用自己的用户资源混淆，这里的资源是账户的概念，与用户的含义不相同。
 * 账户资源描述这个用户的登陆、权限和元数据等等与应用无关的信息。
 */
export interface IAccount {
    /** 账户资源名称，形式为 ‘accounts/*’。 */
    name?: string
    /** 用户当前具有的所有权限。 */
    permissions?: ($struct.IValue[] | null)
    /** 由其他应用储存的用户元信息。 */
    metadata?: ({ [k: string]: $any.IAny } | null)
    /** 账户创建的时间。 */
    createTime?: ($timestamp.ITimestamp | null)
}

export class Account extends $sisyphus.Message<IAccount> implements IAccount {
    name!: string
    permissions!: ($struct.IValue[] | null)
    metadata!: ({ [k: string]: $any.IAny } | null)
    createTime!: ($timestamp.ITimestamp | null)
    get $reflection() {
        return Account.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.common.v1.Account")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): Account {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        let key: any, value: any
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.name = reader.string()
                    break
                case 2:
                    if (!result.permissions) result.permissions = []
                    result.permissions.push($struct.Value.decodeDelimited(reader))
                    break
                case 3:
                    if (!result.metadata) result.metadata = {};
                    [key, value] = $sisyphus.readMapEntry(this.reflection.fields["metadata"], reader, $any.Any)
                    result.metadata[key] = value
                    break
                case 4:
                    result.createTime = $timestamp.Timestamp.decodeDelimited(reader)
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): Account {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IAccount): Account {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("name") && properties.name !== undefined) result.name = properties.name
        if(properties.hasOwnProperty("permissions") && properties.permissions != null) result.permissions = properties.permissions.map(it => $struct.Value.create(it))
        if(properties.hasOwnProperty("metadata") && properties.metadata != null) {
            result.metadata = {}
            for (let key in properties.metadata) result.metadata[key] = $any.Any.create(properties.metadata[key])
        }
        return result
    }
}
Account.prototype.name = Account.reflection.fieldsById[1].defaultValue
Account.prototype.permissions = Account.reflection.fieldsById[2].defaultValue
Account.prototype.metadata = Account.reflection.fieldsById[3].defaultValue
Account.prototype.createTime = Account.reflection.fieldsById[4].defaultValue