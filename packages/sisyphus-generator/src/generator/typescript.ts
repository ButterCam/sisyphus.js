import pathModule from "path";
import {camelCase} from "change-case";
import {CodeBuilder} from "../string";
import {unixPath} from "../utils";

export abstract class TypescriptFile {
    importPrefix: string = ""
    abstract readonly filename: string
    private _imports: { [k: string]: string } = {}
    private _importedName: string[] = []

    import(im: string, name: string): string {
        if (this._imports.hasOwnProperty(im)) {
            return this.importName(this._imports[im])
        }
        let id = 0
        let importName = name
        while (this._importedName.indexOf(importName) >= 0) {
            id++
            importName = name + id
        }
        this._imports[im] = importName
        this._importedName.push(importName)
        return this.importName(importName)
    }

    importFile(file: string | null, name?: string): string {
        if (file == null) return ""
        if (file == this.filename) return ""

        let importName = name ? name : camelCase(pathModule.basename(file, pathModule.extname(file)))
        return this.import(this.importPath(file), importName)
    }

    importLib(lib: string | null, name?: string): string {
        if (lib == null) return ""
        if (lib == this.filename) return ""
        let importName = name ? name : camelCase(lib.replace(/\\\//g, "_"))
        return this.import(lib, importName)
    }

    generateImport(b: CodeBuilder) {
        for (let key in this._imports) {
            if (this._imports.hasOwnProperty(key)) {
                b.appendLn(`import * as $${this._imports[key]} from "${key}"`)
            }
        }
    }

    private importName(name: string): string {
        return this.importPrefix + name
    }

    private importPath(target: string): string {
        const importTs = pathModule.join(pathModule.dirname(target), pathModule.basename(target, pathModule.extname(target)))
        const currentDir = pathModule.dirname(unixPath(this.filename))

        const result = pathModule.posix.relative(`/${unixPath(currentDir)}`, `/${unixPath(importTs)}`)
        if (result.startsWith(".")) {
            return result
        } else {
            return `./${result}`
        }
    }
}