---
title: Error Handling
---

oclif handles intentionally - and unintentionally - thrown errors in two places. First in the `Command.catch` method and then, finally, in the bin/run `catch` handler where the Error is printed and the CLI exits. This error flow makes it possible for you to control and respond to errors that occur in your CLI as you see fit.

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

If this type of error handling is being implemented across multiple commands consider using a Custom Base Class (https://oclif.io/docs/base_class#docsNav) for your commands and overriding the `catch` method.

## bin/run `catch` handler

Every oclif CLI has a ./bin/run file that is the entry point of command invocation. Errors that occur in the CLI, including re-thrown errors from a Command, are caught here in the bin/run `catch` handler.

```js
.catch(require('@oclif/errors/handle'))
```

This catch handler uses the `@oclif/errors/handle` function to display (and cleanup, if necessary) the error to the user. This handler can be swapped for any function that receives an error argument.

If you chose to implement your own handler here, we still recommend you delegate finally to the `@oclif/errors/handle` function for clean-up and exiting logic.

```js
.catch((error) => {
  const oclifHandler = require('@oclif/errors/handle');
  // do any extra work with error
  return oclifHandler(error);
})
```
