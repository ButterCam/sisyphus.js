import {LatLng} from '@sisyphus.js/google/lib/google/type/latlng'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/type/latlng' {
    namespace LatLng {
        let descriptor: MessageDescriptor<LatLng>

        function binaryify(v: LatLng): Uint8Array

        function parse(buffer: Uint8Array): LatLng
    }
}

export * from '@sisyphus.js/google/lib/google/type/latlng'

LatLng.descriptor = protobufDefinition({
    name: '.google.type.LatLng',

    fields: [
        {kind: 'scalar', name: 'latitude', num: 1, type: 1 /* DOUBLE */},

        {kind: 'scalar', name: 'longitude', num: 2, type: 1 /* DOUBLE */}
    ]
})

LatLng.binaryify = binaryifyFun(LatLng.descriptor)

LatLng.parse = parseFun(LatLng.descriptor)
