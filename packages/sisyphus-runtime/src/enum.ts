export function enumValue(value: number | string, enumType: any): number {
    if (typeof value === 'string') value = enumType[value] ?? 0
    if (typeof value !== 'number') throw new Error(`'${value}' must be a enum(number or string).`)
    return value
}

export function enumValueName(value: number | string, enumType: any): string {
    if (typeof value === 'number') {
        return enumType[value]
    }
    return enumType[value] ?? value
}
