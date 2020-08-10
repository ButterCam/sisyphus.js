import {MapField, Reader, Type} from "protobufjs/light";

export function readMapEntry(field: MapField, reader: Reader, valueType?: any): [number | string, any] {
    const end = reader.uint32() + reader.pos
    let key!: number | string
    let value: any

    while (reader.pos < end) {
        const tag = reader.uint32()
        switch (tag >>> 3) {
            case 1:
                key = (<any>reader)[field.keyType]()
                break
            case 2:
                if (field.resolvedType == null) {
                    value = (<any>reader)[field.keyType]()
                } else if (valueType != null && field.resolvedType instanceof Type) {
                    value = valueType.decodeDelimited(reader)
                } else if (valueType == null && field.resolvedType instanceof Type) {
                    value = field.resolvedType.decodeDelimited(reader)
                } else {
                    value = reader.uint32()
                }
                break
            default:
                reader.skipType(tag & 7)
                break
        }
    }

    return [key, value]
}