---
title: Features
---

Here are some key features that set oclif apart from other CLI frameworks.

### Flag and Argument Parsing

No CLI framework is complete without a flag parser. We've built a custom flag parser from years of experimentation that we feel is flexible enough to make an easy, predictable user experience but without compromising type safety for the developer.

### Configurable Topic Separators

By default, topics are separated with colons, such as `my:awesome:command`. However, you can use spaces if you prefer, such as `my awesome command`.

### Super Speed

The overhead for running an oclif CLI command is almost nothing. [The command requires few dependencies](https://www.npmjs.com/package/@oclif/core?activeTab=dependencies); for example, only 17 dependencies are required for a minimal setup. Also, only the command to be executed requires Node.js. Which means that a large CLI with many commands loads as fast as a small CLI with just a single command.

### CLI Generator

You can get started from scratch quickly; all you need is a single command to scaffold out a fully functional CLI. See [Generator Commands](https://oclif.io/docs/generator_commands).

### Testing Helpers

We've worked hard to make commands easily testable and easy to mock out stdout and stderr. The CLI generator automatically creates scaffolded tests.

### Auto-documentation

By default, you pass `--help` to a CLI command to get help, such as the flag options and argument information. This information is also automatically added to the README whenever the CLI's npm package is published. See the [plugin-plugins](https://github.com/oclif/plugin-plugins) as an example.

### Plugins

Using plugins, you can extend a CLI with new functionality, split it into modular components, and share its functionality among multiple CLIs. See [Building your own plugin](https://oclif.io/docs/plugins#building-your-own-plugin).

### Hooks

Use lifecycle hooks to run functionality anytime a CLI starts, or on custom triggers. Use hooks whenever you want to share custom functionality between various components of the CLI. See [Hooks](https://oclif.io/docs/hooks).

### JSON Output

Your CLI can opt in to using the `--json` flag, which causes commands to automatically suppress console logs and display their final results as valid JSON output. The `--json` flag is useful if you want to use your CLI for scripting in CI/CD environments. See [JSON](https://oclif.io/docs/json).

### Flexible Taxonomy

You can opt in to what we call [flexible taxonomy](./flexible_taxonomy.md). When enabled, this feature allows users to execute commands without adhering to your defined command taxonomy.

This feature makes your CLI more user-friendly, especially if you have long command names which users find difficult to remember. For example, users can find it hard to remember if a command is called `project deploy metadata start` or `project start deploy metadata` - with flexible taxonomy, it doesn't matter because both are valid!

### TypeScript (or not)

Everything in the core of oclif is written in TypeScript, and the CLI generator can build both fully configured TypeScript or plain JavaScript CLIs. Because of TypeScript static properties, the syntax is a bit cleaner in TypeScript — but everything works, no matter which language you choose. If you use plugins support, the CLI automatically uses `ts-node` to run the plugins, which makes it easy and fast to use TypeScript with minimal-to-no boilerplate needed for any oclif CLI.

### Auto-Updating Installers

oclif can package your CLI into [different installers](releasing.md) that don't require the user to already have Node.js installed on their computer. You can make these installers auto-updatable by using [plugin-update](https://github.com/oclif/plugin-update).

### Autocomplete

Include terminal autocompletion for your CLI with the [plugin-autocomplete](https://github.com/oclif/plugin-autocomplete). After the autocomplete feature is configured, users can complete command names and flag names by pressing the `tab` key.

```bash
$ my-cli p<tab><tab> # lists all commands starting with 'p' for completion
```
