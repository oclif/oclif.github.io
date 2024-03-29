---
title: NSIS Installer Customization
description: Custom nsis installer script
---

Sometimes you need to verify some dependencies, ensure there are no conflicting CLIs installed, or do some other custom logic before installing your CLI. For npm-scenarios, simply specify a `preinstall` script. But Windows installers don't include this script. You must instead write your own nsis modification to do these checks. See where this custom script gets placed in the installer in the [oclif/oclif](https://github.com/oclif/oclif/blob/b8d76af9290716ef69d8d1026f98041268306dfd/src/commands/pack/win.ts#L60) repo.

See how [Salesforce CLI](https://github.com/salesforcecli/cli) did this to prevent their new major version being installed on top of an older, and incompatible, version. In that `package.json`, they specified an nsis installer like this:
```json

{
  "name": "mycli",
  "version": "0.0.0",
  "description": "My CLI",
  "main": "bin/run.js",
  "bin": "./bin/run.js",
  "oclif": {
    "nsisCustomization": "scripts/nsis.nsi"
  }
}
```

And then their custom script was loaded into the installer during the packing phase of the CLI.
