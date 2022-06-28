import {LabelDescriptor} from './label.proto'
import {LogDescriptor} from '@sisyphus.js/google/lib/google/api/log'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/api/log' {
    namespace LogDescriptor {
        let descriptor: MessageDescriptor<LogDescriptor>

        function binaryify(v: LogDescriptor): Uint8Array

        function parse(buffer: Uint8Array): LogDescriptor
    }
}

export * from '@sisyphus.js/google/lib/google/api/log'

LogDescriptor.descriptor = protobufDefinition({
    name: '.google.api.LogDescriptor',

    fields: [
        {kind: 'scalar', name: 'name', num: 1, type: 9 /* STRING */},

        {kind: 'message', name: 'labels', num: 2, type: () => LabelDescriptor.descriptor, repeat: true},

        {kind: 'scalar', name: 'description', num: 3, type: 9 /* STRING */},

        {kind: 'scalar', name: 'displayName', num: 4, type: 9 /* STRING */}
    ]
})

LogDescriptor.binaryify = binaryifyFun(LogDescriptor.descriptor)

LogDescriptor.parse = parseFun(LogDescriptor.descriptor)
