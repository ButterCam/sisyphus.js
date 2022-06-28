import {Color} from '@sisyphus.js/google/lib/google/type/color'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {FloatValue} from '@sisyphus.js/runtime.proto/lib/google/protobuf/wrappers.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/type/color' {
    namespace Color {
        let descriptor: MessageDescriptor<Color>

        function binaryify(v: Color): Uint8Array

        function parse(buffer: Uint8Array): Color
    }
}

export * from '@sisyphus.js/google/lib/google/type/color'

Color.descriptor = protobufDefinition({
    name: '.google.type.Color',

    fields: [
        {kind: 'scalar', name: 'red', num: 1, type: 2 /* FLOAT */},

        {kind: 'scalar', name: 'green', num: 2, type: 2 /* FLOAT */},

        {kind: 'scalar', name: 'blue', num: 3, type: 2 /* FLOAT */},

        {kind: 'message', name: 'alpha', num: 4, type: () => FloatValue.descriptor}
    ]
})

Color.binaryify = binaryifyFun(Color.descriptor)

Color.parse = parseFun(Color.descriptor)
