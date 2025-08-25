---
title: 别名
description: 为命令、标志和 bin 定义别名
---

## 命令别名

别名允许你定义映射到命令的字符串。这个命令可以通过 `mycli config`、`mycli config:index` 或者 `mycli config:list` 来运行：

```js
import {Command, Flags} from '@oclif/core'

export class ConfigIndex extends Command {
  static aliases = ['config:index', 'config:list']
}
```

默认情况下，别名会找到“真正的”命令并正常工作。如果你提供命令别名是为了向后兼容，但希望用户使用“真正的”命令，可将 `deprecateAliases` 设为 `true` ，以警告用户使用正确的名称。

```js
export class ConfigIndex extends Command {
  static aliases = ['config:index', 'config:list']
  static deprecateAliases = true
}
```

## 标志别名

与命令别名类似，但针对的是单个标志。你可以对名称和短字符设置别名，还可以在使用别名时发出警告。

```js
export class ConfigIndex extends Command {
  static flags = {
    'new-name': Flags.boolean({
      char: 'c',
      aliases: ['old-name', 'o'],
      deprecateAliases: true
    })
  }
}

```

## Bin 别名

创建一个能响应不同名称或“别名”的 CLI 非常简单，只需在 `binAliases` 中为 CLI 的 `oclif` 属性添加 `binAliases` 属性即可：

```json
{
  "name": "mycli",
  "version": "0.0.0",
  "description": "My CLI",
  "main": "bin/run.js",
  "bin": {
    "mycli": "./bin/run.js",
    "mycli-alias": "./bin/run.js"
  },
  "oclif": {
    "binAliases": ["mycli", "mycli-alias"]
  }
}
```

添加此属性后，你的 CLI 就能响应这两个名称中的任何一个，并在打包和构建过程中用于发布 CLI。请注意，`bin` 部分也进行了修改，以包含这两个别名，这就是 npm 创建 bin 别名的方式。为了创建统一的体验，无论采用哪种安装方法，CLI 作者都必须修改这两个别名以匹配。bin 别名还能与 `@oclif/plugin-autocomplete` 很好地配合使用，因此输入别名并使用自动补全功能与使用原名的体验是一样的。
