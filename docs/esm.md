---
title: ESM
---

Version 3.0.0 of `@oclif/core` officially supports ESM plugin development and CJS/ESM interoperability, meaning that you can have a root plugin written with CJS and your bundled plugins written in ESM or vice versa.

- [Interoperability Overview](#interoperability-overview)
  - [ESM Root plugin](#esm-root-plugin)
  - [CJS Root plugin](#cjs-root-plugin)
- [Creating an ESM plugin](#creating-an-esm-plugin)
- [Migrating a CJS plugin to ESM](#migrating-a-cjs-plugin-to-esm)
  - [Update bin scripts](#update-bin-scripts)
    - [bin/dev → bin/dev.js](#bindev--bindevjs)
    - [bin/run → bin/run.js](#binrun--binrunjs)
  - [Update tsconfig.json](#update-tsconfigjson)
  - [Update package.json to "module" type](#update-packagejson-to-module-type)
  - [Update references to bin scripts](#update-references-to-bin-scripts)
  - [Update mocharc settings](#update-mocharc-settings)


## Interoperability Overview

Here's a high level overview of ESM/CJS interoperability:

### ESM Root plugin
✅ Install CJS plugins

✅ Install ESM plugins

✅ Link CJS plugins

⚠️ Link ESM plugins

  - Auto-compilation will **not** work with linked ESM plugins. Instead, oclif will use the plugin's compiled source - this means that you must compile the plugin yourself before executing any of the commands. We plan to support this again once the node ecosystem offers more comprehensive native support for ESM.

### CJS Root plugin
✅ Install CJS plugins

✅ Install ESM plugins

✅ Link CJS plugins

⚠️ Link ESM plugins

  - Auto-compilation will **not** work with linked ESM plugins. Instead, oclif will use the plugin's compiled source - this means that you must compile the plugin yourself before executing any of the commands. We plan to support this again once the node ecosystem offers more comprehensive native support for ESM.

## Creating an ESM plugin

To generate a new ESM plugin from the [hello-world-esm template](https://github.com/oclif/hello-world-esm) run the `oclif generate` command and select `ESM` when it prompts you to select a module type:

```
$ npx oclif generate my-esm-plugin
? Select a module type
  CommonJS
❯ ESM
```

## Migrating a CJS plugin to ESM

### Update bin scripts

First you will need to update the bin scripts under the `bin` directory.

#### bin/dev → bin/dev.js

Rename `bin/dev` to `bin/dev.js` and replace the existing code with the following:

```js
#!/usr/bin/env node
// eslint-disable-next-line node/shebang
(async () => {
  const oclif = await import('@oclif/core')
  await oclif.execute({development: true, dir: import.meta.url})
})()
```

This leverages oclif's `execute` function which handles all the development setup for you. You no longer need set the `NODE_ENV` env var or register the project with `ts-node`. You still adjust oclif `settings` before executing the CLI. For example,

```js
#!/usr/bin/env node
// eslint-disable-next-line node/shebang
(async () => {
  const oclif = await import('@oclif/core')
  oclif.settings.performanceEnabled = true
  await oclif.execute({type: 'esm', development: true, dir: import.meta.url})
})()
```

#### bin/run → bin/run.js

Rename `bin/run` to `bin/run.js` and replace the existing code with the following:

```js
#!/usr/bin/env node
(async () => {
  const oclif = await import('@oclif/core')
  await oclif.execute({dir: import.meta.url})
})()
```

### Update tsconfig.json

After updating the bin scripts you now need to update the `tsconfig.json` to include the following options:

```json
{
  "compilerOptions": {
    "module": "ES2020",
    "moduleResolution": "node16",
  },
  "ts-node": {
    "esm": true
  }
}
```

### Update package.json to "module" type

Add `"type": "module"` to your package.json so that your files will be loaded as ESM modules


### Update references to bin scripts

You will need to update the references to your bin scripts to the bin scripts with the `.js` extension. In the `package.json` you will need to update the `bin` like so:

```json
  "bin": {
    "my-cli": "./bin/run"
  },
```
to

```json
  "bin": {
    "my-cli": "./bin/run.js"
  },
```

You may have references to the bin scripts in your `.vscode/launch.json` or in the `scripts` of your `package.json`. You'll need to update these as well.

### Update mocharc settings

In order for your mocha tests to run, you'll need to make a couple of changes:

1. Add the following to the `.mocharc.json`

```json
{
  "node-option": [
    "loader=ts-node/esm"
  ]
}
```

2. Update `test/helpers/init.js`

If your plugin was generated `oclif generate` then you likely have a `test/helpers/init.js` file that needs to be updated. You can either update the file extension to `.cjs` or update the `require` at the top of the file to an `import`,

```js
import path from 'node:path'
```
