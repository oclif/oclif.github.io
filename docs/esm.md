---
title: ESM
---

Version [3.0.0 of `@oclif/core`](https://github.com/oclif/core/tree/3.0.0-beta.2) officially supports ESM plugin development and CJS/ESM interoperability, meaning that you can have a root plugin written with CJS and your bundled plugins written in ESM or vice versa.

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
- [Linked Plugins](#linked-plugins)


## Interoperability Overview

Here's a high level overview of ESM/CJS interoperability:

### ESM Root plugin
✅ Install CJS plugins

✅ Install ESM plugins

✅ Link CJS plugins

⚠️ Link ESM plugins

  - Auto-compilation will **not** work with linked ESM plugins unless `NODE_OPTIONS="--loader=ts-node"` is set in the environment. Otherwise, oclif will use the plugin's compiled source - this means that you must compile the plugin yourself before executing any of the commands. See [linked plugins](#linked-plugins) for more information.

### CJS Root plugin
✅ Install CJS plugins

✅ Install ESM plugins

✅ Link CJS plugins

⚠️ Link ESM plugins

  - Auto-compilation will **not** work with linked ESM plugins. Instead, oclif will use the plugin's compiled source - this means that you must compile the plugin yourself before executing any of the commands. See [linked plugins](#linked-plugins) for more information.

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
    "esm": true,
    "scope": true
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

You may have references to the bin scripts in your `.vscode/launch.json`. You'll need to update these as well.


## Linked Plugins

In version 2 of `@oclif/core` linked plugins are transpiled at runtime using `ts-node`. This is problematic for ESM plugins because `node` depends on special ESM hooks being registered in the process in order to use ESM file paths. So in order for `ts-node` to successfully transpile ESM plugins one of the two must be true:
1. `ts-node` (with ESM enabled) is used to execute the CLI instead of `node`
2. `node` is used to execute the CLI with the `--loader=ts-node/esm` option set. This can be done through `NODE_OPTIONS` or exec args

You likely don't want to depend on `ts-node` being available on every machine your CLI is executed so that really only leaves the second option.

Practically speaking you have two options to support linked plugins:
1. Change the `node` shebang at the top of `bin/run.js` and `bin/dev.js` to `#!/usr/bin/env -S node --loader ts-node/esm --no-warnings=ExperimentalWarning`
2. Ask users to set `NODE_OPTIONS="--loader=ts-node/esm"` in their environment if they'd like for ESM plugins to transpile at runtime.

Option #1 is viable but it's important to understand that it is still an experimental loader and could change at anytime. That being said, if the loader were to introduce a breaking change *it would only affect linked plugins*. Installed plugins would still work the same since they do not depend on `ts-node` to transpile the code at runtime. Please see [node's stability index](https://nodejs.org/api/documentation.html#documentation_stability_index) for more.

Also, if you choose to include the `ts-node/esm` loader in the shebang, we recommend adding the following to your root plugin's tsconfig

```json
"ts-node": {
  "scope": true
}
```

This will allow `ts-node` to successfully register multiple projects without any interference from the root plugin's tsconfig settings.

Option #2 still leverages the experimental `ts-node/esm` loader but by asking users to opt into it it distances your CLI from any breaking changes that might suddenly occur.

Regardless of which path you take to support linked plugins, oclif will fall back on the linked plugin's compiled source code if it can't transpile it at runtime. This means that your users can still use linked ESM plugins without setting `NODE_OPTIONS="--loader=ts-node/esm"` in their environment *as long as they understand the plugin must be compiled first*.

