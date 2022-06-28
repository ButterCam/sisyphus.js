import {EnumGeneratingState, EnumValueGeneratingState} from './state'

generate<EnumGeneratingState>('enum', it => {
    const builder = it.target
    it.generatedElements ++

    builder.normalize().lineComment(...it.descriptor.comments())
    builder.normalize().document(it.descriptor.document())
    builder.beginBlock(`export enum ${it.descriptor.enumName()}`)

    for (let value of it.descriptor.values) {
        advance({
            kind: 'enumValue', parent: it, descriptor: value, target: builder
        })
    }

    builder.endBlock(it.descriptor.trailingComment())

    builder.beginBlock(`export namespace ${it.descriptor.enumName()}`)

    builder.normalize().appendLn(`export const name = '${it.descriptor.fullname()}'`)

    builder.endBlock()
})

generate<EnumValueGeneratingState>('enumValue', it => {
    const builder = it.target
    it.generatedElements ++

    builder.normalize().lineComment(...it.descriptor.comments())
    builder.normalize().document(it.descriptor.document())
    builder.append(`${it.descriptor.simpleName()} = '${it.descriptor.name()}',`)
    builder.trailingComment(it.descriptor.trailingComment())
    builder.ln()
})