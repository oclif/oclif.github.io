---
title: Hooks
---

oclif exposes lifecycle event hooks such as `init` and `command_not_found`. [See below for a list of all the lifecycle events](#lifecycle-events). In addition to these built-in events, you can create your own events and allow commands/plugins to watch for these custom events. It's a great way to allow multiple plugins to interact with each other.

Multiple hooks are run in parallel. **This behavior may change in a future release.**

A basic hook looks like the following in TypeScript:

```typescript
import {Hook} from '@oclif/config'

export const hook: Hook<'init'> = async function (options) {
  console.log(`example init hook running before ${options.id}`)
}
```

Or in JavaScript:

```js
module.exports = async function (options) {
  console.log(`example init hook running before ${options.id}`)
}
```

The hook must also be declared with the event's name and hook's file path under oclif's settings in `package.json`:

```js
  "oclif": {
    "commands": "./lib/commands",
    "hooks": {
      "init": "./lib/hooks/init/example"
    }
  }
```

Multiple hooks of the same event type can be declared with an array.

```js
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

You can create hooks with `oclif hook myhook --event=init`.

## Lifecycle Events

* `init` - runs when the CLI is initialized before a command is found to run
* `prerun` - runs after `init` and after the command is found, but just before running the command itself
* `postrun` - runs after the command only if the command finishes with no error
* `command_not_found` - runs if a command is not found before the error is displayed

## Custom Events

Custom events are just like lifecycle events, but you need to call `this.config.runHook()` to fire the event.

For example, you could define an analytics post function that you will run in your command after submitting analytics telemetry. First define:

**src/hooks/analytics/post.ts**

```typescript
export default const hook = async function (options: {id: string}) {
  // code to post options.id to analytics server
}
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

If you need to exit during a hook, use `this.error()` or `this.exit()`. Otherwise the hook will just emit a warning. This is to prevent an issue such as a plugin failing in `init` causing the entire CLI to not function.
