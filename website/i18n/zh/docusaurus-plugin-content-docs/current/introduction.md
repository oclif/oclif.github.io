---
title: 介绍
---

oclif 是一个用于在 Node 中构建 CLI 的框架。它可以像一个[简单的标志解析器](https://github.com/oclif/core#usage)一样使用，但功能远不止于此。它的设计具有可扩展性，因此你可以轻松添加例如 [update warning plugin](https://github.com/oclif/plugin-warn-if-update-available) 这样的插件，或构建自己的插件供用户在运行时安装。

oclif 生成器会在 TypeScript 中创建一个 CLI 项目，让你快速上手。它只需要很少的运行时依赖项，开销极小。

在 oclif 中，一切都是可定制的。即使是标志解析器和帮助生成也是可选的，可以替换。它是一个可供构建的平台，可提供智能默认设置，而不会将你锁定在任何特定的工具或行为上。

## 要求

仅支持 [LTS Node 版本](https://nodejs.org/en/about/previous-releases)。你可以在 CLI 中添加 [node](https://www.npmjs.com/package/node) 包，以确保用户使用的是特定的 Node 版本。

## 从头开始创建 oclif 项目

要从头开始创建一个新的 oclif 项目，可以运行 `oclif generate` 命令：

```shell
$ npx oclif generate mynewcli
? npm package name (mynewcli): mynewcli
$ cd mynewcli
$ ./bin/dev.js hello world
hello world! (./src/commands/hello/world.ts)
```

这将根据我们的[模板](./templates.md)创建一个新项目。要进一步了解这些模板的内容，我们建议你阅读这篇文档 [此处](./templates.md)。

`oclif generate` 执行完成后，你就能使用项目中的[bin-脚本](./templates.md#bin-脚本)来运行你的 CLI。

在开发模式下使用 `bin/dev.js` 来运行你的 CLI：

```shell
$ ./bin/dev.js hello world
hello world! (./src/commands/hello/world.ts)
```

在生产模式下使用 `bin/run.js` 来运行你的 CLI：

```shell
$ ./bin/run.js hello world
hello world! (./src/commands/hello/world.ts)
```

## 在现有项目中初始化 oclif

如果你想在现有项目中开始使用 oclif，可以使用 `oclif init` 命令添加必要的文件、依赖关系和配置。

```shell
$ npx oclif init
? Command bin name the CLI will export (my-pkg): my-pkg
? Select topic separator: spaces
? Select a module type: CommonJS
? Select a package manager: npm

Created CLI in my-pkg
```

`oclif init` 将添加以下内容：

- bin 脚本：bin/run.js、bin/run.cmd、bin/dev.js、和 bin/dev.cmd。参见 [bin 脚本](./templates.md#bin-脚本)了解详情。
- package.json 中的 oclif 部分，并配置 bin、dirname、commands 和 topicSeparator。参见[配置你的 CLI](./configuring_your_cli.md)了解详情。
- package.json 中添加 `@oclif/core` 依赖。（如果没有的话）
- package.json 中添加 `ts-node` 依赖。（如果没有的话）

## 下一步

### 添加命令

生成 oclif 项目或在现有项目中初始化后，就可以开始添加新的[命令](./commands.md)：

```shell
npx oclif generate command foo:bar
```

这将在 `src/commands/foo/bar.ts` 中创建一个新命令，可以根据需要对其进行自定义。

[标志](./flags.md)和[参数](./args.md)的文档介绍了如何在命令中添加这些选项，而[命令](./commands.md)的文档则介绍了可以在命令中设置的其他选项。

### 添加钩子

你还可以在 CLI 中添加[钩子](./hooks.md)，以便进一步自定义 CLI 的行为：

```shell
npx oclif generate hook my-hook --event init
```

### 进一步自定义

- [配置你的 CLI](./configuring_your_cli.md)
- [自定义帮助类](./help_classes.md)
- [使用命令基类](./base_class.md)
- [增强用户体验](./user_experience.md)

## 其他教程

我们的朋友 [@joshcanhelp](https://github.com/joshcanhelp) 写了一篇精彩的[教程](https://www.joshcanhelp.com/oclif/)，我们建议你也读一读。
