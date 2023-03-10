import {Operations} from '@sisyphus.js/google/lib/google/longrunning/operations'
import {aipClient, Rpc, ServiceDescriptor} from '@sisyphus.js/transport-aip'

declare module '@sisyphus.js/google/lib/google/longrunning/operations' {
    namespace Operations {
        let aipDescriptor: ServiceDescriptor

        function aipClient(rpc: Rpc): Operations
    }
}

export * from '@sisyphus.js/google/lib/google/longrunning/operations'

Operations.aipDescriptor = {
    name: 'Operations',

    methods: {
        listOperations: {
            name: 'ListOperations',
            i: '.google.longrunning.ListOperationsRequest',
            o: '.google.longrunning.ListOperationsResponse',
            options: {}
        },

        getOperation: {
            name: 'GetOperation',
            i: '.google.longrunning.GetOperationRequest',
            o: '.google.longrunning.Operation',
            options: {}
        },

        deleteOperation: {
            name: 'DeleteOperation',
            i: '.google.longrunning.DeleteOperationRequest',
            o: '.google.protobuf.Empty',
            options: {}
        },

        cancelOperation: {
            name: 'CancelOperation',
            i: '.google.longrunning.CancelOperationRequest',
            o: '.google.protobuf.Empty',
            options: {}
        },

        waitOperation: {
            name: 'WaitOperation', 
            i: '.google.longrunning.WaitOperationRequest', 
            o: '.google.longrunning.Operation', 
            options: {}
        },
    }
}

Operations.aipClient = function(rpc: Rpc): Operations {
    return aipClient(Operations.aipDescriptor, rpc)
}
