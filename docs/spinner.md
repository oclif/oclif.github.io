---
title: Spinner
---

[@oclif/core](https://github.com/oclif/core) provides a simple `ux.action`, for more complex progress indicators we recommend using the [listr](https://www.npmjs.com/package/listr) library.

## `ux.action`

Shows a basic spinner

```typescript
import {Command, ux} from '@oclif/core'

export class MyCommand extends Command {
  async run() {
    // start the spinner
    ux.action.start('starting a process')
    // do some action...
    // stop the spinner
    ux.action.stop() // shows 'starting a process... done'

    // show on stdout instead of stderr
    ux.action.start('starting a process', 'initializing', {stdout: true})
    // do some action...
    // stop the spinner with a custom message
    ux.action.stop('custom message') // shows 'starting a process... custom message'
  }
}
```

This degrades gracefully when not connected to a TTY. It queues up any writes to stdout/stderr so they are displayed above the spinner.

![action demo](/img/action.gif)

## listr

Here is an example of the complex workflows supported by [listr](https://www.npmjs.com/package/listr).

![listr demo](/img/listr.gif)
