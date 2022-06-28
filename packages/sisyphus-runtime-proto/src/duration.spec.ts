import {base64Decode, Duration} from '@sisyphus.js/runtime'
import * as chai from 'chai'
import './google/protobuf/duration.proto'

describe('duration', function () {
    it('protobuf', function () {
        function checkDuration(value: Duration, base64: string) {
            const payload = Duration.toPayload(value)
            const message = `Duration error '${value}' -> '${payload[0]}, ${payload[1]}'`
            chai.expect(Duration.binaryify(value)).deep.equal(base64Decode(base64), message)
            chai.expect(Duration.parse(base64Decode(base64))).deep.equal(value, message)
        }

        checkDuration('1.2s', 'CAEQgISvXw')
        checkDuration('1.0002s', 'CAEQwJoM')
        checkDuration('60.0s', 'CDwQAA')
        checkDuration('-123.456s', 'CIX//////////wEQgPzHpg4')
        checkDuration('-0.456s', 'CAAQgPzHpg4')
    })
})