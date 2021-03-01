---
title: Introducing @oclif/core
---
Greetings!

We hope this blog post finds you well.

### Introducing... 

We are excited to announce the next iteration of the oclif project today: `@oclif/core`.

We have learned a lot in the last three years of developing oclif, developing on oclif and supporting millions of command runs a day via Heroku and Salesforce CLIs.
`@oclif/core` ("Core") simplifies the oclif development experience and introduces highly requested new features.

Core combines the essential oclif packages into one "core" package, aptly named `@oclif/core`. 

Core also introduces:
- A default command option
- Colon or space command syntax
- Async command parsing
- Command piping to arguments

With the introduction of default command functionality, Core simplifies the oclif project and removes the notion of single or multi command CLIs. Core CLIs can have 1 or many commands.

Along with Core, we moved the oclif-dev CLI into the oclif CLI creating a single "utility" CLI. This CLI also introduces a new AWS S3 compatible publishing scheme.

### What to expect in the near future

Core is in pre-release beta and being actively developed for new internal Salesforce CLIs.

Much documentation needs to be written in the coming months including migration paths. Migration onto Core should be as painless as possible with many exports remaining entirely unchanged. Look for forthcoming blog posts and documentation on [oclif.io](https://oclif.io).

Early this summer, tentively June 1, we will release Core v1. Core's release will coincide with major bumps to many other oclif plugin packages. See the compatibility matrix below.

At Core's v1 release, the current "main" oclif packages (namely: command, config, errors & parser) will go into maintenance mode until Jan 2022. They will receive _only_ bug and security fixes and they remain compatible with current versions of the oclif and oclif-dev CLIs. Afterwhich, they will be archived.

Companioning Core, the next major release of the oclif CLI (literally `oclif@2`) will generate Core CLIs. 

### Going forward

We are excited to release Core! We invite you to poke around the [Core repo](https://github.com/oclif/core). It may appear to be a big change but Core keeps what you already enjoy about oclif while reducing development complexity, project dependencies, package coupling and bundle size and introduces many requested features previously too prickly to weave into the current oclif architecture.

Best,

The oclif team

#### Reference: Compatibility matrix

| | oclif "v1" | oclif "Core" |
| - | - | -| 
| Utility CLIs | oclif@<2<br/>@oclif/dev-cli@<2 | oclif@>=2
| Main packages | @oclif/command@<2<br/>@oclif/config@<2<br/>@oclif/errors@<2<br/>@oclif/parser@<4<br/>@oclif/plugin-help@<4<br/> | @oclif/core@>=1
| Node LTS | Node v8-14 | Node v12+ |
| Typescript | typescript@<4 | typescript@>=4 |
| Main plugins | @oclif/plugin-autocomplete@<1<br/>@oclif/plugin-commands@<2<br/>@oclif/plugin-help@<4<br/>@oclif/plugin-not-found@<2<br/>@oclif/plugin-plugins@<2<br/>@oclif/plugin-update@<2<br/>plugin-warn-if-update-available@<2<br/>plugin-which@<2<br/> | @oclif/plugin-autocomplete@>=2<br/>@oclif/plugin-commands@>=2<br/>@oclif/plugin-help@>=4<br/>@oclif/plugin-not-found@>=2<br/>@oclif/plugin-plugins@>=2<br/>@oclif/plugin-update@>=2<br/>@oclif/plugin-warn-if-update-available@>=2<br/>@oclif/plugin-which@>=2<br/> |
