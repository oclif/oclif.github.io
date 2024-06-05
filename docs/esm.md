---
title: ESM
description: Using ESM in oclif
---

Version 3.0.0 of `@oclif/core` officially supports ESM plugin development and CJS/ESM interoperability, meaning that you can have a root plugin written with CJS and your plugins written in ESM or vice versa.

## Interoperability Overview

Here's a high level overview of ESM/CJS interoperability:

### ESM Root plugin
✅ Install CJS plugins

✅ Install ESM plugins

✅ Link CJS plugins

⚠️ Link ESM plugins

  - Auto-compilation will **not** work with linked ESM plugins that have `ts-node` as a dev dependency. Instead, oclif will use the plugin's compiled source - this means that you must compile the plugin yourself before executing any of the commands. We plan to support this again once the node ecosystem offers more comprehensive native support for ESM.
  - You can, however, replace `ts-node` with `tsx` in your dev dependencies if you'd like to have runtime auto-compilation for linked ESM plugins.

### CJS Root plugin
✅ Install CJS plugins

✅ Install ESM plugins

✅ Link CJS plugins

⚠️ Link ESM plugins

  - Auto-compilation will **not** work with linked ESM plugins that have `ts-node` as a dev dependency. Instead, oclif will use the plugin's compiled source - this means that you must compile the plugin yourself before executing any of the commands. We plan to support this again once the node ecosystem offers more comprehensive native support for ESM.
  - You can, however, replace `ts-node` with `tsx` in your dev dependencies if you'd like to have runtime auto-compilation for linked ESM plugins.

## Creating an ESM plugin

To generate a new ESM plugin, run the `oclif generate` command and select `ESM` when it prompts you to select a module type:

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
#!/usr/bin/env -S node --loader ts-node/esm --no-warnings=ExperimentalWarning

import {execute} from '@oclif/core'

await execute({development: true, dir: import.meta.url})
```

This leverages oclif's `execute` function which handles all the development setup for you. You no longer need set the `NODE_ENV` env var or register the project with `ts-node`. You can still adjust oclif `settings` before executing the CLI. For example,

```js
#!/usr/bin/env -S node --loader ts-node/esm --no-warnings=ExperimentalWarning

import {execute, settings} from '@oclif/core'

settings.performanceEnabled = true

await execute({development: true, dir: import.meta.url})
```


#### bin/run → bin/run.js

Rename `bin/run` to `bin/run.js` and replace the existing code with the following:

```js
#!/usr/bin/env node

import {execute} from '@oclif/core'

await execute({dir: import.meta.url})
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

Alternatively, you can safely delete this file since it's no longer necessary.
