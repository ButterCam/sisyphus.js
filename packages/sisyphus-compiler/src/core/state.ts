import {CodeBuilder} from '../code-builder'
import {
    EnumDescriptor,
    EnumValueDescriptor,
    ExtensionDescriptor,
    FieldDescriptor,
    FileDescriptor,
    MessageDescriptor,
    MethodDescriptor,
    OneofDescriptor,
    ServiceDescriptor
} from '../descriptor'
import {GeneratingState} from '../generator'
import {FilesGeneratingState} from '../state'

export type FileGeneratingState = GeneratingState<'file', FilesGeneratingState, FileDescriptor, CodeBuilder>

export type FileHeaderGeneratingState<T extends string> = GeneratingState<'file:header', GeneratingState<string, any, FileDescriptor, any>, T, CodeBuilder>

export type ExtensionGroupGeneratingState = GeneratingState<'extensionGroup', FileGeneratingState, string, CodeBuilder>

export type ExtensionGeneratingState = GeneratingState<'extension', ExtensionGroupGeneratingState, ExtensionDescriptor, CodeBuilder>

export type MessageGeneratingState = GeneratingState<'message', FileGeneratingState | MessageGeneratingState, MessageDescriptor, CodeBuilder>

export type FieldGeneratingState = GeneratingState<'field', MessageGeneratingState, FieldDescriptor, CodeBuilder>

export type OneofGeneratingState = GeneratingState<'oneof', MessageGeneratingState, OneofDescriptor, CodeBuilder>

export type EnumGeneratingState = GeneratingState<'enum', FileGeneratingState | MessageGeneratingState, EnumDescriptor, CodeBuilder>

export type EnumValueGeneratingState = GeneratingState<'enumValue', EnumGeneratingState, EnumValueDescriptor, CodeBuilder>

export type ServiceGeneratingState = GeneratingState<'service', FileGeneratingState, ServiceDescriptor, CodeBuilder>

export type ServiceMethodGeneratingState = GeneratingState<'method', ServiceGeneratingState, MethodDescriptor, CodeBuilder>
