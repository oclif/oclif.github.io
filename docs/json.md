---
title: JSON
description: Native support for `--json` flag
---

If you want to use the `--json` flag to return JSON output to the user, then you can set the `enableJsonFlag` property on the `Command` class.

When this property is set and the user supplies the `--json` flag, the command will suppress all logs and instead log the return value to the console in JSON format. **Note** log suppression will only work if you use the logging methods on the `Command` class instance. In other words, `this.log` will be automatically suppressed but `console.log` will not be.

```typescript
import {Command} from '@oclif/core'
export class HelloCommand extends Command {
  public static enableJsonFlag = true
  public async run(): Promise<{ message: string }> {
    this.log('hello, world!')
    return { message: 'hello, world!' }
  }
}

```

```bash
$ my-cli hello
hello, world!
```

```bash
$ my-cli hello --json
{
  "message": "hello, world!"
}
```
