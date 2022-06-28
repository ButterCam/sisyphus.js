import {Documentation, DocumentationRule, Page} from '@sisyphus.js/google/lib/google/api/documentation'
import {MessageDescriptor} from '@sisyphus.js/runtime.proto'
import {binaryifyFun, parseFun} from '@sisyphus.js/runtime.proto/lib/message'

declare module '@sisyphus.js/google/lib/google/api/documentation' {
    namespace Documentation {
        let descriptor: MessageDescriptor<Documentation>

        function binaryify(v: Documentation): Uint8Array

        function parse(buffer: Uint8Array): Documentation
    }

    namespace DocumentationRule {
        let descriptor: MessageDescriptor<DocumentationRule>

        function binaryify(v: DocumentationRule): Uint8Array

        function parse(buffer: Uint8Array): DocumentationRule
    }

    namespace Page {
        let descriptor: MessageDescriptor<Page>

        function binaryify(v: Page): Uint8Array

        function parse(buffer: Uint8Array): Page
    }
}

export * from '@sisyphus.js/google/lib/google/api/documentation'

Documentation.descriptor = protobufDefinition({
    name: '.google.api.Documentation',

    fields: [
        {kind: 'scalar', name: 'summary', num: 1, type: 9 /* STRING */},

        {kind: 'message', name: 'pages', num: 5, type: () => Page.descriptor, repeat: true},

        {kind: 'message', name: 'rules', num: 3, type: () => DocumentationRule.descriptor, repeat: true},

        {kind: 'scalar', name: 'documentationRootUrl', num: 4, type: 9 /* STRING */},

        {kind: 'scalar', name: 'serviceRootUrl', num: 6, type: 9 /* STRING */},

        {kind: 'scalar', name: 'overview', num: 2, type: 9 /* STRING */}
    ]
})

Documentation.binaryify = binaryifyFun(Documentation.descriptor)

Documentation.parse = parseFun(Documentation.descriptor)

DocumentationRule.descriptor = protobufDefinition({
    name: '.google.api.DocumentationRule',

    fields: [
        {kind: 'scalar', name: 'selector', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'description', num: 2, type: 9 /* STRING */},

        {kind: 'scalar', name: 'deprecationDescription', num: 3, type: 9 /* STRING */}
    ]
})

DocumentationRule.binaryify = binaryifyFun(DocumentationRule.descriptor)

DocumentationRule.parse = parseFun(DocumentationRule.descriptor)

Page.descriptor = protobufDefinition({
    name: '.google.api.Page',

    fields: [
        {kind: 'scalar', name: 'name', num: 1, type: 9 /* STRING */},

        {kind: 'scalar', name: 'content', num: 2, type: 9 /* STRING */},

        {kind: 'message', name: 'subpages', num: 3, type: () => Page.descriptor, repeat: true}
    ]
})

Page.binaryify = binaryifyFun(Page.descriptor)

Page.parse = parseFun(Page.descriptor)
