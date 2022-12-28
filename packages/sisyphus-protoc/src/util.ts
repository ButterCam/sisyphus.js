import {Buffer} from 'buffer'
import {exec} from 'child_process'
import {constants} from 'fs'
import fs from 'fs/promises'
import {IncomingMessage} from 'http'
import * as os from 'os'
import path from 'path'
import {URL} from 'url'
import {promisify} from 'util'

export const installedDirectory = path.join(__dirname, '../installed')

export function generateReleaseName(platform: NodeJS.Platform, arch: string, version: string): string {
    let build = `${platform}-${arch}`

    if (platform === 'darwin') {
        if(arch == 'arm64') {
            build = 'osx-aarch_64'
        } else {
            build = 'osx-x86_64'
        }
    }

    if (platform === 'win32') {
        if (arch === 'x64') {
            build = 'win64'
        } else {
            build = 'win32'
        }
    }

    if (platform === 'linux') {
        if (arch === 'x64') {
            build = 'linux-x86_64'
        } else {
            build = 'linux-x86_32'
        }
    }

    return `protoc-${version}-${build}`
}

function downloadRedirected(uri: string, redirects: string[] = []): Promise<IncomingMessage> {
    const url = new URL(uri)

    if (redirects.indexOf(uri) >= 0) throw new Error(`Redirect looped.\n${redirects.join('\n')}\n${uri}`)

    return new Promise((res, rej) => {
        requireHttp(url).get(uri, (response: IncomingMessage) => {
            if (!response.statusCode) return rej(new Error(`Download ${uri} failed.`))

            if (response.statusCode >= 400) return rej(new Error(`Download ${uri} failed(${response.statusCode}).`))

            if (response.statusCode >= 300) {
                const location = response.headers.location
                if (!location) return rej(new Error(`Redirect ${uri} failed(${response.statusCode}).`))
                return res(downloadRedirected(location, redirects.concat(uri)))
            }

            return res(response)
        }).on('error', rej)
    })
}

export function download(uri: string): Promise<Buffer> {
    return new Promise((res, rej) => {
        const chunks: Buffer[] = []
        downloadRedirected(uri).then((response) => {
            response.setEncoding('binary')
            response.on('data', chunk => {
                chunks.push(Buffer.from(chunk, 'binary'))
            })
            response.on('end', () => {
                res(Buffer.concat(chunks))
            })
        }, rej)
    })
}

export function getRedirectLocation(uri: string): Promise<string> {
    const url = new URL(uri)

    return new Promise((res, rej) => {
        requireHttp(url).get(uri, (response: IncomingMessage) => {
            if (!response.statusCode) return rej(new Error(`GET ${uri} failed.`))

            if (response.statusCode >= 400) return rej(new Error(`GET ${uri} failed(${response.statusCode}).`))

            if (response.statusCode >= 300) {
                const location = response.headers.location
                if (!location) return rej(new Error(`Redirect location not found for ${uri}(${response.statusCode}).`))
                return res(location)
            }

            return res(uri)
        }).on('error', rej)
    })
}

export async function getProtobufVersionConfig(dir: string): Promise<string | null> {
    while (true) {
        const config = await tryReadPackageJson(path.join(dir, 'package.json'))
        if (config && typeof config === 'object') {
            const protobuf = config['protobuf']
            if (protobuf && typeof protobuf === 'object') {
                const version = protobuf['version']
                if (version && typeof version === 'string') return version
            }
        }
        if (dir == path.dirname(dir)) break
        dir = path.dirname(dir)
    }
    return null
}

async function tryReadPackageJson(path: string): Promise<any | null> {
    try {
        await fs.access(path, constants.R_OK)
        const content = await fs.readFile(path, 'utf-8')
        return JSON.parse(content)
    } catch (e) {
        return null
    }
}

export async function commandExists(command: string): Promise<string | null> {
    const where = os.platform() === 'win32' ? 'where' : 'command -v'
    const {stdout, stderr} = await promisify(exec)(`${where} ${command}`)
    const result = stdout.split('\n')

    if (result.length === 0) return null
    if (!result[0]) return null
    try {
        await fs.access(result[0], constants.X_OK)
    } catch (e) {
        return null
    }
    return result[0]
}

function requireHttp(url: URL): any {
    return require(url.protocol.substring(0, url.protocol.length - 1))
}
