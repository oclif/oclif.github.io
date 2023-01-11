---
title: Global Flags
---

There are some instances where you might want to define a flag once for all of your commands. In this case you can add a global flag to an abstract base `Command` class. For example,


```typescript
import { Command, Flags } from '@oclif/core';

export abstract class BaseCommand extends Command {
  static baseFlags = {
    interactive: Flags.boolean({
      char: 'i',
      description: 'Run command in interactive mode',
    }),
  };
}
```

Any command that extends `BaseCommand` will now have an `--interactive` flag on it.
