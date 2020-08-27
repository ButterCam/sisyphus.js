import {FileSpec} from "./file";

export interface GeneratorSpec {
    readonly parent?: GeneratorSpec

    readonly file: FileSpec
}