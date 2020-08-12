import * as $sisyphus from "@sisyphus.js/core"
import * as $protobuf from "protobufjs"
import * as $reflection from "../../_reflection"


/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request
 * or the response type of an API method. For instance:
 * 
 * service Foo {
 * rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
 * }
 * 
 * The JSON representation for `Empty` is empty JSON object `{}`.
 */
export interface IEmpty {
}

export class Empty extends $sisyphus.Message<IEmpty> implements IEmpty {
    get $reflection() {
        return Empty.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.Empty")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): Empty {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): Empty {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IEmpty): Empty {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        return result
    }
}