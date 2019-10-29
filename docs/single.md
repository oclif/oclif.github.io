---
title: Single-command CLI
---

You can call your CLI anything you like by replacing `mynewcli` with a name of your choice. The name of your CLI can be anything you like as long as it meets the [npm restrictions](https://docs.npmjs.com/files/package.json#name). 

```sh-session
$ npx oclif single mynewcli
```

*npx is included in npm and automatically runs and installs the oclif generator.*

Alternatively, to setup without npx:

```sh-session
$ npm install -g oclif
$ oclif single mynewcli
```

_**Note**: This won't require npm to install oclif each time it runs, but you'll need to update with `npm update -g oclif` to get newer releases of the generator._

You'll now see some questions asking you to describe various aspects of your CLI. Once you register your CLI with npm, these would feed into the listing for your CLI. For now, feel free to just use the defaults for each option.

For reference, here are the options and what they do:

* **npm package name** the name of the package as it will be listed on npm.
* **command bin name the CLI will export** the word the user will type to invoke the cli, e.g., "heroku" in the case of the Heroku command line interface. You may use any word here but be careful about using a word that may conflict with commonly used command line terms such as grep. In the case of conflict, the terminal will use what is loaded in the path sooner.
* **description** this description is part of the npm package details. This description will stay local until you publish to npm
* **author** The author is listed when you register your CLI on NPM
* **version** each time you publish a new version this number will automatically increment.
* **license** MIT License is set as default
* **node version supported** oclif supports [Active LTS Node versions](/docs/introduction#requirements)
* **github owner of repository (https://github.com/OWNER/repo)** owner of the Github repo
* **github name of repository (https://github.com/owner/REPO)** name of the Github repo

When your CLI is ready, you'll see a message ending with the following: 

```sh-session
Created mynewcli in /Users/nsamsami/mynewcli
```

Your CLI has been created locally and the relevant code is in the `mynewcli` directory. You can go over there by running:

```sh-session
$ cd mynewcli
```

For trying your CLI locally, `$ ./bin/run` is the equivalent of the command `$ mynewcli` when users install your CLI. You can now run the CLI:

```sh-session
$ ./bin/run
hello world from ./src/index.ts!
$ ./bin/run --help
describe the command here

USAGE
  $ mynewcli [FILE]

OPTIONS
  -f, --force
  -n, --name=name  name to print

EXAMPLES
  $ mycli
  hello world from ./src/index.ts!
```

To run `$ mynewcli` instead of `$ ./bin/run` you'll need to link your CLI locally using npm:

```sh-session
$ npm link
$ mynewcli
```

_**Note:** You can also use `mynewcli --help`. The `--help` flag works anywhere the user places it and cannot be overridden._

## Command Development

Open `./src/index.ts` and replace it with the following

```js
import {Command} from '@oclif/command'
export class GoodbyeCommand extends Command {
  async run() {
    console.log('goodbye, world!')
  }
}
```

<!-- TODO: link to command API reference -->
