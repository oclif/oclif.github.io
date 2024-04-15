---
title: 用户体验
description: 提供用户体验工具
---

oclif 的理念是开发人员应该自由地为用户设计他们想要的任何用户体验。换句话说，我们真的很努力不为你做任何 UX 决定。

很多时候，我们在需要用户体验时使用[钩子](./hooks.md)（例如，找不到提供的命令）。这样，你就可以设计你希望用户拥有的确切体验。在错误处理的情况下，你[可以重写](./error_handling.md) oclif 的默认行为。

但是为了方便你，`@oclif/core` 导出了一个 [`ux` 模块](https://github.com/oclif/core/blob/main/src/cli-ux/README.md)，该模块提供了几个工具，你可以使用这些工具来实现所需的用户体验。

然而，由于时间限制，我们无法像我们希望的那样支持这个模块。出于这个原因，我们**强烈**建议你找到专门针对你想要使用的 UX 组件的 npm 库。下面是我们喜欢的一些库的简短列表：

- 提示: [inquirer](https://www.npmjs.com/package/inquirer)
- 下拉菜单: [ora](https://www.npmjs.com/package/ora)
- 进度条: [cli-progress](https://www.npmjs.com/package/cli-progress)
- 超链接: [hyperlink](https://www.npmjs.com/package/hyperlink)
- 表格: [tty-table](https://www.npmjs.com/package/tty-table), [cliui](https://www.npmjs.com/package/cliui)
- 树: [object-treeify](https://www.npmjs.com/package/object-treeify)
- 彩色 JSON: [color-json](https://www.npmjs.com/package/color-json)
- 通知: [node-notifier](https://www.npmjs.com/package/node-notifier)
- 连接: [terminal-link](https://www.npmjs.com/package/terminal-link)
- 渲染 React 组件: [ink](https://www.npmjs.com/package/ink)
