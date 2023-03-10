import path from 'path'

export interface ImportManager {
    current(): string

    build(): string

    import(lib: string): string

    import(lib: string, name: string): string

    importMapping?: (current: string, lib: string, name?: string) => [string, string | undefined]
}

export class SimpleImportManager implements ImportManager {
    private _importedName: string[] = []

    private _importMap: { [name: string]: string } = {}

    private _imports: { [lib: string]: string[] } = {}

    private _lib: { [lib: string]: string } = {}

    importMapping?: (current: string, lib: string, name?: string) => [string, string | undefined]

    private _current: string

    constructor(current: string, lib: { [k: string]: string }) {
        this._current = current
        this._lib = lib
    }

    current(): string {
        return this._current
    }

    build(): string {
        let result = ''

        for (const lib of Object.keys(this._imports).sort()) {
            const names = this._imports[lib].sort()

            if (names.length == 0) {
                result += `import '${lib}'\n`
            } else {
                const importedName = names.map(it => {
                    const unique = this._importMap[it]
                    return unique == it ? it : `${it} as ${unique}`
                }).join(', ')
                result += `import {${importedName}} from '${lib}'\n`
            }
        }

        return result.trimEnd()
    }

    import(lib: string): string
    import(lib: string, name: string): string

    import(lib: string, name?: string): string {
        if (this.importMapping != undefined) {
            [lib, name] = this.importMapping(this._current, lib, name)
        }

        if(this._lib[lib] != undefined) {
            lib = this._lib[lib]
        }

        if (name == undefined) {
            if (lib === '') return ''
            if (lib == this._current) return ''
        } else {
            if (lib === '') return name
            if (lib == this._current) return name
        }
        lib = this.importPath(lib)

        if (!(lib in this._imports)) {
            this._imports[lib] = []
        }

        if (name === undefined) {
            return lib
        } else {
            const imported = this._imports[lib]
            if (imported.includes(name)) {
                return this._importMap[name]
            }
            imported.push(name)
            return this.importName(name)
        }
    }

    private importPath(lib: string): string {
        if (lib.startsWith('/')) {
            lib = path.posix.relative(path.posix.dirname(this._current), lib)
            if (!lib.startsWith('.')) {
                lib = './' + lib
            }
        }
        return lib
    }

    private importName(name: string): string {
        let id = 0
        let importName = name
        while (importName in this._importedName) {
            id++
            importName = name + id
        }
        this._importedName.push(importName)
        this._importMap[name] = importName
        return importName
    }
}