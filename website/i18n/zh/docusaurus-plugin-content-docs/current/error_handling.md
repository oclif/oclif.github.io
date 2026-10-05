---
title: 错误处理
description: 自定义错误处理
---

oclif 会在两个地方处理有意或无意抛出的错误。首先是在 `Command.catch` 方法中，最后是在 `bin/run.js` `catch` 处理程序中，错误信息将被打印并退出 CLI。通过这种错误流程，你可以控制和响应 CLI 中出现的错误。

## 在 `catch` 方法中进行错误处理

每个 `Command` 实例都有一个 `catch` 方法，在命令运行过程中出现错误时会调用该方法。如果适用，该方法会处理用户请求帮助或版本输出的边缘情况，否则会重新抛出错误。你可以在命令类中继承或重写 `catch` 方法。

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

如果要在多个命令中执行这种类型的错误处理，可以考虑为命令使用[自定义基类](base_class.md)并重写 `catch` 方法。

## bin/run.js `catch` 处理器

每个 oclif CLI 都有一个./bin/run.js文件，它是命令调用的入口点。CLI 中出现的错误（包括从命令中重新抛出的错误）由 oclif 的 `handle` 函数捕获和处理，并将错误显示给用户。

如果你使用 `oclif generate` 生成了 CLI，那么你将看到一个 `execute` 函数，它负责运行 CLI 并捕获任何错误。不过，如果你需要自定义错误处理，也可以自己实现。

这是由 `oclif generate` 自带的通用 `bin/run.js`：

```javascript
#!/usr/bin/env node

import {execute} from '@oclif/core'

await execute({dir: import.meta.url})
```

要自定义错误处理，需要使用 oclif 的 `run` 函数，而不是 `execute`：

```javascript
#!/usr/bin/env node

import {run, handle, flush} from '@oclif/core'

await run(process.argv.slice(2), import.meta.url)
  .catch(async (error) => handle(error))
  .finally(async () => flush())
```

`catch` 处理器可以替换任何接收错误参数的函数。如果你选择在此实现自己的处理程序，我们仍然建议你将清理和退出逻辑的工作最终委托给 `handle` 函数。

```js
.catch((error) => {
  // do any extra work with error
  return handle(error);
})
```
