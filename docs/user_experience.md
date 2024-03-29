---
title: User Experience
description: Provided user-experience utilities
---

oclif's philosophy is that developers should free to design any user experience that they want for their users. In other words, we try really hard to not make any UX decisions for you.

So many times we utilize [hooks](./hooks.md) whenever a user experience is required (e.g. the provided command isn't found). That way you can design the exact experience you want your users to have. In the case of error handling, you're [able to override](./error_handling.md) oclif's default behavior.

But to make it easy for you, `@oclif/core` exports a [`ux` module](https://github.com/oclif/core/blob/main/src/cli-ux/README.md) that offers several tools you can use to implement your desired user experience.

However, due to time constraints we are not able to support this module as well as we would like. For that reason, we **strongly** recommend that you find npm libraries that specialize in the UX components you want to use. Here's a brief list of some of the libraries we like:

- For prompts: [inquirer](https://www.npmjs.com/package/inquirer)
- For spinners: [ora](https://www.npmjs.com/package/ora)
- For progress bars: [cli-progress](https://www.npmjs.com/package/cli-progress)
- For hyperlinks: [hyperlink](https://www.npmjs.com/package/hyperlink)
- For tables: [tty-table](https://www.npmjs.com/package/tty-table), [cliui](https://www.npmjs.com/package/cliui)
- For trees: [object-treeify](https://www.npmjs.com/package/object-treeify)
- For colored JSON: [color-json](https://www.npmjs.com/package/color-json)
- For notifications: [node-notifier](https://www.npmjs.com/package/node-notifier)
- For links: [terminal-link](https://www.npmjs.com/package/terminal-link)
- For rendering react components: [ink](https://www.npmjs.com/package/ink)
