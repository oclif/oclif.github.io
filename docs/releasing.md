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

This workflow can be improved slightly by running `npm version major|minor|patch` before publishing which will create a git tag and bump the version automatically.

## Standalone tarballs

Build standalone tarballs with `oclif pack tarballs` from the root of your CLI. These include the node binary so the user does not have to already have node installed to use the CLI. It won't put this node binary on the PATH so the binary will not conflict with any node installation on the machine.

To publish, you can copy the files from `./dist` or use `oclif upload tarballs` to copy the files to S3. You'll need to set `oclif.update.s3.bucket` in `package.json` to a valid S3 bucket and have credentials set in `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` environment vars.

After you've uploaded the tarballs to S3, you can promote the tarballs to a different release channel within S3 using `oclif promote`. This allows you to quickly promote and demote a specific version between your various release channels. For example, the Salesforce CLI has separate `stable` and `stable-rc` channels that are updated weekly.

## Brew

Your formula can be distributed through Brew. The main caveat is you must set the `CLIENT_HOME` variable when you ship, otherwise it will break the update cycle. An example of this can be found in the [heroku cli formula](https://github.com/heroku/homebrew-brew/blob/master/Formula/heroku.rb#L9). By exporting a variable of the form `CLI_NAME_OCLIF_CLIENT_HOME` (where `CLI_NAME` is the name of your CLI), you force the update mechanism to look at the brew install location instead of the default (which is `$XDG_DATA_HOME/.local/share/package_name/client`).

## Autoupdater

These tarballs as well as the installers below can be made autoupdatable by adding the `@oclif/plugin-update` plugin. Just add this plugin and the CLI will autoupdate in the background or when `mycli update` is run.

If you don't want to use S3, you can still run `oclif pack` and it will build tarballs. To get the updater to work, set `oclif.update.s3.host` in `package.json` to a host that has the files built in `./dist` from `oclif pack`. This host does not need to be an S3 host. To customize the URL paths, see the S3 templates in `@oclif/core`.

## Autoupdate Channels

You can have separate channels for releases that work like Google Chrome Channels (such as beta, dev, canary). To create a channel, just change the version in `package.json` from `1.0.0` to `1.0.0-beta` (where "beta" is any string you like). Then when you pack with `oclif pack`, it will create beta tarballs. The user can change their channel with `mycli update beta` and will receive all the future releases on that channel.

In the Heroku CLI, we have it automatically build and release the beta channel on every commit to the master branch. Then we have it build and release stable channel whenever a git tag is created in our CI.

## Windows installer

Build a windows installer with `oclif pack:win`. It will build into `./dist/win`. This can be uploaded to S3 with `oclif upload:win` and promoted within S3 with `oclif promote --win`.

## macOS installer

Build a macOS .pkg installer with `oclif pack:macos`. It will build into `./dist/macos`. This can be uploaded to S3 with `oclif upload:macos` and promoted within S3 with `oclif promote --macos`. You need to set the macOS identifier at `oclif.macos.identifier` in `package.json` (we use "com.heroku.cli" and "com.salesforce.cli" as the identifiers for the Heroku CLI and the Salesforce CLI, respectively).

To [sign the installer](https://developer.apple.com/developer-id/), set `oclif.macos.sign` in `package.json` to a certificate (For the Heroku CLI this is "Developer ID Installer: Heroku INC"). And optionally set the keychain with `OSX_KEYCHAIN`.

## Ubuntu/Debian packages

Build a deb package with `oclif pack:deb`. Set the `MYCLI_DEB_KEY` to a gpg key id to create the gpg files. This will include all the files needed for an apt repository in `./dist/deb`. They can be uploaded to S3 with `oclif upload:deb` and promoted within S3 using `oclif promote --deb`.

Once it's published to S3, users can install with the following:

```sh-session
$ wget -qO- https://mys3bucket.s3.amazonaws.com/apt/release.key | apt-key add - # you will need to upload this file manually
$ sudo echo "deb https://mys3bucket.s3.amazonaws.com/apt ./" > /etc/apt/sources.list.d/mycli.list
$ sudo apt update
$ sudo apt install -y mycli
```

This can be placed in a [script](https://cli-assets.heroku.com/install-ubuntu.sh) for users to install with `curl https://pathto/myscript | sh`.

These will not autoupdate as Ubuntu already has a reliable way for users to update their package.


## Snapcraft

Snap is a great way to distribute Linux CLIs and comes built into Ubuntu 16+. The Heroku CLI's [snapcraft.yml](https://github.com/heroku/cli/blob/master/snap/snapcraft.yaml) file can be easily modified to work with any oclif CLI.
