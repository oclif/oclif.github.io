---
title: 即时插件安装
description: 支持即时插件安装
---

有时候你可能希望有一个插件没有打包在你的 CLI 中，但是在用户第一次执行它的时候就被安装了 -- 我们称之为即时插件安装，或者简称为 JIT。如果你需要减少 CLI 的包大小，同时仍允许用户访问所有插件，这可能很有用。

要使用此功能，你需要：

1. 将 `jitPlugins` 添加到 package.json 的 `oclif` 部分

```json
"oclif": {
  "jitPlugins": {
    "my-plugin": "^1.2.3",
    "another-plugin": "^1.2.3",
  }
}
```

1. 确保你的构建过程包括使用 `oclif manifest` 生成清单。清单将包括 JIT 插件所拥有的所有命令的信息，这允许用户在尚未安装这些命令的情况下运行 `--help`。**如果生成的 manifest 没有与 CLI 一起打包，则该功能将无法工作。**

2. 实现 `jit_plugin_not_installed` 钩子。

oclif 试图成为用户体验不可知论者，这意味着我们不想把任何特定的用户体验强加给你。任何时候需要用户体验时，我们都会使用[钩子](hooks.md)，这样你就可以设计你希望用户拥有的确切用户体验。

在安装 JIT 插件的情况下，你可能希望获得多种可能的用户体验 -- 也许你希望首先提示用户进行确认，也许你希望记录特定信息，等等。

下面是一个如何实现钩子的例子，

```typescript
import { Hook, Errors, ux } from '@oclif/core';

const hook: Hook.JitPluginNotInstalled = async function (opts) {
  try {
    const answer = await ux.confirm(`${opts.command.pluginName} not installed. Would you like to install?`)
    if (answer === 'y') {
      await opts.config.runCommand('plugins:install', [`${opts.command.pluginName}@${opts.pluginVersion}`]);
    }
  } catch (error) {
    throw new Errors.CLIError(`Could not install ${opts.command.pluginName}`, 'JitPluginInstallError');
  }
};

export default hook;

```
