import {long} from '@sisyphus.js/runtime'

export enum WireType {
    VARINT = 0,

    FIXED64 = 1,

    LENGTH_DELIMITED = 2,

    START_GROUP = 3,

    END_GROUP = 4,

    FIXED32 = 5
}

export interface ProtobufReader {
    readBytes(): number

    tag(): [number | undefined, WireType]

    skip(type: WireType): Uint8Array

    int32(): number

    uint32(): number

    sint32(): number

    int64(): long

    uint64(): long

    sint64(): long

    fixed32(): number

    sfixed32(): number

    fixed64(): long

    sfixed64(): long

    bool(): boolean

    float(): number

    double(): number

    string(): string

    bytes(): Uint8Array
}

export interface ProtobufWriter {
    raw(buffer: Uint8Array): ProtobufWriter

    beginLd(): ProtobufWriter

    endLd(): ProtobufWriter

    tag(field: number, wire: WireType): ProtobufWriter

    int32(value: number): ProtobufWriter

    uint32(value: number): ProtobufWriter

    sint32(value: number): ProtobufWriter

    int64(value: long): ProtobufWriter

    uint64(value: long): ProtobufWriter

    sint64(value: long): ProtobufWriter

    fixed32(value: number): ProtobufWriter

    sfixed32(value: number): ProtobufWriter

    fixed64(value: long): ProtobufWriter

    sfixed64(value: long): ProtobufWriter

    bool(value: boolean): ProtobufWriter

    float(value: number): ProtobufWriter

    double(value: number): ProtobufWriter

    string(value: string): ProtobufWriter

    bytes(value: Uint8Array): ProtobufWriter
}
