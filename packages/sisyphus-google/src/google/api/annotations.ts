import {HttpRule} from './http'
import '@sisyphus.js/runtime/lib/google/protobuf/descriptor'

declare module '@sisyphus.js/runtime/lib/google/protobuf/descriptor' {
    interface MethodOptions {
        /**  See `HttpRule`. */
        http: HttpRule
    }
}
