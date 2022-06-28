import {ProjectProperties, Property} from '@sisyphus.js/google/lib/google/api/consumer'
import {EnumDescriptor, MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/api/consumer' {
    namespace ProjectProperties {
        let descriptor: MessageDescriptor<ProjectProperties>

        function binaryify(v: ProjectProperties): Uint8Array

        function parse(buffer: Uint8Array): ProjectProperties
    }

    namespace Property {
        let descriptor: MessageDescriptor<Property>

        function binaryify(v: Property): Uint8Array

        function parse(buffer: Uint8Array): Property

        namespace PropertyType {
            let descriptor: EnumDescriptor
        }
    }
}

export * from '@sisyphus.js/google/lib/google/api/consumer'

ProjectProperties.descriptor = protobufDefinition({
    name: '.google.api.ProjectProperties',

    fields: [{kind: 'message', name: 'properties', num: 1, type: () => Property.descriptor, repeat: true}]
})

ProjectProperties.binaryify = binaryifyFun(ProjectProperties.descriptor)

ProjectProperties.parse = parseFun(ProjectProperties.descriptor)

Property.descriptor = protobufDefinition({
    name: '.google.api.Property',

    fields: [
        {kind: 'scalar', name: 'name', num: 1, type: 9 /* STRING */},

        {kind: 'enum', name: 'type', num: 2, type: () => Property.PropertyType.descriptor},

        {kind: 'scalar', name: 'description', num: 3, type: 9 /* STRING */}
    ]
})

Property.binaryify = binaryifyFun(Property.descriptor)

Property.parse = parseFun(Property.descriptor)

Property.PropertyType.descriptor = {
    name: '.google.api.Property.PropertyType',

    enum: {
        0: 'UNSPECIFIED',

        UNSPECIFIED: 0,

        1: 'INT64',

        INT64: 1,

        2: 'BOOL',

        BOOL: 2,

        3: 'STRING',

        STRING: 3,

        4: 'DOUBLE',

        DOUBLE: 4,
    }
}
