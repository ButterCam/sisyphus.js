import * as path from 'path'
import * as Google from './google/protobuf/descriptor'

export interface DescriptorNode<T> {
    descriptor: T

    file(): FileDescriptor

    root(): FileDescriptorSet

    lookup(name: string): DescriptorNode<any> | undefined
}

export class FileDescriptorSet implements DescriptorNode<Google.FileDescriptorSet> {
    descriptor: Google.FileDescriptorSet

    readonly files: FileDescriptor[] = []

    constructor(descriptor: Google.FileDescriptorSet) {
        this.descriptor = descriptor

        for (const file of descriptor.file ?? []) {
            this.files.push(new FileDescriptor(this, file))
        }
    }

    file(): FileDescriptor {
        throw new Error('Illegal operation')
    }

    root(): FileDescriptorSet {
        return this
    }

    lookup(name: string): DescriptorNode<any> | undefined {
        return lookupFromDescriptors(this.files, name)
    }
}

export class FileDescriptor implements DescriptorNode<Google.FileDescriptorProto> {
    parent: FileDescriptorSet

    readonly messages: MessageDescriptor[] = []

    readonly enums: EnumDescriptor[] = []

    readonly extensions: ExtensionDescriptor[] = []

    readonly services: ServiceDescriptor[] = []

    descriptor: Google.FileDescriptorProto

    constructor(parent: FileDescriptorSet, descriptor: Google.FileDescriptorProto) {
        this.parent = parent
        this.descriptor = descriptor

        for (const message of descriptor.messageType ?? []) {
            this.messages.push(new MessageDescriptor(this, message))
        }

        for (const enumType of descriptor.enumType ?? []) {
            this.enums.push(new EnumDescriptor(this, enumType))
        }

        for (const extension of descriptor.extension ?? []) {
            this.extensions.push(new ExtensionDescriptor(this, extension))
        }

        for (const service of descriptor.service ?? []) {
            this.services.push(new ServiceDescriptor(this, service))
        }
    }

    file(): FileDescriptor {
        return this
    }

    name(): string {
        return this.descriptor.name ?? throwError('Invalid file descriptor, no file name.')
    }

    fullname(): string {
        return this.descriptor.package ?? ''
    }

    root(): FileDescriptorSet {
        return this.parent
    }

    tsModule(sub?: string): string {
        let result = path.basename(this.name()).replace('.proto', '')
        if (sub !== undefined && sub !== '') {
            result = result + '.' + 'sub'
        }
        return result
    }

    tsModulePath(sub?: string): string {
        let result = this.name().replace('.proto', '')
        if (sub !== undefined && sub !== '') {
            result = result + '.' + sub
        }
        return result
    }

    tsFile(sub?: string): string {
        return this.tsModulePath(sub) + '.ts'
    }

    import(name: string, sub?: string): [string, MessageDescriptor | EnumDescriptor] {
        const target = this.root().lookup(name)
        if (!target) throw new Error(`Symbol '${name}' not found.`)
        const lib = '/' + target.file().tsModulePath(sub)
        if (target instanceof MessageDescriptor) {
            return [lib, target]
        }
        if (target instanceof EnumDescriptor) {
            return [lib, target]
        }
        throw new Error(`Wrong import '${name}'.`)
    }

    comments(): string[] {
        return this.findComment(12)?.leadingDetachedComments ?? []
    }

    findComment(...path: number[]): Google.SourceCodeInfo.Location | undefined {
        for (let location of this.descriptor.sourceCodeInfo?.location ?? []) {
            if (arrayEquals(location.path ?? [], path)) return location
        }
        return undefined
    }

    lookup(name: string): DescriptorNode<any> | undefined {
        if (name == this.descriptor.name) return this
        let packageName = this.descriptor.package ?? ''

        if (name.startsWith('.')) {
            if (packageName === '') return undefined
            packageName = `.${packageName}.`
            if (!name.startsWith(packageName)) return undefined
            name = name.substring(packageName.length)
        } else {
            if (packageName !== '') return undefined
        }

        return lookupFromDescriptors([...this.messages, ...this.enums, ...this.services], name)
    }
}

export class MessageDescriptor implements DescriptorNode<Google.DescriptorProto> {
    parent: FileDescriptor | MessageDescriptor

    readonly messages: MessageDescriptor[] = []

    readonly enums: EnumDescriptor[] = []

    readonly fields: FieldDescriptor[] = []

    readonly oneofs: OneofDescriptor[] = []

    readonly extensions: ExtensionDescriptor[] = []

    descriptor: Google.DescriptorProto

    constructor(parent: FileDescriptor | MessageDescriptor, descriptor: Google.DescriptorProto) {
        this.parent = parent
        this.descriptor = descriptor

        for (const message of descriptor.nestedType ?? []) {
            this.messages.push(new MessageDescriptor(this, message))
        }

        for (const enumType of descriptor.enumType ?? []) {
            this.enums.push(new EnumDescriptor(this, enumType))
        }

        for (const extension of descriptor.extension ?? []) {
            this.extensions.push(new ExtensionDescriptor(this, extension))
        }

        for (const oneof of descriptor.oneofDecl ?? []) {
            this.oneofs.push(new OneofDescriptor(this, oneof))
        }

        for (const field of descriptor.field ?? []) {
            this.fields.push(new FieldDescriptor(this, field))
        }
    }

    file(): FileDescriptor {
        return this.parent.file()
    }

    root(): FileDescriptorSet {
        return this.parent.root()
    }

    interfaceName(): string {
        return this.descriptor.name ?? throwError('Invalid message descriptor')
    }

    fullname(): string {
        const parent = this.parent.fullname()
        if (parent == '') return this.interfaceName()
        return `${parent}.${this.interfaceName()}`
    }

    fullImportName(importName: string): string {
        if (this.parent instanceof FileDescriptor) {
            return importName
        } else {
            return `${this.parent.fullImportName(importName)}.${this.interfaceName()}`
        }
    }

    importName(): string {
        if (this.parent instanceof FileDescriptor) {
            return this.interfaceName()
        } else {
            return this.parent.importName()
        }
    }

    mapEntry(): boolean {
        return this.descriptor.options?.mapEntry === true
    }

    path(): number[] {
        const index = this.parent.messages.indexOf(this)

        if (this.parent instanceof FileDescriptor) {
            return [4, index]
        } else {
            return this.parent.path().concat(3, index)
        }
    }

    document(): string {
        return this.file().findComment(...this.path())?.leadingComments ?? ''
    }

    comments(): string[] {
        return this.file().findComment(...this.path())?.leadingDetachedComments ?? []
    }

    trailingComment(): string {
        return this.file().findComment(...this.path())?.trailingComments ?? ''
    }

    lookup(name: string): DescriptorNode<any> | undefined {
        if (name == this.descriptor.name) return this
        const prefix = `${this.descriptor.name}.`
        if (!name.startsWith(prefix)) return undefined
        name = name.substring(prefix.length)
        return lookupFromDescriptors([...this.messages, ...this.enums, ...this.oneofs, ...this.fields], name)
    }
}

export class FieldDescriptor implements DescriptorNode<Google.FieldDescriptorProto> {
    parent: MessageDescriptor

    descriptor: Google.FieldDescriptorProto

    constructor(parent: MessageDescriptor, descriptor: Google.FieldDescriptorProto) {
        this.parent = parent
        this.descriptor = descriptor
    }

    name(): string {
        return this.descriptor.jsonName ?? throwError('Invalid field descriptor, no json name.')
    }

    file(): FileDescriptor {
        return this.parent.file()
    }

    root(): FileDescriptorSet {
        return this.parent.root()
    }

    oneof(): OneofDescriptor | undefined {
        const index = this.descriptor.oneofIndex
        if (index === undefined) return undefined
        if (!(this.parent instanceof MessageDescriptor)) throw new Error('Invalid field descriptor, no json name.')
        return this.parent.oneofs[index]
    }

    path(): number[] {
        const index = this.parent.fields.indexOf(this)
        return this.parent.path().concat(2, index)
    }

    document(): string {
        return this.file().findComment(...this.path())?.leadingComments ?? ''
    }

    comments(): string[] {
        return this.file().findComment(...this.path())?.leadingDetachedComments ?? []
    }

    trailingComment(): string {
        return this.file().findComment(...this.path())?.trailingComments ?? ''
    }

    lookup(name: string): DescriptorNode<any> | undefined {
        if (name == this.descriptor.name) return this
        return this.parent.lookup(name)
    }

    packed(): boolean | undefined {
        return fieldPacked(this.file().descriptor.syntax, this.descriptor)
    }
}

export class OneofDescriptor implements DescriptorNode<Google.OneofDescriptorProto> {
    parent: MessageDescriptor

    descriptor: Google.OneofDescriptorProto

    constructor(parent: MessageDescriptor, descriptor: Google.OneofDescriptorProto) {
        this.parent = parent
        this.descriptor = descriptor
    }

    name(): string {
        return this.descriptor.name ?? throwError('Invalid oneof descriptor')
    }

    index(): number {
        return this.parent.descriptor.oneofDecl?.indexOf(this.descriptor) ?? throwError('Invalid oneof descriptor')
    }

    fields(): FieldDescriptor[] {
        const index = this.index()
        return this.parent.fields.filter(it => it.descriptor.oneofIndex === index)
    }

    file(): FileDescriptor {
        return this.parent.file()
    }

    root(): FileDescriptorSet {
        return this.parent.root()
    }

    path(): number[] {
        const index = this.parent.oneofs.indexOf(this)
        return this.parent.path().concat(8, index)
    }

    document(): string {
        return this.file().findComment(...this.path())?.leadingComments ?? ''
    }

    comments(): string[] {
        return this.file().findComment(...this.path())?.leadingDetachedComments ?? []
    }

    trailingComment(): string {
        return this.file().findComment(...this.path())?.trailingComments ?? ''
    }

    lookup(name: string): DescriptorNode<any> | undefined {
        if (name == this.descriptor.name) return this
        return undefined
    }
}

export class ExtensionDescriptor implements DescriptorNode<Google.FieldDescriptorProto> {
    parent: FileDescriptor | MessageDescriptor

    descriptor: Google.FieldDescriptorProto

    constructor(parent: FileDescriptor | MessageDescriptor, descriptor: Google.FieldDescriptorProto) {
        this.parent = parent
        this.descriptor = descriptor
    }

    file(): FileDescriptor {
        return this.parent.file()
    }

    root(): FileDescriptorSet {
        return this.parent.root()
    }

    name(): string {
        return this.descriptor.jsonName ?? throwError('Invalid oneof descriptor')
    }

    extendee(): MessageDescriptor {
        const target = this.root().lookup(this.extendeeType())
        if (target instanceof MessageDescriptor) return target
        throw new Error('Invalid extendee target.')
    }

    extendeeType(): string {
        return this.descriptor.extendee ?? throwError('Invalid extension descriptor.')
    }

    path(): number[] {
        const index = this.parent.extensions.indexOf(this)
        if (this.parent instanceof MessageDescriptor) {
            return this.parent.path().concat(6, index)
        } else {
            return [7, index]
        }
    }

    document(): string {
        return this.file().findComment(...this.path())?.leadingComments ?? ''
    }

    comments(): string[] {
        return this.file().findComment(...this.path())?.leadingDetachedComments ?? []
    }

    trailingComment(): string {
        return this.file().findComment(...this.path())?.trailingComments ?? ''
    }

    lookup(name: string): DescriptorNode<any> | undefined {
        return undefined
    }

    packed(): boolean | undefined {
        return fieldPacked(this.file().descriptor.syntax, this.descriptor)
    }
}

export class EnumDescriptor implements DescriptorNode<Google.EnumDescriptorProto> {
    parent: FileDescriptor | MessageDescriptor

    readonly values: EnumValueDescriptor[] = []

    descriptor: Google.EnumDescriptorProto

    constructor(parent: FileDescriptor | MessageDescriptor, descriptor: Google.EnumDescriptorProto) {
        this.parent = parent
        this.descriptor = descriptor

        for (const value of descriptor.value ?? []) {
            this.values.push(new EnumValueDescriptor(this, value))
        }
    }

    file(): FileDescriptor {
        return this.parent.file()
    }

    root(): FileDescriptorSet {
        return this.parent.root()
    }

    enumName(): string {
        return this.descriptor.name ?? throwError('Invalid enum descriptor, no enum name.')
    }

    fullname(): string {
        const parent = this.parent.fullname()
        if (parent == '') return this.enumName()
        return `${parent}.${this.enumName()}`
    }

    fullImportName(importName: string): string {
        if (this.parent instanceof FileDescriptor) {
            return importName
        } else {
            return `${this.parent.fullImportName(importName)}.${this.enumName()}`
        }
    }

    importName(): string {
        if (this.parent instanceof FileDescriptor) {
            return this.enumName()
        } else {
            return this.parent.importName()
        }
    }

    path(): number[] {
        const index = this.parent.enums.indexOf(this)
        if (this.parent instanceof MessageDescriptor) {
            return this.parent.path().concat(4, index)
        } else {
            return [5, index]
        }
    }

    document(): string {
        return this.file().findComment(...this.path())?.leadingComments ?? ''
    }

    comments(): string[] {
        return this.file().findComment(...this.path())?.leadingDetachedComments ?? []
    }

    prefix(): string {
        return `${camelToUpperSnakeCase(this.enumName())}_`
    }

    trailingComment(): string {
        return this.file().findComment(...this.path())?.trailingComments ?? ''
    }

    lookup(name: string): DescriptorNode<any> | undefined {
        if (name == this.descriptor.name) return this
        const prefix = `${this.descriptor.name}.`
        if (!name.startsWith(prefix)) return undefined
        name = name.substring(prefix.length)
        return lookupFromDescriptors(this.values, name)
    }
}

export class EnumValueDescriptor implements DescriptorNode<Google.EnumValueDescriptorProto> {
    parent: EnumDescriptor

    descriptor: Google.EnumValueDescriptorProto

    constructor(parent: EnumDescriptor, descriptor: Google.EnumValueDescriptorProto) {
        this.parent = parent
        this.descriptor = descriptor
    }

    file(): FileDescriptor {
        return this.parent.file()
    }

    root(): FileDescriptorSet {
        return this.parent.root()
    }

    simpleName(): string {
        const values = this.parent.values.map(it => it.name())
        const prefix = this.parent.prefix()
        if (this.name().startsWith(prefix)) {
            return this.name().substring(prefix.length)
        }
        return this.name()
    }

    name(): string {
        return this.descriptor.name ?? throwError('Invalid enum value descriptor, no value name.')
    }

    number(): number {
        return this.descriptor.number ?? throwError('Invalid enum value descriptor, no value number.')
    }

    path(): number[] {
        const index = this.parent.values.indexOf(this)
        return this.parent.path().concat(2, index)
    }

    document(): string {
        return this.file().findComment(...this.path())?.leadingComments ?? ''
    }

    comments(): string[] {
        return this.file().findComment(...this.path())?.leadingDetachedComments ?? []
    }

    trailingComment(): string {
        return this.file().findComment(...this.path())?.trailingComments ?? ''
    }

    lookup(name: string): DescriptorNode<any> | undefined {
        if (name == this.descriptor.name) return this
        return undefined
    }
}

export class ServiceDescriptor implements DescriptorNode<Google.ServiceDescriptorProto> {
    parent: FileDescriptor

    readonly methods: MethodDescriptor[] = []

    descriptor: Google.ServiceDescriptorProto

    constructor(parent: FileDescriptor, descriptor: Google.ServiceDescriptorProto) {
        this.parent = parent
        this.descriptor = descriptor

        for (const method of descriptor.method ?? []) {
            this.methods.push(new MethodDescriptor(this, method))
        }
    }

    file(): FileDescriptor {
        return this.parent.file()
    }

    root(): FileDescriptorSet {
        return this.parent.root()
    }

    className(): string {
        return this.descriptor.name ?? throwError('Invalid service descriptor, no service name.')
    }

    fullname(): string {
        const parent = this.parent.fullname()
        if (parent == '') return this.className()
        return `${parent}.${this.className()}`
    }

    path(): number[] {
        const index = this.parent.services.indexOf(this)
        return [6, index]
    }

    document(): string {
        return this.file().findComment(...this.path())?.leadingComments ?? ''
    }

    comments(): string[] {
        return this.file().findComment(...this.path())?.leadingDetachedComments ?? []
    }

    trailingComment(): string {
        return this.file().findComment(...this.path())?.trailingComments ?? ''
    }

    lookup(name: string): DescriptorNode<any> | undefined {
        if (name == this.descriptor.name) return this
        const prefix = `${this.descriptor.name}.`
        if (!name.startsWith(prefix)) return undefined
        name = name.substring(prefix.length)
        return lookupFromDescriptors(this.methods, name)
    }
}

export class MethodDescriptor implements DescriptorNode<Google.MethodDescriptorProto> {
    parent: ServiceDescriptor

    descriptor: Google.MethodDescriptorProto

    constructor(parent: ServiceDescriptor, descriptor: Google.MethodDescriptorProto) {
        this.parent = parent
        this.descriptor = descriptor
    }

    file(): FileDescriptor {
        return this.parent.file()
    }

    root(): FileDescriptorSet {
        return this.parent.root()
    }

    methodName(): string {
        return upperCamelToLowerCamel(this.descriptor.name ?? throwError('Invalid method descriptor, no method name.'))
    }

    fullname(): string {
        return `${this.parent.fullname()}/${this.descriptor.name}`
    }

    path(): number[] {
        const index = this.parent.methods.indexOf(this)
        return this.parent.path().concat(2, index)
    }

    document(): string {
        return this.file().findComment(...this.path())?.leadingComments ?? ''
    }

    comments(): string[] {
        return this.file().findComment(...this.path())?.leadingDetachedComments ?? []
    }

    trailingComment(): string {
        return this.file().findComment(...this.path())?.trailingComments ?? ''
    }

    lookup(name: string): DescriptorNode<any> | undefined {
        if (name == this.descriptor.name) return this
        return undefined
    }
}

function lookupFromDescriptors(descriptors: DescriptorNode<any>[], name: string): DescriptorNode<any> | undefined {
    for (let item of descriptors) {
        const result = item.lookup(name)
        if (result) return result
    }
}

function commonPrefix(...strings: string[]): string {
    strings = strings.sort()
    const first = strings.shift() ?? ''
    const last = strings.pop() ?? ''
    let l = first.length, i = 0
    while (i < l && first.charAt(i) === last.charAt(i)) i++
    return first.substring(0, i)
}

function arrayEquals(a: any[], b: any[]): boolean {
    if (a.length != b.length) return false
    for (const index in a) {
        if (a[index] !== b[index]) return false
    }
    return true
}

function fieldPacked(syntax: string | undefined, descriptor: Google.FieldDescriptorProto) {
    if (descriptor.label != 'LABEL_REPEATED') return undefined
    let defaultPacked = false
    if (syntax == 'proto3') {
        switch (descriptor.type) {
            case 'TYPE_BOOL':
            case 'TYPE_UINT32':
            case 'TYPE_UINT64':
            case 'TYPE_INT32':
            case 'TYPE_INT64':
            case 'TYPE_SINT32':
            case 'TYPE_SINT64':
            case 'TYPE_DOUBLE':
            case 'TYPE_FLOAT':
            case 'TYPE_FIXED32':
            case 'TYPE_FIXED64':
            case 'TYPE_SFIXED32':
            case 'TYPE_SFIXED64':
            case 'TYPE_ENUM':
                defaultPacked = true
                break
        }
    }
    return descriptor.options?.packed ?? defaultPacked
}

function upperCamelToLowerCamel(str: string) {
    return str.replace(/^[A-Z]/g, it => it.toLowerCase())
}

function camelToUpperSnakeCase(str: string) {
    return upperCamelToLowerCamel(str).replace(/[A-Z]/g, it => `_${it.toLowerCase()}`).toUpperCase()
}

function throwError(message: string): never {
    throw new Error(message)
}