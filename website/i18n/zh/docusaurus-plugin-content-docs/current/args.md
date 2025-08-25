---
title: 命令参数
---

参数是传递给命令的位置参数。例如，如果这个命令是用 `mycli arg1 arg2` 运行的，它会这样声明：

```typescript
import {Args, Command} from '@oclif/core'

export class MyCLI extends Command {
  static args = {
    firstArg: Args.string(),
    secondArg: Args.string(),
  }

  async run() {
    // 可以得到作为对象的参数
    const {args} = await this.parse(MyCLI)
    this.log(`running my command with args: ${args.firstArg}, ${args.secondArg}`)
    // 也可以将 args 作为数组获取
    const {argv} = await this.parse(MyCLI)
    this.log(`running my command with args: ${argv[0]}, ${argv[1]}`)
  }
}
```

以下是参数可以具有的选项：

```js
static args = {
  firstArg: Args.string(
    {
      name: 'file',                     // 在帮助和引用中用 args[name] 显示的参数名称
      required: false,                  // 参数必选时，设置 `required: true`
      description: 'output file',       // 帮助描述
      hidden: true,                     // 在帮助中隐藏参数
      parse: async input => 'output',   // 返回一个不同的值，用来替换用户输入
      default: 'world',                 // 如果没有参数输入时的默认值。也可以是异步函数。
      defaultHelp: 'a dynamic value'    // 在帮助输出中显示的动态默认值（例如当前工作目录）。可以是返回字符串或未定义的异步函数
      options: ['a', 'b'],              // 只允许输入来自一个离散的集合
      ignoreStdin: false,               // 设置为 true 以忽略 stdin 提供的任何值
      noCacheDefault: false             // 如果为 true，则 defaultHelp 返回的值将不会缓存在 oclif.manifest.json 中。
    }
  ),
}
```

以下是`参数`导出的参数类型：

- `string`
- `integer`
- `boolean`
- `url`
- `file`
- `directory`
- `custom`

对于可变长度参数，在命令中使用 `static strict = false` 禁用参数验证。

```typescript
import {Args, Command} from '@oclif/core'

export class MyCLI extends Command {
  static args = {
    things: Args.string(),
  }

  static strict = false

  async run() {
    // 如果使用 strict = false，那么应该使用 argv 来访问提供的参数。
    const {argv} = await this.parse(MyCLI)
    this.log(`running my command with args: ${argv[0]}, ${argv[1]}`)
  }
}
