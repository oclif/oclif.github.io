---
title: 以编程方式运行命令
---

如果你需要从另一个代码库运行命令，或者以编程方式在另一个代码库中运行命令，有几个选项。

首先，直接运行命令通常不是一个好主意，因为命令导出的是用户界面，而不是代码界面。这是一种设计缺陷，应该很少（如果有的话）使用。一般来说，最好将代码拆开，以便直接调用而不是作为命令调用。我们将首先展示这种更好的方法。

## 与模块共享代码

例如，假设你有一个 `config list` 命令，它将应用程序的配置变量输出到终端。

**./src/commands/config/list.ts**

```typescript
export class ConfigList extends Command {
  static flags = {
    app: Flags.string({required: true})
  }

  async run() {
    const {flags} = await this.parse(ConfigList)
    const config = await api.get(`/apps/${flags.app}/config-vars`)
    for (let [key, value] of Object.entries(config)) {
      this.log(`${key}=${value}`)
    }
  }
}
```

然后假设你有另一个命令 `config update`，它更新应用程序的配置，并最终将新的配置变量显示到终端。

由于 `config list` 和 `config update` 都需要以完全相同的方式显示配置变量，因此你应该创建一个负责创建显示的新模块、函数或类。

示例：

**./src/commands/config/update.ts**

```typescript
import {displayConfigVars} from '../displayConfigVars'

export class ConfigUpdate extends Command {
  static flags = {
    app: Flags.string({required: true})
  }

  async run() {
    const {flags} = await this.parse(ConfigUpdate)
    await this.doUpdate(flags.app)
    await displayConfigVars(flags.app)
  }
}
```

**./src/displayConfigVars.ts**

```typescript
export async function displayConfigVars(app: string) {
  const config = await api.get(`/apps/${app}config-vars`)
  for (let [key, value] of Object.entries(config)) {
    this.log(`${key}=${value}`)
  }
}
```

这是共享代码的推荐方式。这可以通过将共享代码放入自己的 npm 包中来进一步扩展。

## 直接调用命令

不过，如果你 _真的_ 想直接调用一个命令，这很容易做到。你有几个选择。

如果你知道要运行的命令已安装在 CLI 中，则可以使用 `this.config.runCommand`。为此，我们可以这样编写我们的 `config update` 命令：

**./src/commands/config/update.ts**

```typescript
export class ConfigUpdate extends Command {
  static flags = {
    app: Flags.string({required: true})
  }

  async run() {
    const {flags} = await this.parse(ConfigUpdate)
    await this.doUpdate(flags.app)
    await this.config.runCommand('config:list', ['--global'])
  }
}
```

第二种选择是直接导入命令并直接执行，如下所示：

**./src/commands/config/update.ts**

```typescript
import {ConfigList} from './config/list'

export class ConfigUpdate extends Command {
  static flags = {
    app: Flags.string({required: true})
  }

  async run() {
    const {flags} = await this.parse(ConfigUpdate)
    await this.doUpdate(flags.app)
    await ConfigList.run(['--global'])
  }
}
```

这是因为命令上有一个静态的 `.run()` [方法](https://github.com/oclif/core/blob/main/src/command.ts)，可以用来实例化命令并运行实例 `.run()` 方法。它接受 argv 作为命令的输入。

但是，我们再次**强烈建议**你避免这些选项。从 `Command` 类中提取任何共享逻辑要好得多。
