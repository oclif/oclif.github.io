import type {Config} from '@docusaurus/types'
import type {Options as BlogOptions} from '@docusaurus/plugin-content-blog'
import type * as Preset from '@docusaurus/preset-classic'

export default async function createConfigAsync() {
  return {
    title: 'oclif: The Open CLI Framework',
    tagline: 'Create command line tools your users love',
    url: 'https://oclif.github.io',
    baseUrl: '/',
    organizationName: 'oclif',
    projectName: 'oclif.github.io',
    deploymentBranch: 'main',
    scripts: ['https://buttons.github.io/buttons.js'],
    stylesheets: ['https://fonts.googleapis.com/css?family=Roboto:400,700|Roboto+Mono'],
    favicon: 'img/oclif_rev.svg',
    customFields: {
      disableHeaderTitle: true,
      fonts: {
        myFont: ['Roboto', 'sans-serif'],
        myOtherFont: ['-apple-system', 'system-ui'],
      },
      repoUrl: 'https://github.com/oclif/oclif',
    },
    onBrokenLinks: 'log',
    onBrokenMarkdownLinks: 'log',
    presets: [
      [
        'classic',
        {
          docs: {
            showLastUpdateAuthor: true,
            showLastUpdateTime: true,
            editUrl: 'https://github.com/oclif/oclif.github.io/tree/docs/docs/',
            path: '../docs',
            sidebarPath: '../website/sidebars.ts',
          },
          blog: {
            path: 'blog',
            blogSidebarCount: 'ALL',
            blogTitle: 'oclif blog',
            blogDescription: 'Read blog posts about oclif from the team',
            blogSidebarTitle: 'All our posts',
            feedOptions: {
              type: 'all',
              title: 'oclif.io Blog',
              description: 'The oclif.io Blog Feed',
              copyright: 'Copyright © 2023 Salesforce',
            },
          } satisfies BlogOptions,
          theme: {
            customCss: '../website/src/css/custom.css',
          },
        } satisfies Preset.Options,
      ],
    ],
    plugins: [],
    themeConfig: {
      navbar: {
        logo: {
          src: 'img/oclif.svg',
          srcDark: 'img/oclif_rev.svg',
          alt: 'oclif',
          href: '/',
          target: '_self',
        },
        items: [
          {
            to: 'docs/introduction',
            label: 'Getting Started',
            position: 'right',
          },
          {
            to: 'docs/api_reference',
            label: 'API Reference',
            position: 'right',
          },
          {
            to: 'blog',
            label: 'Blog',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/oclif/oclif',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
            position: 'right',
          },
        ],
      },
      announcementBar: {
        id: 'announcementBar-1', // Increment on change (otherwise new announcements won't show up for users who have already dismissed old ones)
        content: `<b><a target="_blank" href="https://github.com/oclif/core/releases/tag/3.0.0">@oclif/core v3.0</a> is now out! 🥳️</b>`,
      },
      footer: {
        links: [],
        copyright: 'Copyright © 2023 Salesforce',
        logo: {
          src: 'img/salesforce-logo.svg',
          alt: 'Salesforce',
          href: 'https://developer.salesforce.com',
          width: 160,
          height: 51,
        },
      },
      algolia: {
        apiKey: '6032dd3bbb99cdcfacc285354871966c',
        indexName: 'oclifio',
        appId: 'Q04FC8Q6OZ',
        contextualSearch: true,
      },
    } satisfies Preset.ThemeConfig,
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'zh'],
      localeConfigs: {
        en: {
          label: 'English',
          htmlLang: 'en-US',
        },
        zh: {
          label: '简体中文',
          htmlLang: 'zh-Hans',
          path: 'zh'
        }
      }
    }
  } satisfies Config
}
