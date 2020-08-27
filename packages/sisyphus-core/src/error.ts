import {Message} from "./message";

export class GrpcStatusError extends Error {
    readonly code: number
    readonly details: readonly Message[]

    constructor(code: number, message: string, details: Message[]) {
        super(message);
        this.code = code
        this.details = details
    }
}