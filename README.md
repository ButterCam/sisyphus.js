# 为 JavaScript/TypeScript 打造的 Sisyphus

[![](https://img.shields.io/npm/v/@sisyphus.js/runtime)](https://www.npmjs.com/package/@sisyphus.js/runtime)

**sisyphus.js** 是专为 JavaScript/TypeScript 编写的 Protobuf 运行时，专为减少生成代码的大小而优化，即便如此，仍然可以在 sisyphus.js 获得不打折扣的 Protobuf 体验。

当采用 [HTTP 与 gRPC 转码](https://aip.bybutter.com/127) 标准时，由于 **sisyphus.js**
通过 [Json 接口](https://developers.google.com/protocol-buffers/docs/proto3#json) 来访问 Protobuf 消息实体，**sisyphus.js**
能够最大程度的降低代码大小，但在此应用场景中不支持 Protobuf 二进制格式。

## 快速开始

### 1. 安装

通过以下指令安装 `@sisyphus.js/cli` 与 `TypeScript`。

```shell
npm i @sisyphus.js/cli typescript --save-dev
```

`@sisyphus.js/cli` 用于安装 `sisygen` 命令来生成 TypeScript 代码，`typescript` 用于编译生成的 TypeScript 为 JavaScript。

### 2. 生成代码

将需要编译的 .proto 文件放入项目下的 proto 文件夹中（也可以通过 `package.json` 的 `directories` 属性自动定义 ）

```json
{
  "directories": {
    "proto": "other-proto-sources"
  }
}
```

将 sisygen 命令加入到工程脚本中，并且添加一些生成时使用的 protoc 编译插件。

```json
{
  "scripts": {
    "protoc": "sisygen -O ./src"
  },
  "protobuf": {
    "plugins": [
      "core",
      "aip"
    ]
  }
}
```

sisyphus.js 内置三个编译插件：

- core 用于生成基础的 Protobuf 消息实体访问 Json 接口，需要添加 `@sisyphus.js/runtime` 运行时依赖。
- proto 用于生成支持 Protobuf 二进制格式的代码，需要添加 `@sisyphus.js/runtime.proto` 运行时依赖。
- aip 用于生成基于 HTTP 与 gRPC 转码标准的客户端，需要添加 `@sisyphus.js/transport-aip`，`@sisyphus.js/google`
  运行时依赖，额外需要添加 `@sisyphus.js/google.proto` 作为编译时的依赖（devDependencies）。

安装生成的代码所需的运行时。

```shell
npm i @sisyphus.js/runtime @sisyphus.js/google @sisyphus.js/transport-aip --save
npm i @sisyphus.js/google.proto --save-dev
```

使用 npm run 来编译 proto 文件。

```shell
npm run protoc
```

### 3. 访问 Protobuf 消息实体

sisyphus.js 会将以下 Protobuf 代码生成为 TypeScript 接口。

```protobuf
message EchoRequest {
    oneof response {
        // The content to be echoed by the server.
        string content = 1;

        // The error to be thrown by the server.
        google.rpc.Status error = 2;
    }

    // The severity to be echoed by the server.
    Severity severity = 3;

    // Optional. This field can be set to test the routing annotation on the Echo method.
    string header = 4;

    // Optional. This field can be set to test the routing annotation on the Echo method.
    string other_header = 5;
}
```

sisyphus.js core 插件仅会为每个 Protobuf 消息生成一个接口与一个用于拓展的同名的 namespace。
生成的接口严格遵循 [Json 映射标准](https://developers.google.com/protocol-buffers/docs/proto3#json)。

```typescript
export interface EchoRequest {
    /**  The content to be echoed by the server. */
    content?: string

    /**  The error to be thrown by the server. */
    error?: Status

    /**  The severity to be echoed by the server. */
    severity?: Severity

    /**  Optional. This field can be set to test the routing annotation on the Echo method. */
    header?: string

    /**  Optional. This field can be set to test the routing annotation on the Echo method. */
    otherHeader?: string
}

export namespace EchoRequest {
    export const name = 'google.showcase.v1beta1.EchoRequest'
}
```

在 TypeScript 中使用类型标注与对象构建语法来创建 Protobuf 消息实体。

```typescript
const message: EchoRequest = {
    content: "Hello world!"
}
```

4. 通过 AIP 访问 gRPC API

使用 AIP 插件编译的代码可以简单访问 gRPC API（需要服务端支持）。

```typescript
import {EchoResponse} from './google/showcase/v1beta1/echo'
import {Echo} from './google/showcase/v1beta1/echo.aip'
import {transcoding} from '@sisyphus.js/transport-aip'

const client = Echo.aipClient(transcoding('http://localhost:8080'))
const output: EchoResponse = await client.echo({
    content: "Hello world!"
})
```

通过 `transcoding` 方法指定一个 host 即可开始访问 API。
