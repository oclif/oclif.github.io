---
title: Customizing Help in oclif
---

The oclif project provides a common way of displaying help in all oclif CLIs. This functionality is provided by @oclif/plugin-help which has given a great initial experience but didn’t provide an easy way for developers to customize what was shown. This sought-after feature is now possible along with a new slightly tweaked default help output.

## How does help customization work?
Using @oclif/command as of *INSERT VERSION*, along with the new version 3 of @oclif/plugin-help, it is now possible to specify a custom help class. Here is a quick example of how this works with a more detailed description outlined in the [oclif documentation](https://oclif.io/docs/help_classes).

As an example we would specify the custom help class in package.json

```json
{
  ...
  "oclif": {
    "helpClass": "./lib/custom-help"
  }
}
```

This relative path points to where the custom help file would be located after typescript compilation. The actual file in source would be at "[project root]/src/custom-help.ts". There are two main ways of defining a help class inside this file. One way is to extend the base class and specify your help from scratch, or use the new default help class as a starting point and customize specific methods to alter the behavior.

## Extending the `HelpBase` class
By extending the base class you must provide two methods `showHelp`, used by multi-command CLIs, and `showCommandHelp` used by single-command CLIs.

```typescript
import {HelpBase} from '@oclif/plugin-help'
import {Command} from '@oclif/config'

export default class MyHelpClass extends HelpBase {
  showHelp(args: string[]) {
  }

  showCommandHelp(command: Command) {
  }
}
```

## Extending the default `Help` class
The new default help class in version 3 of @oclif/plugin-help provides many method “hooks” that can be extended. The `showHelp` method is used for "routing" the help to one of the `showRootHelp`, `showCommandHelp` (also used directly for single-command CLIs) or `showTopicHelp` methods. These three methods then log the relevant format methods. The `format` methods return commonly used formatted "blocks" of help whether it be for the root, topic, command or list variations. For more details check out the [Help Classes documentation](https://oclif.io/docs/help_classes). With these useful methods the various parts of help can be more easily customized.

```typescript
import Help from '@oclif/plugin-help';

export default class MyHelpClass extends Help {
  showHelp(args: string[]) {
  }

  showRootHelp() {
  }

  showCommandHelp(command: any) {
  }

  showTopicHelp(topic: any) {
  }
}
```

## The new `Help` class in @oclif/plugin-help
Previously, child commands and topics were listed under a single list called "COMMANDS". A command extends the `Command` class and is usually the default export from the command file. Topics provide a way of nesting CLI structure and therefore have children which are either topics or commands. The new default `Help` class provided in version 3 of @oclif/plugin-help includes a small improvement to highlight this distinction. This tweak involves splitting the list of children into distinct lists of topics and commands, with the possibility of an item appearing in both if it has children and is also a command. This makes it clearer what can be ran and what is providing structure when looking at the help output.

```
VERSION
  plugin-help-example/0.0.0 darwin-x64 node-v12.12.0

USAGE
  $ plugin-help-example [COMMAND]

TOPICS
  topic  This is a topic and has child topics or commands

COMMANDS
  hello  describe the command here
  help   display help for plugin-help-example
```
