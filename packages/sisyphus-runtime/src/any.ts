import {Any} from './google/protobuf/any'
import {WrapperType, WrapperValue} from './wrappers'

declare module './google/protobuf/any' {
    export type AnyType<T> = Any & (T extends WrapperType ? WrapperValue<T> : T)

    namespace Any {
        function isAny(object: any): boolean

        function typeOf(object: any): string

        function typeUrl(type: string): string
    }
}

export * from './google/protobuf/any'

Any.isAny = function (object: any): boolean {
    return typeof object['@type'] === 'string'
}

Any.typeOf = function typeOf(object: any): string {
    if (!Any.isAny(object)) throw new Error(`Object must contains '@type' type info.`)
    const type: string = object['@type']
    return type.substring(type.lastIndexOf('/') + 1)
}

Any.typeUrl = function typeUrl(type: string): string {
    return `type.butterapis.com/${type}`
}