export interface CodeGenerator<T extends GeneratingState<string, any, any, any>> {
    readonly kind: T['kind']

    generate(state: T): boolean | void
}

export type GeneratingStateInit<T extends GeneratingState<string, any, any, any>> = Omit<T, 'generatedElements' | 'continue'>

export interface GeneratingState<TKind extends string, TParent, TDesc, TTarget> {
    readonly parent: TParent

    readonly kind: TKind

    readonly descriptor: TDesc

    readonly target: TTarget

    generatedElements: number

    continue: boolean
}

export interface GeneratedFile {
    readonly name: string

    readonly content: string
}

export interface GeneratorContext {
    readonly imports: { [proto: string]: string }

    readonly generators: CodeGenerator<any>[]
}