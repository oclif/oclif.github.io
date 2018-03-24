---
title: Hooks
---

Oclif exposes lifecycle event hooks. Likewise you can create and run your own event hooks and share those hooks between commands in your.

A basic hook looks like the following in TypeScript:

```js
import {Hook} from '@oclif/config'

const hook: Hook<'init'> = async function (opts) {
  process.stdout.write(`example init hook running before ${opts.id}\n`)
}

export default hook
```

Or in JavaScript:

```js
const hook = async function (opts) {
    process.stdout.write(`example init hook running before ${opts.id}\n`);
};

module.exports = hook;
```

And declaring the hook's event name and file path under oclif's settings in `package.json`:

```js
  "oclif": {
    "commands": "./lib/commands",
    "hooks": {
      "init": "./lib/hooks/init/example.js"
    },
    ...
  },
```


See the <link to hook generator>.

### Event Hooks

Oclif exposes three event hooks, `init`, `prerun`, and `command_not_found`.

`init` is run before the command being run is searched for. If the provided command is not found, the `command_not_found` event is fun (see <link to command not found plugin>). Lastly, after a command if found but before it is run `prerun` is fired.

Hooking into these lifecycle events is as simple as declaring the hook file in `package.json` under oclif's settings and providing a function that accepts an options object (see <path to hooks objects>).

### Custom Hooks

Creating a custom hook is no different than for lifecycle hooks, except that you need to provide the event name in `package.json`.

For example, you could define an analytics post function that you will run in your command. First define:

```js
import {Hook} from '@oclif/config'

const hook: Hook<'analytics'> = async function (opts) {
  // code to post opts.id to analytics server
}

export default hook
```

```js
  "oclif": {
    "commands": "./lib/commands",
    "hooks": {
      "analytics": "./lib/hooks/analytics/post.js"
    },
    ...
  },
```

Then in any Command you want to invoke the hook run:

```js
//...
export class MyCommand extends Command {
  static description = 'description of this example command'

  async run() {
    this.config.runHook('analytics', {id: 'my_command'})
    ...
  }
}
//...
```
