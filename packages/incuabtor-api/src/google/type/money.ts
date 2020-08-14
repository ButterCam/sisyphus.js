import * as $protobuf from "protobufjs"
import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../_reflection"


/** Represents an amount of money with its currency type. */
export interface IMoney {
    /** The 3-letter currency code defined in ISO 4217. */
    currencyCode?: string
    /**
     * The whole units of the amount.
     * For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
     */
    units?: $protobuf.Long
    /**
     * Number of nano (10^-9) units of the amount.
     * The value must be between -999,999,999 and +999,999,999 inclusive.
     * If `units` is positive, `nanos` must be positive or zero.
     * If `units` is zero, `nanos` can be positive, zero, or negative.
     * If `units` is negative, `nanos` must be negative or zero.
     * For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
     */
    nanos?: number
}

export class Money extends $sisyphus.Message<IMoney> implements IMoney {
    currencyCode!: string
    units!: $protobuf.Long
    nanos!: number
    get $reflection() {
        return Money.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.type.Money")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): Money {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.currencyCode = reader.string()
                    break
                case 2:
                    result.units = reader.int64()
                    break
                case 3:
                    result.nanos = reader.int32()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): Money {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IMoney): Money {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("currencyCode") && properties.currencyCode !== undefined) result.currencyCode = properties.currencyCode
        if(properties.hasOwnProperty("units") && properties.units !== undefined) result.units = properties.units
        if(properties.hasOwnProperty("nanos") && properties.nanos !== undefined) result.nanos = properties.nanos
        return result
    }
}
Money.prototype.currencyCode = Money.reflection.fieldsById[1].defaultValue
Money.prototype.units = Money.reflection.fieldsById[2].defaultValue
Money.prototype.nanos = Money.reflection.fieldsById[3].defaultValue