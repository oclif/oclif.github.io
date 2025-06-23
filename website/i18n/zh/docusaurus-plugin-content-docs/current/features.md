---
title: 功能
---

### 标志/参数解析

没有标志解析器，CLI 框架就不完整。我们通过多年的实验建立了一个自定义的标志解析器，我们认为它能始终如一地灵活处理用户输入，让用户能以他们期望的方式轻松使用 CLI，同时又不影响对开发人员的严格性保证。

### 可配置的主题分隔符

默认情况下，主题将用冒号分隔，例如 `my:awesome:command`。不过，如果你愿意，也可以选择使用空格，例如：`my awesome command`。

### 超快的速度

运行 oclif CLI 命令的开销几乎为零。[它只需要很少的依赖项](https://www.npmjs.com/package/@oclif/core?activeTab=dependencies)（在最小设置中只有 28 个依赖项，包括所有传递依赖项）。此外，只有要执行的命令才需要 Node。因此，包含许多命令的大型 CLI 加载速度与包含单一命令的小型 CLI 加载速度一样快。

### CLI 生成器

只需运行一条命令，就能搭建出功能齐全的 CLI 并快速上手。请参阅[生成器命令](generator_commands.md)。

### 测试助手

我们做了大量工作，使命令易于测试，并能轻松模拟出 stdout/stderr。生成器会自动创建脚手架测试。

### 自动文档

默认情况下，你可以向 CLI 传入 `--help` 来获取帮助，如标志选项和参数信息。在发布 CLI 的 npm 包时，这些信息也会自动放在 README 中。请参阅 [plugin-plugins](https://github.com/oclif/plugin-plugins) 作为示例。

### 插件

使用插件，CLI 的用户可以用新功能对其进行扩展，CLI 可以被拆分成模块化组件，并在多个 CLI 之间共享功能。请参阅[构建自己的插件](plugins.md#构建自己的插件)。

### 钩子

使用生命周期钩子可在 CLI 启动时或在自定义触发器上运行功能。如果 CLI 的各个组件之间需要共享自定义功能，请使用此功能。请参阅[钩子](https://oclif.io/docs/hooks)。

### JSON 输出

你可以选择使用 `--json` 标志，它会自动阻止控制台日志，并将命令的最终结果显示为有效的 JSON 输出。如果你希望在 CI/CD 环境中使用 CLI 编写脚本，这将非常有用。请参阅 [JSON](json.md)。

### 灵活分类法

你可以选择加入我们所说的[灵活分类法](flexible_taxonomy.md)。启用该功能后，用户就可以执行命令，而无需遵守已定义的命令分类法。

这是一种让 CLI 更方便用户使用的好方法，尤其是在命令名称较长、用户难以记住的情况下。例如，用户可能很难记住命令的名称是 `project deploy metadata start`，还是 `project start deploy metadata`，而使用灵活的分类法后，这两个名称都有效！

### 使用 TypeScript (或者不使用)

oclif 核心中的所有内容都是用 TypeScript 编写的，生成器可以构建完全配置好的 TypeScript CLI 或普通 JavaScript CLI。凭借 TypeScript 中的静态属性，TypeScript 的语法更加简洁，但无论你选择哪种语言，一切都能正常工作。如果你使用插件支持，CLI 将自动使用 `ts-node` 运行插件，从而轻松快速地使用 TypeScript，而且任何 oclif CLI 都不需要任何模板。

### 自动更新安装程序

oclif 可以将 CLI 打包成[不同的安装程序](releasing.md)，用户无需在机器上安装 Node。这些安装程序可以通过 [plugin-update](https://github.com/oclif/plugin-update) 实现自动更新。

### 自动补全

通过 [plugin-autocomplete](https://github.com/oclif/plugin-autocomplete) 为你的 CLI 加入终端自动补全。安装后，用户就可以补全命令名称和标志名称。

```bash
$ my-cli p<tab><tab> # will list all commands starting with 'p' for completion
```
