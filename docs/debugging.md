---
title: Debugging
description: How to access debug logs
---

Use the [debug](https://github.com/visionmedia/debug) for debugging. The CLI uses this module for all of its debugging. If you set the environment variable `DEBUG=*` it will print all the debug output to the screen.

Depending on your shell you may need to escape this with `DEBUG=\*`. On Windows you can't set environment variables in line, so you'll need to run `set DEBUG=*` before running the command.

![debug demo](/img/debug_demo.png)
