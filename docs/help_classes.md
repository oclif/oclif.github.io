---
title: Help Classes
---

Out of the box oclif provides a great help experience for CLIs. Users can invoke help with the `--help` flag.

```
$ my-cli login --help
```

If you want your CLI to have an explicit `help` command, add `@oclif/plugin-help` as an [oclif plugin in your config](./plugins.md).

```
$ my-cli help
```

## Custom Help

To get started, first define the filepath to your help class in oclif's config in package.json. This is a relative path to the help class, without a file extension.

For this example, the help class will be created in a file at "[project root]/src/help.ts".

```json
{
  "oclif": {
    "helpClass": "./dist/help"
  }
}
```

From here there are two paths, implement the `HelpBase` abstract class yourself or overwrite the parts of the default `Help` class you want to customize (ex: how command usage is displayed). We recommend the latter approach but cover both below.


## Extending the `HelpBase` class

The `HelpBase` abstract class provides a starting point requiring the minimum needed methods implemented to be compatible with oclif.

```TypeScript
import {Command, HelpBase} from '@oclif/core';

export default class CustomHelp extends HelpBase {
  showHelp(args: string[]) {
    console.log('This will be displayed in multi-command CLIs')
  }

  showCommandHelp(command: Command.Loadable) {
    console.log('This will be displayed in single-command CLIs')
  }
}
```

The `showHelp` method is called by oclif to display help in multi-command CLIs, while `showCommandHelp` is called directly for single-command CLIs.

The class is instantiated with a `config` property that provides helpful context for constructing your custom output.

To see an example of what is possible take a look at the source code for the [default `Help` class exported from @oclif/core](https://github.com/oclif/core/blob/main/src/help/index.ts).


## Extending the default `Help` class

The default `Help` class provides many method “hooks” that make it easy to override the particular parts of help's output you want to customize.

```TypeScript
import {Command, Help, Interfaces} from '@oclif/core'

export default class MyHelpClass extends Help {
  // acts as a "router"
  // and based on the args it receives
  // calls one of showRootHelp, showTopicHelp,
  // the formatting for an individual command
  formatCommand(command: Command.Loadable): string {}

  // the formatting for a list of commands
  formatCommands(commands: Command.Loadable[]): string {}

  // displayed for the root help
  formatRoot(): string {}

  // the formatting for an individual topic
  formatTopic(topic: Interfaces.Topic): string {}

  // the default implementations of showRootHelp
  // showTopicHelp and showCommandHelp
  // will call various format methods that
  // provide the formatting for their corresponding
  // help sections;
  // these can be overwritten as well

  // the formatting responsible for the header
  // the formatting for a list of topics
  protected formatTopics(topics: Interfaces.Topic[]): string {}

  // display help for a command
  showCommandHelp(command: Command.Loadable): void {}

  // or showCommandHelp
  showHelp(args: string[]): void {}

  // display the root help of a CLI
  showRootHelp(): void {}

  // display help for a topic
  showTopicHelp(topic: Interfaces.Topic): void {}
}

```

To see the default implementation of these methods take a look at the [default `Help` class exported from @oclif/core](https://github.com/oclif/core/blob/main/src/help/index.ts).

To start experimenting, define `showCommandHelp` in your custom help class and change the output.


```TypeScript
import {Command, Help} from '@oclif/core';

export default class MyHelpClass extends Help {
  public showCommandHelp(command: Command.Loadable) {
    console.log('Display my custom command help!')
  }
}
```

Then run help for any command.

```
$ my-cli login --help
Display my custom command help!
```
