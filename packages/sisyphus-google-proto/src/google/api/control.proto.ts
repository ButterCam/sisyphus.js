import {Control} from '@sisyphus.js/google/lib/google/api/control'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/api/control' {
    namespace Control {
        let descriptor: MessageDescriptor<Control>

        function binaryify(v: Control): Uint8Array

        function parse(buffer: Uint8Array): Control
    }
}

export * from '@sisyphus.js/google/lib/google/api/control'

Control.descriptor = protobufDefinition({
    name: '.google.api.Control',

    fields: [{kind: 'scalar', name: 'environment', num: 1, type: 9 /* STRING */}]
})

Control.binaryify = binaryifyFun(Control.descriptor)

Control.parse = parseFun(Control.descriptor)
