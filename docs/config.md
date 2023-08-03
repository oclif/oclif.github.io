---
title: Configuration
---

Inside a command, `this.config` provides useful properties you can use in your command. Here are a list of its methods and properties:

* **name** - name of CLI
* **version** - Version of the CLI.
* **pjson** - parsed and [normalized](https://github.com/npm/normalize-package-data) CLI `package.json`
* **bin** - CLI bin name
* **binAliases** - An array of strings that will all execute the CLI's bin. This is useful for backwards compatibility and for CLIs built with installers or tarballs. For npm-installed CLIs, change the `bin` property in `package.json` instead. See [Bin Aliases](https://oclif.io/docs/aliases) for more information.
* **nsisCustomization** - A path to a .nsis file that's used to customize the installer for Windows. See [nsis-custom](https://github.com/oclif/nsis-custom) for more information.
* **cacheDir** - CLI cache directory
  * macOS: `~/Library/Caches/mycli`
  * Unix: `~/.cache/mycli`
  * Windows: `%LOCALAPPDATA%\mycli`
  * Can be overridden with `XDG_CACHE_HOME`
* **configDir** - CLI config directory
  * Unix: `~/.config/mycli`
  * Windows: `%LOCALAPPDATA%\mycli`
  * Can be overridden with `XDG_CONFIG_HOME`
* **dataDir** - CLI data directory
  * Unix: `~/.data/mycli`
  * Windows: `%LOCALAPPDATA%\mycli`
  * Can be overridden with `XDG_DATA_HOME`
* **dirname** - dirname used with `cacheDir|configDir|dataDir`. Can be overridden in `package.json`.
* **errlog** - path to error log inside of `cacheDir`
* **home** - user home directory
* **platform** - operating system `darwin|linux|win32`
* **arch** - process architecture `x64|x86`
* **shell** - current shell in use
* **userAgent** - user-agent intended for http calls. example: `mycli/1.2.3 (darwin-x64) node-9.0.0`
* **windows** - boolean
* **topicSeparator** - the separator to use between topics - only colons (`":"`) and spaces (`" "`) are supported.
* **debug** - set to 1 if debug is enabled (with `${BIN}_DEBUG=1` or `DEBUG=$BIN`). In the future this may be used for multiple debug levels.
* **npmRegistry** - current npm registry to use with the [plugins](https://github.com/oclif/plugin-plugins) plugin
* **plugins** - loaded plugins
* **commands** - all commands in CLI
* **default** - default cli command
* **topics** - all topics in CLI
* **commandIDs** - string IDs of all commands
* **async runHook(event, opts)** - trigger a hook

<!--
* **findCommand(id, opts: {must?: true})** - find a command in the CLI
* **findCommand(id: string, opts?: {must: boolean})** -
* **findTopic(id: string, opts: {must: true}): Topic
* **findTopic(id: string, opts?: {must: boolean}): Topic | undefined
* **scopedEnvVar(key: string): string | undefined
* **scopedEnvVarKey(key: string): string
* **scopedEnvVarTrue(key: string): boolean
* **runCommand(id, argv)** - run a command (used internally)
-->

<!-- * **userPJSON?** - PJSON.User -->

## Custom User Configuration

Often it's useful to have a custom configuration for your users. One way to implement this is to read a `config.json` file from the CLI's config directory:

```typescript
import {Command} from '@oclif/core'
import * as fs from 'fs-extra'
import * as path from 'path'

export class extends Command {
  async run() {
    const userConfig = await fs.readJSON(path.join(this.config.configDir, 'config.json'))

    this.log('User config:')
    console.dir(userConfig)
  }
}
```

To share this logic between different commands, use a [base class](base_class.md).
