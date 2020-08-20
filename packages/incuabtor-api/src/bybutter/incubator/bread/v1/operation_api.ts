import * as $sisyphus from "@sisyphus.js/core"
import * as $operations from "../../../../google/longrunning/operations"
import * as $empty from "../../../../google/protobuf/empty"
import * as $reflection from "../../../../_reflection"

/** Bread 的 LRO 相关的 API */
export class OperationApi extends $sisyphus.Client {
    get $reflection() {
        return OperationApi.reflection
    }
    /** 查询所有 LRO */
    async ListOperations(input: $operations.IListOperationsRequest, metadata?: { [k: string]: string }): Promise<$operations.IListOperationsResponse> {
        return await this.$call(this.$reflection.methods["ListOperations"], input, metadata)
    }
    /** 获取指定 LRO 状态 */
    async GetOperation(input: $operations.IGetOperationRequest, metadata?: { [k: string]: string }): Promise<$operations.IOperation> {
        return await this.$call(this.$reflection.methods["GetOperation"], input, metadata)
    }
    /** 删除指定 LRO */
    async DeleteOperation(input: $operations.IDeleteOperationRequest, metadata?: { [k: string]: string }): Promise<$empty.IEmpty> {
        return await this.$call(this.$reflection.methods["DeleteOperation"], input, metadata)
    }
    /** 取消指定 LRO 执行 */
    async CancelOperation(input: $operations.ICancelOperationRequest, metadata?: { [k: string]: string }): Promise<$empty.IEmpty> {
        return await this.$call(this.$reflection.methods["CancelOperation"], input, metadata)
    }
    static readonly reflection = $reflection.root.lookupService(".bybutter.incubator.bread.v1.OperationApi")
}