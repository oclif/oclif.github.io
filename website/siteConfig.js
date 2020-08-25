/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
// const users = [
//   {
//     caption: 'User1',
//     image: '/test-site/img/docusaurus.svg',
//     infoLink: 'https://www.facebook.com',
//     pinned: true,
//   },
// ];

const siteConfig = {
  title: 'oclif: The Open CLI Framework',
  disableHeaderTitle: true,
  tagline: 'Create command line tools your users love',
  url: 'https://oclif.github.io',
  baseUrl: '/',
  organizationName: 'oclif',
  projectName: 'oclif.github.io',
  headerLinks: [
    {doc: 'introduction', label: 'Getting Started'},
    {page: 'conf', label: 'oclifconf'},
    {doc: 'commands', label: 'API Reference'},
    {blog: true, label: 'Blog'},
    {href: 'https://github.com/oclif/oclif', label: 'GitHub'},
    // {doc: 'now_hiring', label: 'Now Hiring!'},
  ],
  // users,
  /* path to images for header/footer */
  headerIcon: 'img/oclif_rev.svg',
  footerIcon: 'img/oclif.svg',
  favicon: 'img/favicon.png',

  /* colors for website */
  colors: {
    primaryColor: '#394351',
    secondaryColor: '#2a323c',
  },
  fonts: {
    myFont: [
      "Roboto",
      "sans-serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Salesforce.com',
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/oclif/oclif',
  /* On page navigation for the current documentation page */
  // onPageNav: 'separate',
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Roboto:400,700|Roboto+Mono',
  ],
  editUrl: 'https://github.com/oclif/oclif.github.io/tree/docs/docs/',
  cname: 'oclif.io',
  algolia: {
    apiKey: '433a7758541da1949f63b813ddf5c78c',
    indexName: 'oclif'
  },
  cleanUrl: true,
  enableUpdateTime: true,
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          feedOptions: {
            type: 'all',
            title: 'oclif.io Blog',
            description: 'The oclif.io Blog Feed',
            copyright: `Copyright © ${new Date().getFullYear()} Salesforce`,
          },
        },
      },
    ],
  ],
};

module.exports = siteConfig;
