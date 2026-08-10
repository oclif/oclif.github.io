---
title: 灵活分类法
description: 将用户友好性提升到新的水平
---

如果你希望你的客户在执行命令时不遵守已定义的命令分类，你可以启用 `flexibleTaxonomy` 并在你的 package.json 的 `oclif` 部分添加一个钩子：

```json
{
  "oclif": {
    "flexibleTaxonomy": true,
    "hooks": {
      "command_incomplete": "./dist/hooks/command_incomplete.js"
    }
  }
}
```

启用灵活分类法有两个主要好处：

1. 它使你的CLI更加用户友好。例如，你可能有一个命令`my-cli foobars list`。如果用户错误地输入 `my-cli list foobars`，oclif 会自动知道它应该执行 `foobars list`，而不是抛出错误。
2. 如果用户只提供了命令的一部分，则它为你提供了提示用户输入正确命令的机会。这使得单个命令更易于解释，特别是当你有大量命令时。更多细节请参见[钩子实现](#钩子实现)。

### 钩子实现

当启用 `flexibleTaxonomy` 时，oclif 将在用户输入不完整的命令时运行 `command_incomplete` 钩子（例如，命令是 `one two three` ，但他们只输入了 `two`）。这个钩子为你提供了创建交互式用户体验的机会。

此示例说明如何使用 [inquirer](https://www.npmjs.com/package/inquirer) 包提示用户要运行的命令：

```typescript
import { Hook, toConfiguredId, toStandardizedId } from '@oclif/core';
import { select } from '@inquirer/prompts';

const hook: Hook.CommandIncomplete = async function ({
  config,
  matches,
  argv,
}) {
  const command = await select({
    message: 'Which of these commands would you like to run?',
    choices: matches.map((p) => toConfiguredId(p.id, config)),
  });

  if (argv.includes('--help') || argv.includes('-h')) {
    return config.runCommand('help', [toStandardizedId(command, config)]);
  }

  return config.runCommand(toStandardizedId(command, config), argv);
};

export default hook;
```

这是用户将看到的提示：

```shell
$ my-cli list
? Which of these commands did you mean (Use arrow keys)
❯ foobars list
  config list
  env list
```
