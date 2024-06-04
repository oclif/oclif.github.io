---
title: Themes
description: Make help output pretty
---

oclif supports themes that you can ship with your CLI, which users can then override if they choose.

By default, the theme only applies to help and JSON output but you can extend the theme for your own purposes if you want. See [Extending Themes](#extending-themes) section below.

## theme.json

The theme file takes the following shape:

```json
{
  "bin": "white",
  "command": "cyan",
  "commandSummary": "white",
  "dollarSign": "white",
  "flag": "white",
  "flagDefaultValue": "blue",
  "flagOptions": "white",
  "flagRequired": "red",
  "flagSeparator": "white",
  "json": {
    "brace": "magenta",
    "bracket": "magenta",
    "colon": "dim",
    "comma": "dim",
    "key": "yellow",
    "string": "green",
    "number": "green",
    "boolean": "green",
    "null": "red"
  },
  "sectionDescription": "white",
  "sectionHeader": "underline",
  "topic": "white",
  "version": "white"
}
```

### Supported Theme Properties

As mentioned, the theme only applies to help and JSON output by default. The following properties can be used:

- `alias`: the aliases under the `ALIASES` section
- `bin`: the name of your CLI's executable (e.g. `sf`, `heroku`)
- `command`: the command's name
- `commandSummary`: the command's summary
- `dollarSign`: the `$` printed before `examples` and `usage`
- `flag`: flag names and short characters
- `flagDefaultValue`: the `[default: X]` shown on flags with a default
- `flagOptions`: the valid options for a flag
- `flagRequired`: the `(required)` that shows on required flags
- `flagSeparator`: the `,` that separates the short char and long flag names (e.g. `-f, --foo`)
- `json`: the theme for JSON output
  - `brace`: the `[` and `]`
  - `bracket`: the `{` and `}`
  - `colon`: the `:`
  - `comma`: the `,`
  - `key`: all keys
  - `string`: string values
  - `number`: number values
  - `boolean`: boolean values
  - `null `: null values
- `sectionDescription`: the text inside of each section (e.g. everything under `DESCRIPTION`)
- `sectionHeader`: the section header (e.g. `DESCRIPTION`)
- `topic`: the topics under the `TOPICS` section
- `version`: the `VERSION` section that shows under the root help (e.g. `sf --help`)

The values for each of these must be one of the following:
- a hex code, e.g. `#FF0000`
- a rgb, e.g. `rgb(255,255,255)`
- a standard ANSI color (see https://github.com/chalk/chalk/#styles)

Any invalid values will be ignored.

## Shipping a Theme

Shipping a theme with your CLI is very simple.

First you need to create a new theme file (see above) in your CLI. Then, in your package.json, you just need to tell oclif where to find that file:

```json
{
  "files": [
    "/theme.json",
    "/oclif.manifest.json",
    "/dist",
  ],
  "oclif": {
    "theme": "theme.json"
  }
}
```

It's important that you also add the file to the list of `files` so that it will be packed with your CLI whenever you publish to npm or when pack your CLI using `oclif pack`.

## Overriding Themes

If you've shipped a theme with your CLI, users can then override the theme by creating their own `theme.json` in the config directory of your CLI (`~/.config/<CLI>` on unix, `%LOCALAPPDATA%\<CLI>` on windows.)

Users can specify one or all of the theme properties in their own `theme.json`, meaning that they can choose to only override a single property of the default theme.

## Disabling Themes

Themes can be disabled by using `<CLI>_DISABLE_THEME` environment variable.

## Extending Themes

By default oclif only uses the theme for the help output but you can use the theme for other purposes if you desire. For instance maybe you'd like to log colorized `info:` logs to the user during a command:

```typescript
import {Command, ux} from '@oclif/core'

export default class Hello extends Command {
  public async run(): Promise<void> {
    this.info('starting process!')
    // do some stuff...
    this.info('still making progress!')
    // do some more stuff...
    this.info('process complete!')
  }

  public info(msg: string): void {
    this.log(ux.colorize(this.config.theme?.info, 'info:'), msg)
  }
}
```
