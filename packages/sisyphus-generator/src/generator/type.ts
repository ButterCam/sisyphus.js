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

    private fieldDefaultValue(field: FieldBase): string {
        if (field.map && field instanceof MapField) return `$${this.file.importSisyphus()}.emptyMap`
        if (field.repeated) return `$${this.file.importSisyphus()}.emptyList`
        if (field.resolvedType instanceof Type) return ""
        if (field.resolvedType instanceof Enum) {
            if (!field.resolvedType.valuesById[0]) {
                return "undefined"
            } else {
                return `${this.file.typename(field.resolvedType)}.${field.resolvedType.valuesById[0]}`
            }
        }

        switch (field.type) {
            case "string":
                return "\"\""
            case "bytes":
                return `$${this.file.importSisyphus()}.emptyBytes`
            case "bool":
                return "false"
            case "double":
            case "float":
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32":
                return "0"
            case "int64":
            case "sint64":
            case "sfixed64":
                return `$${this.file.importSisyphus()}.Long.ZERO`
            case "uint64":
            case "fixed64":
                return `$${this.file.importSisyphus()}.Long.UZERO`
            default:
                return ""
        }
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
            //b.beginBlock("get $type()")
            //b.appendLn(`return ${this._reflection.name}.$type`)
            //b.endBlock()
            //b.ln()
            //b.appendLn(`static readonly $type = $${this.file.importReflection()}.root.lookupType("${this._reflection.fullName}")`)
            b.endBlock()
            b.appendLn(`$${this.file.importReflection()}.root.lookupType("${this._reflection.fullName}").messageCtor = ${this._reflection.name}`)
            //for (let oneOf of this._reflection.oneofsArray) {
            //    const fields = oneOf.fieldsArray.map(field => `"${this.fieldName(field)}"`).join(", ")
            //    b.appendLn(`Object.defineProperty(${this._reflection.name}.prototype, "${oneOf.name}", $${this.file.importSisyphus()}.oneOfProperty(${fields}))`)
            //}
            //for (let field of this._reflection.fieldsArray) {
            //    b.appendLn(`${this._reflection.name}.prototype${safeProp(field.name)} = ${this._reflection.name}.$type.fieldsById[${field.id}].defaultValue`)
            //}
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

    private generateDecoder(b: CodeBuilder) {
        b.beginBlock(`static decode(reader: Uint8Array | $${this.file.importProtobuf()}.Reader, length?: number): ${this._reflection.name}`)
        b.appendLn(`if(!(reader instanceof $${this.file.importProtobuf()}.Reader)) reader = $${this.file.importProtobuf()}.Reader.create(reader)`)
        b.appendLn(`const end = length === undefined ? reader.len : reader.pos + length`)
        b.appendLn(`const result = new this()`)
        for (let field of this._reflection.fieldsArray) {
            if (field.map) {
                b.appendLn(`let key: any, value: any`)
                break
            }
        }
        b.beginBlock("while(reader.pos < end)")
        b.appendLn("let tag = reader.uint32()")
        b.beginBlock(`switch(tag>>>3)`)

        for (let field of this._reflection.fieldsArray) {
            const fieldRef = `result${util.safeProp(field.name)}`
            b.appendLn(`case ${field.id}:`).indent()
            if (field.map) {
                b.appendLn(`if (!${fieldRef}) ${fieldRef} = {};`)
                if (field.resolvedType != null) {
                    b.appendLn(`[key, value] = $${this.file.importSisyphus()}.readMapEntry(this.reflection.fields["${field.name}"], reader, ${this.file.classname(field.resolvedType)})`)
                } else {
                    b.appendLn(`[key, value] = $${this.file.importSisyphus()}.readMapEntry(this.reflection.fields["${field.name}"], reader)`)
                }
                b.appendLn(`${fieldRef}[key] = value`)
            } else if (field.repeated) {
                b.appendLn(`if (!${fieldRef}) ${fieldRef} = []`)
                if (field.resolvedType != null) {
                    if (field.resolvedType instanceof Type) {
                        b.appendLn(`${fieldRef}.push(${this.file.classname(field.resolvedType)}.decodeDelimited(reader))`)
                    } else {
                        b.appendLn(`${fieldRef}.push(reader.uint32())`)
                    }
                } else {
                    b.appendLn(`${fieldRef}.push(reader.${field.type}())`)
                }
            } else if (field.resolvedType != null) {
                if (field.resolvedType instanceof Type) {
                    b.appendLn(`${fieldRef} = ${this.file.classname(field.resolvedType)}.decodeDelimited(reader)`)
                } else {
                    b.appendLn(`${fieldRef} = reader.uint32()`)
                }
            } else {
                b.appendLn(`${fieldRef} = reader.${field.type}()`)
            }
            b.appendLn("break").deindent()
        }
        b.endBlock()
        b.endBlock()
        b.appendLn("return result")
        b.endBlock()
        b.ln()
        b.beginBlock(`static decodeDelimited(reader: Uint8Array | $${this.file.importProtobuf()}.Reader): ${this._reflection.name}`)
        b.appendLn(`if(!(reader instanceof $${this.file.importProtobuf()}.Reader)) reader = $${this.file.importProtobuf()}.Reader.create(reader)`)
        b.appendLn(`return this.decode(reader, reader.uint32())`)
        b.endBlock()
    }

    private generateCreate(b: CodeBuilder) {
        b.beginBlock(`static create(properties?: I${this._reflection.name}): ${this._reflection.name}`)
        b.appendLn(`if(properties instanceof this) return properties`)
        b.appendLn(`const result = new this()`)
        b.appendLn(`if (!properties) return result`)
        for (let field of this._reflection.fieldsArray) {
            if (field.map) {
                b.beginBlock(`if(properties.hasOwnProperty("${field.name}") && properties${safeProp(field.name)} != null)`)
                b.appendLn(`result${safeProp(field.name)} = {}`)
                if (field.resolvedType != null && field.resolvedType instanceof Type) {
                    b.appendLn(`for (let key in properties${safeProp(field.name)}) result${safeProp(field.name)}[key] = ${this.file.classname(field.resolvedType)}.create(properties${safeProp(field.name)}[key])`)
                } else {
                    b.appendLn(`for (let key in properties${safeProp(field.name)}) result${safeProp(field.name)}[key] = properties${safeProp(field.name)}[key]`)
                }
                b.endBlock()
                break
            }
            if (field.resolvedType != null && field.resolvedType instanceof Type) {
                if (field.repeated) {
                    b.appendLn(`if(properties.hasOwnProperty("${field.name}") && properties${safeProp(field.name)} != null) result${safeProp(field.name)} = properties${safeProp(field.name)}.map(it => ${this.file.classname(field.resolvedType)}.create(it))`)
                } else {
                    b.appendLn(`if(properties.hasOwnProperty("${field.name}") && properties${safeProp(field.name)} != null) result${safeProp(field.name)} = ${this.file.classname(field.resolvedType)}.create(properties${safeProp(field.name)})`)
                }
            } else {
                b.appendLn(`if(properties.hasOwnProperty("${field.name}") && properties${safeProp(field.name)} !== undefined) result${safeProp(field.name)} = properties${safeProp(field.name)}`)
            }
        }
        b.appendLn(`return result`)
        b.endBlock()
    }

    private generateFromJson(b: CodeBuilder) {
        b.beginBlock(`static fromJson(json: any): ${this._reflection.name}`)

        b.endBlock()
    }
}