import {PhoneNumber} from '@sisyphus.js/google/lib/google/type/phone_number'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/type/phone_number' {
    namespace PhoneNumber {
        let descriptor: MessageDescriptor<PhoneNumber>

        function binaryify(v: PhoneNumber): Uint8Array

        function parse(buffer: Uint8Array): PhoneNumber
        namespace ShortCode {
            let descriptor: MessageDescriptor<ShortCode>

            function binaryify(v: ShortCode): Uint8Array

            function parse(buffer: Uint8Array): ShortCode
        }
    }
}

export * from '@sisyphus.js/google/lib/google/type/phone_number'

PhoneNumber.descriptor = protobufDefinition({
    name: '.google.type.PhoneNumber',

    fields: [
        {kind: 'scalar', name: 'e164Number', num: 1, type: 9 /* STRING */},

        {kind: 'message', name: 'shortCode', num: 2, type: () => PhoneNumber.ShortCode.descriptor},

        {kind: 'scalar', name: 'extension', num: 3, type: 9 /* STRING */}
    ]
})

PhoneNumber.binaryify = binaryifyFun(PhoneNumber.descriptor)

PhoneNumber.parse = parseFun(PhoneNumber.descriptor)

PhoneNumber.ShortCode.descriptor = protobufDefinition({
    name: '.google.type.PhoneNumber.ShortCode',

    fields: [
        {kind: 'scalar', name: 'regionCode', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'number', num: 2, type: 9 /* STRING */}
    ]
})

PhoneNumber.ShortCode.binaryify = binaryifyFun(PhoneNumber.ShortCode.descriptor)

PhoneNumber.ShortCode.parse = parseFun(PhoneNumber.ShortCode.descriptor)
