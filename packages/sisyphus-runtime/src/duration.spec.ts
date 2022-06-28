import chai from 'chai'
import {Duration} from './duration'
import {long} from './long'

describe('duration', function () {
    it('parse', function () {
        function checkDuration(value: Duration, seconds: long, nanos: number) {
            const duration = Duration.toPayload(value)
            const message = `uint64 error '${value}' -> '${seconds}, ${nanos}'`


            chai.expect(seconds).equal(duration[0], message)
            chai.expect(nanos).equal(duration[1], message)
            chai.expect(Duration.fromPayload(duration)).equal(value, message)
        }

        checkDuration('1.2s', 1, 200000000)
        checkDuration('1.0002s', 1, 200000)
        checkDuration('60.0s', 60, 0)
        checkDuration('-123.456s', -123, -456000000)
        checkDuration('-0.456s', 0, -456000000)
    })
})