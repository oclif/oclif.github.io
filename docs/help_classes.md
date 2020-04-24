---
title: Help Classes
---
Out of the box oclif provides a great help experience provided by @oclif/plugin-help. This can be customized or replaced with custom help classes. To get started make sure at least @oclif/command (*REPLACE WITH PUBLISHED VERSION*) and version 3 of @oclif/plugin-help are installed.

```
yarn add --latest @oclif/plugin-help@3
yarn add --latest @oclif/command
```

Note: Previously, in version 2 of @oclif/plugin-help topic and commands would be combined under one *COMMANDS* list for root, topic and command help output. In version 3 of @oclif/plugin-help the new default `Help` class splits these child topics and commands into distinct *TOPICS* and *COMMANDS* lists. The *TOPICS* list includes any direct children that contains their own child topics or commands, while the *COMMANDS* list represents direct children that are runnable commands.

Note: These examples will follow a typescript project but you can find a [list of the differences](#setting-up-extended-help-classes-in-javascript-projects) below that would apply to a javascript project.

To get started a path to the file containing the help class must be defined. This is a relative path to the help class, without an extension, in the "oclif" section of your package.json.

For this example the help class will be created in a file at "[project root]/src/help.ts" and the package.json would be updated to include the path:
```json
{
  ...
  "oclif": {
    "helpClass": "./lib/help"
  }
}
```

The help class exported from the defined file can extend from two different starting points, either `HelpBase` or the default `Help` class.

## Extending the `HelpBase` class

The `HelpBase` abstract class provides a starting point requiring the minimum needed methods implemented to be compatible with oclif.
```typescript
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

The `showHelp` method is called by oclif to display help in multi-command CLIs while `showCommandHelp` is called directly for single-command CLIs. The class is instantiated with a `config` property that also provides necessary context that might be helpful to include in the output. To see an example of what is possible take a look at the source code for the [default exported `Help` class from @oclif/plugin-help](https://github.com/oclif/plugin-help/blob/master/src/index.ts).

## Extending the default `Help` class

In version 3 of @oclif/plugin-help the default class has been reworked to provided many method “hooks” that should make it easy to tweak and override particular parts of the default help class as required. To see the default implementation of these methods it’s best to take a look at the [`Help` class exported from @oclif/plugin-help](https://github.com/oclif/plugin-help/blob/master/src/index.ts).

```typescript
import Help from '@oclif/plugin-help';
import {Command, Topic} from '@oclif/config';

export default class MyHelpClass extends Help {
  // acts as a "router" and based on the args it receives calls
  // one of showRootHelp, showTopicHelp, or showCommandHelp
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

  // the default implementations of showRootHelp, showTopicHelp
  // and showCommandHelp will call various format methods that
  // provide the formatting for the various help sections. These
  // can be extended as well.

  // the formatting responsible for the header displayed
  // for the root help
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

## Using `Help` classes in javascript projects

A javascript project with an example help file at "[project root]/src/help.js" would have a package.json with the `helpClass` defined:
```json
{
  ...
  "oclif": {
    "helpClass": "./src/help"
  }
}
```

The imports are handled slightly different for javascript projects but the rest of the help class mimic the typescript examples above, except without type annotations.

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
const {HelpBase} = require('@oclif/plugin-help');

module.exports = class MyHelpClass extends HelpBase {
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
