---
title: 发布
description: 如何发布你的 CLI
---

有两种主要的策略来发布 oclif CLI：npm 和 standalone tarballs。你可以发布到其中一个或两个。

## npm

就像其他 npm 项目一样使用 `npm publish`。这包括将自动用于 Windows 用户的 `run.cmd`。

```sh-session
$ npm version (major|minor|patch) # bumps version, updates README, adds git tag
$ npm publish
$ npm install -g mynewcli
$ mynewcli
# 或者
$ npx mynewcli
```

你需要[在 npm 注册](https://www.npmjs.com/signup)并验证你的电子邮件地址才能发布。

这个工作流程可以稍作改进，在发布之前运行 `npm version major|minor|patch` 可以创建一个 git 标签，并自动提升版本。

## Standalone tarballs

从 CLI 的根目录使用 `oclif pack tarballs` 构建 standalone tarballs。其中包括 node 二进制文件，因此用户不必安装 node 即可使用 CLI。它不会将此节点的二进制文件放在 PATH 上，因此二进制文件不会与机器上的任何 node 安装冲突。

要发布，你可以从 `./dist` 复制文件或使用 `oclif upload tarballs` 将文件复制到 S3。你需要将 `package.json` 中的 `oclif.update.s3.bucket` 设置为有效的 S3 存储桶，并在 `AWS_ACCESS_KEY_ID` 和 `AWS_SECRET_ACCESS_KEY` 环境变量中设置凭据。

在你将 tarball 上传到 S3 之后，你可以使用 `oclif promote` 将 tarball 提升到 S3 中的发布渠道。这允许你在发布通道之间快速升级和降级特定版本。例如，Salesforce CLI 有单独的 `stable` 和 `stable-rc` 渠道，每周更新一次。

## Brew

你的方案可以通过 Brew 分发。主要的警告是你必须在发布时设置 `CLIENT_HOME` 变量，否则它会破坏更新周期。这方面的一个例子可以在 [heroku cli formula](https://github.com/heroku/homebrew-brew/blob/master/Formula/heroku.rb#L9) 中找到。通过导出格式为 `CLI_NAME_OCLIF_CLIENT_HOME` 的变量（其中 `CLI_NAME` 是 CLI 的名称），可以强制更新机制查看 brew 安装位置，而不是默认位置（即 `$XDG_DATA_HOME/.local/share/package_name/client`）。

## 自动更新器

这些 tarball 以及下面的安装程序可以通过添加 `@oclif/plugin-update` 插件进行自动更新。只需添加此插件，CLI 将在后台或运行 `mycli update` 时自动更新。

如果你不想使用 S3，你仍然可以运行 `oclif pack`，它会生成 tarball。要让更新程序工作，请将 `package.json` 中的 `oclif.update.s3.host` 设置为具有从 `oclif pack` 中构建的 `./dist` 文件的主机。此主机不需要是 S3 主机。要自定义 URL 路径，请参阅 `@oclif/core` 中的 S3 模板。

## 自动更新渠道

你可以为发布版本设置单独的渠道，类似于 Google Chrome 渠道（例如 beta、dev、canary）。要创建渠道，只需将 `package.json` 中的版本从 `1.0.0` 更改为 `1.0.0-beta` （其中“beta”是你喜欢的任何字符串）。然后当你用 `oclif pack` 打包时，它会创建 beta tarball。用户可以使用 `mycli update beta` 更改他们的渠道，并将在该渠道上接收所有未来的版本。

在 Heroku CLI 中，我们让它在每次提交到主分支时自动构建和发布 beta 渠道。然后，每当在 CI 中创建 git 标签时，我们都会构建并发布 stable 渠道。

## Windows 安装程序

使用 `oclif pack win` 生成 Windows 安装程序。它将构建到 `./dist/win` 中。可以使用 `oclif upload win` 将其上传到 S3，并使用 `oclif promote --win` 在 S3 中进行发布。

`oclif pack win` 依赖 7zip 和 nsis 安装。如果你在 mac 或 unix 环境中没有它们，你可以使用 homebrew 来安装它们。

```sh
brew install nsis
brew install p7zip
```

### 安装程序签名

要生成一个签名的安装程序，你需要在你的 package.json 中设置 scoped 的 `<CLI>_WINDOWS_SIGNING_PASS` 边境变量（例如 `MY_CLI_WINDOWS_SIGNING_PASS`）和 `windows.name` 和 `windows.keypath`：

```json
{
  "oclif": {
    "windows": {
      "name": "My CLI",
      "keypath": "path/to/private.key"
    }
  }
}
```

请参阅 [Microsoft 的文档](https://learn.microsoft.com/en-us/windows/win32/msi/authoring-a-fully-verified-signed-installation)，了解如何为 CLI 获取经过验证的数字签名。

## macOS 安装程序

使用 `oclif pack macos` 构建 macOS .pkg 安装程序。它将成为 `./dist/macos`。这可以通过 `oclif upload macos` 上传到 S3，并通过 `oclif promote --macos` 在 S3 中升级。你需要将 macOS 标识符设置为 `oclif.macos.identifier` 和 `package.json`（我们分别使用“com.heroku.cli”和“com.salesforce.cli”作为 Heroku CLI 和 Salesforce CLI 的标识符）。

### 上传到 S3

上传命令默认使用 ACL 设置 `public-read` ，除非在 `package.json` 中的 `oclif.update.s3.acl` 下指定了其他策略。但是，在创建新的 S3 存储桶时，AWS 的默认建议可能会在尝试使用 `public-read` 设置上传时导致访问错误（代码：callControlListNotSupported）。

要解决这个问题，请考虑使用所需的ACL设置更新 package.json 的 oclif 部分。下面的示例演示了如何将 acl 设置为 bucket-owner-full-control：

```json
{
  "oclif": {
    "bin": "myOclifApp",
    "dirname": "myOclifApp-cli-data",
    "update": {
      "s3": {
        "host": "https://s3.console.aws.amazon.com/",
        "bucket": "myOclifApp-cli",
        "acl": "bucket-owner-full-control"
      }
    },
    "macos": {
      "identifier": "com.myOclifApp.cli"
    }
  }
}
```

Amazon在[这里](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ensure-object-ownership.html#ensure-object-ownership-bucket-policy)有一个用户指南，可以帮助你配置 Bucket Policy 设置。

### 安装程序签名

为了能够签署一个“安装程序签名身份”必须在构建机器上可用（在[这里](https://developer.apple.com/help/account/create-certificates/certificates-overview)阅读更多关于证书的信息）。确保在 developer.apple.com 中创建了这样的证书，并且该证书已下载并安装在构建机器的KeyChain中。必须在 `package.json` 中的 `oclif.macos.sign` 中指定证书名称。

示例:

```json
"macos": {
    "identifier": "com.myOclifApp",
    "sign": "\"3rd Party Mac Developer Installer: myOclifCompany (R2315646)\""
},
```

请注意转义的引号，证书名称作为参数传递给 `pkgbuild` 命令，因此如果没有引号，它可能会中断。对于 Heroku CLI，证书名称为“Developer ID Installer: Heroku INC”。并可选择使用 `OSX_KEYCHAIN` 设置秘钥串。

可以在 Keychain Access 应用程序中查看构建计算机上安装的证书。

## Ubuntu/Debian 软件包

使用 `oclif pack deb` 构建一个deb包。将 `MYCLI_DEB_KEY` 设置为 gpg 密钥 ID 以创建 gpg 文件。这将包括 `./dist/deb` 中 apt 存储库所需的所有文件。它们可以使用 `oclif upload deb` 上传到 S3，并使用 `oclif promote --deb` 在 S3 中升级。

发布到 S3 后，用户可以使用以下命令进行安装：

```sh-session
$ wget -qO- https://mys3bucket.s3.amazonaws.com/apt/release.key | apt-key add - # you will need to upload this file manually
$ sudo echo "deb https://mys3bucket.s3.amazonaws.com/apt ./" > /etc/apt/sources.list.d/mycli.list
$ sudo apt update
$ sudo apt install -y mycli
```

这可以放在一个[脚本](https://cli-assets.heroku.com/install-ubuntu.sh)中，供用户使用 `curl https://pathto/myscript | sh` 安装。

这些不会自动更新，因为 Ubuntu 已经有了一个可靠的方法来更新他们的软件包。

## Snapcraft

Snap 是分发 Linux CLI 的好方法，内置于 Ubuntu 16+ 中。可以轻松修改 Heroku CLI 的 [snapcraft.yml](https://github.com/heroku/cli/blob/master/snap/snapcraft.yaml) 文件，使其与任何 oclif CLI 配合使用。
