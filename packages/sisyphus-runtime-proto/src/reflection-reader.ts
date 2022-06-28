import {keyFieldDescriptor, valueFieldDescriptor} from './map-utils'
import {ProtobufReader, WireType} from './protobuf'
import {
    EnumFieldDescriptor,
    FieldDescriptor,
    MapFieldDescriptor,
    MessageDescriptor,
    MessageFieldDescriptor,
    ScalarFieldDescriptor,
    ScalarType
} from './reflection'

export function readMessage<T>(reader: ProtobufReader, type: MessageDescriptor<T>, size: number): T {
    if(type == undefined) {
        debugger
    }

    if (type.read != null) {
        return type.read(reader, size)
    }

    const fields: { [num: number]: FieldDescriptor } = {}

    for (const field of type.fields.concat(extendDefinitions(type.name))) {
        fields[field.num] = field
    }

    const pos = reader.readBytes()
    const result: any = {}
    while (size > 0 && reader.readBytes() - pos < size) {
        const [field, wire] = reader.tag()
        if(field === undefined) break
        const descriptor = fields[field]
        if (descriptor == null) {
            reader.skip(wire)
            continue
        }
        switch (descriptor.kind) {
            case 'enum':
                readEnumField(reader, wire, descriptor, result)
                break
            case 'message':
                readMessageField(reader, wire, descriptor, result)
                break
            case 'map':
                readMapField(reader, wire, descriptor, result)
                break
            case 'scalar':
                readScalarField(reader, wire, descriptor, result)
                break
        }
    }
    return result
}

function writeField(target: any, name: string, repeated: boolean | undefined, value: any) {
    if (repeated) {
        target[name] = target[name] ?? []
        target[name].push(value)
    } else {
        target[name] = value
    }
}

function readMessageField(reader: ProtobufReader, wire: WireType, field: MessageFieldDescriptor, target: any) {
    if (wire != WireType.LENGTH_DELIMITED) {
        throw new Error('Message field must be length delimited')
    }
    const type = field.type()
    const v = readMessage(reader, type, reader.int32())
    writeField(target, field.name, field.repeat, v)
}

function readEnumField(reader: ProtobufReader, wire: WireType, field: EnumFieldDescriptor, target: any) {
    if (wire == WireType.LENGTH_DELIMITED) {
        const size = reader.int32()
        const pos = reader.readBytes()
        while (reader.readBytes() - pos < size) {
            const v = field.type().enum[reader.int32()]
            writeField(target, field.name, field.repeat != undefined, v)
        }
    } else {
        const v = field.type().enum[reader.int32()]
        writeField(target, field.name, field.repeat != undefined, v)
    }
}

function readMapField(reader: ProtobufReader, wire: WireType, field: MapFieldDescriptor, target: any) {
    const map = target[field.name] ?? {}

    const size = reader.int32()
    const pos = reader.readBytes()

    const kd = keyFieldDescriptor(field)
    const vd = valueFieldDescriptor(field)

    const entry: { key?: any, value?: any } = {}
    const desc: { [n: number]: FieldDescriptor } = {1: kd, 2: vd}

    while (reader.readBytes() - pos < size) {
        const [n, w] = reader.tag()
        if(n === undefined) break

        const d = desc[n]
        if (d === undefined) {
            reader.skip(w)
            continue
        }
        switch (d.kind) {
            case 'enum':
                readEnumField(reader, w, d, entry)
                break
            case 'message':
                readMessageField(reader, w, d, entry)
                break
            case 'scalar':
                readScalarField(reader, w, d, entry)
                break
            default:
                throw new Error('Unsupported map entry field')
        }
    }

    if (entry.value === undefined) {
        return
    }
    if (entry.key === undefined) {
        return
    }
    map[entry.key] = entry.value
    target[field.name] = map
}

function readScalarField(reader: ProtobufReader, wire: WireType, field: ScalarFieldDescriptor, target: any) {
    switch (field.type) {
        case ScalarType.BYTES:
            const bytes = reader.bytes()
            writeField(target, field.name, field.repeat != undefined, bytes)
            break
        case ScalarType.STRING:
            const str = reader.string()
            writeField(target, field.name, field.repeat != undefined, str)
            break
        default:
            readPackableField(reader, wire, field, target)
            break
    }
}

function readPackableField(reader: ProtobufReader, wire: WireType, field: ScalarFieldDescriptor, target: any) {
    if (wire == WireType.LENGTH_DELIMITED) {
        const size = reader.int32()
        const pos = reader.readBytes()
        while (reader.readBytes() - pos < size) {
            const v = readScalar<any>(reader, field.type)
            writeField(target, field.name, field.repeat != undefined, v)
        }
    } else {
        const v = readScalar<any>(reader, field.type)
        writeField(target, field.name, field.repeat != undefined, v)
    }
}

function readScalar<T>(reader: ProtobufReader, type: ScalarType): T {
    const name = ScalarType[type].toLowerCase()
    return (<any>reader)[name]()
}