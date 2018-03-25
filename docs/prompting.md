---
title: Prompting
---

While [cli-ux](cli_ux.md) provides a simple `cli.prompt()` function, for more complex input prompts, we recommend using the [inquirer](https://github.com/SBoudrias/Inquirer.js) library.

Here is an example command that uses inquirer. You will need to add `inquirer` and `@types/inquirer` (for TypeScript CLIs) for this to work.

```typescript
import {Command, flags} from '@oclif/command'
import * as inquirer from 'inquirer'

export class MyCommand extends Command {
  static flags = {
    stage: flags.string({options: ['development', 'staging', 'production']})
  }

  async run() {
    const {flags} = this.parse(MyCommand)
    let stage = flags.stage
    if (!stage) {
      let responses: any = await inquirer.prompt([{
        name: 'stage',
        message: 'select a stage',
        type: 'list',
        choices: [{name: 'development'}, {name: 'staging'}, {name: 'production'}],
      }])
      stage = responses.stage
    }
    this.log(`the stage is: ${stage}`)
  }
}
```

Demo:

![inquirer demo](/img/inquirer_demo.gif)
