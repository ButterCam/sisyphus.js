import {SourceInfo} from '@sisyphus.js/google/lib/google/api/source_info'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {Any} from '@sisyphus.js/runtime.proto/lib/google/protobuf/any.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/api/source_info' {
    namespace SourceInfo {
        let descriptor: MessageDescriptor<SourceInfo>

        function binaryify(v: SourceInfo): Uint8Array

        function parse(buffer: Uint8Array): SourceInfo
    }
}

export * from '@sisyphus.js/google/lib/google/api/source_info'

SourceInfo.descriptor = protobufDefinition({
    name: '.google.api.SourceInfo',

    fields: [{kind: 'message', name: 'sourceFiles', num: 1, type: () => Any.descriptor, repeat: true}]
})

SourceInfo.binaryify = binaryifyFun(SourceInfo.descriptor)

SourceInfo.parse = parseFun(SourceInfo.descriptor)
