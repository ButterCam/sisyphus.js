import {
    AuditLog,
    AuthenticationInfo,
    AuthorizationInfo,
    RequestMetadata,
    ResourceLocation,
    ServiceAccountDelegationInfo
} from '@sisyphus.js/google/lib/google/cloud/audit/audit_log'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {Any} from '@sisyphus.js/runtime.proto/lib/google/protobuf/any.proto'
import {Struct} from '@sisyphus.js/runtime.proto/lib/google/protobuf/struct.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'
import {AttributeContext} from '../../rpc/context/attribute_context.proto'
import {Status} from '../../rpc/status.proto'

declare module '@sisyphus.js/google/lib/google/cloud/audit/audit_log' {
    namespace AuditLog {
        let descriptor: MessageDescriptor<AuditLog>

        function binaryify(v: AuditLog): Uint8Array

        function parse(buffer: Uint8Array): AuditLog
    }

    namespace AuthenticationInfo {
        let descriptor: MessageDescriptor<AuthenticationInfo>

        function binaryify(v: AuthenticationInfo): Uint8Array

        function parse(buffer: Uint8Array): AuthenticationInfo
    }

    namespace AuthorizationInfo {
        let descriptor: MessageDescriptor<AuthorizationInfo>

        function binaryify(v: AuthorizationInfo): Uint8Array

        function parse(buffer: Uint8Array): AuthorizationInfo
    }

    namespace RequestMetadata {
        let descriptor: MessageDescriptor<RequestMetadata>

        function binaryify(v: RequestMetadata): Uint8Array

        function parse(buffer: Uint8Array): RequestMetadata
    }

    namespace ResourceLocation {
        let descriptor: MessageDescriptor<ResourceLocation>

        function binaryify(v: ResourceLocation): Uint8Array

        function parse(buffer: Uint8Array): ResourceLocation
    }

    namespace ServiceAccountDelegationInfo {
        let descriptor: MessageDescriptor<ServiceAccountDelegationInfo>

        function binaryify(v: ServiceAccountDelegationInfo): Uint8Array

        function parse(buffer: Uint8Array): ServiceAccountDelegationInfo
        namespace FirstPartyPrincipal {
            let descriptor: MessageDescriptor<FirstPartyPrincipal>

            function binaryify(v: FirstPartyPrincipal): Uint8Array

            function parse(buffer: Uint8Array): FirstPartyPrincipal
        }

        namespace ThirdPartyPrincipal {
            let descriptor: MessageDescriptor<ThirdPartyPrincipal>

            function binaryify(v: ThirdPartyPrincipal): Uint8Array

            function parse(buffer: Uint8Array): ThirdPartyPrincipal
        }
    }
}

export * from '@sisyphus.js/google/lib/google/cloud/audit/audit_log'

AuditLog.descriptor = protobufDefinition({
    name: '.google.cloud.audit.AuditLog',

    fields: [
        {kind: 'scalar', name: 'serviceName', num: 7, type: 9 /* STRING */},

        {kind: 'scalar', name: 'methodName', num: 8, type: 9 /* STRING */},

        {kind: 'scalar', name: 'resourceName', num: 11, type: 9 /* STRING */},

        {kind: 'message', name: 'resourceLocation', num: 20, type: () => ResourceLocation.descriptor},

        {kind: 'message', name: 'resourceOriginalState', num: 19, type: () => Struct.descriptor},

        {kind: 'scalar', name: 'numResponseItems', num: 12, type: 3 /* INT64 */},

        {kind: 'message', name: 'status', num: 2, type: () => Status.descriptor},

        {kind: 'message', name: 'authenticationInfo', num: 3, type: () => AuthenticationInfo.descriptor},

        {kind: 'message', name: 'authorizationInfo', num: 9, type: () => AuthorizationInfo.descriptor, repeat: true},

        {kind: 'message', name: 'requestMetadata', num: 4, type: () => RequestMetadata.descriptor},

        {kind: 'message', name: 'request', num: 16, type: () => Struct.descriptor},

        {kind: 'message', name: 'response', num: 17, type: () => Struct.descriptor},

        {kind: 'message', name: 'metadata', num: 18, type: () => Struct.descriptor},

        {kind: 'message', name: 'serviceData', num: 15, type: () => Any.descriptor, options: { deprecated: true }}
    ]
})

AuditLog.binaryify = binaryifyFun(AuditLog.descriptor)

AuditLog.parse = parseFun(AuditLog.descriptor)

AuthenticationInfo.descriptor = protobufDefinition({
    name: '.google.cloud.audit.AuthenticationInfo',

    fields: [
        {kind: 'scalar', name: 'principalEmail', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'authoritySelector', num: 2, type: 9 /* STRING */},

        {kind: 'message', name: 'thirdPartyPrincipal', num: 4, type: () => Struct.descriptor},

        {kind: 'scalar', name: 'serviceAccountKeyName', num: 5, type: 9 /* STRING */},

        {kind: 'message', name: 'serviceAccountDelegationInfo', num: 6, type: () => ServiceAccountDelegationInfo.descriptor, repeat: true},

        {kind: 'scalar', name: 'principalSubject', num: 8, type: 9 /* STRING */}
    ]
})

AuthenticationInfo.binaryify = binaryifyFun(AuthenticationInfo.descriptor)

AuthenticationInfo.parse = parseFun(AuthenticationInfo.descriptor)

AuthorizationInfo.descriptor = protobufDefinition({
    name: '.google.cloud.audit.AuthorizationInfo',

    fields: [
        {kind: 'scalar', name: 'resource', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'permission', num: 2, type: 9 /* STRING */},

        {kind: 'scalar', name: 'granted', num: 3, type: 8 /* BOOL */},

        {kind: 'message', name: 'resourceAttributes', num: 5, type: () => AttributeContext.Resource.descriptor}
    ]
})

AuthorizationInfo.binaryify = binaryifyFun(AuthorizationInfo.descriptor)

AuthorizationInfo.parse = parseFun(AuthorizationInfo.descriptor)

RequestMetadata.descriptor = protobufDefinition({
    name: '.google.cloud.audit.RequestMetadata',

    fields: [
        {kind: 'scalar', name: 'callerIp', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'callerSuppliedUserAgent', num: 2, type: 9 /* STRING */},

        {kind: 'scalar', name: 'callerNetwork', num: 3, type: 9 /* STRING */},

        {kind: 'message', name: 'requestAttributes', num: 7, type: () => AttributeContext.Request.descriptor},

        {kind: 'message', name: 'destinationAttributes', num: 8, type: () => AttributeContext.Peer.descriptor}
    ]
})

RequestMetadata.binaryify = binaryifyFun(RequestMetadata.descriptor)

RequestMetadata.parse = parseFun(RequestMetadata.descriptor)

ResourceLocation.descriptor = protobufDefinition({
    name: '.google.cloud.audit.ResourceLocation',

    fields: [
        {kind: 'scalar', name: 'currentLocations', num: 1, type: 9 /* STRING */, repeat: 1},

        {kind: 'scalar', name: 'originalLocations', num: 2, type: 9 /* STRING */, repeat: 1}
    ]
})

ResourceLocation.binaryify = binaryifyFun(ResourceLocation.descriptor)

ResourceLocation.parse = parseFun(ResourceLocation.descriptor)

ServiceAccountDelegationInfo.descriptor = protobufDefinition({
    name: '.google.cloud.audit.ServiceAccountDelegationInfo',

    fields: [
        {kind: 'scalar', name: 'principalSubject', num: 3, type: 9 /* STRING */},

        {kind: 'message', name: 'firstPartyPrincipal', num: 1, type: () => ServiceAccountDelegationInfo.FirstPartyPrincipal.descriptor},

        {kind: 'message', name: 'thirdPartyPrincipal', num: 2, type: () => ServiceAccountDelegationInfo.ThirdPartyPrincipal.descriptor}
    ]
})

ServiceAccountDelegationInfo.binaryify = binaryifyFun(ServiceAccountDelegationInfo.descriptor)

ServiceAccountDelegationInfo.parse = parseFun(ServiceAccountDelegationInfo.descriptor)

ServiceAccountDelegationInfo.FirstPartyPrincipal.descriptor = protobufDefinition({
    name: '.google.cloud.audit.ServiceAccountDelegationInfo.FirstPartyPrincipal',

    fields: [
        {kind: 'scalar', name: 'principalEmail', num: 1, type: 9 /* STRING */},

        {kind: 'message', name: 'serviceMetadata', num: 2, type: () => Struct.descriptor}
    ]
})

ServiceAccountDelegationInfo.FirstPartyPrincipal.binaryify = binaryifyFun(ServiceAccountDelegationInfo.FirstPartyPrincipal.descriptor)

ServiceAccountDelegationInfo.FirstPartyPrincipal.parse = parseFun(ServiceAccountDelegationInfo.FirstPartyPrincipal.descriptor)

ServiceAccountDelegationInfo.ThirdPartyPrincipal.descriptor = protobufDefinition({
    name: '.google.cloud.audit.ServiceAccountDelegationInfo.ThirdPartyPrincipal',

    fields: [{kind: 'message', name: 'thirdPartyClaims', num: 1, type: () => Struct.descriptor}]
})

ServiceAccountDelegationInfo.ThirdPartyPrincipal.binaryify = binaryifyFun(ServiceAccountDelegationInfo.ThirdPartyPrincipal.descriptor)

ServiceAccountDelegationInfo.ThirdPartyPrincipal.parse = parseFun(ServiceAccountDelegationInfo.ThirdPartyPrincipal.descriptor)
