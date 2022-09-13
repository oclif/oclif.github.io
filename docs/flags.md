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
import {Command, Flags} from '@oclif/core'

export class MyCLI extends Command {
  static flags = {
    // can pass either --force or -f
    force: Flags.boolean({char: 'f'}),
    file: Flags.string(),
  }

  async run() {
    const {flags} = await this.parse(MyCLI)
    if (flags.force) console.log('--force is set')
    if (flags.file) console.log(`--file is: ${flags.file}`)
  }
}
```

_oclif supports a wide range of [alternative flag inputs](#alternative-flag-inputs)._

Here are the options flags can have:

```js
static flags = {
  name: Flags.string({
    char: 'n',                                   // shorter flag version
    summary: 'brief summary',                    // help summary for flag
    helpGroup: 'THE BEST FLAGS',                 // Put flag into THE BEST FLAGS group in help
    description: 'in-depth overview',            // help description for flag
    hidden: false,                               // hide from help
    multiple: false,                             // allow setting this flag multiple times
    env: 'MY_NAME',                              // default to value of environment variable
    options: ['a', 'b'],                         // only allow the value to be from a discrete set
    parse: async input => 'output',              // instead of the user input, return a different value
    default: 'world',                            // default value if flag not passed (can be an async function that returns a string or undefined)
    required: false,                             // make flag required
    dependsOn: ['extra-flag'],                   // this flag requires another flag
    exclusive: ['extra-flag'],                   // this flag cannot be specified alongside this other flag
    exactlyOne: ['extra-flag', 'another-flag'],  // exactly one of these flags must be provided
    relationships: [                             // define complex relationships between flags
      // Make this flag dependent on all of these flags
      {type: 'all', flags: ['flag-one', 'flag-two']}
      // Make this flag dependent on at least one of these flags
      {type: 'some', flags: ['flag-three', 'flag-four']}
      // Make this flag exclusive of all these flags
      {type: 'none', flags: ['flag-five', 'flag-six']}

      // Make this flag dependent on all of these flags
      {type: 'all', flags: [
        'flag-one',
        'flag-two',
        // Include flag-seven but only when flag-eight is equal to FooBar
        {name: 'flag-seven', when: async (flags) => flags['flag-eight'] === 'FooBar'}
      ]}
    ]
  }),

  // flag with no value (-f, --force)
  force: Flags.boolean({
    char: 'f',                    // short character for flag
    default: true,                // default value if flag not passed (can be a function that returns a boolean)
    env: 'MY_NAME',               // default value to the value of an environment variable
    // boolean flags may be reversed with `--no-` (in this case: `--no-force`).
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
import {Flags} from '@oclif/core'

class Team {
  public name: string;
  // etc...
}

function getTeam(): Promise<Team> {
  // imagine this reads a configuration file or something to find the team
  return new Team()
}

export const team = Flags.custom<Team>({
  char: 't',
  description: 'team to use',
  default: () => getTeam(),
})

// src/commands/mycommand.ts
import {team} from '../flags'
import {Command} from '@oclif/core'

export class MyCLI extends Command {
  static flags = {
    team: team(),
  }

  async run() {
    const {flags} = await this.parse(MyCLI)
    if (flags.team) console.log(`--team is ${flags.team.name}`)
  }
}
```

In the Salesforce CLI we make heavy use of custom flags. For example,

- A [`salesforceId`](https://salesforcecli.github.io/sf-plugins-core/globals.html#salesforceidflag) flag that ensures the provided string is a valid Salesforce Id.
- A [`duration`](https://salesforcecli.github.io/sf-plugins-core/globals.html#durationflag) flag that converts a provided integer into a `Duration` instance that we use for working with time based values.

These and more are located [here](https://github.com/salesforcecli/sf-plugins-core/tree/main/src/flags) if you want to see more examples. You can also read the [API docs](https://salesforcecli.github.io/sf-plugins-core/globals.html).



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
