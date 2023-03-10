import {
    MonitoredResource,
    MonitoredResourceDescriptor,
    MonitoredResourceMetadata
} from '@sisyphus.js/google/lib/google/api/monitored_resource'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {Struct} from '@sisyphus.js/runtime.proto/lib/google/protobuf/struct.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'
import {LabelDescriptor} from './label.proto'
import {LaunchStage} from './launch_stage.proto'

declare module '@sisyphus.js/google/lib/google/api/monitored_resource' {
    namespace MonitoredResourceDescriptor {
        let descriptor: MessageDescriptor<MonitoredResourceDescriptor>

        function binaryify(v: MonitoredResourceDescriptor): Uint8Array

        function parse(buffer: Uint8Array): MonitoredResourceDescriptor
    }

    namespace MonitoredResource {
        let descriptor: MessageDescriptor<MonitoredResource>

        function binaryify(v: MonitoredResource): Uint8Array

        function parse(buffer: Uint8Array): MonitoredResource
    }

    namespace MonitoredResourceMetadata {
        let descriptor: MessageDescriptor<MonitoredResourceMetadata>

        function binaryify(v: MonitoredResourceMetadata): Uint8Array

        function parse(buffer: Uint8Array): MonitoredResourceMetadata
    }
}

export * from '@sisyphus.js/google/lib/google/api/monitored_resource'

MonitoredResourceDescriptor.descriptor = protobufDefinition({
    name: '.google.api.MonitoredResourceDescriptor',

    fields: [
        {kind: 'scalar', name: 'name', num: 5, type: 9 /* STRING */},

        {kind: 'scalar', name: 'type', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'displayName', num: 2, type: 9 /* STRING */},

        {kind: 'scalar', name: 'description', num: 3, type: 9 /* STRING */},

        {kind: 'message', name: 'labels', num: 4, type: () => LabelDescriptor.descriptor, repeat: true},

        {kind: 'enum', name: 'launchStage', num: 7, type: () => LaunchStage.descriptor}
    ]
})

MonitoredResourceDescriptor.binaryify = binaryifyFun(MonitoredResourceDescriptor.descriptor)

MonitoredResourceDescriptor.parse = parseFun(MonitoredResourceDescriptor.descriptor)

MonitoredResource.descriptor = protobufDefinition({
    name: '.google.api.MonitoredResource',

    fields: [
        {kind: 'scalar', name: 'type', num: 1, type: 9 /* STRING */},

        {kind: 'map', name: 'labels', num: 2, key: 9 /* STRING */, value: 9 /* STRING */}
    ]
})

MonitoredResource.binaryify = binaryifyFun(MonitoredResource.descriptor)

MonitoredResource.parse = parseFun(MonitoredResource.descriptor)

MonitoredResourceMetadata.descriptor = protobufDefinition({
    name: '.google.api.MonitoredResourceMetadata',

    fields: [
        {kind: 'message', name: 'systemLabels', num: 1, type: () => Struct.descriptor},

        {kind: 'map', name: 'userLabels', num: 2, key: 9 /* STRING */, value: 9 /* STRING */}
    ]
})

MonitoredResourceMetadata.binaryify = binaryifyFun(MonitoredResourceMetadata.descriptor)

MonitoredResourceMetadata.parse = parseFun(MonitoredResourceMetadata.descriptor)
