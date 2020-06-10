---
title: Running Commands Programmatically
---

If you need to run a command from another, or programmatically run a command in another codebase, there are a couple options.

First, it is generally a bad idea to run a command directly as the command exports a user interface, not a code interface. It's a design smell that should rarely (if ever) be used. Generally speaking, it's better to break up the code so that it can be called directly rather than as a command. We'll show this better method first.

## Sharing code with modules

For example, if we use `heroku config` as an example, we could have a command that outputs the config vars of an app to the screen like this:

**./src/commands/config.ts**

```typescript
export class HerokuConfig extends Command {
  static flags = {
    app: flags.string({required: true})
  }

  async run() {
    const {flags} = this.parse(HerokuConfig)
    const config = await api.get(`/apps/${flags.app}/config-vars`)
    for (let [key, value] of Object.entries(config)) {
      this.log(`${key}=${value}`)
    }
  }
}
```

If we had another command such as `heroku release` that would do some logic then display these commands using the same logic, we should create a new module that we could call directly:

**./src/commands/release.ts**

```typescript
import {displayConfigVars} from '../display_config_vars'

export class HerokuRelease extends Command {
  static flags = {
    app: flags.string({required: true})
  }

  async run() {
    const {flags} = this.parse(HerokuRelease)
    await this.doRelease(flags.app)
    await displayConfigVars(flags.app)
  }
}
```

**./src/display_config_vars.ts**

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

Still, if you _really_ want to call a command directly, it's easy to do. For this, we could write our `heroku release` command like so:

**./src/commands/release.ts**

```typescript
import {HerokuConfig} from './config'

export class HerokuRelease extends Command {
  static flags = {
    app: flags.string({required: true})
  }

  async run() {
    const {flags} = this.parse(HerokuRelease)
    await this.doRelease(flags.app)
    await HerokuConfig.run(['--app', flags.app])
  }
}
```

This works because commands have a static `.run()` [method on them](https://github.com/oclif/command/blob/master/src/command.ts) that can be used to instantiate the command and run the instance `.run()` method. It takes in the argv as input to the command.

This works for both multi and single command CLIs.
