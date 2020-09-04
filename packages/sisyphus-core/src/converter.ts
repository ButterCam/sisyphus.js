import {Enum, Field, MapField, Type, util} from "protobufjs";
import long from "long"

export function normalizeField(field: MapField | Field | Type | Enum | string, value: any): any {
    if (field instanceof MapField) {
        if (typeof value !== "object") throw new Error(`'${value}' can not convert to map.`)
        const result: { [k: string]: any } = {}
        for (let key in value) {
            if (!value.hasOwnProperty(key)) continue

            if (field.resolvedType) {
                result[key] = normalizeField(field.resolvedType, value[key])
            } else {
                result[key] = normalizeField(field.type, value[key])
            }
        }
        return result
    }

    if (field instanceof Field) {
        if (field.repeated) {
            if (!Array.isArray(value)) throw new Error(`'${value}' can not convert to array.`)

            const type = field.resolvedType
            if (type) {
                return value.map(it => normalizeField(type, it))
            } else {
                return value.map(it => normalizeField(field.type, it))
            }
        }

        if (field.resolvedType) {
            return normalizeField(field.resolvedType, value)
        } else {
            return normalizeField(field.type, value)
        }
    }

    if (field instanceof Type) {
        if (typeof value !== "object") throw new Error(`'${value}' can not match with type '${field.fullName}'.`)
        return field.messageCtor.create(value)
    }

    if (field instanceof Enum) {
        if (typeof value !== "number" && typeof value !== "string") throw new Error(`${value}' can not convert to enum '${field.fullName}'.`)
        if (typeof value === "number") return value
        return field.values[value]
    }

    switch (field) {
        case "string":
            return `${value}`
        case "bytes":
            if (typeof value === "string") {
                const result = new Uint8Array(0)
                util.base64.decode(value, result, 0)
                return result
            }
            return value
        case "bool":
            return !!value
        case "double":
        case "float":
        case "int32":
        case "uint32":
        case "sint32":
        case "fixed32":
        case "sfixed32":
            if (typeof value === "string") return parseFloat(value)
            if (typeof value === "number") return value
            if (long.isLong(value)) return value.toNumber()
            return 0
        case "int64":
        case "uint64":
        case "sint64":
        case "fixed64":
        case "sfixed64":
            if (typeof value === "string") return long.fromString(value)
            if (typeof value === "number") return long.fromNumber(value)
            if (long.isLong(value)) return value
            return long.ZERO
    }
}

export function fromJson(field: MapField | Field | Type | Enum | string, value: any): any {
    if (field instanceof MapField) {
        const result: any = {}
        for (let key in value) {
            if (!value.hasOwnProperty(key)) continue

            if (field.resolvedType instanceof Type) {
                result[key] = field.resolvedType.messageCtor.fromJson(value[key])
            } else if (field.resolvedType instanceof Enum) {
                result[key] = field.resolvedType.values[value[key]]
            } else {
                result[key] = fromJson(field.type, value[key])
            }
        }
        return result
    }

    if (field instanceof Field) {
        if (field.repeated && Array.isArray(value)) {
            return value.map(it => fromJson(field, it))
        }

        if (field.resolvedType instanceof Type) {
            return field.resolvedType.messageCtor.fromJson(value)
        } else if (field.resolvedType instanceof Enum) {
            return field.resolvedType.values[value]
        } else {
            return fromJson(field.type, value)
        }
    }

    if (field instanceof Type) {
        return field.messageCtor.fromJson(value)
    }

    if (field instanceof Enum) {
        return field.values[value]
    }

    return normalizeField(field, value)
}

export function toJson(field: MapField | Field | Type | Enum | string, value: any): any {
    if (field instanceof MapField) {
        const result: any = {}
        for (let key in value) {
            if (!value.hasOwnProperty(key)) continue

            if (field.resolvedType instanceof Type) {
                result[key] = field.resolvedType.messageCtor.toJson(value[key])
            } else if (field.resolvedType instanceof Enum) {
                result[key] = field.resolvedType.valuesById[value[key]]
            } else {
                result[key] = toJson(field.type, value[key])
            }
        }
        return result
    }

    if (field instanceof Field) {
        if (field.repeated && Array.isArray(value)) {
            return value.map(it => toJson(field, it))
        }

        if (field.resolvedType instanceof Type) {
            return field.resolvedType.messageCtor.toJson(value)
        } else if (field.resolvedType instanceof Enum) {
            return field.resolvedType.valuesById[value]
        } else {
            return toJson(field.type, value)
        }
    }

    if (field instanceof Type) {
        return field.messageCtor.toJson(value)
    }

    if (field instanceof Enum) {
        return field.valuesById[value]
    }

    switch (field) {
        case "string":
            return `${value}`
        case "bytes":
            return util.base64.encode(value, 0, value.length)
        case "bool":
            return !!value
        case "double":
        case "float":
        case "int32":
        case "uint32":
        case "sint32":
        case "fixed32":
        case "sfixed32":
            return value
        case "int64":
        case "uint64":
        case "sint64":
        case "fixed64":
        case "sfixed64":
            if (long.isLong(value)) {
                return value.toNumber()
            }
            return value
    }
}