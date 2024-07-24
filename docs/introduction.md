---
title: Introduction
---

oclif is a framework for building command-line interfaces (CLIs) using [Node.js](https://nodejs.org/en). You can use it like a [simple flag parser](https://github.com/oclif/core?tab=readme-ov-file#-standalone-usage), but it's capable of much more. It's designed to be extensible so that you can easily add plugins, such as the [update warning plugin](https://github.com/oclif/plugin-warn-if-update-available), or build your own for users to install at runtime.

The oclif generator creates a CLI project in TypeScript to get you started quickly. The generated CLI requires very few runtime dependencies and has minimal overhead.

Everything is customizable in oclif. Even the flag parser and help generation is optional and can be replaced. It's a platform to build upon that provides smart defaults without locking you in to any specific tools or behavior.

## Requirements

Only [LTS Node versions](https://nodejs.org/en/about/previous-releases) are supported. If you want to ensure that users are on a specifc Node.js version, you can add the [node](https://www.npmjs.com/package/node) package to your CLI.

To install the oclif CLI itself, run this command:

```
$ npm install --global oclif
```


## Create an oclif Project from Scratch

To create a new oclif project from scratch, run the `oclif generate` command.

```
$ oclif generate mynewcli
Generating mynewcli in /Users/me/oclif/mynewcli
? Select a module type ESM
? NPM package name mynewcli
? Command bin name the CLI will export mynewcli
<more prompts...>

$ cd mynewcli
$ ./bin/dev.js hello world
hello world! (./src/commands/hello/world.ts)
```

The command creates a new project based on our [templates](./templates.md). To learn more about what's included in these templates, read the documentation [here](./templates.md).

After `oclif generate` completes, run your CLI using the included [bin scripts](./templates.md#bin-scripts).

* Use `bin/dev.js` to run your CLI in development mode:

    ```
    $ ./bin/dev.js hello world
    hello world! (./src/commands/hello/world.ts)
    ```

* Use `bin/run.js` to run your CLI in production mode:

    ```
    $ ./bin/run.js hello world
    hello world! (./src/commands/hello/world.ts)
    ```

## Initialize oclif in an Existing Project

If you want to start using oclif inside an existing project, then use the `oclif init` command to add the necessary files, dependencies, and configuration.

```
$ oclif init
? Command bin name the CLI will export (my-pkg): my-pkg
? Select topic separator: spaces
? Select a module type: CommonJS
? Select a package manager: npm

Created CLI in my-pkg
```

`oclif init` adds the following:

- bin scripts: `bin/run.js`, `bin/run.cmd`, `bin/dev.js`, and `bin/dev.cmd`. See [bin scripts](./templates.md#bin-scripts) for more information.
- `oclif` section to `package.json` with the `bin`, `dirname`, `commands`, and `topicSeparator` properties set. See [Configuring Your CLI](./configuring_your_cli.md) for more information.
- `@oclif/core` to the `dependencies` property in your `package.json` (if it's not already there).
- `ts-node` to the `devDependencies` property in your `package.json` (if it's not already there).

## Next Steps

### Add Commands
After you've generated an oclif project or initialized it in your existing project, start adding new [commands](./commands.md). This example creates a new command with the TypeScript source file `src/commands/foo/bar.ts` that you can customize to do whatever you want:

```
$ oclif generate command foo:bar
```

See the documentation for [flags](./flags.md) and [args](./args.md) which shows how to add flags and arguments to your command; the documentation for [commands](./commands.md) shows the other options you can set on your command.

### Add Hooks

You can also add [hooks](./hooks.md) to your CLI that allow you to further customize the behavior of your CLI:

```
$ oclif generate hook my-hook --event init
```

### Further customizations

- [Configure Your CLI](./configuring_your_cli.md)
- [Custom Help](./help_classes.md)
- [Use a Base Command Class](./base_class.md)
- [Enhance the User Experience](./user_experience.md)

## Other Tutorials

Our friend, [@joshcanhelp](https://github.com/joshcanhelp), wrote a fantastic [tutorial on his blog](https://www.joshcanhelp.com/oclif/) that we encourage you to read as well.
