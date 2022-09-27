---
title: Introduction
---

oclif is a framework for building CLIs in Node. It can be used like a [simple flag parser](https://github.com/oclif/core#usage) but is capable of much more. It's designed to be extensible so that you can easily add plugins such as the [update warning plugin](https://github.com/oclif/plugin-warn-if-update-available) or build your own for users to install at runtime.

The oclif generator creates a CLI project in [TypeScript](https://github.com/oclif/hello-world) to get you started quickly. It requires very few runtime dependencies and has extremely minimal overhead.

Everything is customizable in oclif. Even the flag parser and help generation is optional and can be replaced. It's a platform to build upon that provides smart defaults without locking you in to any specific tools or behavior.

## Requirements

Only [LTS Node versions](https://nodejs.org/en/about/releases/) are supported. You can add the [node](https://www.npmjs.com/package/node) package to your CLI to ensure users are on a specific Node version.


## Quickstart

Creating a CLI:

```sh-session
$ npx oclif generate mynewcli
? npm package name (mynewcli): mynewcli
$ cd mynewcli
$ ./bin/dev hello world
hello world! (./src/commands/hello/world.ts)
```
