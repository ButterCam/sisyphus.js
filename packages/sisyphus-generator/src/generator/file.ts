import {Enum, ReflectionObject, Root, Service, Type} from "protobufjs"
import pathModule from "path"
import {TypeSpec} from "./type";
import {GeneratorSpec} from "./generator";
import {camelCase} from "change-case"
import {ServiceSpec} from "./service";
import {EnumSpec} from "./enum";
import {unixPath, writeToFile} from "../utils";
import {CodeBuilder} from "../string";

export class FileSpec extends TypescriptFile implements GeneratorSpec {
    private _elements: ReflectionObject[] = []
    private _root: Root
    private _importFiles: { [k: string]: string } = {}
    private _importLibs: { [k: string]: string } = {}
    private _imports: string[] = []

    get parent(): undefined {
        return undefined
    }

    get file(): FileSpec {
        return this
    }

    constructor(root: Root) {
        this._root = root
    }

    get filename(): string | null {
        const protoFile = this.protoname
        if (!protoFile) return null
        return pathModule.join(pathModule.dirname(protoFile), pathModule.basename(protoFile, pathModule.extname(protoFile)) + '.ts')
    }

    get protoname(): string | null {
        if (this._elements.length == 0) return null
        return this._elements[0].filename
    }

    append(...obj: ReflectionObject[]) {
        this._elements.push(...obj)
    }

    import(file: string | null): string {
        if (file == null) return ""
        if (file == this.protoname) return ""

        if (this._importFiles.hasOwnProperty(file)) {
            return this._importFiles[file]
        }
        let importName = pathModule.basename(file, pathModule.extname(file))
        importName = camelCase(importName)
        let id = 0
        while (this._imports.indexOf(importName) >= 0) {
            id++
        }
        importName = id == 0 ? importName : importName + id
        this._importFiles[file] = importName
        this._imports.push(importName)
        return importName
    }

    importLib(lib: string, name: string): string {
        if (this._importLibs.hasOwnProperty(lib)) {
            return this._importLibs[lib]
        }
        let importName = name
        let id = 0
        while (this._imports.indexOf(importName) >= 0) {
            id++
        }
        importName = id == 0 ? importName : importName + id
        this._importLibs[lib] = importName
        this._imports.push(importName)
        return importName
    }

    importProtobuf(): string {
        return this.importLib("protobufjs", "protobuf")
    }

    importSisyphus(): string {
        return this.importLib("@sisyphus.js/core", "sisyphus")
    }

    importReflection(): string {
        return this.import("_reflection.ts")
    }

    typename(type: Type | Enum): string {
        const importName = this.import(type.filename)
        let typename: string
        if (type instanceof Enum) {
            typename = type.name
        } else {
            typename = `I${type.name}`
        }

        let parent = type.parent
        while (parent instanceof Type) {
            typename = `${parent.name}.${typename}`
            parent = parent.parent
        }

        if (importName.length == 0) {
            return typename
        } else {
            return `$${importName}.${typename}`
        }
    }

    classname(type: Type | Enum): string {
        const importName = this.import(type.filename)
        let typename = type.name

        let parent = type.parent
        while (parent instanceof Type) {
            typename = `${parent.name}.${typename}`
            parent = parent.parent
        }

        if (importName.length == 0) {
            return typename
        } else {
            return `$${importName}.${typename}`
        }
    }

    async generate(out: string) {
        if (this.filename == null) {
            return
        }

        let codeBuilder = new CodeBuilder()
        let importBuilder = new CodeBuilder()

        for (let element of this._elements) {
            if (element instanceof Enum) {
                const type = new EnumSpec(this, element)
                type.generate(codeBuilder)
            }
        }
        for (let element of this._elements) {
            if (element instanceof Type) {
                const type = new TypeSpec(this, element)
                type.generate(codeBuilder)
            }
        }
        for (let element of this._elements) {
            if (element instanceof Service) {
                const type = new ServiceSpec(this, element)
                type.generate(codeBuilder)
            }
        }

        for (let key in this._importLibs) {
            if (this._importLibs.hasOwnProperty(key)) {
                importBuilder.appendLn(`import * as $${this._importLibs[key]} from "${key}"`)
            }
        }
        for (let key in this._importFiles) {
            if (this._importFiles.hasOwnProperty(key)) {
                importBuilder.appendLn(`import * as $${this._importFiles[key]} from "${this.importPath(this.filename, key)}"`)
            }
        }

        let result = ""
        if (importBuilder.build().length > 0) {
            result += importBuilder.build()
            result += "\n\n"
        }

        result += codeBuilder.build()
        await writeToFile(out, this.filename, result)
    }

    private importPath(current: string, proto: string): string {
        const importTs = pathModule.join(pathModule.dirname(proto), pathModule.basename(proto, pathModule.extname(proto)))
        const currentDir = pathModule.dirname(unixPath(current))

        const result = pathModule.posix.relative(`/${unixPath(currentDir)}`, `/${unixPath(importTs)}`)
        if (result.startsWith(".")) {
            return result
        } else {
            return `./${result}`
        }
    }
}