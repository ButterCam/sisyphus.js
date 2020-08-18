export function oneOfProperty(...oneOfs: string[]): PropertyDescriptor {
    return {
        get: oneOfGetter(oneOfs),
        set: oneOfSetter(oneOfs)
    }
}

function oneOfGetter(oneOfs: string[]) {
    return function (this: { [k: string]: any }) {
        for (let oneOf of oneOfs) {
            if (this.hasOwnProperty(oneOf) && this[oneOf] !== undefined) {
                return oneOf
            }
        }
        return undefined
    }
}

function oneOfSetter(oneOfs: string[]) {
    return function (this: { [k: string]: any }, value: string) {
        for (let oneOf of oneOfs) {
            if (oneOf != value) {
                delete this[oneOf]
            }
        }
    }
}