import * as $sisyphus from "@sisyphus.js/core"
import * as $operations from "../../../../google/longrunning/operations"
import * as $empty from "../../../../google/protobuf/empty"
import * as $reflection from "../../../../_reflection"

/** Bread 的 LRO 相关的 API */
export class OperationApi extends $sisyphus.Client {
    get $service() {
        return OperationApi.$service
    }
    /** 查询所有 LRO */
    async ListOperations(input: $operations.IListOperationsRequest, metadata?: { [k: string]: string }): Promise<$operations.ListOperationsResponse> {
        return await this.$call(this.$service.methods["ListOperations"], input, metadata)
    }
    /** 获取指定 LRO 状态 */
    async GetOperation(input: $operations.IGetOperationRequest, metadata?: { [k: string]: string }): Promise<$operations.Operation> {
        return await this.$call(this.$service.methods["GetOperation"], input, metadata)
    }
    /** 删除指定 LRO */
    async DeleteOperation(input: $operations.IDeleteOperationRequest, metadata?: { [k: string]: string }): Promise<$empty.Empty> {
        return await this.$call(this.$service.methods["DeleteOperation"], input, metadata)
    }
    /** 取消指定 LRO 执行 */
    async CancelOperation(input: $operations.ICancelOperationRequest, metadata?: { [k: string]: string }): Promise<$empty.Empty> {
        return await this.$call(this.$service.methods["CancelOperation"], input, metadata)
    }
    static readonly $service = $reflection.root.lookupService(".bybutter.incubator.bread.v1.OperationApi")
}