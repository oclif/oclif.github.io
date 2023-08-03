module.exports={
  "title": "oclif: The Open CLI Framework",
  "tagline": "Create command line tools your users love",
  "url": "https://oclif.github.io",
  "baseUrl": "/",
  "organizationName": "oclif",
  "projectName": "oclif.github.io",
  "scripts": [
    "https://buttons.github.io/buttons.js"
  ],
  "stylesheets": [
    "https://fonts.googleapis.com/css?family=Roboto:400,700|Roboto+Mono"
  ],
  "favicon": "img/oclif_rev.svg",
  "customFields": {
    "disableHeaderTitle": true,
    "fonts": {
      "myFont": [
        "Roboto",
        "sans-serif"
      ],
      "myOtherFont": [
        "-apple-system",
        "system-ui"
      ]
    },
    "repoUrl": "https://github.com/oclif/oclif",
    "presets": [
      [
        "@docusaurus/preset-classic",
        {
          "blog": {
            "feedOptions": {
              "type": "all",
              "title": "oclif.io Blog",
              "description": "The oclif.io Blog Feed",
              "copyright": "Copyright © 2023 Salesforce"
            }
          }
        }
      ]
    ],
    "blogSidebarCount": "ALL"
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "editUrl": "https://github.com/oclif/oclif.github.io/tree/docs/docs/",
          "path": "../docs",
          "sidebarPath": "../website/sidebars.json"
        },
        "blog": {
          "path": "blog"
        },
        "theme": {
          // "customCss": "../website/static/css/custom.css"
          "customCss": "../website/src/css/custom.css"
        }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
    "navbar": {
      // "title": "oclif: The Open CLI Framework",
      "logo": {
        "src": "img/oclif.svg",
        "srcDark": "img/oclif_rev.svg",
        "alt": "oclif",
        "href": "/",
        "target": "_self",
      },
      "items": [
        {
          "to": "docs/introduction",
          "label": "Getting Started",
          "position": "right"
        },
        {
          "to": "docs/commands",
          "label": "API Reference",
          "position": "right"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "right"
        },
        {
          "href": "https://github.com/oclif/oclif",
          "label": "GitHub",
          "position": "right"
        }
      ]
    },
    "footer": {
      "links": [],
      "copyright": "Copyright © 2023 Salesforce",
      "logo": {
        "src": "img/salesforce-logo.svg",
        "alt": "Salesforce",
        "href": "https://developer.salesforce.com",
        "width": 160,
        "height": 51
      }
    },
    "algolia": {
      "apiKey": "6032dd3bbb99cdcfacc285354871966c",
      "indexName": "oclifio",
      "appId": "Q04FC8Q6OZ",
      "contextualSearch": false,
    }
  }
}
