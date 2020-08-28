import {Method, Service} from "protobufjs"
import {Message} from "./message";
import {GrpcStatusError} from "./error";

export interface IRpcImpl {
    (desc: Method, message: any, metadata?: { [k: string]: string }): Promise<Message>
}

export interface IRpcConfig {
    metadataHandler?: (desc: Method, metadata: { [k: string]: string }) => Promise<void>

    metadataProvider?: (desc: Method, message: any) => Promise<{ [k: string]: string }>

    errorHandler?: (desc: Method, error: GrpcStatusError) => Promise<any>
}

export abstract class Client {
    static readonly $service: Service
    abstract readonly $service: Service
    private readonly $impl: IRpcImpl

    constructor(impl: IRpcImpl) {
        this.$impl = impl
    }

    async $call(desc: Method, message: any, metadata?: { [k: string]: string }): Promise<any> {
        return await this.$impl(desc, message, metadata)
    }
}
