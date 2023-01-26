---
title: ESM
---

If you want to write your CLI or plugins using ESM you just need to make a few changes to your tsconfig.json and bin scripts.

1. Add the following options to the `tsconfig.json` in your project:

```json
{
  "compilerOptions": {
    "module": "ES2020",
    "moduleResolution": "node",
  },
  "ts-node": {
    "esm": true
  }
}
```

2. Rename `bin/dev` to `bin/dev.js` and replace the contents with the following:

```javascript
#!/usr/bin/env ts-node

/* eslint-disable node/shebang */

import oclif from '@oclif/core'
import path from 'node:path'
import url from 'node:url'
// eslint-disable-next-line node/no-unpublished-import
import {register} from 'ts-node'

// In dev mode -> use ts-node and dev plugins
process.env.NODE_ENV = 'development'

register({
  project: path.join(path.dirname(url.fileURLToPath(import.meta.url)), '..', 'tsconfig.json'),
})

// In dev mode, always show stack traces
oclif.settings.debug = true

// Start the CLI
oclif
.run(process.argv.slice(2), import.meta.url)
.then(oclif.flush)
.catch(oclif.Errors.handle)
```

3. Rename `bin/run` to `bin/run.js` and replace the contents with the following:

```javascript
#!/usr/bin/env node

import oclif from '@oclif/core'

oclif
.run(process.argv.slice(2), import.meta.url)
.then(oclif.flush)
.catch(oclif.Errors.handle)
```

Alternatively, you can use the `execute` function to abstract out the bin scripts. You will still need to modify your tsconfig.json as documented above.

Example for ESM dev.js
```js
#!/usr/bin/env ts-node
// eslint-disable-next-line node/shebang
(async () => {
  const oclif = await import('@oclif/core')
  await oclif.execute({type: 'esm', development: true, dir: import.meta.url})
})()
```

Example for ESM run.js
```js
#!/usr/bin/env node
// eslint-disable-next-line node/shebang
(async () => {
  const oclif = await import('@oclif/core')
  await oclif.execute({type: 'esm', dir: import.meta.url})
})()
```

Example for CJS dev.js
```js
#!/usr/bin/env node
// eslint-disable-next-line node/shebang
(async () => {
  const oclif = await import('@oclif/core')
  await oclif.execute({type: 'cjs', development: true, dir: __dirname})
})()
```

Example for CJS run.js
```js
#!/usr/bin/env node
// eslint-disable-next-line node/shebang
(async () => {
  const oclif = await import('@oclif/core')
  await oclif.execute({type: 'cjs', dir: import.meta.url})
})()
```

3. Update the `bin` property in the package.json

Change

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

4. Update any other references to `bin/dev` and `bin/run` to `bin/dev.js` and `bin/run.js`

You may have references to the bin scripts in your `.vscode/launch.json`. You'll need to update these as well.
