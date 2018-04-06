---
title: Testing
---

Testing in oclif can be done with any testing framework. You can run commands with `MyCommand.run()` which returns a promise you can wait on.

There are common tasks however when writing CLI tools. For this, we have a conventional set of tools that we suggest using to test your CLI. These are based on [mocha](https://mochajs.org) and [fancy-test](https://github.com/jdxcode/fancy-test).

Mocha is the top JavaScript testing framework and a solid choice for any project. fancy-test is a tool we developed that builds on top of mocha to make it easy to repeat patterns and write concise mocha tests. There is also a library [@oclif/test](https://github.com/oclif/test) that extends fancy-test with helpers specific to testing oclif CLIs. These are things like running a command or hook or checking if an exit status code is set, for example.

Any CLI built with oclif will come preloaded with these tools and an example test that should work out of the box with `npm test` or `yarn test`.

As an example, let's look at the `heroku whoami` command which makes an API call to get the current logged in user if the user is not logged in it exits with status 100. (This is a simplified example, here is [the actual code](https://github.com/heroku/heroku-cli-plugin-auth))

**src/commands/whoami.ts**

```js
import Command from '@heroku-cli/command'

export class Whoami extends Command {
  async run() {
    try {
      let {body: account} = await this.heroku.get('/account')
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

Another common tool we like to use in testing oclif CLIs is [nock](https://github.com/node-nock/nock). Before we can use fancy-test with nock though, we need to register the nock plugin as it's optional. Install the packages `@fancy-test/nock`, `nock`, and for TypeScript, `@types/nock` as devDependencies.

To share @oclif/test registered with nock, we have a helper file with the following:

**test/test.ts**

```typescript
import Nock from '@fancy-test/nock'
import * as Test from '@oclif/test'
export {expect} from '@oclif/test'

export const test = Test.test
.register('nock', Nock)
```

Finally here is the test code

**test/commands/whoami.ts**

```typescript
import {expect, test} from '../test'

describe('auth:whoami', () => {
  test
  .nock('https://api.heroku.com', api => api
    .get('/account')
    // user is logged in, return their name
    .reply(200, {email: 'jeff@example.com'})
  )
  .stdout()
  .command(['auth:whoami'])
  .it('shows user email when logged in', ctx => {
    expect(ctx.stdout).to.equal('jeff@example.com\n')
  })

  test
  .nock('https://api.heroku.com', api => api
    .get('/account')
    // HTTP 401 means the user is not logged in with valid credentials
    .reply(401)
  )
  .command(['auth:whoami'])
  // checks to ensure the command exits with status 100
  .exit(100)
  .it('exits with status 100 when not logged in')
})
```

These tools are setup to not only mock out the stdout/stderr and HTTP calls, but they're setup to ensure they automatically reset after the test. A common issue we've had when building CLIs with simpler `beforeEach/afterEach` filters is that is the `afterEach` filters aren't setup correctly, a failing test can leave mocks around that make later tests fail. Using fancy-test, we avoid this problem and only have to declare our mocks once.

For more on how to test with oclif, check out the docs for [fancy-test](https://github.com/jdxcode/fancy-test) and [@oclif/test](https://github.com/oclif/test).

## stdout/stderr

The stdout/stderr mocks use [stdout-stderr](https://github.com/jdxcode/stdout-stderr) under the hood. This library can be used standalone if you'd prefer to use jest or want a different testing setup but still have the ability to mock out stdout and stderr.

If you want to see the output but leave it mocked, you can either pass in `{print: true}` to the options, or set `DEBUG=*` (to see all output) or `DEBUG=stdout|stderr` (to see just the stdout/stderr). Alternatively, set `TEST_OUTPUT=1`.
