---
title: 单一命令的 CLI
description: 将 CLI 配置为单个命令
---

有时候，你可能希望 CLI 的可执行文件也是唯一的命令，类似于许多 bash 实用程序，如 `ls` 或 `cat`。

为了支持这一点，你需要将命令逻辑放入 `src/index.ts` 中，并将以下内容添加到 package.json 的 oclif 部分：

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

其中 `./dist/index.js` 是导出 `Command` 类的文件。有关详细信息，请参阅[命令发现策略](command_discovery_strategies)。
