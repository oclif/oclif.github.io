---
title: 介绍
---

oclif 是一个用于在 Node 中构建 CLI 的框架。它可以像一个[简单的标志解析器](https://github.com/oclif/core#usage)一样使用，但功能远不止于此。它的设计具有可扩展性，因此你可以轻松添加例如 [update warning plugin](https://github.com/oclif/plugin-warn-if-update-available) 这样的插件，或构建自己的插件供用户在运行时安装。

oclif 生成器会在 [TypeScript](https://github.com/oclif/hello-world) 中创建一个 CLI 项目，让你快速上手。它只需要很少的运行时依赖项，开销极小。

在 oclif 中，一切都是可定制的。即使是标志解析器和帮助生成也是可选的，可以替换。它是一个可供构建的平台，可提供智能默认设置，而不会将你锁定在任何特定的工具或行为上。

## 要求

仅支持 [LTS Node 版本](https://nodejs.org/en/about/previous-releases)。你可以在 CLI 中添加 [node](https://www.npmjs.com/package/node) 包，以确保用户使用的是特定的 Node 版本。

## 快速开始

创建一个 CLI:

```sh-session
$ npx oclif generate mynewcli
? npm package name (mynewcli): mynewcli
$ cd mynewcli
$ ./bin/dev.js hello world
hello world! (./src/commands/hello/world.ts)
```
