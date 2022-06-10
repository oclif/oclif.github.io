---
title: Command Arguments
---

Arguments are positional arguments passed to the command. For example, if this command was run with `mycli arg1 arg2` it would be declared like this:

```js
import {Command} from '@oclif/core'

export class MyCLI extends Command {
  static args = [
    {name: 'firstArg'},
    {name: 'secondArg'},
  ]

  async run() {
    // can get args as an object
    const {args} = await this.parse(MyCLI)
    console.log(`running my command with args: ${args.firstArg}, ${args.secondArg}`)
    // can also get the args as an array
    const {argv} = await this.parse(MyCLI)
    console.log(`running my command with args: ${argv[0]}, ${argv[1]}`)
  }
}
```

Here are the options arguments can have:
```js
static args = [
  {
    name: 'file',               // name of arg to show in help and reference with args[name]
    required: false,            // make the arg required with `required: true`
    description: 'output file', // help description
    hidden: true,               // hide this arg from help
    parse: input => 'output',   // instead of the user input, return a different value
    default: 'world',           // default value if no arg input
    options: ['a', 'b'],        // only allow input to be from a discrete set
  }
]
```

For variable length arguments, disable argument validation with `static strict = false` on the command.
