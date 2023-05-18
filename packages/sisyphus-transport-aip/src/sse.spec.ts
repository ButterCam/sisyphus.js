import {decodeServerSentEventToFlow} from "./sse";
import {collect} from "@sisyphus.js/runtime";
import chai from 'chai'

describe('decode sse', function () {
    const encoder = new TextEncoder()

    it('decode named events', async function () {
        const stream: ReadableStream<Uint8Array> = new ReadableStream({
            start(controller) {
                controller.enqueue(encoder.encode('event: userconnect\ndata: {"username": "bobby", '))
                controller.enqueue(encoder.encode('"time": "02:33:48"}\n\nevent: usermessage\ndata:'))
                controller.enqueue(encoder.encode(' {"username": "bobby", "time": "02:34:11", "text'))
                controller.enqueue(encoder.encode('": "Hi everyone."}\n\nevent: userdisconnect\ndat'))
                controller.enqueue(encoder.encode('a: {"username": "bobby", "time": "02:34:23"}\n\n'))
                controller.enqueue(encoder.encode('event: usermessage\ndata: {"username": "sean", "'))
                controller.enqueue(encoder.encode('time": "02:34:36", "text": "Bye, bobby."}'))
                controller.close()
            }
        })
        const flow = decodeServerSentEventToFlow(stream)
        let index = 0

        await collect(flow, async it => {
            switch (index) {
                case 0:
                    chai.expect(it.data).equal('{"username": "bobby", "time": "02:33:48"}')
                    break
                case 1:
                    chai.expect(it.data).equal('{"username": "bobby", "time": "02:34:11", "text": "Hi everyone."}')
                    break
                case 2:
                    chai.expect(it.data).equal('{"username": "bobby", "time": "02:34:23"}')
                    break
                case 3:
                    chai.expect(it.data).equal('{"username": "sean", "time": "02:34:36", "text": "Bye, bobby."}')
                    break
            }
            index++
        })
        chai.expect(index).equal(4)
    })

    it('decode data-only events', async function () {
        const stream: ReadableStream<Uint8Array> = new ReadableStream({
            start(controller) {
                controller.enqueue(encoder.encode(': this is a te'))
                controller.enqueue(encoder.encode('st stream\n\nd'))
                controller.enqueue(encoder.encode('ata: some text'))
                controller.enqueue(encoder.encode('\n\ndata: anot'))
                controller.enqueue(encoder.encode('her message\nd'))
                controller.enqueue(encoder.encode('ata: with two '))
                controller.enqueue(encoder.encode('lines'))
                controller.close()
            }
        })
        const flow = decodeServerSentEventToFlow(stream)
        let index = 0

        await collect(flow, async it => {
            switch (index) {
                case 0:
                    chai.expect(it.data).equal('')
                    break
                case 1:
                    chai.expect(it.data).equal('some text')
                    break
                case 2:
                    chai.expect(it.data).equal('another message\nwith two lines')
                    break
            }
            index++
        })

        chai.expect(index).equal(3)
    })
})
