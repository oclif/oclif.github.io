---
title: FAQs
---

## Why Node?

There are a number of reasons why Node is the best choice for writing CLI code. At Heroku, we've released our CLI in Ruby, Go, as well as Node. [This article gets more into detail on that history](https://blog.heroku.com/evolution-of-heroku-cli-2008-2017), but we've certainly found that Node offers the best of everything.

First, JavaScript is the biggest language in the world. More people are able to write JavaScript than any other language and it by far has the biggest open source community. Everyone can write it and you'll find the most helpful libraries to help build your CLI.

We've found that Node has the best cross platform support of any language we've used. In general, if you write code on macOS, you won't find many issues making it also run on Windows.

Node has the best support for our [plugins](plugins.md) model. Plugins are a way to share code between CLIs, to modularize a single CLIs codebase, or allow users to add functionality to an existing CLI. With Node, we're able to have separate dependency versions sitting alongside one another. This means if you want to release an update to a dependency in one plugin, it won't affect how another plugin works. oclif takes this to an extreme and even flag parsing is done at the individual plugin level. If we ever want to make a breaking change to flag parsing (we certainly don't intend to, but this is just an example), you can update just one plugin and keep the old behavior in other plugins. This is very helpful for large CLI codebases where you want to migrate to new code slowly.

## I want a single binary CLI like with Go

Use [pkg](https://github.com/zeit/pkg). Just make sure to add the commands and other source files by setting `pkg.scripts: "./lib/**/*.js"` in `package.json`.

In the Heroku CLI, however, we prefer to ship a tarball (and various installers) that has Node baked in. Use `oclif pack` to create a set of tarballs for different platforms with Node built in. You'll likely need to use [@oclif/plugin-update](https://github.com/oclif/plugin-update) with this, otherwise the users won't have a way to update the CLI from the tarball without reinstalling it.

## Should I use TypeScript or JavaScript?

We suggest TypeScript as we find the typing to really help when refactoring code and updating dependencies. It's nicer to get compilation errors rather than finding errors in production.

We've put a lot of care into making it easy to make a TypeScript CLI even if you've never written TypeScript before. We generate CLIs and plugins that use [ts-node](https://github.com/TypeStrong/ts-node) to make it fast to run the TypeScript code without a compilation step. You won't have to mess around with build configuration using oclif.

Still, the languages today are very similar. The code you write in JavaScript will be nearly identical to what you would have in TypeScript. (Just no type definitions, of course)

## What editor is best for oclif?

Of course if you already have a go-to editor, you should use that. However, we typically recommend [vscode](https://code.visualstudio.com).

Microsoft has done a great job with this editor and it works particularly well in TypeScript projects. You'll get nice type checking, linting, and autocomplete right out of the box.

## Should I use npm or yarn?

It really doesn't make that much of a difference. If you're just getting started, keep it simple and use npm which comes with Node. We like to use yarn internally as it's a bit faster and we find the lockfiles friendlier.

## How can I make the oclif generator run faster?

If you're using npx, install it first with `npm install -g oclif`. This won't stay current with updates though, so you'll need to run `npm update -g oclif` to get new versions of the generator.

## Why isn't Node X supported?

The oclif project follows and supports [Node's Active LTS support schedule](https://nodejs.org/en/about/releases/). This allows oclif to stay current with Node's development.

## How do I pronounce "oclif"?

We say "oh-cliff".
