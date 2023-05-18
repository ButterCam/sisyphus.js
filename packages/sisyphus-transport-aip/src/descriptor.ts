import '@sisyphus.js/google/lib/google/api/annotations'

export interface ServiceDescriptor {
    readonly name: string

    readonly methods: { [name: string]: MethodDescriptor }
}

export interface MethodDescriptor {
    readonly name: string

    /**
     * Input type name
     */
    readonly i: string

    /**
     * Output type name
     */
    readonly o: string

    /**
     * Input streaming
     */
    readonly is?: boolean

    /**
     * Output streaming
     */
    readonly os?: boolean

    readonly options?: any
}