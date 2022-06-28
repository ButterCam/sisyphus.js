import {base64Decode, Timestamp} from '@sisyphus.js/runtime'
import * as chai from 'chai'
import './google/protobuf/timestamp.proto'

describe('timestamp', function () {
    it('protobuf', function () {
        function checkTimestamp(value: Timestamp, base64: string) {
            const timestamp = Timestamp.toPayload(value)
            const message = `Timestamp error '${value}' -> '${timestamp[0]}, ${timestamp[1]}'`
            chai.expect(Timestamp.parse(base64Decode(base64))).deep.equal(value, message)
            chai.expect(Timestamp.binaryify(value)).deep.equal(base64Decode(base64), message)
        }

        checkTimestamp('2022-02-10T07:52:23.678Z', 'CLeIk5AGEIDrpcMC')
        checkTimestamp('2012-12-23T18:45:19.123Z', 'CL+i3YYFEMCp0zo')
        checkTimestamp('1970-01-01T00:00:00.000Z', 'CAAQAA')
        checkTimestamp('2099-12-31T23:59:59.999Z', 'CP+tmaQPEMCPrtwD')
    })
})