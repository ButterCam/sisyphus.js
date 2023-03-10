import zip from 'adm-zip'
import {spawn} from 'child_process'
import {constants, existsSync} from 'fs'
import fs from 'fs/promises'
import log from 'npmlog'
import * as os from 'os'
import path from 'path'
import {
    download,
    generateProtocName,
    generateReleaseName,
    getProtobufVersionConfig,
    getRedirectLocation,
    installedDirectory
} from './util'

export default async function protoc(...args: string[]): Promise<number | null> {
    const version = await getProtobufVersionConfig(process.cwd())
    const protoc = await ensureProtoc(version)

    return new Promise((res, rej) => {
        const child = spawn(protoc, args, {
            stdio: 'inherit',
            shell: false
        })
        child.on('error', (err) => {
            rej(err)
        })
        child.on('exit', (code, signal) => {
            res(code)
        })
    })
}

async function ensureProtoc(version: string | undefined | null): Promise<string> {
    if (version === 'latest' || version == null) {
        version = await resolveLatestProtoc()
    }

    const releaseName = generateReleaseName(os.platform(), os.arch(), version)
    const releasePath = path.join(installedDirectory, releaseName)
    const protocPath = path.join(releasePath, 'bin', generateProtocName(os.platform()))

    try {
        await fs.access(protocPath, constants.X_OK)
        log.info('protoc', `Use protoc ${releaseName}.`)
        return protocPath
    } catch (e) {
        log.warn('protoc', `Can not execute protoc command (${e}), try to re-download.`)
        if (existsSync(releasePath)) {
            await fs.rm(releasePath, {recursive: true, force: true})
        }
    }

    log.info('protoc', `Download protoc ${releaseName}.`)
    const archiveBuffer = await download(`https://github.com/protocolbuffers/protobuf/releases/download/v${version}/${releaseName}.zip`)
    const archive = new zip(archiveBuffer)
    try {
        archive.extractAllTo(releasePath, true)
        //await promisify(archive.extractAllToAsync)(releasePath, true)
    } catch (e) {
        log.error('protoc', `Failed to extract protoc (${e}).`)
        throw e
    }
    await fs.chmod(protocPath, 0o755)

    return protocPath
}

async function resolveLatestProtoc(): Promise<string> {
    try {
        const realReleaseUri = await getRedirectLocation('https://github.com/protocolbuffers/protobuf/releases/latest')
        return path.basename(realReleaseUri).substring(1)
    } catch (e) {
        log.error('protoc', `Fail to resolve latest version of protoc. ${e}`)
        throw new Error(`Fail to resolve latest version of protoc. ${e}`)
    }
}

