import {FieldMask} from './google/protobuf/field_mask'

declare module './google/protobuf/field_mask' {
    namespace FieldMask {
        export type Payload = string[]

        function toPayload(value: FieldMask): Payload

        function fromPayload(duration: Payload): FieldMask
    }
}

export * from './google/protobuf/field_mask'

FieldMask.toPayload = function (value: FieldMask): FieldMask.Payload {
    return value.split(',').map(it => it.trim())
}

FieldMask.fromPayload = function (value: FieldMask.Payload): FieldMask {
    return value.join(', ')
}
