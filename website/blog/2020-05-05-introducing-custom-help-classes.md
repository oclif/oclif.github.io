---
title: Customizing Help in oclif
---

Out of the box oclif provides a great help experience for both single and multi-command CLIs via [@oclif/plugin-help](https://github.com/oclif/plugin-help).

But what if, as an oclif developer, you want to customize some or all of the output?

Starting in `@oclif/core@1.6.0` which packages v3 of `@oclif/plugin-help`, you can now customize your CLI's help output by implementing the `HelpBase` abstract class.


## Getting started with custom help

If you have not done so yet, update `@oclif/core`.


```
$ yarn add --latest @oclif/core
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

From here there are two paths, implement the `HelpBase` abstract class yourself or overwrite the parts of the default `Help` class you want to customize (ex: how command usage is displayed). We recommend the latter approach but cover both in the new [Help Classes docs](../../../../docs/help_classes).


## Separating TOPICS & COMMANDS in the new deafult `Help` class

Previously, topics and child commands were listed in help output under a single list heading called "COMMANDS". But we found this can be slightly confusing. Some topics are commands also (a.k.a. topic-commands) while others are simply organizational namespacing (and when ran just show their help).

 The new default `Help` class provided in version 3 of `@oclif/plugin-help` splits the list of children into distinct lists of "TOPICS" and "COMMANDS", with the possibility of an item appearing in both if it a topic-command. This makes it clearer what is expected to be ran - "COMMANDS" - and what is providing structure - "TOPICS" - when looking at the help output.

```
VERSION
  plugin-help-example/0.0.0 darwin-x64 node-v12.12.0

USAGE
  $ plugin-help-example [COMMAND]

TOPICS
  topic  this is a topic and has child topics or commands

COMMANDS
  hello  describe the command here
  help   display help for plugin-help-example
```

We look forward to seeing what custom help features you implement in your oclif CLIs with this new feature!

