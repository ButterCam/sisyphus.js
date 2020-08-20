import * as $sisyphus from "@sisyphus.js/core"
import * as $reflection from "../../_reflection"


export interface IServiceMetadata {
    name?: string
}

export class ServiceMetadata extends $sisyphus.Message<ServiceMetadata> implements IServiceMetadata {
    name!: string
}
$reflection.root.lookupType(".sisyphus.api.ServiceMetadata").messageCtor = ServiceMetadata

export let metadata = $reflection.root.lookup(".sisyphus.api.metadata")