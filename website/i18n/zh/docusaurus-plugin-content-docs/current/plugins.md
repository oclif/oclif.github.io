---
title: 插件
---

插件是提供实验功能的好方法，允许用户扩展 CLI，将 CLI 分解为模块化组件，或在 CLI 之间共享功能。

插件可以像 CLI 一样拥有命令或钩子。要添加一个插件，例如 [not-found plugin](https://github.com/oclif/plugin-not-found) 插件，首先使用 `yarn add @oclif/plugin-not-found` 将其添加到 CLI，然后将以下内容添加到 `package.json`：

```js
{
  "name": "mycli",
  "version": "0.0.0",
  // ...
  "dependencies": {
    "@oclif/core": "^3",
    "@oclif/plugin-help": "^6",
    "@oclif/plugin-not-found": "^3",
  }
  "oclif": {
    "plugins": [
      "@oclif/plugin-help",
      "@oclif/plugin-not-found"
    ]
  }
}
```

也可以使用 [minimatch](https://www.npmjs.com/package/minimatch?activeTab=readme) 模式指定插件：

```js
{
  "name": "mycli",
  "version": "0.0.0",
  // ...
  "dependencies": {
    "@oclif/core": "^3",
    "@oclif/plugin-help": "^6",
    "@oclif/plugin-not-found": "^3",
  }
  "oclif": {
    "plugins": [
      "@oclif/plugin-*",
    ]
  }
}
```

如果你希望用户能够将他们自己的插件安装到你的 CLI 中，请使用 [plugins plugin](https://github.com/oclif/plugin-plugins)。

## 有用的插件

* [@oclif/plugin-not-found](https://github.com/oclif/plugin-not-found) - 如果找不到命令，则显示友好的“did you mean”消息。
* [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins) - 允许用户添加插件来扩展 CLI。
* [@oclif/plugin-update](https://github.com/oclif/plugin-update) - 向 CLI 添加自动更新支持。
* [@oclif/plugin-help](https://github.com/oclif/plugin-help) - oclif 的帮助插件。
* [@oclif/plugin-warn-if-update-available](https://github.com/oclif/plugin-warn-if-update-available) - 如果用户正在运行过时的 CLI，则显示警告消息。
* [@oclif/plugin-which](https://github.com/oclif/plugin-which) - 显示命令来自哪个插件。
* [@oclif/plugin-commands](https://github.com/oclif/plugin-commands) - 添加 `commands` 命令以列出所有命令。
* [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete) - 添加 bash/zsh 自动补全。
* [@oclif/plugin-search](https://github.com/oclif/plugin-search) - 将 `search` 命令添加到你的 CLI。
* [@oclif/plugin-version](https://github.com/oclif/plugin-version) - 将 `version` 命令添加到你的 CLI。

## 构建自己的插件

为插件编写代码本质上与在 CLI 中编写代码相同。他们可以导出 3 种不同的类型：命令，钩子和其他插件。

运行 `npx oclif generate mynewplugin` 在新目录中创建插件。这将附带一个名为 `hello` 和 `hello world` 的示例命令。
