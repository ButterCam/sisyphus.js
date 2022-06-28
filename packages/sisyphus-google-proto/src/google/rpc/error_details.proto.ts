import {BadRequest, DebugInfo, ErrorInfo, Help, LocalizedMessage, PreconditionFailure, QuotaFailure, RequestInfo, ResourceInfo, RetryInfo} from '@sisyphus.js/google/lib/google/rpc/error_details'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {Duration} from '@sisyphus.js/runtime.proto/lib/google/protobuf/duration.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/rpc/error_details' {
    namespace RetryInfo {
        let descriptor: MessageDescriptor<RetryInfo>

        function binaryify(v: RetryInfo): Uint8Array

        function parse(buffer: Uint8Array): RetryInfo
    }

    namespace DebugInfo {
        let descriptor: MessageDescriptor<DebugInfo>

        function binaryify(v: DebugInfo): Uint8Array

        function parse(buffer: Uint8Array): DebugInfo
    }

    namespace QuotaFailure {
        let descriptor: MessageDescriptor<QuotaFailure>

        function binaryify(v: QuotaFailure): Uint8Array

        function parse(buffer: Uint8Array): QuotaFailure
        namespace Violation {
            let descriptor: MessageDescriptor<Violation>

            function binaryify(v: Violation): Uint8Array

            function parse(buffer: Uint8Array): Violation
        }
    }

    namespace ErrorInfo {
        let descriptor: MessageDescriptor<ErrorInfo>

        function binaryify(v: ErrorInfo): Uint8Array

        function parse(buffer: Uint8Array): ErrorInfo
    }

    namespace PreconditionFailure {
        let descriptor: MessageDescriptor<PreconditionFailure>

        function binaryify(v: PreconditionFailure): Uint8Array

        function parse(buffer: Uint8Array): PreconditionFailure
        namespace Violation {
            let descriptor: MessageDescriptor<Violation>

            function binaryify(v: Violation): Uint8Array

            function parse(buffer: Uint8Array): Violation
        }
    }

    namespace BadRequest {
        let descriptor: MessageDescriptor<BadRequest>

        function binaryify(v: BadRequest): Uint8Array

        function parse(buffer: Uint8Array): BadRequest
        namespace FieldViolation {
            let descriptor: MessageDescriptor<FieldViolation>

            function binaryify(v: FieldViolation): Uint8Array

            function parse(buffer: Uint8Array): FieldViolation
        }
    }

    namespace RequestInfo {
        let descriptor: MessageDescriptor<RequestInfo>

        function binaryify(v: RequestInfo): Uint8Array

        function parse(buffer: Uint8Array): RequestInfo
    }

    namespace ResourceInfo {
        let descriptor: MessageDescriptor<ResourceInfo>

        function binaryify(v: ResourceInfo): Uint8Array

        function parse(buffer: Uint8Array): ResourceInfo
    }

    namespace Help {
        let descriptor: MessageDescriptor<Help>

        function binaryify(v: Help): Uint8Array

        function parse(buffer: Uint8Array): Help
        namespace Link {
            let descriptor: MessageDescriptor<Link>

            function binaryify(v: Link): Uint8Array

            function parse(buffer: Uint8Array): Link
        }
    }

    namespace LocalizedMessage {
        let descriptor: MessageDescriptor<LocalizedMessage>

        function binaryify(v: LocalizedMessage): Uint8Array

        function parse(buffer: Uint8Array): LocalizedMessage
    }
}

export * from '@sisyphus.js/google/lib/google/rpc/error_details'

RetryInfo.descriptor = protobufDefinition({
    name: '.google.rpc.RetryInfo',

    fields: [{kind: 'message', name: 'retryDelay', num: 1, type: () => Duration.descriptor}]
})

RetryInfo.binaryify = binaryifyFun(RetryInfo.descriptor)

RetryInfo.parse = parseFun(RetryInfo.descriptor)

DebugInfo.descriptor = protobufDefinition({
    name: '.google.rpc.DebugInfo',

    fields: [
        {kind: 'scalar', name: 'stackEntries', num: 1, type: 9 /* STRING */, repeat: 1},

        {kind: 'scalar', name: 'detail', num: 2, type: 9 /* STRING */}
    ]
})

DebugInfo.binaryify = binaryifyFun(DebugInfo.descriptor)

DebugInfo.parse = parseFun(DebugInfo.descriptor)

QuotaFailure.descriptor = protobufDefinition({
    name: '.google.rpc.QuotaFailure',

    fields: [{kind: 'message', name: 'violations', num: 1, type: () => QuotaFailure.Violation.descriptor, repeat: true}]
})

QuotaFailure.binaryify = binaryifyFun(QuotaFailure.descriptor)

QuotaFailure.parse = parseFun(QuotaFailure.descriptor)

QuotaFailure.Violation.descriptor = protobufDefinition({
    name: '.google.rpc.QuotaFailure.Violation',

    fields: [
        {kind: 'scalar', name: 'subject', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'description', num: 2, type: 9 /* STRING */}
    ]
})

QuotaFailure.Violation.binaryify = binaryifyFun(QuotaFailure.Violation.descriptor)

QuotaFailure.Violation.parse = parseFun(QuotaFailure.Violation.descriptor)

ErrorInfo.descriptor = protobufDefinition({
    name: '.google.rpc.ErrorInfo',

    fields: [
        {kind: 'scalar', name: 'reason', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'domain', num: 2, type: 9 /* STRING */},

        {kind: 'map', name: 'metadata', num: 3, key: 9 /* STRING */, value: 9 /* STRING */}
    ]
})

ErrorInfo.binaryify = binaryifyFun(ErrorInfo.descriptor)

ErrorInfo.parse = parseFun(ErrorInfo.descriptor)

PreconditionFailure.descriptor = protobufDefinition({
    name: '.google.rpc.PreconditionFailure',

    fields: [{kind: 'message', name: 'violations', num: 1, type: () => PreconditionFailure.Violation.descriptor, repeat: true}]
})

PreconditionFailure.binaryify = binaryifyFun(PreconditionFailure.descriptor)

PreconditionFailure.parse = parseFun(PreconditionFailure.descriptor)

PreconditionFailure.Violation.descriptor = protobufDefinition({
    name: '.google.rpc.PreconditionFailure.Violation',

    fields: [
        {kind: 'scalar', name: 'type', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'subject', num: 2, type: 9 /* STRING */},

        {kind: 'scalar', name: 'description', num: 3, type: 9 /* STRING */}
    ]
})

PreconditionFailure.Violation.binaryify = binaryifyFun(PreconditionFailure.Violation.descriptor)

PreconditionFailure.Violation.parse = parseFun(PreconditionFailure.Violation.descriptor)

BadRequest.descriptor = protobufDefinition({
    name: '.google.rpc.BadRequest',

    fields: [{kind: 'message', name: 'fieldViolations', num: 1, type: () => BadRequest.FieldViolation.descriptor, repeat: true}]
})

BadRequest.binaryify = binaryifyFun(BadRequest.descriptor)

BadRequest.parse = parseFun(BadRequest.descriptor)

BadRequest.FieldViolation.descriptor = protobufDefinition({
    name: '.google.rpc.BadRequest.FieldViolation',

    fields: [
        {kind: 'scalar', name: 'field', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'description', num: 2, type: 9 /* STRING */}
    ]
})

BadRequest.FieldViolation.binaryify = binaryifyFun(BadRequest.FieldViolation.descriptor)

BadRequest.FieldViolation.parse = parseFun(BadRequest.FieldViolation.descriptor)

RequestInfo.descriptor = protobufDefinition({
    name: '.google.rpc.RequestInfo',

    fields: [
        {kind: 'scalar', name: 'requestId', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'servingData', num: 2, type: 9 /* STRING */}
    ]
})

RequestInfo.binaryify = binaryifyFun(RequestInfo.descriptor)

RequestInfo.parse = parseFun(RequestInfo.descriptor)

ResourceInfo.descriptor = protobufDefinition({
    name: '.google.rpc.ResourceInfo',

    fields: [
        {kind: 'scalar', name: 'resourceType', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'resourceName', num: 2, type: 9 /* STRING */},

        {kind: 'scalar', name: 'owner', num: 3, type: 9 /* STRING */},

        {kind: 'scalar', name: 'description', num: 4, type: 9 /* STRING */}
    ]
})

ResourceInfo.binaryify = binaryifyFun(ResourceInfo.descriptor)

ResourceInfo.parse = parseFun(ResourceInfo.descriptor)

Help.descriptor = protobufDefinition({
    name: '.google.rpc.Help',

    fields: [{kind: 'message', name: 'links', num: 1, type: () => Help.Link.descriptor, repeat: true}]
})

Help.binaryify = binaryifyFun(Help.descriptor)

Help.parse = parseFun(Help.descriptor)

Help.Link.descriptor = protobufDefinition({
    name: '.google.rpc.Help.Link',

    fields: [
        {kind: 'scalar', name: 'description', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'url', num: 2, type: 9 /* STRING */}
    ]
})

Help.Link.binaryify = binaryifyFun(Help.Link.descriptor)

Help.Link.parse = parseFun(Help.Link.descriptor)

LocalizedMessage.descriptor = protobufDefinition({
    name: '.google.rpc.LocalizedMessage',

    fields: [
        {kind: 'scalar', name: 'locale', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'message', num: 2, type: 9 /* STRING */}
    ]
})

LocalizedMessage.binaryify = binaryifyFun(LocalizedMessage.descriptor)

LocalizedMessage.parse = parseFun(LocalizedMessage.descriptor)
