---
title: Templates
---

When you run `oclif generate`, it will ask if you'd like to use either CommonJS or ESM for your CLI. Both options produce the same CLI (same tsconfig, bin scripts, example commands, etc).

We'll give you a brief rundown of everything that's included in your newly generated CLI:

## Bin Scripts

The templates contains 4 bin scripts that are used for either production or development.
- `bin/run.js` - Run the CLI in production (macos and linux)
- `bin/dev.js` - Run the CLI in development (macos and linux)
- `bin/run.cmd` - Run the CLI in production (windows)
- `bin/dev.cmd` - Run the CLI in development (windows)

The `bin` entry in your `package.json` will point to the `bin/run.js` file - this tells `npm` to use that file when installing the CLI. If you create os-specific installers using `oclif pack`, then the appropriate `run` script will be added to the final installer based on the target operating system.

We encourage you to use the `dev` scripts for your local development. Doing so will oclif to auto-transpile your typescript at runtime so you don't have to worry about compiling your code before every command execution. The dev scripts will also produce more verbose warnings and errors to make it easier to figure out what went wrong.

The `dev.js` that comes with the templates uses `ts-node` as the node runtime. You, however, have options here. You can use any of the following
- [tsx](https://www.npmjs.com/package/tsx)
- [bun](https://bun.sh/)
- `node` - if you use node and ESM, please ensure that you're using a loader that will allow it to use ESM modules (e.g. `--loader ts-node/esm`). See [ESM](esm.md) for more.

For any of these you can point the hashbang in the file to a global install (e.g. `ts-node`) or to a locally installed one (`node_modules/.bin/ts-node`).

## Configuration

The template also comes with several configuration files that can be easily modified (or removed) to suit your needs.

- `.eslintrc.json` - Our recommended plugins and settings for `eslint`
- `.eslintignore` - Our recommended `.eslintignore` to go with our recommend eslint configuration.
- `.mocharc.json` - Our recommended settings for `mocha`
- `.prettierrc.json` - Our recommended `prettier` settings - uses [`@oclif/prettier-config`](https://github.com/oclif/prettier-config) as the base.
- `tsconfig.json` - Our recommended compiler options for typescript projects.
- `package.json` - Our recommended scripts, dependencies, and `oclif` settings.

## Example Commands

The templates come with two commands that you can build off of.

- `hello` - `src/commands/hello/index.ts`
- `hello world` - `src/commands/hello/world.ts`

## Example Tests

Lastly, there are test files for each of those commands under the `tests` folder.

These tests use [`@oclif/test`](https://github.com/oclif/test) and [`mocha`](https://www.npmjs.com/package/mocha). You are, however, free to setup your tests with any testing utilities that best suit your needs.
