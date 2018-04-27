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

This workflow can be improved slightly by running `npm version major|minor|patch` before publishing which will create a git tag and bump the version automatically. We like to use [np](https://npm.im/np) which is like `npm version`, but will also run the tests and other health checks before publishing.

## Standalone tarballs

Build standalone tarballs with `oclif-dev pack` from the root of your CLI. Then, you can publish them S3 with `oclif-dev publish`.

To publish, you can copy the files from `./dist` or use `oclif-dev publish` to copy the files to S3. You'll need to set `oclif.update.s3.bucket` in `package.json` to a valid S3 bucket and have credentials set in `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` environment vars.

These tarballs as well as the installers below can be made autoupdatable by adding the `@oclif/plugin-update` plugin.

## Windows installer

Build a windows installer with `oclif-dev pack:win`. It will build into `./dist/win`. This can be published to S3 with `oclif-dev publish:win`.

## MacOS installer

Build a MacOS .pkg installer with `oclif-dev pack:macos`. It will build into `./dist/macos`. This can be published to S3 with `oclif-dev publish:macos`.

## Ubuntu/Debian packages

Build a deb package with `oclif-dev pack:deb`. Set the `MYCLI_DEB_KEY` to a gpg key id to create the gpg files. This will include all the files needed for an apt repository in `./dist/deb`. They can be published to S3 with `oclif-dev publish:deb`.

Once it's published to S3, users can install with the following:

```sh-session
$ wget -qO- https://mys3bucket.s3.amazonaws.com/apt/release.key | apt-key add - # you will need to upload this file manually
$ sudo echo "deb https://mys3bucket.s3.amazonaws.com/apt ./" > /etc/apt/sources.list.d/mycli.list
$ sudo apt-get update
$ sudo apt-get install -y mycli
```

These will not autoupdate as Ubuntu already has a reliable way for users to update their package.
