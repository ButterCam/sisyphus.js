import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../_reflection"
import * as $resource from "../api/resource"
import * as $fieldBehavior from "../api/field_behavior"
import * as $serviceMeta from "../../sisyphus/api/service_meta"
import * as $accessControl from "../../bybutter/incubator/common/v1/access_control"
import * as $http from "../api/http"
import * as $operations from "../longrunning/operations"
import * as $protobuf from "protobufjs"


/**
 * The protocol compiler can output a FileDescriptorSet containing the .proto
 * files it parses.
 */
export interface IFileDescriptorSet {
    file?: readonly IFileDescriptorProto[]
}

export class FileDescriptorSet extends $sisyphus.Message<FileDescriptorSet> implements IFileDescriptorSet {
    file!: readonly FileDescriptorProto[]
}
$reflection.root.lookupType(".google.protobuf.FileDescriptorSet").messageCtor = FileDescriptorSet


/** Describes a complete .proto file. */
export interface IFileDescriptorProto {
    /** file name, relative to root of source tree */
    name?: string
    package?: string
    /** Names of files imported by this file. */
    dependency?: readonly string[]
    /** Indexes of the public imported files in the dependency list above. */
    publicDependency?: readonly number[]
    /**
     * Indexes of the weak imported files in the dependency list.
     * For Google-internal migration only. Do not use.
     */
    weakDependency?: readonly number[]
    /** All top-level definitions in this file. */
    messageType?: readonly IDescriptorProto[]
    enumType?: readonly IEnumDescriptorProto[]
    service?: readonly IServiceDescriptorProto[]
    extension?: readonly IFieldDescriptorProto[]
    options?: IFileOptions
    /**
     * This field contains optional information about the original source code.
     * You may safely remove this entire field without harming runtime
     * functionality of the descriptors -- the information is needed only by
     * development tools.
     */
    sourceCodeInfo?: ISourceCodeInfo
    /**
     * The syntax of the proto file.
     * The supported values are "proto2" and "proto3".
     */
    syntax?: string
}

export class FileDescriptorProto extends $sisyphus.Message<FileDescriptorProto> implements IFileDescriptorProto {
    name!: string
    package!: string
    dependency!: readonly string[]
    publicDependency!: readonly number[]
    weakDependency!: readonly number[]
    messageType!: readonly DescriptorProto[]
    enumType!: readonly EnumDescriptorProto[]
    service!: readonly ServiceDescriptorProto[]
    extension!: readonly FieldDescriptorProto[]
    options!: FileOptions
    sourceCodeInfo!: SourceCodeInfo
    syntax!: string
}
$reflection.root.lookupType(".google.protobuf.FileDescriptorProto").messageCtor = FileDescriptorProto


/** Describes a message type. */
export interface IDescriptorProto {
    name?: string
    field?: readonly IFieldDescriptorProto[]
    extension?: readonly IFieldDescriptorProto[]
    nestedType?: readonly IDescriptorProto[]
    enumType?: readonly IEnumDescriptorProto[]
    extensionRange?: readonly DescriptorProto.IExtensionRange[]
    oneofDecl?: readonly IOneofDescriptorProto[]
    options?: IMessageOptions
    reservedRange?: readonly DescriptorProto.IReservedRange[]
    /**
     * Reserved field names, which may not be used by fields in the same message.
     * A given name may only be reserved once.
     */
    reservedName?: readonly string[]
}

export class DescriptorProto extends $sisyphus.Message<DescriptorProto> implements IDescriptorProto {
    name!: string
    field!: readonly FieldDescriptorProto[]
    extension!: readonly FieldDescriptorProto[]
    nestedType!: readonly DescriptorProto[]
    enumType!: readonly EnumDescriptorProto[]
    extensionRange!: readonly DescriptorProto.ExtensionRange[]
    oneofDecl!: readonly OneofDescriptorProto[]
    options!: MessageOptions
    reservedRange!: readonly DescriptorProto.ReservedRange[]
    reservedName!: readonly string[]
}
$reflection.root.lookupType(".google.protobuf.DescriptorProto").messageCtor = DescriptorProto

export namespace DescriptorProto {

    export interface IExtensionRange {
        /** Inclusive. */
        start?: number
        /** Exclusive. */
        end?: number
        options?: IExtensionRangeOptions
    }

    export class ExtensionRange extends $sisyphus.Message<ExtensionRange> implements IExtensionRange {
        start!: number
        end!: number
        options!: ExtensionRangeOptions
    }
    $reflection.root.lookupType(".google.protobuf.DescriptorProto.ExtensionRange").messageCtor = ExtensionRange


    /**
     * Range of reserved tag numbers. Reserved tag numbers may not be used by
     * fields or extension ranges in the same message. Reserved ranges may
     * not overlap.
     */
    export interface IReservedRange {
        /** Inclusive. */
        start?: number
        /** Exclusive. */
        end?: number
    }

    export class ReservedRange extends $sisyphus.Message<ReservedRange> implements IReservedRange {
        start!: number
        end!: number
    }
    $reflection.root.lookupType(".google.protobuf.DescriptorProto.ReservedRange").messageCtor = ReservedRange
}

export interface IExtensionRangeOptions {
    /** The parser stores options it doesn't recognize here. See above. */
    uninterpretedOption?: readonly IUninterpretedOption[]
}

export class ExtensionRangeOptions extends $sisyphus.Message<ExtensionRangeOptions> implements IExtensionRangeOptions {
    uninterpretedOption!: readonly UninterpretedOption[]
}
$reflection.root.lookupType(".google.protobuf.ExtensionRangeOptions").messageCtor = ExtensionRangeOptions


/** Describes a field within a message. */
export interface IFieldDescriptorProto {
    name?: string
    number?: number
    label?: FieldDescriptorProto.Label
    /**
     * If type_name is set, this need not be set.  If both this and type_name
     * are set, this must be one of TYPE_ENUM, TYPE_MESSAGE or TYPE_GROUP.
     */
    type?: FieldDescriptorProto.Type
    /**
     * For message and enum types, this is the name of the type.  If the name
     * starts with a '.', it is fully-qualified.  Otherwise, C++-like scoping
     * rules are used to find the type (i.e. first the nested types within this
     * message are searched, then within the parent, on up to the root
     * namespace).
     */
    typeName?: string
    /**
     * For extensions, this is the name of the type being extended.  It is
     * resolved in the same manner as type_name.
     */
    extendee?: string
    /**
     * For numeric types, contains the original text representation of the value.
     * For booleans, "true" or "false".
     * For strings, contains the default text contents (not escaped in any way).
     * For bytes, contains the C escaped value.  All bytes >= 128 are escaped.
     * TODO(kenton):  Base-64 encode?
     */
    defaultValue?: string
    /**
     * If set, gives the index of a oneof in the containing type's oneof_decl
     * list.  This field is a member of that oneof.
     */
    oneofIndex?: number
    /**
     * JSON name of this field. The value is set by protocol compiler. If the
     * user has set a "json_name" option on this field, that option's value
     * will be used. Otherwise, it's deduced from the field's name by converting
     * it to camelCase.
     */
    jsonName?: string
    options?: IFieldOptions
    /**
     * If true, this is a proto3 "optional". When a proto3 field is optional, it
     * tracks presence regardless of field type.
     * 
     * When proto3_optional is true, this field must be belong to a oneof to
     * signal to old proto3 clients that presence is tracked for this field. This
     * oneof is known as a "synthetic" oneof, and this field must be its sole
     * member (each proto3 optional field gets its own synthetic oneof). Synthetic
     * oneofs exist in the descriptor only, and do not generate any API. Synthetic
     * oneofs must be ordered after all "real" oneofs.
     * 
     * For message fields, proto3_optional doesn't create any semantic change,
     * since non-repeated message fields always track presence. However it still
     * indicates the semantic detail of whether the user wrote "optional" or not.
     * This can be useful for round-tripping the .proto file. For consistency we
     * give message fields a synthetic oneof also, even though it is not required
     * to track presence. This is especially important because the parser can't
     * tell if a field is a message or an enum, so it must always create a
     * synthetic oneof.
     * 
     * Proto2 optional fields do not set this flag, because they already indicate
     * optional with `LABEL_OPTIONAL`.
     */
    proto3Optional?: boolean
}

export class FieldDescriptorProto extends $sisyphus.Message<FieldDescriptorProto> implements IFieldDescriptorProto {
    name!: string
    number!: number
    label!: FieldDescriptorProto.Label
    type!: FieldDescriptorProto.Type
    typeName!: string
    extendee!: string
    defaultValue!: string
    oneofIndex!: number
    jsonName!: string
    options!: FieldOptions
    proto3Optional!: boolean
}
$reflection.root.lookupType(".google.protobuf.FieldDescriptorProto").messageCtor = FieldDescriptorProto

export namespace FieldDescriptorProto {

    export enum Type {
        /**
         * 0 is reserved for errors.
         * Order is weird for historical reasons.
         */
        TYPE_DOUBLE = 1,
        TYPE_FLOAT = 2,
        /**
         * Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
         * negative values are likely.
         */
        TYPE_INT64 = 3,
        TYPE_UINT64 = 4,
        /**
         * Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
         * negative values are likely.
         */
        TYPE_INT32 = 5,
        TYPE_FIXED64 = 6,
        TYPE_FIXED32 = 7,
        TYPE_BOOL = 8,
        TYPE_STRING = 9,
        /**
         * Tag-delimited aggregate.
         * Group type is deprecated and not supported in proto3. However, Proto3
         * implementations should still be able to parse the group wire format and
         * treat group fields as unknown fields.
         */
        TYPE_GROUP = 10,
        TYPE_MESSAGE = 11,
        /** New in version 2. */
        TYPE_BYTES = 12,
        TYPE_UINT32 = 13,
        TYPE_ENUM = 14,
        TYPE_SFIXED32 = 15,
        TYPE_SFIXED64 = 16,
        /** Uses ZigZag encoding. */
        TYPE_SINT32 = 17,
        /** Uses ZigZag encoding. */
        TYPE_SINT64 = 18,
    }

    export namespace Type {
        export const reflection = $reflection.root.lookupEnum(".google.protobuf.FieldDescriptorProto.Type")
    }

    export enum Label {
        /** 0 is reserved for errors */
        LABEL_OPTIONAL = 1,
        LABEL_REQUIRED = 2,
        LABEL_REPEATED = 3,
    }

    export namespace Label {
        export const reflection = $reflection.root.lookupEnum(".google.protobuf.FieldDescriptorProto.Label")
    }
}

/** Describes a oneof. */
export interface IOneofDescriptorProto {
    name?: string
    options?: IOneofOptions
}

export class OneofDescriptorProto extends $sisyphus.Message<OneofDescriptorProto> implements IOneofDescriptorProto {
    name!: string
    options!: OneofOptions
}
$reflection.root.lookupType(".google.protobuf.OneofDescriptorProto").messageCtor = OneofDescriptorProto


/** Describes an enum type. */
export interface IEnumDescriptorProto {
    name?: string
    value?: readonly IEnumValueDescriptorProto[]
    options?: IEnumOptions
    /**
     * Range of reserved numeric values. Reserved numeric values may not be used
     * by enum values in the same enum declaration. Reserved ranges may not
     * overlap.
     */
    reservedRange?: readonly EnumDescriptorProto.IEnumReservedRange[]
    /**
     * Reserved enum value names, which may not be reused. A given name may only
     * be reserved once.
     */
    reservedName?: readonly string[]
}

export class EnumDescriptorProto extends $sisyphus.Message<EnumDescriptorProto> implements IEnumDescriptorProto {
    name!: string
    value!: readonly EnumValueDescriptorProto[]
    options!: EnumOptions
    reservedRange!: readonly EnumDescriptorProto.EnumReservedRange[]
    reservedName!: readonly string[]
}
$reflection.root.lookupType(".google.protobuf.EnumDescriptorProto").messageCtor = EnumDescriptorProto

export namespace EnumDescriptorProto {

    /**
     * Range of reserved numeric values. Reserved values may not be used by
     * entries in the same enum. Reserved ranges may not overlap.
     * 
     * Note that this is distinct from DescriptorProto.ReservedRange in that it
     * is inclusive such that it can appropriately represent the entire int32
     * domain.
     */
    export interface IEnumReservedRange {
        /** Inclusive. */
        start?: number
        /** Inclusive. */
        end?: number
    }

    export class EnumReservedRange extends $sisyphus.Message<EnumReservedRange> implements IEnumReservedRange {
        start!: number
        end!: number
    }
    $reflection.root.lookupType(".google.protobuf.EnumDescriptorProto.EnumReservedRange").messageCtor = EnumReservedRange
}

/** Describes a value within an enum. */
export interface IEnumValueDescriptorProto {
    name?: string
    number?: number
    options?: IEnumValueOptions
}

export class EnumValueDescriptorProto extends $sisyphus.Message<EnumValueDescriptorProto> implements IEnumValueDescriptorProto {
    name!: string
    number!: number
    options!: EnumValueOptions
}
$reflection.root.lookupType(".google.protobuf.EnumValueDescriptorProto").messageCtor = EnumValueDescriptorProto


/** Describes a service. */
export interface IServiceDescriptorProto {
    name?: string
    method?: readonly IMethodDescriptorProto[]
    options?: IServiceOptions
}

export class ServiceDescriptorProto extends $sisyphus.Message<ServiceDescriptorProto> implements IServiceDescriptorProto {
    name!: string
    method!: readonly MethodDescriptorProto[]
    options!: ServiceOptions
}
$reflection.root.lookupType(".google.protobuf.ServiceDescriptorProto").messageCtor = ServiceDescriptorProto


/** Describes a method of a service. */
export interface IMethodDescriptorProto {
    name?: string
    /**
     * Input and output type names.  These are resolved in the same way as
     * FieldDescriptorProto.type_name, but must refer to a message type.
     */
    inputType?: string
    outputType?: string
    options?: IMethodOptions
    /** Identifies if client streams multiple client messages */
    clientStreaming?: boolean
    /** Identifies if server streams multiple server messages */
    serverStreaming?: boolean
}

export class MethodDescriptorProto extends $sisyphus.Message<MethodDescriptorProto> implements IMethodDescriptorProto {
    name!: string
    inputType!: string
    outputType!: string
    options!: MethodOptions
    clientStreaming!: boolean
    serverStreaming!: boolean
}
$reflection.root.lookupType(".google.protobuf.MethodDescriptorProto").messageCtor = MethodDescriptorProto


export interface IFileOptions {
    /**
     * Sets the Java package where classes generated from this .proto will be
     * placed.  By default, the proto package is used, but this is often
     * inappropriate because proto packages do not normally start with backwards
     * domain names.
     */
    javaPackage?: string
    /**
     * If set, all the classes from the .proto file are wrapped in a single
     * outer class with the given name.  This applies to both Proto1
     * (equivalent to the old "--one_java_file" option) and Proto2 (where
     * a .proto always translates to a single class, but you may want to
     * explicitly choose the class name).
     */
    javaOuterClassname?: string
    /**
     * If set true, then the Java code generator will generate a separate .java
     * file for each top-level message, enum, and service defined in the .proto
     * file.  Thus, these types will *not* be nested inside the outer class
     * named by java_outer_classname.  However, the outer class will still be
     * generated to contain the file's getDescriptor() method as well as any
     * top-level extensions defined in the file.
     */
    javaMultipleFiles?: boolean
    /** This option does nothing. */
    javaGenerateEqualsAndHash?: boolean
    /**
     * If set true, then the Java2 code generator will generate code that
     * throws an exception whenever an attempt is made to assign a non-UTF-8
     * byte sequence to a string field.
     * Message reflection will do the same.
     * However, an extension field still accepts non-UTF-8 byte sequences.
     * This option has no effect on when used with the lite runtime.
     */
    javaStringCheckUtf8?: boolean
    optimizeFor?: FileOptions.OptimizeMode
    /**
     * Sets the Go package where structs generated from this .proto will be
     * placed. If omitted, the Go package will be derived from the following:
     * - The basename of the package import path, if provided.
     * - Otherwise, the package statement in the .proto file, if present.
     * - Otherwise, the basename of the .proto file, without extension.
     */
    goPackage?: string
    /**
     * Should generic services be generated in each language?  "Generic" services
     * are not specific to any particular RPC system.  They are generated by the
     * main code generators in each language (without additional plugins).
     * Generic services were the only kind of service generation supported by
     * early versions of google.protobuf.
     * 
     * Generic services are now considered deprecated in favor of using plugins
     * that generate code specific to your particular RPC system.  Therefore,
     * these default to false.  Old code which depends on generic services should
     * explicitly set them to true.
     */
    ccGenericServices?: boolean
    javaGenericServices?: boolean
    pyGenericServices?: boolean
    phpGenericServices?: boolean
    /**
     * Is this file deprecated?
     * Depending on the target platform, this can emit Deprecated annotations
     * for everything in the file, or it will be completely ignored; in the very
     * least, this is a formalization for deprecating files.
     */
    deprecated?: boolean
    /**
     * Enables the use of arenas for the proto messages in this file. This applies
     * only to generated classes for C++.
     */
    ccEnableArenas?: boolean
    /**
     * Sets the objective c class prefix which is prepended to all objective c
     * generated classes from this .proto. There is no default.
     */
    objcClassPrefix?: string
    /** Namespace for generated classes; defaults to the package. */
    csharpNamespace?: string
    /**
     * By default Swift generators will take the proto package and CamelCase it
     * replacing '.' with underscore and use that to prefix the types/symbols
     * defined. When this options is provided, they will use this value instead
     * to prefix the types/symbols defined.
     */
    swiftPrefix?: string
    /**
     * Sets the php class prefix which is prepended to all php generated classes
     * from this .proto. Default is empty.
     */
    phpClassPrefix?: string
    /**
     * Use this option to change the namespace of php generated classes. Default
     * is empty. When this option is empty, the package name will be used for
     * determining the namespace.
     */
    phpNamespace?: string
    /**
     * Use this option to change the namespace of php generated metadata classes.
     * Default is empty. When this option is empty, the proto file name will be
     * used for determining the namespace.
     */
    phpMetadataNamespace?: string
    /**
     * Use this option to change the package of ruby generated classes. Default
     * is empty. When this option is not set, the package name will be used for
     * determining the ruby package.
     */
    rubyPackage?: string
    /**
     * The parser stores options it doesn't recognize here.
     * See the documentation for the "Options" section above.
     */
    uninterpretedOption?: readonly IUninterpretedOption[]
    ".google.api.resourceDefinition"?: readonly $resource.IResourceDescriptor[]
}

export class FileOptions extends $sisyphus.Message<FileOptions> implements IFileOptions {
    javaPackage!: string
    javaOuterClassname!: string
    javaMultipleFiles!: boolean
    javaGenerateEqualsAndHash!: boolean
    javaStringCheckUtf8!: boolean
    optimizeFor!: FileOptions.OptimizeMode
    goPackage!: string
    ccGenericServices!: boolean
    javaGenericServices!: boolean
    pyGenericServices!: boolean
    phpGenericServices!: boolean
    deprecated!: boolean
    ccEnableArenas!: boolean
    objcClassPrefix!: string
    csharpNamespace!: string
    swiftPrefix!: string
    phpClassPrefix!: string
    phpNamespace!: string
    phpMetadataNamespace!: string
    rubyPackage!: string
    uninterpretedOption!: readonly UninterpretedOption[]
    ".google.api.resourceDefinition"!: readonly $resource.ResourceDescriptor[]
}
$reflection.root.lookupType(".google.protobuf.FileOptions").messageCtor = FileOptions

export namespace FileOptions {

    /** Generated classes can be optimized for speed or code size. */
    export enum OptimizeMode {
        /**
         * Generate complete code for parsing, serialization,
         * etc.
         */
        SPEED = 1,
        /** Use ReflectionOps to implement these methods. */
        CODE_SIZE = 2,
        /** Generate code using MessageLite and the lite runtime. */
        LITE_RUNTIME = 3,
    }

    export namespace OptimizeMode {
        export const reflection = $reflection.root.lookupEnum(".google.protobuf.FileOptions.OptimizeMode")
    }
}

export interface IMessageOptions {
    /**
     * Set true to use the old proto1 MessageSet wire format for extensions.
     * This is provided for backwards-compatibility with the MessageSet wire
     * format.  You should not use this for any other reason:  It's less
     * efficient, has fewer features, and is more complicated.
     * 
     * The message must be defined exactly as follows:
     * message Foo {
     * option message_set_wire_format = true;
     * extensions 4 to max;
     * }
     * Note that the message cannot have any defined fields; MessageSets only
     * have extensions.
     * 
     * All extensions of your type must be singular messages; e.g. they cannot
     * be int32s, enums, or repeated messages.
     * 
     * Because this is an option, the above two restrictions are not enforced by
     * the protocol compiler.
     */
    messageSetWireFormat?: boolean
    /**
     * Disables the generation of the standard "descriptor()" accessor, which can
     * conflict with a field of the same name.  This is meant to make migration
     * from proto1 easier; new code should avoid fields named "descriptor".
     */
    noStandardDescriptorAccessor?: boolean
    /**
     * Is this message deprecated?
     * Depending on the target platform, this can emit Deprecated annotations
     * for the message, or it will be completely ignored; in the very least,
     * this is a formalization for deprecating messages.
     */
    deprecated?: boolean
    /**
     * Whether the message is an automatically generated map entry type for the
     * maps field.
     * 
     * For maps fields:
     * map<KeyType, ValueType> map_field = 1;
     * The parsed descriptor looks like:
     * message MapFieldEntry {
     * option map_entry = true;
     * optional KeyType key = 1;
     * optional ValueType value = 2;
     * }
     * repeated MapFieldEntry map_field = 1;
     * 
     * Implementations may choose not to generate the map_entry=true message, but
     * use a native map in the target language to hold the keys and values.
     * The reflection APIs in such implementations still need to work as
     * if the field is a repeated message field.
     * 
     * NOTE: Do not set the option in .proto files. Always use the maps syntax
     * instead. The option should only be implicitly set by the proto compiler
     * parser.
     */
    mapEntry?: boolean
    /** The parser stores options it doesn't recognize here. See above. */
    uninterpretedOption?: readonly IUninterpretedOption[]
    ".google.api.resource"?: $resource.IResourceDescriptor
}

export class MessageOptions extends $sisyphus.Message<MessageOptions> implements IMessageOptions {
    messageSetWireFormat!: boolean
    noStandardDescriptorAccessor!: boolean
    deprecated!: boolean
    mapEntry!: boolean
    uninterpretedOption!: readonly UninterpretedOption[]
    ".google.api.resource"!: $resource.ResourceDescriptor
}
$reflection.root.lookupType(".google.protobuf.MessageOptions").messageCtor = MessageOptions


export interface IFieldOptions {
    /**
     * The ctype option instructs the C++ code generator to use a different
     * representation of the field than it normally would.  See the specific
     * options below.  This option is not yet implemented in the open source
     * release -- sorry, we'll try to include it in a future version!
     */
    ctype?: FieldOptions.CType
    /**
     * The packed option can be enabled for repeated primitive fields to enable
     * a more efficient representation on the wire. Rather than repeatedly
     * writing the tag and type for each element, the entire array is encoded as
     * a single length-delimited blob. In proto3, only explicit setting it to
     * false will avoid using packed encoding.
     */
    packed?: boolean
    /**
     * The jstype option determines the JavaScript type used for values of the
     * field.  The option is permitted only for 64 bit integral and fixed types
     * (int64, uint64, sint64, fixed64, sfixed64).  A field with jstype JS_STRING
     * is represented as JavaScript string, which avoids loss of precision that
     * can happen when a large value is converted to a floating point JavaScript.
     * Specifying JS_NUMBER for the jstype causes the generated JavaScript code to
     * use the JavaScript "number" type.  The behavior of the default option
     * JS_NORMAL is implementation dependent.
     * 
     * This option is an enum to permit additional types to be added, e.g.
     * goog.math.Integer.
     */
    jstype?: FieldOptions.JSType
    /**
     * Should this field be parsed lazily?  Lazy applies only to message-type
     * fields.  It means that when the outer message is initially parsed, the
     * inner message's contents will not be parsed but instead stored in encoded
     * form.  The inner message will actually be parsed when it is first accessed.
     * 
     * This is only a hint.  Implementations are free to choose whether to use
     * eager or lazy parsing regardless of the value of this option.  However,
     * setting this option true suggests that the protocol author believes that
     * using lazy parsing on this field is worth the additional bookkeeping
     * overhead typically needed to implement it.
     * 
     * This option does not affect the public interface of any generated code;
     * all method signatures remain the same.  Furthermore, thread-safety of the
     * interface is not affected by this option; const methods remain safe to
     * call from multiple threads concurrently, while non-const methods continue
     * to require exclusive access.
     * 
     * 
     * Note that implementations may choose not to check required fields within
     * a lazy sub-message.  That is, calling IsInitialized() on the outer message
     * may return true even if the inner message has missing required fields.
     * This is necessary because otherwise the inner message would have to be
     * parsed in order to perform the check, defeating the purpose of lazy
     * parsing.  An implementation which chooses not to check required fields
     * must be consistent about it.  That is, for any particular sub-message, the
     * implementation must either *always* check its required fields, or *never*
     * check its required fields, regardless of whether or not the message has
     * been parsed.
     */
    lazy?: boolean
    /**
     * Is this field deprecated?
     * Depending on the target platform, this can emit Deprecated annotations
     * for accessors, or it will be completely ignored; in the very least, this
     * is a formalization for deprecating fields.
     */
    deprecated?: boolean
    /** For Google-internal migration only. Do not use. */
    weak?: boolean
    /** The parser stores options it doesn't recognize here. See above. */
    uninterpretedOption?: readonly IUninterpretedOption[]
    ".google.api.resourceReference"?: $resource.IResourceReference
    ".google.api.fieldBehavior"?: readonly $fieldBehavior.FieldBehavior[]
}

export class FieldOptions extends $sisyphus.Message<FieldOptions> implements IFieldOptions {
    ctype!: FieldOptions.CType
    packed!: boolean
    jstype!: FieldOptions.JSType
    lazy!: boolean
    deprecated!: boolean
    weak!: boolean
    uninterpretedOption!: readonly UninterpretedOption[]
    ".google.api.resourceReference"!: $resource.ResourceReference
    ".google.api.fieldBehavior"!: readonly $fieldBehavior.FieldBehavior[]
}
$reflection.root.lookupType(".google.protobuf.FieldOptions").messageCtor = FieldOptions

export namespace FieldOptions {

    export enum CType {
        /** Default mode. */
        STRING = 0,
        CORD = 1,
        STRING_PIECE = 2,
    }

    export namespace CType {
        export const reflection = $reflection.root.lookupEnum(".google.protobuf.FieldOptions.CType")
    }

    export enum JSType {
        /** Use the default type. */
        JS_NORMAL = 0,
        /** Use JavaScript strings. */
        JS_STRING = 1,
        /** Use JavaScript numbers. */
        JS_NUMBER = 2,
    }

    export namespace JSType {
        export const reflection = $reflection.root.lookupEnum(".google.protobuf.FieldOptions.JSType")
    }
}

export interface IOneofOptions {
    /** The parser stores options it doesn't recognize here. See above. */
    uninterpretedOption?: readonly IUninterpretedOption[]
}

export class OneofOptions extends $sisyphus.Message<OneofOptions> implements IOneofOptions {
    uninterpretedOption!: readonly UninterpretedOption[]
}
$reflection.root.lookupType(".google.protobuf.OneofOptions").messageCtor = OneofOptions


export interface IEnumOptions {
    /**
     * Set this option to true to allow mapping different tag names to the same
     * value.
     */
    allowAlias?: boolean
    /**
     * Is this enum deprecated?
     * Depending on the target platform, this can emit Deprecated annotations
     * for the enum, or it will be completely ignored; in the very least, this
     * is a formalization for deprecating enums.
     */
    deprecated?: boolean
    /** The parser stores options it doesn't recognize here. See above. */
    uninterpretedOption?: readonly IUninterpretedOption[]
}

export class EnumOptions extends $sisyphus.Message<EnumOptions> implements IEnumOptions {
    allowAlias!: boolean
    deprecated!: boolean
    uninterpretedOption!: readonly UninterpretedOption[]
}
$reflection.root.lookupType(".google.protobuf.EnumOptions").messageCtor = EnumOptions


export interface IEnumValueOptions {
    /**
     * Is this enum value deprecated?
     * Depending on the target platform, this can emit Deprecated annotations
     * for the enum value, or it will be completely ignored; in the very least,
     * this is a formalization for deprecating enum values.
     */
    deprecated?: boolean
    /** The parser stores options it doesn't recognize here. See above. */
    uninterpretedOption?: readonly IUninterpretedOption[]
    ".sisyphus.protobuf.string"?: string
}

export class EnumValueOptions extends $sisyphus.Message<EnumValueOptions> implements IEnumValueOptions {
    deprecated!: boolean
    uninterpretedOption!: readonly UninterpretedOption[]
    ".sisyphus.protobuf.string"!: string
}
$reflection.root.lookupType(".google.protobuf.EnumValueOptions").messageCtor = EnumValueOptions


export interface IServiceOptions {
    /**
     * Is this service deprecated?
     * Depending on the target platform, this can emit Deprecated annotations
     * for the service, or it will be completely ignored; in the very least,
     * this is a formalization for deprecating services.
     */
    deprecated?: boolean
    /** The parser stores options it doesn't recognize here. See above. */
    uninterpretedOption?: readonly IUninterpretedOption[]
    ".google.api.defaultHost"?: string
    ".google.api.oauthScopes"?: string
    ".sisyphus.api.metadata"?: $serviceMeta.IServiceMetadata
}

export class ServiceOptions extends $sisyphus.Message<ServiceOptions> implements IServiceOptions {
    deprecated!: boolean
    uninterpretedOption!: readonly UninterpretedOption[]
    ".google.api.defaultHost"!: string
    ".google.api.oauthScopes"!: string
    ".sisyphus.api.metadata"!: $serviceMeta.ServiceMetadata
}
$reflection.root.lookupType(".google.protobuf.ServiceOptions").messageCtor = ServiceOptions


export interface IMethodOptions {
    /**
     * Is this method deprecated?
     * Depending on the target platform, this can emit Deprecated annotations
     * for the method, or it will be completely ignored; in the very least,
     * this is a formalization for deprecating methods.
     */
    deprecated?: boolean
    idempotencyLevel?: MethodOptions.IdempotencyLevel
    /** The parser stores options it doesn't recognize here. See above. */
    uninterpretedOption?: readonly IUninterpretedOption[]
    ".bybutter.incubator.common.v1.access"?: $accessControl.IAccessControl
    ".google.api.http"?: $http.IHttpRule
    ".google.api.methodSignature"?: readonly string[]
    ".google.longrunning.operationInfo"?: $operations.IOperationInfo
}

export class MethodOptions extends $sisyphus.Message<MethodOptions> implements IMethodOptions {
    deprecated!: boolean
    idempotencyLevel!: MethodOptions.IdempotencyLevel
    uninterpretedOption!: readonly UninterpretedOption[]
    ".bybutter.incubator.common.v1.access"!: $accessControl.AccessControl
    ".google.api.http"!: $http.HttpRule
    ".google.api.methodSignature"!: readonly string[]
    ".google.longrunning.operationInfo"!: $operations.OperationInfo
}
$reflection.root.lookupType(".google.protobuf.MethodOptions").messageCtor = MethodOptions

export namespace MethodOptions {

    /**
     * Is this method side-effect-free (or safe in HTTP parlance), or idempotent,
     * or neither? HTTP based RPC implementation may choose GET verb for safe
     * methods, and PUT verb for idempotent methods instead of the default POST.
     */
    export enum IdempotencyLevel {
        IDEMPOTENCY_UNKNOWN = 0,
        /** implies idempotent */
        NO_SIDE_EFFECTS = 1,
        /** idempotent, but may have side effects */
        IDEMPOTENT = 2,
    }

    export namespace IdempotencyLevel {
        export const reflection = $reflection.root.lookupEnum(".google.protobuf.MethodOptions.IdempotencyLevel")
    }
}

/**
 * A message representing a option the parser does not recognize. This only
 * appears in options protos created by the compiler::Parser class.
 * DescriptorPool resolves these when building Descriptor objects. Therefore,
 * options protos in descriptor objects (e.g. returned by Descriptor::options(),
 * or produced by Descriptor::CopyTo()) will never have UninterpretedOptions
 * in them.
 */
export interface IUninterpretedOption {
    name?: readonly UninterpretedOption.INamePart[]
    /**
     * The value of the uninterpreted option, in whatever type the tokenizer
     * identified it as during parsing. Exactly one of these should be set.
     */
    identifierValue?: string
    positiveIntValue?: $protobuf.Long
    negativeIntValue?: $protobuf.Long
    doubleValue?: number
    stringValue?: Uint8Array
    aggregateValue?: string
}

export class UninterpretedOption extends $sisyphus.Message<UninterpretedOption> implements IUninterpretedOption {
    name!: readonly UninterpretedOption.NamePart[]
    identifierValue!: string
    positiveIntValue!: $protobuf.Long
    negativeIntValue!: $protobuf.Long
    doubleValue!: number
    stringValue!: Uint8Array
    aggregateValue!: string
}
$reflection.root.lookupType(".google.protobuf.UninterpretedOption").messageCtor = UninterpretedOption

export namespace UninterpretedOption {

    /**
     * The name of the uninterpreted option.  Each string represents a segment in
     * a dot-separated name.  is_extension is true iff a segment represents an
     * extension (denoted with parentheses in options specs in .proto files).
     * E.g.,{ ["foo", false], ["bar.baz", true], ["qux", false] } represents
     * "foo.(bar.baz).qux".
     */
    export interface INamePart {
        namePart: string
        isExtension: boolean
    }

    export class NamePart extends $sisyphus.Message<NamePart> implements INamePart {
        namePart!: string
        isExtension!: boolean
    }
    $reflection.root.lookupType(".google.protobuf.UninterpretedOption.NamePart").messageCtor = NamePart
}

/**
 * Encapsulates information about the original source file from which a
 * FileDescriptorProto was generated.
 */
export interface ISourceCodeInfo {
    /**
     * A Location identifies a piece of source code in a .proto file which
     * corresponds to a particular definition.  This information is intended
     * to be useful to IDEs, code indexers, documentation generators, and similar
     * tools.
     * 
     * For example, say we have a file like:
     * message Foo {
     * optional string foo = 1;
     * }
     * Let's look at just the field definition:
     * optional string foo = 1;
     * ^       ^^     ^^  ^  ^^^
     * a       bc     de  f  ghi
     * We have the following locations:
     * span   path               represents
     * [a,i)  [ 4, 0, 2, 0 ]     The whole field definition.
     * [a,b)  [ 4, 0, 2, 0, 4 ]  The label (optional).
     * [c,d)  [ 4, 0, 2, 0, 5 ]  The type (string).
     * [e,f)  [ 4, 0, 2, 0, 1 ]  The name (foo).
     * [g,h)  [ 4, 0, 2, 0, 3 ]  The number (1).
     * 
     * Notes:
     * - A location may refer to a repeated field itself (i.e. not to any
     * particular index within it).  This is used whenever a set of elements are
     * logically enclosed in a single code segment.  For example, an entire
     * extend block (possibly containing multiple extension definitions) will
     * have an outer location whose path refers to the "extensions" repeated
     * field without an index.
     * - Multiple locations may have the same path.  This happens when a single
     * logical declaration is spread out across multiple places.  The most
     * obvious example is the "extend" block again -- there may be multiple
     * extend blocks in the same scope, each of which will have the same path.
     * - A location's span is not always a subset of its parent's span.  For
     * example, the "extendee" of an extension declaration appears at the
     * beginning of the "extend" block and is shared by all extensions within
     * the block.
     * - Just because a location's span is a subset of some other location's span
     * does not mean that it is a descendant.  For example, a "group" defines
     * both a type and a field in a single declaration.  Thus, the locations
     * corresponding to the type and field and their components will overlap.
     * - Code which tries to interpret locations should probably be designed to
     * ignore those that it doesn't understand, as more types of locations could
     * be recorded in the future.
     */
    location?: readonly SourceCodeInfo.ILocation[]
}

export class SourceCodeInfo extends $sisyphus.Message<SourceCodeInfo> implements ISourceCodeInfo {
    location!: readonly SourceCodeInfo.Location[]
}
$reflection.root.lookupType(".google.protobuf.SourceCodeInfo").messageCtor = SourceCodeInfo

export namespace SourceCodeInfo {

    export interface ILocation {
        /**
         * Identifies which part of the FileDescriptorProto was defined at this
         * location.
         * 
         * Each element is a field number or an index.  They form a path from
         * the root FileDescriptorProto to the place where the definition.  For
         * example, this path:
         * [ 4, 3, 2, 7, 1 ]
         * refers to:
         * file.message_type(3)  // 4, 3
         * .field(7)         // 2, 7
         * .name()           // 1
         * This is because FileDescriptorProto.message_type has field number 4:
         * repeated DescriptorProto message_type = 4;
         * and DescriptorProto.field has field number 2:
         * repeated FieldDescriptorProto field = 2;
         * and FieldDescriptorProto.name has field number 1:
         * optional string name = 1;
         * 
         * Thus, the above path gives the location of a field name.  If we removed
         * the last element:
         * [ 4, 3, 2, 7 ]
         * this path refers to the whole field declaration (from the beginning
         * of the label to the terminating semicolon).
         */
        path?: readonly number[]
        /**
         * Always has exactly three or four elements: start line, start column,
         * end line (optional, otherwise assumed same as start line), end column.
         * These are packed into a single field for efficiency.  Note that line
         * and column numbers are zero-based -- typically you will want to add
         * 1 to each before displaying to a user.
         */
        span?: readonly number[]
        /**
         * If this SourceCodeInfo represents a complete declaration, these are any
         * comments appearing before and after the declaration which appear to be
         * attached to the declaration.
         * 
         * A series of line comments appearing on consecutive lines, with no other
         * tokens appearing on those lines, will be treated as a single comment.
         * 
         * leading_detached_comments will keep paragraphs of comments that appear
         * before (but not connected to) the current element. Each paragraph,
         * separated by empty lines, will be one comment element in the repeated
         * field.
         * 
         * Only the comment content is provided; comment markers (e.g. //) are
         * stripped out.  For block comments, leading whitespace and an asterisk
         * will be stripped from the beginning of each line other than the first.
         * Newlines are included in the output.
         * 
         * Examples:
         * 
         * optional int32 foo = 1;  // Comment attached to foo.
         * // Comment attached to bar.
         * optional int32 bar = 2;
         * 
         * optional string baz = 3;
         * // Comment attached to baz.
         * // Another line attached to baz.
         * 
         * // Comment attached to qux.
         * //
         * // Another line attached to qux.
         * optional double qux = 4;
         * 
         * // Detached comment for corge. This is not leading or trailing comments
         * // to qux or corge because there are blank lines separating it from
         * // both.
         * 
         * // Detached comment for corge paragraph 2.
         * 
         * optional string corge = 5;
         * /* Block comment attached
         * * to corge.  Leading asterisks
         * * will be removed. *&#47;
         * /* Block comment attached to
         * * grault. *&#47;
         * optional int32 grault = 6;
         * 
         * // ignored detached comments.
         */
        leadingComments?: string
        trailingComments?: string
        leadingDetachedComments?: readonly string[]
    }

    export class Location extends $sisyphus.Message<Location> implements ILocation {
        path!: readonly number[]
        span!: readonly number[]
        leadingComments!: string
        trailingComments!: string
        leadingDetachedComments!: readonly string[]
    }
    $reflection.root.lookupType(".google.protobuf.SourceCodeInfo.Location").messageCtor = Location
}

/**
 * Describes the relationship between generated code and its original source
 * file. A GeneratedCodeInfo message is associated with only one generated
 * source file, but may contain references to different source .proto files.
 */
export interface IGeneratedCodeInfo {
    /**
     * An Annotation connects some span of text in generated code to an element
     * of its generating .proto file.
     */
    annotation?: readonly GeneratedCodeInfo.IAnnotation[]
}

export class GeneratedCodeInfo extends $sisyphus.Message<GeneratedCodeInfo> implements IGeneratedCodeInfo {
    annotation!: readonly GeneratedCodeInfo.Annotation[]
}
$reflection.root.lookupType(".google.protobuf.GeneratedCodeInfo").messageCtor = GeneratedCodeInfo

export namespace GeneratedCodeInfo {

    export interface IAnnotation {
        /**
         * Identifies the element in the original source .proto file. This field
         * is formatted the same as SourceCodeInfo.Location.path.
         */
        path?: readonly number[]
        /** Identifies the filesystem path to the original source .proto. */
        sourceFile?: string
        /**
         * Identifies the starting offset in bytes in the generated code
         * that relates to the identified object.
         */
        begin?: number
        /**
         * Identifies the ending offset in bytes in the generated code that
         * relates to the identified offset. The end offset should be one past
         * the last relevant byte (so the length of the text = end - begin).
         */
        end?: number
    }

    export class Annotation extends $sisyphus.Message<Annotation> implements IAnnotation {
        path!: readonly number[]
        sourceFile!: string
        begin!: number
        end!: number
    }
    $reflection.root.lookupType(".google.protobuf.GeneratedCodeInfo.Annotation").messageCtor = Annotation
}