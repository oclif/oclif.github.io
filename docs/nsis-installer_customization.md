---
title: NSIS Installer Customization
---

Sometimes you might need to verify some dependencies, ensure there's no conflicting CLIs installed, or do some other custom logic before installing your CLI. For npm-scenarios, this is easy enough by specifying a `preinstall` script, but when it comes to windows installers, there's no such thing. You must write your own nsis modification to do these checks. You can see exactly where this custom script gets placed in the installer at the [oclif/oclif](https://github.com/oclif/oclif/blob/b8d76af9290716ef69d8d1026f98041268306dfd/src/commands/pack/win.ts#L60) repo. 

You can see how the [Salesforce CLI](https://github.com/salesforcecli/cli) did this to prevent their new major version of the CLI being installed on top of an older, and incompatible version. In that `package.json`, they specified an nsis installer like 
```json

{
  "name": "mycli",
  "version": "0.0.0",
  "description": "My CLI",
  "main": "bin/run",
  "bin": "./bin/run",
  "oclif": {
    "nsisCustomization": "scripts/nsis.nsi"
  }
}
```

And then their custom script was loaded into the installer during the packing phase of the CLI.