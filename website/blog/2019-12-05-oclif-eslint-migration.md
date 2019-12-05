---
title: oclif TSLint to ESLint Migration
---

Back in February of this year, plans were announced to [deprecate TSLint](https://github.com/palantir/tslint/issues/4534) in favor of ESLint. TSLint's goal has become to work toward a “unified developer experience” by supporting ESLint development going forward.



## What has changed in oclif

To keep inline with the community, oclif has transitioned to ESLint for all our core libraries as well as all our official plugins.

Starting in v1.15.x, oclif will now optionally generate projects with ESLint for both Typescript and JavaScript CLI’s.

ESLint does require Node to be on stable LTS version, at the time of writing, Node 8.10.x, Node 10.13.x & Node 12.x.x.

## How does this affect you

Existing CLI’s are unchanged, but any newly generated CLI's will only give the option of using ESLint. If you are running tslint in your CLI, we recommend you switch to ESLint as well.

In migrating our projects we took the following steps (for an example of these changes see this [pull request](https://github.com/oclif/githubcli/pull/10)).

1. Install eslint

    `$ yarn add eslint eslint-config-oclif eslint-config-oclif-typescript --dev`
2. Add eslint related files
```shell
$ echo '{
  "extends": [
    "oclif",
    "oclif-typescript"
  ],
  "rules": {
  }
}' > .eslintrc
```
3. Remove tslint and related packages

    `$ yarn remove @oclif/tslint tslint`
4. Remove tslint related configuration files

    `$ rm tslint.json`
5. Change lint script in our package.json from something like:

    `"lint": "tsc -p test --noEmit && tslint -p test -t stylish"`
    
    to
    
    `"lint": "eslint . --ext .ts --config .eslintrc"`

To preserve the test compile (tsc -p test --noEmit) we also made the following updates to our scripts:

`"pretest": "tsc -p test --noEmit"`

In some cases we had our posttest duplicating the same steps as our lint script so it’s cleaner to have it reference the lint job directly with:

`"posttest": "yarn lint"`


6. Run `yarn lint --fix`. This attempts to auto-fix any linting violations automatically. In the case an auto-fix isn’t available it should be fixed manually or ignored (see the [eslint configuration doc](https://eslint.org/docs/user-guide/configuring) for more information) 
7. Do a search in the codebase for `tslint` and remove any unnecessary tslint disabling comments, like: 
```javascript
/* tslint:disable:object-literal-sort-keys */
```


If you are on a version of node that is not supported by ESLint, you will also need to update your node engine. ESLint supports Node 8, 10, and 12 so you should upgrade to the most recent node version compatible with your CLI and also supported by eslint (see eslint’s [Installation and Usage](https://www.npmjs.com/package/eslint#installation-and-usage) instructions).

## When will this take effect

These changes have taken effect in oclif v1.15.1. When you generate a new CLI or plugin it will now contain configuration for ESLint instead of TSLint.
