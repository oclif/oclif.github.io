---
title: Command Flags
---

Flag options are non-positional arguments passed to the command. Flags can either be option flags which take an argument, or boolean flags which do not. An option flag must have an argument.

For example, if this command was run like this:

```
$ mycli --force --file=./myfile
```

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

_oclif supports a wide range of [alternative flag inputs](#alternative-flag-inputs)._

Here are the options flags can have:

```js
static flags = {
  name: flags.string({
    char: 'n',                    // shorter flag version
    description: 'name to print', // help description for flag
    hidden: false,                // hide from help
    multiple: false,              // allow setting this flag multiple times
    env: 'MY_NAME',               // default to value of environment variable
    options: ['a', 'b'],          // only allow the value to be from a discrete set
    parse: input => 'output',     // instead of the user input, return a different value
    default: 'world',             // default value if flag not passed
    required: false,              // make flag required (this is not common and you should probably use an argument instead)
    dependsOn: ['extra-flag'],    // this flag requires another flag
    exclusive: ['extra-flag'],    // this flag cannot be specified alongside this other flag
  }),

  // flag with no value (-f, --force)
  force: flags.boolean({
    char: 'f',
    // boolean flags opt-in to being reversed with `--no-` (in this case: `--no-force`).
    // The flag will be set to false if reversed. This functionality
    // is disabled by default, to enable it:
    // allowNo: true
  }),
}
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

## Alternative Flag Inputs

Here are some other ways the user can use input flags. This is assuming the command has flags like `-f, --file=file` and `-v, --verbose` (string and boolean flag):

```sh-session
$ mycli --verbose
$ mycli -v
$ mycli --file=foo
$ mycli --file foo
$ mycli -f foo
$ mycli -f=foo
$ mycli -ffoo
$ mycli -vffoo
```

The last one seems a little odd at first glance, but it's relatively standard in unix and makes commands like `tar -xvzfmytarball.tar.gz` possible.
