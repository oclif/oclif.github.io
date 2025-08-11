---
title: 性能
---

oclif 支持开箱即用的性能跟踪 —— 对 oclif 和你自己的代码都是如此。你可以通过两种方式之一来启用它，这取决于你如何实现 bin 脚本。

如果你使用的是来自生成器的 bin 脚本，你可以简单地在 `settings` 模块上设置 `performanceEnabled`：

## 如何启用

```typescript
#!/usr/bin/env node

import {execute, settings} from '@oclif/core'
settings.performanceEnabled = true
await execute({dir: import.meta.url})
```

你也可以直接在 `Config` 类上启用它，如果这样对你的 CLI 更好的话：

```typescript
import {Config, run} from '@oclif/core'
import {fileUrlToPath} from 'node:url'

const config = await Config.load({
  root: resolve(fileURLToPath(import.meta.url), '..');,
  enablePerf: true
})

await run(config)
```

## 访问 oclif 特有的性能指标

启用性能后，你可以在 `oclif-perf` 范围下的调试输出中看到。

```
❯ DEBUG=oclif-perf sf version
@salesforce/cli/2.35.6 darwin-arm64 node-v20.11.0
  oclif-perf Process Uptime: 747.6823ms +0ms
  oclif-perf Oclif Time: 302.1286ms +0ms
  oclif-perf Init Time: 37.7735ms +0ms
  oclif-perf Config Load Time: 294.5321ms +0ms
  oclif-perf   • Root Plugin Load Time: 11.2781ms +0ms
  oclif-perf   • Plugins Load Time: 274.6006ms +0ms
  oclif-perf   • Commands Load Time: 6.7736ms +0ms
  oclif-perf Core Plugin Load Time: 20.9403ms +0ms
  oclif-perf User Plugin Load Time: 0.0000ms +0ms
  oclif-perf Linked Plugin Load Time: 2.3124ms +0ms
  oclif-perf Plugin Load Times: +0ms
  oclif-perf   oclif-hello-world: 239.1951ms (no manifest!) +0ms
  oclif-perf   @oclif/plugin-update: 18.8549ms +0ms
  oclif-perf   @oclif/plugin-autocomplete: 17.5277ms +0ms
  oclif-perf   @oclif/plugin-commands: 16.4917ms +0ms
  oclif-perf   @oclif/plugin-not-found: 16.3310ms +0ms
  oclif-perf   @oclif/plugin-search: 15.8846ms +0ms
  oclif-perf   @oclif/plugin-version: 14.8063ms +0ms
  oclif-perf   @salesforce/plugin-org: 14.5657ms +0ms
  oclif-perf   @salesforce/plugin-data: 14.3991ms +0ms
  oclif-perf   @oclif/plugin-warn-if-update-available: 14.3733ms +0ms
  oclif-perf   @oclif/plugin-which: 14.1629ms +0ms
  oclif-perf   @salesforce/plugin-apex: 13.9885ms +0ms
  oclif-perf   @salesforce/plugin-auth: 13.6895ms +0ms
  oclif-perf   @salesforce/plugin-deploy-retrieve: 13.6353ms +0ms
  oclif-perf   @salesforce/plugin-limits: 13.1123ms +0ms
  oclif-perf   @salesforce/plugin-packaging: 12.9777ms +0ms
  oclif-perf   @salesforce/plugin-info: 12.7787ms +0ms
  oclif-perf   @salesforce/plugin-marketplace: 12.1542ms +0ms
  oclif-perf   @salesforce/plugin-source: 11.9480ms +0ms
  oclif-perf   @salesforce/plugin-schema: 11.7775ms +0ms
  oclif-perf   @salesforce/plugin-settings: 11.4785ms +0ms
  oclif-perf   @salesforce/plugin-templates: 11.4225ms +0ms
  oclif-perf   @salesforce/plugin-sobject: 11.3670ms +0ms
  oclif-perf   root: 11.2781ms +0ms
  oclif-perf   @salesforce/plugin-user: 10.8521ms +0ms
  oclif-perf   @salesforce/plugin-telemetry: 10.5724ms +1ms
  oclif-perf   @salesforce/plugin-trust: 10.4463ms +0ms
  oclif-perf   @oclif/plugin-plugins: 2.0135ms +0ms
  oclif-perf   @oclif/plugin-help: 1.9039ms +0ms
  oclif-perf Hook Run Times: +0ms
  oclif-perf   init: +0ms
  oclif-perf     total: 37.4624ms +0ms
  oclif-perf     oclif-hello-world(./dist/hooks/init/init): 7.9818ms +0ms
  oclif-perf     @oclif/plugin-warn-if-update-available(./lib/hooks/init/check-update): 37.1145ms +0ms
  oclif-perf     @salesforce/plugin-settings(./lib/hooks/init/load_config_meta): 29.3073ms +0ms
  oclif-perf     @oclif/plugin-update(./dist/hooks/init.js): 33.1767ms +0ms
  oclif-perf   prerun: +0ms
  oclif-perf     total: 260.5702ms +0ms
  oclif-perf     @salesforce/cli(./dist/hooks/prerun): 2.3582ms +0ms
  oclif-perf     @salesforce/plugin-telemetry(./lib/hooks/telemetryPrerun.js): 260.2634ms +0ms
  oclif-perf   preparse: +0ms
  oclif-perf     total: 0.5351ms +0ms
  oclif-perf     @salesforce/cli(/dist/hooks/preparse): 0.5045ms +0ms
  oclif-perf   postrun: +0ms
  oclif-perf     total: 0.3507ms +0ms
  oclif-perf Command Load Time: 0.7478ms +0ms
  oclif-perf Command Run Time: 264.2587ms +0ms
```

你也可以像这样通过编程形式访问这些指标：
You can also access these metrics programmatically like so:

```typescript
const {Performance, flush, handle, run, settings} = await import('@oclif/core')
settings.performanceEnabled = true
await run(process.argv.slice(2))
  .catch(async (error) => handle(error))
  .finally(async () => {
    console.log('Performance', Performance.oclifPerf)
    await flush()
  })
```

## 对你的代码使用 `Performance`

你还可以使用 `Performance` 类来捕获你自己的代码库上的性能指标。

要捕获代码块的性能指标，你需要使用 `Performance.mark` 创建一个新的 `marker`。然后，你需要调用 `.stop` 方法 `marker` 来完成代码块的计时。

下面是一个简单的例子：

```typescript
import {Performance} from '@oclif/core'
// Create a new marker.
// First argument is the owner of the marker (This allows Performance to be able to distinguish the origin of each marker)
// Second argument is the name of the maker. Naming convention that oclif uses internally is <module>.<method>#scope. You are free, however, to name these however you like.
const marker = Performance.mark('my-plugin', 'hello.run')

// do things that take a while.

// Add details to the marker that you might want to access later
marker?.addDetails({from: flags.from, person: args.person})
// Stop the marker. This will capture the amount of time between the creation of the marker and the stopping of the marker.
marker?.stop()
```

还有一个更彻底的例子：

```typescript
// ./src/commands/hello/index.ts
import {Args, Command, Flags, Performance} from '@oclif/core'

export default class Hello extends Command {
  static args = {
    person: Args.string({description: 'Person to say hello to', required: true}),
  }

  static flags = {
    from: Flags.string({char: 'f', description: 'Who is saying hello', required: true}),
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Hello)
    const marker = Performance.mark('my-plugin', 'hello.run')
    await new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })
    marker?.addDetails({from: flags.from, person: args.person})
    marker?.stop()
    this.log(`hello ${args.person} from ${flags.from}! (./src/commands/hello/index.ts)`)
  }
}
```

你创建的所有 maker 都可以在 `Performance` 上的静态 `results` 属性上访问：

```typescript
// bin/run.js
const {Performance, flush, handle, run, settings} = await import('@oclif/core')
settings.performanceEnabled = true
await run(process.argv.slice(2))
  .catch(async (error) => handle(error))
  .finally(async () => {
    console.log('Results', Performance.results)
    await flush()
  })
```

```bash
❯ bin/run.js hello reader --from oclif
hello reader from oclif! (./src/commands/hello/index.ts)
Results Map(1) {
  'my-plugin' => [
    {
      details: {
        from: oclif,
        person: reader
      },
      duration: 1003.4971249999999,
      method: 'run',
      module: 'hello',
      name: 'hello.run',
      scope: undefined
    }
  ]
}
```
