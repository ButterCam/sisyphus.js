import {FileSpec} from "./file";
import {GeneratorSpec} from "./generator";
import {Enum, Field, FieldBase, MapField, Type, util} from "protobufjs";
import {normalizeComment} from "../utils";
import {EnumSpec} from "./enum";
import {CodeBuilder} from "../string";
import safeProp = util.safeProp;

export class TypeSpec implements GeneratorSpec {
    private readonly _parent: TypeSpec | FileSpec
    private readonly _reflection: Type

    constructor(parent: TypeSpec | FileSpec, reflection: Type) {
        this._parent = parent
        this._reflection = reflection
    }

    get parent(): TypeSpec | FileSpec {
        return this._parent
    }

    get file(): FileSpec {
        let parent = this._parent
        while (!(parent instanceof FileSpec)) {
            parent = parent.parent
        }
        return parent
    }

    private get wellknown(): boolean {
        switch (this._reflection.fullName) {
            case ".google.protobuf.Any":
            case ".google.protobuf.Duration":
            case ".google.protobuf.Empty":
            case ".google.protobuf.FieldMask":
            case ".google.protobuf.Struct":
            case ".google.protobuf.Value":
            case ".google.protobuf.Timestamp":
            case ".google.protobuf.DoubleValue":
            case ".google.protobuf.FloatValue":
            case ".google.protobuf.Int64Value":
            case ".google.protobuf.UInt64Value":
            case ".google.protobuf.Int32Value":
            case ".google.protobuf.UInt32Value":
            case ".google.protobuf.BoolValue":
            case ".google.protobuf.StringValue":
            case ".google.protobuf.BytesValue":
            case ".google.protobuf.ListValue":
                return true
            default:
                return false
        }
    }

    generate(codeBuilder: CodeBuilder) {
        this.generateInterface(codeBuilder.ln())
        this.generateClass(codeBuilder.ln())
        this.generateNamespace(codeBuilder.ln())
    }

    private fieldType(field: FieldBase | string, protocol: boolean): string {
        if (typeof field === "string") {
            switch (field) {
                case "string":
                    return "string"
                case "bytes":
                    return "Uint8Array"
                case "bool":
                    return "boolean"
                case "double":
                case "float":
                case "int32":
                case "uint32":
                case "sint32":
                case "fixed32":
                case "sfixed32":
                    return "number"
                case "int64":
                case "uint64":
                case "sint64":
                case "fixed64":
                case "sfixed64":
                    return `$${this.file.importProtobuf()}.Long`
                case ".google.protobuf.Any":
                    return `$${this.file.importProtobuf()}.Message`
                default:
                    return protocol ? this.file.typename(this._reflection.root.lookupTypeOrEnum(field)) : this.file.classname(this._reflection.root.lookupTypeOrEnum(field))
            }
        }

        if (field.map && field instanceof MapField) {
            return `{ readonly [k: ${this.fieldType(field.keyType, protocol)}]: ${this.fieldType(field.type, protocol)} }`
        }

        return this.fieldType(field.resolvedType?.fullName ? field.resolvedType?.fullName : field.type, protocol)
    }

    private tsFieldType(field: FieldBase, protocol: boolean = false): string {
        if (field.map && field instanceof MapField) {
            return `${this.fieldType(field, protocol)}`
        }
        if (field.repeated) {
            return `readonly ${this.fieldType(field, protocol)}[]`
        }
        if (field.resolvedType instanceof Type) {
            return `${this.fieldType(field, protocol)}`
        }
        return this.fieldType(field, protocol)
    }

    private fieldName(field: Field): string {
        if (field.name.startsWith(".")) {
            return `"${field.name}"`
        }
        return field.name
    }

    private generateInterface(b: CodeBuilder) {
        if (this._reflection.comment != null) {
            b.appendLn(normalizeComment(this._reflection.comment))
        }

        if (this.wellknown) {
            b.beginBlock(`export interface I${this._reflection.name} extends $${this.file.importSisyphus()}.I${this._reflection.name}`)
            b.endBlock()
        } else {
            b.beginBlock(`export interface I${this._reflection.name}`)
            for (let field of this._reflection.fieldsArray) {
                if (field.comment != null) {
                    b.appendLn(normalizeComment(field.comment))
                }
                if (field.required) {
                    b.appendLn(`${this.fieldName(field)}: ${this.tsFieldType(field, true)}`)
                } else {
                    b.appendLn(`${this.fieldName(field)}?: ${this.tsFieldType(field, true)}`)
                }
            }
            for (let oneOf of this._reflection.oneofsArray) {
                if (oneOf.comment != null) {
                    b.appendLn(normalizeComment(oneOf.comment))
                }
                b.appendLn(`${oneOf.name}?: string`)
            }
            b.endBlock()
        }
    }

    private generateClass(b: CodeBuilder) {
        if (this.wellknown) {
            b.beginBlock(`export class ${this._reflection.name} extends $${this.file.importSisyphus()}.${this._reflection.name} implements I${this._reflection.name}`)
            b.endBlock()
            b.appendLn(`$${this.file.importReflection()}.root.lookupType("${this._reflection.fullName}").messageCtor = ${this._reflection.name}`)
        } else {
            b.beginBlock(`export class ${this._reflection.name} extends $${this.file.importSisyphus()}.Message<${this._reflection.name}> implements I${this._reflection.name}`)
            for (let field of this._reflection.fieldsArray) {
                b.appendLn(`${this.fieldName(field)}!: ${this.tsFieldType(field)}`)
            }
            for (let oneOf of this._reflection.oneofsArray) {
                b.appendLn(`${oneOf.name}?: string\n`)
            }
            b.beginBlock(`static create(properties?: I${this._reflection.name}): ${this._reflection.name}`)
            b.appendLn(`return <any>super.create(properties)`)
            b.endBlock()
            b.beginBlock(`static encode(message?: I${this._reflection.name}, writer?: $${this.file.importProtobuf()}.Writer): $${this.file.importProtobuf()}.Writer`)
            b.appendLn(`return super.encode(<any>message, writer)`)
            b.endBlock()
            b.beginBlock(`static encodeDelimited(message?: I${this._reflection.name}, writer?: $${this.file.importProtobuf()}.Writer): $${this.file.importProtobuf()}.Writer`)
            b.appendLn(`return super.encodeDelimited(<any>message, writer)`)
            b.endBlock()
            b.beginBlock(`static decode(reader?: ($${this.file.importProtobuf()}.Reader | Uint8Array), length?: number): ${this._reflection.name}`)
            b.appendLn(`return <any>super.decode(reader, length)`)
            b.endBlock()
            b.beginBlock(`static decodeDelimited(reader?: ($${this.file.importProtobuf()}.Reader | Uint8Array)): ${this._reflection.name}`)
            b.appendLn(`return <any>super.decodeDelimited(reader)`)
            b.endBlock()
            b.beginBlock(`static fromJson(object?: $${this.file.importSisyphus()}.JsonValue): ${this._reflection.name}`)
            b.appendLn(`return <any>super.fromJson(object)`)
            b.endBlock()
            b.beginBlock(`static toJson(message?: I${this._reflection.name}): $${this.file.importSisyphus()}.JsonValue`)
            b.appendLn(`return super.toJson(<any>message)`)
            b.endBlock()
            b.endBlock()
            b.appendLn(`$${this.file.importReflection()}.root.lookupType("${this._reflection.fullName}").messageCtor = ${this._reflection.name}`)
        }
    }

    private generateNamespace(b: CodeBuilder) {
        if (this._reflection.nestedArray.length + this._reflection.nestedArray.length == 0) return

        b.beginBlock(`export namespace ${this._reflection.name}`)
        for (let element of this._reflection.nestedArray) {
            if (element instanceof Enum) {
                const type = new EnumSpec(this, element)
                type.generate(b)
            }
        }
        for (let element of this._reflection.nestedArray) {
            if (element instanceof Type) {
                const type = new TypeSpec(this, element)
                type.generate(b)
            }
        }
        b.endBlock()
    }
}