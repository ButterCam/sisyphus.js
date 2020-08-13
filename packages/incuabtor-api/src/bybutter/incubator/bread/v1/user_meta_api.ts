import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../../../_reflection"
import * as $protobuf from "protobufjs"


export interface IGetUserMetadataRequest {
    parent?: string
}

export class GetUserMetadataRequest extends $sisyphus.Message<IGetUserMetadataRequest> implements IGetUserMetadataRequest {
    parent!: string
    get $reflection() {
        return GetUserMetadataRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.bread.v1.GetUserMetadataRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): GetUserMetadataRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.parent = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): GetUserMetadataRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IGetUserMetadataRequest): GetUserMetadataRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("parent") && properties.parent !== undefined) result.parent = properties.parent
        return result
    }
}
GetUserMetadataRequest.prototype.parent = ""

//Service: .bybutter.incubator.bread.v1.UserMetadataApi