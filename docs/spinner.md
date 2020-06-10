---
title: Spinner
---

[cli-ux](https://github.com/oclif/cli-ux) provides a simple `cli.action`, for more complex progress indicators we recommend using the [listr](https://www.npmjs.com/package/listr) library.

## `cli-ux.action`

Shows a basic spinner

```typescript
import {Command} from '@oclif/command'
import cli from 'cli-ux'

export class MyCommand extends Command {
  async run() {
    // start the spinner
    cli.action.start('starting a process')
    // do some action...
    // stop the spinner
    cli.action.stop() // shows 'starting a process... done'
    
    // show on stdout instead of stderr
    cli.action.start('starting a process', 'initializing', {stdout: true})    
    // do some action...
    // stop the spinner with a custom message
    cli.action.stop('custom message') // shows 'starting a process... custom message'
  }
}
```

This degrades gracefully when not connected to a TTY. It queues up any writes to stdout/stderr so they are displayed above the spinner.

![action demo](/img/action.gif)

## listr

Here is an example of the complex workflows supported by [listr](https://www.npmjs.com/package/listr).

![listr demo](/img/listr.gif)
