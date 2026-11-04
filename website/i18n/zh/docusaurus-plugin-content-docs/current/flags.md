---
title: 命令标志
---

标志选项是传递给命令的非位置参数。标志可以是带参数的选项标志，也可以是不带参数的布尔标志。选项标志必须有参数。

例如，如果这个命令像这样运行：

```bash
$ mycli --force --file=./myfile
```

它将被声明为这样：

```typescript
import {Command, Flags} from '@oclif/core'

export class MyCLI extends Command {
  static flags = {
    // --force 或 -f 都能通过
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

_oclif 支持大范围的[可选标志输入](#可选标志输入)。_

以下是标志可以具有的选项：

```js
static flags = {
  name: Flags.string({
    // The following can be set on both boolean and option flag (e.g. string, integer, url, custom, etc) types.
    char: 'n',                                   // shorter flag version
    summary: 'brief summary',                    // help summary for flag
    helpLabel: '--my-flags',                     // The flag label to show in help. Defaults to "[-<char>] --<name>" where -<char> is only displayed if the char is defined.
    helpGroup: 'THE BEST FLAGS',                 // Put flag into THE BEST FLAGS group in help
    description: 'in-depth overview',            // help description for flag
    hidden: false,                               // hide from help
    multiple: false,                             // allow setting this flag multiple times
    env: 'MY_NAME',                              // default to value of environment variable
    options: ['a', 'b'],                         // only allow the value to be from a discrete set
    parse: async input => 'output',              // instead of the user input, return a different value
    default: 'world',                            // default value if flag not passed (can be an async function that returns a string or undefined)
    defaultHelp: 'a dynamic value'               // dynamic default value to show in help output (e.g. current working directory). Can be an async function that returns a string or undefined
    required: false,                             // make flag required
    aliases: ['username', 'u'],                  // aliases for the flag - can be short char or long flags
    aliases: ['u', 'n'],                         // single character aliases for the flag
    deprecated: false,                           // mark the flag as deprecated.
    deprecateAliases: false,                     // emit deprecation warning anytime a flag alias is provided
    noCacheDefault: false,                       // if true, the value returned by defaultHelp will not be cached in the oclif.manifest.json.
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
    ],
    // The following properties cannot be set on boolean flags
    helpValue: '<name>',                         // The flag value to show in help. Defaults to "<value>",
    multipleNonGreedy: false,                    // Parse one value per flag to allow `-m val1 -m val2` but disallow `-m val1 val2`. Only respected if multiple is set to true
    delimiter: ','                               // Delimiter to separate the values for a multiple value flag. Only respected if multiple is set to true. Default behavior is to separate on spaces.
    allowStdin: false,                           // Allow input value to be read from stdin if the provided value is `-`. Can also be set to `only` to allow flag to always read from stdin even if no value is provided.
  }),

  // flag with no value (-f, --force)
  force: Flags.boolean({
    // Boolean flags take all the same properties described in the previous example
    // in addition to:
    allowNo: true // Support reversible boolean flag with `--no-` prefix (e.g. `--no-force`). This is disabled by default.
  }),
}
```

## 自定义标志

对于较大的 CLI，声明可在多个命令之间共享的自定义标志可能很有用。下面是一个自定义标志的示例：

```typescript
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
  default: async () => getTeam(),
})

// src/commands/mycommand.ts
import {team} from '../flags'
import {Command} from '@oclif/core'

export class MyCLI extends Command {
  static flags = {
    team: team({
      required: true,
    }),
  }

  async run() {
    const {flags} = await this.parse(MyCLI)
    if (flags.team) console.log(`--team is ${flags.team.name}`)
  }
}
```

在 Salesforce CLI 中，我们大量使用自定义标志。比如说，

- [`salesforceId`](https://salesforcecli.github.io/sf-plugins-core/functions/flags_salesforceId.salesforceIdFlag.html) 标志，确保提供的字符串是有效的 Salesforce ID。
- [`duration`](https://salesforcecli.github.io/sf-plugins-core/functions/flags_duration.durationFlag.html) 标志，它将提供的整数转换为我们用于处理基于时间的值的 `Duration` 实例。

如果你想看更多的示例，通过[这里](https://github.com/salesforcecli/sf-plugins-core/tree/main/src/flags)查看。你也可以阅读 [API 文档](https://salesforcecli.github.io/sf-plugins-core/)。

## 可选标志输入

下面是用户可以使用输入标志的一些其他方式。这是假设命令有像 `-f, --file=file` 和 `-v, --verbose` 这样的标志（字符串和布尔标志）：

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

最后一个乍一看似乎有点奇怪，但它在 unix 中是相对标准的，并使像 `tar -xvzfmytarball.tar.gz` 这样的命令成为可能。

请参阅我们的博客文章 [CLI Flags Explained](../blog/2019/02/20/cli-flags-explained)，以深入了解 CLI 标志。
