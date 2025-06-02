---
title: Config
---

Inside a command, `this.config` provides access to the `Config` class, which contains useful properties and methods you can use in your command. Here are a list of its methods and properties:

- **name** - name of CLI
- **version** - Version of the CLI.
- **pjson** - Parsed CLI `package.json`.
- **bin** - CLI bin name
- **cacheDir** - CLI cache directory
  - macOS: `~/Library/Caches/mycli`
  - Unix: `~/.cache/mycli`
  - Windows: `%LOCALAPPDATA%\mycli`
  - Can be overridden with `<CLI>_CACHE_HOME`, where `<CLI>` is the name of your CLI.
  - On linux systems, you can use `XDG_CACHE_HOME` to override
- **configDir** - CLI config directory
  - Unix: `~/.config/mycli`
  - Windows: `%LOCALAPPDATA%\mycli`
  - Can be overridden with `<CLI>_CONFIG_HOME`, where `<CLI>` is the name of your CLI.
  - On linux systems, you can use `XDG_CONFIG_HOME` to override
- **dataDir** - CLI data directory
  - Unix: `~/.data/mycli`
  - Windows: `%LOCALAPPDATA%\mycli`
  - Can be overridden with `<CLI>_DATA_HOME`, where `<CLI>` is the name of your CLI.
  - On linux systems, you can use `XDG_DATA_HOME` to override
- **dirname** - dirname used with `cacheDir|configDir|dataDir`. Can be overridden in `package.json`.
- **errlog** - path to error log inside of `cacheDir`
- **home** - user home directory
- **platform** - operating system `darwin|linux|win32`
- **arch** - process architecture `x64|x86`
- **shell** - current shell in use
- **userAgent** - user-agent intended for http calls. example: `mycli/1.2.3 (darwin-x64) node-9.0.0`
- **windows** - boolean
- **npmRegistry** - current npm registry to use with the [plugins](https://github.com/oclif/plugin-plugins) plugin
- **plugins** - loaded plugins
- **commands** - all commands in CLI
- **default** - default cli command
- **topics** - all topics in CLI
- **commandIDs** - string IDs of all commands
- **async runHook(event, opts)** - trigger a hook
- **async runCommand(id, opts)** - Run a command
- **scopedEnvVar(key)** - Return the value of a scoped env var (e.g. `\<CLI>_NPM_REGISTRY`)
- **scopedEnvVarKey(key)** - Return the name of a scoped env var (e.g. `\<CLI>_NPM_REGISTRY`)
- **scopedEnvVarTrue(key)** - Return true/false value of scoped env var (e.g. `\<CLI>_NPM_REGISTRY`)

## Custom User Configuration

Often it's useful to have a custom configuration for your users. One way to implement this is to read a `config.json` file from the CLI's config directory:

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

To share this logic between different commands, use a [base class](base_class.md).
