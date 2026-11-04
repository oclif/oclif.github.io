---
title: 调试
description: 如何访问调试日志
---

使用 [debug](https://github.com/visionmedia/debug) 进行调试。CLI 使用该模块进行所有调试。如果设置环境变量 `DEBUG=*`，则会将所有调试输出打印到屏幕上。

根据 shell 的不同，你可能需要用 `DEBUG=\*` 来转义。在 Windows 系统中，无法在行中设置环境变量，因此需要在运行命令前运行 `set DEBUG=*`。

![debug demo](/img/debug_demo.png)
