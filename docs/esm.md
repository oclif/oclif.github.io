---
title: ESM
---

Version [2.12.0 of `@oclif/core`](https://github.com/oclif/core/tree/2.12.0) officially supports ESM plugin development and CJS/ESM interoperability.

## Interoperability

### ESM Root plugin
✅ Install CJS plugins

✅ Install ESM plugins

✅ Link CJS plugins

✅ Link ESM plugins

If your root plugin is written in ESM, then you will be able to install and link both CJS and ESM plugins.

### CJS Root plugin
✅ Install CJS plugins

✅ Install ESM plugins

✅ Link CJS plugins

❌ Link ESM plugins

If your root plugin is written in CJS you will be able to install both CJS and ESM plugins. However, you will only be able to link CJS plugins. *Linking of ESM plugins to CJS root plugins is not supported.*

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
#!/usr/bin/env -S node --loader ts-node/esm --no-warnings=ExperimentalWarning
// eslint-disable-next-line node/shebang
(async () => {
  const oclif = await import('@oclif/core')
  await oclif.execute({type: 'esm', development: true, dir: import.meta.url})
})()
```

This leverages oclif's `execute` function which handles all the development setup for you. You no longer need set the `NODE_ENV` env var or register the project with `ts-node`. You still adjust oclif `settings` before executing the CLI. For example,

```js
#!/usr/bin/env -S node --loader ts-node/esm --no-warnings=ExperimentalWarning
// eslint-disable-next-line node/shebang
(async () => {
  const oclif = await import('@oclif/core')
  oclif.settings.performanceEnabled = true
  await oclif.execute({type: 'esm', development: true, dir: import.meta.url})
})()
```

See [Supporting linked plugins](#supporting-linked-plugins) for more information on why `--loader ts-node/esm` has been added to the `node` shebang

#### bin/run → bin/run.js

Rename `bin/run` to `bin/run.js` and replace the existing code with the following:

```js
#!/usr/bin/env -S node --loader ts-node/esm --no-warnings=ExperimentalWarning
// eslint-disable-next-line node/shebang
(async () => {
  const oclif = await import('@oclif/core')
  await oclif.execute({type: 'esm', dir: import.meta.url})
})()
```

See [Supporting linked plugins](#supporting-linked-plugins) for more information on why `--loader ts-node/esm` has been added to the `node` shebang

#### run.cmd and dev.cmd

In both `bin/run.cmd` and `bin/dev.cmd` you will need to add `--loader ts-node/esm --no-warnings=ExperimentalWarning` to the `node` invocation:

`bin/run.cmd`
```
@echo off

node --loader ts-node/esm --no-warnings=ExperimentalWarning "%~dp0\run" %*
```

`bin/dev.cmd`
```
@echo off

node --loader ts-node/esm --no-warnings=ExperimentalWarning "%~dp0\dev" %*
```

See [Supporting linked plugins](#supporting-linked-plugins) for more information on why `--loader ts-node/esm` has been added to the `node` shebang

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


### Update references to bin scripts

## Considerations

### CLIs with multiple plugins

If your CLI contains multiple plugins, then we strongly suggest that you begin your migration with the root plugin since an ESM root plugin is able to link CJS plugins whereas a CJS root plugin cannot link an ESM plugin.

### Supporting linked plugins

Linked plugins are transpiled at runtime using `ts-node`. In order for `ts-node` to successfully transpile ESM plugins oclif must be executed with `node --loader ts-node/esm`. Here's the `bin/run.js` from the [hello-world-esm template](https://github.com/oclif/hello-world-esm) as an example:

```javascript
#!/usr/bin/env -S node --loader ts-node/esm --no-warnings=ExperimentalWarning
// eslint-disable-next-line node/shebang
(async () => {
  const oclif = await import('@oclif/core')
  await oclif.execute({type: 'esm', dir: import.meta.url})
})()
```
[Source](https://github.com/oclif/hello-world-esm/blob/main/bin/run.js)

**This is an experimental loader that could change at any time.** If you removed the `--no-warnings=ExperimentalWarning`, you will see this warning,

```
ExperimentalWarning: Custom ESM Loaders is an experimental feature. This feature could change at any time
```

That being said, if the loader were to introduce a breaking change *it would only affect linked plugins*. Installed plugins would still work the same since they do not depend on `ts-node` to transpile the code at runtime.

Please see [node's stability index](https://nodejs.org/api/documentation.html#documentation_stability_index) for more.
