---
title: Releasing your CLI
---

When you're ready to release your CLI, simply publish to npm:

```sh-session
$ npm version (major|minor|patch) # bumps version, updates README, adds git tag
$ npm publish
$ npm install -g mynewcli
$ mynewcli
# OR
$ npx mynewcli
```

You'll need to [register with npm](https://www.npmjs.com/signup) and have verified your email address in order to publish.

You'll also need to select a package name for your CLI that is not already in use. Note: if you attempt to publish under an existing package name, npm will have restricted publishing to the user associated with that package, so you will see a permission error.
