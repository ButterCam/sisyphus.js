import {FileSpec} from "./file";
import {GeneratorSpec} from "./generator";
import {Service} from "protobufjs";
import {CodeBuilder} from "../string";
import {normalizeComment} from "../utils";

export class ServiceSpec implements GeneratorSpec {
    private readonly _parent: FileSpec
    private readonly _reflection: Service
    private _content: string[] = []

    get parent(): FileSpec {
        return this._parent
    }

    get file(): FileSpec {
        return this._parent
    }

    get content(): readonly string[] {
        return this._content
    }

    constructor(parent: FileSpec, reflection: Service) {
        this._parent = parent
        this._reflection = reflection
    }

    generate(b: CodeBuilder) {
        if (this._reflection.comment != null) {
            b.appendLn(normalizeComment(this._reflection.comment))
        }
        b.beginBlock(`export class ${this._reflection.name}`)
        
        b.endBlock()
    }
}
