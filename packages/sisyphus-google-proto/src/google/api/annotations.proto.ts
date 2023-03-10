import '@sisyphus.js/google/lib/google/api/annotations'
import '@sisyphus.js/runtime.proto'
import {HttpRule} from './http.proto'

declare module '@sisyphus.js/google/lib/google/api/annotations' {
}

export * from '@sisyphus.js/google/lib/google/api/annotations'

extendDefinition('.google.protobuf.MethodOptions', {kind: 'message', name: 'http', num: 72295728, type: () => HttpRule.descriptor})
