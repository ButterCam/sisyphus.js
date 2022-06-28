import {ResourceDescriptor, ResourceReference} from '@sisyphus.js/google/lib/google/api/resource'
import {EnumDescriptor, MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/api/resource' {
    namespace ResourceDescriptor {
        let descriptor: MessageDescriptor<ResourceDescriptor>

        function binaryify(v: ResourceDescriptor): Uint8Array

        function parse(buffer: Uint8Array): ResourceDescriptor

        namespace History {
            let descriptor: EnumDescriptor
        }

        namespace Style {
            let descriptor: EnumDescriptor
        }
    }

    namespace ResourceReference {
        let descriptor: MessageDescriptor<ResourceReference>

        function binaryify(v: ResourceReference): Uint8Array

        function parse(buffer: Uint8Array): ResourceReference
    }
}

export * from '@sisyphus.js/google/lib/google/api/resource'

ResourceDescriptor.descriptor = protobufDefinition({
    name: '.google.api.ResourceDescriptor',

    fields: [
        {kind: 'scalar', name: 'type', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'pattern', num: 2, type: 9 /* STRING */, repeat: 1},

        {kind: 'scalar', name: 'nameField', num: 3, type: 9 /* STRING */},

        {kind: 'enum', name: 'history', num: 4, type: () => ResourceDescriptor.History.descriptor},

        {kind: 'scalar', name: 'plural', num: 5, type: 9 /* STRING */},

        {kind: 'scalar', name: 'singular', num: 6, type: 9 /* STRING */},

        {kind: 'enum', name: 'style', num: 10, type: () => ResourceDescriptor.Style.descriptor, repeat: 0}
    ]
})

ResourceDescriptor.binaryify = binaryifyFun(ResourceDescriptor.descriptor)

ResourceDescriptor.parse = parseFun(ResourceDescriptor.descriptor)

ResourceDescriptor.History.descriptor = {
    name: '.google.api.ResourceDescriptor.History',

    enum: {
        0: 'HISTORY_UNSPECIFIED',

        HISTORY_UNSPECIFIED: 0,

        1: 'ORIGINALLY_SINGLE_PATTERN',

        ORIGINALLY_SINGLE_PATTERN: 1,

        2: 'FUTURE_MULTI_PATTERN',

        FUTURE_MULTI_PATTERN: 2,
    }
}

ResourceDescriptor.Style.descriptor = {
    name: '.google.api.ResourceDescriptor.Style',

    enum: {
        0: 'STYLE_UNSPECIFIED',

        STYLE_UNSPECIFIED: 0,

        1: 'DECLARATIVE_FRIENDLY',

        DECLARATIVE_FRIENDLY: 1,
    }
}

ResourceReference.descriptor = protobufDefinition({
    name: '.google.api.ResourceReference',

    fields: [
        {kind: 'scalar', name: 'type', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'childType', num: 2, type: 9 /* STRING */}
    ]
})

ResourceReference.binaryify = binaryifyFun(ResourceReference.descriptor)

ResourceReference.parse = parseFun(ResourceReference.descriptor)

extendDefinition('.google.protobuf.FieldOptions', {kind: 'message', name: 'resourceReference', num: 1055, type: () => ResourceReference.descriptor})

extendDefinition('.google.protobuf.FileOptions', {kind: 'message', name: 'resourceDefinition', num: 1053, type: () => ResourceDescriptor.descriptor, repeat: true})

extendDefinition('.google.protobuf.MessageOptions', {kind: 'message', name: 'resource', num: 1053, type: () => ResourceDescriptor.descriptor})
