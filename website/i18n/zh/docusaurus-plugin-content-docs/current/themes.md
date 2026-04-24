---
title: 主题
description: 使帮助和输出更漂亮
---

oclif 支持随 CLI 提供的主题，用户可以选择重写这些主题。

默认情况下，主题仅适用于帮助输出，但如果需要，你可以根据自己的目的扩展主题。请参见下面的[扩展主题](#扩展主题)部分。

## theme.json

主题文件采用以下结构：

```json
{
  "bin": "white",
  "command": "cyan",
  "commandSummary": "white",
  "dollarSign": "white",
  "flag": "white",
  "flagDefaultValue": "blue",
  "flagOptions": "white",
  "flagRequired": "red",
  "flagSeparator": "white",
  "sectionDescription": "white",
  "sectionHeader": "underline",
  "topic": "white",
  "version": "white"
}
```

### 支持的主题属性

如上所述，默认情况下，主题仅适用于帮助输出。可以使用以下属性：

- `alias`: `ALIASES` 部分下的别名
- `bin`: CLI 可执行文件的名称（例如 `sf`、`heroku`）
- `command`: 命令的名称
- `commandSummary`: 命令的概览
- `dollarSign`: 在 `examples` 和 `usage` 之前打印的 `$`
- `flag`: 标志名称和短字符
- `flagDefaultValue`: 显示在标志上的默认值 `[default: X]`
- `flagOptions`: 标志的有效选项
- `flagRequired`: 在必填标志上显示的 `(required)`
- `flagSeparator`: 短字符和长标志名称的分隔符 `,`，（例如 `-f, --foo`）
- `sectionDescription`: 每个部分内的文本（例如 `DESCRIPTION` 下的所有内容）
- `sectionHeader`: 章节标题（例如 `DESCRIPTION`）
- `topic`: 标题（topic）下的部分
- `version`: 显示在帮助首页下的 `VERSION`（例如 `sf --help`）

每个值必须是以下值之一：

- 十六进制代码，例如 `#FF0000`
- rbg 值，例如 `rgb(255,255,255)`
- `chalk` 支持的样式（参见 https://github.com/chalk/chalk/#styles）

任何无效的值都将被忽略。

## 装载主题

使用 CLI 装载主题非常简单。

首先，你需要在 CLI 中创建一个新的主题文件（参见上文）。然后，在你的 package.json 中，你只需要告诉 oclif 在哪里可以找到这个文件：

```json
{
  "files": [
    "/theme.json",
    "/oclif.manifest.json",
    "/dist",
  ],
  "oclif": {
    "theme": "theme.json"
  }
}
```

重要的是，你还需要将该文件添加到 `files` 的列表中，以便每当你发布到 npm 或使用 `oclif pack` 打包 CLI 时，它都会与 CLI 打包在一起。

## 重写主题

如果你的 CLI 附带了一个主题，用户可以通过在 CLI 的 config 目录中创建自己的 `theme.json` 来覆盖这个主题（在 Unix 上是 `~/.config/<CLI>`，在 Windows 上是 `%LOCALAPPDATA%\<CLI>`）。

用户可以在自己的 `theme.json` 中指定一个或所有主题属性，这意味着他们可以选择仅覆盖默认主题的单个属性。

## 禁用主题

可以使用 `<CLI>_DISABLE_THEME` 环境变量禁用主题。

## 扩展主题

默认情况下，oclif 只将主题用于帮助输出，但如果需要，你可以将主题用于其他目的。例如，你可能希望在命令期间将彩色的 `info:` 日志记录给用户：

```typescript
import {Command, ux} from '@oclif/core'

export default class Hello extends Command {
  public async run(): Promise<void> {
    this.info('starting process!')
    // do some stuff...
    this.info('still making progress!')
    // do some more stuff...
    this.info('process complete!')
  }

  public info(msg: string): void {
    this.log(ux.colorize(this.config.theme?.info, 'info:'), msg)
  }
}
```
