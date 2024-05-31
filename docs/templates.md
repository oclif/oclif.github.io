---
title: Templates
---

When you run `oclif generate`, you're prompted whether you want to use either [CommonJS](https://nodejs.org/api/modules.html) or [ESM](https://nodejs.org/api/esm.html) for your CLI. CommonJS modules were the original way to package JavaScript and TypeScript packages for reuse in Node.js; ESM modules are now the official standard format. Both options produce the same CLI, with the same `tsconfig` file, `bin` scripts, sample commands, and so on. 

Here's a brief rundown of everything that's included in your newly generated CLI.

## Bin Scripts

The generated CLI project contains 4 `bin` scripts that you can use for either production or development.

- `bin/run.js` - Run the CLI in production (macOS and Linux)
- `bin/dev.js` - Run the CLI in development (macOS and Linux)
- `bin/run.cmd` - Run the CLI in production (Windows)
- `bin/dev.cmd` - Run the CLI in development (Windows)

The `bin` entry in your `package.json` points to the `bin/run.js` file, which in turn tells `npm` to use that file when installing the CLI. If you create operating system-specific installers using `oclif pack`, then the appropriate `run` script is added to the final installer based on the target operating system.

We encourage you to use the `dev` scripts for your local development. Doing so causes oclif to auto-transpile your TypeScript at runtime so you don't have to worry about compiling your code before every command execution. The `dev` scripts also produce more verbose warnings and errors, which makes it easier to figure out what went wrong.

The `dev.js` script uses `ts-node` as the Node.js runtime. However, you can use any of the following if you prefer:

- [TypeScript Execute (tsx)](https://www.npmjs.com/package/tsx)
- [Bun](https://bun.sh/)
- `node` - If you use `node` and ESM, make sure you're using a loader that allows it to use ESM modules, such as `--loader ts-node/esm`. See [ESM](esm.md) for more information.

For all of these Node.js runtimes, you can point the hashbang (`#!`) in the `dev.js` and `run.js` files to a global installation of the runtime (such as `ts-node`) or to a locally installed one (`node_modules/.bin/ts-node`).

## Configuration

The generated CLI also comes with several configuration files that you can easily modify, or even remove, to suit your needs.

- `.eslintrc.json` - Our recommended plugins and settings for `eslint`.
- `.eslintignore` - Our recommended `.eslintignore` to go with our recommend `eslint` configuration.
- `.mocharc.json` - Our recommended settings for `mocha`.
- `.prettierrc.json` - Our recommended `prettier` settings - uses [`@oclif/prettier-config`](https://github.com/oclif/prettier-config) as the base.
- `tsconfig.json` - Our recommended compiler options for TypeScript projects.
- `package.json` - Our recommended scripts, dependencies, and `oclif` settings.

## Example Commands

The generated CLI project comes with two sample commands that you can use as a base to build your own.

- `hello` - `src/commands/hello/index.ts`
- `hello world` - `src/commands/hello/world.ts`

## Example Tests

Test files for each of the sample commands are generated under the `tests` folder.

These tests use [`@oclif/test`](https://github.com/oclif/test) and [`mocha`](https://www.npmjs.com/package/mocha). However, feel free to set up your tests with any testing utilities that better suit your needs.
