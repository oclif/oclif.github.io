---
title: Running Commands Programmatically
---

If you need to run a command from another, or programmatically run a command in another codebase, there are a couple options.

First, it is generally a bad idea to run a command directly as the command exports a user interface, not a code interface. It's a design smell that should rarely (if ever) be used. Generally speaking, it's better to break up the code so that it can be called directly rather than as a command. We'll show this better method first.

## Sharing code with modules

For example, suppose you have a `config list` command that outputs config vars of an app to the terminal.

**./src/commands/config/list.ts**

```typescript
export class ConfigList extends Command {
  static flags = {
    app: Flags.string({required: true})
  }

  async run() {
    const {flags} = await this.parse(ConfigList)
    const config = await api.get(`/apps/${flags.app}/config-vars`)
    for (let [key, value] of Object.entries(config)) {
      this.log(`${key}=${value}`)
    }
  }
}
```

Then suppose you have another command, `config update`, that updates the app's configuration and finally displays the new config vars to the terminal.

Since both `config list` and `config update` need to display the config vars in the exact same way, you should create a new module, function, or class that's responsible for creating the display.

For example:

**./src/commands/config/update.ts**

```typescript
import {displayConfigVars} from '../displayConfigVars'

export class ConfigUpdate extends Command {
  static flags = {
    app: Flags.string({required: true})
  }

  async run() {
    const {flags} = await this.parse(ConfigUpdate)
    await this.doUpdate(flags.app)
    await displayConfigVars(flags.app)
  }
}
```

**./src/displayConfigVars.ts**

```typescript
export async function displayConfigVars(app: string) {
  const config = await api.get(`/apps/${app}config-vars`)
  for (let [key, value] of Object.entries(config)) {
    this.log(`${key}=${value}`)
  }
}
```

This is the recommended way to share code. This can be extended further by putting shared code into its own npm package.

## Calling commands directly

Still, if you _really_ want to call a command directly, it's easy to do. You have a couple of options.

If you know that the command you want to run is installed in the CLI, you can use `this.config.runCommand`. For this, we could write our `config update` command like so:

**./src/commands/config/update.ts**

```typescript
export class ConfigUpdate extends Command {
  static flags = {
    app: Flags.string({required: true})
  }

  async run() {
    const {flags} = await this.parse(ConfigUpdate)
    await this.doUpdate(flags.app)
    await this.config.runCommand('config:list', ['--global'])
  }
}
```

The second option is to import the command directly and execute it directly like so:

**./src/commands/config/update.ts**

```typescript
import {ConfigList} from './config/list'

export class ConfigUpdate extends Command {
  static flags = {
    app: Flags.string({required: true})
  }

  async run() {
    const {flags} = await this.parse(ConfigUpdate)
    await this.doUpdate(flags.app)
    await ConfigList.run(['--global'])
  }
}
```

This works because commands have a static `.run()` [method on them](https://github.com/oclif/core/blob/main/src/command.ts) that can be used to instantiate the command and run the instance `.run()` method. It takes in the argv as input to the command.

But, again, we **strongly encourage** you to avoid these options. It's far better to extract any shared logic out of a `Command` class.
