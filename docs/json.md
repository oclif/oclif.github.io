---
title: JSON
---

If you want to use the `--json` flag to return JSON output to the user, then you can set the `enableJsonFlag` property on the `Command` class.

When this property is set and the user supplies the `--json` flag, the command will supress all console logs and instead log the return value to the console in JSON format

```typescript
import {Command} from '@oclif/core'
export class HelloCommand extends Command {
  static enableJsonFlag = true
  public async run(): Promise<{ message: string }> {
    console.log('hello, world!')
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
