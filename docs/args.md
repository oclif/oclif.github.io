---
title: Command Arguments
---

Arguments are positional arguments passed to the command. For example, if this command was run with `mycli arg1 arg2` it would be declared like this:

```typescript
import {Args, Command} from '@oclif/core'

export class MyCLI extends Command {
  static args = {
    firstArg: Args.string(),
    secondArg: Args.string(),
  }

  async run() {
    // can get args as an object
    const {args} = await this.parse(MyCLI)
    this.log(`running my command with args: ${args.firstArg}, ${args.secondArg}`)
    // can also get the args as an array
    const {argv} = await this.parse(MyCLI)
    this.log(`running my command with args: ${argv[0]}, ${argv[1]}`)
  }
}
```

Here are the options arguments can have:
```js
static args = {
  firstArg: Args.string(
    {
      name: 'file',                     // name of arg to show in help and reference with args[name]
      required: false,                  // make the arg required with `required: true`
      description: 'output file',       // help description
      hidden: true,                     // hide this arg from help
      parse: async input => 'output',   // instead of the user input, return a different value
      default: 'world',                 // default value if no arg input. Can also be an async function.
      defaultHelp: 'a dynamic value'    // dynamic default value to show in help output (e.g. current working directory). Can be an async function that returns a string or undefined
      options: ['a', 'b'],              // only allow input to be from a discrete set
      ignoreStdin: false,               // set to true to ignore any value provided by stdin
      noCacheDefault: false             // if true, the value returned by defaultHelp will not be cached in the oclif.manifest.json.
    }
  ),
}
```

Here are the types of args that `Args` exports:
- `string`
- `integer`
- `boolean`
- `url`
- `file`
- `directory`
- `custom`

For variable length arguments, disable argument validation with `static strict = false` on the command.

```typescript
import {Args, Command} from '@oclif/core'

export class MyCLI extends Command {
  static args = {
    things: Args.string(),
  }

  static strict = false

  async run() {
    // If you're using strict=false you should use argv to access the provided args.
    const {argv} = await this.parse(MyCLI)
    this.log(`running my command with args: ${argv[0]}, ${argv[1]}`)
  }
}
```

Arguments can also be piped via stdin. This is particularly useful when creating scripts with your CLI commands. For example:

```
$ echo arg1 | mycli
running my command with args: arg1
```

This can behavior can be disabled on an argument by setting the `ignoreStdin` property to `true` on the argument's definition.
