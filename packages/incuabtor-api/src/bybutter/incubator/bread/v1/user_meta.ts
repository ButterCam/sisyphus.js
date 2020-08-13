import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"
import * as $protobuf from "protobufjs"


export interface IUserMetadata {
    name?: string
    memberships?: (string[] | null)
}

export class UserMetadata extends $sisyphus.Message<IUserMetadata> implements IUserMetadata {
    name!: string
    memberships!: (string[] | null)
    get $reflection() {
        return UserMetadata.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.UserMetadata")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): UserMetadata {
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
                    if (!result.memberships) result.memberships = []
                    result.memberships.push(reader.string())
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): UserMetadata {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IUserMetadata): UserMetadata {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("name") && properties.name !== undefined) result.name = properties.name
        if(properties.hasOwnProperty("memberships") && properties.memberships !== undefined) result.memberships = properties.memberships
        return result
    }
}
UserMetadata.prototype.name = ""
UserMetadata.prototype.memberships = null