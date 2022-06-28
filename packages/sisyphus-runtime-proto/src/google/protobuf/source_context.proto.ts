import {binaryifyFun, parseFun} from '../../message'
import {MessageDescriptor} from '../../reflection'
import {SourceContext} from '@sisyphus.js/runtime/lib/google/protobuf/source_context'

declare module '@sisyphus.js/runtime/lib/google/protobuf/source_context' {
    namespace SourceContext {
        let descriptor: MessageDescriptor<SourceContext>

        function binaryify(v: SourceContext): Uint8Array

        function parse(buffer: Uint8Array): SourceContext
    }
}

export * from '@sisyphus.js/runtime/lib/google/protobuf/source_context'

SourceContext.descriptor = protobufDefinition({
    name: '.google.protobuf.SourceContext',

    fields: [{kind: 'scalar', name: 'fileName', num: 1, type: 9 /* STRING */}]
})

SourceContext.binaryify = binaryifyFun(SourceContext.descriptor)

SourceContext.parse = parseFun(SourceContext.descriptor)
