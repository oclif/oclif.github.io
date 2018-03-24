---
title: Hooks
---

oclif exposes lifecycle event hooks such as `init` and `command_not_found`. [See below for a list of all the lifecycle events](#lifecycle-events). In addition to these built-in events, you can create your own events and allow commands/plugins to watch for these custom events. It's a great way to allow multiple plugins to interact with each other.

A basic hook looks like the following in TypeScript:

```typescript
import {Hook} from '@oclif/config'

export default const hook: Hook<'init'> = async function (opts) {
  console.log(`example init hook running before ${opts.id}\n`)
}
```

Or in JavaScript:

```js
const hook = async function (opts) {
  console.log(`example init hook running before ${opts.id}\n`);
};

module.exports = hook;
```

The hook must also be declared with the event's name and hook's file path under oclif's settings in `package.json`:

```js
  "oclif": {
    "commands": "./lib/commands",
    "hooks": {
      "init": "./lib/hooks/init/example.js"
    },
    ...
  },
```

You can create hooks with `oclif hook myhook --event=init`.

### Lifecycle Events

* `init` - runs when the CLI is initialized before a command is found to run
* `prerun` - runs after `init` and after the commmand is found to run, but just before running the command
* `command_not_found` - run if a command is not found before the error is displayed

### Custom Events

Custom events are just like lifecycle events, but you need to call `this.config.runHook()` to fire the event.

For example, you could define an analytics post function that you will run in your command. First define:

**src/hooks/post_analytics.ts**
```js
import {Hook} from '@oclif/config'

export default const hook = async function (opts) {
  // code to post opts.id to analytics server
}
```

**package.json**
```js
  "oclif": {
    "commands": "./lib/commands",
    "hooks": {
      "analytics": "./lib/hooks/analytics/post.js"
    },
    ...
  },
```

Then in any command you want to trigger the event:

```js
//...
export class extends Command {
  async run() {
    this.config.runHook('analytics', {id: 'my_command'})
    ...
  }
}
//...
```
