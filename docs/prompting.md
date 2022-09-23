---
title: Prompting
---

[cli-ux](https://github.com/oclif/cli-ux) provides a simple `cli.prompt()` function, for more complex input prompts, we recommend using the [inquirer](https://github.com/SBoudrias/Inquirer.js) library.


## `CliUx.ux.prompt()`

Prompt for basic input with `cli-ux`:

```typescript
import {Command, CliUx} from '@oclif/core'

export class MyCommand extends Command {
  async run() {
    // just prompt for input
    const name = await CliUx.ux.prompt('What is your name?')

    // mask input after enter is pressed
    const secondFactor = await CliUx.ux.prompt('What is your two-factor token?', {type: 'mask'})

    // hide input while typing
    const password = await CliUx.ux.prompt('What is your password?', {type: 'hide'})

    this.log(`You entered: ${name}, ${secondFactor}, ${password}`)
  }
}
```

Demo:

![prompt demo](/img/prompt_demo.gif)

## `inquirer`

Here is an example command that uses [inquirer](https://github.com/SBoudrias/Inquirer.js). You will need to add `inquirer` and `@types/inquirer` (for TypeScript CLIs) for this to work.

```typescript
import {Command, Flags} from '@oclif/core'
import * as inquirer from 'inquirer'

export class MyCommand extends Command {
  static flags = {
    stage: Flags.string({options: ['development', 'staging', 'production']})
  }

  async run() {
    const {flags} = await this.parse(MyCommand)
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
