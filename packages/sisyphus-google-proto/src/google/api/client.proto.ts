import '@sisyphus.js/google/lib/google/api/client'
import '@sisyphus.js/runtime.proto'

declare module '@sisyphus.js/google/lib/google/api/client' {
}

export * from '@sisyphus.js/google/lib/google/api/client'

extendDefinition('.google.protobuf.MethodOptions', {kind: 'scalar', name: 'methodSignature', num: 1051, type: 9 /* STRING */, repeat: 1})

extendDefinition('.google.protobuf.ServiceOptions', {kind: 'scalar', name: 'defaultHost', num: 1049, type: 9 /* STRING */})

extendDefinition('.google.protobuf.ServiceOptions', {kind: 'scalar', name: 'oauthScopes', num: 1050, type: 9 /* STRING */})
