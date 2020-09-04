# Sisyphus for JavaScript/TypeScript

[![](https://img.shields.io/npm/v/@sisyphus.js/core)](https://www.npmjs.com/package/@sisyphus.js/core) ![](https://img.shields.io/librariesio/release/npm/@sisyphus.js/core)

Sisyphus.JS is the way how we connect with our Sisyphus backend services. It uses [HTTP and gRPC Transcoding](https://aip.bybutter.com/127) to call gRPC APIs.

## 🚀 Quick Start

### 1. Installation

Install `@sisyphus.js/cli` and `TypeScript` for code generation, `@sisyphus.js/core` for runtime support.

Choose one of `axios` or `umi-request` as http request implementation.

```shell
npm i @sisyphus.js/cli typescript --save-dev
npm i @sisyphus.js/core -s
npm i <axios|umi-request> -s
```

### 2. Code Generation

Use `sisygen` command to generate code from protos.

```shell
> sisygen -h

Usage: sisygen [options]

Options:
  -V, --version         output the version number
  -I --path <path>      include paths. (default: [])
  -O --output <output>  output dir.
  -h, --help            display help for command
```

Write some protos.

```protobuf
package sisyphus.example.v1;

import "google/api/annotations.proto";
import "google/protobuf/any.proto";
import "google/protobuf/timestamp.proto";

service EchoApi {
  rpc Echo(EchoRequest) returns (EchoResponse) {
    option (google.api.http) = {
      post : "/v1:echo"
      body : "*"
    };
  }
}

message EchoRequest {
  string message = 1;
}

message EchoResponse {
  string message = 1;
}
```



Write generation command in `package.json`.

```json
{
  "scripts": {
    "protogen": "sisygen -I proto -O src my/proto/package my/other/proto/package/file.proto && tsc"
  },
  "devDependencies": {
    "@sisyphus.js/cli": "^0.0.1-alpha.5"
  },
  "dependencies": {
    "@sisyphus.js/core": "^0.0.1-alpha.3",
    "axios": "^0.19.2"
  }
}
```

Run `npm run protogen` to generate and compile code.

### 3. Usage

```typescript
import * as protos from "./index"
protos // REQUIRED! it will initiaize all generated code. You must import the index.ts at least once.

import {transcoding} from "@sisyphus.js/core/lib/axios" // Use axios as http request lib
import {EchoApi} from "./sisyphus/example/v1"

const rpc = transcoding("http://localhost:8080") // create transcoding rpc implementation
const echoApi = new EchoApi(rpc) // create api stub

async function main(){
    const result = await echoApi.Echo({
        message: "hello, sisyphus!"
    })
    console.log(result.message)
}

main()

```

## 👑 Advanced

### Metadata/Request Header

Metadata is useful for authorization in gRPC. Sisyphus.JS also supports metadata both for global usage and call usage.

```typescript
const rpc = transcoding("http://localhost:8080", { "My-Header": "Header Value" }) // global metadata
const echoApi = new EchoApi(rpc) 

await echoApi.Echo({
    message: "hello, sisyphus!"
}, { "My-Header-2": "Header Value" }) // call metadata
```

### Interface and Class

`@sisyphus.js/cli`  will generate interface and class for one message. All Sisyphus.JS APIs can accept both interface and class as input. And all output of Sisyphus.JS API will be class messages.

### Well-known types

Sisyphus.JS support all well-known types such as `google.protobuf.Any`, `google.protobuf.Timestamp` and so on.

```protobuf
package sisyphus.example.v1;

import "google/protobuf/any.proto";
import "google/protobuf/timestamp.proto";

message SimpleMessage {
  string message = 1;
}

message AnyTest {
  google.protobuf.Any message = 1;
  repeated google.protobuf.Any messages = 2;
}
```

`google.protobuf.Any` will be transformed into `Message` type while Sisyphus.JS generates fields as in the case below.

```typescript
import {Message} from "@sisyphus/core"

interface IAnyTest {
    message?: Message
    messages?: Message[]
}

const anyTest: IAnyTest = {
    message: SimpleMessage.create({message: "test"})
    messages: [SimpleMessage.create({message: "test1"}), SimpleMessage.create({message: "test2"})]
}

console.log(AnyTest.toJson(anyTest))
// { "message": { "@type": "types.bybutter.com/sisyphus.example.v1.SimpleMessage", "message": "test" }, "messages": [{ "@type": "types.bybutter.com/sisyphus.example.v1.SimpleMessage", "message": "test1" }, { "@type": "types.bybutter.com/sisyphus.example.v1.SimpleMessage", "message": "test2" }]}
```

Sisyphus.JS will auto unwrap and wrap `Any` and `Message` type in JSON encoding/decoding and Protobuf encoding/decoding.
