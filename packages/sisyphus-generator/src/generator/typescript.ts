import {Root} from "protobufjs";
import pathModule from "path";
import {camelCase} from "change-case";

export abstract class TypescriptFile {
    private _importFiles: { [k: string]: string } = {}
    private _importLibs: { [k: string]: string } = {}
    private _imports: string[] = []

    abstract readonly filename: string

    import(file: string | null): string {
        if (file == null) return ""
        if (file == this.filename) return ""

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
}