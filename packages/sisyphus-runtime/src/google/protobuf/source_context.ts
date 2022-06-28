/**
 *  `SourceContext` represents information about the source of a
 *  protobuf element, like the file in which it is defined.
 */
export interface SourceContext {
    /**
     *  The path-qualified name of the .proto file that contained the associated
     *  protobuf element.  For example: `"google/protobuf/source_context.proto"`.
     */
    fileName?: string
}

export namespace SourceContext {
    export const name = 'google.protobuf.SourceContext'
}
