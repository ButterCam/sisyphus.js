import {base64Decode, Value} from '@sisyphus.js/runtime'
import * as chai from 'chai'
import './google/protobuf/struct.proto'

describe('struct', function () {
    function checkValue(value: Value, base64: string) {
        const data = Value.parse(base64Decode(base64))
        const message = `Value error '${JSON.stringify(value)}`
        chai.expect(value).deep.equal(data, message)
        chai.expect(Value.parse(Value.binaryify(value))).deep.equal(value, message)
    }

    it('numberValue', function () {
        checkValue(123.456, 'EXe+nxov3V5A')
    })

    it('boolValue', function () {
        checkValue(true, 'IAE')
    })

    it('nullValue', function () {
        checkValue(<any>null, 'CAA')
    })

    it('structValue', function () {
        checkValue({
            'number': 123.456,
            'bool': true,
            'string': 'Hello sisyphus!',
            'null': <any>null
        }, 'KkoKEwoGbnVtYmVyEgkRd76fGi/dXkAKCgoEYm9vbBICIAEKGwoGc3RyaW5nEhEaD0hlbGxvIHNpc3lwaHVzIQoKCgRudWxsEgIIAA')
    })

    it('listValue', function () {
        checkValue([123.456, true, 'Hello sisyphus!', <any>null], 'MiYKCRF3vp8aL91eQAoCIAEKERoPSGVsbG8gc2lzeXBodXMhCgIIAA')
    })
})