import chai from 'chai'
import {base64Decode, base64Encode} from './base64'

describe('base64', function () {

    // 'Hello, 🌍'
    const helloWorldBase64 = 'SGVsbG8sIPCfjI0='
    const helloWorldBytes = [0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0xf0, 0x9f, 0x8c, 0x8d]

    // 'No 🐛 here!'
    const sayHiBase64 = 'Tm8g8J+QmyBoZXJlIQ=='
    const sayHiBytes = [0x4e, 0x6f, 0x20, 0xf0, 0x9f, 0x90, 0x9b, 0x20, 0x68, 0x65, 0x72, 0x65, 0x21]

    it('decode', function () {
        function decode(base64: string, bytes: number[]) {
            const dec = base64Decode(base64)
            chai.expect(dec).deep.equal(new Uint8Array(bytes))
        }

        decode(helloWorldBase64, helloWorldBytes)
        decode(sayHiBase64, sayHiBytes)
    })

    it('encode', function () {
        function encode(base64: string, bytes: number[]) {
            const enc = base64Encode(new Uint8Array(bytes))
            chai.expect(enc).deep.equal(base64)
        }

        encode(helloWorldBase64, helloWorldBytes)
        encode(sayHiBase64, sayHiBytes)
    })

    it('url-safe decode', function () {
        const base64 = base64Decode('-_')
        chai.expect(base64).deep.equal(new Uint8Array([251]))
    })

    it('without padding', function () {
        const base64 = base64Decode(helloWorldBase64.slice(0, -1))
        chai.expect(base64).deep.equal(new Uint8Array(helloWorldBytes))
    })
})