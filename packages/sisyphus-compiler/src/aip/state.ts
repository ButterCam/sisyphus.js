import {CodeBuilder} from '../code-builder'
import {FileDescriptor, MethodDescriptor, ServiceDescriptor} from '../descriptor'
import {GeneratingState} from '../generator'
import {FilesGeneratingState} from '../state'

export type FileAipGeneratingState = GeneratingState<'file:aip', FilesGeneratingState, FileDescriptor, CodeBuilder>

export type ServiceAipGeneratingState = GeneratingState<'service:aip', FileAipGeneratingState, ServiceDescriptor, CodeBuilder>

export type ServiceAipImplGeneratingState = GeneratingState<'service:aip:impl', FileAipGeneratingState, ServiceDescriptor, CodeBuilder>

export type MethodAipDescriptorGeneratingState = GeneratingState<'method:aip:desc', ServiceAipImplGeneratingState, MethodDescriptor, CodeBuilder>