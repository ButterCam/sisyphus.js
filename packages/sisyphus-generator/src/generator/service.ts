import {FileSpec} from "./file";
import {GeneratorSpec} from "./generator";
import {Service} from "protobufjs";
import {CodeBuilder} from "../string";
import {normalizeComment} from "../utils";

export class ServiceSpec implements GeneratorSpec {
    private readonly _parent: FileSpec
    private readonly _reflection: Service

    constructor(parent: FileSpec, reflection: Service) {
        this._parent = parent
        this._reflection = reflection
    }

    private _content: string[] = []

    get content(): readonly string[] {
        return this._content
    }

    get parent(): FileSpec {
        return this._parent
    }

    get file(): FileSpec {
        return this._parent
    }

    generate(b: CodeBuilder) {
        if (this._reflection.comment != null) {
            b.appendLn(normalizeComment(this._reflection.comment))
        }
        b.beginBlock(`export class ${this._reflection.name} extends $${this.file.importSisyphus()}.Client`)
        b.beginBlock("get $reflection()")
        b.appendLn(`return ${this._reflection.name}.reflection`)
        b.endBlock()

        for (let method of this._reflection.methodsArray) {
            if (method.comment != null) {
                b.appendLn(normalizeComment(method.comment))
            }
            b.beginBlock(`async ${method.name}(input: ${this.file.typename(<any>method.resolvedRequestType)}, metadata?: { [k: string]: string }): Promise<${this.file.typename(<any>method.resolvedResponseType)}>`)
            b.appendLn(`return await this.$call(this.$reflection.methods["${method.name}"], input, metadata)`)
            b.endBlock()
        }

        b.appendLn(`static readonly reflection = $${this.file.importReflection()}.root.lookupService("${this._reflection.fullName}")`)
        b.endBlock()
    }
}
