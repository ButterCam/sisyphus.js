import {Visibility, VisibilityRule} from '@sisyphus.js/google/lib/google/api/visibility'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/api/visibility' {
    namespace Visibility {
        let descriptor: MessageDescriptor<Visibility>

        function binaryify(v: Visibility): Uint8Array

        function parse(buffer: Uint8Array): Visibility
    }

    namespace VisibilityRule {
        let descriptor: MessageDescriptor<VisibilityRule>

        function binaryify(v: VisibilityRule): Uint8Array

        function parse(buffer: Uint8Array): VisibilityRule
    }
}

export * from '@sisyphus.js/google/lib/google/api/visibility'

Visibility.descriptor = protobufDefinition({
    name: '.google.api.Visibility',

    fields: [{kind: 'message', name: 'rules', num: 1, type: () => VisibilityRule.descriptor, repeat: true}]
})

Visibility.binaryify = binaryifyFun(Visibility.descriptor)

Visibility.parse = parseFun(Visibility.descriptor)

VisibilityRule.descriptor = protobufDefinition({
    name: '.google.api.VisibilityRule',

    fields: [
        {kind: 'scalar', name: 'selector', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'restriction', num: 2, type: 9 /* STRING */}
    ]
})

VisibilityRule.binaryify = binaryifyFun(VisibilityRule.descriptor)

VisibilityRule.parse = parseFun(VisibilityRule.descriptor)

extendDefinition('.google.protobuf.EnumOptions', {kind: 'message', name: 'enumVisibility', num: 72295727, type: () => VisibilityRule.descriptor})

extendDefinition('.google.protobuf.EnumValueOptions', {kind: 'message', name: 'valueVisibility', num: 72295727, type: () => VisibilityRule.descriptor})

extendDefinition('.google.protobuf.FieldOptions', {kind: 'message', name: 'fieldVisibility', num: 72295727, type: () => VisibilityRule.descriptor})

extendDefinition('.google.protobuf.MessageOptions', {kind: 'message', name: 'messageVisibility', num: 72295727, type: () => VisibilityRule.descriptor})

extendDefinition('.google.protobuf.MethodOptions', {kind: 'message', name: 'methodVisibility', num: 72295727, type: () => VisibilityRule.descriptor})

extendDefinition('.google.protobuf.ServiceOptions', {kind: 'message', name: 'apiVisibility', num: 72295727, type: () => VisibilityRule.descriptor})
