import {MetricRule, Quota, QuotaLimit} from '@sisyphus.js/google/lib/google/api/quota'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/api/quota' {
    namespace Quota {
        let descriptor: MessageDescriptor<Quota>

        function binaryify(v: Quota): Uint8Array

        function parse(buffer: Uint8Array): Quota
    }

    namespace MetricRule {
        let descriptor: MessageDescriptor<MetricRule>

        function binaryify(v: MetricRule): Uint8Array

        function parse(buffer: Uint8Array): MetricRule
    }

    namespace QuotaLimit {
        let descriptor: MessageDescriptor<QuotaLimit>

        function binaryify(v: QuotaLimit): Uint8Array

        function parse(buffer: Uint8Array): QuotaLimit
    }
}

export * from '@sisyphus.js/google/lib/google/api/quota'

Quota.descriptor = protobufDefinition({
    name: '.google.api.Quota',

    fields: [
        {kind: 'message', name: 'limits', num: 3, type: () => QuotaLimit.descriptor, repeat: true},

        {kind: 'message', name: 'metricRules', num: 4, type: () => MetricRule.descriptor, repeat: true}
    ]
})

Quota.binaryify = binaryifyFun(Quota.descriptor)

Quota.parse = parseFun(Quota.descriptor)

MetricRule.descriptor = protobufDefinition({
    name: '.google.api.MetricRule',

    fields: [
        {kind: 'scalar', name: 'selector', num: 1, type: 9 /* STRING */},

        {kind: 'map', name: 'metricCosts', num: 2, key: 9 /* STRING */, value: 3 /* INT64 */}
    ]
})

MetricRule.binaryify = binaryifyFun(MetricRule.descriptor)

MetricRule.parse = parseFun(MetricRule.descriptor)

QuotaLimit.descriptor = protobufDefinition({
    name: '.google.api.QuotaLimit',

    fields: [
        {kind: 'scalar', name: 'name', num: 6, type: 9 /* STRING */},

        {kind: 'scalar', name: 'description', num: 2, type: 9 /* STRING */},

        {kind: 'scalar', name: 'defaultLimit', num: 3, type: 3 /* INT64 */},

        {kind: 'scalar', name: 'maxLimit', num: 4, type: 3 /* INT64 */},

        {kind: 'scalar', name: 'freeTier', num: 7, type: 3 /* INT64 */},

        {kind: 'scalar', name: 'duration', num: 5, type: 9 /* STRING */},

        {kind: 'scalar', name: 'metric', num: 8, type: 9 /* STRING */},

        {kind: 'scalar', name: 'unit', num: 9, type: 9 /* STRING */},

        {kind: 'map', name: 'values', num: 10, key: 9 /* STRING */, value: 3 /* INT64 */},

        {kind: 'scalar', name: 'displayName', num: 12, type: 9 /* STRING */}
    ]
})

QuotaLimit.binaryify = binaryifyFun(QuotaLimit.descriptor)

QuotaLimit.parse = parseFun(QuotaLimit.descriptor)
