import {LocalizedText} from '@sisyphus.js/google/lib/google/type/localized_text'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/type/localized_text' {
    namespace LocalizedText {
        let descriptor: MessageDescriptor<LocalizedText>

        function binaryify(v: LocalizedText): Uint8Array

        function parse(buffer: Uint8Array): LocalizedText
    }
}

export * from '@sisyphus.js/google/lib/google/type/localized_text'

LocalizedText.descriptor = protobufDefinition({
    name: '.google.type.LocalizedText',

    fields: [
        {kind: 'scalar', name: 'text', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'languageCode', num: 2, type: 9 /* STRING */}
    ]
})

LocalizedText.binaryify = binaryifyFun(LocalizedText.descriptor)

LocalizedText.parse = parseFun(LocalizedText.descriptor)
