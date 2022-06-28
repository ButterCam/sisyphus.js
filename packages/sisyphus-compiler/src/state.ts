import {FileDescriptorSet} from './descriptor'
import {GeneratedFile, GeneratingState} from './generator'

export interface FilesGeneratingState extends GeneratingState<'files', undefined, FileDescriptorSet, GeneratedFile[]> {
    readonly src: string[]
    readonly lib: { [k: string]: string }
}