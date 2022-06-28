import {WrapperType} from '../../wrappers'

/**
 *  A Duration represents a signed, fixed-length span of time represented
 *  as a count of seconds and fractions of seconds at nanosecond
 *  resolution. It is independent of any calendar and concepts like "day"
 *  or "month". It is related to Timestamp in that the difference between
 *  two Timestamp values is a Duration and it can be added or subtracted
 *  from a Timestamp. Range is approximately +-10,000 years.
 * 
 *  # Examples
 * 
 *  Example 1: Compute Duration from two Timestamps in pseudo code.
 * 
 *      Timestamp start = ...;
 *      Timestamp end = ...;
 *      Duration duration = ...;
 * 
 *      duration.seconds = end.seconds - start.seconds;
 *      duration.nanos = end.nanos - start.nanos;
 * 
 *      if (duration.seconds < 0 && duration.nanos > 0) {
 *        duration.seconds += 1;
 *        duration.nanos -= 1000000000;
 *      } else if (duration.seconds > 0 && duration.nanos < 0) {
 *        duration.seconds -= 1;
 *        duration.nanos += 1000000000;
 *      }
 * 
 *  Example 2: Compute Timestamp from Timestamp + Duration in pseudo code.
 * 
 *      Timestamp start = ...;
 *      Duration duration = ...;
 *      Timestamp end = ...;
 * 
 *      end.seconds = start.seconds + duration.seconds;
 *      end.nanos = start.nanos + duration.nanos;
 * 
 *      if (end.nanos < 0) {
 *        end.seconds -= 1;
 *        end.nanos += 1000000000;
 *      } else if (end.nanos >= 1000000000) {
 *        end.seconds += 1;
 *        end.nanos -= 1000000000;
 *      }
 * 
 *  Example 3: Compute Duration from datetime.timedelta in Python.
 * 
 *      td = datetime.timedelta(days=3, minutes=10)
 *      duration = Duration()
 *      duration.FromTimedelta(td)
 * 
 *  # JSON Mapping
 * 
 *  In JSON format, the Duration type is encoded as a string rather than an
 *  object, where the string ends in the suffix "s" (indicating seconds) and
 *  is preceded by the number of seconds, with nanoseconds expressed as
 *  fractional seconds. For example, 3 seconds with 0 nanoseconds should be
 *  encoded in JSON format as "3s", while 3 seconds and 1 nanosecond should
 *  be expressed in JSON format as "3.000000001s", and 3 seconds and 1
 *  microsecond should be expressed in JSON format as "3.000001s".
 */
export type Duration = `${number}s` & WrapperType

export namespace Duration {
    export const name = 'google.protobuf.Duration'
}
