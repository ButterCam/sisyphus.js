import {ErrorReason} from '@sisyphus.js/google/lib/google/api/error_reason'
import {EnumDescriptor} from '@sisyphus.js/runtime.proto'

declare module '@sisyphus.js/google/lib/google/api/error_reason' {
    namespace ErrorReason {
        let descriptor: EnumDescriptor
    }
}

export * from '@sisyphus.js/google/lib/google/api/error_reason'

ErrorReason.descriptor = {
    name: '.google.api.ErrorReason',

    enum: {
        0: 'ERROR_REASON_UNSPECIFIED',

        ERROR_REASON_UNSPECIFIED: 0,

        1: 'SERVICE_DISABLED',

        SERVICE_DISABLED: 1,

        2: 'BILLING_DISABLED',

        BILLING_DISABLED: 2,

        3: 'API_KEY_INVALID',

        API_KEY_INVALID: 3,

        4: 'API_KEY_SERVICE_BLOCKED',

        API_KEY_SERVICE_BLOCKED: 4,

        7: 'API_KEY_HTTP_REFERRER_BLOCKED',

        API_KEY_HTTP_REFERRER_BLOCKED: 7,

        8: 'API_KEY_IP_ADDRESS_BLOCKED',

        API_KEY_IP_ADDRESS_BLOCKED: 8,

        9: 'API_KEY_ANDROID_APP_BLOCKED',

        API_KEY_ANDROID_APP_BLOCKED: 9,

        13: 'API_KEY_IOS_APP_BLOCKED',

        API_KEY_IOS_APP_BLOCKED: 13,

        5: 'RATE_LIMIT_EXCEEDED',

        RATE_LIMIT_EXCEEDED: 5,

        6: 'RESOURCE_QUOTA_EXCEEDED',

        RESOURCE_QUOTA_EXCEEDED: 6,

        10: 'LOCATION_TAX_POLICY_VIOLATED',

        LOCATION_TAX_POLICY_VIOLATED: 10,

        11: 'USER_PROJECT_DENIED',

        USER_PROJECT_DENIED: 11,

        12: 'CONSUMER_SUSPENDED',

        CONSUMER_SUSPENDED: 12,

        14: 'CONSUMER_INVALID',

        CONSUMER_INVALID: 14,

        15: 'SECURITY_POLICY_VIOLATED',

        SECURITY_POLICY_VIOLATED: 15,

        16: 'ACCESS_TOKEN_EXPIRED',

        ACCESS_TOKEN_EXPIRED: 16,

        17: 'ACCESS_TOKEN_SCOPE_INSUFFICIENT',

        ACCESS_TOKEN_SCOPE_INSUFFICIENT: 17,

        18: 'ACCOUNT_STATE_INVALID',

        ACCOUNT_STATE_INVALID: 18,

        19: 'ACCESS_TOKEN_TYPE_UNSUPPORTED',

        ACCESS_TOKEN_TYPE_UNSUPPORTED: 19,
    }
}
