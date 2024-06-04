---
title: Logging
description: oclif-generated logging and custom loggers
---

By default oclif uses [debug](https://www.npmjs.com/package/debug) to generate debug logs that can be viewed using the `DEBUG` environment variable. To see all the logs, you can set `DEBUG=oclif*`.

You can also provide oclif with a custom logger, if you prefer for oclif's logs to be sent to that instead of `debug`.

This is the interface that your logger must match:

```typescript
export type Logger = {
  debug: (formatter: unknown, ...args: unknown[]) => void
  error: (formatter: unknown, ...args: unknown[]) => void
  info: (formatter: unknown, ...args: unknown[]) => void
  trace: (formatter: unknown, ...args: unknown[]) => void
  warn: (formatter: unknown, ...args: unknown[]) => void
  child: (namespace: string) => Logger
  namespace: string
}
```

And here's an example:

```typescript
// oclif-logger.ts
import { format } from 'node:util';
import { Interfaces } from '@oclif/core';
import { Logger } from './my-cli-logger';

export const customLogger = (namespace: string): Interfaces.Logger => {
  const myLogger = new Logger(namespace);
  return {
    child: (ns: string, delimiter?: string) => customLogger(`${namespace}${delimiter ?? ':'}${ns}`),
    debug: (formatter: unknown, ...args: unknown[]) => myLogger.debug(format(formatter, ...args)),
    error: (formatter: unknown, ...args: unknown[]) => myLogger.error(format(formatter, ...args)),
    info: (formatter: unknown, ...args: unknown[]) => myLogger.info(format(formatter, ...args)),
    trace: (formatter: unknown, ...args: unknown[]) => myLogger.trace(format(formatter, ...args)),
    warn: (formatter: unknown, ...args: unknown[]) => myLogger.warn(format(formatter, ...args)),
    namespace,
  };
};

export const logger = customLogger('my-cli');
```

You now need to provide this logger to oclif so that it can use it:

```javascript
// bin/run.js
#!/usr/bin/env node

async function main() {
  const {execute} = await import('@oclif/core');
  const { logger } = await import('../dist/oclif-logger.js');
  await oclif.execute({
    dir: import.meta.url,
    loadOptions: {
      root: import.meta.dirname,
      logger,
    },
  });
}

await main();
```

You can also provide the logger to `Config`, in the event that you instantiate `Config` before calling `run` or `execute`

```javascript
import {Config, run} from '@oclif/core'
const config = await config.load({
  logger,
});

await run(process.argv.slice(2), config)
```
