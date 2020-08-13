import * as $resource from "./resource"
import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../_reflection"
import * as $protobuf from "protobufjs"


/**
 * A simple descriptor of a resource type.
 * 
 * ResourceDescriptor annotates a resource message (either by means of a
 * protobuf annotation or use in the service config), and associates the
 * resource's schema, the resource type, and the pattern of the resource name.
 * 
 * Example:
 * 
 * message Topic {
 * // Indicates this message defines a resource schema.
 * // Declares the resource type in the format of {service}/{kind}.
 * // For Kubernetes resources, the format is {api group}/{kind}.
 * option (google.api.resource) = {
 * type: "pubsub.googleapis.com/Topic"
 * name_descriptor: {
 * pattern: "projects/{project}/topics/{topic}"
 * parent_type: "cloudresourcemanager.googleapis.com/Project"
 * parent_name_extractor: "projects/{project}"
 * }
 * };
 * }
 * 
 * The ResourceDescriptor Yaml config will look like:
 * 
 * resources:
 * - type: "pubsub.googleapis.com/Topic"
 * name_descriptor:
 * - pattern: "projects/{project}/topics/{topic}"
 * parent_type: "cloudresourcemanager.googleapis.com/Project"
 * parent_name_extractor: "projects/{project}"
 * 
 * Sometimes, resources have multiple patterns, typically because they can
 * live under multiple parents.
 * 
 * Example:
 * 
 * message LogEntry {
 * option (google.api.resource) = {
 * type: "logging.googleapis.com/LogEntry"
 * name_descriptor: {
 * pattern: "projects/{project}/logs/{log}"
 * parent_type: "cloudresourcemanager.googleapis.com/Project"
 * parent_name_extractor: "projects/{project}"
 * }
 * name_descriptor: {
 * pattern: "folders/{folder}/logs/{log}"
 * parent_type: "cloudresourcemanager.googleapis.com/Folder"
 * parent_name_extractor: "folders/{folder}"
 * }
 * name_descriptor: {
 * pattern: "organizations/{organization}/logs/{log}"
 * parent_type: "cloudresourcemanager.googleapis.com/Organization"
 * parent_name_extractor: "organizations/{organization}"
 * }
 * name_descriptor: {
 * pattern: "billingAccounts/{billing_account}/logs/{log}"
 * parent_type: "billing.googleapis.com/BillingAccount"
 * parent_name_extractor: "billingAccounts/{billing_account}"
 * }
 * };
 * }
 * 
 * The ResourceDescriptor Yaml config will look like:
 * 
 * resources:
 * - type: 'logging.googleapis.com/LogEntry'
 * name_descriptor:
 * - pattern: "projects/{project}/logs/{log}"
 * parent_type: "cloudresourcemanager.googleapis.com/Project"
 * parent_name_extractor: "projects/{project}"
 * - pattern: "folders/{folder}/logs/{log}"
 * parent_type: "cloudresourcemanager.googleapis.com/Folder"
 * parent_name_extractor: "folders/{folder}"
 * - pattern: "organizations/{organization}/logs/{log}"
 * parent_type: "cloudresourcemanager.googleapis.com/Organization"
 * parent_name_extractor: "organizations/{organization}"
 * - pattern: "billingAccounts/{billing_account}/logs/{log}"
 * parent_type: "billing.googleapis.com/BillingAccount"
 * parent_name_extractor: "billingAccounts/{billing_account}"
 * 
 * For flexible resources, the resource name doesn't contain parent names, but
 * the resource itself has parents for policy evaluation.
 * 
 * Example:
 * 
 * message Shelf {
 * option (google.api.resource) = {
 * type: "library.googleapis.com/Shelf"
 * name_descriptor: {
 * pattern: "shelves/{shelf}"
 * parent_type: "cloudresourcemanager.googleapis.com/Project"
 * }
 * name_descriptor: {
 * pattern: "shelves/{shelf}"
 * parent_type: "cloudresourcemanager.googleapis.com/Folder"
 * }
 * };
 * }
 * 
 * The ResourceDescriptor Yaml config will look like:
 * 
 * resources:
 * - type: 'library.googleapis.com/Shelf'
 * name_descriptor:
 * - pattern: "shelves/{shelf}"
 * parent_type: "cloudresourcemanager.googleapis.com/Project"
 * - pattern: "shelves/{shelf}"
 * parent_type: "cloudresourcemanager.googleapis.com/Folder"
 */
export interface IResourceDescriptor {
    /**
     * The resource type. It must be in the format of
     * {service_name}/{resource_type_kind}. The `resource_type_kind` must be
     * singular and must not include version numbers.
     * 
     * Example: `storage.googleapis.com/Bucket`
     * 
     * The value of the resource_type_kind must follow the regular expression
     * /[A-Za-z][a-zA-Z0-9]+/. It should start with an upper case character and
     * should use PascalCase (UpperCamelCase). The maximum number of
     * characters allowed for the `resource_type_kind` is 100.
     */
    type?: string
    /**
     * Optional. The relative resource name pattern associated with this resource
     * type. The DNS prefix of the full resource name shouldn't be specified here.
     * 
     * The path pattern must follow the syntax, which aligns with HTTP binding
     * syntax:
     * 
     * Template = Segment { "/" Segment } ;
     * Segment = LITERAL | Variable ;
     * Variable = "{" LITERAL "}" ;
     * 
     * Examples:
     * 
     * - "projects/{project}/topics/{topic}"
     * - "projects/{project}/knowledgeBases/{knowledge_base}"
     * 
     * The components in braces correspond to the IDs for each resource in the
     * hierarchy. It is expected that, if multiple patterns are provided,
     * the same component name (e.g. "project") refers to IDs of the same
     * type of resource.
     */
    pattern?: (string[] | null)
    /**
     * Optional. The field on the resource that designates the resource name
     * field. If omitted, this is assumed to be "name".
     */
    nameField?: string
    /**
     * Optional. The historical or future-looking state of the resource pattern.
     * 
     * Example:
     * 
     * // The InspectTemplate message originally only supported resource
     * // names with organization, and project was added later.
     * message InspectTemplate {
     * option (google.api.resource) = {
     * type: "dlp.googleapis.com/InspectTemplate"
     * pattern:
     * "organizations/{organization}/inspectTemplates/{inspect_template}"
     * pattern: "projects/{project}/inspectTemplates/{inspect_template}"
     * history: ORIGINALLY_SINGLE_PATTERN
     * };
     * }
     */
    history?: $resource.ResourceDescriptor.History
    /**
     * The plural name used in the resource name, such as 'projects' for
     * the name of 'projects/{project}'. It is the same concept of the `plural`
     * field in k8s CRD spec
     * https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions/
     */
    plural?: string
    /**
     * The same concept of the `singular` field in k8s CRD spec
     * https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions/
     * Such as "project" for the `resourcemanager.googleapis.com/Project` type.
     */
    singular?: string
}

export class ResourceDescriptor extends $sisyphus.Message<IResourceDescriptor> implements IResourceDescriptor {
    type!: string
    pattern!: (string[] | null)
    nameField!: string
    history!: $resource.ResourceDescriptor.History
    plural!: string
    singular!: string
    get $reflection() {
        return ResourceDescriptor.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.api.ResourceDescriptor")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ResourceDescriptor {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.type = reader.string()
                    break
                case 2:
                    if (!result.pattern) result.pattern = []
                    result.pattern.push(reader.string())
                    break
                case 3:
                    result.nameField = reader.string()
                    break
                case 4:
                    result.history = reader.uint32()
                    break
                case 5:
                    result.plural = reader.string()
                    break
                case 6:
                    result.singular = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ResourceDescriptor {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IResourceDescriptor): ResourceDescriptor {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("type") && properties.type !== undefined) result.type = properties.type
        if(properties.hasOwnProperty("pattern") && properties.pattern !== undefined) result.pattern = properties.pattern
        if(properties.hasOwnProperty("nameField") && properties.nameField !== undefined) result.nameField = properties.nameField
        if(properties.hasOwnProperty("history") && properties.history !== undefined) result.history = properties.history
        if(properties.hasOwnProperty("plural") && properties.plural !== undefined) result.plural = properties.plural
        if(properties.hasOwnProperty("singular") && properties.singular !== undefined) result.singular = properties.singular
        return result
    }
}
ResourceDescriptor.prototype.type = ""
ResourceDescriptor.prototype.pattern = null
ResourceDescriptor.prototype.nameField = ""
ResourceDescriptor.prototype.history = $resource.ResourceDescriptor.History.HISTORY_UNSPECIFIED
ResourceDescriptor.prototype.plural = ""
ResourceDescriptor.prototype.singular = ""

export namespace ResourceDescriptor {

    /**
     * A description of the historical or future-looking state of the
     * resource pattern.
     */
    export enum History {
        /** The "unset" value. */
        HISTORY_UNSPECIFIED = 0,
        /**
         * The resource originally had one pattern and launched as such, and
         * additional patterns were added later.
         */
        ORIGINALLY_SINGLE_PATTERN = 1,
        /**
         * The resource has one pattern, but the API owner expects to add more
         * later. (This is the inverse of ORIGINALLY_SINGLE_PATTERN, and prevents
         * that from being necessary once there are multiple patterns.)
         */
        FUTURE_MULTI_PATTERN = 2,
    }

    export namespace History {
        export const reflection = $reflection.root.lookupEnum(".google.api.ResourceDescriptor.History")
    }
}

/**
 * Defines a proto annotation that describes a string field that refers to
 * an API resource.
 */
export interface IResourceReference {
    /**
     * The resource type that the annotated field references.
     * 
     * Example:
     * 
     * message Subscription {
     * string topic = 2 [(google.api.resource_reference) = {
     * type: "pubsub.googleapis.com/Topic"
     * }];
     * }
     */
    type?: string
    /**
     * The resource type of a child collection that the annotated field
     * references. This is useful for annotating the `parent` field that
     * doesn't have a fixed resource type.
     * 
     * Example:
     * 
     * message ListLogEntriesRequest {
     * string parent = 1 [(google.api.resource_reference) = {
     * child_type: "logging.googleapis.com/LogEntry"
     * };
     * }
     */
    childType?: string
}

export class ResourceReference extends $sisyphus.Message<IResourceReference> implements IResourceReference {
    type!: string
    childType!: string
    get $reflection() {
        return ResourceReference.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".google.api.ResourceReference")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ResourceReference {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.type = reader.string()
                    break
                case 2:
                    result.childType = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ResourceReference {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IResourceReference): ResourceReference {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        if(properties.hasOwnProperty("type") && properties.type !== undefined) result.type = properties.type
        if(properties.hasOwnProperty("childType") && properties.childType !== undefined) result.childType = properties.childType
        return result
    }
}
ResourceReference.prototype.type = ""
ResourceReference.prototype.childType = ""