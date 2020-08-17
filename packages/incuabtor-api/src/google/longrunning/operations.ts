import * as $any from "../protobuf/any"
import * as $status from "../rpc/status"
import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../_reflection"
import * as $protobuf from "protobufjs"
import * as $duration from "../protobuf/duration"
import * as $empty from "../protobuf/empty"


/**
 * This resource represents a long-running operation that is the result of a
 * network API call.
 */
export interface IOperation {
    /**
     * The server-assigned name, which is only unique within the same service that
     * originally returns it. If you use the default HTTP mapping, the
     * `name` should be a resource name ending with `operations/{unique_id}`.
     */
    name?: string
    /**
     * Service-specific metadata associated with the operation.  It typically
     * contains progress information and common metadata such as create time.
     * Some services might not provide such metadata.  Any method that returns a
     * long-running operation should document the metadata type, if any.
     */
    metadata?: ($any.IAny | null)
    /**
     * If the value is `false`, it means the operation is still in progress.
     * If `true`, the operation is completed, and either `error` or `response` is
     * available.
     */
    done?: boolean
    /** The error result of the operation in case of failure or cancellation. */
    error?: ($status.IStatus | null)
    /**
     * The normal response of the operation in case of success.  If the original
     * method returns no data on success, such as `Delete`, the response is
     * `google.protobuf.Empty`.  If the original method is standard
     * `Get`/`Create`/`Update`, the response should be the resource.  For other
     * methods, the response should have the type `XxxResponse`, where `Xxx`
     * is the original method name.  For example, if the original method name
     * is `TakeSnapshot()`, the inferred response type is
     * `TakeSnapshotResponse`.
     */
    response?: ($any.IAny | null)
    /**
     * The operation result, which can be either an `error` or a valid `response`.
     * If `done` == `false`, neither `error` nor `response` is set.
     * If `done` == `true`, exactly one of `error` or `response` is set.
     */
    result?: string
}

export class Operation extends $sisyphus.Message<IOperation> implements IOperation {
    name!: string
    metadata!: ($any.IAny | null)
    done!: boolean
    error!: ($status.IStatus | null)
    response!: ($any.IAny | null)
    result?: string

    get $reflection() {
        return Operation.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.longrunning.Operation")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): Operation {
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
                    result.metadata = $any.Any.decodeDelimited(reader)
                    break
                case 3:
                    result.done = reader.bool()
                    break
                case 4:
                    result.error = $status.Status.decodeDelimited(reader)
                    break
                case 5:
                    result.response = $any.Any.decodeDelimited(reader)
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): Operation {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IOperation): Operation {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("name") && properties.name !== undefined) result.name = properties.name
        if(properties.hasOwnProperty("metadata") && properties.metadata != null) result.metadata = $any.Any.create(properties.metadata)
        if(properties.hasOwnProperty("done") && properties.done !== undefined) result.done = properties.done
        if(properties.hasOwnProperty("error") && properties.error != null) result.error = $status.Status.create(properties.error)
        if(properties.hasOwnProperty("response") && properties.response != null) result.response = $any.Any.create(properties.response)
        return result
    }
}
Object.defineProperty(Operation.prototype, "result", $sisyphus.oneOfProperty("error", "response"))
Operation.prototype.name = Operation.reflection.fieldsById[1].defaultValue
Operation.prototype.metadata = Operation.reflection.fieldsById[2].defaultValue
Operation.prototype.done = Operation.reflection.fieldsById[3].defaultValue
Operation.prototype.error = Operation.reflection.fieldsById[4].defaultValue
Operation.prototype.response = Operation.reflection.fieldsById[5].defaultValue


/** The request message for [Operations.GetOperation][google.longrunning.Operations.GetOperation]. */
export interface IGetOperationRequest {
    /** The name of the operation resource. */
    name?: string
}

export class GetOperationRequest extends $sisyphus.Message<IGetOperationRequest> implements IGetOperationRequest {
    name!: string
    get $reflection() {
        return GetOperationRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.longrunning.GetOperationRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): GetOperationRequest {
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

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): GetOperationRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IGetOperationRequest): GetOperationRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("name") && properties.name !== undefined) result.name = properties.name
        return result
    }
}
GetOperationRequest.prototype.name = GetOperationRequest.reflection.fieldsById[1].defaultValue


/** The request message for [Operations.ListOperations][google.longrunning.Operations.ListOperations]. */
export interface IListOperationsRequest {
    /** The name of the operation's parent resource. */
    name?: string
    /** The standard list filter. */
    filter?: string
    /** The standard list page size. */
    pageSize?: number
    /** The standard list page token. */
    pageToken?: string
}

export class ListOperationsRequest extends $sisyphus.Message<IListOperationsRequest> implements IListOperationsRequest {
    name!: string
    filter!: string
    pageSize!: number
    pageToken!: string
    get $reflection() {
        return ListOperationsRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.longrunning.ListOperationsRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListOperationsRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 4:
                    result.name = reader.string()
                    break
                case 1:
                    result.filter = reader.string()
                    break
                case 2:
                    result.pageSize = reader.int32()
                    break
                case 3:
                    result.pageToken = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListOperationsRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListOperationsRequest): ListOperationsRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("name") && properties.name !== undefined) result.name = properties.name
        if(properties.hasOwnProperty("filter") && properties.filter !== undefined) result.filter = properties.filter
        if(properties.hasOwnProperty("pageSize") && properties.pageSize !== undefined) result.pageSize = properties.pageSize
        if(properties.hasOwnProperty("pageToken") && properties.pageToken !== undefined) result.pageToken = properties.pageToken
        return result
    }
}
ListOperationsRequest.prototype.name = ListOperationsRequest.reflection.fieldsById[4].defaultValue
ListOperationsRequest.prototype.filter = ListOperationsRequest.reflection.fieldsById[1].defaultValue
ListOperationsRequest.prototype.pageSize = ListOperationsRequest.reflection.fieldsById[2].defaultValue
ListOperationsRequest.prototype.pageToken = ListOperationsRequest.reflection.fieldsById[3].defaultValue


/** The response message for [Operations.ListOperations][google.longrunning.Operations.ListOperations]. */
export interface IListOperationsResponse {
    /** A list of operations that matches the specified filter in the request. */
    operations?: (IOperation[] | null)
    /** The standard List next-page token. */
    nextPageToken?: string
}

export class ListOperationsResponse extends $sisyphus.Message<IListOperationsResponse> implements IListOperationsResponse {
    operations!: (IOperation[] | null)
    nextPageToken!: string
    get $reflection() {
        return ListOperationsResponse.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.longrunning.ListOperationsResponse")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ListOperationsResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    if (!result.operations) result.operations = []
                    result.operations.push(Operation.decodeDelimited(reader))
                    break
                case 2:
                    result.nextPageToken = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ListOperationsResponse {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IListOperationsResponse): ListOperationsResponse {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("operations") && properties.operations != null) result.operations = properties.operations.map(it => Operation.create(it))
        if(properties.hasOwnProperty("nextPageToken") && properties.nextPageToken !== undefined) result.nextPageToken = properties.nextPageToken
        return result
    }
}
ListOperationsResponse.prototype.operations = ListOperationsResponse.reflection.fieldsById[1].defaultValue
ListOperationsResponse.prototype.nextPageToken = ListOperationsResponse.reflection.fieldsById[2].defaultValue


/** The request message for [Operations.CancelOperation][google.longrunning.Operations.CancelOperation]. */
export interface ICancelOperationRequest {
    /** The name of the operation resource to be cancelled. */
    name?: string
}

export class CancelOperationRequest extends $sisyphus.Message<ICancelOperationRequest> implements ICancelOperationRequest {
    name!: string
    get $reflection() {
        return CancelOperationRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.longrunning.CancelOperationRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): CancelOperationRequest {
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

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): CancelOperationRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: ICancelOperationRequest): CancelOperationRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("name") && properties.name !== undefined) result.name = properties.name
        return result
    }
}
CancelOperationRequest.prototype.name = CancelOperationRequest.reflection.fieldsById[1].defaultValue


/** The request message for [Operations.DeleteOperation][google.longrunning.Operations.DeleteOperation]. */
export interface IDeleteOperationRequest {
    /** The name of the operation resource to be deleted. */
    name?: string
}

export class DeleteOperationRequest extends $sisyphus.Message<IDeleteOperationRequest> implements IDeleteOperationRequest {
    name!: string
    get $reflection() {
        return DeleteOperationRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.longrunning.DeleteOperationRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): DeleteOperationRequest {
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

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): DeleteOperationRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IDeleteOperationRequest): DeleteOperationRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("name") && properties.name !== undefined) result.name = properties.name
        return result
    }
}
DeleteOperationRequest.prototype.name = DeleteOperationRequest.reflection.fieldsById[1].defaultValue


/** The request message for [Operations.WaitOperation][google.longrunning.Operations.WaitOperation]. */
export interface IWaitOperationRequest {
    /** The name of the operation resource to wait on. */
    name?: string
    /**
     * The maximum duration to wait before timing out. If left blank, the wait
     * will be at most the time permitted by the underlying HTTP/RPC protocol.
     * If RPC context deadline is also specified, the shorter one will be used.
     */
    timeout?: ($duration.IDuration | null)
}

export class WaitOperationRequest extends $sisyphus.Message<IWaitOperationRequest> implements IWaitOperationRequest {
    name!: string
    timeout!: ($duration.IDuration | null)
    get $reflection() {
        return WaitOperationRequest.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.longrunning.WaitOperationRequest")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): WaitOperationRequest {
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
                    result.timeout = $duration.Duration.decodeDelimited(reader)
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): WaitOperationRequest {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IWaitOperationRequest): WaitOperationRequest {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("name") && properties.name !== undefined) result.name = properties.name
        if(properties.hasOwnProperty("timeout") && properties.timeout != null) result.timeout = $duration.Duration.create(properties.timeout)
        return result
    }
}
WaitOperationRequest.prototype.name = WaitOperationRequest.reflection.fieldsById[1].defaultValue
WaitOperationRequest.prototype.timeout = WaitOperationRequest.reflection.fieldsById[2].defaultValue


/**
 * A message representing the message types used by a long-running operation.
 * 
 * Example:
 * 
 * rpc LongRunningRecognize(LongRunningRecognizeRequest)
 * returns (google.longrunning.Operation) {
 * option (google.longrunning.operation_info) = {
 * response_type: "LongRunningRecognizeResponse"
 * metadata_type: "LongRunningRecognizeMetadata"
 * };
 * }
 */
export interface IOperationInfo {
    /**
     * Required. The message name of the primary return type for this
     * long-running operation.
     * This type will be used to deserialize the LRO's response.
     * 
     * If the response is in a different package from the rpc, a fully-qualified
     * message name must be used (e.g. `google.protobuf.Struct`).
     * 
     * Note: Altering this value constitutes a breaking change.
     */
    responseType?: string
    /**
     * Required. The message name of the metadata type for this long-running
     * operation.
     * 
     * If the response is in a different package from the rpc, a fully-qualified
     * message name must be used (e.g. `google.protobuf.Struct`).
     * 
     * Note: Altering this value constitutes a breaking change.
     */
    metadataType?: string
}

export class OperationInfo extends $sisyphus.Message<IOperationInfo> implements IOperationInfo {
    responseType!: string
    metadataType!: string
    get $reflection() {
        return OperationInfo.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.longrunning.OperationInfo")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): OperationInfo {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.responseType = reader.string()
                    break
                case 2:
                    result.metadataType = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): OperationInfo {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IOperationInfo): OperationInfo {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("responseType") && properties.responseType !== undefined) result.responseType = properties.responseType
        if(properties.hasOwnProperty("metadataType") && properties.metadataType !== undefined) result.metadataType = properties.metadataType
        return result
    }
}
OperationInfo.prototype.responseType = OperationInfo.reflection.fieldsById[1].defaultValue
OperationInfo.prototype.metadataType = OperationInfo.reflection.fieldsById[2].defaultValue

/**
 * Manages long-running operations with an API service.
 * 
 * When an API method normally takes long time to complete, it can be designed
 * to return [Operation][google.longrunning.Operation] to the client, and the client can use this
 * interface to receive the real response asynchronously by polling the
 * operation resource, or pass the operation resource to another API (such as
 * Google Cloud Pub/Sub API) to receive the response.  Any API service that
 * returns long-running operations should implement the `Operations` interface
 * so developers can have a consistent client experience.
 */
export class Operations extends $sisyphus.Client {
    get $reflection() {
        return Operations.reflection
    }
    /**
     * Lists operations that match the specified filter in the request. If the
     * server doesn't support this method, it returns `UNIMPLEMENTED`.
     * 
     * NOTE: the `name` binding allows API services to override the binding
     * to use different resource name schemes, such as `users/*&#47;operations`. To
     * override the binding, API services can add a binding such as
     * `"/v1/{name=users/*}/operations"` to their service configuration.
     * For backwards compatibility, the default name includes the operations
     * collection id, however overriding users must ensure the name binding
     * is the parent resource, without the operations collection id.
     */
    async ListOperations(input: IListOperationsRequest, metadata?: { [k: string]: string }): Promise<IListOperationsResponse> {
        return await this.$call(this.$reflection.methods["ListOperations"], input, metadata)
    }
    /**
     * Gets the latest state of a long-running operation.  Clients can use this
     * method to poll the operation result at intervals as recommended by the API
     * service.
     */
    async GetOperation(input: IGetOperationRequest, metadata?: { [k: string]: string }): Promise<IOperation> {
        return await this.$call(this.$reflection.methods["GetOperation"], input, metadata)
    }
    /**
     * Deletes a long-running operation. This method indicates that the client is
     * no longer interested in the operation result. It does not cancel the
     * operation. If the server doesn't support this method, it returns
     * `google.rpc.Code.UNIMPLEMENTED`.
     */
    async DeleteOperation(input: IDeleteOperationRequest, metadata?: { [k: string]: string }): Promise<$empty.IEmpty> {
        return await this.$call(this.$reflection.methods["DeleteOperation"], input, metadata)
    }
    /**
     * Starts asynchronous cancellation on a long-running operation.  The server
     * makes a best effort to cancel the operation, but success is not
     * guaranteed.  If the server doesn't support this method, it returns
     * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
     * [Operations.GetOperation][google.longrunning.Operations.GetOperation] or
     * other methods to check whether the cancellation succeeded or whether the
     * operation completed despite cancellation. On successful cancellation,
     * the operation is not deleted; instead, it becomes an operation with
     * an [Operation.error][google.longrunning.Operation.error] value with a [google.rpc.Status.code][google.rpc.Status.code] of 1,
     * corresponding to `Code.CANCELLED`.
     */
    async CancelOperation(input: ICancelOperationRequest, metadata?: { [k: string]: string }): Promise<$empty.IEmpty> {
        return await this.$call(this.$reflection.methods["CancelOperation"], input, metadata)
    }
    /**
     * Waits for the specified long-running operation until it is done or reaches
     * at most a specified timeout, returning the latest state.  If the operation
     * is already done, the latest state is immediately returned.  If the timeout
     * specified is greater than the default HTTP/RPC timeout, the HTTP/RPC
     * timeout is used.  If the server does not support this method, it returns
     * `google.rpc.Code.UNIMPLEMENTED`.
     * Note that this method is on a best-effort basis.  It may return the latest
     * state before the specified timeout (including immediately), meaning even an
     * immediate response is no guarantee that the operation is done.
     */
    async WaitOperation(input: IWaitOperationRequest, metadata?: { [k: string]: string }): Promise<IOperation> {
        return await this.$call(this.$reflection.methods["WaitOperation"], input, metadata)
    }
    static readonly reflection = $reflection.root.lookupService(".google.longrunning.Operations")
}
export let operationInfo = $reflection.root.lookup(".google.longrunning.operationInfo")