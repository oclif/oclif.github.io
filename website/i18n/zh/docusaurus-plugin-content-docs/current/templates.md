---
title: 模板
---

`oclif generate` 可以使用两种模板：

* [hello-world (CommonJS)](https://github.com/oclif/hello-world)
* [hello-world-esm (ESM)](https://github.com/oclif/hello-world-esm)

两个模板都有相同的结构（tsconfig、bin 脚本、示例命令和测试等）。唯一不同的是， `hello-world` 模板使用的是 CommonJS，而 `hello-world-esm` 模板使用的是 ESM。

我们将为你简要介绍模板中包含的所有内容：

## Bin 脚本

模板包含用于生产或开发的 4 个 bin 脚本。

- `bin/run.js` - 在生产环境中运行 CLI (macos 和 linux)
- `bin/dev.js` - 在开发环境中运行 CLI (macos 和 linux)
- `bin/run.cmd` - 在生产环境中运行 CLI (windows)
- `bin/dev.cmd` - 在开发环境中运行 CLI (windows)

`package.json` 中的 `bin` 条目将指向 `bin/run.js` 文件，这将告诉 `npm` 在安装 CLI 时使用该文件。如果使用 `oclif pack` 创建了针对特定操作系统的安装包，则会根据目标操作系统在最终安装包中添加相应的 `run` 脚本。

我们鼓励你使用 `dev` 脚本进行本地开发。这样，oclif 会在运行时自动转译你的类型脚本，这样你就不必担心每次执行命令前都要编译代码了。开发脚本还会产生更多的警告和错误信息，让你更容易找出问题所在。

模板附带的 `dev.js` 使用 `ts-node` 作为 node 运行时。不过，你在这里也有选择。你可以使用以下任何一种

- [tsx](https://www.npmjs.com/package/tsx)
- [bun](https://bun.sh/)
- `node` - 如果你使用 node 和 ESM，请确保你使用的加载程序允许它使用 ESM 模块(例如 `--loader ts-node/esm`)。有关更多信息，请参见 [ESM](esm.md)。

对于其中任何一个，你都可以将文件中的 hashbang 指向全局安装（如 `ts-node`）或本地安装（`node_modules/.bin/ts-node`）。

## 配置

该模板还附带多个配置文件，可根据需要轻松修改（或删除）。

- `.eslintrc.json` - 我们推荐的 `eslint` 插件和设置
- `.eslintignore` - 我们推荐的 `.eslintignore` 与我们推荐的 eslint 配置一起使用。
- `.mocharc.json` - 我们推荐的 `mocha` 设置
- `.prettierrc.json` - 我们推荐的 `prettier` 设置 - 使用 [`@oclif/prettier-config`](https://github.com/oclif/prettier-config) 作为基础。
- `tsconfig.json` - 我们为 typescript 项目推荐的编译器选项。
- `package.json` - 我们推荐的脚本、依赖项和 `oclif` 设置。

## 示例命令

这些模板附带了两个命令，你可以根据这两个命令进行构建。

- `hello` - `src/commands/hello/index.ts`
- `hello world` - `src/commands/hello/world.ts`

## 示例测试

最后，`tests` 文件夹下有每个命令的测试文件。

这些测试使用 [`@oclif/test`](https://github.com/oclif/test) 和 [`mocha`](https://www.npmjs.com/package/mocha)。但是，你可以自由地使用最适合你需要的任何测试实用程序来设置你的测试。
