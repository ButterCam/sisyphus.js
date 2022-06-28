import {collect, flow} from './flow'

describe('flow', function () {
    it('parse', async function () {
        const testFlow = flow<string>(async emitter => {
            console.log('emit 1')
            await emitter('1')
            console.log('emit 2')
            await emitter('2')
            console.log('emit 3')
            await emitter('3')
        })
        const testFlow2 = flow<string>(async emitter => {
            await collect(testFlow, async it => {
                console.log(`flow1 got ${it}`)
                await emitter(it)
            })
        })

        await collect(testFlow2, async it => {
            console.log(`flow2 got ${it}`)
        })
    })
})