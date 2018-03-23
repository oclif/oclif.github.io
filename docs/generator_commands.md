---
title: Generator Commands
---

<!-- this is auto-generated from the oclif readme -->
<!-- commands -->

* [oclif command NAME](#command-name)
* [oclif help [COMMAND]](#help-command)
* [oclif multi [PATH]](#multi-path)
* [oclif plugin [PATH]](#plugin-path)
* [oclif single [PATH]](#single-path)

## command NAME

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

_See code: [src/commands/command.ts](https://github.com/oclif/oclif/blob/v1.4.9/src/commands/command.ts)_

## help [COMMAND]

display help for oclif

```
USAGE
  $ oclif help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v1.1.6/src/commands/help.ts)_

## multi [PATH]

generate a new multi-command CLI

```
USAGE
  $ oclif multi [PATH]

ARGUMENTS
  PATH  path to project, defaults to current directory

OPTIONS
  --defaults         use defaults for every setting
  --force            overwrite existing files
  --options=options  (typescript|tslint|semantic-release|mocha)
```

_See code: [src/commands/multi.ts](https://github.com/oclif/oclif/blob/v1.4.9/src/commands/multi.ts)_

## plugin [PATH]

create a new CLI plugin

```
USAGE
  $ oclif plugin [PATH]

ARGUMENTS
  PATH  path to project, defaults to current directory

OPTIONS
  --defaults         use defaults for every setting
  --force            overwrite existing files
  --options=options  (typescript|tslint|semantic-release|mocha)
```

_See code: [src/commands/plugin.ts](https://github.com/oclif/oclif/blob/v1.4.9/src/commands/plugin.ts)_

## single [PATH]

generate a new single-command CLI

```
USAGE
  $ oclif single [PATH]

ARGUMENTS
  PATH  path to project, defaults to current directory

OPTIONS
  --defaults         use defaults for every setting
  --force            overwrite existing files
  --options=options  (typescript|tslint|semantic-release|mocha)
```

_See code: [src/commands/single.ts](https://github.com/oclif/oclif/blob/v1.4.9/src/commands/single.ts)_
<!-- commandsstop -->
