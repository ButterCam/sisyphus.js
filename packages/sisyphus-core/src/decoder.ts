import {Enum, Field, MapField, Reader, Type, types} from "protobufjs";

export function decodeField(tag: number, field: MapField | Field, reader: Reader, value?: any): any {
    if (field instanceof MapField) {
        if (!value) value = {}
        let mapKey, mapValue
        const mapEnd = reader.uint32() + reader.pos
        while (mapEnd > reader.pos) {
            const entryTag = reader.uint32()
            switch (entryTag >> 3) {
                case 1:
                    mapKey = (<any>reader)[field.keyType]()
                    break
                case 2:
                    if (field.resolvedType instanceof Type) {
                        mapValue = field.resolvedType.messageCtor.decodeDelimited(reader)
                    } else if (field.resolvedType instanceof Enum) {
                        mapValue = reader.uint32()
                    } else {
                        mapValue = (<any>reader)[field.type]()
                    }
                    break
                default:
                    reader.skipType(entryTag & 7)
                    break
            }
        }
        if (mapKey != undefined && mapValue != undefined) {
            value[mapKey] = mapValue
        }
        return value
    }

    const packedWire: number = (<any>types.packed)[field.type]
    if (field.packed && field.repeated && packedWire != undefined) {
        const packEnd = reader.uint32() + reader.pos
        if (!value) value = []
        while (packEnd > reader.pos) {
            value.push((<any>reader)[field.type]())
        }
        return value
    } else {
        if (field.repeated && !value) value = []

        let item
        if (field.resolvedType instanceof Type) {
            item = field.resolvedType.messageCtor.decodeDelimited(reader)
        } else if (field.resolvedType instanceof Enum) {
            item = reader.uint32()
        } else {
            item = (<any>reader)[field.type]()
        }

        if (field.repeated) {
            value.push(item)
        } else {
            value = item
        }
        return value
    }
}