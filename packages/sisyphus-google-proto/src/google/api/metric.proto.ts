import {Metric, MetricDescriptor} from '@sisyphus.js/google/lib/google/api/metric'
import {EnumDescriptor, MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {Duration} from '@sisyphus.js/runtime.proto/lib/google/protobuf/duration.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'
import {LabelDescriptor} from './label.proto'
import {LaunchStage} from './launch_stage.proto'

declare module '@sisyphus.js/google/lib/google/api/metric' {
    namespace MetricDescriptor {
        let descriptor: MessageDescriptor<MetricDescriptor>

        function binaryify(v: MetricDescriptor): Uint8Array

        function parse(buffer: Uint8Array): MetricDescriptor

        namespace MetricDescriptorMetadata {
            let descriptor: MessageDescriptor<MetricDescriptorMetadata>

            function binaryify(v: MetricDescriptorMetadata): Uint8Array

            function parse(buffer: Uint8Array): MetricDescriptorMetadata
        }

        namespace MetricKind {
            let descriptor: EnumDescriptor
        }

        namespace ValueType {
            let descriptor: EnumDescriptor
        }
    }

    namespace Metric {
        let descriptor: MessageDescriptor<Metric>

        function binaryify(v: Metric): Uint8Array

        function parse(buffer: Uint8Array): Metric
    }
}

export * from '@sisyphus.js/google/lib/google/api/metric'

MetricDescriptor.descriptor = protobufDefinition({
    name: '.google.api.MetricDescriptor',

    fields: [
        {kind: 'scalar', name: 'name', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'type', num: 8, type: 9 /* STRING */},

        {kind: 'message', name: 'labels', num: 2, type: () => LabelDescriptor.descriptor, repeat: true},

        {kind: 'enum', name: 'metricKind', num: 3, type: () => MetricDescriptor.MetricKind.descriptor},

        {kind: 'enum', name: 'valueType', num: 4, type: () => MetricDescriptor.ValueType.descriptor},

        {kind: 'scalar', name: 'unit', num: 5, type: 9 /* STRING */},

        {kind: 'scalar', name: 'description', num: 6, type: 9 /* STRING */},

        {kind: 'scalar', name: 'displayName', num: 7, type: 9 /* STRING */},

        {kind: 'message', name: 'metadata', num: 10, type: () => MetricDescriptor.MetricDescriptorMetadata.descriptor},

        {kind: 'enum', name: 'launchStage', num: 12, type: () => LaunchStage.descriptor},

        {kind: 'scalar', name: 'monitoredResourceTypes', num: 13, type: 9 /* STRING */, repeat: 1}
    ]
})

MetricDescriptor.binaryify = binaryifyFun(MetricDescriptor.descriptor)

MetricDescriptor.parse = parseFun(MetricDescriptor.descriptor)

MetricDescriptor.MetricDescriptorMetadata.descriptor = protobufDefinition({
    name: '.google.api.MetricDescriptor.MetricDescriptorMetadata',

    fields: [
        {kind: 'enum', name: 'launchStage', num: 1, type: () => LaunchStage.descriptor, options: { deprecated: true }},

        {kind: 'message', name: 'samplePeriod', num: 2, type: () => Duration.descriptor},

        {kind: 'message', name: 'ingestDelay', num: 3, type: () => Duration.descriptor}
    ]
})

MetricDescriptor.MetricDescriptorMetadata.binaryify = binaryifyFun(MetricDescriptor.MetricDescriptorMetadata.descriptor)

MetricDescriptor.MetricDescriptorMetadata.parse = parseFun(MetricDescriptor.MetricDescriptorMetadata.descriptor)

MetricDescriptor.MetricKind.descriptor = {
    name: '.google.api.MetricDescriptor.MetricKind',

    enum: {
        0: 'METRIC_KIND_UNSPECIFIED',

        METRIC_KIND_UNSPECIFIED: 0,

        1: 'GAUGE',

        GAUGE: 1,

        2: 'DELTA',

        DELTA: 2,

        3: 'CUMULATIVE',

        CUMULATIVE: 3,
    }
}

MetricDescriptor.ValueType.descriptor = {
    name: '.google.api.MetricDescriptor.ValueType',

    enum: {
        0: 'VALUE_TYPE_UNSPECIFIED',

        VALUE_TYPE_UNSPECIFIED: 0,

        1: 'BOOL',

        BOOL: 1,

        2: 'INT64',

        INT64: 2,

        3: 'DOUBLE',

        DOUBLE: 3,

        4: 'STRING',

        STRING: 4,

        5: 'DISTRIBUTION',

        DISTRIBUTION: 5,

        6: 'MONEY',

        MONEY: 6,
    }
}

Metric.descriptor = protobufDefinition({
    name: '.google.api.Metric',

    fields: [
        {kind: 'scalar', name: 'type', num: 3, type: 9 /* STRING */},

        {kind: 'map', name: 'labels', num: 2, key: 9 /* STRING */, value: 9 /* STRING */}
    ]
})

Metric.binaryify = binaryifyFun(Metric.descriptor)

Metric.parse = parseFun(Metric.descriptor)
