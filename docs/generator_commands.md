---
title: Generator Commands
---

- [`oclif generate NAME`](#oclif-generate-name)
- [`oclif generate command NAME`](#oclif-generate-command-name)
- [`oclif generate hook NAME`](#oclif-generate-hook-name)

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

_See code: [src/commands/generate.ts](https://github.com/oclif/oclif/blob/v2.2.0/src/commands/generate.ts)_

## `oclif generate command NAME`

add a command to an existing CLI or plugin

```
USAGE
  $ oclif generate command [NAME] [--force]

ARGUMENTS
  NAME  name of command

FLAGS
  --force  overwrite existing files

DESCRIPTION
  add a command to an existing CLI or plugin
```

## `oclif generate hook NAME`

add a hook to an existing CLI or plugin

```
USAGE
  $ oclif generate hook [NAME] [--force] [--event <value>]

ARGUMENTS
  NAME  name of hook (snake_case)

FLAGS
  --event=<value>  [default: init] event to run hook on
  --force          overwrite existing files

DESCRIPTION
  add a hook to an existing CLI or plugin
```
