import {Decimal} from '@sisyphus.js/google/lib/google/type/decimal'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/type/decimal' {
    namespace Decimal {
        let descriptor: MessageDescriptor<Decimal>

        function binaryify(v: Decimal): Uint8Array

        function parse(buffer: Uint8Array): Decimal
    }
}

export * from '@sisyphus.js/google/lib/google/type/decimal'

Decimal.descriptor = protobufDefinition({
    name: '.google.type.Decimal',

    fields: [{kind: 'scalar', name: 'value', num: 1, type: 9 /* STRING */}]
})

Decimal.binaryify = binaryifyFun(Decimal.descriptor)

Decimal.parse = parseFun(Decimal.descriptor)
