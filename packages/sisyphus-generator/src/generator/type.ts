import {FileSpec} from "./file";
import {GeneratorSpec} from "./generator";
import {Enum, Field, FieldBase, MapField, Type, util} from "protobufjs";
import {normalizeComment} from "../utils";
import {EnumSpec} from "./enum";
import {CodeBuilder} from "../string";

export class TypeSpec implements GeneratorSpec {
    private readonly _parent: TypeSpec | FileSpec
    private readonly _reflection: Type

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

    constructor(parent: TypeSpec | FileSpec, reflection: Type) {
        this._parent = parent
        this._reflection = reflection
    }

    generate(codeBuilder: CodeBuilder) {
        this.generateInterface(codeBuilder.ln())
        this.generateClass(codeBuilder.ln())
        this.generateNamespace(codeBuilder.ln())
    }

    private fieldType(field: FieldBase | string): string {
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
                default:
                    return this.file.typename(this._reflection.root.lookupTypeOrEnum(field))
            }
        }

        if (field.map && field instanceof MapField) {
            return `{ [k: ${this.fieldType(field.keyType)}]: ${this.fieldType(field.type)} }`
        }

        return this.fieldType(field.type)
    }

    private tsFieldType(field: FieldBase): string {
        if (field.map && field instanceof MapField) {
            return `(${this.fieldType(field)} | null)`
        }
        if (field.repeated) {
            return `(${this.fieldType(field)}[] | null)`
        }
        if (field.resolvedType instanceof Type) {
            return `(${this.fieldType(field)} | null)`
        }
        return this.fieldType(field)
    }

    private fieldDefaultValue(field: FieldBase): string {
        if (field.map && field instanceof MapField) return "null"
        if (field.repeated) return "null"
        if (field.resolvedType instanceof Type) return "null"
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
                return "null"
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

        b.beginBlock(`export interface I${this._reflection.name}`)
        for (let field of this._reflection.fieldsArray) {
            if (field.comment != null) {
                b.appendLn(normalizeComment(field.comment))
            }
            b.appendLn(`${this.fieldName(field)}?: ${this.tsFieldType(field)}`)
        }
        for (let oneOf of this._reflection.oneofsArray) {
            if (oneOf.comment != null) {
                b.appendLn(normalizeComment(oneOf.comment))
            }
            b.appendLn(`${oneOf.name}?: string`)
        }
        b.endBlock()
    }

    private generateClass(b: CodeBuilder) {
        b.beginBlock(`export class ${this._reflection.name} extends $${this.file.importSisyphus()}.Message<I${this._reflection.name}> implements I${this._reflection.name}`)
        for (let field of this._reflection.fieldsArray) {
            b.appendLn(`${this.fieldName(field)}!: ${this.tsFieldType(field)}`)
        }
        for (let oneOf of this._reflection.oneofsArray) {
            b.appendLn(`${oneOf.name}?: string\n`)
        }
        b.beginBlock("get $reflection()")
        b.appendLn(`return ${this._reflection.name}.reflection`)
        b.endBlock()
        b.ln()
        b.appendLn(`static readonly reflection = $${this.file.importReflection()}.root.lookupType("${this._reflection.fullName}")`)
        this.generateDecoder(b)
        this.generateFromObject(b)
        b.endBlock()

        for (let oneOf of this._reflection.oneofsArray) {
            const fields = oneOf.fieldsArray.map(field => `"${this.fieldName(field)}"`).join(", ")
            b.appendLn(`Object.defineProperty(${this._reflection.name}.prototype, "${oneOf.name}", $${this.file.importSisyphus()}.oneOfProperty(${fields}))`)
        }
        for (let field of this._reflection.fieldsArray) {
            if (field.name.startsWith(".")) {
                b.appendLn(`${this._reflection.name}.prototype[${this.fieldName(field)}] = ${this.fieldDefaultValue(field)}`)
            } else {
                b.appendLn(`${this._reflection.name}.prototype.${this.fieldName(field)} = ${this.fieldDefaultValue(field)}`)
            }
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
        b.beginBlock("while(reader.pos < end)")
        b.appendLn("let tag = reader.uint32()")
        b.beginBlock(`switch(tag>>>3)`)

        for (let field of this._reflection.fieldsArray) {
            b.appendLn(`case ${field.id}:`).indent()
            const fieldRef = `result${util.safeProp(field.name)}`
            if (field.map) {
                b.appendLn(`if (!${fieldRef}) ${fieldRef} = {}`)
                if (field.resolvedType != null) {
                    b.appendLn(`const [key, value] = ${this.file.importSisyphus()}.readMapEntry(this.reflection.fields["${field.name}"], reader, ${this.file.classname(field.resolvedType)})`)
                } else {
                    b.appendLn(`const [key, value] = ${this.file.importSisyphus()}.readMapEntry(this.reflection.fields["${field.name}"], reader)`)
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

    private generateFromObject(b: CodeBuilder) {
        b.beginBlock(`static create(properties?: I${this._reflection.name}): ${this._reflection.name}`)
        b.appendLn(`if(properties instanceof this) return properties`)
        b.appendLn(`const result = new this()`)
        b.appendLn(`if (!properties) return result`)
        b.beginBlock(`for (const key in properties)`)
        b.appendLn(`if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue`)
        b.beginBlock("switch(key)")
        for (let field of this._reflection.fieldsArray) {
            b.appendLn(`case "${field.name}":`).indent()
            switch (field.type) {
                case "string":
                    b.appendLn(`result[key] = String(properties[key])`)
                    break
                case "bytes":
                    break
                case "bool":
                    b.appendLn(`result[key] = Boolean(properties[key])`)
                    break
                case "double":
                case "float":
                case "int32":
                case "uint32":
                case "sint32":
                case "fixed32":
                case "sfixed32":
                    b.appendLn(`result[key] = Number(properties[key])`)
                    break
                case "int64":
                case "sint64":
                case "sfixed64":
                case "uint64":
                case "fixed64":
                    b.appendLn(`result[key] = $${this.file.importSisyphus()}.Long.fromValue(properties[key])`)
                    break
                default:
                    if(field.resolvedType != null) {
                        if (field.resolvedType instanceof Type) {
                            b.appendLn(`result[key] = ${this.file.classname(field.resolvedType)}.create(properties[key])`)
                        } else {
                            b.appendLn(`result[key] = typeof properties[key] === "number" ? properties[key] : ${this.file.classname(field.resolvedType)}[properties[key]]`)
                        }
                    }
                    break
            }
            b.appendLn("break").deindent()
        }
        b.endBlock()
        b.endBlock()
        b.appendLn(`return result`)
        b.endBlock()
    }
}