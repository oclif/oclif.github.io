---
title: Introducing @oclif/core
---
Greetings!

We hope this blog post finds you well.

### Introducing... 

We are excited to announce the next iteration of the oclif project today: `@oclif/core`.

We have learned a lot in the last three years of developing oclif and developing on oclif, running millions of commands a day via Heroku & Salesforce CLIs.
`@oclif/core` ("Core") simplifies the development experience and introduces highly requested new features.

Core combines the essential oclif packages into one "core" package, aptly named `@oclif/core`. 

Core also introduces:
- A default command option so "multi" CLIs can execute a default command at the bare bin
- Use colon or spaced command syntax
- Async parsing 
- Command piping to arguments
- Global flags

With default command functionality, Core simplifies the oclif project and removes the notion of single vs multi command CLIs. Core CLIs can have 1 or many commands.

Along with Core, we have combined the oclif and oclif-dev CLIs into a single CLI with a new AWS S3 compatible publishing scheme.

### What to expect in the near future

Core is in pre-release beta and being actively developed for new internal Salesforce CLIs.

Much documentation needs to be written in the comming months including migration paths. Look for forthcoming blog posts and documentation on [oclif.io](https://oclif.io).

I've written Core with current CLIs migration in mind. Migration onto it should be as painless as possible with many exports remaining entirely unchanged.

Early this summer, tentively June 1, we will release Core v1. Core's release will coincide with major bumps to many oclif plugin packages. See the compatablility matrix below (which will be included in documentaion).

At Core's v1 release, the current essential oclif packages (namely: command, config, errors & parser) will go into maintenance mode until Jan 2022. They will receive _only_ bug and security fixes and they remain compatable with current versions of the oclif and oclif-dev CLIs.

Companioning Core, the next major release of the oclif CLI (literally `oclif@2`) will generate Core CLIs. 

### Going forward

We are excited to release Core! We invite you to poke around the [Core repo](https://github.com/oclif/core). It may appear to be a big change but Core keeps what you already enjoy about oclif while reducing development complexity, project dependencies, package coupling and bundle size and introduces many requested features previously too prickly to weave into the current oclif architecture.

Best,

The oclif team

#### Reference: Compatability matrix

| | oclif "v1" | oclif "Core" |
| - | - | -| 
| Helper CLIs | oclif@<2<br/>@oclif/dev-cli@<2 | oclif@>=2
| Essential packages | @oclif/command@<3<br/>@oclif/config@<3<br/>@oclif/errors@<3<br/>@oclif/parser@<3<br/>@oclif/plugin-help@<3<br/> | @oclif/core@>=1
| Node LTS | Node v8-14 | Node v12+ |
| Typescript | typescript@<4 | typescript@>=4 |
| Main Plugins | @oclif/plugin-help@<3<br/>@oclif/plugin-help@<3<br/>@oclif/plugin-help@<3<br/>@oclif/plugin-help@<3<br/>@oclif/plugin-help@<3<br/>@oclif/plugin-help@<3<br/> | @oclif/plugin-help@<3<br/>@oclif/plugin-help@<3<br/>@oclif/plugin-help@<3<br/>@oclif/plugin-help@<3<br/>@oclif/plugin-help@<3<br/>@oclif/plugin-help@<3<br/>@oclif/plugin-help@<3<br/>|
