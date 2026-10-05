---
title: 常见问题
---

## 为什么选择 Node？

Node 是编写 CLI 代码的最佳选择，原因有很多。在 Salesforce，我们用 Ruby、Go 和 Node 发布了 heroku CLI。[本文将更详细地介绍这段历史](https://blog.heroku.com/evolution-of-heroku-cli-2008-2017)，但我们确实发现 Node 提供了最好的一切。

首先，JavaScript 是世界上最大的语言。能够编写 JavaScript 的人比任何其他语言都多，而且到目前为止，它拥有最大的开源社区。每个人都可以编写 JavaScript，而且你可以找到最有用的库来帮助构建 CLI。

我们发现，在我们使用过的语言中，Node 的跨平台支持最好。一般来说，如果在 macOS 上编写代码，在 Windows 上运行也不会有太大问题。

Node 为我们的[插件](plugins.md)模式提供了最好的支持。插件是在 CLI 之间共享代码、将 CLI 代码库模块化或允许用户为现有 CLI 添加功能的一种方式。有了 Node，我们就可以将不同的依赖版本放在一起。这意味着，如果你想对一个插件中的依赖关系发布更新，它不会影响另一个插件的工作方式。oclif 将这一点发挥到了极致，甚至在单个插件级别就完成了标记解析。如果我们想对标记解析进行破坏性修改（我们当然不打算这样做，但这只是一个例子），你可以只更新一个插件，而在其他插件中保留旧的行为。这对需要缓慢迁移到新代码的大型 CLI 代码库非常有帮助。

## 我想要一个像 Go 一样的二进制 CLI

使用 [pkg](https://github.com/zeit/pkg)。只需确保通过在 `package.json` 中设置 `pkg.scripts: "./lib/**/*.js"` 来添加命令和其他源文件即可。

不过，在 Salesforce CLI 中，我们更倾向于发送内置 Node 的压缩包（以及各种安装程序）。使用 `oclif pack` 为不同平台创建一组内置 Node 的压缩包。你可能需要使用 [@oclif/plugin-update](https://github.com/oclif/plugin-update) 进行更新，否则用户将无法在不重新安装的情况下从压缩包中更新 CLI。

## 我应该使用 TypeScript 还是 JavaScript？

我们建议使用 TypeScript，因为在重构代码和更新依赖关系时，我们发现类型化确实很有帮助。出现编译错误比在生产中发现错误要好得多。

即使你从未编写过 TypeScript，我们也花了很多心思让你轻松创建 TypeScript CLI。我们生成了使用 [ts-node](https://github.com/TypeStrong/ts-node) 的 CLI 和插件，使其无需编译步骤即可快速运行 TypeScript 代码。使用 oclif，你不必再为构建配置而烦恼。

不过，现在的语言还是非常相似的。你在 JavaScript 中编写的代码与在 TypeScript 中编写的代码几乎完全相同。（当然，只是没有类型定义而已）

## 什么编辑器最适合 oclif？

当然，如果你已经有了常用的编辑器，就应该使用它。不过，我们通常推荐 [vscode](https://code.visualstudio.com)。

微软在这款编辑器上做得非常出色，它在 TypeScript 项目中的表现尤为出色。开箱即可获得良好的类型检查、代码检查和自动补全功能。

## 我应该使用 npm 还是 yarn？

这其实没有太大区别。如果你刚刚开始使用 Node，请使用 NPM。我们内部喜欢使用 yarn，因为它更快一些，而且我们发现它的 lockfiles 更友好。

## 如何让 oclif 生成器运行得更快？

如果使用 npx，请先使用 `npm install -g oclif` 安装。但这样做并不能及时更新，所以你需要运行 `npm update -g oclif` 来获取新版本的生成器。

## 为什么不支持 Node X？

oclif 项目遵循并支持 [Node 的 LTS 支持计划](https://nodejs.org/en/about/releases/)。这使得 oclif 能够与 Node 的开发保持同步。

## “oclif” 怎么发音？

我们说“oh-cliff”。
