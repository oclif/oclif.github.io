---
title: oclif Spring 2024 Update
---

Hello oclif developers! It's been an while since we last uploaded a blog - and *a lot* has happened.

The work we've been focusing on over the past couple of years focuses on a few high-level areas:
- Improving `@oclif/core`
- ESM Support
- Improving and revitalizing oclif.io
- Reengaging the oclif community

## Improving `@oclif/core`

Since we [announced `@oclif/core` over three years ago](./2021-03-01-introducing-oclif-core.md), we've released two new major versions, each packed with a lot of features that we're really exited about.

To name just a few:
- Full support for ESM as well as interoperability with CommonJS (more on this below).
- We introduced configurable command discovery features that gives you more control over how commands are loaded at runtime. Check out the [docs](/docs/command_discovery_strategies.md).
- We added `preparse` hook that allows you to manipulate the provided arguments before they're parsed. Salesforce used this to [implement](https://github.com/salesforcecli/cli/pull/1536) a neat `--flags-dir` feature that translates files into flags.
- There's now a `Performance` class that you can use to track performance inside of `@oclif/core` and your own CLI or plugin. Check out the [docs](/docs/performance).
- A new flag type, `Flags.option`, lets you define a flag with a preset list of options, which typescript will then use to infer the flag's type.
- Flags now have a `relationship` property that allows you to define more complex relationships between flags. Check out the [flags docs](/docs/flags) for more.
- Flags now have a `defaultHelp` property that allows you to set the human readable default value in the help. This is useful when your flag's `parse` method returns a complex type like an object or a class. Check out the [flags docs](/docs/flags) for more.
- Commands now have a `hiddenAliases` property that allows you to define aliases that should be hidden from the user. Super helpful when trying to wean users off a deprecated command.
- You can now use [bun](https://bun.sh/) or [tsx](https://www.npmjs.com/package/tsx) as dev runtimes (as opposed to node or ts-node)
- A command's usage, args, and flags are now shown whenever a user forgets to provide a required arg or flag or when they provided a non-existent flag.

As well as many other great changes!

If you need help migrating to the latest version, you can head over to [core's README](https://github.com/oclif/core/?tab=readme-ov-file#-migrating) where we have links to the migration guides. Feel free to open a new [discussion](https://github.com/oclif/core/discussions) if you need more hands-on help from us or the community.

## ESM Support

Version 3 of `@oclif/core` introduced full support for developing ESM plugins and CLIs in addition to offering full support for interoperability between CommonJS plugins and ESM plugins.

Put more simply, this means that you can migrate your CLI to ESM while keeping individual plugins in CommonJS (or vice versa). This makes the upgrade path much simpler for you and means that you don't have to worry about any community plugins that might have migrated to ESM before you (like all the `@oclif` plugins) or are staunchly sticking with CommonJS for the forseeable future.

You can read more about this [here](/docs/esm.md).

## Improving and Revitalizing oclif.io

Another area of focus for us has been improving our docs site, [oclif.io](htttps://oclif.io).

While improving the quality and accuracy of the documentation was our priority, we also took the time to upgrade to the latest version of [docusaurus](https://docusaurus.io/), which gave our site a much-need facelift as well as cool new features like dark mode and announcements.

We'd love to hear any feedback (or about any issue!) over at the [repo for oclif.io](https://github.com/oclif/oclif.github.io).

## Reengaging the oclif Community

Lastly, our biggest priority at the moment is to reengage the oclif community. We understand how frustrating it might have been over the years to see your issues and pull requests go unacknowledged. We apologize for not prioritizing the community and are earnestly trying to make sure that every issue and pull request gets it's deserved attention going forward.

We've also opened up github discussions for [@oclif/core](https://github.com/oclif/core/discussions) and the [oclif cli](https://github.com/oclif/oclif/discussions), where you can now post any questions or ideas you might have, which we hope you take advantage of - we'd love to hear from you!

One more thing: we intend to publicly post our roadmap so that you can have more visibility into what we're working on. So stay tuned for that!


All our best,

The oclif team
