---
title: 帮助类
---

开箱即用的 oclif 为 CLI 提供了很好的帮助体验。用户可以使用 `--help` 标志调用帮助。

```
$ my-cli login --help
```

如果你想让你的 CLI 有一个显式的 `help` 命令，在你的配置中添加 `@oclif/plugin-help` 作为 [oclif 插件](plugins.md)。

```
$ my-cli help
```

## 自定义帮助

首先，在 package.json 的 oclif 配置中定义帮助类的文件路径。这是帮助类的相对路径，没有文件扩展名。

对于本例，帮助类将在“[project root]/src/help.ts”文件中创建。

```json
{
  "oclif": {
    "helpClass": "./dist/help"
  }
}
```

从这里有两个路径，自己实现 `HelpBase` 抽象类或重写你想要自定义的默认 `Help` 类的部分（例如：如何显示命令用法）。我们建议采用后一种方法，但下面将介绍这两种方法。

## 扩展 `HelpBase` 类

`HelpBase` 抽象类提供了一个起点，要求实现的最少需要的方法与 oclif 兼容。

```TypeScript
import {Command, HelpBase} from '@oclif/core';

export default class CustomHelp extends HelpBase {
  showHelp(args: string[]) {
    console.log('This will be displayed in multi-command CLIs')
  }

  showCommandHelp(command: Command.Loadable) {
    console.log('This will be displayed in single-command CLIs')
  }
}
```

`showHelp` 方法由 oclif 调用以显示多个命令 CLI 中的帮助，而 `showCommandHelp` 方法则直接用于单一命令 CLI。

该类是用 `config` 属性实例化的，该属性为构造自定义输出提供了有用的上下文。

要查看一个可能的示例，请查看从 [@oclif/core 导出的默认 `Help` 类](https://github.com/oclif/core/blob/main/src/help/index.ts)的源代码。

## 扩展默认 `Help` 类

默认的 `Help` 类提供了许多方法“钩子”，使你可以轻松地覆盖你想要自定义的帮助输出的特定部分。

```TypeScript
import {Command, Help, Interfaces} from '@oclif/core'

export default class MyHelpClass extends Help {
  // acts as a "router"
  // and based on the args it receives
  // calls one of showRootHelp, showTopicHelp,
  // the formatting for an individual command
  formatCommand(command: Command.Loadable): string {}

  // the formatting for a list of commands
  formatCommands(commands: Command.Loadable[]): string {}

  // displayed for the root help
  formatRoot(): string {}

  // the formatting for an individual topic
  formatTopic(topic: Interfaces.Topic): string {}

  // the default implementations of showRootHelp
  // showTopicHelp and showCommandHelp
  // will call various format methods that
  // provide the formatting for their corresponding
  // help sections;
  // these can be overwritten as well

  // the formatting responsible for the header
  // the formatting for a list of topics
  protected formatTopics(topics: Interfaces.Topic[]): string {}

  // display help for a command
  showCommandHelp(command: Command.Loadable): void {}

  // or showCommandHelp
  showHelp(args: string[]): void {}

  // display the root help of a CLI
  showRootHelp(): void {}

  // display help for a topic
  showTopicHelp(topic: Interfaces.Topic): void {}
}

```

要查看这些方法的默认实现，请查看[从 @oclif/core 导出的默认 `Help` 类](https://github.com/oclif/core/blob/main/src/help/index.ts)。

要开始试验，请在自定义帮助类中定义 `showCommandHelp` 并更改输出。

```TypeScript
import {Command, Help} from '@oclif/core';

export default class MyHelpClass extends Help {
  public showCommandHelp(command: Command.Loadable) {
    console.log('Display my custom command help!')
  }
}
```

然后为任何命令运行帮助。

```
$ my-cli login --help
Display my custom command help!
```
