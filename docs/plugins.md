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

If your plugin is still not in the registry, you can still add it to your CLI with `yarn add <path-to-plugin>`, in case you have a local version, or with `yarn add git+ssh://git@git.mydomain.com:Username/Repository#{branch|tag}` if it hosted on a git repository. If you are going to install from a local copy or from a repository, make sure you generate the plugin manifest file by running `yarn run prepack` beforehand, otherwise you will get an error when your CLI tries to load it.

If you want users to be able to install their own plugins into your CLI, use the [plugins plugin](https://github.com/oclif/plugin-plugins).

## Useful Plugins

* [@oclif/plugin-not-found](https://github.com/oclif/plugin-not-found) - Display a friendly "did you mean" message if a command is not found.
* [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins) - Allow users to add plugins to extend your CLI.
* [@oclif/plugin-update](https://github.com/oclif/plugin-update) - Add autoupdate support to the CLI.
* [@oclif/plugin-help](https://github.com/oclif/plugin-help) - Help plugin for oclif.
* [@oclif/plugin-warn-if-update-available](https://github.com/oclif/plugin-warn-if-update-available) - Show a warning message if user is running an out of date CLI.
* [TODO: @oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete) - Add bash/zsh autocomplete.

## Building your own plugin

Writing code for plugins is essentially the same as writing within a CLI. They can export 3 different types: commands, hooks, and other plugins.

Run `npx oclif plugin mynewplugin` to create a plugin in a new directory. This will come with a sample command called `hello`.
