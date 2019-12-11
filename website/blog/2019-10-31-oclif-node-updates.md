---
title: oclif's Current Node Support
---

To maintain a healthy project trajectory, oclif follows and supports [Node Active LTS release](https://nodejs.org/en/about/releases/), currently Node 10 & Node 12. This means ensuring that oclif continues to play nice with coming Active LTS Node versions and other packages in the ecosystem. Moving forward also means leaving older versions behind. Starting in 2020, Node will stop maintaining [Node 8](https://github.com/nodejs/Release#release-schedule) and it is our intent at that time to also follow suit. Let’s take a look at a few ways we will be supporting these changes.

## CI Environments

CLIs created with the oclif cli going forward will be generated with a CircleCI configuration with Node 10 & 12 and an Appveyor configuration using Node 10. We have also added Node latest to CircleCi to be an early warning detection against coming Node changes (Node latest is managed by CircleCI).

We have already updated every oclif repo's CI configs to reflect this.

If your existing CLI uses either Appveyor or CircleCI you can update your config files also, like so:

### .circleci/config.yml

Your CircleCI config should contain a `node-latest` job, aliased as `test`. From this, there should be two extensions of this job for the Active LTS Node versions, Node 10 and Node 12.

```
  node-10:
    <<: *node-latest
    docker:
      - image: node:10
  node-12:
    <<: *node-latest
    docker:
      - image: node:12
```

Notice that these declarations only change the Docker Node images used to run that job.

Additionally, the jobs listed within workflows must also be updated to reflect our changes in configuration:

```
    jobs:
      - node-latest
      - node-10
      - node-12
```

### appveyor.yml

For appveyor we are currently only testing the oldest Active LTS Node version, Node 10. Update the `nodejs_version` proppert in your appveyor.yml file to reflect this.

```
environment:
  nodejs_version: "10"
```


## Deprecating Node 8 & Updating packge.json engines

In Jan 2020, Node will end its Node 8 maintenance. We will follow suit by setting the package.json engine property in oclif packages to `>=10` and bumping the package's major versions.

Depending on how you ship your CLI you may wish to also bump the engines version in your CLI's package.json. You can read more about the implications of the engines property configuration in the [npm documentation](https://docs.npmjs.com/files/package.json#engines).

Also consider distributing your CLI with [its own Node version](https://oclif.io/docs/releasing#standalone-tarballs).

## Packaged Node Version

When using dev-cli to pack your CLI it will use the Node version as specified in your package.json under the `oclif.update.node.version` property. This value should reflect an Active LTS Node version (dev-cli does not currently enforce versions).

## Supporting the future

As a community we may discover bumps along the way as we upgrade. If you notice something related to oclif please feel free to open an issue or submit a pull request under the relevant oclif package within [the org](https://github.com/oclif).

We look forward to using the latest from Node and the community and keeping oclif healthy along the way.
