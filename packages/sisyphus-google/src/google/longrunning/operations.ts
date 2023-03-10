import {Any} from '@sisyphus.js/runtime/lib/google/protobuf/any'
import '@sisyphus.js/runtime/lib/google/protobuf/descriptor'
import {Duration} from '@sisyphus.js/runtime/lib/google/protobuf/duration'
import {Empty} from '@sisyphus.js/runtime/lib/google/protobuf/empty'
import {Status} from '../rpc/status'

/**
 *  Manages long-running operations with an API service.
 * 
 *  When an API method normally takes long time to complete, it can be designed
 *  to return [Operation][google.longrunning.Operation] to the client, and the client can use this
 *  interface to receive the real response asynchronously by polling the
 *  operation resource, or pass the operation resource to another API (such as
 *  Google Cloud Pub/Sub API) to receive the response.  Any API service that
 *  returns long-running operations should implement the `Operations` interface
 *  so developers can have a consistent client experience.
 */
export interface Operations {
    /**
     *  Lists operations that match the specified filter in the request. If the
     *  server doesn't support this method, it returns `UNIMPLEMENTED`.
     * 
     *  NOTE: the `name` binding allows API services to override the binding
     *  to use different resource name schemes, such as `users/*&#47;operations`. To
     *  override the binding, API services can add a binding such as
     *  `"/v1/{name=users/*}/operations"` to their service configuration.
     *  For backwards compatibility, the default name includes the operations
     *  collection id, however overriding users must ensure the name binding
     *  is the parent resource, without the operations collection id.
     */
    listOperations(input: ListOperationsRequest): Promise<ListOperationsResponse>

    /**
     *  Gets the latest state of a long-running operation.  Clients can use this
     *  method to poll the operation result at intervals as recommended by the API
     *  service.
     */
    getOperation(input: GetOperationRequest): Promise<Operation>

    /**
     *  Deletes a long-running operation. This method indicates that the client is
     *  no longer interested in the operation result. It does not cancel the
     *  operation. If the server doesn't support this method, it returns
     *  `google.rpc.Code.UNIMPLEMENTED`.
     */
    deleteOperation(input: DeleteOperationRequest): Promise<Empty>

    /**
     *  Starts asynchronous cancellation on a long-running operation.  The server
     *  makes a best effort to cancel the operation, but success is not
     *  guaranteed.  If the server doesn't support this method, it returns
     *  `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
     *  [Operations.GetOperation][google.longrunning.Operations.GetOperation] or
     *  other methods to check whether the cancellation succeeded or whether the
     *  operation completed despite cancellation. On successful cancellation,
     *  the operation is not deleted; instead, it becomes an operation with
     *  an [Operation.error][google.longrunning.Operation.error] value with a [google.rpc.Status.code][google.rpc.Status.code] of 1,
     *  corresponding to `Code.CANCELLED`.
     */
    cancelOperation(input: CancelOperationRequest): Promise<Empty>

    /**
     *  Waits until the specified long-running operation is done or reaches at most
     *  a specified timeout, returning the latest state.  If the operation is
     *  already done, the latest state is immediately returned.  If the timeout
     *  specified is greater than the default HTTP/RPC timeout, the HTTP/RPC
     *  timeout is used.  If the server does not support this method, it returns
     *  `google.rpc.Code.UNIMPLEMENTED`.
     *  Note that this method is on a best-effort basis.  It may return the latest
     *  state before the specified timeout (including immediately), meaning even an
     *  immediate response is no guarantee that the operation is done.
     */
    waitOperation(input: WaitOperationRequest): Promise<Operation>
}

export namespace Operations {
    export const name = 'google.longrunning.Operations'
}

/**
 *  This resource represents a long-running operation that is the result of a
 *  network API call.
 */
export interface Operation {
    /**
     *  The server-assigned name, which is only unique within the same service that
     *  originally returns it. If you use the default HTTP mapping, the
     *  `name` should be a resource name ending with `operations/{unique_id}`.
     */
    name?: string

    /**
     *  Service-specific metadata associated with the operation.  It typically
     *  contains progress information and common metadata such as create time.
     *  Some services might not provide such metadata.  Any method that returns a
     *  long-running operation should document the metadata type, if any.
     */
    metadata?: Any

    /**
     *  If the value is `false`, it means the operation is still in progress.
     *  If `true`, the operation is completed, and either `error` or `response` is
     *  available.
     */
    done?: boolean

    /**  The error result of the operation in case of failure or cancellation. */
    error?: Status

    /**
     *  The normal response of the operation in case of success.  If the original
     *  method returns no data on success, such as `Delete`, the response is
     *  `google.protobuf.Empty`.  If the original method is standard
     *  `Get`/`Create`/`Update`, the response should be the resource.  For other
     *  methods, the response should have the type `XxxResponse`, where `Xxx`
     *  is the original method name.  For example, if the original method name
     *  is `TakeSnapshot()`, the inferred response type is
     *  `TakeSnapshotResponse`.
     */
    response?: Any
}

export namespace Operation {
    export const name = 'google.longrunning.Operation'
}

/**  The request message for [Operations.GetOperation][google.longrunning.Operations.GetOperation]. */
export interface GetOperationRequest {
    /**  The name of the operation resource. */
    name?: string
}

export namespace GetOperationRequest {
    export const name = 'google.longrunning.GetOperationRequest'
}

/**  The request message for [Operations.ListOperations][google.longrunning.Operations.ListOperations]. */
export interface ListOperationsRequest {
    /**  The name of the operation's parent resource. */
    name?: string

    /**  The standard list filter. */
    filter?: string

    /**  The standard list page size. */
    pageSize?: number

    /**  The standard list page token. */
    pageToken?: string
}

export namespace ListOperationsRequest {
    export const name = 'google.longrunning.ListOperationsRequest'
}

/**  The response message for [Operations.ListOperations][google.longrunning.Operations.ListOperations]. */
export interface ListOperationsResponse {
    /**  A list of operations that matches the specified filter in the request. */
    operations?: Operation[]

    /**  The standard List next-page token. */
    nextPageToken?: string
}

export namespace ListOperationsResponse {
    export const name = 'google.longrunning.ListOperationsResponse'
}

/**  The request message for [Operations.CancelOperation][google.longrunning.Operations.CancelOperation]. */
export interface CancelOperationRequest {
    /**  The name of the operation resource to be cancelled. */
    name?: string
}

export namespace CancelOperationRequest {
    export const name = 'google.longrunning.CancelOperationRequest'
}

/**  The request message for [Operations.DeleteOperation][google.longrunning.Operations.DeleteOperation]. */
export interface DeleteOperationRequest {
    /**  The name of the operation resource to be deleted. */
    name?: string
}

export namespace DeleteOperationRequest {
    export const name = 'google.longrunning.DeleteOperationRequest'
}

/**  The request message for [Operations.WaitOperation][google.longrunning.Operations.WaitOperation]. */
export interface WaitOperationRequest {
    /**  The name of the operation resource to wait on. */
    name?: string

    /**
     *  The maximum duration to wait before timing out. If left blank, the wait
     *  will be at most the time permitted by the underlying HTTP/RPC protocol.
     *  If RPC context deadline is also specified, the shorter one will be used.
     */
    timeout?: Duration
}

export namespace WaitOperationRequest {
    export const name = 'google.longrunning.WaitOperationRequest'
}

/**
 *  A message representing the message types used by a long-running operation.
 * 
 *  Example:
 * 
 *    rpc LongRunningRecognize(LongRunningRecognizeRequest)
 *        returns (google.longrunning.Operation) {
 *      option (google.longrunning.operation_info) = {
 *        response_type: "LongRunningRecognizeResponse"
 *        metadata_type: "LongRunningRecognizeMetadata"
 *      };
 *    }
 */
export interface OperationInfo {
    /**
     *  Required. The message name of the primary return type for this
     *  long-running operation.
     *  This type will be used to deserialize the LRO's response.
     * 
     *  If the response is in a different package from the rpc, a fully-qualified
     *  message name must be used (e.g. `google.protobuf.Struct`).
     * 
     *  Note: Altering this value constitutes a breaking change.
     */
    responseType?: string

    /**
     *  Required. The message name of the metadata type for this long-running
     *  operation.
     * 
     *  If the response is in a different package from the rpc, a fully-qualified
     *  message name must be used (e.g. `google.protobuf.Struct`).
     * 
     *  Note: Altering this value constitutes a breaking change.
     */
    metadataType?: string
}

export namespace OperationInfo {
    export const name = 'google.longrunning.OperationInfo'
}

declare module '@sisyphus.js/runtime/lib/google/protobuf/descriptor' {
    interface MethodOptions {
        /**
         *  Additional information regarding long-running operations.
         *  In particular, this specifies the types that are returned from
         *  long-running operations.
         * 
         *  Required for methods that return `google.longrunning.Operation`; invalid
         *  otherwise.
         */
        operationInfo: OperationInfo
    }
}
