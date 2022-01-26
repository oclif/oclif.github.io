---
title: Aliases
---

Aliases let you define a string that maps to a command. This command can be run as `mycli config`, `mycli config:index`, or `mycli config:list`: (this only applies to multi-CLIs)

```js
import {Command, Flags} from '@oclif/core'

export class ConfigIndex extends Command {
  static aliases = ['config:index', 'config:list']
}
```
