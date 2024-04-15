---
title: ESM
description: 在 oclif 中使用 ESM
---

`@oclif/core` 的 3.0.0 版本正式支持 ESM 插件开发和 CJS/ESM 互操作性，这意味着你可以使用 CJS 编写根插件，并使用 ESM 编写插件，反之亦然。

## 互操作性概述

以下是 ESM/CJS 互操作性的高级概述：

### ESM 根插件

✅ 安装 CJS 插件

✅ 安装 ESM 插件

✅ 链接 CJS 插件

⚠️ 链接 ESM 插件

- 自动编译**不**适用于链接的 ESM 插件。相反，oclif 将使用插件的编译源代码 - 这意味着你必须在执行任何命令之前自己编译插件。我们计划在 node 生态系统为 ESM 提供更全面的本地支持后再次支持这一点。

### CJS 根插件

✅ 安装 CJS 插件

✅ 安装 ESM 插件

✅ 链接 CJS 插件

⚠️ 链接 ESM 插件

- 自动编译**不**适用于链接的 ESM 插件。相反，oclif 将使用插件的编译源代码 - 这意味着你必须在执行任何命令之前自己编译插件。我们计划在 node 生态系统为 ESM 提供更全面的本地支持后再次支持这一点。

## 创建 ESM 插件

要从 [hello-world-esm 模板](https://github.com/oclif/hello-world-esm)生成新的 ESM 插件，请运行 `oclif generate` 命令，并在提示你选择模块类型时选择 `ESM` ：

```shell
$ npx oclif generate my-esm-plugin
? Select a module type
  CommonJS
❯ ESM
```

## 将 CJS 插件迁移到 ESM

### 修改 bin 脚本

首先，你需要修改 `bin` 目录下的 bin 脚本。

#### bin/dev → bin/dev.js

将 `bin/dev` 重命名为 `bin/dev.js`，并将现有代码替换为以下代码：

```js
#!/usr/bin/env -S node --loader ts-node/esm --no-warnings=ExperimentalWarning

import {execute} from '@oclif/core'

await execute({development: true, dir: import.meta.url})
```

这利用了 oclif 的 `execute` 函数，它为你处理所有的开发设置。你不再需要设置 `NODE_ENV` 环境变量或使用 `ts-node` 注册项目。你仍然可以在执行 CLI 之前调整 oclif `settings`。比如说，

```js
#!/usr/bin/env -S node --loader ts-node/esm --no-warnings=ExperimentalWarning

import {execute, settings} from '@oclif/core'

settings.performanceEnabled = true

await execute({development: true, dir: import.meta.url})
```


#### bin/run → bin/run.js

将 `bin/run` 重命名为 `bin/run.js` ，并将现有代码替换为以下代码：

```js
#!/usr/bin/env node

import {execute} from '@oclif/core'

await execute({dir: import.meta.url})
```

### 修改 tsconfig.json

更新 bin 脚本后，你现在需要修改 `tsconfig.json` 以包含以下选项：

```json
{
  "compilerOptions": {
    "module": "ES2020",
    "moduleResolution": "node16",
  },
  "ts-node": {
    "esm": true
  }
}
```

### 将 package.json 修改为“module”类型

将 `"type": "module"` 添加到你的 package.json 中，使你的文件作为 ESM 模块加载

### 修改对 bin 脚本的引用

你需要将 bin 脚本的引用修改为带有 `.js` 扩展名的 bin 脚本。在 package.json 中，你需要像这样修改 `bin`：

```json
  "bin": {
    "my-cli": "./bin/run"
  },
```

修改为

```json
  "bin": {
    "my-cli": "./bin/run.js"
  },
```

你可能在 `.vscode/launch.json` 或 `package.json` 的 `scripts` 中引用了 bin 脚本。你也需要修改这些。

### 修改 mocharc 设置

为了运行你的 mocha 测试，你需要做一些修改：

1. 将以下内容添加到 `.mocharc.json`

```json
{
  "node-option": [
    "loader=ts-node/esm"
  ]
}
```

2. 修改 `test/helpers/init.js`

如果你的插件是生成的 `oclif generate`，那么你可能有一个需要修改的 `test/helpers/init.js` 文件。你可以将文件扩展名修改为 `.cjs`，也可以将文件顶部的 `require` 修改为 `import`，

```js
import path from 'node:path'
```

或者，你可以安全地删除此文件，因为它不再需要。
