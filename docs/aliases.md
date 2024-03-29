---
title: Aliases
description: Define aliases for commands, flags, and bins
---

## Command Aliases
Aliases let you define a string that maps to a command. This command can be run as `mycli config`, `mycli config:index`, or `mycli config:list`:

```js
import {Command, Flags} from '@oclif/core'

export class ConfigIndex extends Command {
  static aliases = ['config:index', 'config:list']
}
```

By default, aliases find the "real" command and just work.  If you're providing command aliases for backward compatibility but prefer users to use the "real" command, set `deprecateAliases` to `true` to warn users about the correct name

```js
export class ConfigIndex extends Command {
  static aliases = ['config:index', 'config:list']
  static deprecateAliases = true
}
```

## Flag Aliases

Like command aliases, but on an individual flag.  You can alias the name and short character, and optionally emit warnings when aliased names are used.

```js
export class ConfigIndex extends Command {
  static flags = {
    'new-name': Flags.boolean({
      char: 'c',
      aliases: ['old-name', 'o'],
      deprecateAliases: true
    })
  }
}

```

## Bin Aliases

Creating a CLI that responds to different names or "aliases" is easy, simply add a `binAliases` property to your CLI's `oclif` property in `package.json`:

```json
{
  "name": "mycli",
  "version": "0.0.0",
  "description": "My CLI",
  "main": "bin/run.js",
  "bin": {
    "mycli": "./bin/run.js",
    "mycli-alias": "./bin/run.js"
  },
  "oclif": {
    "binAliases": ["mycli", "mycli-alias"]
  }
}
```

Adding this property allows your CLI to respond to either of those names, and is used during the bundling and building process when shipping your CLI. Note that the `bin` section was also modified to include both aliases, which is how npm creates bin aliases. To create a unified experience, regardless of the installation method, a CLI author must change both to match. Bin aliases also play nicely with `@oclif/plugin-autocomplete`, so typing an alias and using autocomplete is the same experience as using the original name.

