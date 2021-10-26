---
title: Topic Separators
---

By default, topics will be separated with colons, e.g. `my:awesome:command`. However, you have the option to use spaces if you prefer, e.g. `my awesome command`.

To do this, simply set the `topicSeparator` property in the oclif section of your package.json

```json
{
  "oclif": {
    "topicSeparator": " "
  }
}
```

Currently colons (`":"`) and spaces (`" "`) are the only supported topic separators.
