import {Monitoring} from '@sisyphus.js/google/lib/google/api/monitoring'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/api/monitoring' {
    namespace Monitoring {
        let descriptor: MessageDescriptor<Monitoring>

        function binaryify(v: Monitoring): Uint8Array

        function parse(buffer: Uint8Array): Monitoring
        namespace MonitoringDestination {
            let descriptor: MessageDescriptor<MonitoringDestination>

            function binaryify(v: MonitoringDestination): Uint8Array

            function parse(buffer: Uint8Array): MonitoringDestination
        }
    }
}

export * from '@sisyphus.js/google/lib/google/api/monitoring'

Monitoring.descriptor = protobufDefinition({
    name: '.google.api.Monitoring',

    fields: [
        {kind: 'message', name: 'producerDestinations', num: 1, type: () => Monitoring.MonitoringDestination.descriptor, repeat: true},

        {kind: 'message', name: 'consumerDestinations', num: 2, type: () => Monitoring.MonitoringDestination.descriptor, repeat: true}
    ]
})

Monitoring.binaryify = binaryifyFun(Monitoring.descriptor)

Monitoring.parse = parseFun(Monitoring.descriptor)

Monitoring.MonitoringDestination.descriptor = protobufDefinition({
    name: '.google.api.Monitoring.MonitoringDestination',

    fields: [
        {kind: 'scalar', name: 'monitoredResource', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'metrics', num: 2, type: 9 /* STRING */, repeat: 1}
    ]
})

Monitoring.MonitoringDestination.binaryify = binaryifyFun(Monitoring.MonitoringDestination.descriptor)

Monitoring.MonitoringDestination.parse = parseFun(Monitoring.MonitoringDestination.descriptor)
