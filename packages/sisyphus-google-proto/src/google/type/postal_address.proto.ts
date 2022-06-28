import {PostalAddress} from '@sisyphus.js/google/lib/google/type/postal_address'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/type/postal_address' {
    namespace PostalAddress {
        let descriptor: MessageDescriptor<PostalAddress>

        function binaryify(v: PostalAddress): Uint8Array

        function parse(buffer: Uint8Array): PostalAddress
    }
}

export * from '@sisyphus.js/google/lib/google/type/postal_address'

PostalAddress.descriptor = protobufDefinition({
    name: '.google.type.PostalAddress',

    fields: [
        {kind: 'scalar', name: 'revision', num: 1, type: 5 /* INT32 */},

        {kind: 'scalar', name: 'regionCode', num: 2, type: 9 /* STRING */},

        {kind: 'scalar', name: 'languageCode', num: 3, type: 9 /* STRING */},

        {kind: 'scalar', name: 'postalCode', num: 4, type: 9 /* STRING */},

        {kind: 'scalar', name: 'sortingCode', num: 5, type: 9 /* STRING */},

        {kind: 'scalar', name: 'administrativeArea', num: 6, type: 9 /* STRING */},

        {kind: 'scalar', name: 'locality', num: 7, type: 9 /* STRING */},

        {kind: 'scalar', name: 'sublocality', num: 8, type: 9 /* STRING */},

        {kind: 'scalar', name: 'addressLines', num: 9, type: 9 /* STRING */, repeat: 1},

        {kind: 'scalar', name: 'recipients', num: 10, type: 9 /* STRING */, repeat: 1},

        {kind: 'scalar', name: 'organization', num: 11, type: 9 /* STRING */}
    ]
})

PostalAddress.binaryify = binaryifyFun(PostalAddress.descriptor)

PostalAddress.parse = parseFun(PostalAddress.descriptor)
