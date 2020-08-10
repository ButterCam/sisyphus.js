import {FileSpec} from "./file";
import {GeneratorSpec} from "./generator";
import {Enum} from "protobufjs";
import {TypeSpec} from "./type";
import {indentCode, normalizeComment} from "../utils";
import {camelCase} from "change-case";
import {CodeBuilder} from "../string";

export class EnumSpec implements GeneratorSpec {
    private readonly _parent: TypeSpec | FileSpec
    private readonly _reflection: Enum

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

    constructor(parent: TypeSpec | FileSpec, reflection: Enum) {
        this._parent = parent
        this._reflection = reflection
    }

    generate(codeBuilder: CodeBuilder) {
        this.generateEnum(codeBuilder.ln())
        this.generateNamespace(codeBuilder.ln())
    }

    private generateEnum(b: CodeBuilder) {
        if (this._reflection.comment != null) {
            b.appendLn(normalizeComment(this._reflection.comment))
        }

        b.beginBlock(`export enum ${this._reflection.name}`)
        for (let num in this._reflection.valuesById) {
            if(this._reflection.valuesById.hasOwnProperty(num)) {
                const valueComment = this._reflection.comments[this._reflection.valuesById[num]]
                if (valueComment != null) {
                    b.appendLn(normalizeComment(valueComment))
                }
                b.appendLn(`${this._reflection.valuesById[num]} = ${num},`)
            }
        }
        b.endBlock()
    }

    private generateNamespace(b: CodeBuilder) {
        b.beginBlock(`export namespace ${this._reflection.name}`)
        b.appendLn(`export const reflection = $${this.file.importReflection()}.root.lookupEnum("${this._reflection.fullName}")`)
        b.endBlock()
    }
}