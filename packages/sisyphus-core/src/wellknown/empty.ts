import {Message} from "../message"

export interface IEmpty {
}

export class Empty extends Message<Empty> implements IEmpty {
}