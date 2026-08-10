---
title: 钩子
---

oclif 公开了生命周期事件钩子，例如 `init` 和 `command_not_found`。[有关所有生命周期事件的列表，请参见下文](#生命周期事件)。除了这些内置事件外，你还可以创建自己的事件，并允许命令/插件监视这些自定义事件。这是允许多个插件相互交互的好方法。

多个挂钩并行运行。**此行为可能会在未来版本中更改。**

一个基础的钩子在 TypeScript 中看起来像下面这样：

```typescript
import {Hook} from '@oclif/core'

const hook: Hook<'init'> = async function (options) {
  console.log(`example init hook running before ${options.id}`)
}

export default hook
```

钩子还必须在 `package.json` 中的 oclif 设置下声明事件的名称和钩子的文件路径：

```json
"oclif": {
  "commands": "./lib/commands",
  "hooks": {
    "init": "./lib/hooks/init/example"
  }
}
```

同一事件类型的多个钩子可以用一个数组声明。

```json
"oclif": {
  "commands": "./lib/commands",
  "hooks": {
    "init": [
      "./lib/hooks/init/example",
      "./lib/hooks/init/another_hook"
    ]
  }
}
```

你可以使用 `oclif generate hook myhook --event=init` 创建钩子。

## 生命周期事件

* `init` - 在发现要运行的命令之前初始化 CLI 时运行
* `prerun` - 在 `init` 之后和找到命令之后运行，但就在运行命令本身之前
* `command_not_found` - 如果在显示错误之前未找到命令时运行
* `command_incomplete` - 如果未找到某个命令，但它是现有命令的一部分，则运行。仅在启用[灵活分类法](flexible_taxonomy.md)时有效。对于你希望显示所有匹配命令的提示符的情况很有用。查看 Salesforce CLI 的[实现](https://github.com/salesforcecli/cli/blob/main/src/hooks/incomplete.ts)。
* `jit_plugin_not_installed` - 如果[即时插件](jit_plugins.md)中的命令已执行但该插件尚未安装，则运行。查看 Salesforce CLI 的[实现](https://github.com/salesforcecli/plugin-trust/blob/main/src/hooks/jitPluginInstall.ts)。
* `preparse` - 在解析和验证标志和参数之前运行。如果你需要操作输入，这很有用。查看Salesforce CLI 的[实现](https://github.com/salesforcecli/cli/blob/main/src/hooks/preparse.ts)。这只能由 root CLI 实现。
* `postrun` - 仅当命令完成且无错误时，才在命令后运行

## 自定义事件

自定义事件就像生命周期事件一样，但你需要调用 `this.config.runHook()` 来触发事件。

例如，你可以定义一个分析发布函数，在提交分析遥测数据后将在命令中运行该函数。首先定义：

**src/hooks/analytics/post.ts**

```typescript
const hook = async function (options: {id: string}) {
  // code to post options.id to analytics server
}

export default hook
```

**package.json**

```js
  "oclif": {
    "commands": "./lib/commands",
    "hooks": {
      "analytics": "./lib/hooks/analytics/post"
    },
  },
```

然后在任何你想触发事件的命令中：

```js
export class extends Command {
  async run() {
    // emit analytics
    await this.config.runHook('analytics', {id: 'my_command'})
  }
}
```

如果你需要在挂接过程中退出，使用 `options.context.error()` 或 `options.context.exit()`。抛出 `Error` 不会导致 CLI 退出 —— 这是为了防止单个插件的 init 钩子导致 CLI 在每次执行命令时立即失败。
