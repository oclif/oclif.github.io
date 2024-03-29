---
title: Flexible Taxonomy
description: Unlock new levels of user-friendliness
---

If you'd like for your customers to execute commands without adhering to the defined command taxonomy, you can enable `flexibleTaxonomy` and add a hook to the `oclif` section of your package.json:

```json
{
  "oclif": {
    "flexibleTaxonomy": true,
    "hooks": {
      "command_incomplete": "./dist/hooks/command_incomplete.js"
    }
  }
}
```

There are two main benefits to enabling flexible taxonomy:

1. It makes your CLI more user-friendly. For example, you might have a command, `my-cli foobars list`. If a user mistakenly enters `my-cli list foobars` then oclif will automatically know that it should execute `foobars list` instead of throwing an error.
2. It gives you the opportunity to prompt a user for the right command if they only provide part of a command. This makes individual commands more discoverable, especially if you have a large number of commands. See [Hook Implementation](#hook-implementation) for more details.

### Hook Implementation

When `flexibleTaxonomy` is enabled, oclif will run the `command_incomplete` hook anytime a user enters an incomplete command (e.g. the command is `one two three` but they only entered `two`). This hook gives you the opportunity to create an interactive user experience.

This example shows how you can use the [inquirer](https://www.npmjs.com/package/inquirer) package to prompt the user for which command they would like to run:

```typescript
import { Hook, toConfiguredId, toStandardizedId } from '@oclif/core';
import { select } from '@inquirer/prompts';

const hook: Hook.CommandIncomplete = async function ({
  config,
  matches,
  argv,
}) {
  const command = await select({
    message: 'Which of these commands would you like to run?',
    choices: matches.map((p) => toConfiguredId(p.id, config)),
  });

  if (argv.includes('--help') || argv.includes('-h')) {
    return config.runCommand('help', [toStandardizedId(command, config)]);
  }

  return config.runCommand(toStandardizedId(command, config), argv);
};

export default hook;
```

This is the prompt that the user would see:

```
$ my-cli list
? Which of these commands did you mean (Use arrow keys)
❯ foobars list
  config list
  env list
```
