import {
    Authentication,
    AuthenticationRule,
    AuthProvider,
    AuthRequirement,
    JwtLocation,
    OAuthRequirements
} from '@sisyphus.js/google/lib/google/api/auth'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/api/auth' {
    namespace Authentication {
        let descriptor: MessageDescriptor<Authentication>

        function binaryify(v: Authentication): Uint8Array

        function parse(buffer: Uint8Array): Authentication
    }

    namespace AuthenticationRule {
        let descriptor: MessageDescriptor<AuthenticationRule>

        function binaryify(v: AuthenticationRule): Uint8Array

        function parse(buffer: Uint8Array): AuthenticationRule
    }

    namespace JwtLocation {
        let descriptor: MessageDescriptor<JwtLocation>

        function binaryify(v: JwtLocation): Uint8Array

        function parse(buffer: Uint8Array): JwtLocation
    }

    namespace AuthProvider {
        let descriptor: MessageDescriptor<AuthProvider>

        function binaryify(v: AuthProvider): Uint8Array

        function parse(buffer: Uint8Array): AuthProvider
    }

    namespace OAuthRequirements {
        let descriptor: MessageDescriptor<OAuthRequirements>

        function binaryify(v: OAuthRequirements): Uint8Array

        function parse(buffer: Uint8Array): OAuthRequirements
    }

    namespace AuthRequirement {
        let descriptor: MessageDescriptor<AuthRequirement>

        function binaryify(v: AuthRequirement): Uint8Array

        function parse(buffer: Uint8Array): AuthRequirement
    }
}

export * from '@sisyphus.js/google/lib/google/api/auth'

Authentication.descriptor = protobufDefinition({
    name: '.google.api.Authentication',

    fields: [
        {kind: 'message', name: 'rules', num: 3, type: () => AuthenticationRule.descriptor, repeat: true},

        {kind: 'message', name: 'providers', num: 4, type: () => AuthProvider.descriptor, repeat: true}
    ]
})

Authentication.binaryify = binaryifyFun(Authentication.descriptor)

Authentication.parse = parseFun(Authentication.descriptor)

AuthenticationRule.descriptor = protobufDefinition({
    name: '.google.api.AuthenticationRule',

    fields: [
        {kind: 'scalar', name: 'selector', num: 1, type: 9 /* STRING */},

        {kind: 'message', name: 'oauth', num: 2, type: () => OAuthRequirements.descriptor},

        {kind: 'scalar', name: 'allowWithoutCredential', num: 5, type: 8 /* BOOL */},

        {kind: 'message', name: 'requirements', num: 7, type: () => AuthRequirement.descriptor, repeat: true}
    ]
})

AuthenticationRule.binaryify = binaryifyFun(AuthenticationRule.descriptor)

AuthenticationRule.parse = parseFun(AuthenticationRule.descriptor)

JwtLocation.descriptor = protobufDefinition({
    name: '.google.api.JwtLocation',

    fields: [
        {kind: 'scalar', name: 'header', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'query', num: 2, type: 9 /* STRING */},

        {kind: 'scalar', name: 'valuePrefix', num: 3, type: 9 /* STRING */}
    ]
})

JwtLocation.binaryify = binaryifyFun(JwtLocation.descriptor)

JwtLocation.parse = parseFun(JwtLocation.descriptor)

AuthProvider.descriptor = protobufDefinition({
    name: '.google.api.AuthProvider',

    fields: [
        {kind: 'scalar', name: 'id', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'issuer', num: 2, type: 9 /* STRING */},

        {kind: 'scalar', name: 'jwksUri', num: 3, type: 9 /* STRING */},

        {kind: 'scalar', name: 'audiences', num: 4, type: 9 /* STRING */},

        {kind: 'scalar', name: 'authorizationUrl', num: 5, type: 9 /* STRING */},

        {kind: 'message', name: 'jwtLocations', num: 6, type: () => JwtLocation.descriptor, repeat: true}
    ]
})

AuthProvider.binaryify = binaryifyFun(AuthProvider.descriptor)

AuthProvider.parse = parseFun(AuthProvider.descriptor)

OAuthRequirements.descriptor = protobufDefinition({
    name: '.google.api.OAuthRequirements',

    fields: [{kind: 'scalar', name: 'canonicalScopes', num: 1, type: 9 /* STRING */}]
})

OAuthRequirements.binaryify = binaryifyFun(OAuthRequirements.descriptor)

OAuthRequirements.parse = parseFun(OAuthRequirements.descriptor)

AuthRequirement.descriptor = protobufDefinition({
    name: '.google.api.AuthRequirement',

    fields: [
        {kind: 'scalar', name: 'providerId', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'audiences', num: 2, type: 9 /* STRING */}
    ]
})

AuthRequirement.binaryify = binaryifyFun(AuthRequirement.descriptor)

AuthRequirement.parse = parseFun(AuthRequirement.descriptor)
