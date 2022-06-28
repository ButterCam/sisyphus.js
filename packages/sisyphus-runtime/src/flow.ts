export type FlowItem<T> = { value?: T, next?: Flow<T> }
export type Flow<T> = Promise<FlowItem<T>>
export type FlowCollector<T> = (v: T) => Promise<void>

export function flow<T>(block: (emitter: FlowCollector<T>) => Promise<void>): Flow<T> {
    return new Promise((res, rej) => {
        let curRes = res, curRej = rej

        async function emitter(v: T): Promise<void> {
            try {
                curRes({
                    value: v, next: new Promise((r, j) => {
                        curRes = r
                        curRej = j
                    })
                })
            } catch (e) {
                curRej(e)
            }
        }

        block(emitter).then(async () => {
            curRes({})
        }).catch(it => {
            curRej(it)
        })
    })
}

export async function collect<T>(flow: Flow<T>, collector: FlowCollector<T>): Promise<void> {
    while (true) {
        const item = await flow
        if (item.value === undefined) {
            return
        }
        await collector(item.value)
        if (item.next === undefined) {
            return
        }
        flow = item.next
    }
}