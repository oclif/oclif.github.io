---
title: FAQs
---

## Why Node?

There are a number of reasons why Node is the best choice for writing CLI code. At Salesforce, we've released the Heroku CLI in Ruby, Go, as well as Node. [Read this article for details on that history](https://blog.heroku.com/evolution-of-heroku-cli-2008-2017). But in the end, we found that Node offers the best of everything.

First, JavaScript is the biggest language in the world. More people write in JavaScript than in any other programming language, and it has the biggest open-source community, by far. Because everyone can write it, you can find many useful libraries to help build your CLI.

We've also found that Node has the best cross-platform support of any language we've used. In general, if you write code on macOS, you rarely find issues making it also run on Windows.

Node has the best support for our [plugins](plugins.md) model. Plugins are a way to share code between CLIs, to modularize a CLI's codebase, and to allow users to add functionality to an existing CLI. With Node, we can have separate dependency versions sitting alongside one another. As a result, if you want to release an update to a dependency in one plugin, it doesn't affect how another plugin works. oclif takes this to an extreme so that even flag parsing is done at the individual plugin level. For example, if we ever want to make a breaking change to flag parsing (don't worry, we don't intend to!), you can update just one plugin and keep the old behavior in other plugins. This feature is very helpful for large CLI codebases where you want to migrate to new code slowly.

## How can I create a single binary CLI, like with Go? 

Use [pkg](https://github.com/zeit/pkg). Make sure you add the commands and other source files by setting `pkg.scripts: "./lib/**/*.js"` in `package.json`.

In Salesforce CLI, however, we prefer to ship a tarball and various installers that have Node baked in. Use `oclif pack` to create a set of tarballs for different platforms with Node built in. You probably must use [@oclif/plugin-update](https://github.com/oclif/plugin-update) in your CLI, otherwise the users won't have a way to update the CLI from the tarball without reinstalling it.

## Should I use TypeScript or JavaScript?

We suggest you use TypeScript, because we find the typing helpful when refactoring code and updating dependencies. It's nicer to get compilation errors rather than finding errors in production.

We've put a lot of care into making it easy to create a TypeScript CLI, even if you've never written TypeScript before. We generate CLIs and plugins that use [ts-node](https://github.com/TypeStrong/ts-node), which makes it fast to run the TypeScript code without a compilation step. And you don't have to mess around with build configuration using oclif.

Still, the two languages are very similar today. The code you write in JavaScript will be nearly identical to what you would have in TypeScript, but with no type definitions of course. 

## What editor is best for oclif?

If you already have a favorite editor, go ahead and keep using it. However, we typically recommend [Visual Studio Code](https://code.visualstudio.com), or VS Code for short.

Microsoft has done a great job with this editor and it works particularly well for TypeScript projects. You get nice type checking, linting, and autocomplete, right out of the box.

## Should I use npm or yarn?

It doesn't make that much of a difference. If you're just getting started, keep it simple and use npm, which comes with Node. We like to use yarn internally, as it's a bit faster and we find the lockfiles friendlier.

## How can I make the oclif generator run faster?

If you're using npx, first install oclif by running `npm install -g oclif`. But to stay current with the latest updates, you must manually run `npm update -g oclif` to get new versions of the generator.

## Why isn't Node X supported?

The oclif project follows and supports [Node's LTS support schedule](https://nodejs.org/en/about/releases/), which allows oclif to stay current with Node's development.

## How do I pronounce "oclif"?

We say "oh-cliff".
