import {base64Encode} from '@sisyphus.js/runtime'
import {ByteInputStream} from './byte-stream'
import {ProtobufReaderImpl} from './protobuf-reader'
import {ProtobufWriterImpl} from './protobuf-writer'
import {MessageDescriptor} from './reflection'
import {readMessage} from './reflection-reader'
import {writeMessage} from './reflection-writer'

export function binaryify<T>(desc: MessageDescriptor<T>, value: T): Uint8Array {
    const writer = new ProtobufWriterImpl()
    writeMessage(writer, desc, value)
    return writer.result()
}

export function parse<T>(desc: MessageDescriptor<T>, buffer: Uint8Array): T {
    const reader = new ProtobufReaderImpl(new ByteInputStream(buffer))
    const test = base64Encode(buffer)
    return readMessage(reader, desc, buffer.byteLength)
}

export function binaryifyFun<T>(desc: MessageDescriptor<T>): (value: T) => Uint8Array {
    return (value: T) => binaryify(desc, value)
}

export function parseFun<T>(desc: MessageDescriptor<T>): (buffer: Uint8Array) => T {
    return (buffer: Uint8Array) => parse(desc, buffer)
}