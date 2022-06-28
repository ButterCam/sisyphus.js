import {base64Decode, Int64, Long, long, UInt64} from '@sisyphus.js/runtime'
import chai from 'chai'
import {ByteInputStream} from './byte-stream'
import {
    decodeZigZag32, decodeZigZag64,
    encodeZigZag32,
    encodeZigZag64,
    readVarint32,
    readVarint64,
    writeVarint32,
    writeVarint64
} from './varint'

describe('varint', function () {
    it('write warint', function () {
        function checkVarint32(value: number, base64: string) {
            const message = `Varint error '${value}' -> '[${base64Decode(base64)}]'`
            chai.expect(writeVarint32(value)).deep.equal(base64Decode(base64), message)
        }

        function checkVarint64(value: long, base64: string) {
            const message = `Varint error '${value}' -> '[${base64Decode(base64)}]'`
            chai.expect(writeVarint64(value)).deep.equal(base64Decode(base64), message)
        }

        checkVarint32(1, 'AQ')
        checkVarint32(-1, '/////w8')
        checkVarint32(123456, 'wMQH')
        checkVarint32(-123456, 'wLv4/w8')
        checkVarint32(-0x80000000, 'gICAgAg')
        checkVarint32(2147483647, '/////wc')
        checkVarint32(4294967295, '/////w8')

        checkVarint64(1, 'AQ')
        checkVarint64(-1, '////////////AQ')
        checkVarint64(123456, 'wMQH')
        checkVarint64(-123456, 'wLv4////////AQ')
        checkVarint64('9223372036854775807', '//////////9/')
        checkVarint64('-9223372036854775808', 'gICAgICAgICAAQ')
        checkVarint64('18446744073709551615', '////////////AQ')
    })

    it('read warint', function () {
        function checkVarint32(value: number, base64: string) {
            const message = `Varint error '${value}' -> '[${base64Decode(base64)}]'`
            const stream = new ByteInputStream(base64Decode(base64))
            let number = readVarint32(stream)
            if (value < 0) {
                number = number | 0
            }
            chai.expect(number).equal(value, message)
        }

        function checkVarint64(value: long, base64: string) {
            const message = `Varint error '${value}' -> '[${base64Decode(base64)}]'`
            const stream = new ByteInputStream(base64Decode(base64))
            const number = readVarint64(stream)
            let long: long
            if (Long.sign(value) < 0) {
                long = Int64.toLong(UInt64.toInt64(number))
            } else {
                long = UInt64.toLong(number)
            }
            chai.expect(long).equal(value, message)
        }

        checkVarint32(1, 'AQ')
        checkVarint32(-1, '/////w8')
        checkVarint32(123456, 'wMQH')
        checkVarint32(-123456, 'wLv4/w8')
        checkVarint32(-0x80000000, 'gICAgAg')
        checkVarint32(2147483647, '/////wc')
        checkVarint32(4294967295, '/////w8')

        checkVarint64(1, 'AQ')
        checkVarint64(-1, '////////////AQ')
        checkVarint64(123456, 'wMQH')
        checkVarint64(-123456, 'wLv4////////AQ')
        checkVarint64('9223372036854775807', '//////////9/')
        checkVarint64('-9223372036854775808', 'gICAgICAgICAAQ')
        checkVarint64('18446744073709551615', '////////////AQ')
    })

    it('zigzag encode', function () {
        chai.expect(encodeZigZag32(1)).equal(2)
        chai.expect(encodeZigZag32(0x7FFFFFFF)).equal(4294967294)
        chai.expect(encodeZigZag32(-0x80000000)).equal(4294967295)
        chai.expect(encodeZigZag32(0x123456)).equal(2386092)
        chai.expect(encodeZigZag32(123456)).equal(246912)

        chai.expect(encodeZigZag64(1)).deep.equal(UInt64.parse('2'))
        chai.expect(encodeZigZag64(0x7FFFFFFF)).deep.equal(UInt64.parse('4294967294'))
        chai.expect(encodeZigZag64(-0x80000000)).deep.equal(UInt64.parse('4294967295'))
        chai.expect(encodeZigZag64(0x123456)).deep.equal(UInt64.parse('2386092'))
        chai.expect(encodeZigZag64(123456)).deep.equal(UInt64.parse('246912'))
        chai.expect(encodeZigZag64('4886718345')).deep.equal(UInt64.parse('9773436690'))
        chai.expect(encodeZigZag64('-40926266145')).deep.equal(UInt64.parse('81852532289'))
    })

    it('zigzag decode', function () {
        chai.expect(decodeZigZag32(2)).equal(1)
        chai.expect(decodeZigZag32(4294967294)).equal(0x7FFFFFFF)
        chai.expect(decodeZigZag32(4294967295)).equal(-0x80000000)
        chai.expect(decodeZigZag32(2386092)).equal(0x123456)
        chai.expect(decodeZigZag32(246912)).equal(123456)

        chai.expect(decodeZigZag64(UInt64.parse('2'))).equal(1)
        chai.expect(decodeZigZag64(UInt64.parse('4294967294'))).equal(0x7FFFFFFF)
        chai.expect(decodeZigZag64(UInt64.parse('4294967295'))).equal(-0x80000000)
        chai.expect(decodeZigZag64(UInt64.parse('2386092'))).equal(0x123456)
        chai.expect(decodeZigZag64(UInt64.parse('246912'))).equal(123456)
        chai.expect(decodeZigZag64(UInt64.parse('9773436690'))).equal('4886718345')
        chai.expect(decodeZigZag64(UInt64.parse('81852532289'))).equal('-40926266145')
    })
})