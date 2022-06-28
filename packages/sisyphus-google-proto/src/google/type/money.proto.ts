import {Money} from '@sisyphus.js/google/lib/google/type/money'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/type/money' {
    namespace Money {
        let descriptor: MessageDescriptor<Money>

        function binaryify(v: Money): Uint8Array

        function parse(buffer: Uint8Array): Money
    }
}

export * from '@sisyphus.js/google/lib/google/type/money'

Money.descriptor = protobufDefinition({
    name: '.google.type.Money',

    fields: [
        {kind: 'scalar', name: 'currencyCode', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'units', num: 2, type: 3 /* INT64 */},

        {kind: 'scalar', name: 'nanos', num: 3, type: 5 /* INT32 */}
    ]
})

Money.binaryify = binaryifyFun(Money.descriptor)

Money.parse = parseFun(Money.descriptor)
