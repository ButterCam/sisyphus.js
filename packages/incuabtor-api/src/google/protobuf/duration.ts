import * as $protobuf from "protobufjs"
import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../_reflection"


/**
 * A Duration represents a signed, fixed-length span of time represented
 * as a count of seconds and fractions of seconds at nanosecond
 * resolution. It is independent of any calendar and concepts like "day"
 * or "month". It is related to Timestamp in that the difference between
 * two Timestamp values is a Duration and it can be added or subtracted
 * from a Timestamp. Range is approximately +-10,000 years.
 * 
 * # Examples
 * 
 * Example 1: Compute Duration from two Timestamps in pseudo code.
 * 
 * Timestamp start = ...;
 * Timestamp end = ...;
 * Duration duration = ...;
 * 
 * duration.seconds = end.seconds - start.seconds;
 * duration.nanos = end.nanos - start.nanos;
 * 
 * if (duration.seconds < 0 && duration.nanos > 0) {
 * duration.seconds += 1;
 * duration.nanos -= 1000000000;
 * } else if (duration.seconds > 0 && duration.nanos < 0) {
 * duration.seconds -= 1;
 * duration.nanos += 1000000000;
 * }
 * 
 * Example 2: Compute Timestamp from Timestamp + Duration in pseudo code.
 * 
 * Timestamp start = ...;
 * Duration duration = ...;
 * Timestamp end = ...;
 * 
 * end.seconds = start.seconds + duration.seconds;
 * end.nanos = start.nanos + duration.nanos;
 * 
 * if (end.nanos < 0) {
 * end.seconds -= 1;
 * end.nanos += 1000000000;
 * } else if (end.nanos >= 1000000000) {
 * end.seconds += 1;
 * end.nanos -= 1000000000;
 * }
 * 
 * Example 3: Compute Duration from datetime.timedelta in Python.
 * 
 * td = datetime.timedelta(days=3, minutes=10)
 * duration = Duration()
 * duration.FromTimedelta(td)
 * 
 * # JSON Mapping
 * 
 * In JSON format, the Duration type is encoded as a string rather than an
 * object, where the string ends in the suffix "s" (indicating seconds) and
 * is preceded by the number of seconds, with nanoseconds expressed as
 * fractional seconds. For example, 3 seconds with 0 nanoseconds should be
 * encoded in JSON format as "3s", while 3 seconds and 1 nanosecond should
 * be expressed in JSON format as "3.000000001s", and 3 seconds and 1
 * microsecond should be expressed in JSON format as "3.000001s".
 */
export interface IDuration {
    /**
     * Signed seconds of the span of time. Must be from -315,576,000,000
     * to +315,576,000,000 inclusive. Note: these bounds are computed from:
     * 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
     */
    seconds?: $protobuf.Long
    /**
     * Signed fractions of a second at nanosecond resolution of the span
     * of time. Durations less than one second are represented with a 0
     * `seconds` field and a positive or negative `nanos` field. For durations
     * of one second or more, a non-zero value for the `nanos` field must be
     * of the same sign as the `seconds` field. Must be from -999,999,999
     * to +999,999,999 inclusive.
     */
    nanos?: number
}

export class Duration extends $sisyphus.Message<IDuration> implements IDuration {
    seconds!: $protobuf.Long
    nanos!: number
    get $reflection() {
        return Duration.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.protobuf.Duration")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): Duration {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.seconds = reader.int64()
                    break
                case 2:
                    result.nanos = reader.int32()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): Duration {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IDuration): Duration {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "seconds":
                    result[key] = $sisyphus.Long.fromValue(properties[key])
                    break
                case "nanos":
                    result[key] = Number(properties[key])
                    break
            }
        }
        return result
    }
}
Duration.prototype.seconds = $sisyphus.Long.ZERO
Duration.prototype.nanos = 0