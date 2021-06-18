---
title: Custom Base Class
---

Use inheritance to share functionality between common commands. Here is an example of a command base class that has some common shared flags and a log method that can be shared among many commands.

For large CLIs with multiple plugins, it's useful to put this base class into its own npm package to be shared.

```js
// src/base.ts
import Command, {flags} from '@oclif/command'

export default abstract class extends Command {
  static flags = {
    loglevel: flags.string({options: ['error', 'warn', 'info', 'debug']})
  }

  log(msg, level) {
    switch (this.flags.loglevel) {
    case 'error':
      if (level === 'error') console.error(msg)
      break
    // a complete example would need to have all the levels
    }
  }

  async init() {
    // do some initialization

    // [NOTE] When called from the base class, this.parse must always be passed this.constructor as an argument. Otherwise, derived classes are unable to safely add arguments and flags. (see https://github.com/oclif/oclif/issues/225) 
    // typescript alias: const {flags} = this.parse(this.constructor as Input<typeof BaseCommand.flags>);
    const {flags} = this.parse(this.constructor)
    this.flags = flags
  }
  async catch(err) {
    // add any custom logic to handle errors from the command
    // or simply return the parent class error handling
    return super.catch(err);
  }
  async finally(err) {
    // called after run and catch regardless of whether or not the command errored
    return super.finally(_);
  }
}

// src/commands/mycommand.ts
import Command from '../base'

export class MyCommand extends Command {
  static flags = {
    ...Command.flags,
    extraflag: flags.string()
  }
  
  async run() {
    this.log('information', 'info')
    this.log('uh oh!', 'error')
  }
}
```
