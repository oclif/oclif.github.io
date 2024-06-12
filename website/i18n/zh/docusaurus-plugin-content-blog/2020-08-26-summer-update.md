---
title: oclif 2020 夏季更新
---

Hello oclif developers! We hope you are all doing well.

Earlier this year, we started our planning for oclifconf v2 and, like all conference, had to change course. We opted not to hold a virtual conference, however, we wanted to take some time to highlight a few oclif features shipped this year.

## Feature: Help templating

One of the most requested features, help templating enables oclif developers to customize the help output for their CLI.

Read [the announcement](/blog/2020/05/05/introducing-custom-help-classes).

## Feature: Custom error delegation

This feature both improved how oclif throws and handles errors and allows oclif developers to overwrite or interject in oclif’s error handling.

Read [the announcement](/blog/2020/07/01/pretty-printable-errors).

## Feature: postrun hooks

We have added a new lifecycle event `postrun`. Your CLI can now run a hook after a command has ran.

See our [hook documentation](/docs/hooks).

## Feature: Root index command

Previously, oclif would display CLI help if only the binary name with no command ID was invoked, oclif now supports a "root index" command. If present, a command defined at `src/commands/index.ts` will be run if no command ID is found.

## 1 million weekly downloads

While exact oclif usage metrics are hard to pin down, we use npm download statistics of oclif packages as a rough approximation. Earlier this year, oclif's command package hit 1 million weekly downloads for the first time!


This year has been presented its challenges on everyone. We want to thank you, oclif developers, whom have taken the time to use and improve the oclif project. We look forward to seeing you all - in person - in the future!

All our best,

The oclif team
