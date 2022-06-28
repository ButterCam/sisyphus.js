import chai from 'chai'
import {Long, long} from './long'

describe('long', function () {
    it('parse', function () {
        chai.expect(Long.parse(0xFFFFFFFF.toString())).equal(0xFFFFFFFF)
        chai.expect(Long.parse('-2147483648')).equal(-2147483648)
        chai.expect(Long.parse(0xFFFFFFFF.toString())).equal(0xFFFFFFFF)
        chai.expect(Long.parse(0x100000000.toString())).equal('4294967296')
        chai.expect(Long.parse('18446744073709551615')).equal('18446744073709551615')
        chai.expect(Long.parse('-9223372036854775808')).equal('-9223372036854775808')
        chai.expect(Long.parse('9223372036854775807')).equal('9223372036854775807')
    })

    it('normalize', function () {
        chai.expect(Long.normalize(0xFFFFFFFF.toString())).equal(0xFFFFFFFF)
        chai.expect(Long.normalize('-2147483648')).equal(-2147483648)
        chai.expect(Long.normalize(0xFFFFFFFF.toString())).equal(0xFFFFFFFF)
        chai.expect(Long.normalize(0x100000000.toString())).equal('4294967296')
        chai.expect(Long.normalize('18446744073709551615')).equal('18446744073709551615')
        chai.expect(Long.normalize('-9223372036854775808')).equal('-9223372036854775808')
        chai.expect(Long.normalize('9223372036854775807')).equal('9223372036854775807')
        chai.expect(Long.normalize(Number.MIN_SAFE_INTEGER)).equal(Number.MIN_SAFE_INTEGER.toString())
        chai.expect(Long.normalize(Number.MAX_SAFE_INTEGER)).equal(Number.MAX_SAFE_INTEGER.toString())
        chai.expect(Long.normalize('0')).equal(0)
        chai.expect(Long.normalize('123456')).equal(123456)
        chai.expect(Long.normalize(-0)).equal(0)
        chai.expect(Long.normalize(123456)).equal(123456)
        chai.should().throw(() => {
            Long.normalize(<any>{})
        })
    })

    it('zero', function () {
        chai.assert(Long.isZero('0'), 'zero long assert error for "0"')
        chai.assert(Long.isZero('-0'), 'zero long assert error for "-0"')
        chai.assert(Long.isZero(0), 'zero long assert error for 0')
    })

    it('number', function () {
        chai.expect(Long.toNumber(0xFFFFFFFF.toString())).equal(0xFFFFFFFF)
        chai.expect(Long.toNumber('-2147483648')).equal(-2147483648)
        chai.expect(Long.toNumber(0xFFFFFFFF.toString())).equal(0xFFFFFFFF)
        chai.expect(Long.toNumber(0x100000000.toString())).equal(4294967296)
        chai.expect(Long.toNumber('18446744073709551615')).equal(18446744073709551615)
        chai.expect(Long.toNumber('-9223372036854775808')).equal(-9223372036854775808)
        chai.expect(Long.toNumber('9223372036854775807')).equal(9223372036854775807)
        chai.expect(Long.toNumber(Number.MIN_SAFE_INTEGER)).equal(Number.MIN_SAFE_INTEGER)
        chai.expect(Long.toNumber(Number.MAX_SAFE_INTEGER)).equal(Number.MAX_SAFE_INTEGER)
        chai.expect(Long.toNumber('0')).equal(0)
        chai.expect(Long.toNumber('123456')).equal(123456)
        chai.expect(Long.toNumber(-0)).equal(0)
        chai.expect(Long.toNumber(123456)).equal(123456)
        chai.should().throw(() => {
            Long.toNumber(<any>{})
        })
    })

    it('sign', function () {
        chai.expect(Long.sign('1234567890')).equal(1)
        chai.expect(Long.sign('-1234567890')).equal(-1)
        chai.expect(Long.sign('18446744073709551615')).equal(1)
        chai.expect(Long.sign('-9223372036854775808')).equal(-1)
        chai.expect(Long.sign('9223372036854775807')).equal(1)
        chai.expect(Long.sign(1234567890)).equal(1)
        chai.expect(Long.sign(-1234567890)).equal(-1)
        chai.expect(Long.sign(0)).equal(0)
        chai.expect(Long.sign(-0)).equal(0)
        chai.expect(Long.sign('0')).equal(0)
        chai.expect(Long.sign('-0')).equal(0)
        chai.should().throw(() => {
            Long.sign(<any>{})
        })
    })

    it('string', function () {
        chai.expect(Long.toString(0xFFFFFFFF.toString())).equal(0xFFFFFFFF.toString())
        chai.expect(Long.toString('-2147483648')).equal((-2147483648).toString())
        chai.expect(Long.toString(0xFFFFFFFF.toString())).equal(0xFFFFFFFF.toString())
        chai.expect(Long.toString(0x100000000.toString())).equal('4294967296')
        chai.expect(Long.toString('18446744073709551615')).equal('18446744073709551615')
        chai.expect(Long.toString('-9223372036854775808')).equal('-9223372036854775808')
        chai.expect(Long.toString('9223372036854775807')).equal('9223372036854775807')
        chai.expect(Long.toString(Number.MIN_SAFE_INTEGER)).equal(Number.MIN_SAFE_INTEGER.toString())
        chai.expect(Long.toString(Number.MAX_SAFE_INTEGER)).equal(Number.MAX_SAFE_INTEGER.toString())
        chai.expect(Long.toString('0')).equal('0')
        chai.expect(Long.toString('123456')).equal('123456')
        chai.expect(Long.toString(-0)).equal('0')
        chai.expect(Long.toString(123456)).equal('123456')
        chai.should().throw(() => {
            Long.toString(<any>{})
        })
    })
})