---
title: Features
---

Here are some key features that set oclif apart from other CLI frameworks.

### Flag and Argument Parsing

No CLI framework would be complete without a flag parser. We've built a custom flag parser from years of experimentation that we feel is flexible enough to make an easy, predictable user experience but without compromising type safety for the developer.

### Configurable Topic Separators

By default, topics are separated with colons, such as `my:awesome:command`. However, you can use spaces if you prefer, such as `my awesome command`.

### Super Speed

The overhead for running an oclif CLI command is almost nothing. [The command requires very few dependencies](https://www.npmjs.com/package/@oclif/core?activeTab=dependencies); for example, only 28 dependencies are required for a minimal setup, including all transitive dependencies. Also, only the command to be executed requires Node.js. Which means that a large CLI with many commands loads just as fast as a small CLI with just a single command.

### CLI Generator

You can get started from scratch quickly because you need to run just a single command to scaffold out a fully functional CLI. See [Generator Commands](https://oclif.io/docs/generator_commands).

### Testing Helpers

We've worked hard to make commands easily testable and easy to mock out stdout and stderr. The CLI generator automatically creates scaffolded tests.

### Auto-documentation

By default, you pass `--help` to a CLI command to get help, such as the flag options and argument information. This information is also automatically added to the README whenever the CLI's npm package is published. See the [plugin-plugins](https://github.com/oclif/plugin-plugins) as an example.

### Plugins

Using plugins, users of the CLI can extend it with new functionality, a CLI can be split into modular components, and functionality can be shared amongst multiple CLIs. See [Building your own plugin](https://oclif.io/docs/plugins#building-your-own-plugin).

### Hooks

Use lifecycle hooks to run functionality any time a CLI starts, or on custom triggers. Use this whenever custom functionality needs to be shared between various components of the CLI. See [Hooks](https://oclif.io/docs/hooks).

### JSON Output

You can opt-in to using the `--json` flag which will automatically suppress console logs and display the final result of the command as valid JSON output. This is very useful if you want your CLI to be used for scripting in CI/CD environments. See [JSON](https://oclif.io/docs/json).

### Flexible Taxonomy

You can opt-in to what we call [flexible taxonomy](./flexible_taxonomy.md). When enabled, this features allows users to execute commands without adhering to your defined command taxonomy.

This is a great way to make your CLI more user friendly, especially if you have long command names that can be hard for users to remember. For example, it might be hard for users to remember if the command is called `project deploy metadata start` or if it's called `project start deploy metadata` - with flexible taxonomy, both are valid!

### TypeScript (or not)

Everything in the core of oclif is written in TypeScript and the generator can build fully configured TypeScript CLIs or just plain JavaScript CLIs. By virtue of static properties in TypeScript the syntax is a bit cleaner in TypeScript — but everything will work no matter which language you choose. If you use plugins support, the CLI will automatically use `ts-node` to run the plugins making it easy and fast to use TypeScript with minimal-to-no boilerplate needed for any oclif CLI.

### Auto-updating Installers

oclif can package your CLI into [different installers](releasing.md) that will not require the user to already have node installed on the machine. These can be made auto-updatable by using [plugin-update](https://github.com/oclif/plugin-update).

### Autocomplete

Include terminal autocompletion for your CLI via [plugin-autocomplete](https://github.com/oclif/plugin-autocomplete). Once installed, users can complete command names and flag names.

```bash
$ my-cli p<tab><tab> # will list all commands starting with 'p' for completion
```
