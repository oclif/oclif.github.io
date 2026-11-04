---
title: 自定义基类
description: 创建一个可扩展的 Command 类
---

使用继承在常用命令之间共享功能。下面是一个命令基类的示例，它有一些共同的共享标志。

对于包含多个插件的大型 CLI，将该基类放到自己的 npm 包中共享是非常有用的。

```typescript
// src/baseCommand.ts
import {Command, Flags, Interfaces} from '@oclif/core'

export type Flags<T extends typeof Command> = Interfaces.InferredFlags<typeof BaseCommand['baseFlags'] & T['flags']>
export type Args<T extends typeof Command> = Interfaces.InferredArgs<T['args']>

export abstract class BaseCommand<T extends typeof Command> extends Command {
  // 添加 --json 标志
  static enableJsonFlag = true

  // 定义可被任何扩展 BaseCommand 的命令继承的标记
  static baseFlags = {
    'log-level': Flags.option({
      default: 'info',
      helpGroup: 'GLOBAL',
      options: ['debug', 'warn', 'error', 'info', 'trace'] as const,
      summary: 'Specify level for logging.',
    })(),
  }

  protected flags!: Flags<T>
  protected args!: Args<T>

  public async init(): Promise<void> {
    await super.init()
    const {args, flags} = await this.parse({
      flags: this.ctor.flags,
      baseFlags: (super.ctor as typeof BaseCommand).baseFlags,
      enableJsonFlag: this.ctor.enableJsonFlag,
      args: this.ctor.args,
      strict: this.ctor.strict,
    })
    this.flags = flags as Flags<T>
    this.args = args as Args<T>
  }

  protected async catch(err: Error & {exitCode?: number}): Promise<any> {
    // 添加任何自定义逻辑来处理命令中的错误
    // 或者只是返回父类错误处理
    return super.catch(err)
  }

  protected async finally(_: Error | undefined): Promise<any> {
    // 在运行和捕获之后调用，而不管命令是否出错
    return super.finally(_)
  }
}

// src/commands/my-command.ts

export default class MyCommand extends BaseCommand<typeof MyCommand> {
  static summary = 'child class that extends BaseCommand'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
    '<%= config.bin %> <%= command.id %> --json',
    '<%= config.bin %> <%= command.id %> --log-level debug',
  ]

  static flags = {
    name: Flags.string({
      char: 'n',
      summary: 'Name to print.',
      required: true,
    }),
  }

  public async run(): Promise<Flags<typeof MyCommand>> {
    for (const [flag, value] of Object.entries(this.flags)) {
      this.log(`${flag}: ${value}`)
    }

    return this.flags
  }
}
```

对于一个更复杂的示例，[这里](https://github.com/salesforcecli/sf-plugins-core/blob/main/src/sfCommand.ts)是我们如何为 Salesforce CLI 完成这项工作的。
