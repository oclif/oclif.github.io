---
title: Configuring Your CLI
description: All about configuring oclif
---

You can configure the behavior of oclif inside your CLI or plugin's package.json or using an rc file.

If you use the `package.json`, all of the configuration options should be placed under the `oclif` section. For example:

```json
{
  "name": "my-cli",
  "version": "1.2.3",
  "dependencies": {
    "@oclif/core": "^3"
  },
  "oclif": {
    "bin": "mycli",
    "dirname": "mycli",
    "commands": "./dist/commands",
    "topicSeparator": " "
  }
}
```

If you'd like to use an rc file, then you do not need to put the configuration under `oclif`. For instance:

```javascript
//.oclifrc.js

module.exports = {
  bin: "mycli",
  dirname: "mycli",
  commands: "./dist/commands",
  topicSeparator: " "
}
```

The following rc files are supported:
```
.oclifrc
.oclifrc.json
.oclifrc.js
.oclifrc.mjs
.oclifrc.cjs
oclif.config.js
oclif.config.mjs
oclif.config.cjs
```

Here's a list of all the options that you can configure.

| Property                 | Description                                                                                                                              |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| `additionalHelpFlags`    | Array of flags that should trigger help output in addition to `--help`                                                                   |
| `additionalVersionFlags` | Array of flags that should trigger version output in addition to `--version`                                                             |
| `aliases`                | Aliases for the plugin. This is used to support legacy plugins that have been renamed                                                    |
| `bin`                    | CLI bin name (e.g. `sf`, `heroku`, `git`, etc...)                                                                                        |
| `binAliases`             | An array of strings that will all execute the CLI's bin. See [Aliases](./aliases.md#bin-aliases) for more                                |
| `dirname`                | Directory name to use when determining CLI's config, cache, and data directories.                                                        |
| `commands`               | Where oclif can find command classes. See [Command Discovery Strategies](./command_discovery_strategies.md) for more                     |
| `description`            | Description of your plugin or CLI to show in help                                                                                        |
| `devPlugins`             | List of plugins that will only be loaded in development. See [Plugins](./plugins.md) for more                                            |
| `exitCodes`              | Configured exit codes. See [Exit Codes](#exit-codes) section below                                                                       |
| `flexibleTaxonomy`       | Set to true to enable [flexible taxonomy](./flexible_taxonomy.md)                                                                        |
| `helpClass`              | Location of compiled [custom help class](./help_classes.md)                                                                              |
| `helpOptions`            | Settings for configuring behavior of help output. See [Help Options](#help-options) section below                                        |
| `hooks`                  | Register your plugin or CLI's hooks. See [hooks](./hooks.md) for more                                                                    |
| `jitPlugins`             | Register plugins that can be installed just in time. See [Just-in-Time Plugin Installation](./jit_plugins.md) for more                   |
| `macos`                  | Settings for building macos installer. See [Releasing](./releasing.md) for more                                                          |
| `nsisCustomization`      | A path to a .nsis file that's used to customize the installer for Windows. See [nsis-custom](./nsis-installer_customization.md) for more |
| `plugins`                | List of plugins that should be loaded. See [Plugins](./plugins.md) for more                                                              |
| `state`                  | Set the state of your CLI or plugin to be shown in help (e.g. `beta` will show `This CLI is in beta`)                                    |
| `theme`                  | Path to theme file to include with your CLI. See [Themes](./themes.md) for more                                                          |
| `topicSeparator`         | The separator to use between topics - only colons (`":"`) and spaces (`" "`) are supported                                               |
| `topics`                 | Define your CLI's topics. See [Topics](./topics.md) for more                                                                             |
| `windows`                | Settings for building windows installer. See [Releasing](./releasing.md) for more                                                        |

### Exit Codes

You can configure the desired exit codes for the following errors:
- `default` - default exit code for any error.
- `failedFlagParsing` - exit code when oclif fails to parse a flag's value.
- `failedFlagValidation` - exit code when a flag fails it's own validation.
- `invalidArgsSpec` - exit code when a command defines an invalid `args` configuration.
- `nonExistentFlag` - exit code when user provides a non-existent flag.
- `requiredArgs` - exit code when user fails to provide a required arg.
- `unexpectedArgs` - exit code when user provides unexpected args to a command.

### Help Options

You can configure the behavior of the help output with the following:
- `docopts` - Use docopts as the usage. Defaults to true.
- `flagSortOrder` - Order in which to sort flags in help output. Can be `alphabetical` (default) or `none` (flags will appear in the order they were defined).
- `hideAliasesFromRoot` - If true, hide command aliases from the root help output. Defaults to false.
- `hideCommandSummaryInDescription` - By default, the command summary is show at the top of the help and as the first line in the command description. Repeating the summary in the command description improves readability especially for long command help output. If there is no `command.summary`, the first line of the description is treated as the summary. Some CLIs, especially with very simple commands, may not want the duplication.
- `maxWidth` - Maximum column width of the help output.
- `sections` - Only show the help for the specified sections. Defaults to all sections.
- `sendToStderr` - By default, the help output is sent to stdout. If this is true, it will be sent to stderr.
- `showFlagNameInTitle` - By default, titles show flag values as `<value>`. Some CLI developers may prefer titles to show the flag name as the value. i.e. `--myflag=myflag` instead of `--myflag=<value>`. An individual flag can set this using `flag.helpValue=flag.name`.
- `showFlagOptionsInTitle` - By default, option values on flags are shown in the flag's description. This is because long options list ruin the formatting of help. If a CLI knows all commands will not do this, it can be turned off at a help level using this property. An individual flag can set this using `flag.helpValue=options.join('|')`.
- `stripAnsi` - Strip ansi characters from help out to remove all formatting.
- `usageHeader` - Override the header for the `USAGE` section.

If you want to further customize help, you can implement a [Custom Help Class](./help_classes.md).
