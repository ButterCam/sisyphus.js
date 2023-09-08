import fs from 'fs'
import fsp from 'fs/promises'

export interface SisyphusConfig {
    /**
     * Sisyphus compile plugins which be included in current package.
     * Key is plugin name, reference in other package.
     * Value is plugin entry point.
     */
    plugins: { [name: string]: string }
}

export interface ProtobufConfig {
    /**
     * The plugins used for compile protobuf files.
     */
    plugins: string[]

    /**
     * The packages name of source protos to compile in deps.
     */
    packages: string[]

    version: string
}

export interface DirectoryConfig {
    proto: string

    lib: string
}

export interface PackageJson {
    name: string

    version: string

    main?: string

    sisyphus?: SisyphusConfig

    protobuf?: ProtobufConfig

    directories?: DirectoryConfig

    devDependencies?: { [name: string]: string }

    dependencies?: { [name: string]: string }
}

export interface SisyphusDistJson {
    version: '1.0',

    generatedFiles: string[]
}

const cache: { [name: string]: any } = {}

export async function readConfigJson<T>(path: string): Promise<T | undefined> {
    if (!fs.existsSync(path)) return undefined
    if (cache[path] != undefined) {
        return cache[path]
    }
    const result = await fsp.readFile(path, {encoding: 'utf8'})
    cache[path] = JSON.parse(result)
    return cache[path]
}
