---
author: Jeff Dickey
authorURL: https://twitter.com/jdxcode
authorFBID: 42004440
title: Introducing oclif
---

![Introducing oclif](/img/2018-03-20-introducing-oclif/header.png)

Coding for the browser takes serious time. You need to deal with front-end JS, CSS, design, product, and a ton more. On the other hand, building for a CLI takes a fraction of the effort. This makes CLIs particularly great for prototyping out new functionality, offering admin/internal tools, or power-user functionality.

<!--truncate-->

CLIs have a much smaller footprint as well. Less code and fewer dependencies mean there is less to maintain. The code you write today is much more likely to work tomorrow in a CLI than it would be in the browser—Chrome changes far more often than Bash. Security is also much less of an issue as the code is running on the user’s machine and not on a sensitive platform amongst other users.

APIs are wonderful. We’re lucky to live in a world where building a modern web application often involves building a JSON API to sit alongside it both to work with modern JS frameworks like Angular and React, but also to support mobile platforms. Assuming you have a setup like this, adding on a CLI will slide right into your existing architecture.

If you have a public API, a CLI would be a huge help to users that want to consume it. For a quick task, we can use cURL and tools like [jq](https://stedolan.github.io/jq/), but doing so always requires some docs research and learning how to make authentication work. It’s a solid effort even for the best designed APIs. Rather than researching all of this, it’s much easier to install a CLI, fire it up, run mycli --help run a login command and perform our task.

To help you on this path, I’m happy to announce today we [released](https://blog.heroku.com/open-cli-framework) the framework the [Heroku CLI](http://cli.heroku.com) and [Salesforce DX](https://developer.salesforce.com/tools/sfdxcli) is based on to let anyone build their own custom CLI. We call it: [oclif](http://oclif.io).

## oclif

oclif is a Node.js based CLI framework designed for simple CLIs and very large CLIs. Here are some of the highlights:

* **Performance:** oclif uses very few dependencies and much care is taken to ensure the overhead is virtually nil.

* **CLI Generator:** Run a single command to scaffold out a new CLI.

* **Automatic Doc Generation:** Your users need to learn how to use your CLI. It will automatically have help generated with--help as well as a README with all the flags and arg options in your CLI.

* **Testing:** As you build a CLI we’ll automatically drop in stubbed tests that make it easy to stub out API calls and output. We feel it’s crucial to make it easy to write tests in order to keep you focused on delivering your functionality.

* **[And more.](https://github.com/oclif/oclif#-features)**

## Why Node?

Node has a number of practical advantages. It’s got more open source libraries than any other language that can be used, it offers great performance compared to other scripting languages, and it runs well on every platform including Windows. I’ve had experience writing the [Heroku CLI in Ruby and Go](https://blog.heroku.com/evolution-of-heroku-cli-2008-2017) as well and I can say without question that using Node is a dream.

JavaScript has quickly become the lingua franca of the web. Compared to all other languages: JavaScript can be written by more people. I think for a CLI it’s important that anyone can jump in and start hacking on a new command and contribute back. Using a language that everyone knows (even if they don’t know it well) has a huge advantage.

Truthfully though, for almost all CLIs you’re likely to write, it’s not likely to contain much complex code. Performance isn’t generally a big issue as you’re usually waiting on an API call and memory leaks basically don’t even matter as a CLI command runs once then quits. Compared to writing front-end or a back-end system, CLI code just isn’t that complicated. The language choice matters less here; you just have to be able to write the basics.

We’re a big fan of TypeScript and oclif itself is fully written in TypeScript. We find it leads to a friendly development experience with more writing code and less debugging. You have the option of building CLIs in standard Node without TypeScript, but the syntax in TypeScript is quite a bit cleaner. We definitely encourage you to use TypeScript.

## An Example

<iframe src="https://player.vimeo.com/video/260885052" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/260885052">oclif: githubcli</a> from <a href="https://vimeo.com/jdxcode">jdxcode</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

I’d like to create a simple example with oclif to build a CLI for GitHub to show the users that have starred a repo. First, let’s create a multi-CLI so we have the option to add more commands to this CLI later.

```sh-session
$ npx oclif multi githubcli
...
Created githubcli in ~/src/githubcli
```

*Note that all you need to have installed is a recent version of npm. npx is included and will automatically install and run the oclif generator.*

We can run this CLI with its example command by running:

```sh-session
$ ./bin/run hello
hello world from ./src/commands/hello.ts!
```

Now we can create a stars command we’ll use to show the users that have starred a project. We’ll also add in [axios](https://www.npmjs.com/package/axios) to make the HTTP call to GitHub.

```sh-session
$ npx oclif command stars
$ yarn add axios
$ yarn add --dev @types/axios
```

Now, open ./src/commands/stars.ts and replace the contents with the following:

```typescript
import {Command} from '@oclif/command'
import axios from 'axios'

export default class Stars extends Command {
  static description = 'show the github stars on a repository'
  static args = [
    {
      name: 'repository',
      required: true
    }
  ]

  async run() {
    const {args} = this.parse(Stars)
    const {data: stargazers} = await axios.get(`https://api.github.com/repos/${args.repository}/stargazers`)
    for (let s of stargazers) {
      this.log(s.login)
    }
  }
}
```

Lastly, run the command:

```sh-session
$ ./bin/run stars oclif/oclif
jdxcode
usera
userb
userc
...
```

We’ve got a functioning CLI! All we need to publish this for others to use is to run npm publish. [Here is the complete example](https://github.com/oclif/githubcli).

*Note that this example does not implement pagination so we only get the first few stars of a repo. It also doesn’t use use a GitHub OAuth token so the rate limit is low.*

I hope you get a chance to try out oclif for your own project! For more information, check the [oclif documentation](http://oclif.io/docs/introduction.html).
