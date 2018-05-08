---
title: Release
---

There are 2 main strategies for releasing oclif CLIs: npm and standalone tarballs. You can publish to one or both.

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

To publish, you can copy the files from `./dist` or use `oclif-dev publish` to copy the files to S3. You'll need to set `oclif.update.s3.bucket` in `package.json` to a valid S3 bucket and have credentials set in `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` environment vars. You can also set `oclif.update.s3.host` to an S3 CNAME or CloudFront host.

These tarballs as well as the installers below can be made autoupdatable by adding the `@oclif/plugin-update` plugin. Just add this plugin and the CLI will autoupdate in the background or when `mycli update` is run.

If you don't want to use S3, you can still run `oclif-dev pack` and it will build tarballs. To get the updater to work, set `oclif.update.s3.host` to a host that has the files built in `./dist` from `oclif-dev pack`. This host does not need to be an S3 host. To customize the URL paths, see the S3 templates in `@oclif/config`.

## Windows installer

Build a windows installer with `oclif-dev pack:win`. It will build into `./dist/win`. This can be published to S3 with `oclif-dev publish:win`.

## MacOS installer

Build a MacOS .pkg installer with `oclif-dev pack:macos`. It will build into `./dist/macos`. This can be published to S3 with `oclif-dev publish:macos`. You need to set the MacOS identifier at `oclif.macos.identifier` in `package.json`. (For the Heroku CLI we use "com.heroku.cli" as the identifier)

To [sign the installer](https://developer.apple.com/developer-id/), set `oclif.macos.sign` to a certificate (For the Heroku CLI this is "Developer ID Installer: Heroku INC"). And optionally set the keychain with `OSX_KEYCHAIN`.

## Ubuntu/Debian packages

Build a deb package with `oclif-dev pack:deb`. Set the `MYCLI_DEB_KEY` to a gpg key id to create the gpg files. This will include all the files needed for an apt repository in `./dist/deb`. They can be published to S3 with `oclif-dev publish:deb`.

Once it's published to S3, users can install with the following:

```sh-session
$ wget -qO- https://mys3bucket.s3.amazonaws.com/apt/release.key | apt-key add - # you will need to upload this file manually
$ sudo echo "deb https://mys3bucket.s3.amazonaws.com/apt ./" > /etc/apt/sources.list.d/mycli.list
$ sudo apt update
$ sudo apt install -y mycli
```

This can be placed in a [script](https://cli-assets.heroku.com/install-ubuntu.sh) for users to install with `curl https://pathto/myscript | sh`.

These will not autoupdate as Ubuntu already has a reliable way for users to update their package.
