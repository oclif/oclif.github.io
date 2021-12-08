---
title: Generator Commands
---

<!-- this is auto-generated from the oclif readme -->
<!-- commands -->

- [oclif command NAME](#oclif-command-name)
- [oclif help [COMMAND]](#oclif-help-command)
- [oclif hook NAME](#oclif-hook-name)
- [oclif generate NAME](#oclif-generate-name)

## oclif command NAME

add a command to an existing CLI or plugin

```
USAGE
  $ oclif command NAME

ARGUMENTS
  NAME  name of command

OPTIONS
  --defaults  use defaults for every setting
  --force     overwrite existing files
```

_See code: [src/commands/command.ts](https://github.com/oclif/oclif/blob/v1.5.3/src/commands/command.ts)_

## oclif help [COMMAND]

display help for oclif

```
USAGE
  $ oclif help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/main/src/commands/help.ts)_

## oclif hook NAME

add a hook to an existing CLI or plugin

```
USAGE
  $ oclif hook NAME

ARGUMENTS
  NAME  name of hook (snake_case)

OPTIONS
  --defaults     use defaults for every setting
  --event=event  [default: init] event to run hook on
  --force        overwrite existing files
```

_See code: [src/commands/hook.ts](https://github.com/oclif/oclif/blob/main/src/commands/hook.ts)_

## `oclif generate NAME`

generate a new CLI

```
USAGE
  $ oclif generate [NAME]

ARGUMENTS
  NAME  directory name of new project

DESCRIPTION
  generate a new CLI

  This will clone the template repo 'oclif/hello-world' and update package properties
```

_See code: [src/commands/multi.ts](https://github.com/oclif/oclif/blob/main/src/commands/generate.ts)_

<!-- commandsstop -->
