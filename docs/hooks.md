---
title: Hooks
---

oclif exposes lifecycle event hooks such as `init` and `command_not_found`. [See below for a list of all the lifecycle events](#lifecycle-events). In addition to these built-in events, you can create your own events and allow commands/plugins to watch for these custom events. It's a great way to allow multiple plugins to interact with each other.

Multiple hooks are run in parallel. **This behavior may change in a future release.**

A basic hook looks like the following in TypeScript:

```typescript
import {Hook} from '@oclif/core'

const hook: Hook.Init = async function (options) {
  console.log(`example init hook running before ${options.id}`)
}

export default hook
```

The hook must also be declared with the event's name and hook's file path under oclif's settings in `package.json`:

```json
"oclif": {
  "commands": "./lib/commands",
  "hooks": {
    "init": "./lib/hooks/init/example"
  }
}
```

Multiple hooks of the same event type can be declared with an array.

```json
"oclif": {
  "commands": "./lib/commands",
  "hooks": {
    "init": [
      "./lib/hooks/init/example",
      "./lib/hooks/init/another_hook"
    ]
  }
}
```

You can create hooks with `oclif generate hook myhook --event=init`.

## Lifecycle Events

* `init` - runs when the CLI is initialized before a command is found to run
* `prerun` - runs after `init` and after the command is found, but just before running the command itself
* `command_not_found` - runs if a command is not found before the error is displayed
* `command_incomplete` - runs if a command is not found but it is a partial of an existing command. Only works if [flexible taxonomy](./flexible_taxonomy.md) is enabled. Useful for instances where you'd like to present a prompt with all the matching commands. See Salesforce CLI's [implementation](https://github.com/salesforcecli/cli/blob/main/src/hooks/incomplete.ts).
* `jit_plugin_not_installed` - runs if a command from a [JIT plugin](./jit_plugins.md) is executed but the plugin isn't installed yet. See Salesforce CLI's [implementation](https://github.com/salesforcecli/plugin-trust/blob/main/src/hooks/jitPluginInstall.ts).
* `preparse` - runs before flags and args are parsed and validated. Useful if you need to manipulate the input. See Salesforce CLI's [implementation](https://github.com/salesforcecli/cli/blob/main/src/hooks/preparse.ts). This can only be implemented by the root CLI.
* `postrun` - runs after the command only if the command finishes with no error
* `finally` - runs after the command finishes, regardless of the command's exit status

## Custom Events

Custom events are just like lifecycle events, but you need to call `this.config.runHook()` to fire the event.

For example, you could define an analytics post function that you will run in your command after submitting analytics telemetry. First define:

**src/hooks/analytics/post.ts**

```typescript
const hook = async function (options: {id: string}) {
  // code to post options.id to analytics server
}

export default hook
```

**package.json**
```js
  "oclif": {
    "commands": "./lib/commands",
    "hooks": {
      "analytics": "./lib/hooks/analytics/post"
    },
  },
```

Then in any command you want to trigger the event:

```js
export class extends Command {
  async run() {
    // emit analytics
    await this.config.runHook('analytics', {id: 'my_command'})
  }
}
```

If you need to exit during a hook, use `options.context.error()` or `options.context.exit()`. Throwing an `Error` will not cause the CLI to exit - this is to prevent an issues such a single plugin's `init` hook causing a CLI to immediately fail on every command execution.
