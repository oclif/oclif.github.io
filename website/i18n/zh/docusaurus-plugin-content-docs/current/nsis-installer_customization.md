---
title: 自定义 NSIS 安装程序
description: 自定义 nsis 安装程序脚本
---

有时，你需要验证某些依赖项，确保没有安装冲突的 CLI，或者在安装 CLI 之前执行一些其他自定义逻辑。对于 npm 场景，只需指定一个 `preinstall` 脚本。但 Windows 安装程序不包含此脚本。相反，你必须编写自己的 nsis 修改程序来执行这些检查。查看此自定义脚本在 [oclif/oclif](https://github.com/oclif/oclif/blob/b8d76af9290716ef69d8d1026f98041268306dfd/src/commands/pack/win.ts#L60) 仓库中安装程序中的位置。

了解 [Salesforce CLI](https://github.com/salesforcecli/cli) 如何做到这一点，以防止其新的主要版本安装在旧的、不兼容的版本之上。在 `package.json` 中，他们指定了一个 nsis 安装程序，如下所示：

```json
{
  "name": "mycli",
  "version": "0.0.0",
  "description": "My CLI",
  "main": "bin/run.js",
  "bin": "./bin/run.js",
  "oclif": {
    "nsisCustomization": "scripts/nsis.nsi"
  }
}
```

然后在 CLI 的打包阶段将其自定义脚本加载到安装程序中。
