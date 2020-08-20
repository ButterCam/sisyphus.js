import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../_reflection"


/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request
 * or the response type of an API method. For instance:
 * 
 * service Foo {
 * rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
 * }
 * 
 * The JSON representation for `Empty` is empty JSON object `{}`.
 */
export interface IEmpty extends $sisyphus.IEmpty {
}

export class Empty extends $sisyphus.Empty implements IEmpty {
}
$reflection.root.lookupType(".google.protobuf.Empty").messageCtor = Empty