import {Enum, Field, MapField, Type, types, Writer} from "protobufjs";


export function encodeField(field: MapField | Field, value: any, writer: Writer) {
    if (field instanceof MapField) {
        const keyWire: number = (<any>types.basic)[field.keyType]
        const valueWire: number = (<any>types.basic)[field.type]

        for (let key in value) {
            if (value.hasOwnProperty(key)) {
                writer.uint32((field.id << 3 | 2) >>> 0).fork()
                writer.uint32((1 << 3 | keyWire) >>> 0);
                (<any>writer)[field.keyType](key)
                if (valueWire != undefined) {
                    writer.uint32((2 << 3 | valueWire) >>> 0);
                    (<any>writer)[field.type](value[key])
                } else if (field.resolvedType instanceof Type) {
                    writer.uint32((2 << 3 | 2) >>> 0).fork()
                    field.resolvedType.messageCtor.encode(value[key], writer).ldelim()
                } else if (field.resolvedType instanceof Enum) {
                    writer.uint32((2 << 3 | 0) >>> 0).uint32(value[key])
                }
                writer.ldelim()
            }
        }
        return
    }

    const wire: number = (<any>types.basic)[field.type]
    const packedWire: number = (<any>types.packed)[field.type]
    if (field.repeated && field.packed && packedWire != undefined && Array.isArray(value)) {
        writer.uint32((field.id << 3 | packedWire) >>> 0).fork()
        for (const item of value) {
            (<any>writer)[field.type](item)
        }
        writer.ldelim()
    } else if (field.repeated && Array.isArray(value)) {
        for (const item of value) {
            encodeField(field, item, writer)
        }
    } else if (field.resolvedType instanceof Type) {
        writer.uint32((field.id << 3 | 2) >>> 0).fork()
        field.resolvedType.messageCtor.encode(value, writer).ldelim()
    } else if (field.resolvedType instanceof Enum) {
        writer.uint32((field.id << 3 | 0) >>> 0).uint32(value)
    } else {
        writer.uint32((field.id << 3 | wire) >>> 0);
        (<any>writer)[field.type](value)
    }
}