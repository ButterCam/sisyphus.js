# @sisyphus.js/compiler

[![](https://img.shields.io/npm/v/@sisyphus.js/compiler)](https://www.npmjs.com/package/@sisyphus.js/compiler)

sisyphus.js 编辑器，包含了三个基础插件的实现，分别是用于生成核心模块的 `core` 插件，用于生成支持 protobuf 二进制格式代码的 `proto` 插件与用于支持 aip 标准的 `aip` 插件。

## 插件原理

插件采用消息与订阅者模型来实现编译插件，将状态（State）作为消息，发放给能够处理此状态的生成器（Generator）。

```typescript
export interface GeneratingState<TKind extends string, TParent, TDesc, TTarget> {
    readonly parent: TParent

    readonly kind: TKind

    readonly descriptor: TDesc

    readonly target: TTarget

    generatedElements: number

    continue: boolean
}
```

每个状态包含一个用于匹配订阅者的 `kind` 字段，`kind` 字段一致状态和生成器会匹配，并执行生成器的生成过程。

`parent` 字段则表示状态的父状态，`descriptor` 表示当前状态的上下文，一般是 `MessageDescriptor` 之类的各种 `Descriptor`。

`target` 字段表示这次状态生成的结果，一般为 `CodeBuilder`。

`generatedElements` 是用于判断此次生成是否是空结果，当子状态进行了有效的生成时，将此字段递增 1。

`continue` 则表示这次生成后还需不需要继续传递到下一个同 `kind` 的生成器。

```typescript
export type MessageGeneratingState = GeneratingState<'message', FileGeneratingState | MessageGeneratingState, MessageDescriptor, CodeBuilder>

export type FieldGeneratingState = GeneratingState<'field', MessageGeneratingState, FieldDescriptor, CodeBuilder>
```

使用 `generate` 函数用于注册一个生成器，只需要提供 kind 与生成过程就可以注册一个生成器。

```typescript
generate<FieldGeneratingState>('field', it => {
    // 生成器过程
})
```

## 子状态

调用 `advance` 方法既可将子状态广播给其他的生成器。

```typescript
for (let service of it.descriptor.services) {
    advance<ServiceGeneratingState>({
        kind: 'service', parent: it, descriptor: service, target: builder
    })
}
```

`advance` 方法会自动匹配 kind，将状态交付给对应的生成器，并在结束生成的时候，将子状态的 `generatedElements` 加到父状态中。

## 插件入口点

使用一个单 js 文件 import 所有的 生成器代码，就可以将这个 js 文件当作插件的入口点。

```typescript
import './enum'
import './extension'
import './field'
import './file'
import './message'
import './service'
import '../wellknown/core'
```

将入口点文件注册在 `package.json` 的 `sisyphus.plugins` 字段就可以被 `sisygen` 发现。

## 插件覆盖

使用 `state.continue` 字段可以控制是否将状态交由下一个生成器处理，将字段设置为 `false` 就可以就此中断此 state 的生成过程。

值得注意的的是生成器的优先顺序是倒序，即最后注册的生成器最先收到 state。

## CodeBuilder 与 ImportManager

CodeBuilder 是一个用于生成 ts 代码的工具类，用于托管 CodeBlock 状态，代码缩进，换行等等。

```typescript
builder.beginBlock(`export namespace ${it.descriptor.interfaceName()}`)
builder.normalize().appendLn(`export const name = '${it.descriptor.fullname()}'`)
builder.endBlock()
```

ImportManager 则可以管理 ts 代码的模块导入关系，并自动生成 import 语句，支持 import 冲突检测，自动别名等等。

```typescript
const importedName = builder.importManager.import('@sisyphus.js/runtime', 'long')
```