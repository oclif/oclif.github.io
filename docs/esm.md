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
    "composite": true
  },
  "ts-node": {
    "esm": true
  }
}
```

2. Rename `bin/dev` to `bin/dev.mjs` and replace the contents with the following:

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

3. Rename `bin/run` to `bin/run.mjs` and replace the contents with the following:

```javascript
#!/usr/bin/env node

import oclif from '@oclif/core'

oclif
.run(process.argv.slice(2), import.meta.url)
.then(oclif.flush)
.catch(oclif.Errors.handle)
```

4. Update package.json bin in order to use new run.mjs file
```json
{
  ...
  "bin": {
    "<Your_CLI_Name>": "./bin/run.mjs"
  },
  ...
}
```

5. Replace Content of `test/tsconfig.json` with the following: 

```json
{
  "extends": "../tsconfig",
  "compilerOptions": {
    "noEmit": true,
    "module": "commonjs",
  },
  "references": [
    {"path": ".."}
  ]
}
```
