import {Quaternion} from '@sisyphus.js/google/lib/google/type/quaternion'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/type/quaternion' {
    namespace Quaternion {
        let descriptor: MessageDescriptor<Quaternion>

        function binaryify(v: Quaternion): Uint8Array

        function parse(buffer: Uint8Array): Quaternion
    }
}

export * from '@sisyphus.js/google/lib/google/type/quaternion'

Quaternion.descriptor = protobufDefinition({
    name: '.google.type.Quaternion',

    fields: [
        {kind: 'scalar', name: 'x', num: 1, type: 1 /* DOUBLE */},

        {kind: 'scalar', name: 'y', num: 2, type: 1 /* DOUBLE */},

        {kind: 'scalar', name: 'z', num: 3, type: 1 /* DOUBLE */},

        {kind: 'scalar', name: 'w', num: 4, type: 1 /* DOUBLE */}
    ]
})

Quaternion.binaryify = binaryifyFun(Quaternion.descriptor)

Quaternion.parse = parseFun(Quaternion.descriptor)
