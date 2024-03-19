---
title: Commands
---

A basic command looks like the following in TypeScript:

```js
import {Command} from '@oclif/core'

export class MyCommand extends Command {
  static description = 'description of this example command'

  async run(): Promise<void> {
    console.log('running my command')
  }
}
```

The only part that is required is the run function. Accept user input with [arguments](args.md) and [flags](flags.md).

In JavaScript:

```js
const {Command} = require('@oclif/core')

class MyCommand extends Command {
  async run() {
    console.log('running my command')
  }
}

MyCommand.description = 'description of this example command'

module.exports = MyCommand
```

Note that the following examples will be in TypeScript. As JavaScript does not yet have static class properties, you will have to add them to the class after it is declared like we did with the description above.

### Avoiding Timeouts

In order to avoid command executions running indefinitely, oclif will terminate the node process 10 seconds after `Command.run` resolves. This means that all command logic inside the `run` method should either run synchronously or should return a `Promise`. This will allow the entire command to run before the 10 second timeout starts.

In other words, **if you execute a promise in `Command.run` without a awaiting it, then the command will likely timeout before it's completed.**

### Other Command Options

[See the base class to get an idea of what methods can be called on a command](https://github.com/oclif/core/blob/main/src/command.ts).

```typescript
import {Command, Flags} from '@oclif/core'

export class MyCommand extends Command {
  static summary = 'A brief overview of your command.'
  static description = `
An in-depth description of the command.
It can be multiline.
`

  // hide the command from help
  static hidden = false

  // custom usage string for help
  // this overrides the default usage
  static usage = 'mycommand --myflag'

  // examples to add to help
  // <%= config.bin %> resolves to the executable name
  // <%= command.id %> resolves to the command name
  static examples = [
    // Examples can be simple strings
    '<%= config.bin %> <%= command.id %> --help',
    // Or objects that provide a description of the example command
    {
      description: 'Force the command to execute',
      command: '<%= config.bin %> <%= command.id %> --force',
    }
  ]

  // this makes the parser not fail when it receives invalid arguments
  // defaults to true
  // set it to false if you need to accept a variable number of arguments
  static strict = false

  // define aliases that can execute this command.
  static aliases = ['alternate:name:for:this:command']

  // Set to true if you want to add the --json flag to your command.
  // oclif will automatically suppress logs (if you use this.log, this.warn, or this.error) and
  // display the JSON returned by the command's run method.
  static enableJsonFlag = true

  async run() {
    // show a warning
    this.warn('uh oh!')
    // exit with an error message
    this.error('uh oh!!!')
    // exit with status code
    this.exit(1)
  }
}
```

## Command Methods

- [Command Methods](#command-methods)
  - [`this.log(message: string)`](#thislogmessage-string)
  - [`this.warn(message: string | Error)`](#thiswarnmessage-string--error)
  - [`this.error(message: string | Error, options?: {code?: string, exit?: number, ref?: string; suggestions?: string[];})`](#thiserrormessage-string--error-options-code-string-exit-number-ref-string-suggestions-string)
  - [`this.exit(code: number = 0)`](#thisexitcode-number--0)
  - [`this.logToStderr(message: string)`](#thislogtostderrmessage-string)
  - [`this.jsonEnabled()`](#thisjsonenabled)
  - [`this.toSuccessJson(result: unknown)`](#thistosuccessjsonresult-unknown)
  - [`this.toErrorJson(result: unknown)`](#thistoerrorjsonresult-unknown)


The following assumes you are in the `run()` method of an oclif [command](commands.md).

### `this.log(message: string)`

Output message to stdout (non-blocking). `console.log()` works fine too, but that is a blocking call and won't be automatically suppressed when the `--json` flag is present. This uses [util.format()](https://nodejs.org/api/util.html#util_util_format_format_args) which behaves the same as `console.log()`.

```typescript
this.log('hello, world!')
```

### `this.warn(message: string | Error)`

Display an error or message as a warning

```typescript
this.warn('uh oh!')
this.warn(new Error('uh oh!'))
```

### `this.error(message: string | Error, options?: {code?: string, exit?: number, ref?: string; suggestions?: string[];})`

Display error and exit. Also add a code to error object or exit status.

```typescript
this.error('uh oh!', {exit: 2})
this.error(new Error('uh oh!'))
```

The options object has the following options:
* `exit` — exit code to use
* `code` — a unique error code for the type of error
* `suggestions` —  an array of suggestions for a user to try next that may be useful or provide additional context
* `ref` — a url to documentation related to this error or fixing it

The `message`, `code`, `suggestions`, `ref` properties will be displayed when an error is shown. Reusable `Error` classes can be created that display the optional outputs above by implementing the `PrettyPrintableError` interface from the `Errors` namespace from `@oclif/core` and `this.error` will handle them appropriately.

These errors are friendly and won't show a traceback unless debugging is enabled with `DEBUG=*`.

```typescript
import {CLIError} from '@oclif/errors'

throw new CLIError('my friendly error')
```

Any error caught by the command of this `CLIError` type will be shown without traceback.

### `this.exit(code: number = 0)`

Exit process. Defaults to status 0.

```typescript
this.exit()
this.exit(1)
```

### `this.logToStderr(message: string)`

Log a message to the terminal's `stderr`.

### `this.jsonEnabled()`

Returns to `true` if the `--json` flag is present and `enableJsonFlag` is set to `true`

### `this.toSuccessJson(result: unknown)`

Modify the command's success JSON output before it's displayed to the user.

### `this.toErrorJson(result: unknown)`

Modify the command's error JSON output before it's displayed to the user.
