---
title: Flag Inheritance
description: How to share flags
---

There are some instances where you might want to define a flag once for all of your commands. In this case you can add a base flag to an abstract base `Command` class. For example,


```typescript
import { Command, Flags } from '@oclif/core';

export abstract class BaseCommand extends Command {
  static baseFlags = {
    interactive: Flags.boolean({
      char: 'i',
      description: 'Run command in interactive mode',
      // Show this flag under a separate GLOBAL section in help.
      helpGroup: 'GLOBAL',
    }),
  };
}
```

Any command that extends `BaseCommand` will now have an `--interactive` flag on it.

If you are going to stack multiple layers of abstract `Command` classes, then you must spread the `baseFlags` to ensure that the flags are properly inherited. For example,

```typescript
import { Command, Flags } from '@oclif/core';

export abstract class FirstBaseCommand extends Command {
  static baseFlags = {
    interactive: Flags.boolean({
      char: 'i',
      description: 'Run command in interactive mode',
      // Show this flag under a separate GLOBAL section in help.
      helpGroup: 'GLOBAL',
    }),
  };
}

export abstract class SecondBaseCommand extends FirstBaseCommand {
  static baseFlags = {
    ...FirstBaseCommand.baseFlags,
    'log-level': Flags.option({
      default: 'info',
      description: 'Specify log level',
      helpGroup: 'GLOBAL',
      options: ['debug', 'warn', 'error', 'info', 'trace'] as const,
      summary: 'Specify level for logging.',
      char: 'l',
    })(),
  };
}

export abstract class ThirdBaseCommand extends SecondBaseCommand {
  static baseFlags = {
    ...SecondBaseCommand.baseFlags,
    verbose: Flags.boolean({
      description: 'Show verbose output.',
      char: 'v'
    })
  };
}
```
