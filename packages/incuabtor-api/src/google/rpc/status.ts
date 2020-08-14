import * as $any from "../protobuf/any"
import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../_reflection"
import * as $protobuf from "protobufjs"


/**
 * The `Status` type defines a logical error model that is suitable for
 * different programming environments, including REST APIs and RPC APIs. It is
 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
 * three pieces of data: error code, error message, and error details.
 * 
 * You can find out more about this error model and how to work with it in the
 * [API Design Guide](https://cloud.google.com/apis/design/errors).
 */
export interface IStatus {
    /** The status code, which should be an enum value of [google.rpc.Code][google.rpc.Code]. */
    code?: number
    /**
     * A developer-facing error message, which should be in English. Any
     * user-facing error message should be localized and sent in the
     * [google.rpc.Status.details][google.rpc.Status.details] field, or localized by the client.
     */
    message?: string
    /**
     * A list of messages that carry the error details.  There is a common set of
     * message types for APIs to use.
     */
    details?: ($any.IAny[] | null)
}

export class Status extends $sisyphus.Message<IStatus> implements IStatus {
    code!: number
    message!: string
    details!: ($any.IAny[] | null)
    get $reflection() {
        return Status.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.rpc.Status")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): Status {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.code = reader.int32()
                    break
                case 2:
                    result.message = reader.string()
                    break
                case 3:
                    if (!result.details) result.details = []
                    result.details.push($any.Any.decodeDelimited(reader))
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): Status {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IStatus): Status {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("code") && properties.code !== undefined) result.code = properties.code
        if(properties.hasOwnProperty("message") && properties.message !== undefined) result.message = properties.message
        if(properties.hasOwnProperty("details") && properties.details != null) result.details = properties.details.map(it => $any.Any.create(it))
        return result
    }
}
Status.prototype.code = Status.reflection.fieldsById[1].defaultValue
Status.prototype.message = Status.reflection.fieldsById[2].defaultValue
Status.prototype.details = Status.reflection.fieldsById[3].defaultValue