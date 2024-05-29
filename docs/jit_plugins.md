---
title: Just-in-Time Plugin Installation
description: Support for just-in-time plugin installation
---

Sometimes you might want to have a plugin that isn't bundled in your CLI but gets installed the first time it's executed by the user - we call this just-in-time plugin installation, or JIT for short. This can be useful if you need to reduce the package size of your CLI while still allowing users access to all the plugins.

To use this feature you need to:

1. Add `jitPlugins` to the `oclif` section of your package.json

```json
"oclif": {
  "jitPlugins": {
    "my-plugin": "^1.2.3",
    "another-plugin": "^1.2.3",
  }
}
```

2. Ensure that your build process includes generating a manifest using `oclif manifest`. The manifest will include the information about all the commands owned by JIT plugins which allows users to run `--help` on those commands without having them installed yet. **If the generated manifest doesn't get packed with your CLI, then the feature will not work.**

3. Implement the `jit_plugin_not_installed` hook.

oclif attempts to be UX-agnostic, meaning that we don't want to impose any particular user experience on you. Any time a user experience is required we utilize [hooks](./hooks.md) so that you can design the exact user experience you want your users to have.

In the case of JIT plugin installation, there are many possible user experiences that you might want - maybe you want to prompt the user for confirmation first, or maybe you want to log a specific message, etc...

Here's an example of how you might implement the hook,

```typescript
import { Hook, Errors } from '@oclif/core';
import confirm from '@inquirer/confirm';

const hook: Hook.JitPluginNotInstalled = async function (opts) {
  try {
    const answer = await confirm({
      message: `${opts.command.pluginName} not installed. Would you like to install?`
    })
    if (answer) {
      await opts.config.runCommand('plugins:install', [`${opts.command.pluginName}@${opts.pluginVersion}`]);
    }
  } catch (error) {
    throw new Errors.CLIError(`Could not install ${opts.command.pluginName}`, 'JitPluginInstallError');
  }
};

export default hook;

```
