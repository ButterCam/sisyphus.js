export interface IHttpRule {
    selector: string
    get?: string
    put?: string
    post?: string
    delete?: string
    patch?: string
    custom?: (ICustomHttpPattern | null)
    body?: string
    responseBody?: string
    additionalBindings?: (IHttpRule[] | null)
    pattern?: string
}

export interface ICustomHttpPattern {
    kind?: string
    path?: string
}

export function exportHttpRule(options: any): IHttpRule {
    const result: IHttpRule = {
        selector: options["(google.api.http).selector"],
        get: options["(google.api.http).get"],
        put: options["(google.api.http).put"],
        post: options["(google.api.http).post"],
        delete: options["(google.api.http).delete"],
        patch: options["(google.api.http).patch"],
        custom: options["(google.api.http).custom"],
        body: options["(google.api.http).body"],
        responseBody: options["(google.api.http).responseBody"]
    }

    for (const string of ["get", "put", "post", "delete", "patch", "custom"]) {
        if ((<any>result)[string]) {
            result.pattern = string
        }
    }

    return result
}