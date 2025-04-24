// docusaurus.config.js
// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Guía DevTools',
  tagline: 'Domina las DevTools como un pro',
  favicon: 'https://cdn.jsdelivr.net/npm/@browser-logos/chrome-devtools@1.0.12/chrome-devtools.svg',

  url: 'https://912653526.facturalo.co',
  baseUrl: '/docusaurus/',

  organizationName: 'your-org', // Ajusta a tu GitHub org
  projectName: 'your-repo',     // Ajusta a tu repo

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/your-org/your-repo/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/your-org/your-repo/edit/main/blog/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'https://cdn.jsdelivr.net/npm/@browser-logos/chrome-devtools@1.0.12/chrome-devtools.svg',
      navbar: {
        title: 'Guía DevTools',
        logo: {
          alt: 'Icono DevTools',
          src: 'https://cdn.jsdelivr.net/npm/@browser-logos/chrome-devtools@1.0.12/chrome-devtools.svg',
          style: {
            width: '32px',
            height: '32px',
            marginTop: '4px',
          },
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentación',
          },
          {
            to: '/blog',
            label: 'Novedades',
            position: 'left',
          },
          {
            href: 'https://github.com/your-org/your-repo',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentación',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Más',
            items: [
              {
                label: 'Novedades',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/your-org/your-repo',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Tu Proyecto.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
