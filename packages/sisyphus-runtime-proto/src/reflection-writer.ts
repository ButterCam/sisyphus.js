import {keyFieldDescriptor, valueFieldDescriptor} from './map-utils'
import {ProtobufWriter, WireType} from './protobuf'
import {
    EnumFieldDescriptor,
    MapFieldDescriptor,
    MessageDescriptor,
    MessageFieldDescriptor,
    RepeatType,
    ScalarFieldDescriptor,
    ScalarType
} from './reflection'

export function writeMessage<T>(writer: ProtobufWriter, type: MessageDescriptor<T>, value: any) {
    if (type.write != null) {
        type.write(writer, value)
        return
    }

    const fields = type.fields.concat(extendDefinitions(type.name))

    for (const field of fields) {
        const v =  value[field.name]
        if(v === undefined) continue
        switch (field.kind) {
            case 'enum':
                writeEnumField(writer, field, v)
                break
            case 'message':
                writeMessageField(writer, field, v)
                break
            case 'map':
                writeMapField(writer, field, v)
                break
            case 'scalar':
                writeScalarField(writer, field, v)
                break
        }
    }
}

function writeMessageField(writer: ProtobufWriter, field: MessageFieldDescriptor, value: any): void {
    const type = field.type()

    if (field.repeat && value instanceof Array) {
        for (let i = 0; i < value.length; i++) {
            writeMessageField(writer, field, value[i])
        }
    } else {
        writer.tag(field.num, WireType.LENGTH_DELIMITED)
        writer.beginLd()
        if (type.write != null) {
            type.write(writer, value)
        } else {
            writeMessage(writer, type, value)
        }
        writer.endLd()
    }
}

function writeEnumField(writer: ProtobufWriter, field: EnumFieldDescriptor, value: any): void {
    const type = field.type()

    function normalizeEnum(value: any): number {
        if (typeof value === 'string') value = type.enum[value] ?? 0
        if (typeof value !== 'number') throw new Error(`'${field.name}' must be a enum(number or string).`)
        return value
    }

    if (value instanceof Array) {
        for (let i = 0; i < value.length; i++) {
            value[i] = normalizeEnum(value[i])
        }
    } else {
        value = normalizeEnum(value)
    }

    switch (field.repeat) {
        case undefined:
            writer.tag(field.num, WireType.VARINT)
            writer.int32(value)
            break
        case RepeatType.PACKED:
            if (!(value instanceof Array)) throw new Error(`'${field.name}' is a repeated field, must be a array.`)
            writer.tag(field.num, WireType.LENGTH_DELIMITED)
            writer.beginLd()
            for (const element of value) {
                writer.int32(element)
            }
            writer.endLd()
            break
        case RepeatType.UNPACKED:
            if (!(value instanceof Array)) throw new Error(`'${field.name}' is a repeated field, must be a array.`)
            writer.tag(field.num, WireType.VARINT)
            for (const element of value) {
                writer.int32(element)
            }
            break
    }
}

function writeScalarField(writer: ProtobufWriter, field: ScalarFieldDescriptor, value: any): void {
    const info = scalarInfo(field, value)
    if (info === undefined) return

    switch (field.repeat) {
        case undefined:
            writer.tag(field.num, info[0])
            writer[info[1]](<never>value)
            break
        case RepeatType.PACKED:
            if (!(value instanceof Array)) throw new Error(`'${field.name}' is a repeated field, must be a array.`)
            if (info[0] != WireType.VARINT) throw new Error(`Only varint field can be packed.`)
            writer.tag(field.num, WireType.LENGTH_DELIMITED)
            writer.beginLd()
            for (const element of value) {
                writer[info[1]](<never>element)
            }
            writer.endLd()
            break
        case RepeatType.UNPACKED:
            if (!(value instanceof Array)) throw new Error(`'${field.name}' is a repeated field, must be a array.`)
            writer.tag(field.num, info[0])
            for (const element of value) {
                writer[info[1]](<never>element)
            }
            break
    }
}

function writeMapField(writer: ProtobufWriter, field: MapFieldDescriptor, value: any): void {
    const kd = keyFieldDescriptor(field)
    const vd = valueFieldDescriptor(field)

    new Map(Object.entries(value)).forEach((v, k) => {
        if (v === undefined) return
        writer.tag(field.num, WireType.LENGTH_DELIMITED).beginLd()
        if (kd.kind === 'enum') {
            writeEnumField(writer, kd, k)
        } else {
            writeScalarField(writer, kd, k)
        }
        switch (vd.kind) {
            case 'enum':
                writeEnumField(writer, vd, v)
                break
            case 'message':
                writeMessageField(writer, vd, v)
                break
            case 'scalar':
                writeScalarField(writer, vd, v)
                break
        }
        writer.endLd()
    })
}

function scalarInfo(field: ScalarFieldDescriptor, value: any): [WireType, 'int32' | 'string' | 'bool' | 'uint32' | 'double' | 'float' | 'int64' | 'uint64' | 'fixed64' | 'bytes' | 'fixed32' | 'sfixed32' | 'sfixed64' | 'sint32' | 'sint64'] | undefined {
    if (value == null) return undefined

    switch (field.type) {
        case ScalarType.DOUBLE:
            if (typeof value !== 'number') throw new Error(`'${field.name}' must be a number.`)
            return [WireType.FIXED64, 'double']
        case ScalarType.FLOAT:
            if (typeof value !== 'number') throw new Error(`'${field.name}' must be a number.`)
            return [WireType.FIXED32, 'float']
        case ScalarType.INT64:
            if (typeof value !== 'number' && typeof value !== 'string') throw new Error(`'${field.name}' must be a number or string.`)
            return [WireType.VARINT, 'int64']
        case ScalarType.UINT64:
            if (typeof value !== 'number' && typeof value !== 'string') throw new Error(`'${field.name}' must be a number or string.`)
            return [WireType.VARINT, 'uint64']
        case ScalarType.INT32:
            if (typeof value !== 'number') throw new Error(`'${field.name}' must be a number.`)
            return [WireType.VARINT, 'int64']
        case ScalarType.FIXED64:
            if (typeof value !== 'number' && typeof value !== 'string') throw new Error(`'${field.name}' must be a number or string.`)
            return [WireType.FIXED64, 'fixed64']
        case ScalarType.FIXED32:
            if (typeof value !== 'number') throw new Error(`'${field.name}' must be a number.`)
            return [WireType.FIXED32, 'fixed32']
        case ScalarType.BOOL:
            if (typeof value !== 'boolean') throw new Error(`'${field.name}' must be a boolean.`)
            return [WireType.VARINT, 'bool']
        case ScalarType.STRING:
            if (typeof value !== 'string') throw new Error(`'${field.name}' must be a string.`)
            return [WireType.LENGTH_DELIMITED, 'string']
        case ScalarType.BYTES:
            if (typeof value !== 'string') throw new Error(`'${field.name}' must be a base64 encoded string.`)
            return [WireType.LENGTH_DELIMITED, 'bytes']
        case ScalarType.UINT32:
            if (typeof value !== 'number') throw new Error(`'${field.name}' must be a number.`)
            return [WireType.VARINT, 'uint32']
        case ScalarType.SFIXED32:
            if (typeof value !== 'number') throw new Error(`'${field.name}' must be a number.`)
            return [WireType.FIXED32, 'sfixed32']
        case ScalarType.SFIXED64:
            if (typeof value !== 'number' && typeof value !== 'string') throw new Error(`'${field.name}' must be a number or string.`)
            return [WireType.FIXED64, 'sfixed64']
        case ScalarType.SINT32:
            if (typeof value !== 'number') throw new Error(`'${field.name}' must be a number.`)
            return [WireType.VARINT, 'sint32']
        case ScalarType.SINT64:
            if (typeof value !== 'number' && typeof value !== 'string') throw new Error(`'${field.name}' must be a number or string.`)
            return [WireType.VARINT, 'sint64']
    }
}