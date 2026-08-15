import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Trama Partners',
  tagline: 'Processos, consultoria e operação do time — em um só lugar',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://www.tramapartners.com.br/',
  baseUrl: '/',

  organizationName: 'Trama-Partners',
  projectName: 'site',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['pt', 'en'],
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: '/docs',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchBarShortcut: true,
        searchBarShortcutHint: true,
      },
    ],
  ],

  themeConfig: {
    image: 'img/trama-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: 'Trama Partners',
      logo: {
        alt: 'Logo da Trama Partners',
        src: 'img/trama.jpg',
        className: 'navbar-logo',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentação',
        },
        {
          href: 'https://github.com/Trama-Partners',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentação',
          items: [
            {
              label: 'Visão geral',
              to: '/docs/intro',
            },
            {
              label: 'Processos',
              to: '/docs/processos',
            },
          ],
        },
        {
          title: 'Áreas',
          items: [
            {
              label: 'TikTok Shop',
              to: '/docs/processos/tiktok',
            },
            {
              label: 'Consultoria',
              to: '/docs/processos/consultoria',
            },
          ],
        },
        {
          title: 'Trama Partners',
          items: [
            {
              label: 'Site institucional',
              href: 'https://www.tramapartners.com.br/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Trama-Partners',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Trama Partners.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
