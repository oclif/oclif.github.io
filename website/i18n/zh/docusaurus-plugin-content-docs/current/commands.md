---
title: 命令
---

一个基础的命令在 TypeScript 中看起来像下面这样：

```js
import {Command} from '@oclif/core'

export class MyCommand extends Command {
  static description = 'description of this example command'

  async run(): Promise<void> {
    console.log('running my command')
  }
}
```

唯一需要的部分是 run 函数。接受带有[参数](args.md)和[标志](flags.md)的用户输入。

在 JavaScript 中：

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

请注意，以下示例将使用 TypeScript。由于 JavaScript 还没有静态类属性，因此必须在声明类后将它们添加到类中，就像我们在上面的描述中所做的那样。

### 避免超时

为了避免命令执行无限期地运行，oclif 将在 `Command.run` 解析后 10 秒终止 node 进程。这意味着 `run` 方法中的所有命令逻辑都应该同步运行，或者应该返回一个 `Promise`。这将允许整个命令在 10 秒超时开始之前运行。

换句话说，**如果你在没有等待的情况下执行 `Command.run` 中的 promise，那么命令可能会在完成之前超时。**

### 其他命令选项

[查看基类以了解可以对命令调用哪些方法](https://github.com/oclif/core/blob/main/src/command.ts)。

```typescript
import {Command, Flags} from '@oclif/core'

export class MyCommand extends Command {
  static summary = 'A brief overview of your command.'
  static description = `
An in-depth description of the command.
It can be multiline.
`

  // 在帮助中隐藏命令
  static hidden = false

  // 在帮助中自定义用法字符串
  // 这将覆盖默认用法
  static usage = 'mycommand --myflag'

  // 添加到帮助的示例
  // <%= config.bin %> 解析为可执行文件名
  // <%= command.id %> 解析为命令名
  static examples = [
    // 示例可以是简单的字符串
    '<%= config.bin %> <%= command.id %> --help',
    // 或提供示例命令说明的对象
    {
      description: 'Force the command to execute',
      command: '<%= config.bin %> <%= command.id %> --force',
    }
  ]

  // 这使得解析器在接收到无效参数时不会失败
  // 默认为 true
  // 如果需要接受数量可变的参数，则将其设置为 false
  static strict = false

  // 定义可以执行此命令的别名。
  static aliases = ['alternate:name:for:this:command']

  // 如果要将 --json 标志添加到命令中，则将其设置为 true。
  // oclif 将自动阻止显示日志（如果使用 this.log、 this.wart 或 this.error）
  // 然后显示命令的 run 方法返回的 JSON。
  static enableJsonFlag = true

  async run() {
    // 显示警告
    this.warn('uh oh!')
    // 带有错误消息终止
    this.error('uh oh!!!')
    // 带有状态码终止
    this.exit(1)
  }
}
```

## Command 方法

- [Command 方法](#command-方法)
  - [`this.log(message: string)`](#thislogmessage-string)
  - [`this.warn(message: string | Error)`](#thiswarnmessage-string--error)
  - [`this.error(message: string | Error, options?: {code?: string, exit?: number, ref?: string; suggestions?: string[];})`](#thiserrormessage-string--error-options-code-string-exit-number-ref-string-suggestions-string)
  - [`this.exit(code: number = 0)`](#thisexitcode-number--0)
  - [`this.logToStderr(message: string)`](#thislogtostderrmessage-string)
  - [`this.jsonEnabled()`](#thisjsonenabled)
  - [`this.toSuccessJson(result: unknown)`](#thistosuccessjsonresult-unknown)
  - [`this.toErrorJson(result: unknown)`](#thistoerrorjsonresult-unknown)

下面的代码假设你在 oclif [命令](commands.md)的 `run()` 方法中。

### `this.log(message: string)`

将消息输出到 stdout（非阻塞）。`console.log()` 也可以正常工作，但这是一个阻塞调用，当存在 `--json` 标志时不会自动阻止。这使用了 [util.format()](https://nodejs.org/api/util.html#util_util_format_format_args)，其行为与 `console.log()` 相同。

```typescript
this.log('hello, world!')
```

### `this.warn(message: string | Error)`

将错误或消息显示为警告

```typescript
this.warn('uh oh!')
this.warn(new Error('uh oh!'))
```

### `this.error(message: string | Error, options?: {code?: string, exit?: number, ref?: string; suggestions?: string[];})`

显示错误并退出。另外，向错误对象或终止状态添加代码。

```typescript
this.error('uh oh!', {exit: 2})
this.error(new Error('uh oh!'))
```

可选对象具有以下选项：

* `exit` — 要使用的退出代码
* `code` — 错误类型的唯一错误代码
* `suggestions` —  一系列建议，供用户尝试下一步，可能有用或提供额外的上下文
* `ref` — 指向与此错误或修复此错误相关的文档的 URL

显示错误时，将显示 `message`、`code`、`suggestions`、`ref` 属性。可重用的 `Error` 类可以通过从 `@oclif/core` 和 `this.error` 中的 `Errors` 命名空间实现 `PrettyPrintableError` 接口来创建，以显示上述可选输出。

这些错误是友好的，除非使用 `DEBUG=*` 启用调试，否则不会显示回溯。

```typescript
import {CLIError} from '@oclif/errors'

throw new CLIError('my friendly error')
```

任何被此 `CLIError` 类型的命令捕获的错误都将显示出来，而不会进行追溯。

### `this.exit(code: number = 0)`

退出进程。回到状态 0。

```typescript
this.exit()
this.exit(1)
```

### `this.logToStderr(message: string)`

将消息打印到终端的 `stderr`。

### `this.jsonEnabled()`

如果存在 `--json` 标志且 `enableJsonFlag` 设置为 `true` ，则返回到 `true`

### `this.toSuccessJson(result: unknown)`

在向用户显示命令的成功 JSON 输出之前修改它。

### `this.toErrorJson(result: unknown)`

在向用户显示命令的错误 JSON 输出之前修改它。
