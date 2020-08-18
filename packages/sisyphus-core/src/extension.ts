import {Constructor, IConversionOptions, Message, Properties, Reader, ReflectionObject, Type, Writer} from "protobufjs"

export interface MessageConstructor<T extends Message> {
    readonly $type: Type

    new(properties?: Properties<T>): T

    create<T extends Message<T>>(this: Constructor<T>, properties?: { [k: string]: any }): Message<T>

    encode<T extends Message<T>>(this: Constructor<T>, message: (T | { [k: string]: any }), writer?: Writer): Writer

    encodeDelimited<T extends Message<T>>(this: Constructor<T>, message: (T | { [k: string]: any }), writer?: Writer): Writer

    decode<T extends Message<T>>(this: Constructor<T>, reader: (Reader | Uint8Array)): T

    decodeDelimited<T extends Message<T>>(this: Constructor<T>, reader: (Reader | Uint8Array)): T

    verify(message: { [k: string]: any }): (string | null)

    fromObject<T extends Message<T>>(this: Constructor<T>, object: { [k: string]: any }): T

    toObject<T extends Message<T>>(this: Constructor<T>, message: T, options?: IConversionOptions): { [k: string]: any }
}

declare module "protobufjs" {
    interface ReflectionObject {
        generatedObject?: any
    }

    interface Type {
        generatedObject: MessageConstructor<Message>
    }
}
