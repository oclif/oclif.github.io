---
title: 命令发现策略
---

当 oclif 加载一个插件时，它必须找到该插件中所有可以执行的命令。发现这些命令有三种策略：

1. `pattern` - 这是基于 glob 模式查找命令的默认行为。
2. `explicit` - 查找从指定文件导出的命令。
3. `single` - CLI 包含由顶级 bin 执行的单个命令。

### `pattern` 策略

`pattern` 策略告诉 oclif 使用一组预定义的 glob 来查找指定目录中的命令文件。这是 oclif 的默认行为，除非另有说明。

插件可以将 `commands` 属性指向目录

```json
{
  "oclif": {
    "commands": "./dist/commands",
  }
}
```

这将告诉 oclif 在该目录中查找命令（如果存在 `oclif.manifest.json`，则跳过此操作）

或者，你可以设置此配置，这将做完全相同的事情：

```json
{
  "oclif": {
    "commands": {
      "strategy": "pattern",
      "target": "./dist/commands"
    }
  }
}
```

你还可以设置 `globPatterns`，它覆盖 oclif 在搜索命令文件时使用的 glob 模式：

```json
{
  "oclif": {
    "commands": {
      "strategy": "pattern",
      "target": "./dist/commands",
      "globPatterns": [
         "**/*.+(js|cjs|mjs|ts|tsx|mts|cts)",
        "!**/*.+(d.*|test.*|spec.*|helpers.*)?(x)"
      ]
    }
  }
}
```

如果你想将测试或帮助文件与命令文件放在同一目录中，这将非常有用。

### `explicit` 策略

`explicit` 策略告诉 oclif 从单个文件导入命令。在这种情况下，`target` 是导出命令的文件，`identifier` 是导出的名称（默认为 `default`）。

要使用它，你需要添加一个新文件（例如 `src/commands.ts`），然后将此配置添加到package.json

```json
{
  "oclif": {
    "commands": {
      "strategy": "explicit",
      "target": "./dist/index.js",
      "identifier": "COMMANDS",
    }
  }
}
```

然后，`src/index.ts` 需要有一个与 `identifier` 同名的导出（如果没有设置，默认为 `default`），这是命令类的命令名称的对象，例如：

```typescript
import Hello from './commands/hello'
import HelloWorld from './commands/hello/world'

export const COMMANDS = {
  hello: Hello,
  'hello:world': HelloWorld,
  howdy: Hello, // alias the `hello` command to `howdy`
}
```

`explicit` 策略对于那些不能依赖文件路径的人很有用，因为他们已经捆绑了他们的代码（参见[捆绑](#打包)），但是如果你只是喜欢更明确地描述你的命令，而不是依赖 oclif 从文件系统中“神奇地”找到命令，它也可以使用。

它还可以用来在运行时创建或修改命令（例如，在运行时国际化消息或基于 API 规范向命令添加标志-参见下面的[动态命令](#动态命令)部分）。

#### 钩子

也可以使用 `explicit` 策略定义钩子：

```json
"oclif": {
    "hooks": {
      "init": {
        "target": "./dist/index.js",
        "identifier": "INIT_HOOK"
      }
    }
}
```

```typescript
// src/index.ts
import Hello from './commands/hello'
import HelloWorld from './commands/hello/world'
export {default as INIT_HOOK} from './hooks/init/init.js'

export const COMMANDS = {
  hello: Hello,
  'hello:world': HelloWorld,
  howdy: Hello, // alias the `hello` command to `howdy`
}
```

该配置实际上是告诉 oclif 在 `./dist/index.js` 中查找 `INIT_HOOK` 导出。

#### 打包

**我们不支持打包**，因为可以使用无数的工具 + 配置。但是如果你选择使用一个编译器，比如 `esbuild`，有几个硬性要求 —— 你必须在根目录下有一个 package.json 和一个 `bin/run` 或 `bin/run.js` bin 脚本。这意味着你将无法成功地将整个 CLI（src 代码，package.json，node_modules 等）打包到单个文件中。

如果你仍然想使用一个编译器，你可以参考这个[示例仓库](https://github.com/oclif/plugin-test-esbuild/)。

#### 动态命令

如果你想在运行时操作或创建命令，也可以使用 `explicit` 策略。请注意，`explicit` 策略的这种用法**不能**与 `oclif.manifest.json` 一起使用，这将对生产中的 CLI 产生重大的性能影响。

示例:

```typescript
// src/index.ts
import {Command, Flags} from '@oclif/core'

import Hello from './commands/hello'
import HelloWorld from './commands/hello/world'

const dynamicCommands: Record<string, Command.Class> = {}
if (process.env.DYNAMIC_COMMAND) {
  dynamicCommands[process.env.DYNAMIC_COMMAND] = class extends Command {
    static flags = {
      flag1: Flags.boolean({description: 'flag1 description'}),
    }

    async run(): Promise<void> {
      const {flags} = await this.parse(this.constructor as Command.Class)
      this.log('hello from', this.id, flags)
    }
  }
}

export const COMMANDS = {
  hello: Hello,
  'hello:world': HelloWorld,
  ...dynamicCommands,
}
```

```bash
❯ DYNAMIC_COMMAND=foo:bar:baz bin/run.js foo bar baz --flag1
hello from foo:bar:baz { flag1: true }
```

### `single` 策略

`single` 策略告诉 oclif 这个 CLI 包含一个可以由 `bin/run.js` 执行的命令（例如 `ls` 或 `cat`）。

```json
{
  "oclif": {
    "commands": {
      "strategy": "single",
      "target": "./dist/index.js"
    }
  }
}
```

在本示例中，`./dist/index.js` 导出命令类。

### 关于 `oclif.manifest.json`

对于所有策略，`oclif.manifest.json` 将用于加载命令，而不是策略的默认行为。
