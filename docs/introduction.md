---
title: Introduction
---

oclif is a framework for building command-line interfaces (CLIs) using [Node.js](https://nodejs.org/en). You can use it like a [simple flag parser](https://github.com/oclif/core#usage), but it's capable of much more. It's designed to be extensible so that you can easily add plugins, such as the [update warning plugin](https://github.com/oclif/plugin-warn-if-update-available), or build your own for users to install at runtime.

The oclif generator creates a CLI project in TypeScript to get you started quickly. The generated CLI requires very few runtime dependencies and has minimal overhead.

Everything is customizable in oclif. Even the flag parser and help generation is optional and can be replaced. It's a platform to build upon that provides smart defaults without locking you in to any specific tools or behavior.

## Requirements

Only [LTS Node versions](https://nodejs.org/en/about/previous-releases) are supported. You can add the [node](https://www.npmjs.com/package/node) package to your CLI to ensure users are on a specific Node version.


## Create oclif project from scratch

To create a new oclif project from scratch, you can run the `oclif generate` command:

```
$ npx oclif generate mynewcli
? npm package name (mynewcli): mynewcli
$ cd mynewcli
$ ./bin/dev.js hello world
hello world! (./src/commands/hello/world.ts)
```

This will create a new project based on our [templates](./templates.md). To learn more about what's included in these templates, we encourage you to read over their documentation [here](./templates.md).

Once `oclif generate` is complete, you can run your CLI using the included [bin scripts](./templates.md#bin-scripts)

Use `bin/dev.js` to run your CLI in development mode:

```
$ ./bin/dev.js hello world
hello world! (./src/commands/hello/world.ts)
```

Use `bin/run.js` to run your CLI in production mode:

```
$ ./bin/run.js hello world
hello world! (./src/commands/hello/world.ts)
```

## Initialize oclif in an existing project

If you'd like to start using oclif inside an existing project of yours, then you can use the `oclif init` command to add the necessary files, dependencies, and configuration.

```
$ npx oclif init
? Command bin name the CLI will export (my-pkg): my-pkg
? Select topic separator: spaces
? Select a module type: CommonJS
? Select a package manager: npm

Created CLI in my-pkg
```

`oclif init` will add the following:
- bin scripts: bin/run.js, bin/run.cmd, bin/dev.js, and bin/dev.cmd. See [bin scripts](./templates.md#bin-scripts) for more.
- oclif section to package.json with bin, dirname, commands, and topicSeparator set. See [Configuring Your CLI](./configuring_your_cli.md) for more.
- `@oclif/core` to dependencies in your package.json (if it's not already there)
- `ts-node` to devDependencies in your package.json (if it's not already there)

## Next Steps

### Add commands
Once you've generated an oclif project or initialized it in your existing project, you can begin adding new [commands](./commands.md):

```
npx oclif generate command foo:bar
```

This will create a new command in `src/commands/foo/bar.ts` that can be customized to do whatever you need it to do.

The documentation for [flags](./flags.md) and [args](./args.md) covers how to add these to your command and the documentation for [commands](./commands.md) covers the other options you can set on your command.

### Add hooks

You can also add [hooks](./hooks.md) to your CLI that allow you to further customize the behavior of your CLI:

```
npx oclif generate hook my-hook --event init
```

### Further customizations

- [Configuring Your CLI](./configuring_your_cli.md)
- [Custom Help](./help_classes.md)
- [Use a Base Command Class](./base_class.md)
- [Enhance the user experience](./user_experience.md)

## Other Tutorials

Our friend, [@joshcanhelp](https://github.com/joshcanhelp), wrote a fantastic [tutorial on his blog](https://www.joshcanhelp.com/oclif/) that we encourage you to read as well.
