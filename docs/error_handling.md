---
title: Error Handling
description: Customize error handling
---

oclif handles intentionally - and unintentionally - thrown errors in two places. First in the `Command.catch` method and then, finally, in the `bin/run.js` `catch` handler where the Error is printed and the CLI exits. This error flow makes it possible for you to control and respond to errors that occur in your CLI as you see fit.

## Error Handling in the `catch` method

Every `Command` instance has a `catch` method that is called when an error occurs throughout the course of a command run. This method handles the edge case of users asking for help or version output, if applicable, otherwise, it re-throws the error. You can extend or overwrite the `catch` method in your command class.

```js
import {Command, flags} from '@oclif/core'

export default class Hello extends Command {
  async catch(error) {
    // do something or
    // re-throw to be handled globally
    throw error;
  }
}
```

If this type of error handling is being implemented across multiple commands consider using a [Custom Base Class](./base_class.md) for your commands and overriding the `catch` method.

## bin/run.js `catch` handler

Every oclif CLI has a `./bin/run.js` file that is the entry point of command invocation. Errors that occur in the CLI, including re-thrown errors from a Command, are caught and handled by oclif's `handle` function, which displays the error to the user.

If you generated your CLI using `oclif generate`, then you will see an `execute` function that's responsible for running the CLI and catching any errors. You can, however, implement this yourself if you need to customize the error handling.

Here's the generic `bin/run.js` that comes with `oclif generate`:

```javascript
#!/usr/bin/env node

import {execute} from '@oclif/core'

await execute({dir: import.meta.url})
```

To customize error handling, you'll want to use oclif's `run` function instead of `execute`:

```javascript
#!/usr/bin/env node

import {run, handle, flush} from '@oclif/core'

await run(process.argv.slice(2), import.meta.url)
  .catch(async (error) => handle(error))
  .finally(async () => flush())
```

The `catch` handler can be swapped for any function that receives an error argument. If you chose to implement your own handler here, we still recommend you delegate finally to the `handle` function for clean-up and exiting logic.

```js
.catch((error) => {
  // do any extra work with error
  return handle(error);
})
```
