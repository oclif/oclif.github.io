---
title: Introducing `oclif init` command
---

Thanks to the contribution of [@joshcanhelp](https://github.com/joshcanhelp) we released a new command for the `oclif` CLI called `oclif init` in version [4.8.0](https://github.com/oclif/oclif/releases/tag/4.8.0)

The `oclif init` command allows you to initialize oclif in an existing project directory by adding the bare minimum requirements: a few pieces of configuration, bin scripts, and a couple of dependencies (`@oclif/core` and `ts-node`). This is slightly different from `oclif generate`, which will create an entirely new oclif project based on our [templates](/docs/templates).

`oclif init` will add the following:
- bin scripts: `bin/run.js`, `bin/run.cmd`, `bin/dev.js`, and `bin/dev.cmd`
- `oclif` section to package.json with `bin`, `dirname`, `commands`, and `topicSeparator` set (See [Configuring Your CLI](/docs/configuring_your_cli) for more)
- `@oclif/core` to `dependencies` in your package.json (if it's not already there)
- `ts-node` to `devDependencies` in your package.json (if it's not already there)

Once you've initialized oclif, you can use the [bin scripts](/docs/templates#bin-scripts) to execute your CLI. You can also use the other `oclif` commands like `oclif generate command` and `oclif generate hook` to start adding new functionality.

![oclif init demo](/img/oclif-init-demo.gif)

```
❯ oclif init --help
Initialize a new oclif CLI

USAGE
  $ oclif init [--bin <value>] [--module-type ESM|CommonJS] [--package-manager npm|yarn|pnpm] [--topic-separator
    colons|spaces] [-d <value>] [-y]

FLAGS
  -d, --output-dir=<value>        Directory to initialize the CLI in.
  -y, --yes                       Use defaults for all prompts. Individual flags will override defaults.
      --bin=<value>               Supply answer for prompt: Command bin name the CLI will export
      --module-type=<option>      Supply answer for prompt: Select a module type
                                  <options: ESM|CommonJS>
      --package-manager=<option>  Supply answer for prompt: Select a package manager
                                  <options: npm|yarn|pnpm>
      --topic-separator=<option>  Supply answer for prompt: Select a topic separator
                                  <options: colons|spaces>

DESCRIPTION
  Initialize a new oclif CLI

  This will add the necessary oclif bin files, add oclif config to package.json, and install @oclif/core and ts-node.

EXAMPLES
  Initialize a new CLI in the current directory

    $ oclif init

  Initialize a new CLI in a different directory

    $ oclif init --output-dir "/path/to/existing/project"

  Supply answers for specific prompts

    $ oclif init --topic-separator colons --bin mycli
```

Hope you enjoy the new command! If you come across any issues or have any new ideas for this command, head over to the [oclif/oclif](https://github.com/oclif/oclif) repo and open a new issue.

All our best,

The oclif team

