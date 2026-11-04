---
title: 插件加载
---

下图概述了如何将插件加载到 CLI 中。

从这张图中有几个重要的结论：

### 插件解析顺序

插件按以下顺序解析：

1. 用户插件 (即用户安装的插件)
2. 开发插件 (即 `devPlugins` 下列出的插件)
3. 核心插件 (即 `plugins` 下列出的插件)

### Manifest 改善性能

当加载插件时，oclif 需要请求每个命令文件，以便获得命令的静态属性 —— `description`、`examples`、`flags` 等。

但是，如果插件有一个 `oclif.manifest.json` （由 `oclif manifest` 生成），oclif 可以跳过这一步。manifest 缓存了所有这些属性，这样就不需要在每次执行命令时都导入每一条命令。

## 插件加载流程图

![plugin loading](/img/plugin-loading.jpg)
