import {Enum, Type, Writer} from "protobufjs/light";
import {IAny} from "./wellknown";

export abstract class Message<T extends object = object> {
    abstract readonly $reflection: Type

    $encode(writer?: Writer): Writer {
        return this.$reflection.encode(this, writer)
    }

    $encodeDelimited(writer?: Writer): Writer {
        return this.$reflection.encodeDelimited(this, writer)
    }

    $verify(): string | null {
        return this.$reflection.verify(this)
    }

    $toJSON(): any {
        switch (this.$reflection.fullName) {
            case ".google.protobuf.Any": {
                const any = <IAny>this
                if(any.typeUrl == undefined) {
                    throw new Error("Any must be have ")
                }
            }
            case ".google.protobuf.Timestamp":
            case ".google.protobuf.Duration":
            case ".google.protobuf.Struct":
            case ".google.protobuf.FieldMask":
            case ".google.protobuf.ListValue":
            case ".google.protobuf.Value":
            case ".google.protobuf.DoubleValue":
            case ".google.protobuf.FloatValue":
            case ".google.protobuf.Int64Value":
            case ".google.protobuf.UInt64Value":
            case ".google.protobuf.Int32Value":
            case ".google.protobuf.UInt32Value":
            case ".google.protobuf.BoolValue":
            case ".google.protobuf.StringValue":
            case ".google.protobuf.BytesValue":
            case ".google.protobuf.NullValue":
            case ".google.protobuf.Empty":
        }
    }
}