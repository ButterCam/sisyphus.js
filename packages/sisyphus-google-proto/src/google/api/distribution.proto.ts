import {Distribution} from '@sisyphus.js/google/lib/google/api/distribution'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {Any} from '@sisyphus.js/runtime.proto/lib/google/protobuf/any.proto'
import {Timestamp} from '@sisyphus.js/runtime.proto/lib/google/protobuf/timestamp.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/api/distribution' {
    namespace Distribution {
        let descriptor: MessageDescriptor<Distribution>

        function binaryify(v: Distribution): Uint8Array

        function parse(buffer: Uint8Array): Distribution
        namespace Range {
            let descriptor: MessageDescriptor<Range>

            function binaryify(v: Range): Uint8Array

            function parse(buffer: Uint8Array): Range
        }

        namespace BucketOptions {
            let descriptor: MessageDescriptor<BucketOptions>

            function binaryify(v: BucketOptions): Uint8Array

            function parse(buffer: Uint8Array): BucketOptions
            namespace Linear {
                let descriptor: MessageDescriptor<Linear>

                function binaryify(v: Linear): Uint8Array

                function parse(buffer: Uint8Array): Linear
            }

            namespace Exponential {
                let descriptor: MessageDescriptor<Exponential>

                function binaryify(v: Exponential): Uint8Array

                function parse(buffer: Uint8Array): Exponential
            }

            namespace Explicit {
                let descriptor: MessageDescriptor<Explicit>

                function binaryify(v: Explicit): Uint8Array

                function parse(buffer: Uint8Array): Explicit
            }
        }

        namespace Exemplar {
            let descriptor: MessageDescriptor<Exemplar>

            function binaryify(v: Exemplar): Uint8Array

            function parse(buffer: Uint8Array): Exemplar
        }
    }
}

export * from '@sisyphus.js/google/lib/google/api/distribution'

Distribution.descriptor = protobufDefinition({
    name: '.google.api.Distribution',

    fields: [
        {kind: 'scalar', name: 'count', num: 1, type: 3 /* INT64 */},

        {kind: 'scalar', name: 'mean', num: 2, type: 1 /* DOUBLE */},

        {kind: 'scalar', name: 'sumOfSquaredDeviation', num: 3, type: 1 /* DOUBLE */},

        {kind: 'message', name: 'range', num: 4, type: () => Distribution.Range.descriptor},

        {kind: 'message', name: 'bucketOptions', num: 6, type: () => Distribution.BucketOptions.descriptor},

        {kind: 'scalar', name: 'bucketCounts', num: 7, type: 3 /* INT64 */, repeat: 0},

        {kind: 'message', name: 'exemplars', num: 10, type: () => Distribution.Exemplar.descriptor, repeat: true}
    ]
})

Distribution.binaryify = binaryifyFun(Distribution.descriptor)

Distribution.parse = parseFun(Distribution.descriptor)

Distribution.Range.descriptor = protobufDefinition({
    name: '.google.api.Distribution.Range',

    fields: [
        {kind: 'scalar', name: 'min', num: 1, type: 1 /* DOUBLE */},

        {kind: 'scalar', name: 'max', num: 2, type: 1 /* DOUBLE */}
    ]
})

Distribution.Range.binaryify = binaryifyFun(Distribution.Range.descriptor)

Distribution.Range.parse = parseFun(Distribution.Range.descriptor)

Distribution.BucketOptions.descriptor = protobufDefinition({
    name: '.google.api.Distribution.BucketOptions',

    fields: [
        {kind: 'message', name: 'linearBuckets', num: 1, type: () => Distribution.BucketOptions.Linear.descriptor},

        {kind: 'message', name: 'exponentialBuckets', num: 2, type: () => Distribution.BucketOptions.Exponential.descriptor},

        {kind: 'message', name: 'explicitBuckets', num: 3, type: () => Distribution.BucketOptions.Explicit.descriptor}
    ]
})

Distribution.BucketOptions.binaryify = binaryifyFun(Distribution.BucketOptions.descriptor)

Distribution.BucketOptions.parse = parseFun(Distribution.BucketOptions.descriptor)

Distribution.BucketOptions.Linear.descriptor = protobufDefinition({
    name: '.google.api.Distribution.BucketOptions.Linear',

    fields: [
        {kind: 'scalar', name: 'numFiniteBuckets', num: 1, type: 5 /* INT32 */},

        {kind: 'scalar', name: 'width', num: 2, type: 1 /* DOUBLE */},

        {kind: 'scalar', name: 'offset', num: 3, type: 1 /* DOUBLE */}
    ]
})

Distribution.BucketOptions.Linear.binaryify = binaryifyFun(Distribution.BucketOptions.Linear.descriptor)

Distribution.BucketOptions.Linear.parse = parseFun(Distribution.BucketOptions.Linear.descriptor)

Distribution.BucketOptions.Exponential.descriptor = protobufDefinition({
    name: '.google.api.Distribution.BucketOptions.Exponential',

    fields: [
        {kind: 'scalar', name: 'numFiniteBuckets', num: 1, type: 5 /* INT32 */},

        {kind: 'scalar', name: 'growthFactor', num: 2, type: 1 /* DOUBLE */},

        {kind: 'scalar', name: 'scale', num: 3, type: 1 /* DOUBLE */}
    ]
})

Distribution.BucketOptions.Exponential.binaryify = binaryifyFun(Distribution.BucketOptions.Exponential.descriptor)

Distribution.BucketOptions.Exponential.parse = parseFun(Distribution.BucketOptions.Exponential.descriptor)

Distribution.BucketOptions.Explicit.descriptor = protobufDefinition({
    name: '.google.api.Distribution.BucketOptions.Explicit',

    fields: [{kind: 'scalar', name: 'bounds', num: 1, type: 1 /* DOUBLE */, repeat: 0}]
})

Distribution.BucketOptions.Explicit.binaryify = binaryifyFun(Distribution.BucketOptions.Explicit.descriptor)

Distribution.BucketOptions.Explicit.parse = parseFun(Distribution.BucketOptions.Explicit.descriptor)

Distribution.Exemplar.descriptor = protobufDefinition({
    name: '.google.api.Distribution.Exemplar',

    fields: [
        {kind: 'scalar', name: 'value', num: 1, type: 1 /* DOUBLE */},

        {kind: 'message', name: 'timestamp', num: 2, type: () => Timestamp.descriptor},

        {kind: 'message', name: 'attachments', num: 3, type: () => Any.descriptor, repeat: true}
    ]
})

Distribution.Exemplar.binaryify = binaryifyFun(Distribution.Exemplar.descriptor)

Distribution.Exemplar.parse = parseFun(Distribution.Exemplar.descriptor)
