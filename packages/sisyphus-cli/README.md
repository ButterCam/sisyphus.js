# @sisyphus.js/cli

[![](https://img.shields.io/npm/v/@sisyphus.js/cli)](https://www.npmjs.com/package/@sisyphus.js/cli)

sisyphus.js 命令行界面，提供一个 `sisygen` 命令用于为 sisyphus.js 工程生成代码。

## Sisygen

`sisygen` 是为了工程化与自动化代码生产而定制的命令，`sisygen` 只有一个参数需要指定，使用 `-O` 或者 `--output` 指定 ts 文件的生成目录，其他大部分的配置都集中在 `package.json` 中，所以
sisygen 命令需要在某个包的根目录下执行。

## 配置 sisyphus.js 工程

### 配置 protobuf 编译源

`sisygen` 会自动将包目录下 proto 文件夹的 `.proto` 文件加入编译源，并生成代码。

这个文件夹的位置可以通过 `package.json` 的 `directories` 字段自定义。

```json
{
  "directories": {
    "proto": "otherDir",
    "lib": "lib"
  }
}
```

此外，sisygen 也可以指定外部包作为编译源，需要将外部包加入依赖，并将包名加入 `package.json` 的 `protobuf.packages` 字段中。

```json
{
  "directories": {
    "lib": "lib"
  },
  "protobuf": {
    "packages": [
      "@sisyphus.js/runtime"
    ]
  }
}
```

### 配置使用的编译插件

`sisygen` 会自动在所有的 devDependencies 中发现定义的编译器插件，并输出在日志中。

```
sisyphus info cli Protoc plugins found in @sisyphus.js/compiler: core, proto, aip
```

将要使用的插件名加入到 `package.json` 的 `protobuf.plugins` 字段中，`sisygen` 就会在编译过程中调用这些插件。

```json
{
  "directories": {
    "lib": "lib"
  },
  "protobuf": {
    "plugins": [
      "core",
      "proto",
      "aip"
    ]
  }
}
```

### 发现 Proto 编译依赖

proto 之间的依赖是非常常见的，多数的 TypeScript/JavaScript 实现都编译将所有 proto 文件整合在一起，并生成所有文件。

`sisygen` 采用 `sisyphus-dist.json` 文件来编排依赖与依赖中已经生成好的代码，这意味着可以将生成的代码推送到 npm 仓库中，并在后续复用这些代码。

`sisygen` 会发现所有 dependencies 中符合 sisyphus.js 工程结构的包，并将 proto 文件加入编译时依赖，另外如果包还包含默认导入（`package.json` 中拥有 main 字段），sisygen
会自动导入此包，这一般用于有拓展字段定义的包，可以将拓展定义导出到 index.js 中，并被 sisyphus.js 编译器使用。

```json
{
  "dependencies": {
    "@sisyphus.js/runtime": "^2.0.0"
  }
}
```

上面的配置导致 `sisygen` 会自动将 `@sisyphus.js/runtime` 中 proto 文件加入编译时依赖中。

### sisyphus-dist.json 模块映射

`sisygen` 会读取 proto 依赖包下面的 `sisyphus-dist.json` 文件，获取已经编译好的文件，并在生成代码时从该依赖包中导入。

当没有 `sisyphus-dist.json` 时，`sisygen` 认为所有生成的 ts 文件都在同一个根目录下，并通过 proto 文件的结构导入相应的依赖。

```typescript
// 当前文件 /google/showcase/v1beta1/echo.ts

// 目标导入依赖 /google/protobuf/duration.ts
import {Duration} from '../../protobuf/duration'
```

当有 `@sisyphus.js/runtime` 中拥有 `sisyphus-dist.json` 并包含 `google/protobuf/duration.ts`。

`sisygen` 会自动将 `/google/protobuf/duration` 映射为 `@sisyphus.js/runtime/lib/google/protobuf/duration`。

```typescript
// 当前文件 /google/showcase/v1beta1/echo.ts

// 目标导入依赖 /google/protobuf/duration.ts
import {Duration} from '@sisyphus.js/runtime/lib/google/protobuf/duration'
```

映射规则为`包名 + lib 文件夹 + 依赖模块`，例如上述例子中，就由 `@sisyphus.js/runtime`，`lib`，`google/protobuf/duration` 三部分构成。

其中 lib 文件夹的值由 `package.json` 的 `directories.lib` 值决定，默认值为 `lib`。

## package.json 属性

由 sisyphus.js 拓展的 `package.json` 增加了以下属性来配置 sisyphus.js 工程。

```json5
{
  "sisyphus": {
    // 注册 sisygen 的编译器插件
    "plugins": {
      "core": "lib/core/index.js",
      "proto": "lib/proto/index.js",
      "aip": "lib/aip/index.js"
    }
  },
  "protobuf": {
    // 将指定名字的插件加入编译过程
    "plugins": [
      "core",
      "aip"
    ],
    // 将指定的包加入编译源
    "packages": [
      "@sisyphus.js/google"
    ]
  }
}
```