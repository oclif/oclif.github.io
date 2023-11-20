---
title: Themes
---

oclif supports themes that users can either define for themselves or select from a variety of themes you ship with your CLI.

By default, the theme only applies to help output but you can extend the theme for your own purposes if you want. See [Extending Themes](#extending-themes) section below.

## theme.json

By default oclif will read themes from `~/.config/<CLI>/theme.json`.

This file takes the following shape:

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
  "sectionDescription": "white",
  "sectionHeader": "underline",
  "topic": "white",
  "version": "white"
}
```

### Supported Theme Properties

As mentioned, the theme only applies to help output by default. The following properties can be used:

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
- `sectionDescription`: the text inside of each section (e.g. everything under `DESCRIPTION`)
- `sectionHeader`: the section header (e.g. `DESCRIPTION`)
- `topic`: the topics under the `TOPICS` section
- `version`: the `VERSION` section that shows under the root help (e.g. `sf --help`)

The values for each of these must be one of the following:
- a hex code, e.g. `#FF0000`
- a rgb, e.g. `rgb(255,255,255)`
- a style supported by `chalk` (see https://github.com/chalk/chalk/#styles)

Any invalid values will be ignored.

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
