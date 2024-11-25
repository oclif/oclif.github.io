---
title: 标志继承
description: 如何共享标志
---

在某些情况下，你可能希望为所有命令定义一次标志。在这种情况下，你可以向抽象基类 `Command` 添加一个基类标志。比如说，

```typescript
import { Command, Flags } from '@oclif/core';

export abstract class BaseCommand extends Command {
  static baseFlags = {
    interactive: Flags.boolean({
      char: 'i',
      description: 'Run command in interactive mode',
      // 在帮助中的一个单独的 GLOBAL 部分下显示此标志。
      helpGroup: 'GLOBAL',
    }),
  };
}
```

任何扩展了 `BaseCommand` 的命令现在都会有一个 `--interactive` 标志。

如果你要堆叠多层抽象的 `Command` 类，那么你必须分散 `baseFlags` 以确保标志被正确地继承。比如说，

```typescript
import { Command, Flags } from '@oclif/core';

export abstract class FirstBaseCommand extends Command {
  static baseFlags = {
    interactive: Flags.boolean({
      char: 'i',
      description: 'Run command in interactive mode',
      // 在帮助中的一个单独的 GLOBAL 部分下显示此标志。
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
