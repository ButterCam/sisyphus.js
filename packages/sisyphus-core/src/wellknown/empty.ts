import {Message} from "protobufjs"

export interface IEmpty {
}

export class Empty extends Message<Empty> implements IEmpty {
}