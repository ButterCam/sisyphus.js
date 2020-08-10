import {promises as fsModule} from "fs"
import pathModule from "path"

export async function walkDir(dir: string, action: (file: string) => void) {
    let files = await fsModule.readdir(dir, {withFileTypes: true})
    for (let file of files) {
        if(file.isFile()){
            action(pathModule.join(dir, file.name))
        }else {
            await walkDir(pathModule.join(dir, file.name), action)
        }
    }
}

export function unixPath(path: string): string {
    return path.replace(/\\/g, "/")
}

export async function writeToFile(outDir: string, filename: string, data: string) {
    const targetFile = pathModule.join(outDir, filename)
    const targetDir = pathModule.dirname(targetFile)
    try {
        await fsModule.access(targetDir)
    } catch (e) {
        await fsModule.mkdir(targetDir, {recursive: true})
    }
    await fsModule.writeFile(targetFile, data)
}

export function normalizeComment(comment: string | null): string {
    if(!comment) return ""

    comment = comment.replace(/\*\//g, "*&#47;")

    if(comment.indexOf("\n") < 0) {
        return `/** ${comment} */`
    }

    let normalized = comment.replace(/^/gm, " * ")
    return `/**\n${normalized}\n */`
}

export function indentCode(content: string, indentation: string) {
    return content.replace(/^(?!\s*$)/gm, indentation)
}

export function deindentCode(content: string, indentation: string) {
    const regex = new RegExp(`^${indentation}`, "gm")
    return content.replace(regex, "")
}