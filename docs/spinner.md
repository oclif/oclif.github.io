---
title: Spinner
---

## `cli-ux.action`

Shows a basic spinner

```typescript
// start the spinner
cli.action.start('starting a process')
// show on stdout instead of stderr
cli.action.start('starting a process', {stdout: true})

// stop the spinner
cli.action.stop() // shows 'starting a process... done'
cli.action.stop('custom message') // shows 'starting a process... custom message'
```

This degrades gracefully when not connected to a TTY. It queues up any writes to stdout/stderr so they are displayed above the spinner.

![action demo](/img/action.gif)

## listr

Use [listr](https://www.npmjs.com/package/listr) for complex workflows like this:

![listr demo](/img/listr.gif)
