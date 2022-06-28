import {
    EnumGeneratingState,
    FieldGeneratingState,
    MessageGeneratingState,
    OneofGeneratingState,
    ServiceMethodGeneratingState
} from './state'

generate<MessageGeneratingState>('message', it => {
    if (it.descriptor.mapEntry()) return
    it.generatedElements ++
    const builder = it.target

    builder.normalize().lineComment(...it.descriptor.comments())
    builder.normalize().document(it.descriptor.document())
    builder.beginBlock(`export interface ${it.descriptor.interfaceName()}`)
    for (let field of it.descriptor.fields) {
        advance<FieldGeneratingState>({
            kind: 'field', parent: it, descriptor: field, target: builder
        })
    }
    for (let oneof of it.descriptor.oneofs) {
        advance<OneofGeneratingState>({
            kind: 'oneof', parent: it, descriptor: oneof, target: builder
        })
    }
    builder.endBlock(it.descriptor.trailingComment())
    builder.normalize()

    builder.beginBlock(`export namespace ${it.descriptor.interfaceName()}`)

    builder.normalize().appendLn(`export const name = '${it.descriptor.fullname()}'`)

    for (let message of it.descriptor.messages) {
        advance<MessageGeneratingState>({
            kind: 'message', parent: it, descriptor: message, target: builder
        })
    }
    for (let enumType of it.descriptor.enums) {
        advance<EnumGeneratingState>({
            kind: 'enum', parent: it, descriptor: enumType, target: builder
        })
    }
    builder.endBlock()
})
