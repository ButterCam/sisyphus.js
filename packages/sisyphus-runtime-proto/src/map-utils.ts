import {
    EnumDescriptor,
    EnumFieldDescriptor,
    MapFieldDescriptor,
    MessageDescriptor,
    MessageFieldDescriptor,
    ScalarFieldDescriptor
} from './reflection'

export function keyFieldDescriptor(field: MapFieldDescriptor): ScalarFieldDescriptor | EnumFieldDescriptor {
    if (typeof field.key === 'function') {
        return {kind: 'enum', name: 'key', num: 1, type: field.key}
    } else {
        return {kind: 'scalar', name: 'key', num: 1, type: field.key}
    }
}

export function valueFieldDescriptor(field: MapFieldDescriptor): ScalarFieldDescriptor | EnumFieldDescriptor | MessageFieldDescriptor {
    if (typeof field.value === 'function') {
        const valueDescriptor = field.value()
        if ('enum' in valueDescriptor) {
            return {
                kind: 'enum',
                name: 'value',
                num: 2,
                type: <() => EnumDescriptor>field.value
            }
        } else {
            return {
                kind: 'message',
                name: 'value',
                num: 2,
                type: <() => MessageDescriptor<any>>field.value
            }
        }
    } else {
        return {
            kind: 'scalar',
            name: 'value',
            num: 2,
            type: field.value
        }
    }
}