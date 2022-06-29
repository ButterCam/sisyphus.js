# @sisyphus.js NPM 包

- [@sisyphus.js/runtime](./sisyphus-runtime) -
  sisyphus.js 核心运行时，用于仅支持 Json 接口访问的代码生成，包含预编译的 well-known protos 与一些基础类型定义。  
  [![](https://img.shields.io/npm/v/@sisyphus.js/runtime)](https://www.npmjs.com/package/@sisyphus.js/runtime)

- [@sisyphus.js/runtime.proto](./sisyphus-runtime-proto) -
  sisyphus.js 完整 Protobuf 运行时，用于反序列化/序列化 Protobuf 二进制格式。  
  [![](https://img.shields.io/npm/v/@sisyphus.js/runtime.proto)](https://www.npmjs.com/package/@sisyphus.js/runtime.proto)

- [@sisyphus.js/transport-aip](./sisyphus-transport-aip) -
  sisyphus.js AIP 转码运行时，用于支持 [HTTP 与 gRPC 转码](https://aip.bybutter.com/127) 标准。  
  [![](https://img.shields.io/npm/v/@sisyphus.js/transport-aip)](https://www.npmjs.com/package/@sisyphus.js/transport-aip)

- [@sisyphus.js/google](./sisyphus-google) -
  预编译的由 google 定义的特殊 protos，仅包含 Json 接口，定义了 Http/gRPC 转码标准。  
  [![](https://img.shields.io/npm/v/@sisyphus.js/google)](https://www.npmjs.com/package/@sisyphus.js/google)

- [@sisyphus.js/google.proto](./sisyphus-google-proto) -
  预编译的由 google 定义的特殊 protos，包含二进制序列化/反序列化支持。  
  [![](https://img.shields.io/npm/v/@sisyphus.js/google.proto)](https://www.npmjs.com/package/@sisyphus.js/google.proto)

- [@sisyphus.js/google.aip](./sisyphus-google-aip) -
  预编译的由 google 定义的特殊 protos 的 AIP 标准客户端，目前只包含 long running operation 客户端。  
  [![](https://img.shields.io/npm/v/@sisyphus.js/google.aip)](https://www.npmjs.com/package/@sisyphus.js/google.aip)

- [@sisyphus.js/protoc](./sisyphus-protoc) -
  为当前的运行环境自动下载 protoc release，并且提供了 npm script 快速访问 protoc 命令的方式。  
  [![](https://img.shields.io/npm/v/@sisyphus.js/protoc)](https://www.npmjs.com/package/@sisyphus.js/protoc)

- [@sisyphus.js/compiler](./sisyphus-compiler) -
  sisyphus.js 基础编译器插件，包含 core, proto, aip 三个子插件。  
  [![](https://img.shields.io/npm/v/@sisyphus.js/compiler)](https://www.npmjs.com/package/@sisyphus.js/compiler)

- [@sisyphus.js/cli](./sisyphus-cli) -
  sisyphus.js 命令行界面，提供 sisygen 命令来快速生成 protobuf 代码。  
  [![](https://img.shields.io/npm/v/@sisyphus.js/cli)](https://www.npmjs.com/package/@sisyphus.js/cli)
