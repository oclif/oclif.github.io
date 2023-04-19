---
title: Single Command CLI
---

Sometimes you may want your CLI's executable to also be the only command, similar to many bash utilities like `ls` or `cat`.

To support this, you will need to put your command logic into `src/commands/index.ts` and add the following to the oclif section of your package.json:

```json
oclif: {
  default: ".",
  commands: "./dist"
}
```
