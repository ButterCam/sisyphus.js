import '@sisyphus.js/runtime/lib/google/protobuf/descriptor'
import {HttpRule} from './http'

declare module '@sisyphus.js/runtime/lib/google/protobuf/descriptor' {
    interface MethodOptions {
        /**  See `HttpRule`. */
        http: HttpRule
    }
}
