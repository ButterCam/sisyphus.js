# @sisyphus.js/runtime.proto

[![](https://img.shields.io/npm/v/@sisyphus.js/runtime.proto)](https://www.npmjs.com/package/@sisyphus.js/runtime.proto)

sisyphus.js Protobuf 运行时，用于仅支持 Protobuf 二进制格式，包含预编译的 well-known protos 的序列化/反序列化支持。

## 拓展同名 namespace

sisyphus.js 子插件都通过拓展消息实体同名的 namespace 提供更多的功能。

sisyphus.js 的 proto 编辑插件会为同名 namespace 添加一个 descriptor 字段与两个用于反序列与序列化的方法。

```typescript
// 拓展 core 编译的核心模块定义
declare module './any' {
    namespace Any {
        // 添加 descriptor 用于运行时反射与保存序列化信息
        let descriptor: MessageDescriptor<Any>

        // 添加 binaryify 方法用于序列化消息实体
        function binaryify(v: Any): Uint8Array

        // 添加 parse 方法用于反序列化消息实体
        function parse(buffer: Uint8Array): Any
    }
}

// 将 core 编译的核心模块重新导出，可以在自模块中访问完整的核心模块定义。
export * from './any'
```
