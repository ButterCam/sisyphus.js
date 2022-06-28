import {CodeBuilder} from '../code-builder'
import {
    EnumDescriptor,
    EnumValueDescriptor,
    ExtensionDescriptor,
    FieldDescriptor,
    FileDescriptor,
    MessageDescriptor
} from '../descriptor'
import {GeneratingState} from '../generator'
import {FilesGeneratingState} from '../state'

export type FileProtobufGeneratingState = GeneratingState<'file:proto', FilesGeneratingState, FileDescriptor, CodeBuilder>

export type MessageProtobufGeneratingState = GeneratingState<'message:proto', FileProtobufGeneratingState | MessageProtobufGeneratingState, MessageDescriptor, CodeBuilder>

export type MessageProtobufImplGeneratingState = GeneratingState<'message:proto:impl', FileProtobufGeneratingState | MessageProtobufGeneratingState, MessageDescriptor, CodeBuilder>

export type MessageProtobufDescriptorGeneratingState = GeneratingState<'message:proto:desc', MessageProtobufImplGeneratingState, MessageDescriptor, CodeBuilder>

export type FieldProtobufDescriptorGeneratingState = GeneratingState<'field:proto:descriptor', MessageProtobufGeneratingState | ExtensionProtobufGeneratingState, FieldDescriptor, CodeBuilder>

export type ExtensionProtobufGeneratingState = GeneratingState<'extension:proto', FileProtobufGeneratingState | MessageProtobufGeneratingState, ExtensionDescriptor, CodeBuilder>

export type EnumProtobufGeneratingState = GeneratingState<'enum:proto', FileProtobufGeneratingState | MessageProtobufGeneratingState, EnumDescriptor, CodeBuilder>

export type EnumProtobufImplGeneratingState = GeneratingState<'enum:proto:impl', FileProtobufGeneratingState | MessageProtobufGeneratingState, EnumDescriptor, CodeBuilder>

export type EnumValueProtobufDescriptorGeneratingState = GeneratingState<'enumValue:proto:descriptor', EnumProtobufImplGeneratingState, EnumValueDescriptor, CodeBuilder>
