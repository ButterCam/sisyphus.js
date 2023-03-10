import {EnumGeneratingState, FileHeaderGeneratingState, MessageGeneratingState} from '../core/state'
import {wellknownProtos} from './wellknown'

generate<FileHeaderGeneratingState<''>>('file:header', it => {
    if (!wellknownProtos.has(it.parent.descriptor.name())) {
        return
    }

    if (it.descriptor !== '') {
        return
    }

    it.target.importManager.importMapping = function (current, lib, name): [string, string | undefined] {
        if (lib === '@sisyphus.js/runtime') {
            switch (name) {
                case 'long':
                    return ['../../long', 'long']
                case 'WrapperType':
                    return ['../../wrappers', 'WrapperType']
            }
        }
        return [lib, name]
    }
})

generate<MessageGeneratingState>('message', it => {
    if (it.descriptor.fullname() != 'google.protobuf.Any') return
    it.generatedElements++
    const builder = it.target

    builder.normalize().lineComment(...it.descriptor.comments())
    builder.normalize().document(it.descriptor.document())
    builder.beginBlock('export interface Any')
    builder.normalize().appendLn(`'@type': string`)
    builder.endBlock(it.descriptor.trailingComment())
    builder.normalize()
    builder.beginBlock(`export namespace ${it.descriptor.interfaceName()}`)
    builder.normalize().appendLn(`export const name = '${it.descriptor.fullname()}'`)
    builder.endBlock()
    it.continue = false
})

generate<MessageGeneratingState>('message', it => {
    if (it.descriptor.fullname() != 'google.protobuf.Duration') return
    it.generatedElements++
    const builder = it.target

    builder.normalize().lineComment(...it.descriptor.comments())
    builder.normalize().document(it.descriptor.document())
    builder.importManager.import('@sisyphus.js/runtime', 'WrapperType')
    builder.appendLn('export type Duration = `${number}s` & WrapperType')

    builder.normalize().beginBlock(`export namespace ${it.descriptor.interfaceName()}`)
    builder.normalize().appendLn(`export const name = '${it.descriptor.fullname()}'`)
    builder.endBlock()
    it.continue = false
})

generate<MessageGeneratingState>('message', it => {
    if (it.descriptor.fullname() != 'google.protobuf.Empty') return
    it.generatedElements++
    const builder = it.target

    builder.normalize().lineComment(...it.descriptor.comments())
    builder.normalize().document(it.descriptor.document())
    builder.appendLn('export type Empty = Record<any, never>')

    builder.normalize().beginBlock(`export namespace ${it.descriptor.interfaceName()}`)
    builder.normalize().appendLn(`export const name = '${it.descriptor.fullname()}'`)
    builder.endBlock()
    it.continue = false
})

generate<MessageGeneratingState>('message', it => {
    if (it.descriptor.fullname() != 'google.protobuf.FieldMask') return
    it.generatedElements++
    const builder = it.target

    builder.normalize().lineComment(...it.descriptor.comments())
    builder.normalize().document(it.descriptor.document())
    builder.importManager.import('@sisyphus.js/runtime', 'WrapperType')
    builder.appendLn('export type FieldMask = string & WrapperType')

    builder.normalize().beginBlock(`export namespace ${it.descriptor.interfaceName()}`)
    builder.normalize().appendLn(`export const name = '${it.descriptor.fullname()}'`)
    builder.endBlock()
    it.continue = false
})

generate<MessageGeneratingState>('message', it => {
    if (it.descriptor.fullname() != 'google.protobuf.Struct') return
    it.generatedElements++
    const builder = it.target

    builder.normalize().lineComment(...it.descriptor.comments())
    builder.normalize().document(it.descriptor.document())
    builder.importManager.import('@sisyphus.js/runtime', 'WrapperType')
    builder.appendLn('export type Struct = { [k: string]: Value } & WrapperType')
    builder.normalize().beginBlock(`export namespace ${it.descriptor.interfaceName()}`)
    builder.normalize().appendLn(`export const name = '${it.descriptor.fullname()}'`)
    builder.endBlock()
    it.continue = false
})

generate<MessageGeneratingState>('message', it => {
    if (it.descriptor.fullname() != 'google.protobuf.Value') return
    it.generatedElements++
    const builder = it.target

    builder.normalize().lineComment(...it.descriptor.comments())
    builder.normalize().document(it.descriptor.document())
    builder.importManager.import('@sisyphus.js/runtime', 'WrapperType')
    builder.appendLn('export type Value = Struct | ListValue | NullValue | ((boolean | string | number) & WrapperType)')
    builder.normalize().beginBlock(`export namespace ${it.descriptor.interfaceName()}`)
    builder.normalize().appendLn(`export const name = '${it.descriptor.fullname()}'`)
    builder.endBlock()
    it.continue = false
})

generate<MessageGeneratingState>('message', it => {
    if (it.descriptor.fullname() != 'google.protobuf.ListValue') return
    it.generatedElements++
    const builder = it.target

    builder.normalize().lineComment(...it.descriptor.comments())
    builder.normalize().document(it.descriptor.document())
    builder.importManager.import('@sisyphus.js/runtime', 'WrapperType')
    builder.appendLn('export type ListValue = Value[] & WrapperType')
    builder.normalize().beginBlock(`export namespace ${it.descriptor.interfaceName()}`)
    builder.normalize().appendLn(`export const name = '${it.descriptor.fullname()}'`)
    builder.endBlock()
    it.continue = false
})

generate<EnumGeneratingState>('enum', it => {
    if (it.descriptor.fullname() != 'google.protobuf.NullValue') return
    it.generatedElements++
    const builder = it.target

    builder.normalize().lineComment(...it.descriptor.comments())
    builder.normalize().document(it.descriptor.document())
    builder.importManager.import('@sisyphus.js/runtime', 'WrapperType')
    builder.appendLn('export type NullValue = null & WrapperType')
    builder.normalize().beginBlock(`export namespace ${it.descriptor.enumName()}`)
    builder.normalize().appendLn(`export const name = '${it.descriptor.fullname()}'`)
    builder.endBlock()
    it.continue = false
})


generate<MessageGeneratingState>('message', it => {
    if (it.descriptor.fullname() != 'google.protobuf.Timestamp') return
    it.generatedElements++
    const builder = it.target

    builder.normalize().lineComment(...it.descriptor.comments())
    builder.normalize().document(it.descriptor.document())
    builder.importManager.import('@sisyphus.js/runtime', 'WrapperType')
    builder.appendLn('export type Timestamp = string & WrapperType')
    builder.normalize().beginBlock(`export namespace ${it.descriptor.interfaceName()}`)
    builder.normalize().appendLn(`export const name = '${it.descriptor.fullname()}'`)
    builder.endBlock()
    it.continue = false
})

generate<MessageGeneratingState>('message', it => {
    if (it.descriptor.fullname() != 'google.protobuf.DoubleValue') return
    it.generatedElements++
    const builder = it.target

    builder.normalize().lineComment(...it.descriptor.comments())
    builder.normalize().document(it.descriptor.document())
    builder.importManager.import('@sisyphus.js/runtime', 'WrapperType')
    builder.appendLn('export type DoubleValue = number & WrapperType')
    builder.normalize().beginBlock(`export namespace ${it.descriptor.interfaceName()}`)
    builder.normalize().appendLn(`export const name = '${it.descriptor.fullname()}'`)
    builder.endBlock()
    it.continue = false
})

generate<MessageGeneratingState>('message', it => {
    if (it.descriptor.fullname() != 'google.protobuf.FloatValue') return
    it.generatedElements++
    const builder = it.target

    builder.normalize().lineComment(...it.descriptor.comments())
    builder.normalize().document(it.descriptor.document())
    builder.importManager.import('@sisyphus.js/runtime', 'WrapperType')
    builder.appendLn('export type FloatValue = number & WrapperType')
    builder.normalize().beginBlock(`export namespace ${it.descriptor.interfaceName()}`)
    builder.normalize().appendLn(`export const name = '${it.descriptor.fullname()}'`)
    builder.endBlock()
    it.continue = false
})

generate<MessageGeneratingState>('message', it => {
    if (it.descriptor.fullname() != 'google.protobuf.Int64Value') return
    it.generatedElements++
    const builder = it.target

    builder.normalize().lineComment(...it.descriptor.comments())
    builder.normalize().document(it.descriptor.document())
    builder.importManager.import('@sisyphus.js/runtime', 'WrapperType')
    builder.importManager.import('@sisyphus.js/runtime', 'long')
    builder.appendLn('export type Int64Value = long & WrapperType')
    builder.normalize().beginBlock(`export namespace ${it.descriptor.interfaceName()}`)
    builder.normalize().appendLn(`export const name = '${it.descriptor.fullname()}'`)
    builder.endBlock()
    it.continue = false
})

generate<MessageGeneratingState>('message', it => {
    if (it.descriptor.fullname() != 'google.protobuf.UInt64Value') return
    it.generatedElements++
    const builder = it.target

    builder.normalize().lineComment(...it.descriptor.comments())
    builder.normalize().document(it.descriptor.document())
    builder.importManager.import('@sisyphus.js/runtime', 'WrapperType')
    builder.importManager.import('@sisyphus.js/runtime', 'long')
    builder.appendLn('export type UInt64Value = long & WrapperType')
    builder.normalize().beginBlock(`export namespace ${it.descriptor.interfaceName()}`)
    builder.normalize().appendLn(`export const name = '${it.descriptor.fullname()}'`)
    builder.endBlock()
    it.continue = false
})

generate<MessageGeneratingState>('message', it => {
    if (it.descriptor.fullname() != 'google.protobuf.Int32Value') return
    it.generatedElements++
    const builder = it.target

    builder.normalize().lineComment(...it.descriptor.comments())
    builder.normalize().document(it.descriptor.document())
    builder.importManager.import('@sisyphus.js/runtime', 'WrapperType')
    builder.appendLn('export type Int32Value = number & WrapperType')
    builder.normalize().beginBlock(`export namespace ${it.descriptor.interfaceName()}`)
    builder.normalize().appendLn(`export const name = '${it.descriptor.fullname()}'`)
    builder.endBlock()
    it.continue = false
})

generate<MessageGeneratingState>('message', it => {
    if (it.descriptor.fullname() != 'google.protobuf.UInt32Value') return
    it.generatedElements++
    const builder = it.target

    builder.normalize().lineComment(...it.descriptor.comments())
    builder.normalize().document(it.descriptor.document())
    builder.importManager.import('@sisyphus.js/runtime', 'WrapperType')
    builder.appendLn('export type UInt32Value = number & WrapperType')
    builder.normalize().beginBlock(`export namespace ${it.descriptor.interfaceName()}`)
    builder.normalize().appendLn(`export const name = '${it.descriptor.fullname()}'`)
    builder.endBlock()
    it.continue = false
})

generate<MessageGeneratingState>('message', it => {
    if (it.descriptor.fullname() != 'google.protobuf.BoolValue') return
    it.generatedElements++
    const builder = it.target

    builder.normalize().lineComment(...it.descriptor.comments())
    builder.normalize().document(it.descriptor.document())
    builder.importManager.import('@sisyphus.js/runtime', 'WrapperType')
    builder.appendLn('export type BoolValue = boolean & WrapperType')
    builder.normalize().beginBlock(`export namespace ${it.descriptor.interfaceName()}`)
    builder.normalize().appendLn(`export const name = '${it.descriptor.fullname()}'`)
    builder.endBlock()
    it.continue = false
})

generate<MessageGeneratingState>('message', it => {
    if (it.descriptor.fullname() != 'google.protobuf.StringValue') return
    it.generatedElements++
    const builder = it.target

    builder.normalize().lineComment(...it.descriptor.comments())
    builder.normalize().document(it.descriptor.document())
    builder.importManager.import('@sisyphus.js/runtime', 'WrapperType')
    builder.appendLn('export type StringValue = string & WrapperType')
    builder.normalize().beginBlock(`export namespace ${it.descriptor.interfaceName()}`)
    builder.normalize().appendLn(`export const name = '${it.descriptor.fullname()}'`)
    builder.endBlock()
    it.continue = false
})

generate<MessageGeneratingState>('message', it => {
    if (it.descriptor.fullname() != 'google.protobuf.BytesValue') return
    it.generatedElements++
    const builder = it.target

    builder.normalize().lineComment(...it.descriptor.comments())
    builder.normalize().document(it.descriptor.document())
    builder.importManager.import('@sisyphus.js/runtime', 'WrapperType')
    builder.appendLn('export type BytesValue = string & WrapperType')
    builder.normalize().beginBlock(`export namespace ${it.descriptor.interfaceName()}`)
    builder.normalize().appendLn(`export const name = '${it.descriptor.fullname()}'`)
    builder.endBlock()
    it.continue = false
})