---
title: Release
---

There are 2 strategies for releasing oclif CLIs. npm and standalone tarballs. You can publish to one or both.

## npm

Just use `npm publish` like any other npm project. This includes a `run.cmd` script that will automatically be used for Windows users.

```sh-session
$ npm version (major|minor|patch) # bumps version, updates README, adds git tag
$ npm publish
$ npm install -g mynewcli
$ mynewcli
# OR
$ npx mynewcli
```

You'll need to [register with npm](https://www.npmjs.com/signup) and have verified your email address in order to publish.

This workflow can be improved slightly by running `npm version major|minor|patch` before publishing which will create a git tag and t

## standalone tarballs

Build standalone tarballs with `oclif-dev pack` from the root of your CLI. Then, you can publish them S3 with `oclif-dev publish:s3`.

You'll need to set `oclif.update.s3.bucket` to a valid S3 bucket and have credentials set in `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` environment vars.
