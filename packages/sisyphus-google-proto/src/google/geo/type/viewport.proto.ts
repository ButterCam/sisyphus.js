import {LatLng} from '../../type/latlng.proto'
import {Viewport} from '@sisyphus.js/google/lib/google/geo/type/viewport'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/geo/type/viewport' {
    namespace Viewport {
        let descriptor: MessageDescriptor<Viewport>

        function binaryify(v: Viewport): Uint8Array

        function parse(buffer: Uint8Array): Viewport
    }
}

export * from '@sisyphus.js/google/lib/google/geo/type/viewport'

Viewport.descriptor = protobufDefinition({
    name: '.google.geo.type.Viewport',

    fields: [
        {kind: 'message', name: 'low', num: 1, type: () => LatLng.descriptor},

        {kind: 'message', name: 'high', num: 2, type: () => LatLng.descriptor}
    ]
})

Viewport.binaryify = binaryifyFun(Viewport.descriptor)

Viewport.parse = parseFun(Viewport.descriptor)
