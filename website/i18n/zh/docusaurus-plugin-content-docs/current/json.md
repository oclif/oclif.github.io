---
title: JSON
description: 原生支持 `--json` 标志
---

如果你想使用 `--json` 标志将 JSON 输出返回给用户，则可以在 `Command` 类上设置 `enableJsonFlag` 属性。

当设置了此属性并且用户提供了 `--json` 标志时，该命令将阻止所有日志，而是以 JSON 格式将返回值记录到控制台。**注意**，只有当你在 `Command` 类实例上使用日志记录方法时，日志阻止才会起作用。换句话说，`this.log` 将被自动阻止，但 `console.log` 不会。

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
