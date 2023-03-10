import {CodeBuilder} from '../code-builder'
import {FileHeaderGeneratingState} from '../core/state'
import {MessageProtobufDescriptorGeneratingState} from '../protobuf/state'
import {wellknownProtos} from './wellknown'

generate<FileHeaderGeneratingState<'proto'>>('file:header', it => {
    if (!wellknownProtos.has(it.parent.descriptor.name())) {
        return
    }

    if (it.descriptor !== 'proto') {
        return
    }

    it.target.importManager.importMapping = function (current, lib, name): [string, string | undefined] {
        switch (lib) {
            case '@sisyphus.js/runtime.proto':
                switch (name) {
                    case 'MessageDescriptor':
                    case 'EnumDescriptor':
                        return ['../../reflection', name]
                }
                break
            case '@sisyphus.js/runtime.proto/lib/wellknown/any':
                return ['../../wellknown/any', name]
            case '@sisyphus.js/runtime.proto/lib/wellknown/duration':
                return ['../../wellknown/duration', name]
            case '@sisyphus.js/runtime.proto/lib/wellknown/empty':
                return ['../../wellknown/empty', name]
            case '@sisyphus.js/runtime.proto/lib/wellknown/field-mask':
                return ['../../wellknown/field-mask', name]
            case '@sisyphus.js/runtime.proto/lib/wellknown/struct':
                return ['../../wellknown/struct', name]
            case '@sisyphus.js/runtime.proto/lib/wellknown/timestamp':
                return ['../../wellknown/timestamp', name]
            case '@sisyphus.js/runtime.proto/lib/wellknown/wrappers':
                return ['../../wellknown/wrappers', name]
            case '@sisyphus.js/runtime.proto/lib/message':
                return ['../../message', name]
        }
        return [lib, name]
    }

    it.continue = false
})

generate<MessageProtobufDescriptorGeneratingState>('message:proto:desc', it => {
    if (it.descriptor.fullname() != 'google.protobuf.Any') return
    it.generatedElements++
    const builder = it.target.normalize()
    importFromWellknown(builder, 'any', 'write')
    importFromWellknown(builder, 'any', 'read')
    builder.ln()
    it.continue = false
})

generate<MessageProtobufDescriptorGeneratingState>('message:proto:desc', it => {
    if (it.descriptor.fullname() != 'google.protobuf.Duration') return
    it.generatedElements++
    const builder = it.target.normalize()
    importFromWellknown(builder, 'duration', 'write')
    importFromWellknown(builder, 'duration', 'read')
    importFromWellknown(builder, 'duration', 'box')
    importFromWellknown(builder, 'duration', 'unbox')
    builder.ln()
    it.continue = false
})

generate<MessageProtobufDescriptorGeneratingState>('message:proto:desc', it => {
    if (it.descriptor.fullname() != 'google.protobuf.Empty') return
    it.generatedElements++
    const builder = it.target.normalize()
    importFromWellknown(builder, 'empty', 'write')
    importFromWellknown(builder, 'empty', 'read')
    builder.ln()
    it.continue = false
})

generate<MessageProtobufDescriptorGeneratingState>('message:proto:desc', it => {
    if (it.descriptor.fullname() != 'google.protobuf.FieldMask') return
    it.generatedElements++
    const builder = it.target.normalize()
    importFromWellknown(builder, 'field-mask', 'write')
    importFromWellknown(builder, 'field-mask', 'read')
    importFromWellknown(builder, 'field-mask', 'box')
    importFromWellknown(builder, 'field-mask', 'unbox')
    builder.ln()
    it.continue = false
})

generate<MessageProtobufDescriptorGeneratingState>('message:proto:desc', it => {
    if (it.descriptor.fullname() != 'google.protobuf.Struct') return
    it.generatedElements++
    const builder = it.target.normalize()
    importFromWellknown(builder, 'struct', 'write', 'writeStruct')
    importFromWellknown(builder, 'struct', 'read', 'readStruct')
    importFromWellknown(builder, 'struct', 'box', 'boxStruct')
    importFromWellknown(builder, 'struct', 'unbox', 'unboxStruct')
    builder.ln()
    it.continue = false
})

generate<MessageProtobufDescriptorGeneratingState>('message:proto:desc', it => {
    if (it.descriptor.fullname() != 'google.protobuf.Value') return
    it.generatedElements++
    const builder = it.target.normalize()
    importFromWellknown(builder, 'struct', 'write', 'writeValue')
    importFromWellknown(builder, 'struct', 'read', 'readValue')
    importFromWellknown(builder, 'struct', 'box', 'boxValue')
    importFromWellknown(builder, 'struct', 'unbox', 'unboxValue')
    builder.ln()
    it.continue = false
})

generate<MessageProtobufDescriptorGeneratingState>('message:proto:desc', it => {
    if (it.descriptor.fullname() != 'google.protobuf.ListValue') return
    it.generatedElements++
    const builder = it.target.normalize()
    importFromWellknown(builder, 'struct', 'write', 'writeListValue')
    importFromWellknown(builder, 'struct', 'read', 'readListValue')
    importFromWellknown(builder, 'struct', 'box', 'boxListValue')
    importFromWellknown(builder, 'struct', 'unbox', 'unboxListValue')
    builder.ln()
    it.continue = false
})

generate<MessageProtobufDescriptorGeneratingState>('message:proto:desc', it => {
    if (it.descriptor.fullname() != 'google.protobuf.Timestamp') return
    it.generatedElements++
    const builder = it.target.normalize()
    importFromWellknown(builder, 'timestamp', 'write')
    importFromWellknown(builder, 'timestamp', 'read')
    importFromWellknown(builder, 'timestamp', 'box')
    importFromWellknown(builder, 'timestamp', 'unbox')
    builder.ln()
    it.continue = false
})

generate<MessageProtobufDescriptorGeneratingState>('message:proto:desc', it => {
    if (it.descriptor.fullname() != 'google.protobuf.DoubleValue') return
    it.generatedElements++
    const builder = it.target.normalize()
    importFromWellknown(builder, 'wrappers', 'write', 'writeDoubleValue')
    importFromWellknown(builder, 'wrappers', 'read', 'readDoubleValue')
    importFromWellknown(builder, 'wrappers', 'box', 'boxDoubleValue')
    importFromWellknown(builder, 'wrappers', 'unbox', 'unboxDoubleValue')
    builder.ln()
    it.continue = false
})

generate<MessageProtobufDescriptorGeneratingState>('message:proto:desc', it => {
    if (it.descriptor.fullname() != 'google.protobuf.FloatValue') return
    it.generatedElements++
    const builder = it.target.normalize()
    importFromWellknown(builder, 'wrappers', 'write', 'writeFloatValue')
    importFromWellknown(builder, 'wrappers', 'read', 'readFloatValue')
    importFromWellknown(builder, 'wrappers', 'box', 'boxFloatValue')
    importFromWellknown(builder, 'wrappers', 'unbox', 'unboxFloatValue')
    builder.ln()
    it.continue = false
})

generate<MessageProtobufDescriptorGeneratingState>('message:proto:desc', it => {
    if (it.descriptor.fullname() != 'google.protobuf.Int32Value') return
    it.generatedElements++
    const builder = it.target.normalize()
    importFromWellknown(builder, 'wrappers', 'write', 'writeInt32Value')
    importFromWellknown(builder, 'wrappers', 'read', 'readInt32Value')
    importFromWellknown(builder, 'wrappers', 'box', 'boxInt32Value')
    importFromWellknown(builder, 'wrappers', 'unbox', 'unboxInt32Value')
    builder.ln()
    it.continue = false
})

generate<MessageProtobufDescriptorGeneratingState>('message:proto:desc', it => {
    if (it.descriptor.fullname() != 'google.protobuf.UInt32Value') return
    it.generatedElements++
    const builder = it.target.normalize()
    importFromWellknown(builder, 'wrappers', 'write', 'writeUInt32Value')
    importFromWellknown(builder, 'wrappers', 'read', 'readUInt32Value')
    importFromWellknown(builder, 'wrappers', 'box', 'boxUInt32Value')
    importFromWellknown(builder, 'wrappers', 'unbox', 'unboxUInt32Value')
    builder.ln()
    it.continue = false
})

generate<MessageProtobufDescriptorGeneratingState>('message:proto:desc', it => {
    if (it.descriptor.fullname() != 'google.protobuf.Int64Value') return
    it.generatedElements++
    const builder = it.target.normalize()
    importFromWellknown(builder, 'wrappers', 'write', 'writeInt64Value')
    importFromWellknown(builder, 'wrappers', 'read', 'readInt64Value')
    importFromWellknown(builder, 'wrappers', 'box', 'boxInt64Value')
    importFromWellknown(builder, 'wrappers', 'unbox', 'unboxInt64Value')
    builder.ln()
    it.continue = false
})

generate<MessageProtobufDescriptorGeneratingState>('message:proto:desc', it => {
    if (it.descriptor.fullname() != 'google.protobuf.UInt64Value') return
    it.generatedElements++
    const builder = it.target.normalize()
    importFromWellknown(builder, 'wrappers', 'write', 'writeUInt64Value')
    importFromWellknown(builder, 'wrappers', 'read', 'readUInt64Value')
    importFromWellknown(builder, 'wrappers', 'box', 'boxUInt64Value')
    importFromWellknown(builder, 'wrappers', 'unbox', 'unboxUInt64Value')
    builder.ln()
    it.continue = false
})

generate<MessageProtobufDescriptorGeneratingState>('message:proto:desc', it => {
    if (it.descriptor.fullname() != 'google.protobuf.BoolValue') return
    it.generatedElements++
    const builder = it.target.normalize()
    importFromWellknown(builder, 'wrappers', 'write', 'writeBoolValue')
    importFromWellknown(builder, 'wrappers', 'read', 'readBoolValue')
    importFromWellknown(builder, 'wrappers', 'box', 'boxBoolValue')
    importFromWellknown(builder, 'wrappers', 'unbox', 'unboxBoolValue')
    builder.ln()
    it.continue = false
})

generate<MessageProtobufDescriptorGeneratingState>('message:proto:desc', it => {
    if (it.descriptor.fullname() != 'google.protobuf.StringValue') return
    it.generatedElements++
    const builder = it.target.normalize()
    importFromWellknown(builder, 'wrappers', 'write', 'writeStringValue')
    importFromWellknown(builder, 'wrappers', 'read', 'readStringValue')
    importFromWellknown(builder, 'wrappers', 'box', 'boxStringValue')
    importFromWellknown(builder, 'wrappers', 'unbox', 'unboxStringValue')
    builder.ln()
    it.continue = false
})

generate<MessageProtobufDescriptorGeneratingState>('message:proto:desc', it => {
    if (it.descriptor.fullname() != 'google.protobuf.BytesValue') return
    it.generatedElements++
    const builder = it.target.normalize()
    importFromWellknown(builder, 'wrappers', 'write', 'writeBytesValue')
    importFromWellknown(builder, 'wrappers', 'read', 'readBytesValue')
    importFromWellknown(builder, 'wrappers', 'box', 'boxBytesValue')
    importFromWellknown(builder, 'wrappers', 'unbox', 'unboxBytesValue')
    builder.ln()
    it.continue = false
})

function importFromWellknown(builder: CodeBuilder, module: string, name: string, impl?: string) {
    const implName = builder.importManager.import(`@sisyphus.js/runtime.proto/lib/wellknown/${module}`, impl ?? name)
    if (name == implName) {
        builder.append(`${name}, `)
    } else {
        builder.append(`${name}: ${implName}, `)
    }
}
