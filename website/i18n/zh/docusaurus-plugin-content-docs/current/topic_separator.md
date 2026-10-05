---
title: 标题分隔符
---

默认情况下，主题将用冒号分隔，例如 `my:awesome:command`。但是，如果你喜欢，你可以选择使用空格，例如 `my awesome command`。

为此，只需在 package.json 的 oclif 部分设置 `topicSeparator` 属性即可

```json
{
  "oclif": {
    "topicSeparator": " "
  }
}
```

目前，冒号（`":"`）和空格（`" "`）是唯一支持的主题分隔符。
