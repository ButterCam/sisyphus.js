import {Expr} from '@sisyphus.js/google/lib/google/type/expr'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/type/expr' {
    namespace Expr {
        let descriptor: MessageDescriptor<Expr>

        function binaryify(v: Expr): Uint8Array

        function parse(buffer: Uint8Array): Expr
    }
}

export * from '@sisyphus.js/google/lib/google/type/expr'

Expr.descriptor = protobufDefinition({
    name: '.google.type.Expr',

    fields: [
        {kind: 'scalar', name: 'expression', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'title', num: 2, type: 9 /* STRING */},

        {kind: 'scalar', name: 'description', num: 3, type: 9 /* STRING */},

        {kind: 'scalar', name: 'location', num: 4, type: 9 /* STRING */}
    ]
})

Expr.binaryify = binaryifyFun(Expr.descriptor)

Expr.parse = parseFun(Expr.descriptor)
