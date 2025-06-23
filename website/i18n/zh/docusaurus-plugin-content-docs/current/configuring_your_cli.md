---
title: 配置你的 CLI
description: 关于配置 oclif 的所有内容
---

你可以在 CLI 或插件的 package.json 中配置 oclif 的行为。所有配置选项都应放在 `oclif` 部分。例如：

```json
{
  "name": "my-cli",
  "version": "1.2.3",
  "dependencies": {
    "@oclif/core": "^3"
  },
  "oclif": {
    "bin": "mycli",
    "dirname": "mycli",
    "commands": "./dist/commands",
    "topicSeparator": " "
  }
}
```

下面列出了你可以配置的所有选项。

| 属性                     | 说明                                                                                                |
| ------------------------ | --------------------------------------------------------------------------------------------------- |
| `additionalHelpFlags`    | 除 `--help` 外还应触发帮助输出的标志数组                                                            |
| `additionalVersionFlags` | 除 `--version` 外还应触发版本输出的标志数组                                                         |
| `aliases`                | 插件的别名。用于支持已重命名的遗留插件                                                              |
| `bin`                    | CLI bin 名称 (例如 `sf`、`heroku`、`git` 等等)                                                      |
| `binAliases`             | 一个字符串数组，所有字符串都能执行 CLI 的 bin。参见[别名](aliases.md#bin-别名)                      |
| `dirname`                | 确定 CLI 的配置、缓存和数据目录时使用的目录名称。                                                   |
| `commands`               | oclif 可以在哪里找到命令类。参见[命令发现策略](command_discovery_strategies.md)                     |
| `description`            | 在帮助中显示的插件或 CLI 的说明                                                                     |
| `devPlugins`             | 仅在开发过程中加载的插件列表。参见[插件](plugins.md)                                                |
| `exitCodes`              | 配置终止代码。参见本章[终止代码](#终止代码)部分                                                     |
| `flexibleTaxonomy`       | 设置为 true 时，启用[灵活分类法](flexible_taxonomy.md)                                              |
| `helpClass`              | 已编译[自定义帮助类](help_classes.md)的位置                                                         |
| `helpOptions`            | 用于配置帮助输出行为的设置。参见本章[帮助选项](#帮助选项)部分                                       |
| `hooks`                  | 注册你的插件或者 CLI 的钩子。参见[钩子](hooks.md)                                                   |
| `jitPlugins`             | 注册 JIT 插件。参见 [即时插件安装](jit_plugins.md)                                         |
| `macos`                  | 构建 macos 安装程序的设置。参见[发布](releasing.md)                                                 |
| `nsisCustomization`      | 用于自定义 Windows 安装程序的 .nsis 文件的路径。参见 [nsis-custom](nsis-installer_customization.md) |
| `plugins`                | 应该加载的插件列表。参见[插件](plugins.md)                                                          |
| `state`                  | 将 CLI 或插件的状态设置为在帮助中显示（例如 `beta` 会显示为 `This CLI is in beta`）                 |
| `theme`                  | 包含在 CLI 中的主题文件的路径。参见[主题](themes.md)                                                |
| `topicSeparator`         | 标题之间使用的分隔符 - 仅支持冒号（`":"`）和空格（`" "`）                                           |
| `topics`                 | 定义 CLI 的标题。参见[标题](topics.md)                                                              |
| `windows`                | 构建 windows 安装程序的设置。参见[发布](releasing.md)                                               |

### 终止代码

你可以为以下错误配置所需的终止代码：

- `default` - 任何错误的默认终止代码。
- `failedFlagParsing` - 当 oclif 未能解析标志的值时的终止代码。
- `failedFlagValidation` - 当一个标志未能通过自身验证时的终止代码。
- `invalidArgsSpec` - 当命令定义的 `args` 配置无效时的终止代码。
- `nonExistentFlag` - 当用户提供一个不存在的标志时的退出代码。
- `requiredArgs` - 当用户未能提供所需的参数时的退出代码。
- `unexpectedArgs` - 当用户向命令提供意料之外的参数时的退出代码。

### 帮助选项

你可以使用以下方法配置帮助输出的行为：

- `docopts` - 使用 docopts 作为用法。默认为 true。
- `flagSortOrder` - 在帮助输出中对标志进行排序的顺序。可以为 `alphabetical`（默认）或者 `none`（标志将按照它们被定义的顺序出现）。 
- `hideAliasesFromRoot` - 如果为 true，则在根帮助输出中隐藏命令别名。默认为 false。
- `hideCommandSummaryInDescription` - 默认情况下，命令摘要显示在帮助的顶部和命令描述的第一行。在命令描述中重复显示摘要可以提高可读性，尤其是对于长命令帮助输出。如果没有 `command.summary`，说明的第一行将被视为摘要。有些 CLI，尤其是非常简单的命令，可能不需要重复。
- `maxWidth` - 帮助输出的最大列宽。
- `sections` - 只显示指定部分的帮助。默认为所有部分。
- `sendToStderr` - 默认情况下，帮助输出会发送到 stdout。如果为 true，则会发送到 stderr。
- `showFlagNameInTitle` - 默认情况下，标题以 `<value>` 显示标志值。一些 CLI 开发人员可能更喜欢标题将标志名称显示为值，即--myflag=myflag而不是 `--myflag=<value>`。单个标志可以使用 `flag.helpValue=flag.name` 来设置。
- `showFlagOptionsInTitle` - 默认情况下，标记的选项值显示在标记说明中。这是因为冗长的选项列表会破坏帮助的格式。如果 CLI 知道所有命令都不会这样做，则可以使用此属性在帮助级别关闭此选项。单个标记可以使用 `flag.helpValue=options.join('|')` 设置此项。
- `stripAnsi` - 从帮助输出中删除 ansi 字符，以去除所有格式化。
- `usageHeader` - 覆盖 `USAGE` 部分的标题。

如果想进一步定制帮助，可以实现[自定义帮助类](help_classes.md)。
