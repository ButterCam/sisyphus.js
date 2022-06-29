# @sisyphus.js/runtime

[![](https://img.shields.io/npm/v/@sisyphus.js/runtime)](https://www.npmjs.com/package/@sisyphus.js/runtime)

sisyphus.js 核心运行时，用于仅支持 Json 接口访问的代码生成，包含预编译的 well-known protos 与一些基础类型定义。

## 基础类型映射

sisyphus.js 将基础类型映射成常用 TypeScript 类型，参考下表：

| Protobuf | TypeScript            |
|----------|-----------------------|
| bool     | boolean               |
| double   | number                |
| float    | number                |
| int32    | number                |
| uint32   | number                |
| sint32   | number                |
| fixed32  | number                |
| sfixed32 | number                |
| int64    | number &#124; string  |
| uint64   | number &#124; string  |
| sint64   | number &#124; string  |
| fixed64  | number &#124; string  |
| sfixed64 | number &#124; string  |
| string   | string                |
| bytes    | base64 encoded string |

## Json 类型映射

sisyphus.js 还支持 [Json 映射标准](https://developers.google.com/protocol-buffers/docs/proto3#json)，将一些特殊消息类型映射为特殊的 TypeScript
类型。

| Protobuf                    | Typescript                          | Comment                                                                               |
|-----------------------------|-------------------------------------|---------------------------------------------------------------------------------------|
| google.protobuf.Any         | `{'@type': '<typeUrl>', ...fields}` | 为消息体额外添加一个 @type 字段，如果消息有特殊的 mapping 规则，则会采用 `{'@type': '<typeUrl>', value: <value>}` |
| google.protobuf.Duration    | `"${number}s"`                      | 一个以 s 结尾的数字字符串                                                                        |
| google.protobuf.FieldMask   | string                              | 一个以 , 分割的字符串                                                                          |
| google.protobuf.Timestamp   | string                              | ISO 标准的时间字符串                                                                          |
| google.protobuf.DoubleValue | number                              |                                                                                       |
| google.protobuf.FloatValue  | number                              |                                                                                       |
| google.protobuf.Int32Value  | number                              |                                                                                       |
| google.protobuf.UInt32Value | number                              |                                                                                       |
| google.protobuf.Int64Value  | number &#124; string                |                                                                                       |
| google.protobuf.UInt64Value | number &#124; string                |                                                                                       |
| google.protobuf.BoolValue   | boolean                             |                                                                                       |
| google.protobuf.StringValue | string                              |                                                                                       |
| google.protobuf.BytesValue  | base64 encoded string               |                                                                                       |
| google.protobuf.Value       | json value                          |                                                                                       |
| google.protobuf.ListValue   | json array                          |                                                                                       |
| google.protobuf.Struct      | json object                         |                                                                                       |
| google.protobuf.NullValue   | null                                |                                                                                       |

## Flow API

sisyphus.js 还定义了基于 Promise 的 `Flow<T>` 接口，用于 streaming API。

```typescript
const serverFlow: Flow<EchoResponse> = echo.chat(flow<EchoRequest>(async emitter => {
    emitter({
        content: "hi!"
    })
    emitter({
        content: "we are chatting by sisyphus flow!"
    })
}))

await collect(serverFlow, async it => {
    console.log(it)
})
```

## 工具方法

sisyphus.js 也为一些 well-known 类型提供了额外的拓展与工具方法。

### Any

```typescript
import {Any} from '@sisyphus.js/runtime'

if (Any.isAny(anyMessage)) {
    // 判断一个消息实体是否是 Any 的包装类型

    switch (Any.typeOf(anyMessage)) {
        case 'google.protobuf.Duration':
            // 获取 Any 包装的消息实体全名
            break
    }
}
```

### Base64

```typescript
import {base64Decode, base64Encode} from '@sisyphus.js/runtime'

const buff = base64Encode(base64Decode("SGVsbG8sIPCfjI0="))
```

### Duration

```typescript
import {Duration} from '@sisyphus.js/runtime'

const [secounds, nanos] = Duration.toPayload("1.2s") // 将 Duration 字符串转化为整数秒与整数纳秒
const duration = Duration.fromPayload([secounds, nanos])
```

### FieldMask

```typescript
import {FieldMask} from '@sisyphus.js/runtime'

const [content, status] = FieldMask.toPayload("content, status") // 将 FieldMask 字符串转化为字符串数组
const mask = FieldMask.fromPayload([content, status])
```

### Timestamp

```typescript
import {Timestamp} from '@sisyphus.js/runtime'

const [secounds, nanos] = Timestamp.toPayload("2021-06-24T13:45:86Z") // 将 Timestamp 字符串转化为整数秒与整数纳秒
const timestamp = Timestamp.fromPayload([secounds, nanos])
const now = Timestamp.now()
const fromDate = Timestamp.fromDate(new Date())
```
