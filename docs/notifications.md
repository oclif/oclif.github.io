---
title: Notifications
---

Use [node-notifier](https://github.com/mikaelbr/node-notifier) for cross-platform OS notifications.

Example:

```typescript
import {Command} from '@oclif/command'
import * as notifier from 'node-notifier'

export class MyCommand extends Command {
  async run() {
    notifier.notify({
      title: 'My notification',
      message: 'Hello!'
    })
  }
}
```

Demo:

![notification demo](/img/notification_demo.gif)

[node-notifier](https://github.com/mikaelbr/node-notifier) is capable of much more such as adding images, sounds, and even buttons and user input.
