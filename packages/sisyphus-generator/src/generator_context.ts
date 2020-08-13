import * as proto from "protobufjs";
import {Enum, Field, Namespace, ReflectionObject, Root, Service, Type} from "protobufjs";
import pathModule from "path"
import {promises as fsModule} from "fs"
import {unixPath, walkDir, writeToFile} from "./utils";
import {SisyphusRoot} from "./root";
import {FileSpec} from "./generator/file";
import {CodeBuilder} from "./string";

const common: any = proto.common
for (let key in common) {
    if (common.hasOwnProperty(key) && key.endsWith(".proto")) {
        delete common[key]
    }
}

export class GeneratorContext {
    private readonly _root: SisyphusRoot = new SisyphusRoot()
    private readonly _protos: { [key: string]: FileSpec } = {}

    get reflection(): Root {
        return this._root
    }

    include(dirName: string) {
        this._root.include(dirName)
    }

    async generate(outDir: string, ...protos: string[]) {
        let resolved: string[] = []
        for (let dir of this._root.includes) {
            for (let proto of protos) {
                let protoPath = pathModule.join(dir, proto)
                try {
                    let stat = await fsModule.stat(protoPath)
                    if (stat.isDirectory()) {
                        await walkDir(protoPath, file => {
                            let fileName = pathModule.relative(dir, file)
                            if (fileName.endsWith(".proto")) {
                                resolved.push(unixPath(fileName))
                            }
                        })
                    } else {
                        resolved.push(unixPath(proto))
                    }
                } catch (e) {
                }
            }
        }

        resolved.filter((x, i) => i === resolved.indexOf(x))
        await this._root.load(resolved, {alternateCommentMode: true})
        this._root.resolveAll()
        this.register(this._root)

        await writeToFile(outDir, "reflection.json", JSON.stringify(this._root.toJSON()))
        await writeToFile(outDir, "_reflection.ts", `import reflectionJson from "./reflection.json"
import {Root} from "protobufjs"

export let root = Root.fromJSON(reflectionJson)
root.resolveAll()\n`)

        await this.generateIndex(outDir)

        for (let key in this._protos) {
            if (this._protos.hasOwnProperty(key)) {
                await this._protos[key].generate(outDir)
            }
        }
    }

    private async generateIndex(dir: string, obj: ReflectionObject = this._root) {
        switch (true) {
            case obj instanceof Type:
            case obj instanceof Service:
            case obj instanceof Enum:
            case obj instanceof Field:
                break
            case obj instanceof Root:
            case obj instanceof Namespace:
                const fileName = obj.fullName.replace(/\./g, "/").substring(1) + "/index.ts"
                const b = new CodeBuilder()
                const modules: string[] = []

                for (let reflectionObject of (<Namespace>obj).nestedArray) {
                    switch (true) {
                        case reflectionObject instanceof Type:
                        case reflectionObject instanceof Service:
                        case reflectionObject instanceof Enum:
                            if(reflectionObject.filename != null){
                                const moduleName = pathModule.basename(reflectionObject.filename, pathModule.extname(reflectionObject.filename))
                                if(modules.indexOf(moduleName) < 0) {
                                    b.appendLn(`export * from "./${moduleName}"`)
                                    modules.push(moduleName)
                                }
                            }
                            break
                        case reflectionObject instanceof Root:
                        case reflectionObject instanceof Namespace:
                            await this.generateIndex(dir, reflectionObject)
                            const moduleName = reflectionObject.name
                            if(modules.indexOf(moduleName) < 0) {
                                b.appendLn(`export * as ${moduleName} from "./${moduleName}"`)
                                modules.push(moduleName)
                            }
                            break
                        default:
                            break
                    }
                }

                await writeToFile(dir, fileName, b.build())
                break
            default:
                break
        }
    }

    private register(obj: ReflectionObject) {
        switch (true) {
            case obj instanceof Type:
            case obj instanceof Service:
            case obj instanceof Enum:
            case obj instanceof Field:
                this.registerToFile(obj)
                break
            case obj instanceof Root:
            case obj instanceof Namespace:
                for (let reflectionObject of (<Namespace>obj).nestedArray) {
                    this.register(reflectionObject)
                }
                break
            default:
                break
        }
    }

    private registerToFile(obj: ReflectionObject) {
        if (obj.filename == null)
            return
        if (!this._protos.hasOwnProperty(obj.filename)) {
            this._protos[obj.filename] = new FileSpec(this._root)
        }
        const file = this._protos[obj.filename]
        file.append(obj)
    }
}
