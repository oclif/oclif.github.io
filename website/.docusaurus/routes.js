import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'ace'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'a19'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '5a1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '3a7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'ec1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '95b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '10b'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'd74'),
    exact: true
  },
  {
    path: '/blog/2018/03/20/introducing-oclif',
    component: ComponentCreator('/blog/2018/03/20/introducing-oclif', '16a'),
    exact: true
  },
  {
    path: '/blog/2019/02/20/cli-flags-explained',
    component: ComponentCreator('/blog/2019/02/20/cli-flags-explained', 'f33'),
    exact: true
  },
  {
    path: '/blog/2019/09/16/oclifconf-recap',
    component: ComponentCreator('/blog/2019/09/16/oclifconf-recap', 'b9d'),
    exact: true
  },
  {
    path: '/blog/2019/10/31/oclif-node-updates',
    component: ComponentCreator('/blog/2019/10/31/oclif-node-updates', '5c6'),
    exact: true
  },
  {
    path: '/blog/2019/12/05/oclif-eslint-migration',
    component: ComponentCreator('/blog/2019/12/05/oclif-eslint-migration', 'aa4'),
    exact: true
  },
  {
    path: '/blog/2020/05/05/introducing-custom-help-classes',
    component: ComponentCreator('/blog/2020/05/05/introducing-custom-help-classes', 'b61'),
    exact: true
  },
  {
    path: '/blog/2020/07/01/pretty-printable-errors',
    component: ComponentCreator('/blog/2020/07/01/pretty-printable-errors', 'e15'),
    exact: true
  },
  {
    path: '/blog/2020/08/26/summer-update',
    component: ComponentCreator('/blog/2020/08/26/summer-update', '5c0'),
    exact: true
  },
  {
    path: '/blog/2021/03/01/introducing-oclif-core',
    component: ComponentCreator('/blog/2021/03/01/introducing-oclif-core', 'bde'),
    exact: true
  },
  {
    path: '/blog/2022/01/12/announcing-oclif-v2',
    component: ComponentCreator('/blog/2022/01/12/announcing-oclif-v2', 'd77'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '050'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', 'e0e'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '509'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', 'a6b'),
        exact: true
      },
      {
        path: '/docs/aliases',
        component: ComponentCreator('/docs/aliases', '0d8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/args',
        component: ComponentCreator('/docs/args', '9fb'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/base_class',
        component: ComponentCreator('/docs/base_class', 'c57'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/command_execution',
        component: ComponentCreator('/docs/command_execution', '510'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/commands',
        component: ComponentCreator('/docs/commands', '96a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/config',
        component: ComponentCreator('/docs/config', 'dd2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/debugging',
        component: ComponentCreator('/docs/debugging', '427'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/error_handling',
        component: ComponentCreator('/docs/error_handling', 'fd2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/esm',
        component: ComponentCreator('/docs/esm', '903'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/examples',
        component: ComponentCreator('/docs/examples', '321'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/external_links',
        component: ComponentCreator('/docs/external_links', 'bb2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/faqs',
        component: ComponentCreator('/docs/faqs', 'ef2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/features',
        component: ComponentCreator('/docs/features', '228'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/feedback',
        component: ComponentCreator('/docs/feedback', '0a2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/flags',
        component: ComponentCreator('/docs/flags', 'c96'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/flexible_taxonomy',
        component: ComponentCreator('/docs/flexible_taxonomy', '2bc'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/generator_commands',
        component: ComponentCreator('/docs/generator_commands', 'bd4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/global_flags',
        component: ComponentCreator('/docs/global_flags', '52c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/help_classes',
        component: ComponentCreator('/docs/help_classes', '5f9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/hooks',
        component: ComponentCreator('/docs/hooks', '68c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/how_we_work',
        component: ComponentCreator('/docs/how_we_work', '368'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/introduction',
        component: ComponentCreator('/docs/introduction', '922'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/jit_plugins',
        component: ComponentCreator('/docs/jit_plugins', 'd1e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/json',
        component: ComponentCreator('/docs/json', 'b5e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/notifications',
        component: ComponentCreator('/docs/notifications', '9aa'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/nsis-installer_customization',
        component: ComponentCreator('/docs/nsis-installer_customization', 'bcb'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/plugin_loading',
        component: ComponentCreator('/docs/plugin_loading', '750'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/plugins',
        component: ComponentCreator('/docs/plugins', 'fc6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/prompting',
        component: ComponentCreator('/docs/prompting', '721'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/related_repos',
        component: ComponentCreator('/docs/related_repos', '435'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/releasing',
        component: ComponentCreator('/docs/releasing', '5b4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/running_programmatically',
        component: ComponentCreator('/docs/running_programmatically', 'ef2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/single_command_cli',
        component: ComponentCreator('/docs/single_command_cli', '28e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/spinner',
        component: ComponentCreator('/docs/spinner', '947'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/table',
        component: ComponentCreator('/docs/table', 'c2b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/testing',
        component: ComponentCreator('/docs/testing', '8d8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/topic_separator',
        component: ComponentCreator('/docs/topic_separator', 'ac3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/topics',
        component: ComponentCreator('/docs/topics', '704'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'ff0'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
