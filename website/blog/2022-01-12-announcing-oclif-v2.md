---
title: Announcing oclif v2!
---

Hello and happy new year! It's our great pleasure to announce that we have released oclif v2, which uses the new [@oclif/core](https://github.com/oclif/core) library! 🎉

oclif v2 includes many changes that improve the experience of both creating and using an oclif CLI.

Going forward, we don't plan to make any updates to oclif v1 and its corresponding libraries, except for critical security fixes. See the [compatibility matrix](#compatibility-matrix) for a list of these libraries. In order to give developers time to migrate from v1 to v2, we're not completely dropping support yet. But at some point in the future we'll archive the v1 repositories and deprecate their versions on npm.

## What’s changing?

### Repository Changes

All repositories under the [oclif org](https://github.com/oclif/) now use `main` as their primary branch and `oclif-v1` as the legacy branch. The `main`  branch corresponds to oclif v2 and the `oclif-v1` branch to oclif v1. If you find any repos that don’t have a `main` branch, you can safely assume that they're not used in oclif v2 and will be deprecated in the future.

### Consolidating Tools & Libraries

The [`oclif-dev`](https://github.com/oclif/dev-cli) CLI has now been incorporated into [`oclif`](https://github.com/oclif/oclif). You now no longer need to install a separate package to manage your entire CLI’s lifecycle.

The following libraries have been consolidated under [`@oclif/core`](https://github.com/oclif/core) and will be deprecated at some point in the future. Read the [migration guide](https://github.com/oclif/core/blob/main/MIGRATION.md) to learn how to update your CLI or plugin to use the new core library.

* `@oclif/command`
* `@oclif/config`
* `@oclif/error`
* `@oclif/help`
* `@oclif/parser`

### No more single vs multi command CLIs

There's only one "type" of oclif v2 CLI, but it can have as few or as many commands as a developer wants. As a result, there’s only one command to generate CLIs, `oclif generate`, as opposed to the old `oclif single` and `oclif multi` commands.

### Node > 12

To ensure oclif CLIs are as secure as possible, all v2 libraries and plugins support only Node 12 or higher as of now. Going forward, they'll support only Node Maintenance or higher, as defined by Node's release schedule here: https://nodejs.org/en/about/releases/.

## What’s new?

### New example CLI

[`oclif-hello-world`](https://github.com/oclif/hello-world/) is our new example repo. This is also the repo that's [used as a template](https://github.com/oclif/oclif/blob/edc6616e51/src/generators/cli.ts#L74) when running `oclif generate` to create a new CLI. This repo will always be able to be referenced as an example of what an oclif v2 CLI should look like.

### Spaced commands

oclif CLIs can now use spaces, instead of colons, to separate topics and subcommands. To enable this feature, simply add `“topicSeparator": " "` to the oclif config in your package.json. See an example in our [example repo](https://github.com/oclif/hello-world/blob/main/package.json#L55).

```
// Old commands that use :
$ mycli do:something
```
```
// New spaced commands
$ mycli do something
```

> Note: Spaced commands are backwards compatible. So if you enable spaced commands for your CLI, users will still be able to use `:` as a separator. This ensures that any existing scripts don't break.

### New Help Output

We’ve revamped the way command help is outputted to the terminal, making it both easier to implement and easier to read. See the difference between the old help output on the left and the new help output on the right in the screenshots below.

<table border="0">
 <tr>
    <td>oclif v1</td>
    <td>oclif v2</td>
 </tr>
 <tr>
    <td><img src="/img/2022-01-12-announcing-oclif-v2/sfdx-help.png"/></td>
    <td><img src="/img/2022-01-12-announcing-oclif-v2/sf-help.png"/></td>
 </tr>
</table>

Notice that there are new sections for flags and global flags, examples are displayed with better spacing, and there is a section at the bottom called Configuration Variables. This Configuration Variables section is not part of the new help by default. But we've added support for custom help sections, which is what the `sf` CLI uses to create the new section.

### Async Command Parsing

We’ve also improved the performance of new CLIs by rewriting how commands are parsed on initialization. The [new parser](https://github.com/oclif/core/blob/main/src/parser/parse.ts) is asynchronous, which makes CLIs with a lot of commands or installed  plugins much faster.

## What’s coming next?

Part of our charter for the release of oclif v2 includes improving our engagement with the oclif community. We know that over the past couple of years we’ve reduced our involvement, and a lot of issues and PRs have languished in limbo. Hopefully you’ve already seen increased activity and responses from oclif maintainers recently, but if you haven’t, please don’t hesitate to ping us by tagging [@admins](https://github.com/orgs/oclif/teams/admins) in oclif repos.

We also want to start interviewing members of the oclif community to acquire feedback and prioritize the features and fixes you deem most important!

Best,

The oclif team

<br/>

### Reference material

#### Migration Guide

This guide explains how to upgrade a CLI or plugin from the old oclif v1 libraries to the new `@oclif/core` library that oclif v2 uses.

https://github.com/oclif/core/blob/main/MIGRATION.md

#### Compatibility Matrix

The following matrix shows how the v1 libraries and plugins relate to the new v2 ones. Use this matrix as a guide to know what to drop and which versions to switch when upgrading your plugins and CLIs to v2.

| | oclif "v1" | oclif "v2" |
| - | - | -|
| Utility CLIs | oclif@\<2<br/>@oclif/dev-cli@\<2 | oclif@>=2
| Main packages | @oclif/command<br/>@oclif/config<br/>@oclif/errors<br/>@oclif/parser<br/>@oclif/plugin-help<br/> | @oclif/core@>=1
| Node LTS | Node v8-14 | Node v12+ (at time of writing) |
| TypeScript | typescript@\<4 | typescript@>=4 |
| Main plugins | @oclif/plugin-autocomplete@\<1<br/>@oclif/plugin-commands@\<2<br/>@oclif/plugin-help@\<4<br/>@oclif/plugin-not-found@\<2<br/>@oclif/plugin-plugins@\<2<br/>@oclif/plugin-update@\<2<br/>plugin-warn-if-update-available@\<2<br/>plugin-which@\<2<br/> | @oclif/plugin-autocomplete@>=1<br/>@oclif/plugin-commands@>=2<br/>@oclif/plugin-help@>=4<br/>@oclif/plugin-not-found@>=2<br/>@oclif/plugin-plugins@>=2<br/>@oclif/plugin-update@>=2<br/>@oclif/plugin-warn-if-update-available@>=2<br/>@oclif/plugin-which@>=2<br/> |
