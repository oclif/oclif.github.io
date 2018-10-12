---
title: Introduction
---

oclif is a framework for building CLIs in Node. It can be used like a [simple flag parser](https://github.com/oclif/command#usage) but is capable of much more. It's designed to be extensible so that you can easily add plugins such as the [update warning plugin](https://github.com/oclif/plugin-warn-if-update-available) or build your own for users to install at runtime.

The oclif generator creates a CLI project in either [JavaScript](https://github.com/oclif/example-multi-js) or [TypeScript](https://github.com/oclif/example-multi-ts) to get you started quickly. It requires very few runtime dependencies and has extremely minimal overhead.

Everything is customizable in oclif. Even the flag parser and help generation is optional and can be replaced. It's a platform to build upon that provides smart defaults without locking you in to any specific tools or behavior.

## Requirements

Only Node 8+ is supported. Node 6 will reach end-of-life April 2019. At that point we will continue to support the current LTS version of node. You can add the [node](https://www.npmjs.com/package/node) package to your CLI to ensure users are on Node 8.

## Single-command or Multi-command

With oclif you can create 2 different CLI types: single and multi.

Single CLIs are like `ls` or `curl`. They can accept arguments and flags. Single CLIs can [optionally be just a single file](https://github.com/oclif/command).

Multi CLIs are like `git` or `heroku`. They have subcommands that are themselves single CLIs. In the `package.json` there is a field `oclif.commands` that points to a directory. This directory contains all the subcommands for the CLI. For example, if you had a CLI called `mycli` with the commands `mycli create` and `mycli destroy`, you would have a project like the following:

```bash
package.json
src/
└── commands/
    ├── create.ts
    └── destroy.ts
```

Multi-command CLIs may also include [plugins](plugins.md).

<a href="single.html" class="button">Single-command CLI</a>
<a href="multi.html" class="button">Multi-command CLI</a>

## Quickstart

Creating a single-command CLI:

```sh-session
$ npx oclif single mynewcli
? npm package name (mynewcli): mynewcli
$ cd mynewcli
$ ./bin/run
hello world from ./src/index.js!
```

Creating a multi-command CLI:

```sh-session
$ npx oclif multi mynewcli
? npm package name (mynewcli): mynewcli
$ cd mynewcli
$ ./bin/run --version
mynewcli/0.0.0 darwin-x64 node-v9.5.0
$ ./bin/run --help
USAGE
  $ mynewcli [COMMAND]

COMMANDS
  hello
  help   display help for mynewcli

$ ./bin/run hello
hello world from ./src/hello.js!
```
