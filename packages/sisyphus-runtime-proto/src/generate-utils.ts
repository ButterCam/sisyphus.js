import {AnyType, WrapperType} from '@sisyphus.js/runtime'

export function boxFun<T extends WrapperType>(name: string): (value: T) => AnyType<T> {
    return function (value: T): AnyType<T> {
        return <any>{
            '@type': `type.googleapis.com/${name}`,
            value: value
        }
    }
}

export function unboxFun<T extends WrapperType>(): (value: AnyType<T>) => T {
    return function (value: AnyType<T>): T {
        return <T>value.value
    }
}
