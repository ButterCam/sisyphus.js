import {MessageDescriptor} from '../descriptor'
import {ExtensionGroupGeneratingState} from './state'

generate<ExtensionGroupGeneratingState>('extensionGroup', it => {
    const builder = it.target
    const [lib, target] = it.parent.descriptor.import(it.descriptor)

    if (!(target instanceof MessageDescriptor)) throw new Error('Invalid extension descriptor')

    if (lib != '') {
        const importedLib = builder.importManager.import(lib)
        builder.normalize().beginBlock(`declare module '${importedLib}'`)
    } else {
        builder.normalize().append('declare ')
    }

    const names = target.fullImportName(target.importName()).split('.')

    for (let name of names) {
        builder.beginBlock(`interface ${name}`)
    }

    for (let extension of it.parent.descriptor.extensions) {
        if (extension.extendeeType() !== it.descriptor) continue
        advance({
            kind: 'extension', parent: it, descriptor: extension, target: it.target
        })
    }

    for (let name of names) {
        builder.endBlock()
    }

    if (lib != '') {
        builder.endBlock()
    }
})
