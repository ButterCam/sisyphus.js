import {Fraction} from '@sisyphus.js/google/lib/google/type/fraction'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/type/fraction' {
    namespace Fraction {
        let descriptor: MessageDescriptor<Fraction>

        function binaryify(v: Fraction): Uint8Array

        function parse(buffer: Uint8Array): Fraction
    }
}

export * from '@sisyphus.js/google/lib/google/type/fraction'

Fraction.descriptor = protobufDefinition({
    name: '.google.type.Fraction',

    fields: [
        {kind: 'scalar', name: 'numerator', num: 1, type: 3 /* INT64 */},

        {kind: 'scalar', name: 'denominator', num: 2, type: 3 /* INT64 */}
    ]
})

Fraction.binaryify = binaryifyFun(Fraction.descriptor)

Fraction.parse = parseFun(Fraction.descriptor)
