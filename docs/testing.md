---
title: Testing
description: How to test your CLI
---

Testing in oclif can be done with any testing framework. You can run commands with `MyCommand.run()` which returns a promise you can wait on.

There are common tasks however when writing CLI tools. For this, we have [@oclif/test](https://github.com/oclif/test), which provides a [conventional set of utilities](https://github.com/oclif/test?tab=readme-ov-file#usage) that we find useful for testing oclif CLIs.

Any CLI built with oclif will come preloaded with [mocha](https://www.npmjs.com/package/mocha) (our preferred testing framework but you're free to use whatever you prefer) and [@oclif/test](https://github.com/oclif/test) as well as an example test that should work out of the box with `npm test` or `yarn test`.


As an example, let's look at this `whoami` command which makes an API call to get the current logged in user. If the user is not logged in, it exits with status 100.

**src/commands/whoami.ts**

```js
import {Command} from '@oclif/core'

export class Whoami extends Command {
  async run() {
    try {
      let {body: account} = await this.api.get('/account')
      this.log(account.email)
    } catch (err) {
      if (err.statusCode === 401) {
        this.error('not logged in', {exit: 100})
      }
      throw err
    }
  }
}
```

Another common tool we like to use in testing oclif CLIs is [nock](https://github.com/node-nock/nock). Install the `nock` package as a devDependency.

Here is the test code

**test/commands/whoami.test.ts**

```typescript
import {runCommand} from '@oclif/test'
import {expect} from 'chai'
import nock from 'nock'

describe('whoami', () => {
  it('shows user email when logged in', async () => {
    nock('https://api.example.com')
      .get('/account')
      // user is logged in, return their name
      .reply(200, {email: 'jeff@example.com'})

    const {stdout} = await runCommand('whoami')
    expect(stdout).to.equal('jeff@example.com')
  })

  it('exits with status 100 when not logged in', async () => {
    nock('https://api.example.com')
      .get('/account')
      // HTTP 401 means the user is not logged in with valid credentials
      .reply(401)

    const {error} = await runCommand('whoami')
    expect(error?.oclif?.exit).to.equal(100)
  })
})
```

For more on how to test with oclif, check out the docs for [@oclif/test](https://github.com/oclif/test).

## Capturing `stdout` and `stderr` with Vitest

When using `@oclif/test` in combination with **Vitest**, be aware that Vitest intercepts `console.log`, `console.error`, and other console methods by default. This can interfere with `@oclif/test`’s ability to capture `stdout` and `stderr` when calling `runCommand()`.

To ensure that `stdout` and `stderr` are captured properly (e.g. when using `const { stdout, stderr } = await runCommand("config:dump");`), you **must** disable console interception in your Vitest configuration by adding the line `disableConsoleIntercept: true` to your `vitest.config.ts`.

### Example `vitest.config.ts`

```
ts
CopyEdit
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    setupFiles: ["./src/vitest.setup.ts"],
    disableConsoleIntercept: true
  }
});

```

### Why This Matters

`@oclif/test` relies on native `stdout`/`stderr` streams to verify command-line output. If `Vitest` intercepts these streams, captured output will be incomplete or missing—leading to failed or misleading assertions.

## Code Coverage

Code coverage is provided automatically for JavaScript and TypeScript projects via [nyc](https://npm.im/nyc). Just run `yarn test` and it will show the code coverage. The coverage can optionally be sent to [codecov](https://codecov.io) in the CI scripts as well.
