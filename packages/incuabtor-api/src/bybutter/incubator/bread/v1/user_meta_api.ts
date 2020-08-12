import * as $sisyphus from "@sisyphus.js/core"
import * as $protobuf from "protobufjs"
import * as $reflection from "../../../../_reflection"


/** 获取用户元信息的 API 请求 */
export interface IGetUserMetadataRequest {
    name?: string
}

export class GetUserMetadataRequest extends $sisyphus.Message<IGetUserMetadataRequest> implements IGetUserMetadataRequest {
    name!: string
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
                    result.name = reader.string()
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
        if(properties.hasOwnProperty("name") && properties.name !== undefined) result.name = properties.name
        return result
    }
}
GetUserMetadataRequest.prototype.name = ""

//Service: .bybutter.incubator.bread.v1.UserMetadataApi