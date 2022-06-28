import chai from 'chai'
import {int64, Int64, uint64, UInt64} from './int64'

describe('uint64', () => {
    it('parse', () => {
        function assertUInt64(str: string, value: uint64) {
            const [lo, hi] = UInt64.parse(str)
            const message = `uint64 error '${str}' -> '${value[0]}, ${value[1]}'`

            chai.expect(lo).equal(value[0], message)
            chai.expect(hi).equal(value[1], message)
            chai.expect(UInt64.toString([lo, hi])).equal(str, message)
        }

        assertUInt64('18446744073709551615', [0xFFFFFFFF, 0xFFFFFFFF])
        assertUInt64('9223372036854775807', [0xFFFFFFFF, 0x7FFFFFFF])
        assertUInt64('4886718345', [0x23456789, 0x1])
        assertUInt64('305419896', [0x12345678, 0])
    })

    it('plus', () => {
        function assertPlus(left: string, right: string, result: string) {
            const l = UInt64.parse(left)
            const r = UInt64.parse(right)
            chai.expect(UInt64.toString(UInt64.plus(l, r))).equal(result)
        }

        assertPlus('1193046', '7608402', '8801448')
        assertPlus('4294967295', '305419896', '4600387191')
        assertPlus('10986060915047491465', '10986060915047491465', '3525377756385431314')
        assertPlus('18446744073709551615', '1', '0')
        assertPlus('18446744073709551615', '2', '1')
    })

    it('minus', () => {
        function assertMinus(left: string, right: string, result: string) {
            const l = UInt64.parse(left)
            const r = UInt64.parse(right)
            chai.expect(UInt64.toString(UInt64.minus(l, r))).equal(result)
        }

        assertMinus('4600387191', '305419896', '4294967295')
        assertMinus('3525377756385431314', '10986060915047491465', '10986060915047491465')
        assertMinus('0', '1', '18446744073709551615')
        assertMinus('1', '2', '18446744073709551615')
    })

    it('string', () => {
        chai.expect(UInt64.toString([0xFFFFFFFF, -1])).equal('18446744073709551615')
        chai.expect(UInt64.toString([0x23456789, 0x1])).equal('4886718345')
        chai.expect(UInt64.toString([0x12345678, 0])).equal('305419896')
    })
})

describe('int64', () => {
    it('parse', () => {
        function assertUInt64(str: string, value: int64) {
            const [sign, lo, hi] = Int64.parse(str)
            const message = `int64 error '${str}' -> '${value[0]}, ${value[1]}, ${value[2]}'`

            chai.expect(sign).equal(value[0], message)
            chai.expect(lo).equal(value[1], message)
            chai.expect(hi).equal(value[2], message)
            chai.expect(Int64.toString([sign, lo, hi])).equal(str, message)
        }

        assertUInt64('-9223372036854775808', [true, 0, 0x80000000])
        assertUInt64('9223372036854775807', [false, 0xFFFFFFFF, 0x7FFFFFFF])
        assertUInt64('-1', [true, 1, 0])
        assertUInt64('4886718345', [false, 0x23456789, 0x1])
        assertUInt64('305419896', [false, 0x12345678, 0])
        assertUInt64('-4886718345', [true, 0x23456789, 0x1])
        assertUInt64('-305419896', [true, 0x12345678, 0])
    })

    it('plus', () => {
        function assertPlus(left: string, right: string, result: string) {
            const l = Int64.parse(left)
            const r = Int64.parse(right)
            chai.expect(Int64.toString(Int64.plus(l, r))).equal(result)
        }

        assertPlus('-9223372036854775808', '-9223372036854775808', '0')
        assertPlus('-9223372036854775808', '-1', '9223372036854775807')
        assertPlus('9223372036854775807', '1', '-9223372036854775808')
        assertPlus('111111111111111111', '222222222222222222', '333333333333333333')
        assertPlus('111111111111111111', '-222222222222222222', '-111111111111111111')
        assertPlus('1', '1', '2')
    })

    it('minus', () => {
        function assertMinus(left: string, right: string, result: string) {
            const l = Int64.parse(left)
            const r = Int64.parse(right)
            chai.expect(Int64.toString(Int64.minus(l, r))).equal(result)
        }

        assertMinus('0', '-9223372036854775808', '-9223372036854775808')
        assertMinus('-9223372036854775808', '1', '9223372036854775807')
        assertMinus('111111111111111111', '222222222222222222', '-111111111111111111')
        assertMinus('111111111111111111', '-222222222222222222', '333333333333333333')
        assertMinus('1', '1', '0')
        assertMinus('0', '1', '-1')
    })
})