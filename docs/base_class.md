---
title: Custom Base Class
---

Use inheritance to share functionality between common commands. Here is an example of a command base class that has some common shared flags and a log method that can be shared among many commands.

For large CLIs with multiple plugins, it's useful to put this base class into its own npm package to be shared.

### Base Class:
```ts
// src/base.ts

import { Command, Flags } from '@oclif/core';
import { FlagInput, OutputFlags, ParserOutput } from '@oclif/core/lib/interfaces';

// This is needed to get type safety working in derived classes
export type InferredFlagsType<T> = T extends FlagInput<infer F>
  ? F & {
      json: boolean | undefined;
    }
  : any;

export default abstract class BaseCommand<T extends FlagInput<any>> extends Command {
  static flags = {
    loglevel: Flags.string({ options: ['error', 'warn', 'info', 'debug'], default: 'info' }),
  };

  protected parsedOutput?: ParserOutput<any, any>;

  get processedArgs(): { [name: string]: any } {
    return this.parsedOutput?.args ?? {};
  }
  get processedFlags(): InferredFlagsType<T> {
    return this.parsedOutput?.flags ?? {};
  }

  private get baseFlags() {
    return this.processedFlags as Partial<OutputFlags<typeof BaseCommand.flags>>;
  }

  log(msg: any, level: string) {
    switch (this.baseFlags.loglevel) {
      case 'error':
        // eslint-disable-next-line no-console
        if (level === 'error') console.error(msg);
        break;
      // a complete example would need to have all the levels
    }
  }

  async init() {
    // do some initialization
    this.parsedOutput = await this.parse(this.ctor);
  }

  async catch(err: any) {
    // add any custom logic to handle errors from the command
    // or simply return the parent class error handling
    return super.catch(err);
  }

  async finally(err: any) {
    // called after run and catch regardless of whether or not the command errored
    return super.finally(err);
  }
}
```

### Derived class:
```ts
// src/commands/myCommand.ts

import { Flags } from '@oclif/core';
import { ArgInput } from '@oclif/core/lib/interfaces';
import BaseCommand from '../base';

export default class MyCommand extends BaseCommand<typeof MyCommand.flags> {
  static description = 'This is a derived command';

  static examples = ['<%= config.bin %> <%= command.id %>'];

  static flags = {
    ...BaseCommand.flags,

    // flag with a value (-n, --name=VALUE)
    name: Flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: Flags.boolean({ char: 'f' }),
  };

  static args: ArgInput = [{ name: 'file' }];

  public async run(): Promise<void> {
    console.log({
      args: this.processedArgs,
      flags: this.processedFlags,
    });

    // We now get complete type safety on 'this.processedFlags'!!
    this.log(this.processedFlags.force, 'info');
    
    this.log('information', 'info');
    this.log('uh oh!', 'error');
  }
}
```
