/**
 *  Selects and configures the service controller used by the service.  The
 *  service controller handles features like abuse, quota, billing, logging,
 *  monitoring, etc.
 */
export interface Control {
    /**
     *  The service control environment to use. If empty, no control plane
     *  feature (like quota and billing) will be enabled.
     */
    environment?: string
}

export namespace Control {
    export const name = 'google.api.Control'
}
