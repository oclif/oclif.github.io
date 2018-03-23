---
title: Introduction
---

This tutorial is a step-by-step guide to introduce you to oclif. If you have not developed anything in a command line before, this tutorial is a great place to get started.

### Requirements

oclif is written in Node. You'll need Node as well as npm, which is a package manager for Javascript and a software registry. 

If you do not have them already, follow the [instructions here to install npm and Node together](https://docs.npmjs.com/getting-started/installing-node).

Only Node 8+ is supported. Node 6 will reach end-of-life April 2019. At that point we will continue to support the current LTS version of node. You can add the [node](https://www.npmjs.com/package/node) package to your CLI to ensure users are on Node 8.

### Single-command or Multi-command

With oclif you can create 2 different CLI types, single and multi.

Single CLIs are like `ls` or `cat`. They can accept arguments and flags. Single CLIs can [optionally be just be a single file](https://github.com/oclif/command).

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
