---
title: Plugins
---

Plugins are a great way to offer experimental functionality, allow users to extend your CLI, break up a CLI into modular components, or share functionality between CLIs.

Plugins can have commands or hooks just like a CLI. To add a plugin such as the [not-found plugin](https://github.com/oclif/plugin-not-found) plugin, first add it to your CLI with `yarn add @oclif/plugin-not-found`, then add the following to your `package.json`:

```js
{
  "name": "mycli",
  "version": "0.0.0",
  // ...
  "oclif": {
    "plugins": [
      "@oclif/plugin-help",
      "@oclif/plugin-not-found"
    ]
  }
}
```

If you want users to be able to install their own plugins into your CLI, use the [plugins plugin](https://github.com/oclif/plugin-plugins).

## Useful Plugins

* [@oclif/plugin-not-found](https://github.com/oclif/plugin-not-found) - Display a friendly "did you mean" message if a command is not found.
* [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins) - Allow users to add plugins to extend your CLI.
* [@oclif/plugin-update](https://github.com/oclif/plugin-update) - Add autoupdate support to the CLI.
* [@oclif/plugin-help](https://github.com/oclif/plugin-help) - Help plugin for oclif.
* [@oclif/plugin-warn-if-update-available](https://github.com/oclif/plugin-warn-if-update-available) - Show a warning message if user is running an out of date CLI.
* [@oclif/plugin-which](https://github.com/oclif/plugin-which) - Show which plugin a command comes from.
* [@oclif/plugin-commands](https://github.com/oclif/plugin-commands) - Add a `commands` command to list all the commands.
* [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete) - Add bash/zsh autocomplete.

## Community Plugins
* [conf-cli](https://github.com/natzcam/conf-cli) - Adds a `conf` command to share state/configuration between commands. Uses [sindresorhus/conf](https://github.com/sindresorhus/conf).
* [dynamic-commands](https://www.npmjs.com/package/oclif-dynamic-commands) - Load commands dynamically based on commands found under the current working directory.
* [Add yours here](https://github.com/oclif/oclif.github.io/blob/docs/docs/plugins.md)!

## Building your own plugin

Writing code for plugins is essentially the same as writing within a CLI. They can export 3 different types: commands, hooks, and other plugins.

Run `npx oclif generate mynewplugin` to create a plugin in a new directory. This will come with a sample command called `hello`.
