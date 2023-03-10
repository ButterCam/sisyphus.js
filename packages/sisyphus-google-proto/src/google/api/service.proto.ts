import {Service} from '@sisyphus.js/google/lib/google/api/service'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {Api} from '@sisyphus.js/runtime.proto/lib/google/protobuf/api.proto'
import {Enum, Type} from '@sisyphus.js/runtime.proto/lib/google/protobuf/type.proto'
import {UInt32Value} from '@sisyphus.js/runtime.proto/lib/google/protobuf/wrappers.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'
import {Authentication} from './auth.proto'
import {Backend} from './backend.proto'
import {Billing} from './billing.proto'
import {Context} from './context.proto'
import {Control} from './control.proto'
import {Documentation} from './documentation.proto'
import {Endpoint} from './endpoint.proto'
import {Http} from './http.proto'
import {LogDescriptor} from './log.proto'
import {Logging} from './logging.proto'
import {MetricDescriptor} from './metric.proto'
import {MonitoredResourceDescriptor} from './monitored_resource.proto'
import {Monitoring} from './monitoring.proto'
import {Quota} from './quota.proto'
import {SourceInfo} from './source_info.proto'
import {SystemParameters} from './system_parameter.proto'
import {Usage} from './usage.proto'

declare module '@sisyphus.js/google/lib/google/api/service' {
    namespace Service {
        let descriptor: MessageDescriptor<Service>

        function binaryify(v: Service): Uint8Array

        function parse(buffer: Uint8Array): Service
    }
}

export * from '@sisyphus.js/google/lib/google/api/service'

Service.descriptor = protobufDefinition({
    name: '.google.api.Service',

    fields: [
        {kind: 'scalar', name: 'name', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'title', num: 2, type: 9 /* STRING */},

        {kind: 'scalar', name: 'producerProjectId', num: 22, type: 9 /* STRING */},

        {kind: 'scalar', name: 'id', num: 33, type: 9 /* STRING */},

        {kind: 'message', name: 'apis', num: 3, type: () => Api.descriptor, repeat: true},

        {kind: 'message', name: 'types', num: 4, type: () => Type.descriptor, repeat: true},

        {kind: 'message', name: 'enums', num: 5, type: () => Enum.descriptor, repeat: true},

        {kind: 'message', name: 'documentation', num: 6, type: () => Documentation.descriptor},

        {kind: 'message', name: 'backend', num: 8, type: () => Backend.descriptor},

        {kind: 'message', name: 'http', num: 9, type: () => Http.descriptor},

        {kind: 'message', name: 'quota', num: 10, type: () => Quota.descriptor},

        {kind: 'message', name: 'authentication', num: 11, type: () => Authentication.descriptor},

        {kind: 'message', name: 'context', num: 12, type: () => Context.descriptor},

        {kind: 'message', name: 'usage', num: 15, type: () => Usage.descriptor},

        {kind: 'message', name: 'endpoints', num: 18, type: () => Endpoint.descriptor, repeat: true},

        {kind: 'message', name: 'control', num: 21, type: () => Control.descriptor},

        {kind: 'message', name: 'logs', num: 23, type: () => LogDescriptor.descriptor, repeat: true},

        {kind: 'message', name: 'metrics', num: 24, type: () => MetricDescriptor.descriptor, repeat: true},

        {kind: 'message', name: 'monitoredResources', num: 25, type: () => MonitoredResourceDescriptor.descriptor, repeat: true},

        {kind: 'message', name: 'billing', num: 26, type: () => Billing.descriptor},

        {kind: 'message', name: 'logging', num: 27, type: () => Logging.descriptor},

        {kind: 'message', name: 'monitoring', num: 28, type: () => Monitoring.descriptor},

        {kind: 'message', name: 'systemParameters', num: 29, type: () => SystemParameters.descriptor},

        {kind: 'message', name: 'sourceInfo', num: 37, type: () => SourceInfo.descriptor},

        {kind: 'message', name: 'configVersion', num: 20, type: () => UInt32Value.descriptor, options: { deprecated: true }}
    ]
})

Service.binaryify = binaryifyFun(Service.descriptor)

Service.parse = parseFun(Service.descriptor)
