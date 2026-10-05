---
title: 配置
---

在命令中，`this.config` 提供了对 `Config` 类的访问，该类包含了可以在命令中使用的有用属性和方法。下面是它的方法和属性列表：

- **name** - CLI 的名称
- **version** - CLI 的版本
- **pjson** - 已解析的 CLI `package.json`
- **bin** - CLI bin 名称
- **cacheDir** - CLI 缓存目录
  - macOS: `~/Library/Caches/mycli`
  - Unix: `~/.cache/mycli`
  - Windows: `%LOCALAPPDATA%\mycli`
  - 可以用 `XDG_CACHE_HOME` 重写
- **configDir** - CLI 配置目录
  - Unix: `~/.config/mycli`
  - Windows: `%LOCALAPPDATA%\mycli`
  - Can be overridden with `XDG_CONFIG_HOME`
- **dataDir** - CLI 数据目录
  - Unix: `~/.data/mycli`
  - Windows: `%LOCALAPPDATA%\mycli`
  - 可以用 `XDG_DATA_HOME` 重写
- **dirname** - `cacheDir|configDir|dataDir` 使用的目录名。可以在 `package.json` 重写
- **errlog** - `cacheDir` 中错误日志的路径
- **home** - 用户主目录
- **platform** - 操作系统 `darwin|linux|win32`
- **arch** - 进程架构 `x64|x86`
- **shell** - 当前使用的 shell
- **userAgent** - 用于 http 的调用。例如：`mycli/1.2.3 (darwin-x64) node-9.0.0`
- **windows** - 布尔值
- **npmRegistry** - 当前的 npm registry 与[插件](https://github.com/oclif/plugin-plugins)一起使用
- **plugins** - 加载的插件
- **commands** - CLI 中的所有命令
- **default** - 默认 CLI 命令
- **topics** - CLI 中的所有标题（topic）
- **commandIDs** - 所有命令的字符串 ID
- **async runHook(event, opts)** - 触发一个钩子
- **async runCommand(id, opts)** - 运行一个命令
- **scopedEnvVar(key)** - 返回一个作用域环境变量的值（例如 `\<CLI>_NPM_REGISTRY`）
- **scopedEnvVarKey(key)** - 返回一个限定了作用域的环境变量的名称（例如 `\<CLI>_NPM_REGISTRY`）
- **scopedEnvVarTrue(key)** - 返回作用域环境变量的 true/false 值（例如 `\<CLI>_NPM_REGISTRY`）

## 自定义用户配置

通常，为用户提供自定义配置是很有用的。实现此功能的一种方法是从 CLI 的 config 目录中读取 `config.json` 文件：

```typescript
import { Command } from "@oclif/core";
import * as fs from "fs-extra";
import * as path from "path";

export class extends Command {
  async run() {
    const userConfig = await fs.readJSON(
      path.join(this.config.configDir, "config.json")
    );

    this.log("User config:");
    console.dir(userConfig);
  }
}
```

若要在不同命令之间共享此逻辑，请使用[基类](base_class.md)。
