import {binaryifyFun, parseFun} from '../../message'
import {EnumDescriptor, MessageDescriptor} from '../../reflection'
import {DescriptorProto, EnumDescriptorProto, EnumOptions, EnumValueDescriptorProto, EnumValueOptions, ExtensionRangeOptions, FieldDescriptorProto, FieldOptions, FileDescriptorProto, FileDescriptorSet, FileOptions, GeneratedCodeInfo, MessageOptions, MethodDescriptorProto, MethodOptions, OneofDescriptorProto, OneofOptions, ServiceDescriptorProto, ServiceOptions, SourceCodeInfo, UninterpretedOption} from '@sisyphus.js/runtime/lib/google/protobuf/descriptor'

declare module '@sisyphus.js/runtime/lib/google/protobuf/descriptor' {
    namespace FileDescriptorSet {
        let descriptor: MessageDescriptor<FileDescriptorSet>

        function binaryify(v: FileDescriptorSet): Uint8Array

        function parse(buffer: Uint8Array): FileDescriptorSet
    }

    namespace FileDescriptorProto {
        let descriptor: MessageDescriptor<FileDescriptorProto>

        function binaryify(v: FileDescriptorProto): Uint8Array

        function parse(buffer: Uint8Array): FileDescriptorProto
    }

    namespace DescriptorProto {
        let descriptor: MessageDescriptor<DescriptorProto>

        function binaryify(v: DescriptorProto): Uint8Array

        function parse(buffer: Uint8Array): DescriptorProto
        namespace ExtensionRange {
            let descriptor: MessageDescriptor<ExtensionRange>

            function binaryify(v: ExtensionRange): Uint8Array

            function parse(buffer: Uint8Array): ExtensionRange
        }

        namespace ReservedRange {
            let descriptor: MessageDescriptor<ReservedRange>

            function binaryify(v: ReservedRange): Uint8Array

            function parse(buffer: Uint8Array): ReservedRange
        }
    }

    namespace ExtensionRangeOptions {
        let descriptor: MessageDescriptor<ExtensionRangeOptions>

        function binaryify(v: ExtensionRangeOptions): Uint8Array

        function parse(buffer: Uint8Array): ExtensionRangeOptions
    }

    namespace FieldDescriptorProto {
        let descriptor: MessageDescriptor<FieldDescriptorProto>

        function binaryify(v: FieldDescriptorProto): Uint8Array

        function parse(buffer: Uint8Array): FieldDescriptorProto

        namespace Type {
            let descriptor: EnumDescriptor
        }

        namespace Label {
            let descriptor: EnumDescriptor
        }
    }

    namespace OneofDescriptorProto {
        let descriptor: MessageDescriptor<OneofDescriptorProto>

        function binaryify(v: OneofDescriptorProto): Uint8Array

        function parse(buffer: Uint8Array): OneofDescriptorProto
    }

    namespace EnumDescriptorProto {
        let descriptor: MessageDescriptor<EnumDescriptorProto>

        function binaryify(v: EnumDescriptorProto): Uint8Array

        function parse(buffer: Uint8Array): EnumDescriptorProto
        namespace EnumReservedRange {
            let descriptor: MessageDescriptor<EnumReservedRange>

            function binaryify(v: EnumReservedRange): Uint8Array

            function parse(buffer: Uint8Array): EnumReservedRange
        }
    }

    namespace EnumValueDescriptorProto {
        let descriptor: MessageDescriptor<EnumValueDescriptorProto>

        function binaryify(v: EnumValueDescriptorProto): Uint8Array

        function parse(buffer: Uint8Array): EnumValueDescriptorProto
    }

    namespace ServiceDescriptorProto {
        let descriptor: MessageDescriptor<ServiceDescriptorProto>

        function binaryify(v: ServiceDescriptorProto): Uint8Array

        function parse(buffer: Uint8Array): ServiceDescriptorProto
    }

    namespace MethodDescriptorProto {
        let descriptor: MessageDescriptor<MethodDescriptorProto>

        function binaryify(v: MethodDescriptorProto): Uint8Array

        function parse(buffer: Uint8Array): MethodDescriptorProto
    }

    namespace FileOptions {
        let descriptor: MessageDescriptor<FileOptions>

        function binaryify(v: FileOptions): Uint8Array

        function parse(buffer: Uint8Array): FileOptions

        namespace OptimizeMode {
            let descriptor: EnumDescriptor
        }
    }

    namespace MessageOptions {
        let descriptor: MessageDescriptor<MessageOptions>

        function binaryify(v: MessageOptions): Uint8Array

        function parse(buffer: Uint8Array): MessageOptions
    }

    namespace FieldOptions {
        let descriptor: MessageDescriptor<FieldOptions>

        function binaryify(v: FieldOptions): Uint8Array

        function parse(buffer: Uint8Array): FieldOptions

        namespace CType {
            let descriptor: EnumDescriptor
        }

        namespace JSType {
            let descriptor: EnumDescriptor
        }
    }

    namespace OneofOptions {
        let descriptor: MessageDescriptor<OneofOptions>

        function binaryify(v: OneofOptions): Uint8Array

        function parse(buffer: Uint8Array): OneofOptions
    }

    namespace EnumOptions {
        let descriptor: MessageDescriptor<EnumOptions>

        function binaryify(v: EnumOptions): Uint8Array

        function parse(buffer: Uint8Array): EnumOptions
    }

    namespace EnumValueOptions {
        let descriptor: MessageDescriptor<EnumValueOptions>

        function binaryify(v: EnumValueOptions): Uint8Array

        function parse(buffer: Uint8Array): EnumValueOptions
    }

    namespace ServiceOptions {
        let descriptor: MessageDescriptor<ServiceOptions>

        function binaryify(v: ServiceOptions): Uint8Array

        function parse(buffer: Uint8Array): ServiceOptions
    }

    namespace MethodOptions {
        let descriptor: MessageDescriptor<MethodOptions>

        function binaryify(v: MethodOptions): Uint8Array

        function parse(buffer: Uint8Array): MethodOptions

        namespace IdempotencyLevel {
            let descriptor: EnumDescriptor
        }
    }

    namespace UninterpretedOption {
        let descriptor: MessageDescriptor<UninterpretedOption>

        function binaryify(v: UninterpretedOption): Uint8Array

        function parse(buffer: Uint8Array): UninterpretedOption
        namespace NamePart {
            let descriptor: MessageDescriptor<NamePart>

            function binaryify(v: NamePart): Uint8Array

            function parse(buffer: Uint8Array): NamePart
        }
    }

    namespace SourceCodeInfo {
        let descriptor: MessageDescriptor<SourceCodeInfo>

        function binaryify(v: SourceCodeInfo): Uint8Array

        function parse(buffer: Uint8Array): SourceCodeInfo
        namespace Location {
            let descriptor: MessageDescriptor<Location>

            function binaryify(v: Location): Uint8Array

            function parse(buffer: Uint8Array): Location
        }
    }

    namespace GeneratedCodeInfo {
        let descriptor: MessageDescriptor<GeneratedCodeInfo>

        function binaryify(v: GeneratedCodeInfo): Uint8Array

        function parse(buffer: Uint8Array): GeneratedCodeInfo
        namespace Annotation {
            let descriptor: MessageDescriptor<Annotation>

            function binaryify(v: Annotation): Uint8Array

            function parse(buffer: Uint8Array): Annotation
        }
    }
}

export * from '@sisyphus.js/runtime/lib/google/protobuf/descriptor'

FileDescriptorSet.descriptor = protobufDefinition({
    name: '.google.protobuf.FileDescriptorSet',

    fields: [{kind: 'message', name: 'file', num: 1, type: () => FileDescriptorProto.descriptor, repeat: true}]
})

FileDescriptorSet.binaryify = binaryifyFun(FileDescriptorSet.descriptor)

FileDescriptorSet.parse = parseFun(FileDescriptorSet.descriptor)

FileDescriptorProto.descriptor = protobufDefinition({
    name: '.google.protobuf.FileDescriptorProto',

    fields: [
        {kind: 'scalar', name: 'name', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'package', num: 2, type: 9 /* STRING */},

        {kind: 'scalar', name: 'dependency', num: 3, type: 9 /* STRING */, repeat: 1},

        {kind: 'scalar', name: 'publicDependency', num: 10, type: 5 /* INT32 */, repeat: 1},

        {kind: 'scalar', name: 'weakDependency', num: 11, type: 5 /* INT32 */, repeat: 1},

        {kind: 'message', name: 'messageType', num: 4, type: () => DescriptorProto.descriptor, repeat: true},

        {kind: 'message', name: 'enumType', num: 5, type: () => EnumDescriptorProto.descriptor, repeat: true},

        {kind: 'message', name: 'service', num: 6, type: () => ServiceDescriptorProto.descriptor, repeat: true},

        {kind: 'message', name: 'extension', num: 7, type: () => FieldDescriptorProto.descriptor, repeat: true},

        {kind: 'message', name: 'options', num: 8, type: () => FileOptions.descriptor},

        {kind: 'message', name: 'sourceCodeInfo', num: 9, type: () => SourceCodeInfo.descriptor},

        {kind: 'scalar', name: 'syntax', num: 12, type: 9 /* STRING */}
    ]
})

FileDescriptorProto.binaryify = binaryifyFun(FileDescriptorProto.descriptor)

FileDescriptorProto.parse = parseFun(FileDescriptorProto.descriptor)

DescriptorProto.descriptor = protobufDefinition({
    name: '.google.protobuf.DescriptorProto',

    fields: [
        {kind: 'scalar', name: 'name', num: 1, type: 9 /* STRING */},

        {kind: 'message', name: 'field', num: 2, type: () => FieldDescriptorProto.descriptor, repeat: true},

        {kind: 'message', name: 'extension', num: 6, type: () => FieldDescriptorProto.descriptor, repeat: true},

        {kind: 'message', name: 'nestedType', num: 3, type: () => DescriptorProto.descriptor, repeat: true},

        {kind: 'message', name: 'enumType', num: 4, type: () => EnumDescriptorProto.descriptor, repeat: true},

        {kind: 'message', name: 'extensionRange', num: 5, type: () => DescriptorProto.ExtensionRange.descriptor, repeat: true},

        {kind: 'message', name: 'oneofDecl', num: 8, type: () => OneofDescriptorProto.descriptor, repeat: true},

        {kind: 'message', name: 'options', num: 7, type: () => MessageOptions.descriptor},

        {kind: 'message', name: 'reservedRange', num: 9, type: () => DescriptorProto.ReservedRange.descriptor, repeat: true},

        {kind: 'scalar', name: 'reservedName', num: 10, type: 9 /* STRING */, repeat: 1}
    ]
})

DescriptorProto.binaryify = binaryifyFun(DescriptorProto.descriptor)

DescriptorProto.parse = parseFun(DescriptorProto.descriptor)

DescriptorProto.ExtensionRange.descriptor = protobufDefinition({
    name: '.google.protobuf.DescriptorProto.ExtensionRange',

    fields: [
        {kind: 'scalar', name: 'start', num: 1, type: 5 /* INT32 */},

        {kind: 'scalar', name: 'end', num: 2, type: 5 /* INT32 */},

        {kind: 'message', name: 'options', num: 3, type: () => ExtensionRangeOptions.descriptor}
    ]
})

DescriptorProto.ExtensionRange.binaryify = binaryifyFun(DescriptorProto.ExtensionRange.descriptor)

DescriptorProto.ExtensionRange.parse = parseFun(DescriptorProto.ExtensionRange.descriptor)

DescriptorProto.ReservedRange.descriptor = protobufDefinition({
    name: '.google.protobuf.DescriptorProto.ReservedRange',

    fields: [
        {kind: 'scalar', name: 'start', num: 1, type: 5 /* INT32 */},

        {kind: 'scalar', name: 'end', num: 2, type: 5 /* INT32 */}
    ]
})

DescriptorProto.ReservedRange.binaryify = binaryifyFun(DescriptorProto.ReservedRange.descriptor)

DescriptorProto.ReservedRange.parse = parseFun(DescriptorProto.ReservedRange.descriptor)

ExtensionRangeOptions.descriptor = protobufDefinition({
    name: '.google.protobuf.ExtensionRangeOptions',

    fields: [{kind: 'message', name: 'uninterpretedOption', num: 999, type: () => UninterpretedOption.descriptor, repeat: true}]
})

ExtensionRangeOptions.binaryify = binaryifyFun(ExtensionRangeOptions.descriptor)

ExtensionRangeOptions.parse = parseFun(ExtensionRangeOptions.descriptor)

FieldDescriptorProto.descriptor = protobufDefinition({
    name: '.google.protobuf.FieldDescriptorProto',

    fields: [
        {kind: 'scalar', name: 'name', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'number', num: 3, type: 5 /* INT32 */},

        {kind: 'enum', name: 'label', num: 4, type: () => FieldDescriptorProto.Label.descriptor},

        {kind: 'enum', name: 'type', num: 5, type: () => FieldDescriptorProto.Type.descriptor},

        {kind: 'scalar', name: 'typeName', num: 6, type: 9 /* STRING */},

        {kind: 'scalar', name: 'extendee', num: 2, type: 9 /* STRING */},

        {kind: 'scalar', name: 'defaultValue', num: 7, type: 9 /* STRING */},

        {kind: 'scalar', name: 'oneofIndex', num: 9, type: 5 /* INT32 */},

        {kind: 'scalar', name: 'jsonName', num: 10, type: 9 /* STRING */},

        {kind: 'message', name: 'options', num: 8, type: () => FieldOptions.descriptor},

        {kind: 'scalar', name: 'proto3Optional', num: 17, type: 8 /* BOOL */}
    ]
})

FieldDescriptorProto.binaryify = binaryifyFun(FieldDescriptorProto.descriptor)

FieldDescriptorProto.parse = parseFun(FieldDescriptorProto.descriptor)

FieldDescriptorProto.Type.descriptor = {
    name: '.google.protobuf.FieldDescriptorProto.Type',

    enum: {
        1: 'TYPE_DOUBLE',

        TYPE_DOUBLE: 1,

        2: 'TYPE_FLOAT',

        TYPE_FLOAT: 2,

        3: 'TYPE_INT64',

        TYPE_INT64: 3,

        4: 'TYPE_UINT64',

        TYPE_UINT64: 4,

        5: 'TYPE_INT32',

        TYPE_INT32: 5,

        6: 'TYPE_FIXED64',

        TYPE_FIXED64: 6,

        7: 'TYPE_FIXED32',

        TYPE_FIXED32: 7,

        8: 'TYPE_BOOL',

        TYPE_BOOL: 8,

        9: 'TYPE_STRING',

        TYPE_STRING: 9,

        10: 'TYPE_GROUP',

        TYPE_GROUP: 10,

        11: 'TYPE_MESSAGE',

        TYPE_MESSAGE: 11,

        12: 'TYPE_BYTES',

        TYPE_BYTES: 12,

        13: 'TYPE_UINT32',

        TYPE_UINT32: 13,

        14: 'TYPE_ENUM',

        TYPE_ENUM: 14,

        15: 'TYPE_SFIXED32',

        TYPE_SFIXED32: 15,

        16: 'TYPE_SFIXED64',

        TYPE_SFIXED64: 16,

        17: 'TYPE_SINT32',

        TYPE_SINT32: 17,

        18: 'TYPE_SINT64',

        TYPE_SINT64: 18,
    }
}

FieldDescriptorProto.Label.descriptor = {
    name: '.google.protobuf.FieldDescriptorProto.Label',

    enum: {
        1: 'LABEL_OPTIONAL',

        LABEL_OPTIONAL: 1,

        2: 'LABEL_REQUIRED',

        LABEL_REQUIRED: 2,

        3: 'LABEL_REPEATED',

        LABEL_REPEATED: 3,
    }
}

OneofDescriptorProto.descriptor = protobufDefinition({
    name: '.google.protobuf.OneofDescriptorProto',

    fields: [
        {kind: 'scalar', name: 'name', num: 1, type: 9 /* STRING */},

        {kind: 'message', name: 'options', num: 2, type: () => OneofOptions.descriptor}
    ]
})

OneofDescriptorProto.binaryify = binaryifyFun(OneofDescriptorProto.descriptor)

OneofDescriptorProto.parse = parseFun(OneofDescriptorProto.descriptor)

EnumDescriptorProto.descriptor = protobufDefinition({
    name: '.google.protobuf.EnumDescriptorProto',

    fields: [
        {kind: 'scalar', name: 'name', num: 1, type: 9 /* STRING */},

        {kind: 'message', name: 'value', num: 2, type: () => EnumValueDescriptorProto.descriptor, repeat: true},

        {kind: 'message', name: 'options', num: 3, type: () => EnumOptions.descriptor},

        {kind: 'message', name: 'reservedRange', num: 4, type: () => EnumDescriptorProto.EnumReservedRange.descriptor, repeat: true},

        {kind: 'scalar', name: 'reservedName', num: 5, type: 9 /* STRING */, repeat: 1}
    ]
})

EnumDescriptorProto.binaryify = binaryifyFun(EnumDescriptorProto.descriptor)

EnumDescriptorProto.parse = parseFun(EnumDescriptorProto.descriptor)

EnumDescriptorProto.EnumReservedRange.descriptor = protobufDefinition({
    name: '.google.protobuf.EnumDescriptorProto.EnumReservedRange',

    fields: [
        {kind: 'scalar', name: 'start', num: 1, type: 5 /* INT32 */},

        {kind: 'scalar', name: 'end', num: 2, type: 5 /* INT32 */}
    ]
})

EnumDescriptorProto.EnumReservedRange.binaryify = binaryifyFun(EnumDescriptorProto.EnumReservedRange.descriptor)

EnumDescriptorProto.EnumReservedRange.parse = parseFun(EnumDescriptorProto.EnumReservedRange.descriptor)

EnumValueDescriptorProto.descriptor = protobufDefinition({
    name: '.google.protobuf.EnumValueDescriptorProto',

    fields: [
        {kind: 'scalar', name: 'name', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'number', num: 2, type: 5 /* INT32 */},

        {kind: 'message', name: 'options', num: 3, type: () => EnumValueOptions.descriptor}
    ]
})

EnumValueDescriptorProto.binaryify = binaryifyFun(EnumValueDescriptorProto.descriptor)

EnumValueDescriptorProto.parse = parseFun(EnumValueDescriptorProto.descriptor)

ServiceDescriptorProto.descriptor = protobufDefinition({
    name: '.google.protobuf.ServiceDescriptorProto',

    fields: [
        {kind: 'scalar', name: 'name', num: 1, type: 9 /* STRING */},

        {kind: 'message', name: 'method', num: 2, type: () => MethodDescriptorProto.descriptor, repeat: true},

        {kind: 'message', name: 'options', num: 3, type: () => ServiceOptions.descriptor}
    ]
})

ServiceDescriptorProto.binaryify = binaryifyFun(ServiceDescriptorProto.descriptor)

ServiceDescriptorProto.parse = parseFun(ServiceDescriptorProto.descriptor)

MethodDescriptorProto.descriptor = protobufDefinition({
    name: '.google.protobuf.MethodDescriptorProto',

    fields: [
        {kind: 'scalar', name: 'name', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'inputType', num: 2, type: 9 /* STRING */},

        {kind: 'scalar', name: 'outputType', num: 3, type: 9 /* STRING */},

        {kind: 'message', name: 'options', num: 4, type: () => MethodOptions.descriptor},

        {kind: 'scalar', name: 'clientStreaming', num: 5, type: 8 /* BOOL */},

        {kind: 'scalar', name: 'serverStreaming', num: 6, type: 8 /* BOOL */}
    ]
})

MethodDescriptorProto.binaryify = binaryifyFun(MethodDescriptorProto.descriptor)

MethodDescriptorProto.parse = parseFun(MethodDescriptorProto.descriptor)

FileOptions.descriptor = protobufDefinition({
    name: '.google.protobuf.FileOptions',

    fields: [
        {kind: 'scalar', name: 'javaPackage', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'javaOuterClassname', num: 8, type: 9 /* STRING */},

        {kind: 'scalar', name: 'javaMultipleFiles', num: 10, type: 8 /* BOOL */},

        {kind: 'scalar', name: 'javaGenerateEqualsAndHash', num: 20, type: 8 /* BOOL */, options: { deprecated: true }},

        {kind: 'scalar', name: 'javaStringCheckUtf8', num: 27, type: 8 /* BOOL */},

        {kind: 'enum', name: 'optimizeFor', num: 9, type: () => FileOptions.OptimizeMode.descriptor},

        {kind: 'scalar', name: 'goPackage', num: 11, type: 9 /* STRING */},

        {kind: 'scalar', name: 'ccGenericServices', num: 16, type: 8 /* BOOL */},

        {kind: 'scalar', name: 'javaGenericServices', num: 17, type: 8 /* BOOL */},

        {kind: 'scalar', name: 'pyGenericServices', num: 18, type: 8 /* BOOL */},

        {kind: 'scalar', name: 'phpGenericServices', num: 42, type: 8 /* BOOL */},

        {kind: 'scalar', name: 'deprecated', num: 23, type: 8 /* BOOL */},

        {kind: 'scalar', name: 'ccEnableArenas', num: 31, type: 8 /* BOOL */},

        {kind: 'scalar', name: 'objcClassPrefix', num: 36, type: 9 /* STRING */},

        {kind: 'scalar', name: 'csharpNamespace', num: 37, type: 9 /* STRING */},

        {kind: 'scalar', name: 'swiftPrefix', num: 39, type: 9 /* STRING */},

        {kind: 'scalar', name: 'phpClassPrefix', num: 40, type: 9 /* STRING */},

        {kind: 'scalar', name: 'phpNamespace', num: 41, type: 9 /* STRING */},

        {kind: 'scalar', name: 'phpMetadataNamespace', num: 44, type: 9 /* STRING */},

        {kind: 'scalar', name: 'rubyPackage', num: 45, type: 9 /* STRING */},

        {kind: 'message', name: 'uninterpretedOption', num: 999, type: () => UninterpretedOption.descriptor, repeat: true}
    ]
})

FileOptions.binaryify = binaryifyFun(FileOptions.descriptor)

FileOptions.parse = parseFun(FileOptions.descriptor)

FileOptions.OptimizeMode.descriptor = {
    name: '.google.protobuf.FileOptions.OptimizeMode',

    enum: {
        1: 'SPEED',

        SPEED: 1,

        2: 'CODE_SIZE',

        CODE_SIZE: 2,

        3: 'LITE_RUNTIME',

        LITE_RUNTIME: 3,
    }
}

MessageOptions.descriptor = protobufDefinition({
    name: '.google.protobuf.MessageOptions',

    fields: [
        {kind: 'scalar', name: 'messageSetWireFormat', num: 1, type: 8 /* BOOL */},

        {kind: 'scalar', name: 'noStandardDescriptorAccessor', num: 2, type: 8 /* BOOL */},

        {kind: 'scalar', name: 'deprecated', num: 3, type: 8 /* BOOL */},

        {kind: 'scalar', name: 'mapEntry', num: 7, type: 8 /* BOOL */},

        {kind: 'message', name: 'uninterpretedOption', num: 999, type: () => UninterpretedOption.descriptor, repeat: true}
    ]
})

MessageOptions.binaryify = binaryifyFun(MessageOptions.descriptor)

MessageOptions.parse = parseFun(MessageOptions.descriptor)

FieldOptions.descriptor = protobufDefinition({
    name: '.google.protobuf.FieldOptions',

    fields: [
        {kind: 'enum', name: 'ctype', num: 1, type: () => FieldOptions.CType.descriptor},

        {kind: 'scalar', name: 'packed', num: 2, type: 8 /* BOOL */},

        {kind: 'enum', name: 'jstype', num: 6, type: () => FieldOptions.JSType.descriptor},

        {kind: 'scalar', name: 'lazy', num: 5, type: 8 /* BOOL */},

        {kind: 'scalar', name: 'unverifiedLazy', num: 15, type: 8 /* BOOL */},

        {kind: 'scalar', name: 'deprecated', num: 3, type: 8 /* BOOL */},

        {kind: 'scalar', name: 'weak', num: 10, type: 8 /* BOOL */},

        {kind: 'message', name: 'uninterpretedOption', num: 999, type: () => UninterpretedOption.descriptor, repeat: true}
    ]
})

FieldOptions.binaryify = binaryifyFun(FieldOptions.descriptor)

FieldOptions.parse = parseFun(FieldOptions.descriptor)

FieldOptions.CType.descriptor = {
    name: '.google.protobuf.FieldOptions.CType',

    enum: {
        0: 'STRING',

        STRING: 0,

        1: 'CORD',

        CORD: 1,

        2: 'STRING_PIECE',

        STRING_PIECE: 2,
    }
}

FieldOptions.JSType.descriptor = {
    name: '.google.protobuf.FieldOptions.JSType',

    enum: {
        0: 'JS_NORMAL',

        JS_NORMAL: 0,

        1: 'JS_STRING',

        JS_STRING: 1,

        2: 'JS_NUMBER',

        JS_NUMBER: 2,
    }
}

OneofOptions.descriptor = protobufDefinition({
    name: '.google.protobuf.OneofOptions',

    fields: [{kind: 'message', name: 'uninterpretedOption', num: 999, type: () => UninterpretedOption.descriptor, repeat: true}]
})

OneofOptions.binaryify = binaryifyFun(OneofOptions.descriptor)

OneofOptions.parse = parseFun(OneofOptions.descriptor)

EnumOptions.descriptor = protobufDefinition({
    name: '.google.protobuf.EnumOptions',

    fields: [
        {kind: 'scalar', name: 'allowAlias', num: 2, type: 8 /* BOOL */},

        {kind: 'scalar', name: 'deprecated', num: 3, type: 8 /* BOOL */},

        {kind: 'message', name: 'uninterpretedOption', num: 999, type: () => UninterpretedOption.descriptor, repeat: true}
    ]
})

EnumOptions.binaryify = binaryifyFun(EnumOptions.descriptor)

EnumOptions.parse = parseFun(EnumOptions.descriptor)

EnumValueOptions.descriptor = protobufDefinition({
    name: '.google.protobuf.EnumValueOptions',

    fields: [
        {kind: 'scalar', name: 'deprecated', num: 1, type: 8 /* BOOL */},

        {kind: 'message', name: 'uninterpretedOption', num: 999, type: () => UninterpretedOption.descriptor, repeat: true}
    ]
})

EnumValueOptions.binaryify = binaryifyFun(EnumValueOptions.descriptor)

EnumValueOptions.parse = parseFun(EnumValueOptions.descriptor)

ServiceOptions.descriptor = protobufDefinition({
    name: '.google.protobuf.ServiceOptions',

    fields: [
        {kind: 'scalar', name: 'deprecated', num: 33, type: 8 /* BOOL */},

        {kind: 'message', name: 'uninterpretedOption', num: 999, type: () => UninterpretedOption.descriptor, repeat: true}
    ]
})

ServiceOptions.binaryify = binaryifyFun(ServiceOptions.descriptor)

ServiceOptions.parse = parseFun(ServiceOptions.descriptor)

MethodOptions.descriptor = protobufDefinition({
    name: '.google.protobuf.MethodOptions',

    fields: [
        {kind: 'scalar', name: 'deprecated', num: 33, type: 8 /* BOOL */},

        {kind: 'enum', name: 'idempotencyLevel', num: 34, type: () => MethodOptions.IdempotencyLevel.descriptor},

        {kind: 'message', name: 'uninterpretedOption', num: 999, type: () => UninterpretedOption.descriptor, repeat: true}
    ]
})

MethodOptions.binaryify = binaryifyFun(MethodOptions.descriptor)

MethodOptions.parse = parseFun(MethodOptions.descriptor)

MethodOptions.IdempotencyLevel.descriptor = {
    name: '.google.protobuf.MethodOptions.IdempotencyLevel',

    enum: {
        0: 'IDEMPOTENCY_UNKNOWN',

        IDEMPOTENCY_UNKNOWN: 0,

        1: 'NO_SIDE_EFFECTS',

        NO_SIDE_EFFECTS: 1,

        2: 'IDEMPOTENT',

        IDEMPOTENT: 2,
    }
}

UninterpretedOption.descriptor = protobufDefinition({
    name: '.google.protobuf.UninterpretedOption',

    fields: [
        {kind: 'message', name: 'name', num: 2, type: () => UninterpretedOption.NamePart.descriptor, repeat: true},

        {kind: 'scalar', name: 'identifierValue', num: 3, type: 9 /* STRING */},

        {kind: 'scalar', name: 'positiveIntValue', num: 4, type: 4 /* UINT64 */},

        {kind: 'scalar', name: 'negativeIntValue', num: 5, type: 3 /* INT64 */},

        {kind: 'scalar', name: 'doubleValue', num: 6, type: 1 /* DOUBLE */},

        {kind: 'scalar', name: 'stringValue', num: 7, type: 12 /* BYTES */},

        {kind: 'scalar', name: 'aggregateValue', num: 8, type: 9 /* STRING */}
    ]
})

UninterpretedOption.binaryify = binaryifyFun(UninterpretedOption.descriptor)

UninterpretedOption.parse = parseFun(UninterpretedOption.descriptor)

UninterpretedOption.NamePart.descriptor = protobufDefinition({
    name: '.google.protobuf.UninterpretedOption.NamePart',

    fields: [
        {kind: 'scalar', name: 'namePart', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'isExtension', num: 2, type: 8 /* BOOL */}
    ]
})

UninterpretedOption.NamePart.binaryify = binaryifyFun(UninterpretedOption.NamePart.descriptor)

UninterpretedOption.NamePart.parse = parseFun(UninterpretedOption.NamePart.descriptor)

SourceCodeInfo.descriptor = protobufDefinition({
    name: '.google.protobuf.SourceCodeInfo',

    fields: [{kind: 'message', name: 'location', num: 1, type: () => SourceCodeInfo.Location.descriptor, repeat: true}]
})

SourceCodeInfo.binaryify = binaryifyFun(SourceCodeInfo.descriptor)

SourceCodeInfo.parse = parseFun(SourceCodeInfo.descriptor)

SourceCodeInfo.Location.descriptor = protobufDefinition({
    name: '.google.protobuf.SourceCodeInfo.Location',

    fields: [
        {kind: 'scalar', name: 'path', num: 1, type: 5 /* INT32 */, repeat: 0, options: { packed: true }},

        {kind: 'scalar', name: 'span', num: 2, type: 5 /* INT32 */, repeat: 0, options: { packed: true }},

        {kind: 'scalar', name: 'leadingComments', num: 3, type: 9 /* STRING */},

        {kind: 'scalar', name: 'trailingComments', num: 4, type: 9 /* STRING */},

        {kind: 'scalar', name: 'leadingDetachedComments', num: 6, type: 9 /* STRING */, repeat: 1}
    ]
})

SourceCodeInfo.Location.binaryify = binaryifyFun(SourceCodeInfo.Location.descriptor)

SourceCodeInfo.Location.parse = parseFun(SourceCodeInfo.Location.descriptor)

GeneratedCodeInfo.descriptor = protobufDefinition({
    name: '.google.protobuf.GeneratedCodeInfo',

    fields: [{kind: 'message', name: 'annotation', num: 1, type: () => GeneratedCodeInfo.Annotation.descriptor, repeat: true}]
})

GeneratedCodeInfo.binaryify = binaryifyFun(GeneratedCodeInfo.descriptor)

GeneratedCodeInfo.parse = parseFun(GeneratedCodeInfo.descriptor)

GeneratedCodeInfo.Annotation.descriptor = protobufDefinition({
    name: '.google.protobuf.GeneratedCodeInfo.Annotation',

    fields: [
        {kind: 'scalar', name: 'path', num: 1, type: 5 /* INT32 */, repeat: 0, options: { packed: true }},

        {kind: 'scalar', name: 'sourceFile', num: 2, type: 9 /* STRING */},

        {kind: 'scalar', name: 'begin', num: 3, type: 5 /* INT32 */},

        {kind: 'scalar', name: 'end', num: 4, type: 5 /* INT32 */}
    ]
})

GeneratedCodeInfo.Annotation.binaryify = binaryifyFun(GeneratedCodeInfo.Annotation.descriptor)

GeneratedCodeInfo.Annotation.parse = parseFun(GeneratedCodeInfo.Annotation.descriptor)
