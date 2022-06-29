# @sisyphus.js/protoc

[![](https://img.shields.io/npm/v/@sisyphus.js/protoc)](https://www.npmjs.com/package/@sisyphus.js/protoc)

为当前的运行环境自动下载 protoc release，并且提供了 npm script 快速访问 protoc 命令的方式。

## 当命令行使用

@sisyphus.js/protoc 提供了 protoc 命令，可以在 package.json 的 script 字段中直接使用。

```json
{
  "scripts": {
    "codeGen": "protoc -I /protoRoot..."
  }
}
```

## 当库使用

也可以从 @sisyphus.js/protoc 导入 protoc 函数用于调用 protoc 命令。

```typescript
import protoc from '@sisyphus.js/protoc'

await protoc(['-I', '/protoRoot'])
```

## 自定义 protoc 版本

protoc 会从当前运行目录下的 package.json 文件中读取设定的 protoc 版本，当未指定时默认采用 `latest`。

```json
{
  "protobuf": {
    "version": "21.2"
  }
}
```