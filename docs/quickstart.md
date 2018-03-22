---
title: Features
---

# 🌈 CLI Types

With oclif you can create 2 different CLI types, single and multi.

Single CLIs are like `ls` or `cat`. They can accept arguments and flags. Single CLIs can [optionally be just be a single file](https://github.com/oclif/command).

Multi CLIs are like `git` or `heroku`. They have subcommands that are themselves single CLIs. In the `package.json` there is a field `oclif.commands` that points to a directory. This directory contains all the subcommands for the CLI. For example, if you had a CLI called `mycli` with the commands `mycli create` and `mycli destroy`, you would have a project like the following:

```
package.json
src/
└── commands/
    ├── create.ts
    └── destroy.ts
```

Multi-command CLIs may also include [plugins](#-plugins).

See below for information on [nesting commands within topics](#-topics).

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

# 📦 Topics

As CLIs grow it can be useful to nest commands within topics. This is supported simply by placing command files in subdirectories. For example, with the Heroku CLI we have a topic `heroku config` with commands like `heroku config`, `heroku config:set` and `heroku config:get`. The directory structure looks like this:

```
package.json
src/
└── commands/
    └── config/
        ├── index.ts
        ├── set.ts
        └── get.ts
```

The help descriptions will be the description of the first command within a directory. If you'd like to customize the help description, add it to the `package.json` like so:

```js
{
  "oclif": {
    "topics": {
      "apps:favorites": { "description": "manage favorite apps" },
      "config": { "description": "manage heroku config variables" },
    }
  }
}
```

# 🎁 Plugins

* [@oclif/plugin-not-found](https://github.com/oclif/plugin-not-found) - Display a friendly "did you mean" message if a command is not found.
* [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins) - Allow users to add plugins to extend your CLI.
* [@oclif/plugin-update](https://github.com/oclif/plugin-update) - Add autoupdate support to the CLI.
* [@oclif/plugin-help](https://github.com/oclif/plugin-help) - Help plugin for oclif.
* [TODO: @oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete) - Add bash/zsh autocomplete.

# 💼 Building your own plugin

Writing code for plugins is essentially the same as writing within a CLI. They can export 3 different types: commands, hooks, and other plugins.

Run `npx oclif plugin mynewplugin` to create a plugin in a new directory. This will come with a sample command called `hello`.

<!-- commands -->
# Commands

* [oclif command NAME](#command-name)
* [oclif help [COMMAND]](#help-command)
* [oclif multi [PATH]](#multi-path)
* [oclif plugin [PATH]](#plugin-path)
* [oclif single [PATH]](#single-path)
## command NAME

add a command to an existing CLI or plugin

```
USAGE
  $ oclif command NAME

ARGUMENTS
  NAME  name of command

OPTIONS
  --defaults  use defaults for every setting
  --force     overwrite existing files
```

_See code: [src/commands/command.ts](https://github.com/oclif/oclif/blob/v1.4.9/src/commands/command.ts)_

## help [COMMAND]

display help for oclif

```
USAGE
  $ oclif help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v1.1.6/src/commands/help.ts)_

## multi [PATH]

generate a new multi-command CLI

```
USAGE
  $ oclif multi [PATH]

ARGUMENTS
  PATH  path to project, defaults to current directory

OPTIONS
  --defaults         use defaults for every setting
  --force            overwrite existing files
  --options=options  (typescript|tslint|semantic-release|mocha)
```

_See code: [src/commands/multi.ts](https://github.com/oclif/oclif/blob/v1.4.9/src/commands/multi.ts)_

## plugin [PATH]

create a new CLI plugin

```
USAGE
  $ oclif plugin [PATH]

ARGUMENTS
  PATH  path to project, defaults to current directory

OPTIONS
  --defaults         use defaults for every setting
  --force            overwrite existing files
  --options=options  (typescript|tslint|semantic-release|mocha)
```

_See code: [src/commands/plugin.ts](https://github.com/oclif/oclif/blob/v1.4.9/src/commands/plugin.ts)_

## single [PATH]

generate a new single-command CLI

```
USAGE
  $ oclif single [PATH]

ARGUMENTS
  PATH  path to project, defaults to current directory

OPTIONS
  --defaults         use defaults for every setting
  --force            overwrite existing files
  --options=options  (typescript|tslint|semantic-release|mocha)
```

_See code: [src/commands/single.ts](https://github.com/oclif/oclif/blob/v1.4.9/src/commands/single.ts)_
<!-- commandsstop -->

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
