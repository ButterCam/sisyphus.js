import {Billing} from '@sisyphus.js/google/lib/google/api/billing'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/api/billing' {
    namespace Billing {
        let descriptor: MessageDescriptor<Billing>

        function binaryify(v: Billing): Uint8Array

        function parse(buffer: Uint8Array): Billing
        namespace BillingDestination {
            let descriptor: MessageDescriptor<BillingDestination>

            function binaryify(v: BillingDestination): Uint8Array

            function parse(buffer: Uint8Array): BillingDestination
        }
    }
}

export * from '@sisyphus.js/google/lib/google/api/billing'

Billing.descriptor = protobufDefinition({
    name: '.google.api.Billing',

    fields: [{kind: 'message', name: 'consumerDestinations', num: 8, type: () => Billing.BillingDestination.descriptor, repeat: true}]
})

Billing.binaryify = binaryifyFun(Billing.descriptor)

Billing.parse = parseFun(Billing.descriptor)

Billing.BillingDestination.descriptor = protobufDefinition({
    name: '.google.api.Billing.BillingDestination',

    fields: [
        {kind: 'scalar', name: 'monitoredResource', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'metrics', num: 2, type: 9 /* STRING */, repeat: 1}
    ]
})

Billing.BillingDestination.binaryify = binaryifyFun(Billing.BillingDestination.descriptor)

Billing.BillingDestination.parse = parseFun(Billing.BillingDestination.descriptor)
