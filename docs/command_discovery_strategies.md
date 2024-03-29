---
title: Command Discovery Strategies
---

When oclif loads a plugin is must find all the commands within that plugin that can be executed. There a three strategies for discovering these commands:

1. `pattern` - this is the default behavior that finds commands based on glob patterns.
2. `explicit` - find commands that are exported from a specified file.
3. `single` - CLI contains a single command executed by top-level bin.

### `pattern` Strategy

The `pattern` strategy tells oclif to use a predefined set of globs to find command files in a specified directory. This is the default behavior of oclif unless otherwise stated.

Plugins can point the `commands` property to a directory

```json
{
  "oclif": {
    "commands": "./dist/commands",
  }
}
```

This will tell oclif to look for commands in that directory (this is skipped if an `oclif.manifest.json` is present)

Alternatively, you can set this configuration which will do the exact same thing:

```json
{
  "oclif": {
    "commands": {
      "strategy": "pattern",
      "target": "./dist/commands"
    }
  }
}
```

You also have the ability to set `globPatterns`, which override the glob patterns that oclif uses when searching for command files:

```json
{
  "oclif": {
    "commands": {
      "strategy": "pattern",
      "target": "./dist/commands",
      "globPatterns": [
         "**/*.+(js|cjs|mjs|ts|tsx|mts|cts)",
        "!**/*.+(d.*|test.*|spec.*|helpers.*)?(x)"
      ]
    }
  }
}
```

This is useful if you like to put test or helper files in the same directory as your command files.

### `explicit` Strategy

The `explicit` strategy tells oclif to import commands from a single file. In this case the `target` is the file that exports the commands and `identifier` is the name of the export (defaults to `default`).

To use this you would add a new file (e.g. `src/commands.ts`) and then add this configuration to the package.json

```json
{
  "oclif": {
    "commands": {
      "strategy": "explicit",
      "target": "./dist/index.js",
      "identifier": "COMMANDS",
    }
  }
}
```

`src/index.ts` would then need to have an export with the same name as the `identifier` (if not set, it defaults to `default`) that's an object of command names to command classes, e.g.

```typescript
import Hello from './commands/hello'
import HelloWorld from './commands/hello/world'

export const COMMANDS = {
  hello: Hello,
  'hello:world': HelloWorld,
  howdy: Hello, // alias the `hello` command to `howdy`
}
```

The `explicit` strategy is useful to those who can't rely on file paths because they've bundled their code (see [Bundling](#bundling)) but it can also be used if you simply prefer to be more explicit about your commands instead of relying on oclif "magically" finding commands from the file system.

It can also be leveraged to create or modify commands at runtime (e.g. internationalize messages at runtime or add flags to a command based on an API spec - see [dynamic commands](#dynamic-commands) section below).

#### Hooks

Hooks can also be defined using the `explicit` strategy:

```json
"oclif": {
    "hooks": {
      "init": {
        "target": "./dist/index.js",
        "identifier": "INIT_HOOK"
      }
    }
}
```

```typescript
// src/index.ts
import Hello from './commands/hello'
import HelloWorld from './commands/hello/world'
export {default as INIT_HOOK} from './hooks/init/init.js'

export const COMMANDS = {
  hello: Hello,
  'hello:world': HelloWorld,
  howdy: Hello, // alias the `hello` command to `howdy`
}
```

That configuration is essentially telling oclif to look for an `INIT_HOOK` export inside of `./dist/index.js`

#### Bundling

**We do not support bundling** given the endless number of tools + configurations that could be used. But if you choose to use a bundler, like `esbuild`, there are a couple hard requirements - you must have a package.json in your root directory and a `bin/run` or `bin/run.js` bin script. _This means that you will not be able to successfully bundle your entire CLI (src code, package.json, node_modules, etc) into a single file._

If you still want to use a bundler, you can reference this [example repo](https://github.com/oclif/plugin-test-esbuild/).

#### Dynamic Commands

You can also use the `explicit` strategy if you want to manipulate or create commands at runtime. Please note that such usage of the `explicit` strategy **cannot** be used with an `oclif.manifest.json`, which will have significant performance implications for your CLI in production.

Example:
```typescript
// src/index.ts
import {Command, Flags} from '@oclif/core'

import Hello from './commands/hello'
import HelloWorld from './commands/hello/world'

const dynamicCommands: Record<string, Command.Class> = {}
if (process.env.DYNAMIC_COMMAND) {
  dynamicCommands[process.env.DYNAMIC_COMMAND] = class extends Command {
    static flags = {
      flag1: Flags.boolean({description: 'flag1 description'}),
    }

    async run(): Promise<void> {
      const {flags} = await this.parse(this.constructor as Command.Class)
      this.log('hello from', this.id, flags)
    }
  }
}

export const COMMANDS = {
  hello: Hello,
  'hello:world': HelloWorld,
  ...dynamicCommands,
}
```

```
❯ DYNAMIC_COMMAND=foo:bar:baz bin/run.js foo bar baz --flag1
hello from foo:bar:baz { flag1: true }
```

### `single` Strategy

The `single` strategy tells oclif that this CLI contains a single command that can be executed by the `bin/run.js` (e.g. `ls` or `cat`).

```json
{
  "oclif": {
    "commands": {
      "strategy": "single",
      "target": "./dist/index.js"
    }
  }
}
```

In this example, `./dist/index.js` exports the command class.

### Note about `oclif.manifest.json`
For all strategies, the `oclif.manifest.json` will be used to load the commands instead of the default behavior of the strategy.



