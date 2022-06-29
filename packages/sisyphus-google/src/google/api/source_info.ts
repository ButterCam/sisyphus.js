import {Any} from '@sisyphus.js/runtime/lib/google/protobuf/any'

/**  Source information used to create a Service Config */
export interface SourceInfo {
    /**  All files used during config generation. */
    sourceFiles?: Any[]
}

export namespace SourceInfo {
    export const name = 'google.api.SourceInfo'
}
