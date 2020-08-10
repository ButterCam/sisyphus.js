import * as $sisyphus from "@sisyphus.js/core"
import * as $protobuf from "protobufjs"
import * as $reflection from "../../_reflection"
import * as $privilege from "../../bybutter/incubator/bread/v1/privilege"
import * as $dictation from "../../bybutter/incubator/bread/v1/dictation"
import * as $resource from "../api/resource"
import * as $fieldBehavior from "../api/field_behavior"
import * as $serviceMeta from "../../sisyphus/api/service_meta"
import * as $accessControl from "../../bybutter/incubator/common/v1/access_control"
import * as $http from "../api/http"
import * as $operations from "../longrunning/operations"


/**
 * The protocol compiler can output a FileDescriptorSet containing the .proto
 * files it parses.
 */
export interface IFileDescriptorSet {
    file?: (IFileDescriptorProto[] | null)
}

export class FileDescriptorSet extends $sisyphus.Message<IFileDescriptorSet> implements IFileDescriptorSet {
    file!: (IFileDescriptorProto[] | null)
    get $reflection() {
        return FileDescriptorSet.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.FileDescriptorSet")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): FileDescriptorSet {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    if (!result.file) result.file = []
                    result.file.push(FileDescriptorProto.decodeDelimited(reader))
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): FileDescriptorSet {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IFileDescriptorSet): FileDescriptorSet {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "file":
                    result[key] = FileDescriptorProto.create(properties[key])
                    break
            }
        }
        return result
    }
}
FileDescriptorSet.prototype.file = null


/** Describes a complete .proto file. */
export interface IFileDescriptorProto {
    /** file name, relative to root of source tree */
    name?: string
    package?: string
    /** Names of files imported by this file. */
    dependency?: (string[] | null)
    /** Indexes of the public imported files in the dependency list above. */
    publicDependency?: (number[] | null)
    /**
     * Indexes of the weak imported files in the dependency list.
     * For Google-internal migration only. Do not use.
     */
    weakDependency?: (number[] | null)
    /** All top-level definitions in this file. */
    messageType?: (IDescriptorProto[] | null)
    enumType?: (IEnumDescriptorProto[] | null)
    service?: (IServiceDescriptorProto[] | null)
    extension?: (IFieldDescriptorProto[] | null)
    options?: (IFileOptions | null)
    /**
     * This field contains optional information about the original source code.
     * You may safely remove this entire field without harming runtime
     * functionality of the descriptors -- the information is needed only by
     * development tools.
     */
    sourceCodeInfo?: (ISourceCodeInfo | null)
    /**
     * The syntax of the proto file.
     * The supported values are "proto2" and "proto3".
     */
    syntax?: string
}

export class FileDescriptorProto extends $sisyphus.Message<IFileDescriptorProto> implements IFileDescriptorProto {
    name!: string
    package!: string
    dependency!: (string[] | null)
    publicDependency!: (number[] | null)
    weakDependency!: (number[] | null)
    messageType!: (IDescriptorProto[] | null)
    enumType!: (IEnumDescriptorProto[] | null)
    service!: (IServiceDescriptorProto[] | null)
    extension!: (IFieldDescriptorProto[] | null)
    options!: (IFileOptions | null)
    sourceCodeInfo!: (ISourceCodeInfo | null)
    syntax!: string
    get $reflection() {
        return FileDescriptorProto.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.FileDescriptorProto")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): FileDescriptorProto {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.name = reader.string()
                    break
                case 2:
                    result["package"] = reader.string()
                    break
                case 3:
                    if (!result.dependency) result.dependency = []
                    result.dependency.push(reader.string())
                    break
                case 10:
                    if (!result.publicDependency) result.publicDependency = []
                    result.publicDependency.push(reader.int32())
                    break
                case 11:
                    if (!result.weakDependency) result.weakDependency = []
                    result.weakDependency.push(reader.int32())
                    break
                case 4:
                    if (!result.messageType) result.messageType = []
                    result.messageType.push(DescriptorProto.decodeDelimited(reader))
                    break
                case 5:
                    if (!result.enumType) result.enumType = []
                    result.enumType.push(EnumDescriptorProto.decodeDelimited(reader))
                    break
                case 6:
                    if (!result.service) result.service = []
                    result.service.push(ServiceDescriptorProto.decodeDelimited(reader))
                    break
                case 7:
                    if (!result.extension) result.extension = []
                    result.extension.push(FieldDescriptorProto.decodeDelimited(reader))
                    break
                case 8:
                    result.options = FileOptions.decodeDelimited(reader)
                    break
                case 9:
                    result.sourceCodeInfo = SourceCodeInfo.decodeDelimited(reader)
                    break
                case 12:
                    result.syntax = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): FileDescriptorProto {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IFileDescriptorProto): FileDescriptorProto {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "name":
                    result[key] = String(properties[key])
                    break
                case "package":
                    result[key] = String(properties[key])
                    break
                case "dependency":
                    result[key] = String(properties[key])
                    break
                case "publicDependency":
                    result[key] = Number(properties[key])
                    break
                case "weakDependency":
                    result[key] = Number(properties[key])
                    break
                case "messageType":
                    result[key] = DescriptorProto.create(properties[key])
                    break
                case "enumType":
                    result[key] = EnumDescriptorProto.create(properties[key])
                    break
                case "service":
                    result[key] = ServiceDescriptorProto.create(properties[key])
                    break
                case "extension":
                    result[key] = FieldDescriptorProto.create(properties[key])
                    break
                case "options":
                    result[key] = FileOptions.create(properties[key])
                    break
                case "sourceCodeInfo":
                    result[key] = SourceCodeInfo.create(properties[key])
                    break
                case "syntax":
                    result[key] = String(properties[key])
                    break
            }
        }
        return result
    }
}
FileDescriptorProto.prototype.name = ""
FileDescriptorProto.prototype.package = ""
FileDescriptorProto.prototype.dependency = null
FileDescriptorProto.prototype.publicDependency = null
FileDescriptorProto.prototype.weakDependency = null
FileDescriptorProto.prototype.messageType = null
FileDescriptorProto.prototype.enumType = null
FileDescriptorProto.prototype.service = null
FileDescriptorProto.prototype.extension = null
FileDescriptorProto.prototype.options = null
FileDescriptorProto.prototype.sourceCodeInfo = null
FileDescriptorProto.prototype.syntax = ""


/** Describes a message type. */
export interface IDescriptorProto {
    name?: string
    field?: (IFieldDescriptorProto[] | null)
    extension?: (IFieldDescriptorProto[] | null)
    nestedType?: (IDescriptorProto[] | null)
    enumType?: (IEnumDescriptorProto[] | null)
    extensionRange?: (DescriptorProto.IExtensionRange[] | null)
    oneofDecl?: (IOneofDescriptorProto[] | null)
    options?: (IMessageOptions | null)
    reservedRange?: (DescriptorProto.IReservedRange[] | null)
    /**
     * Reserved field names, which may not be used by fields in the same message.
     * A given name may only be reserved once.
     */
    reservedName?: (string[] | null)
}

export class DescriptorProto extends $sisyphus.Message<IDescriptorProto> implements IDescriptorProto {
    name!: string
    field!: (IFieldDescriptorProto[] | null)
    extension!: (IFieldDescriptorProto[] | null)
    nestedType!: (IDescriptorProto[] | null)
    enumType!: (IEnumDescriptorProto[] | null)
    extensionRange!: (DescriptorProto.IExtensionRange[] | null)
    oneofDecl!: (IOneofDescriptorProto[] | null)
    options!: (IMessageOptions | null)
    reservedRange!: (DescriptorProto.IReservedRange[] | null)
    reservedName!: (string[] | null)
    get $reflection() {
        return DescriptorProto.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.DescriptorProto")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): DescriptorProto {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.name = reader.string()
                    break
                case 2:
                    if (!result.field) result.field = []
                    result.field.push(FieldDescriptorProto.decodeDelimited(reader))
                    break
                case 6:
                    if (!result.extension) result.extension = []
                    result.extension.push(FieldDescriptorProto.decodeDelimited(reader))
                    break
                case 3:
                    if (!result.nestedType) result.nestedType = []
                    result.nestedType.push(DescriptorProto.decodeDelimited(reader))
                    break
                case 4:
                    if (!result.enumType) result.enumType = []
                    result.enumType.push(EnumDescriptorProto.decodeDelimited(reader))
                    break
                case 5:
                    if (!result.extensionRange) result.extensionRange = []
                    result.extensionRange.push(DescriptorProto.ExtensionRange.decodeDelimited(reader))
                    break
                case 8:
                    if (!result.oneofDecl) result.oneofDecl = []
                    result.oneofDecl.push(OneofDescriptorProto.decodeDelimited(reader))
                    break
                case 7:
                    result.options = MessageOptions.decodeDelimited(reader)
                    break
                case 9:
                    if (!result.reservedRange) result.reservedRange = []
                    result.reservedRange.push(DescriptorProto.ReservedRange.decodeDelimited(reader))
                    break
                case 10:
                    if (!result.reservedName) result.reservedName = []
                    result.reservedName.push(reader.string())
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): DescriptorProto {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IDescriptorProto): DescriptorProto {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "name":
                    result[key] = String(properties[key])
                    break
                case "field":
                    result[key] = FieldDescriptorProto.create(properties[key])
                    break
                case "extension":
                    result[key] = FieldDescriptorProto.create(properties[key])
                    break
                case "nestedType":
                    result[key] = DescriptorProto.create(properties[key])
                    break
                case "enumType":
                    result[key] = EnumDescriptorProto.create(properties[key])
                    break
                case "extensionRange":
                    result[key] = DescriptorProto.ExtensionRange.create(properties[key])
                    break
                case "oneofDecl":
                    result[key] = OneofDescriptorProto.create(properties[key])
                    break
                case "options":
                    result[key] = MessageOptions.create(properties[key])
                    break
                case "reservedRange":
                    result[key] = DescriptorProto.ReservedRange.create(properties[key])
                    break
                case "reservedName":
                    result[key] = String(properties[key])
                    break
            }
        }
        return result
    }
}
DescriptorProto.prototype.name = ""
DescriptorProto.prototype.field = null
DescriptorProto.prototype.extension = null
DescriptorProto.prototype.nestedType = null
DescriptorProto.prototype.enumType = null
DescriptorProto.prototype.extensionRange = null
DescriptorProto.prototype.oneofDecl = null
DescriptorProto.prototype.options = null
DescriptorProto.prototype.reservedRange = null
DescriptorProto.prototype.reservedName = null

export namespace DescriptorProto {

    export interface IExtensionRange {
        /** Inclusive. */
        start?: number
        /** Exclusive. */
        end?: number
        options?: (IExtensionRangeOptions | null)
    }

    export class ExtensionRange extends $sisyphus.Message<IExtensionRange> implements IExtensionRange {
        start!: number
        end!: number
        options!: (IExtensionRangeOptions | null)
        get $reflection() {
            return ExtensionRange.reflection
        }

        static readonly reflection = $reflection.root.lookupType(".google.protobuf.DescriptorProto.ExtensionRange")
        static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ExtensionRange {
            if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
            const end = length === undefined ? reader.len : reader.pos + length
            const result = new this()
            while(reader.pos < end) {
                let tag = reader.uint32()
                switch(tag>>>3) {
                    case 1:
                        result.start = reader.int32()
                        break
                    case 2:
                        result.end = reader.int32()
                        break
                    case 3:
                        result.options = ExtensionRangeOptions.decodeDelimited(reader)
                        break
                }
            }
            return result
        }

        static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ExtensionRange {
            if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
            return this.decode(reader, reader.uint32())
        }
        static create(properties?: IExtensionRange): ExtensionRange {
            if(properties instanceof this) return properties
            const result = new this()
            if (!properties) return result
            for (const key in properties) {
                if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
                switch(key) {
                    case "start":
                        result[key] = Number(properties[key])
                        break
                    case "end":
                        result[key] = Number(properties[key])
                        break
                    case "options":
                        result[key] = ExtensionRangeOptions.create(properties[key])
                        break
                }
            }
            return result
        }
    }
    ExtensionRange.prototype.start = 0
    ExtensionRange.prototype.end = 0
    ExtensionRange.prototype.options = null


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

    export class ReservedRange extends $sisyphus.Message<IReservedRange> implements IReservedRange {
        start!: number
        end!: number
        get $reflection() {
            return ReservedRange.reflection
        }

        static readonly reflection = $reflection.root.lookupType(".google.protobuf.DescriptorProto.ReservedRange")
        static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ReservedRange {
            if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
            const end = length === undefined ? reader.len : reader.pos + length
            const result = new this()
            while(reader.pos < end) {
                let tag = reader.uint32()
                switch(tag>>>3) {
                    case 1:
                        result.start = reader.int32()
                        break
                    case 2:
                        result.end = reader.int32()
                        break
                }
            }
            return result
        }

        static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ReservedRange {
            if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
            return this.decode(reader, reader.uint32())
        }
        static create(properties?: IReservedRange): ReservedRange {
            if(properties instanceof this) return properties
            const result = new this()
            if (!properties) return result
            for (const key in properties) {
                if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
                switch(key) {
                    case "start":
                        result[key] = Number(properties[key])
                        break
                    case "end":
                        result[key] = Number(properties[key])
                        break
                }
            }
            return result
        }
    }
    ReservedRange.prototype.start = 0
    ReservedRange.prototype.end = 0
}

export interface IExtensionRangeOptions {
    /** The parser stores options it doesn't recognize here. See above. */
    uninterpretedOption?: (IUninterpretedOption[] | null)
}

export class ExtensionRangeOptions extends $sisyphus.Message<IExtensionRangeOptions> implements IExtensionRangeOptions {
    uninterpretedOption!: (IUninterpretedOption[] | null)
    get $reflection() {
        return ExtensionRangeOptions.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.ExtensionRangeOptions")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ExtensionRangeOptions {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 999:
                    if (!result.uninterpretedOption) result.uninterpretedOption = []
                    result.uninterpretedOption.push(UninterpretedOption.decodeDelimited(reader))
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ExtensionRangeOptions {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IExtensionRangeOptions): ExtensionRangeOptions {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "uninterpretedOption":
                    result[key] = UninterpretedOption.create(properties[key])
                    break
            }
        }
        return result
    }
}
ExtensionRangeOptions.prototype.uninterpretedOption = null


/** Describes a field within a message. */
export interface IFieldDescriptorProto {
    name?: string
    number?: number
    label?: $privilege.ILabel
    /**
     * If type_name is set, this need not be set.  If both this and type_name
     * are set, this must be one of TYPE_ENUM, TYPE_MESSAGE or TYPE_GROUP.
     */
    type?: $dictation.DictationWord.Type
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
    options?: (IFieldOptions | null)
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

export class FieldDescriptorProto extends $sisyphus.Message<IFieldDescriptorProto> implements IFieldDescriptorProto {
    name!: string
    number!: number
    label!: $privilege.ILabel
    type!: $dictation.DictationWord.Type
    typeName!: string
    extendee!: string
    defaultValue!: string
    oneofIndex!: number
    jsonName!: string
    options!: (IFieldOptions | null)
    proto3Optional!: boolean
    get $reflection() {
        return FieldDescriptorProto.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.FieldDescriptorProto")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): FieldDescriptorProto {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.name = reader.string()
                    break
                case 3:
                    result.number = reader.int32()
                    break
                case 4:
                    result.label = reader.uint32()
                    break
                case 5:
                    result.type = reader.uint32()
                    break
                case 6:
                    result.typeName = reader.string()
                    break
                case 2:
                    result.extendee = reader.string()
                    break
                case 7:
                    result.defaultValue = reader.string()
                    break
                case 9:
                    result.oneofIndex = reader.int32()
                    break
                case 10:
                    result.jsonName = reader.string()
                    break
                case 8:
                    result.options = FieldOptions.decodeDelimited(reader)
                    break
                case 17:
                    result.proto3Optional = reader.bool()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): FieldDescriptorProto {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IFieldDescriptorProto): FieldDescriptorProto {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "name":
                    result[key] = String(properties[key])
                    break
                case "number":
                    result[key] = Number(properties[key])
                    break
                case "label":
                    result[key] = typeof properties[key] === "number" ? properties[key] : FieldDescriptorProto.Label[properties[key]]
                    break
                case "type":
                    result[key] = typeof properties[key] === "number" ? properties[key] : FieldDescriptorProto.Type[properties[key]]
                    break
                case "typeName":
                    result[key] = String(properties[key])
                    break
                case "extendee":
                    result[key] = String(properties[key])
                    break
                case "defaultValue":
                    result[key] = String(properties[key])
                    break
                case "oneofIndex":
                    result[key] = Number(properties[key])
                    break
                case "jsonName":
                    result[key] = String(properties[key])
                    break
                case "options":
                    result[key] = FieldOptions.create(properties[key])
                    break
                case "proto3Optional":
                    result[key] = Boolean(properties[key])
                    break
            }
        }
        return result
    }
}
FieldDescriptorProto.prototype.name = ""
FieldDescriptorProto.prototype.number = 0
FieldDescriptorProto.prototype.label = undefined
FieldDescriptorProto.prototype.type = undefined
FieldDescriptorProto.prototype.typeName = ""
FieldDescriptorProto.prototype.extendee = ""
FieldDescriptorProto.prototype.defaultValue = ""
FieldDescriptorProto.prototype.oneofIndex = 0
FieldDescriptorProto.prototype.jsonName = ""
FieldDescriptorProto.prototype.options = null
FieldDescriptorProto.prototype.proto3Optional = false

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
    options?: (IOneofOptions | null)
}

export class OneofDescriptorProto extends $sisyphus.Message<IOneofDescriptorProto> implements IOneofDescriptorProto {
    name!: string
    options!: (IOneofOptions | null)
    get $reflection() {
        return OneofDescriptorProto.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.OneofDescriptorProto")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): OneofDescriptorProto {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.name = reader.string()
                    break
                case 2:
                    result.options = OneofOptions.decodeDelimited(reader)
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): OneofDescriptorProto {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IOneofDescriptorProto): OneofDescriptorProto {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "name":
                    result[key] = String(properties[key])
                    break
                case "options":
                    result[key] = OneofOptions.create(properties[key])
                    break
            }
        }
        return result
    }
}
OneofDescriptorProto.prototype.name = ""
OneofDescriptorProto.prototype.options = null


/** Describes an enum type. */
export interface IEnumDescriptorProto {
    name?: string
    value?: (IEnumValueDescriptorProto[] | null)
    options?: (IEnumOptions | null)
    /**
     * Range of reserved numeric values. Reserved numeric values may not be used
     * by enum values in the same enum declaration. Reserved ranges may not
     * overlap.
     */
    reservedRange?: (EnumDescriptorProto.IEnumReservedRange[] | null)
    /**
     * Reserved enum value names, which may not be reused. A given name may only
     * be reserved once.
     */
    reservedName?: (string[] | null)
}

export class EnumDescriptorProto extends $sisyphus.Message<IEnumDescriptorProto> implements IEnumDescriptorProto {
    name!: string
    value!: (IEnumValueDescriptorProto[] | null)
    options!: (IEnumOptions | null)
    reservedRange!: (EnumDescriptorProto.IEnumReservedRange[] | null)
    reservedName!: (string[] | null)
    get $reflection() {
        return EnumDescriptorProto.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.EnumDescriptorProto")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): EnumDescriptorProto {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.name = reader.string()
                    break
                case 2:
                    if (!result.value) result.value = []
                    result.value.push(EnumValueDescriptorProto.decodeDelimited(reader))
                    break
                case 3:
                    result.options = EnumOptions.decodeDelimited(reader)
                    break
                case 4:
                    if (!result.reservedRange) result.reservedRange = []
                    result.reservedRange.push(EnumDescriptorProto.EnumReservedRange.decodeDelimited(reader))
                    break
                case 5:
                    if (!result.reservedName) result.reservedName = []
                    result.reservedName.push(reader.string())
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): EnumDescriptorProto {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IEnumDescriptorProto): EnumDescriptorProto {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "name":
                    result[key] = String(properties[key])
                    break
                case "value":
                    result[key] = EnumValueDescriptorProto.create(properties[key])
                    break
                case "options":
                    result[key] = EnumOptions.create(properties[key])
                    break
                case "reservedRange":
                    result[key] = EnumDescriptorProto.EnumReservedRange.create(properties[key])
                    break
                case "reservedName":
                    result[key] = String(properties[key])
                    break
            }
        }
        return result
    }
}
EnumDescriptorProto.prototype.name = ""
EnumDescriptorProto.prototype.value = null
EnumDescriptorProto.prototype.options = null
EnumDescriptorProto.prototype.reservedRange = null
EnumDescriptorProto.prototype.reservedName = null

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

    export class EnumReservedRange extends $sisyphus.Message<IEnumReservedRange> implements IEnumReservedRange {
        start!: number
        end!: number
        get $reflection() {
            return EnumReservedRange.reflection
        }

        static readonly reflection = $reflection.root.lookupType(".google.protobuf.EnumDescriptorProto.EnumReservedRange")
        static decode(reader: Uint8Array | $protobuf.Reader, length?: number): EnumReservedRange {
            if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
            const end = length === undefined ? reader.len : reader.pos + length
            const result = new this()
            while(reader.pos < end) {
                let tag = reader.uint32()
                switch(tag>>>3) {
                    case 1:
                        result.start = reader.int32()
                        break
                    case 2:
                        result.end = reader.int32()
                        break
                }
            }
            return result
        }

        static decodeDelimited(reader: Uint8Array | $protobuf.Reader): EnumReservedRange {
            if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
            return this.decode(reader, reader.uint32())
        }
        static create(properties?: IEnumReservedRange): EnumReservedRange {
            if(properties instanceof this) return properties
            const result = new this()
            if (!properties) return result
            for (const key in properties) {
                if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
                switch(key) {
                    case "start":
                        result[key] = Number(properties[key])
                        break
                    case "end":
                        result[key] = Number(properties[key])
                        break
                }
            }
            return result
        }
    }
    EnumReservedRange.prototype.start = 0
    EnumReservedRange.prototype.end = 0
}

/** Describes a value within an enum. */
export interface IEnumValueDescriptorProto {
    name?: string
    number?: number
    options?: (IEnumValueOptions | null)
}

export class EnumValueDescriptorProto extends $sisyphus.Message<IEnumValueDescriptorProto> implements IEnumValueDescriptorProto {
    name!: string
    number!: number
    options!: (IEnumValueOptions | null)
    get $reflection() {
        return EnumValueDescriptorProto.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.EnumValueDescriptorProto")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): EnumValueDescriptorProto {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.name = reader.string()
                    break
                case 2:
                    result.number = reader.int32()
                    break
                case 3:
                    result.options = EnumValueOptions.decodeDelimited(reader)
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): EnumValueDescriptorProto {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IEnumValueDescriptorProto): EnumValueDescriptorProto {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "name":
                    result[key] = String(properties[key])
                    break
                case "number":
                    result[key] = Number(properties[key])
                    break
                case "options":
                    result[key] = EnumValueOptions.create(properties[key])
                    break
            }
        }
        return result
    }
}
EnumValueDescriptorProto.prototype.name = ""
EnumValueDescriptorProto.prototype.number = 0
EnumValueDescriptorProto.prototype.options = null


/** Describes a service. */
export interface IServiceDescriptorProto {
    name?: string
    method?: (IMethodDescriptorProto[] | null)
    options?: (IServiceOptions | null)
}

export class ServiceDescriptorProto extends $sisyphus.Message<IServiceDescriptorProto> implements IServiceDescriptorProto {
    name!: string
    method!: (IMethodDescriptorProto[] | null)
    options!: (IServiceOptions | null)
    get $reflection() {
        return ServiceDescriptorProto.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.ServiceDescriptorProto")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ServiceDescriptorProto {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.name = reader.string()
                    break
                case 2:
                    if (!result.method) result.method = []
                    result.method.push(MethodDescriptorProto.decodeDelimited(reader))
                    break
                case 3:
                    result.options = ServiceOptions.decodeDelimited(reader)
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ServiceDescriptorProto {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IServiceDescriptorProto): ServiceDescriptorProto {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "name":
                    result[key] = String(properties[key])
                    break
                case "method":
                    result[key] = MethodDescriptorProto.create(properties[key])
                    break
                case "options":
                    result[key] = ServiceOptions.create(properties[key])
                    break
            }
        }
        return result
    }
}
ServiceDescriptorProto.prototype.name = ""
ServiceDescriptorProto.prototype.method = null
ServiceDescriptorProto.prototype.options = null


/** Describes a method of a service. */
export interface IMethodDescriptorProto {
    name?: string
    /**
     * Input and output type names.  These are resolved in the same way as
     * FieldDescriptorProto.type_name, but must refer to a message type.
     */
    inputType?: string
    outputType?: string
    options?: (IMethodOptions | null)
    /** Identifies if client streams multiple client messages */
    clientStreaming?: boolean
    /** Identifies if server streams multiple server messages */
    serverStreaming?: boolean
}

export class MethodDescriptorProto extends $sisyphus.Message<IMethodDescriptorProto> implements IMethodDescriptorProto {
    name!: string
    inputType!: string
    outputType!: string
    options!: (IMethodOptions | null)
    clientStreaming!: boolean
    serverStreaming!: boolean
    get $reflection() {
        return MethodDescriptorProto.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.MethodDescriptorProto")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): MethodDescriptorProto {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.name = reader.string()
                    break
                case 2:
                    result.inputType = reader.string()
                    break
                case 3:
                    result.outputType = reader.string()
                    break
                case 4:
                    result.options = MethodOptions.decodeDelimited(reader)
                    break
                case 5:
                    result.clientStreaming = reader.bool()
                    break
                case 6:
                    result.serverStreaming = reader.bool()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): MethodDescriptorProto {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IMethodDescriptorProto): MethodDescriptorProto {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "name":
                    result[key] = String(properties[key])
                    break
                case "inputType":
                    result[key] = String(properties[key])
                    break
                case "outputType":
                    result[key] = String(properties[key])
                    break
                case "options":
                    result[key] = MethodOptions.create(properties[key])
                    break
                case "clientStreaming":
                    result[key] = Boolean(properties[key])
                    break
                case "serverStreaming":
                    result[key] = Boolean(properties[key])
                    break
            }
        }
        return result
    }
}
MethodDescriptorProto.prototype.name = ""
MethodDescriptorProto.prototype.inputType = ""
MethodDescriptorProto.prototype.outputType = ""
MethodDescriptorProto.prototype.options = null
MethodDescriptorProto.prototype.clientStreaming = false
MethodDescriptorProto.prototype.serverStreaming = false


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
    uninterpretedOption?: (IUninterpretedOption[] | null)
    ".google.api.resourceDefinition"?: ($resource.IResourceDescriptor[] | null)
}

export class FileOptions extends $sisyphus.Message<IFileOptions> implements IFileOptions {
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
    uninterpretedOption!: (IUninterpretedOption[] | null)
    ".google.api.resourceDefinition"!: ($resource.IResourceDescriptor[] | null)
    get $reflection() {
        return FileOptions.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.FileOptions")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): FileOptions {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.javaPackage = reader.string()
                    break
                case 8:
                    result.javaOuterClassname = reader.string()
                    break
                case 10:
                    result.javaMultipleFiles = reader.bool()
                    break
                case 20:
                    result.javaGenerateEqualsAndHash = reader.bool()
                    break
                case 27:
                    result.javaStringCheckUtf8 = reader.bool()
                    break
                case 9:
                    result.optimizeFor = reader.uint32()
                    break
                case 11:
                    result.goPackage = reader.string()
                    break
                case 16:
                    result.ccGenericServices = reader.bool()
                    break
                case 17:
                    result.javaGenericServices = reader.bool()
                    break
                case 18:
                    result.pyGenericServices = reader.bool()
                    break
                case 42:
                    result.phpGenericServices = reader.bool()
                    break
                case 23:
                    result.deprecated = reader.bool()
                    break
                case 31:
                    result.ccEnableArenas = reader.bool()
                    break
                case 36:
                    result.objcClassPrefix = reader.string()
                    break
                case 37:
                    result.csharpNamespace = reader.string()
                    break
                case 39:
                    result.swiftPrefix = reader.string()
                    break
                case 40:
                    result.phpClassPrefix = reader.string()
                    break
                case 41:
                    result.phpNamespace = reader.string()
                    break
                case 44:
                    result.phpMetadataNamespace = reader.string()
                    break
                case 45:
                    result.rubyPackage = reader.string()
                    break
                case 999:
                    if (!result.uninterpretedOption) result.uninterpretedOption = []
                    result.uninterpretedOption.push(UninterpretedOption.decodeDelimited(reader))
                    break
                case 1053:
                    if (!result[".google.api.resourceDefinition"]) result[".google.api.resourceDefinition"] = []
                    result[".google.api.resourceDefinition"].push($resource.ResourceDescriptor.decodeDelimited(reader))
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): FileOptions {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IFileOptions): FileOptions {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "javaPackage":
                    result[key] = String(properties[key])
                    break
                case "javaOuterClassname":
                    result[key] = String(properties[key])
                    break
                case "javaMultipleFiles":
                    result[key] = Boolean(properties[key])
                    break
                case "javaGenerateEqualsAndHash":
                    result[key] = Boolean(properties[key])
                    break
                case "javaStringCheckUtf8":
                    result[key] = Boolean(properties[key])
                    break
                case "optimizeFor":
                    result[key] = typeof properties[key] === "number" ? properties[key] : FileOptions.OptimizeMode[properties[key]]
                    break
                case "goPackage":
                    result[key] = String(properties[key])
                    break
                case "ccGenericServices":
                    result[key] = Boolean(properties[key])
                    break
                case "javaGenericServices":
                    result[key] = Boolean(properties[key])
                    break
                case "pyGenericServices":
                    result[key] = Boolean(properties[key])
                    break
                case "phpGenericServices":
                    result[key] = Boolean(properties[key])
                    break
                case "deprecated":
                    result[key] = Boolean(properties[key])
                    break
                case "ccEnableArenas":
                    result[key] = Boolean(properties[key])
                    break
                case "objcClassPrefix":
                    result[key] = String(properties[key])
                    break
                case "csharpNamespace":
                    result[key] = String(properties[key])
                    break
                case "swiftPrefix":
                    result[key] = String(properties[key])
                    break
                case "phpClassPrefix":
                    result[key] = String(properties[key])
                    break
                case "phpNamespace":
                    result[key] = String(properties[key])
                    break
                case "phpMetadataNamespace":
                    result[key] = String(properties[key])
                    break
                case "rubyPackage":
                    result[key] = String(properties[key])
                    break
                case "uninterpretedOption":
                    result[key] = UninterpretedOption.create(properties[key])
                    break
                case ".google.api.resourceDefinition":
                    result[key] = $resource.ResourceDescriptor.create(properties[key])
                    break
            }
        }
        return result
    }
}
FileOptions.prototype.javaPackage = ""
FileOptions.prototype.javaOuterClassname = ""
FileOptions.prototype.javaMultipleFiles = false
FileOptions.prototype.javaGenerateEqualsAndHash = false
FileOptions.prototype.javaStringCheckUtf8 = false
FileOptions.prototype.optimizeFor = undefined
FileOptions.prototype.goPackage = ""
FileOptions.prototype.ccGenericServices = false
FileOptions.prototype.javaGenericServices = false
FileOptions.prototype.pyGenericServices = false
FileOptions.prototype.phpGenericServices = false
FileOptions.prototype.deprecated = false
FileOptions.prototype.ccEnableArenas = false
FileOptions.prototype.objcClassPrefix = ""
FileOptions.prototype.csharpNamespace = ""
FileOptions.prototype.swiftPrefix = ""
FileOptions.prototype.phpClassPrefix = ""
FileOptions.prototype.phpNamespace = ""
FileOptions.prototype.phpMetadataNamespace = ""
FileOptions.prototype.rubyPackage = ""
FileOptions.prototype.uninterpretedOption = null
FileOptions.prototype[".google.api.resourceDefinition"] = null

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
    uninterpretedOption?: (IUninterpretedOption[] | null)
    ".google.api.resource"?: ($resource.IResourceDescriptor | null)
}

export class MessageOptions extends $sisyphus.Message<IMessageOptions> implements IMessageOptions {
    messageSetWireFormat!: boolean
    noStandardDescriptorAccessor!: boolean
    deprecated!: boolean
    mapEntry!: boolean
    uninterpretedOption!: (IUninterpretedOption[] | null)
    ".google.api.resource"!: ($resource.IResourceDescriptor | null)
    get $reflection() {
        return MessageOptions.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.MessageOptions")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): MessageOptions {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.messageSetWireFormat = reader.bool()
                    break
                case 2:
                    result.noStandardDescriptorAccessor = reader.bool()
                    break
                case 3:
                    result.deprecated = reader.bool()
                    break
                case 7:
                    result.mapEntry = reader.bool()
                    break
                case 999:
                    if (!result.uninterpretedOption) result.uninterpretedOption = []
                    result.uninterpretedOption.push(UninterpretedOption.decodeDelimited(reader))
                    break
                case 1053:
                    result[".google.api.resource"] = $resource.ResourceDescriptor.decodeDelimited(reader)
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): MessageOptions {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IMessageOptions): MessageOptions {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "messageSetWireFormat":
                    result[key] = Boolean(properties[key])
                    break
                case "noStandardDescriptorAccessor":
                    result[key] = Boolean(properties[key])
                    break
                case "deprecated":
                    result[key] = Boolean(properties[key])
                    break
                case "mapEntry":
                    result[key] = Boolean(properties[key])
                    break
                case "uninterpretedOption":
                    result[key] = UninterpretedOption.create(properties[key])
                    break
                case ".google.api.resource":
                    result[key] = $resource.ResourceDescriptor.create(properties[key])
                    break
            }
        }
        return result
    }
}
MessageOptions.prototype.messageSetWireFormat = false
MessageOptions.prototype.noStandardDescriptorAccessor = false
MessageOptions.prototype.deprecated = false
MessageOptions.prototype.mapEntry = false
MessageOptions.prototype.uninterpretedOption = null
MessageOptions.prototype[".google.api.resource"] = null


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
    uninterpretedOption?: (IUninterpretedOption[] | null)
    ".google.api.resourceReference"?: ($resource.IResourceReference | null)
    ".google.api.fieldBehavior"?: ($fieldBehavior.FieldBehavior[] | null)
}

export class FieldOptions extends $sisyphus.Message<IFieldOptions> implements IFieldOptions {
    ctype!: FieldOptions.CType
    packed!: boolean
    jstype!: FieldOptions.JSType
    lazy!: boolean
    deprecated!: boolean
    weak!: boolean
    uninterpretedOption!: (IUninterpretedOption[] | null)
    ".google.api.resourceReference"!: ($resource.IResourceReference | null)
    ".google.api.fieldBehavior"!: ($fieldBehavior.FieldBehavior[] | null)
    get $reflection() {
        return FieldOptions.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.FieldOptions")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): FieldOptions {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.ctype = reader.uint32()
                    break
                case 2:
                    result.packed = reader.bool()
                    break
                case 6:
                    result.jstype = reader.uint32()
                    break
                case 5:
                    result.lazy = reader.bool()
                    break
                case 3:
                    result.deprecated = reader.bool()
                    break
                case 10:
                    result.weak = reader.bool()
                    break
                case 999:
                    if (!result.uninterpretedOption) result.uninterpretedOption = []
                    result.uninterpretedOption.push(UninterpretedOption.decodeDelimited(reader))
                    break
                case 1055:
                    result[".google.api.resourceReference"] = $resource.ResourceReference.decodeDelimited(reader)
                    break
                case 1052:
                    if (!result[".google.api.fieldBehavior"]) result[".google.api.fieldBehavior"] = []
                    result[".google.api.fieldBehavior"].push(reader.uint32())
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): FieldOptions {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IFieldOptions): FieldOptions {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "ctype":
                    result[key] = typeof properties[key] === "number" ? properties[key] : FieldOptions.CType[properties[key]]
                    break
                case "packed":
                    result[key] = Boolean(properties[key])
                    break
                case "jstype":
                    result[key] = typeof properties[key] === "number" ? properties[key] : FieldOptions.JSType[properties[key]]
                    break
                case "lazy":
                    result[key] = Boolean(properties[key])
                    break
                case "deprecated":
                    result[key] = Boolean(properties[key])
                    break
                case "weak":
                    result[key] = Boolean(properties[key])
                    break
                case "uninterpretedOption":
                    result[key] = UninterpretedOption.create(properties[key])
                    break
                case ".google.api.resourceReference":
                    result[key] = $resource.ResourceReference.create(properties[key])
                    break
                case ".google.api.fieldBehavior":
                    result[key] = typeof properties[key] === "number" ? properties[key] : $fieldBehavior.FieldBehavior[properties[key]]
                    break
            }
        }
        return result
    }
}
FieldOptions.prototype.ctype = FieldOptions.CType.STRING
FieldOptions.prototype.packed = false
FieldOptions.prototype.jstype = FieldOptions.JSType.JS_NORMAL
FieldOptions.prototype.lazy = false
FieldOptions.prototype.deprecated = false
FieldOptions.prototype.weak = false
FieldOptions.prototype.uninterpretedOption = null
FieldOptions.prototype[".google.api.resourceReference"] = null
FieldOptions.prototype[".google.api.fieldBehavior"] = null

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
    uninterpretedOption?: (IUninterpretedOption[] | null)
}

export class OneofOptions extends $sisyphus.Message<IOneofOptions> implements IOneofOptions {
    uninterpretedOption!: (IUninterpretedOption[] | null)
    get $reflection() {
        return OneofOptions.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.OneofOptions")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): OneofOptions {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 999:
                    if (!result.uninterpretedOption) result.uninterpretedOption = []
                    result.uninterpretedOption.push(UninterpretedOption.decodeDelimited(reader))
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): OneofOptions {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IOneofOptions): OneofOptions {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "uninterpretedOption":
                    result[key] = UninterpretedOption.create(properties[key])
                    break
            }
        }
        return result
    }
}
OneofOptions.prototype.uninterpretedOption = null


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
    uninterpretedOption?: (IUninterpretedOption[] | null)
}

export class EnumOptions extends $sisyphus.Message<IEnumOptions> implements IEnumOptions {
    allowAlias!: boolean
    deprecated!: boolean
    uninterpretedOption!: (IUninterpretedOption[] | null)
    get $reflection() {
        return EnumOptions.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.EnumOptions")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): EnumOptions {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 2:
                    result.allowAlias = reader.bool()
                    break
                case 3:
                    result.deprecated = reader.bool()
                    break
                case 999:
                    if (!result.uninterpretedOption) result.uninterpretedOption = []
                    result.uninterpretedOption.push(UninterpretedOption.decodeDelimited(reader))
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): EnumOptions {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IEnumOptions): EnumOptions {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "allowAlias":
                    result[key] = Boolean(properties[key])
                    break
                case "deprecated":
                    result[key] = Boolean(properties[key])
                    break
                case "uninterpretedOption":
                    result[key] = UninterpretedOption.create(properties[key])
                    break
            }
        }
        return result
    }
}
EnumOptions.prototype.allowAlias = false
EnumOptions.prototype.deprecated = false
EnumOptions.prototype.uninterpretedOption = null


export interface IEnumValueOptions {
    /**
     * Is this enum value deprecated?
     * Depending on the target platform, this can emit Deprecated annotations
     * for the enum value, or it will be completely ignored; in the very least,
     * this is a formalization for deprecating enum values.
     */
    deprecated?: boolean
    /** The parser stores options it doesn't recognize here. See above. */
    uninterpretedOption?: (IUninterpretedOption[] | null)
    ".sisyphus.protobuf.string"?: string
}

export class EnumValueOptions extends $sisyphus.Message<IEnumValueOptions> implements IEnumValueOptions {
    deprecated!: boolean
    uninterpretedOption!: (IUninterpretedOption[] | null)
    ".sisyphus.protobuf.string"!: string
    get $reflection() {
        return EnumValueOptions.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.EnumValueOptions")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): EnumValueOptions {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.deprecated = reader.bool()
                    break
                case 999:
                    if (!result.uninterpretedOption) result.uninterpretedOption = []
                    result.uninterpretedOption.push(UninterpretedOption.decodeDelimited(reader))
                    break
                case 26051:
                    result[".sisyphus.protobuf.string"] = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): EnumValueOptions {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IEnumValueOptions): EnumValueOptions {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "deprecated":
                    result[key] = Boolean(properties[key])
                    break
                case "uninterpretedOption":
                    result[key] = UninterpretedOption.create(properties[key])
                    break
                case ".sisyphus.protobuf.string":
                    result[key] = String(properties[key])
                    break
            }
        }
        return result
    }
}
EnumValueOptions.prototype.deprecated = false
EnumValueOptions.prototype.uninterpretedOption = null
EnumValueOptions.prototype[".sisyphus.protobuf.string"] = ""


export interface IServiceOptions {
    /**
     * Is this service deprecated?
     * Depending on the target platform, this can emit Deprecated annotations
     * for the service, or it will be completely ignored; in the very least,
     * this is a formalization for deprecating services.
     */
    deprecated?: boolean
    /** The parser stores options it doesn't recognize here. See above. */
    uninterpretedOption?: (IUninterpretedOption[] | null)
    ".google.api.defaultHost"?: string
    ".google.api.oauthScopes"?: string
    ".sisyphus.api.metadata"?: ($serviceMeta.IServiceMetadata | null)
}

export class ServiceOptions extends $sisyphus.Message<IServiceOptions> implements IServiceOptions {
    deprecated!: boolean
    uninterpretedOption!: (IUninterpretedOption[] | null)
    ".google.api.defaultHost"!: string
    ".google.api.oauthScopes"!: string
    ".sisyphus.api.metadata"!: ($serviceMeta.IServiceMetadata | null)
    get $reflection() {
        return ServiceOptions.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.ServiceOptions")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ServiceOptions {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 33:
                    result.deprecated = reader.bool()
                    break
                case 999:
                    if (!result.uninterpretedOption) result.uninterpretedOption = []
                    result.uninterpretedOption.push(UninterpretedOption.decodeDelimited(reader))
                    break
                case 1049:
                    result[".google.api.defaultHost"] = reader.string()
                    break
                case 1050:
                    result[".google.api.oauthScopes"] = reader.string()
                    break
                case 26051:
                    result[".sisyphus.api.metadata"] = $serviceMeta.ServiceMetadata.decodeDelimited(reader)
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ServiceOptions {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IServiceOptions): ServiceOptions {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "deprecated":
                    result[key] = Boolean(properties[key])
                    break
                case "uninterpretedOption":
                    result[key] = UninterpretedOption.create(properties[key])
                    break
                case ".google.api.defaultHost":
                    result[key] = String(properties[key])
                    break
                case ".google.api.oauthScopes":
                    result[key] = String(properties[key])
                    break
                case ".sisyphus.api.metadata":
                    result[key] = $serviceMeta.ServiceMetadata.create(properties[key])
                    break
            }
        }
        return result
    }
}
ServiceOptions.prototype.deprecated = false
ServiceOptions.prototype.uninterpretedOption = null
ServiceOptions.prototype[".google.api.defaultHost"] = ""
ServiceOptions.prototype[".google.api.oauthScopes"] = ""
ServiceOptions.prototype[".sisyphus.api.metadata"] = null


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
    uninterpretedOption?: (IUninterpretedOption[] | null)
    ".bybutter.incubator.common.v1.access"?: ($accessControl.IAccessControl | null)
    ".google.api.http"?: ($http.IHttpRule | null)
    ".google.api.methodSignature"?: (string[] | null)
    ".google.longrunning.operationInfo"?: ($operations.IOperationInfo | null)
}

export class MethodOptions extends $sisyphus.Message<IMethodOptions> implements IMethodOptions {
    deprecated!: boolean
    idempotencyLevel!: MethodOptions.IdempotencyLevel
    uninterpretedOption!: (IUninterpretedOption[] | null)
    ".bybutter.incubator.common.v1.access"!: ($accessControl.IAccessControl | null)
    ".google.api.http"!: ($http.IHttpRule | null)
    ".google.api.methodSignature"!: (string[] | null)
    ".google.longrunning.operationInfo"!: ($operations.IOperationInfo | null)
    get $reflection() {
        return MethodOptions.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.MethodOptions")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): MethodOptions {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 33:
                    result.deprecated = reader.bool()
                    break
                case 34:
                    result.idempotencyLevel = reader.uint32()
                    break
                case 999:
                    if (!result.uninterpretedOption) result.uninterpretedOption = []
                    result.uninterpretedOption.push(UninterpretedOption.decodeDelimited(reader))
                    break
                case 26051:
                    result[".bybutter.incubator.common.v1.access"] = $accessControl.AccessControl.decodeDelimited(reader)
                    break
                case 72295728:
                    result[".google.api.http"] = $http.HttpRule.decodeDelimited(reader)
                    break
                case 1051:
                    if (!result[".google.api.methodSignature"]) result[".google.api.methodSignature"] = []
                    result[".google.api.methodSignature"].push(reader.string())
                    break
                case 1049:
                    result[".google.longrunning.operationInfo"] = $operations.OperationInfo.decodeDelimited(reader)
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): MethodOptions {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IMethodOptions): MethodOptions {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "deprecated":
                    result[key] = Boolean(properties[key])
                    break
                case "idempotencyLevel":
                    result[key] = typeof properties[key] === "number" ? properties[key] : MethodOptions.IdempotencyLevel[properties[key]]
                    break
                case "uninterpretedOption":
                    result[key] = UninterpretedOption.create(properties[key])
                    break
                case ".bybutter.incubator.common.v1.access":
                    result[key] = $accessControl.AccessControl.create(properties[key])
                    break
                case ".google.api.http":
                    result[key] = $http.HttpRule.create(properties[key])
                    break
                case ".google.api.methodSignature":
                    result[key] = String(properties[key])
                    break
                case ".google.longrunning.operationInfo":
                    result[key] = $operations.OperationInfo.create(properties[key])
                    break
            }
        }
        return result
    }
}
MethodOptions.prototype.deprecated = false
MethodOptions.prototype.idempotencyLevel = MethodOptions.IdempotencyLevel.IDEMPOTENCY_UNKNOWN
MethodOptions.prototype.uninterpretedOption = null
MethodOptions.prototype[".bybutter.incubator.common.v1.access"] = null
MethodOptions.prototype[".google.api.http"] = null
MethodOptions.prototype[".google.api.methodSignature"] = null
MethodOptions.prototype[".google.longrunning.operationInfo"] = null

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
    name?: (UninterpretedOption.INamePart[] | null)
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

export class UninterpretedOption extends $sisyphus.Message<IUninterpretedOption> implements IUninterpretedOption {
    name!: (UninterpretedOption.INamePart[] | null)
    identifierValue!: string
    positiveIntValue!: $protobuf.Long
    negativeIntValue!: $protobuf.Long
    doubleValue!: number
    stringValue!: Uint8Array
    aggregateValue!: string
    get $reflection() {
        return UninterpretedOption.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.UninterpretedOption")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): UninterpretedOption {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 2:
                    if (!result.name) result.name = []
                    result.name.push(UninterpretedOption.NamePart.decodeDelimited(reader))
                    break
                case 3:
                    result.identifierValue = reader.string()
                    break
                case 4:
                    result.positiveIntValue = reader.uint64()
                    break
                case 5:
                    result.negativeIntValue = reader.int64()
                    break
                case 6:
                    result.doubleValue = reader.double()
                    break
                case 7:
                    result.stringValue = reader.bytes()
                    break
                case 8:
                    result.aggregateValue = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): UninterpretedOption {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IUninterpretedOption): UninterpretedOption {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "name":
                    result[key] = UninterpretedOption.NamePart.create(properties[key])
                    break
                case "identifierValue":
                    result[key] = String(properties[key])
                    break
                case "positiveIntValue":
                    result[key] = $sisyphus.Long.fromValue(properties[key])
                    break
                case "negativeIntValue":
                    result[key] = $sisyphus.Long.fromValue(properties[key])
                    break
                case "doubleValue":
                    result[key] = Number(properties[key])
                    break
                case "stringValue":
                    break
                case "aggregateValue":
                    result[key] = String(properties[key])
                    break
            }
        }
        return result
    }
}
UninterpretedOption.prototype.name = null
UninterpretedOption.prototype.identifierValue = ""
UninterpretedOption.prototype.positiveIntValue = $sisyphus.Long.UZERO
UninterpretedOption.prototype.negativeIntValue = $sisyphus.Long.ZERO
UninterpretedOption.prototype.doubleValue = 0
UninterpretedOption.prototype.stringValue = $sisyphus.emptyBytes
UninterpretedOption.prototype.aggregateValue = ""

export namespace UninterpretedOption {

    /**
     * The name of the uninterpreted option.  Each string represents a segment in
     * a dot-separated name.  is_extension is true iff a segment represents an
     * extension (denoted with parentheses in options specs in .proto files).
     * E.g.,{ ["foo", false], ["bar.baz", true], ["qux", false] } represents
     * "foo.(bar.baz).qux".
     */
    export interface INamePart {
        namePart?: string
        isExtension?: boolean
    }

    export class NamePart extends $sisyphus.Message<INamePart> implements INamePart {
        namePart!: string
        isExtension!: boolean
        get $reflection() {
            return NamePart.reflection
        }

        static readonly reflection = $reflection.root.lookupType(".google.protobuf.UninterpretedOption.NamePart")
        static decode(reader: Uint8Array | $protobuf.Reader, length?: number): NamePart {
            if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
            const end = length === undefined ? reader.len : reader.pos + length
            const result = new this()
            while(reader.pos < end) {
                let tag = reader.uint32()
                switch(tag>>>3) {
                    case 1:
                        result.namePart = reader.string()
                        break
                    case 2:
                        result.isExtension = reader.bool()
                        break
                }
            }
            return result
        }

        static decodeDelimited(reader: Uint8Array | $protobuf.Reader): NamePart {
            if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
            return this.decode(reader, reader.uint32())
        }
        static create(properties?: INamePart): NamePart {
            if(properties instanceof this) return properties
            const result = new this()
            if (!properties) return result
            for (const key in properties) {
                if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
                switch(key) {
                    case "namePart":
                        result[key] = String(properties[key])
                        break
                    case "isExtension":
                        result[key] = Boolean(properties[key])
                        break
                }
            }
            return result
        }
    }
    NamePart.prototype.namePart = ""
    NamePart.prototype.isExtension = false
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
    location?: (SourceCodeInfo.ILocation[] | null)
}

export class SourceCodeInfo extends $sisyphus.Message<ISourceCodeInfo> implements ISourceCodeInfo {
    location!: (SourceCodeInfo.ILocation[] | null)
    get $reflection() {
        return SourceCodeInfo.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.SourceCodeInfo")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): SourceCodeInfo {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    if (!result.location) result.location = []
                    result.location.push(SourceCodeInfo.Location.decodeDelimited(reader))
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): SourceCodeInfo {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: ISourceCodeInfo): SourceCodeInfo {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "location":
                    result[key] = SourceCodeInfo.Location.create(properties[key])
                    break
            }
        }
        return result
    }
}
SourceCodeInfo.prototype.location = null

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
        path?: (number[] | null)
        /**
         * Always has exactly three or four elements: start line, start column,
         * end line (optional, otherwise assumed same as start line), end column.
         * These are packed into a single field for efficiency.  Note that line
         * and column numbers are zero-based -- typically you will want to add
         * 1 to each before displaying to a user.
         */
        span?: (number[] | null)
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
        leadingDetachedComments?: (string[] | null)
    }

    export class Location extends $sisyphus.Message<ILocation> implements ILocation {
        path!: (number[] | null)
        span!: (number[] | null)
        leadingComments!: string
        trailingComments!: string
        leadingDetachedComments!: (string[] | null)
        get $reflection() {
            return Location.reflection
        }

        static readonly reflection = $reflection.root.lookupType(".google.protobuf.SourceCodeInfo.Location")
        static decode(reader: Uint8Array | $protobuf.Reader, length?: number): Location {
            if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
            const end = length === undefined ? reader.len : reader.pos + length
            const result = new this()
            while(reader.pos < end) {
                let tag = reader.uint32()
                switch(tag>>>3) {
                    case 1:
                        if (!result.path) result.path = []
                        result.path.push(reader.int32())
                        break
                    case 2:
                        if (!result.span) result.span = []
                        result.span.push(reader.int32())
                        break
                    case 3:
                        result.leadingComments = reader.string()
                        break
                    case 4:
                        result.trailingComments = reader.string()
                        break
                    case 6:
                        if (!result.leadingDetachedComments) result.leadingDetachedComments = []
                        result.leadingDetachedComments.push(reader.string())
                        break
                }
            }
            return result
        }

        static decodeDelimited(reader: Uint8Array | $protobuf.Reader): Location {
            if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
            return this.decode(reader, reader.uint32())
        }
        static create(properties?: ILocation): Location {
            if(properties instanceof this) return properties
            const result = new this()
            if (!properties) return result
            for (const key in properties) {
                if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
                switch(key) {
                    case "path":
                        result[key] = Number(properties[key])
                        break
                    case "span":
                        result[key] = Number(properties[key])
                        break
                    case "leadingComments":
                        result[key] = String(properties[key])
                        break
                    case "trailingComments":
                        result[key] = String(properties[key])
                        break
                    case "leadingDetachedComments":
                        result[key] = String(properties[key])
                        break
                }
            }
            return result
        }
    }
    Location.prototype.path = null
    Location.prototype.span = null
    Location.prototype.leadingComments = ""
    Location.prototype.trailingComments = ""
    Location.prototype.leadingDetachedComments = null
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
    annotation?: (GeneratedCodeInfo.IAnnotation[] | null)
}

export class GeneratedCodeInfo extends $sisyphus.Message<IGeneratedCodeInfo> implements IGeneratedCodeInfo {
    annotation!: (GeneratedCodeInfo.IAnnotation[] | null)
    get $reflection() {
        return GeneratedCodeInfo.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.GeneratedCodeInfo")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): GeneratedCodeInfo {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    if (!result.annotation) result.annotation = []
                    result.annotation.push(GeneratedCodeInfo.Annotation.decodeDelimited(reader))
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): GeneratedCodeInfo {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IGeneratedCodeInfo): GeneratedCodeInfo {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "annotation":
                    result[key] = GeneratedCodeInfo.Annotation.create(properties[key])
                    break
            }
        }
        return result
    }
}
GeneratedCodeInfo.prototype.annotation = null

export namespace GeneratedCodeInfo {

    export interface IAnnotation {
        /**
         * Identifies the element in the original source .proto file. This field
         * is formatted the same as SourceCodeInfo.Location.path.
         */
        path?: (number[] | null)
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

    export class Annotation extends $sisyphus.Message<IAnnotation> implements IAnnotation {
        path!: (number[] | null)
        sourceFile!: string
        begin!: number
        end!: number
        get $reflection() {
            return Annotation.reflection
        }

        static readonly reflection = $reflection.root.lookupType(".google.protobuf.GeneratedCodeInfo.Annotation")
        static decode(reader: Uint8Array | $protobuf.Reader, length?: number): Annotation {
            if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
            const end = length === undefined ? reader.len : reader.pos + length
            const result = new this()
            while(reader.pos < end) {
                let tag = reader.uint32()
                switch(tag>>>3) {
                    case 1:
                        if (!result.path) result.path = []
                        result.path.push(reader.int32())
                        break
                    case 2:
                        result.sourceFile = reader.string()
                        break
                    case 3:
                        result.begin = reader.int32()
                        break
                    case 4:
                        result.end = reader.int32()
                        break
                }
            }
            return result
        }

        static decodeDelimited(reader: Uint8Array | $protobuf.Reader): Annotation {
            if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
            return this.decode(reader, reader.uint32())
        }
        static create(properties?: IAnnotation): Annotation {
            if(properties instanceof this) return properties
            const result = new this()
            if (!properties) return result
            for (const key in properties) {
                if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
                switch(key) {
                    case "path":
                        result[key] = Number(properties[key])
                        break
                    case "sourceFile":
                        result[key] = String(properties[key])
                        break
                    case "begin":
                        result[key] = Number(properties[key])
                        break
                    case "end":
                        result[key] = Number(properties[key])
                        break
                }
            }
            return result
        }
    }
    Annotation.prototype.path = null
    Annotation.prototype.sourceFile = ""
    Annotation.prototype.begin = 0
    Annotation.prototype.end = 0
}