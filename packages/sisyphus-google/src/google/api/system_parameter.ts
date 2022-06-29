/**
 *  ### System parameter configuration
 * 
 *  A system parameter is a special kind of parameter defined by the API
 *  system, not by an individual API. It is typically mapped to an HTTP header
 *  and/or a URL query parameter. This configuration specifies which methods
 *  change the names of the system parameters.
 */
export interface SystemParameters {
    /**
     *  Define system parameters.
     * 
     *  The parameters defined here will override the default parameters
     *  implemented by the system. If this field is missing from the service
     *  config, default system parameters will be used. Default system parameters
     *  and names is implementation-dependent.
     * 
     *  Example: define api key for all methods
     * 
     *      system_parameters
     *        rules:
     *          - selector: "*"
     *            parameters:
     *              - name: api_key
     *                url_query_parameter: api_key
     * 
     * 
     *  Example: define 2 api key names for a specific method.
     * 
     *      system_parameters
     *        rules:
     *          - selector: "/ListShelves"
     *            parameters:
     *              - name: api_key
     *                http_header: Api-Key1
     *              - name: api_key
     *                http_header: Api-Key2
     * 
     *  **NOTE:** All service configuration rules follow "last one wins" order.
     */
    rules?: SystemParameterRule[]
}

export namespace SystemParameters {
    export const name = 'google.api.SystemParameters'
}

/**
 *  Define a system parameter rule mapping system parameter definitions to
 *  methods.
 */
export interface SystemParameterRule {
    /**
     *  Selects the methods to which this rule applies. Use '*' to indicate all
     *  methods in all APIs.
     * 
     *  Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
     */
    selector?: string

    /**
     *  Define parameters. Multiple names may be defined for a parameter.
     *  For a given method call, only one of them should be used. If multiple
     *  names are used the behavior is implementation-dependent.
     *  If none of the specified names are present the behavior is
     *  parameter-dependent.
     */
    parameters?: SystemParameter[]
}

export namespace SystemParameterRule {
    export const name = 'google.api.SystemParameterRule'
}

/**
 *  Define a parameter's name and location. The parameter may be passed as either
 *  an HTTP header or a URL query parameter, and if both are passed the behavior
 *  is implementation-dependent.
 */
export interface SystemParameter {
    /**  Define the name of the parameter, such as "api_key" . It is case sensitive. */
    name?: string

    /**
     *  Define the HTTP header name to use for the parameter. It is case
     *  insensitive.
     */
    httpHeader?: string

    /**
     *  Define the URL query parameter name to use for the parameter. It is case
     *  sensitive.
     */
    urlQueryParameter?: string
}

export namespace SystemParameter {
    export const name = 'google.api.SystemParameter'
}
