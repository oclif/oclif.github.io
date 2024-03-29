---
title: Custom Base Class
description: Create an extendable Command class
---

Use inheritance to share functionality between common commands. Here is an example of a command base class that has some common shared flags.

For large CLIs with multiple plugins, it's useful to put this base class into its own npm package to be shared.

```typescript
// src/baseCommand.ts
import {Command, Flags, Interfaces} from '@oclif/core'

export type Flags<T extends typeof Command> = Interfaces.InferredFlags<typeof BaseCommand['baseFlags'] & T['flags']>
export type Args<T extends typeof Command> = Interfaces.InferredArgs<T['args']>

export abstract class BaseCommand<T extends typeof Command> extends Command {
  // add the --json flag
  static enableJsonFlag = true

  // define flags that can be inherited by any command that extends BaseCommand
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
    // add any custom logic to handle errors from the command
    // or simply return the parent class error handling
    return super.catch(err)
  }

  protected async finally(_: Error | undefined): Promise<any> {
    // called after run and catch regardless of whether or not the command errored
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

For a more complex example, [here's](https://github.com/salesforcecli/sf-plugins-core/blob/main/src/sfCommand.ts) how we do this for the Salesforce CLI.
