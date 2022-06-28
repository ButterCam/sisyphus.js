import {Status} from '../rpc/status.proto'
import {CancelOperationRequest, DeleteOperationRequest, GetOperationRequest, ListOperationsRequest, ListOperationsResponse, Operation, OperationInfo, WaitOperationRequest} from '@sisyphus.js/google/lib/google/longrunning/operations'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {Any} from '@sisyphus.js/runtime.proto/lib/google/protobuf/any.proto'
import {Duration} from '@sisyphus.js/runtime.proto/lib/google/protobuf/duration.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/longrunning/operations' {
    namespace Operation {
        let descriptor: MessageDescriptor<Operation>

        function binaryify(v: Operation): Uint8Array

        function parse(buffer: Uint8Array): Operation
    }

    namespace GetOperationRequest {
        let descriptor: MessageDescriptor<GetOperationRequest>

        function binaryify(v: GetOperationRequest): Uint8Array

        function parse(buffer: Uint8Array): GetOperationRequest
    }

    namespace ListOperationsRequest {
        let descriptor: MessageDescriptor<ListOperationsRequest>

        function binaryify(v: ListOperationsRequest): Uint8Array

        function parse(buffer: Uint8Array): ListOperationsRequest
    }

    namespace ListOperationsResponse {
        let descriptor: MessageDescriptor<ListOperationsResponse>

        function binaryify(v: ListOperationsResponse): Uint8Array

        function parse(buffer: Uint8Array): ListOperationsResponse
    }

    namespace CancelOperationRequest {
        let descriptor: MessageDescriptor<CancelOperationRequest>

        function binaryify(v: CancelOperationRequest): Uint8Array

        function parse(buffer: Uint8Array): CancelOperationRequest
    }

    namespace DeleteOperationRequest {
        let descriptor: MessageDescriptor<DeleteOperationRequest>

        function binaryify(v: DeleteOperationRequest): Uint8Array

        function parse(buffer: Uint8Array): DeleteOperationRequest
    }

    namespace WaitOperationRequest {
        let descriptor: MessageDescriptor<WaitOperationRequest>

        function binaryify(v: WaitOperationRequest): Uint8Array

        function parse(buffer: Uint8Array): WaitOperationRequest
    }

    namespace OperationInfo {
        let descriptor: MessageDescriptor<OperationInfo>

        function binaryify(v: OperationInfo): Uint8Array

        function parse(buffer: Uint8Array): OperationInfo
    }
}

export * from '@sisyphus.js/google/lib/google/longrunning/operations'

Operation.descriptor = protobufDefinition({
    name: '.google.longrunning.Operation',

    fields: [
        {kind: 'scalar', name: 'name', num: 1, type: 9 /* STRING */},

        {kind: 'message', name: 'metadata', num: 2, type: () => Any.descriptor},

        {kind: 'scalar', name: 'done', num: 3, type: 8 /* BOOL */},

        {kind: 'message', name: 'error', num: 4, type: () => Status.descriptor},

        {kind: 'message', name: 'response', num: 5, type: () => Any.descriptor}
    ]
})

Operation.binaryify = binaryifyFun(Operation.descriptor)

Operation.parse = parseFun(Operation.descriptor)

GetOperationRequest.descriptor = protobufDefinition({
    name: '.google.longrunning.GetOperationRequest',

    fields: [{kind: 'scalar', name: 'name', num: 1, type: 9 /* STRING */}]
})

GetOperationRequest.binaryify = binaryifyFun(GetOperationRequest.descriptor)

GetOperationRequest.parse = parseFun(GetOperationRequest.descriptor)

ListOperationsRequest.descriptor = protobufDefinition({
    name: '.google.longrunning.ListOperationsRequest',

    fields: [
        {kind: 'scalar', name: 'name', num: 4, type: 9 /* STRING */},

        {kind: 'scalar', name: 'filter', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'pageSize', num: 2, type: 5 /* INT32 */},

        {kind: 'scalar', name: 'pageToken', num: 3, type: 9 /* STRING */}
    ]
})

ListOperationsRequest.binaryify = binaryifyFun(ListOperationsRequest.descriptor)

ListOperationsRequest.parse = parseFun(ListOperationsRequest.descriptor)

ListOperationsResponse.descriptor = protobufDefinition({
    name: '.google.longrunning.ListOperationsResponse',

    fields: [
        {kind: 'message', name: 'operations', num: 1, type: () => Operation.descriptor, repeat: true},

        {kind: 'scalar', name: 'nextPageToken', num: 2, type: 9 /* STRING */}
    ]
})

ListOperationsResponse.binaryify = binaryifyFun(ListOperationsResponse.descriptor)

ListOperationsResponse.parse = parseFun(ListOperationsResponse.descriptor)

CancelOperationRequest.descriptor = protobufDefinition({
    name: '.google.longrunning.CancelOperationRequest',

    fields: [{kind: 'scalar', name: 'name', num: 1, type: 9 /* STRING */}]
})

CancelOperationRequest.binaryify = binaryifyFun(CancelOperationRequest.descriptor)

CancelOperationRequest.parse = parseFun(CancelOperationRequest.descriptor)

DeleteOperationRequest.descriptor = protobufDefinition({
    name: '.google.longrunning.DeleteOperationRequest',

    fields: [{kind: 'scalar', name: 'name', num: 1, type: 9 /* STRING */}]
})

DeleteOperationRequest.binaryify = binaryifyFun(DeleteOperationRequest.descriptor)

DeleteOperationRequest.parse = parseFun(DeleteOperationRequest.descriptor)

WaitOperationRequest.descriptor = protobufDefinition({
    name: '.google.longrunning.WaitOperationRequest',

    fields: [
        {kind: 'scalar', name: 'name', num: 1, type: 9 /* STRING */},

        {kind: 'message', name: 'timeout', num: 2, type: () => Duration.descriptor}
    ]
})

WaitOperationRequest.binaryify = binaryifyFun(WaitOperationRequest.descriptor)

WaitOperationRequest.parse = parseFun(WaitOperationRequest.descriptor)

OperationInfo.descriptor = protobufDefinition({
    name: '.google.longrunning.OperationInfo',

    fields: [
        {kind: 'scalar', name: 'responseType', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'metadataType', num: 2, type: 9 /* STRING */}
    ]
})

OperationInfo.binaryify = binaryifyFun(OperationInfo.descriptor)

OperationInfo.parse = parseFun(OperationInfo.descriptor)

extendDefinition('.google.protobuf.MethodOptions', {kind: 'message', name: 'operationInfo', num: 1049, type: () => OperationInfo.descriptor})
