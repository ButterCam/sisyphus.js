import {binaryifyFun, parseFun} from '../../message'
import {MessageDescriptor} from '../../reflection'
import {read, write} from '../../wellknown/empty'
import {Empty} from '@sisyphus.js/runtime/lib/google/protobuf/empty'

declare module '@sisyphus.js/runtime/lib/google/protobuf/empty' {
    namespace Empty {
        let descriptor: MessageDescriptor<Empty>

        function binaryify(v: Empty): Uint8Array

        function parse(buffer: Uint8Array): Empty
    }
}

export * from '@sisyphus.js/runtime/lib/google/protobuf/empty'

Empty.descriptor = protobufDefinition({
    name: '.google.protobuf.Empty',

    fields: [],

    write, read
})

Empty.binaryify = binaryifyFun(Empty.descriptor)

Empty.parse = parseFun(Empty.descriptor)
