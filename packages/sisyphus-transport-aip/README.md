# @sisyphus.js/transport-aip

[![](https://img.shields.io/npm/v/@sisyphus.js/transport-aip)](https://www.npmjs.com/package/@sisyphus.js/transport-aip)

sisyphus.js AIP 转码运行时，用于支持 [HTTP 与 gRPC 转码](https://aip.bybutter.com/127) 标准，基于 Fetch API 的 HTTP 客户端实现。

## 拓展同名 namespace

sisyphus.js 子插件都通过拓展实体同名的 namespace 提供更多的功能。

sisyphus.js 的 aip 编辑插件会为服务同名 namespace 添加一个 descriptor 字段与一个方法用来构造客户端。

```typescript
// 拓展 core 编译的核心模块定义
declare module './operations' {
    namespace Operations {
        // 用于构建客户端的描述信息
        let aipDescriptor: ServiceDescriptor

        // 用与构建客户端的方法
        function aipClient(rpc: Rpc): Operations
    }
}

export * from './operations'
```

只需要将 transcoding 方法构造的 Rpc 实例传入 aipClient 方法，就可以构造客户端。

```typescript
import {EchoResponse} from './google/showcase/v1beta1/echo'
import {Echo} from './google/showcase/v1beta1/echo.aip'
import {transcoding} from '@sisyphus.js/transport-aip'

const client = Echo.aipClient(transcoding('http://localhost:8080'))
const output: EchoResponse = await client.echo({
    content: "Hello world!"
})
```

## TranscodingListener

通过 TranscodingListener 可以在 HTTP 请求构建后对请求结构进一步修改，或者在响应到达时处理错误等等。

```typescript
import {AttributeContext} from './attribute_context'

Echo.aipClient(transcoding('http://localhost:8080'), {
    onRequest: function (method, input, request) {
        return new Request(request, {
            mode: 'cors',
            headers: {
                ...request.headers,
                Authorization: "Bear MyToken",
            }
        })
    },
    onResponse: function (method, request, response) {
        if (!response.ok) {
        }
    }
})
```
