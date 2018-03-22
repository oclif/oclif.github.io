---
title: Features
---

* **Flag/Argument parsing** - No CLI framework would be complete without a flag parser. We've built a custom one from years of experimentation that we feel consistently handles user input flexible enough for the user to be able to easily use the CLI in ways they expect, but without comprisiming strictness guarantees to the developer.
* **Super Speed** - The overhead for running an oclif CLI command is almost nothing. Also, only the command to be executed will be required with node. So large CLIs with many commands will load just as fast as a small one with a single command.
* **CLI Generator** - Run a single command to scaffold out a fully functional CLI and get started quickly. See [Usage](#-usage) below.
* **Testing Helpers** - We've put a lot of work into making commands easily testable and easy to mock out stdout/stderr. The generator will automatically create [scaffolded tests](https://github.com/oclif/example-multi-ts/blob/master/test/commands/hello.test.ts).
* **Auto-documentation** - By default you can pass `--help` to the CLI to get help such as flag options and argument information. This information is also automatically placed in the README whenever the npm package of the CLI is published. See the [multi-command CLI example](https://github.com/oclif/example-multi-ts)
* **Plugins** - Using plugins, users of the CLI can extend it with new functionality, a CLI can be split into modular components, and functionality can be shared amongst multiple CLIs. See [Building your own plugin](#-building-your-own-plugin) below.
* **Hooks** - Use lifecycle hooks to run functionality any time a CLI starts, or on custom triggers. Use this whenever custom functionality needs to be shared between various components of the CLI.
* **TypeScript (or not)** - Everything in the core of oclif is written in TypeScript and the generator can build fully configured TypeScript CLIs or just plain JavaScript CLIs. By virtue of static properties in TypeScript the syntax is a bit cleaner in TypeScript—but everything will work no matter which language you choose. If you use plugins support, the CLI will automatically use `ts-node` to run the plugins making it easy and fast to use TypeScript with minimal-to-no boilerplate needed for any oclif CLI.
* **Coming soon: man pages** - In addition to in-CLI help through `--help` and the README markdown help generation, the CLI can also automatically create man pages for all of its commands.
* **Coming soon: Autocomplete** - Automatically include autocomplete for your CLI. This includes not just command names and flag names, but flag values as well. For example, it's easy to configure the Heroku CLI to have completions for Heroku app names:

```
$ heroku info --app=<tab><tab> # will complete with all the Heroku apps a user has in their account
```

# 🏗 Usage

Creating a single-command CLI:

```sh-session
$ npx oclif single mynewcli
? npm package name (mynewcli): mynewcli
$ cd mynewcli
$ ./bin/run
hello world from ./src/index.js!
```

Creating a multi-command CLI:

```sh-session
$ npx oclif multi mynewcli
? npm package name (mynewcli): mynewcli
$ cd mynewcli
$ ./bin/run --version
mynewcli/0.0.0 darwin-x64 node-v9.5.0
$ ./bin/run --help
USAGE
  $ mynewcli [COMMAND]

COMMANDS
  hello
  help   display help for mynewcli

$ ./bin/run hello
hello world from ./src/hello.js!
```

# 🛠 Command Options

A basic command looks like the following in TypeScript:

```js
import Command from '@oclif/command'

export class MyCommand extends Command {
  static description = 'description of this example command'

  async run() {
    console.log('running my command')
  }
}
```

The only part that is required is the run function. Accept user input with [arguments](#-arguments) and [flag options](#-flag-options).

In JavaScript:

```js
const {Command} = require('@oclif/command')

class MyCommand extends Command {
  async run() {
    console.log('running my command')
  }
}

MyCommand.description = 'description of this example command'

module.exports = MyCommand
```

Note that the following examples will be in TypeScript. As JavaScript does not yet have static class properties, you will have to add them to the class after it is declared like we did with the description above.

# 🔧 Arguments

Arguments are positional arguments passed to the command. For example, if this command was run with `mycli arg1 arg2` it would be declared like this:

```js
import Command from '@oclif/command'

export class MyCLI extends Command {
  static args = [
    {name: 'firstArg'},
    {name: 'secondArg'},
  ]

  async run() {
    // can get args as an object
    const {args} = this.parse(MyCLI)
    console.log(`running my command with args: ${args.firstArg}, ${args.secondArg}`)
    // can also get the args as an array
    const {argv} = this.parse(MyCLI)
    console.log(`running my command with args: ${argv[0]}, ${argv[1]}`)
  }
}
```

Here are the options arguments can have:
```js
static args = [
  {
    name: 'file',                  // name of arg to show in help and reference with args[name]
    required: false,               // make the arg required with `required: true`
    description: 'file to output', // help description
    // hidden: true,               // hide this arg from help
    // parse: input => 'output',   // instead of the user input, return a different value
    // default: 'world',           // default value if no arg input
    // options: ['a', 'b'],        // only allow input to be from a discrete set
  }
]
```

# 🔨 Flag Options

Flag options are non-positional arguments passed to the command. For example, if this command was run like this:

```
$ mycli --force --file=./myfile
```

_= is optional_

It would be declared like this:

```js
import Command, {flags} from '@oclif/command'

export class MyCLI extends Command {
  static flags = {
    // can pass either --force or -f
    force: flags.boolean({char: 'f'}),
    file: flags.string(),
  }

  async run() {
    const {flags} = this.parse(MyCLI)
    if (flags.force) console.log('--force is set')
    if (flags.file) console.log(`--file is: ${flags.file}`)
  }
}
```

Here are the options flags can have:

```js
static flags = [
  name: flags.string({
    char: 'n',                    // shorter flag version
    description: 'name to print', // help description for flag
    hidden: false,                // hide from help
    multiple: false,              // allow setting this flag multiple times
    // env: 'MY_NAME',            // default to value of environment variable
    // options: ['a', 'b'],       // only allow the value to be from a discrete set
    // parse: input => 'output',  // instead of the user input, return a different value
    // default: 'world',          // default value if flag not passed
    // required: false,           // make flag required (this is not common and you should probably use an argument instead)
  }),

  // flag with no value (-f, --force)
  force: flags.boolean({
    char: 'f',
    // by default boolean flags may also be reversed with `--no-` (in this case: `--no-force`)
    // the flag will be set to false if reversed
    // set this to false to disable this functionality
    // allowNo: false,
  }),
]
```

## Custom Flags

For larger CLIs, it can be useful to declare a custom flag that can be shared amongst multiple commands. Here is an example of a custom flag:

```js
// src/flags.ts
import {flags} from '@oclif/command'
function getTeam() {
  // imagine this reads a configuration file or something to find the team
}
export const team = flags.build({
  char: 't',
  description: 'team to use',
  default: () => getTeam(),
})

// src/commands/mycommand.ts
import {team} from '../flags'
import Command from '@oclif/command'

export class MyCLI extends Command {
  static flags = {
    team: team(),
  }

  async run() {
    const {flags} = this.parse(MyCLI)
    if (flags.team) console.log(`--team is ${flags.team}`)
  }
}
```

In the Heroku CLI, we use flags for our `--app` flag which takes advantage of a lot of functionality. It can be useful [to see how that is done](https://github.com/heroku/cli-engine-heroku/blob/oclif/src/flags/app.ts) to get ideas for making custom flags.

# 👥 Aliases

Aliases let you define a string that maps to a command. This command can be run as `mycli config`, `mycli config:index`, or `mycli config:list`: (this only applies to multi-CLIs)

```js
import Command, {flags} from '@oclif/command'

export class ConfigIndex extends Command {
  static aliases = ['config:index', 'config:list']
}
```

# ⚙️ Other Command Options

[See the base class to get an idea of what methods can be called on a command](https://github.com/oclif/command/blob/master/src/command.ts).

```js
import Command, {flags} from '@oclif/command'

export class MyCommand extends Command {
  static description = `
description of my command
can be multiline
`

  // hide the command from help
  static hidden = false

  // custom usage string for help
  // this overrides the default usage
  static usage = 'mycommand --myflag'

  // examples to add to help
  // each can be multiline
  static examples = [
    '$ mycommand --force',
    '$ mycommand --help',
  ]

  // this makes the parser not fail when it receives invalid arguments
  // defaults to true
  // set it to false if you need to accept variable arguments
  static strict = false

  async run() {
    // show a warning
    this.warn('uh oh!')
    // exit with an error message
    this.error('uh oh!!!')
    // exit with status code
    this.exit(1)
  }
}
```

# 🌱 Command Base Class

Use inheritance to share functionality between common commands:

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

  async init(err) {
    // do some initialization
    const {flags} = this.parse(this.constructor)
    this.flags = flags
  }
  async catch(err) {
    // handle any error from the command
  }
  async finally(err) {
    // called after run and catch regardless of whether or not the command errored
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
# 🏭 Related Repositories

* [@oclif/command](https://github.com/oclif/command) - Base command for oclif. This can be used directly without the generator.
* [@oclif/config](https://github.com/oclif/config) - Most of the core setup for oclif lives here.
* [@oclif/errors](https://github.com/oclif/errors) - Renders and logs errors from commands.
* [@oclif/cli-ux](https://github.com/oclif/cli-ux) - Library for common CLI UI utilities.
* [@oclif/test](https://github.com/oclif/test) - Test helper for oclif.

# 🦔 Learn More

* [Salesforce Release Announcement](https://engineering.salesforce.com/open-sourcing-oclif-the-cli-framework-that-powers-our-clis-21fbda99d33a)
* [Heroku Release Announcement](https://blog.heroku.com/open-cli-framework)

# 📣 Feedback

If you have any suggestions or just want to let us know what you think of oclif, send us a message at <heroku-cli@salesforce.com>
