---
title: 测试
description: 如何测试你的 CLI
---

oclif 中的测试可以用任何测试框架来完成。你可以使用 `MyCommand.run()` 运行命令，它返回一个你可以等待的 promise。

但是，在编写 CLI 工具时有一些常见的任务。为此，我们建议使用一组常规工具来测试你的 CLI。这些都是基于 [mocha](https://mochajs.org) 和 [fancy-test](https://github.com/jdxcode/fancy-test)。

Mocha 是顶级的 JavaScript 测试框架，是任何项目的可靠选择。fancy-test 是我们开发的一个工具，它构建在 mocha 之上，可以轻松地重复模式并编写简洁的 mocha 测试。还有一个库[@oclif/test](https://github.com/oclif/test)，它使用特定于测试 oclif CLI 的助手扩展了 fancy-test。例如，运行命令或钩子或检查是否设置了终止状态代码。

任何使用 oclif 构建的 CLI 都将预装这些工具和一个示例测试，该测试应该可以使用 `npm test` 或 `yarn test` 开箱即用。

作为一个例子，让我们看一下 `heroku whoami` 命令，它调用 API 来获取当前登录的用户。如果用户未登录，则退出，状态码为 100。（这是一个简化的例子，这里是[实际的代码](https://github.com/heroku/heroku-cli-plugin-auth)。）

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

我们喜欢在测试 oclif CLI 时使用的另一个常用工具是 [nock](https://github.com/node-nock/nock)。将 `nock` 包安装为 devDependency。

下面是测试代码

**test/commands/whoami.test.ts**

```typescript
import {expect, test} from '@oclif/test'

describe('auth:whoami', () => {
  test
  .nock('https://api.heroku.com', api => api
    .get('/account')
    // 用户登录后，返回他们的名字
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
    // HTTP 401 意味着用户没有使用有效凭据登录
    .reply(401)
  )
  .command(['auth:whoami'])
  // 检查以确保命令以状态码 100 退出
  .exit(100)
  .it('exits with status 100 when not logged in')
})
```

这些工具不仅可以模拟 stdout/stderr 和 HTTP 调用，还可以确保它们在测试后自动重置。我们在用更简单的 `beforeEach/afterEach` 过滤器构建 CLI 时遇到的一个常见问题是，如果没有正确设置 `afterEach` 过滤器，失败的测试可能会留下 mock，使后面的测试失败。使用fancy-test，我们避免了这个问题，并且只需要声明一次我们的 mock。

关于如何使用 oclif 进行测试的更多信息，请查看 [fancy-test](https://github.com/jdxcode/fancy-test) 和 [@oclif/test](https://github.com/oclif/test) 的文档。

## stdout/stderr

stdout/stderr 模拟在底层使用 [stdout-stderr](https://github.com/jdxcode/stdout-stderr)。如果你更喜欢使用 jest 或想要不同的测试设置，但仍然能够模拟 stdout 和 stderr，则可以独立使用该库。

如果你想看到输出，但让它模拟，你可以在选项中传入 `{print: true}`，或者设置 `TEST_OUTPUT=1`。

## 代码覆盖率

代码覆盖率通过 [nyc](https://npm.im/nyc) 自动为 JavaScript 和 TypeScript 项目提供。只要运行 `yarn test` ，它就会显示代码覆盖率。覆盖率也可以选择性地发送到 CI 脚本中的 [codecov](https://codecov.io)。
