---
title: Help Classes
---

Out of the box oclif provides a great help experience for both single and multi-command CLIs via [@oclif/plugin-help](https://github.com/oclif/plugin-help). 

User can invoke help with the `--help` flag.

```
$ my-cli login --help
```

And with the `-h` short flag if all argument positions have been filled (otherwise the short flag will be considered arg input).

```
$ my-cli whoami -h
```

If you want your CLI to have an explicit `help` command, add `@oclif/plugin-help` as an [oclif plugin in your config](./plugins.md).

```
$ my-cli help
```

Note: `@oclif/plugin-help` is packaged with `@oclif/command` so you do not need to add it to your dev dependencies.



## Custom Help

Starting in `@oclif/command@1.6.0` which packages v3 of `@oclif/plugin-help`, you can now customize your CLI's help output by implementing the `HelpBase` abstract class.

If you have not done so yet, update `@oclif/command`.

```
$ yarn add --latest @oclif/command
```

To get started, first define the filepath to your help class in oclif's config in package.json. This is a relative path to the help class, without a file extension.

For this example, the help class will be created in a file at "[project root]/src/help.ts".

```
{
  // ...
  "oclif": {
    "helpClass": "./lib/help"
    // ...
  }
  // ...
}
```

From here there are two paths, implement the `HelpBase` abstract class yourself or overwrite the parts of the default `Help` class you want to customize (ex: how command usage is displayed). We recommend the latter approach but cover both below.


## Extending the `HelpBase` class

The `HelpBase` abstract class provides a starting point requiring the minimum needed methods implemented to be compatible with oclif.

```TypeScript
import {HelpBase} from '@oclif/plugin-help';
import {Command} from '@oclif/config';

export default class CustomHelp extends HelpBase {
  showHelp(args: string[]) {
    console.log('This will be displayed in multi-command CLIs')
  }

  showCommandHelp(command: Command) {
    console.log('This will be displayed in single-command CLIs')
  }
}
```

The `showHelp` method is called by oclif to display help in multi-command CLIs, while `showCommandHelp` is called directly for single-command CLIs.

The class is instantiated with a `config` property that provides helpful context for constructing your custom output.

To see an example of what is possible take a look at the source code for the [default `Help` class exported from @oclif/plugin-help](https://github.com/oclif/plugin-help/blob/master/src/index.ts).


## Extending the default `Help` class

The default `Help` class provides many method “hooks” that make it easy to override the particular parts of help's output you want to customize.

```TypeScript
import Help from '@oclif/plugin-help';
import {Command, Topic} from '@oclif/config';

export default class MyHelpClass extends Help {
  // acts as a "router"
  // and based on the args it receives
  // calls one of showRootHelp, showTopicHelp,
  // or showCommandHelp
  showHelp(args: string[]): void {
  }

  // display the root help of a CLI
  showRootHelp(): void {
  }

  // display help for a topic
  showTopicHelp(topic: Topic): void {
  }

  // display help for a command
  showCommandHelp(command: Command): void {
  }

  // the default implementations of showRootHelp
  // showTopicHelp and showCommandHelp
  // will call various format methods that
  // provide the formatting for their corresponding
  // help sections;
  // these can be overwritten as well

  // the formatting responsible for the header
  // displayed for the root help
  formatRoot(): string {
  }

  // the formatting for an individual topic
  formatTopic(topic: Config.Topic): string {
  }

  // the formatting for a list of topics
  protected formatTopics(topics: Config.Topic[]): string {
  }

  // the formatting for a list of commands
  formatCommands(commands: Config.Command[]): string {
  }

  // the formatting for an individual command
  formatCommand(command: Config.Command): string {
  }
}
```

To see the default implementation of these methods take a look at the [default `Help` class exported from @oclif/plugin-help](https://github.com/oclif/plugin-help/blob/master/src/index.ts).

To start experimenting, define `showCommandHelp` in your custom help class and change the output.


```TypeScript
import Help from '@oclif/plugin-help';
import {Command, Topic} from '@oclif/config';

export default class MyHelpClass extends Help {
  public showCommandHelp(command: Config.Command) {
    console.log('Display my custom command help!')
  }
}
```

Then run help for any command.

```
$ my-cli login --help
Display my custom command help!
```


## Building custom help classes in JavaScript projects

These examples above followed a TypeScript project. For  JavaScript project with an example help file at "[project root]/src/help.js" would have a package.json with the `helpClass` defined:

```
{
  // ...
  "oclif": {
    "helpClass": "./src/help"
    // ...
  }
  // ...
}
```

The imports are handled slightly different for JavaScript projects but the rest of the help class mimic the TypeScript examples above, except without type annotations.

```js
const {HelpBase} = require('@oclif/plugin-help');

module.exports = class MyHelpClass extends HelpBase {
  showHelp(args) {
    console.log('This will be displayed in multi-command CLIs')
  }

  showCommandHelp(command) {
    console.log('This will be displayed in single-command CLIs')
  }
}
```

```js
const Help = require('@oclif/plugin-help').default;

module.exports = class MyHelpClass extends Help {
  showHelp(args) {
  }

  showRootHelp() {
  }

  showTopicHelp(topic) {
  }

  showCommandHelp(command) {
  }

  formatRoot() {
  }

  formatTopic(topic) {
  }

  formatTopics(topics) {
  }

  formatCommands(commands) {
  }

  formatCommand(command) {
  }
}
```
