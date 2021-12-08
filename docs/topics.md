---
title: Topics
---

As CLIs grow it can be useful to nest commands within topics. This is supported simply by placing command files in subdirectories. For example, with the Salesforce CLI we have a topic `sf config` with commands like `sf config set` and `sf config get`. The directory structure looks like this:

```
package.json
src/
└── commands/
    └── config/
        ├── index.ts
        ├── set.ts
        └── get.ts
```

The help descriptions will be the description of the first command within a directory. If you'd like to customize the help description, add it to the `package.json` like so:

```js
{
  "oclif": {
    "topics": {
      "apps:favorites": { "description": "manage favorite apps" },
      "config": { "description": "manage heroku config variables" },
    }
  }
}
```

Subtopics can be created by making subdirectories within topic directories, but for UX reasons we generally discourage going more than 1 or 2 levels deep even for the largest CLIs.
