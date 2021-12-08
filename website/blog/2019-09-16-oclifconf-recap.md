---
title: oclifconf 2019: A Recap
---

In May, Heroku and Salesforce Open Source organized [oclifconf](https://oclif.io/conf), a conference for developers & product managers building CLI tools on top of [the open source oclif framework](https://github.com/oclif/oclif). The speakers came from various tech companies, such as Adobe, Netlify, and Apollo, who have already built amazing CLI experiences. The topics covered everything from the incredible capabilities oclif has unlocked, to the community-built plugins extending its functionality, and even what the behavior of an adaptive CLI tool might look like.

Below is a listing of all of the talks from the event, along with a short summary. Enjoy!

## The future of oclif by Jeff Dickey

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/1TKh2YBxRMY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

In its relatively short lifetime, oclif has already inspired many developers and companies to adopt its framework as a means for implementing their own command-line tooling. In this talk, Jeff Dickey, an oclif founding team member, recaps the project's history and inspiration. He also looks towards the future and outlines some features and improvements that the tool could adapt. This isn't so much a definitive roadmap of where oclif is headed, but rather, a call to inspiration for developers eager to contribute! And if you are interested in contributing, check out the [open issues](https://github.com/oclif/oclif/issues) in the oclif GitHub repo and come say "Hello!" on [Spectrum Chat](https://spectrum.chat/oclif).

## Open Source Citizenship by Josh Simmons

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/54hhR5DoV6g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

When it comes to open source, it's more than just individuals now. More and more frequently, large corporations are contributing to projects by donating to contributors, sponsoring events, or upstreaming contributions. But keeping open source projects and communities healthy requires more than just money and brainpower. Josh Simmons surveyed multiple open source communities and relays his findings as to what help maintainers and contributors actually need in this talk.

## Building an enterprise-grade CLI with oclif by Thomas Dvornik

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/v4saIi5zoy8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

Security and performance are all about trust. While oclif is an extremely extensible framework for building CLI tooling, there are additional requirements to fulfill for enterprise businesses to adopt it that might not be necessary for individual developers. Thomas Dvornik outlines what he and his colleagues at Salesforce have implemented as plugins to oclif to satisfy these needs, including encrypted OAuth, plugin signing, lazy loading dependencies, synchronizing weekly releases and deprecations across dozens of repositories, and establishing cross-team coding and documentation standards.

## How Adobe I/O built an extensible CLI with oclif by Jesse MacFadyen

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Mxhx1wmoHlA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

Perhaps oclif's most appealing feature is its support for plugins. In Cordova's case, they've created a sophisticated telemetry system that helps Adobe developers see which commands users are using--and reports on which ones are erroring out. By embedding a feedback system into the tool, users are even able to quickly send their suggestions to a form, without ever leaving the terminal. Jesse MacFadyen demonstrates how oclif's plugin system can work beyond simply executing commands.

## Integrating oclif with GraphQL and Apollo by Evans Hauser

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Zh78npkypas" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

For Evans Hauser and the team at Apollo, oclif is best thought of as "React for the CLI." As a client paired with a strongly-typed API contract to a server, it can deliver structured and consistent commands to retrieve external data. What better mechanism to use for this transfer than GraphQL, a framework which empowers the client to ask precisely for the data it needs, and nothing more?

## Adaptive Intent-based CLI State Machines by Shawn Wang

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ZueoIYnHiaI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

In designing oclif, [Jeff Dickey wrote out 12 CLI factors to keep in mind](https://medium.com/@jdxcode/12-factor-cli-apps-dd3c227a0e46). In this talk, Shawn Wang outlines a 13th: state. State is hard, because it depends on context, and context depends on understanding what a user intends to do, not what they are asking. Shawn is working towards enabling oclif to better understand the commands a user has entered, so that it can predict and interpret future commands that might be entered next. This would enable CLI tools to not just interpret a users' commands, but to also interpret their intent.
