import * as $protobuf from "protobufjs"
import * as $reflection from "../../_reflection"


export interface IServiceMetadata {
    name?: string
}

export class ServiceMetadata extends $protobuf.Message<ServiceMetadata> implements IServiceMetadata {
    name!: string
    get $type() {
        return ServiceMetadata.$type
    }

    static readonly $type = $reflection.root.lookupType(".sisyphus.api.ServiceMetadata")
}
ServiceMetadata.$type.generatedObject = ServiceMetadata
ServiceMetadata.prototype.name = ServiceMetadata.$type.fieldsById[1].defaultValue

export let metadata = $reflection.root.lookup(".sisyphus.api.metadata")