---
title: 标题（Topic）
---

随着 CLI 的发展，将命令嵌套在标题中会很有用。只需将命令文件放置在子目录中即可支持此功能。例如，在 Salesforce CLI 中，我们有一个主题 `sf config`，其中包含类似 `sf config set` 和 `sf config get` 的命令。目录结构如下所示：

```text
package.json
src/
└── commands/
    └── config/
        ├── index.ts
        ├── set.ts
        └── get.ts
```

帮助说明将是目录中第一个命令的说明。如果你想自定义帮助说明，请将其添加到 `package.json` 中，如下所示：

```js
{
  "oclif": {
    "topics": {
      "apps:favorites": { "description": "manage favorite apps" },
      "config": { "description": "manage heroku config variables" },
    }
  }
}
```

子标题可以通过在标题目录中创建子目录来创建，但是出于用户体验的原因，我们通常不鼓励深度超过 1 或 2 级，即使是最大的 CLI。
