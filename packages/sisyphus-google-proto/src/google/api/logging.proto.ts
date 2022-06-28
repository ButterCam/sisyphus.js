import {Logging} from '@sisyphus.js/google/lib/google/api/logging'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/api/logging' {
    namespace Logging {
        let descriptor: MessageDescriptor<Logging>

        function binaryify(v: Logging): Uint8Array

        function parse(buffer: Uint8Array): Logging
        namespace LoggingDestination {
            let descriptor: MessageDescriptor<LoggingDestination>

            function binaryify(v: LoggingDestination): Uint8Array

            function parse(buffer: Uint8Array): LoggingDestination
        }
    }
}

export * from '@sisyphus.js/google/lib/google/api/logging'

Logging.descriptor = protobufDefinition({
    name: '.google.api.Logging',

    fields: [
        {kind: 'message', name: 'producerDestinations', num: 1, type: () => Logging.LoggingDestination.descriptor, repeat: true},

        {kind: 'message', name: 'consumerDestinations', num: 2, type: () => Logging.LoggingDestination.descriptor, repeat: true}
    ]
})

Logging.binaryify = binaryifyFun(Logging.descriptor)

Logging.parse = parseFun(Logging.descriptor)

Logging.LoggingDestination.descriptor = protobufDefinition({
    name: '.google.api.Logging.LoggingDestination',

    fields: [
        {kind: 'scalar', name: 'monitoredResource', num: 3, type: 9 /* STRING */},

        {kind: 'scalar', name: 'logs', num: 1, type: 9 /* STRING */, repeat: 1}
    ]
})

Logging.LoggingDestination.binaryify = binaryifyFun(Logging.LoggingDestination.descriptor)

Logging.LoggingDestination.parse = parseFun(Logging.LoggingDestination.descriptor)
