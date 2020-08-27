import {FetchCallback, Root} from "protobufjs";
import pathModule from "path";
import {promises as fsModule} from "fs";

export class SisyphusRoot extends Root {
    private _includeDirs: string[] = []

    get includes(): readonly string[] {
        return this._includeDirs;
    }

    include(dirName: string) {
        this._includeDirs.push(dirName)
    }

    resolvePath(origin: string, target: string): string | null {
        return target
    }

    fetch(path: string, callback: FetchCallback) {
        this.fetchAsync(path).then(data => {
            callback(<any>null, data)
        }).catch(err => {
            callback(err)
        })
    }

    private async fetchAsync(path: string): Promise<string> {
        for (let dir of this._includeDirs) {
            let filepath = pathModule.join(dir, path)
            try {
                return await fsModule.readFile(filepath, {encoding: "utf8"})
            } catch (e) {
            }
        }
        throw new Error(`${path} not found in include dirs.`)
    }
}