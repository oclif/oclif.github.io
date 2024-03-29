---
title: Single Command CLI
description: Configure CLI to be a single command
---

Sometimes you may want your CLI's executable to also be the only command, similar to many bash utilities like `ls` or `cat`.

To support this, you will need to put your command logic into `src/index.ts` and add the following to the oclif section of your package.json:

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

where `./dist/index.js` is a file that exports a `Command` class. See [Command Discovery Strategies](./command_discovery_strategies) for more details.
