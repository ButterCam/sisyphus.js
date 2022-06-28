import {ListValue, NullValue, Struct, Value} from '@sisyphus.js/runtime'
import {boxFun, unboxFun} from '../generate-utils'
import {ProtobufReader, ProtobufWriter} from '../protobuf'
import {MessageDescriptor, ScalarType} from '../reflection'
import {readMessage} from '../reflection-reader'
import {writeMessage} from '../reflection-writer'

type rawStructType = {
    fields?: { [key: string]: Value }
}

const structDescriptor: MessageDescriptor<rawStructType> = {
    name: '.google.protobuf.Struct',
    fields: [{kind: 'map', name: 'fields', num: 1, key: ScalarType.STRING, value: () => Value.descriptor}]
}

export const writeStruct = function (writer: ProtobufWriter, value: Struct): void {
    const raw: rawStructType = {fields: <any>value}
    writeMessage(writer, structDescriptor, raw)
}

export const readStruct = function (reader: ProtobufReader, size: number): Struct {
    const raw = readMessage(reader, structDescriptor, size)
    return raw.fields ?? {}
}

export const boxStruct = boxFun(Struct.name)

export const unboxStruct = unboxFun()

type rawValueType = {
    nullValue?: string,
    numberValue?: number,
    stringValue?: string,
    boolValue?: boolean,
    structValue?: Struct,
    listValue?: ListValue,
}

const valueDescriptor: MessageDescriptor<rawValueType> = {
    name: '.google.protobuf.Value',
    fields: [
        {kind: 'enum', name: 'nullValue', num: 1, type: () => NullValue.descriptor},
        {kind: 'scalar', name: 'numberValue', num: 2, type: ScalarType.DOUBLE},
        {kind: 'scalar', name: 'stringValue', num: 3, type: ScalarType.STRING},
        {kind: 'scalar', name: 'boolValue', num: 4, type: ScalarType.BOOL},
        {kind: 'message', name: 'structValue', num: 5, type: () => Struct.descriptor},
        {kind: 'message', name: 'listValue', num: 6, type: () => ListValue.descriptor}
    ]
}

export const writeValue = function (writer: ProtobufWriter, value: Value): void {
    const raw: rawValueType = {}
    switch (typeof value) {
        case 'undefined':
            raw.nullValue = 'NULL_VALUE'
            break
        case 'boolean':
            raw.boolValue = value
            break
        case 'number':
            raw.numberValue = value
            break
        case 'string':
            raw.stringValue = value
            break
        case 'object':
            if (value === null) {
                raw.nullValue = 'NULL_VALUE'
                break
            }
            if (value instanceof Array) {
                raw.listValue = value
                break
            }
            raw.structValue = value
            break
        default:
            break
    }
    writeMessage(writer, valueDescriptor, raw)
}

export const readValue = function (reader: ProtobufReader, size: number): Value {
    const raw = readMessage(reader, valueDescriptor, size)
    if (raw.nullValue !== undefined) return <any>null
    if (raw.listValue !== undefined) return raw.listValue
    if (raw.structValue !== undefined) return raw.structValue
    if (raw.numberValue !== undefined) return raw.numberValue
    if (raw.stringValue !== undefined) return raw.stringValue
    if (raw.boolValue !== undefined) return raw.boolValue
    return <any>null
}

export const boxValue = <any>boxFun(Value.name)

export const unboxValue = <any>unboxFun()

type rawListValueType = {
    values?: Value[]
}

const listValueDescriptor: MessageDescriptor<rawListValueType> = {
    name: '.google.protobuf.ListValue',
    fields: [{kind: 'message', name: 'values', num: 1, type: () => Value.descriptor, repeat: true}]
}

export const writeListValue = function (writer: ProtobufWriter, value: ListValue): void {
    const raw: rawListValueType = {values: <any>value}
    writeMessage(writer, listValueDescriptor, raw)
}

export const readListValue = function (reader: ProtobufReader, size: number): ListValue {
    const raw = readMessage(reader, listValueDescriptor, size)
    return <any>raw.values
}

export const boxListValue = boxFun(ListValue.name)

export const unboxListValue = unboxFun()
