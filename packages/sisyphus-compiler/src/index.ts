import {CodeGenerator, GeneratingState, GeneratingStateInit} from './generator'

declare global {
    function advance<T extends GeneratingState<string, any, any, any>>(state: GeneratingStateInit<T>): number

    function generate<T extends GeneratingState<string, any, any, any>>(kind: T['kind'], generating: (state: T) => void): void
}

const generators: CodeGenerator<any>[] = []

function protoModule(file: string, sub?: string): string {
    if (sub === undefined || sub === '') return file
    return `${file}#${sub}`
}

global.advance = function <T extends GeneratingState<string, any, any, any>>(init: GeneratingStateInit<T>): number {
    const state: T = <any>{
        ...init,
        generatedElements: 0,
        continue: true
    }

    for (let i = generators.length - 1; i >= 0; i--) {
        const generator = generators[i]
        if (generator.kind !== state.kind) continue
        generator.generate(state)
        if (!state.continue) {
            return state.generatedElements
        }
    }

    if (state.parent != null) {
        state.parent.generatedElements += state.generatedElements
    }

    return state.generatedElements
}

global.generate = function <T extends GeneratingState<string, any, any, any>>(kind: T['kind'], generating: (state: T) => void): void {
    generators.push({
        kind: kind,
        generate: generating
    })
}

export * from './code-builder'
export * from './import-manager'
export * from './descriptor'
export * from './generator'
export * from './state'

