---
title: Features
---

### Flag/Argument parsing

No CLI framework would be complete without a flag parser. We've built a custom one from years of experimentation that we feel consistently handles user input flexible enough for the user to be able to easily use the CLI in ways they expect, but without comprisiming strictness guarantees to the developer.

### Super Speed

The overhead for running an oclif CLI command is almost nothing. [It requires very few dependencies](https://www.npmjs.com/package/@oclif/command?activeTab=dependencies). Also, only the command to be executed will be required with node. So large CLIs with many commands will load just as fast as a small one with a single command.

### CLI Generator

Run a single command to scaffold out a fully functional CLI and get started quickly. See [Usage](#-usage) below.

### Testing Helpers

We've put a lot of work into making commands easily testable and easy to mock out stdout/stderr. The generator will automatically create [scaffolded tests](https://github.com/oclif/example-multi-ts/blob/master/test/commands/hello.test.ts).

### Auto-documentation

By default you can pass `--help` to the CLI to get help such as flag options and argument information. This information is also automatically placed in the README whenever the npm package of the CLI is published. See the [multi-command CLI example](https://github.com/oclif/example-multi-ts)

### Plugins

Using plugins, users of the CLI can extend it with new functionality, a CLI can be split into modular components, and functionality can be shared amongst multiple CLIs. See [Building your own plugin](#-building-your-own-plugin) below.

### Hooks

Use lifecycle hooks to run functionality any time a CLI starts, or on custom triggers. Use this whenever custom functionality needs to be shared between various components of the CLI.

### TypeScript (or not)

Everything in the core of oclif is written in TypeScript and the generator can build fully configured TypeScript CLIs or just plain JavaScript CLIs. By virtue of static properties in TypeScript the syntax is a bit cleaner in TypeScript—but everything will work no matter which language you choose. If you use plugins support, the CLI will automatically use `ts-node` to run the plugins making it easy and fast to use TypeScript with minimal-to-no boilerplate needed for any oclif CLI.

### Coming soon: man pages

In addition to in-CLI help through `--help` and the README markdown help generation, the CLI can also automatically create man pages for all of its commands.

### Coming soon: Autocomplete

Automatically include autocomplete for your CLI. This includes not just command names and flag names, but flag values as well. For example, it's easy to configure the Heroku CLI to have completions for Heroku app names:

```bash
$ heroku info --app=<tab><tab> # will complete with all the Heroku apps a user has in their account
```
