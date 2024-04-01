---
title: oclif Spring 2024 Update
---

Hello oclif developers! It's been a while since we last uploaded a blog - and *a lot* has happened.

We've been focusing on these high-level areas over the past couple of years:
- Improving `@oclif/core`
- ESM Support
- Improving and revitalizing oclif.io
- Re-engaging the oclif community

## Improving `@oclif/core`

Since we [announced `@oclif/core` over three years ago](./2021-03-01-introducing-oclif-core.md), we've released two new major versions, each packed with lots of features that we're really excited about.

Here are some of these changes:
- Full support for ESM and interoperability with CommonJS (more on this topic below).
- Configurable command discovery features that give you more control over how commands are loaded at runtime. Check out the [docs](/docs/command_discovery_strategies.md).
- A new `preparse` hook that allows you to manipulate the provided arguments before they're parsed. Salesforce used this hook to [implement](https://github.com/salesforcecli/cli/pull/1536) a neat `--flags-dir` feature that translates files into flags.
- A new `Performance` class that you can use to track performance inside of `@oclif/core` and your own CLI or plugin. Check out the [docs](/docs/performance).
- A new flag type, `Flags.option`, that lets you define a flag with a preset list of options. Typescript then uses the options to infer the flag's type.
- Flags now have a `relationship` property that allows you to define more complex relationships between flags. Check out the [flags docs](/docs/flags) for more information.
- Flags now have a `defaultHelp` property that allows you to set the human readable default value in the command help. This property is useful when your flag's `parse` method returns a complex type, such as an object or a class. Check out the [flags docs](/docs/flags) for more.
- Commands now have a `hiddenAliases` property that allows you to define aliases that you want to hide from the user. The property is super helpful when you're trying to wean users off a deprecated command.
- You can now use [bun](https://bun.sh/) or [tsx](https://www.npmjs.com/package/tsx) as dev runtimes (as opposed to node or ts-node).
- A command's usage, args, and flags are now shown whenever a user forgets to provide a required arg or flag, or when they provided a non-existent flag.

If you need help migrating to the latest version, head over to [core's README](https://github.com/oclif/core/?tab=readme-ov-file#-migrating) which has links to the migration guides. Feel free to open a new [discussion](https://github.com/oclif/core/discussions) if you need more hands-on help from us or the community.

## ESM Support

Version 3 of `@oclif/core` introduced full support for developing ESM plugins and CLIs. It also offered full support for interoperability between CommonJS and ESM plugins.

Put more simply, you can now migrate your CLI to ESM while keeping individual plugins in CommonJS (or vice versa). The upgrade path is now much simpler for you. You also don't need to worry about any community plugins that have migrated to ESM before you did (such as all the `@oclif` plugins) or are staunchly sticking with CommonJS for the foreseeable future.

Read more about this topic [here](/docs/esm.md).

## Improving and Revitalizing oclif.io

Another area of focus for us has been improving our documentation site, [oclif.io](htttps://oclif.io).

While improving the quality and accuracy of the documentation was our priority, we also took the time to upgrade to the latest version of [docusaurus](https://docusaurus.io/). This new version gave our site a much-needed facelift, as well as cool new features such as dark mode and announcements.

If you have any feedback or are running into issues, we want to hear about it. Just create an issue in the [oclif.io repo](https://github.com/oclif/oclif.github.io/issues).

## Re-engaging the oclif Community

Lastly, our biggest priority at the moment is to re-engage the oclif community. We understand how frustrating it has been over the years to see your issues and pull requests go unacknowledged. We apologize for not prioritizing the community, and are earnestly trying to make sure that every issue and pull request gets the attention it deserves going forward. 

We also opened up GitHub discussions for [@oclif/core](https://github.com/oclif/core/discussions) and the [oclif CLI](https://github.com/oclif/oclif/discussions), where you can now post your questions or ideas. We hope you take advantage of them, we love hearing from you!

One last thing: we intend to publicly post our roadmap so you have more visibility into what we're working on. Stay tuned!

All our best,

The oclif team
