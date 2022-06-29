import '@sisyphus.js/runtime/lib/google/protobuf/descriptor'

declare module '@sisyphus.js/runtime/lib/google/protobuf/descriptor' {
    interface MethodOptions {
        /**
         *  A definition of a client library method signature.
         * 
         *  In client libraries, each proto RPC corresponds to one or more methods
         *  which the end user is able to call, and calls the underlying RPC.
         *  Normally, this method receives a single argument (a struct or instance
         *  corresponding to the RPC request object). Defining this field will
         *  add one or more overloads providing flattened or simpler method signatures
         *  in some languages.
         * 
         *  The fields on the method signature are provided as a comma-separated
         *  string.
         * 
         *  For example, the proto RPC and annotation:
         * 
         *    rpc CreateSubscription(CreateSubscriptionRequest)
         *        returns (Subscription) {
         *      option (google.api.method_signature) = "name,topic";
         *    }
         * 
         *  Would add the following Java overload (in addition to the method accepting
         *  the request object):
         * 
         *    public final Subscription createSubscription(String name, String topic)
         * 
         *  The following backwards-compatibility guidelines apply:
         * 
         *    * Adding this annotation to an unannotated method is backwards
         *      compatible.
         *    * Adding this annotation to a method which already has existing
         *      method signature annotations is backwards compatible if and only if
         *      the new method signature annotation is last in the sequence.
         *    * Modifying or removing an existing method signature annotation is
         *      a breaking change.
         *    * Re-ordering existing method signature annotations is a breaking
         *      change.
         */
        methodSignature: string[]
    }
}

declare module '@sisyphus.js/runtime/lib/google/protobuf/descriptor' {
    interface ServiceOptions {
        /**
         *  The hostname for this service.
         *  This should be specified with no prefix or protocol.
         * 
         *  Example:
         * 
         *    service Foo {
         *      option (google.api.default_host) = "foo.googleapi.com";
         *      ...
         *    }
         */
        defaultHost: string

        /**
         *  OAuth scopes needed for the client.
         * 
         *  Example:
         * 
         *    service Foo {
         *      option (google.api.oauth_scopes) = \
         *        "https://www.googleapis.com/auth/cloud-platform";
         *      ...
         *    }
         * 
         *  If there is more than one scope, use a comma-separated string:
         * 
         *  Example:
         * 
         *    service Foo {
         *      option (google.api.oauth_scopes) = \
         *        "https://www.googleapis.com/auth/cloud-platform,"
         *        "https://www.googleapis.com/auth/monitoring";
         *      ...
         *    }
         */
        oauthScopes: string
    }
}
