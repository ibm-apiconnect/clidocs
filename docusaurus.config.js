// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IBM API Connect CLI Docs',
  tagline: 'Toolkit reference documentation site',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ibm-apiconnect.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/clidocs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ibm-apiconnect', // Usually your GitHub org/user name.
  projectName: 'clidocs', // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ibm-apiconnect/clidocs/tree/main',
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
      // Replace with your project's social card
      navbar: {
        title: 'IBM API Connect CLI documentation',
        logo: {
          alt: 'API Connect Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'CLI Reference',
          },
          {to: 'https://apic-api.apiconnect.ibmcloud.com/v10/10.0.LATEST.html#/documentation/introduction', label: 'API Docs', position: 'left'},
          {to: 'https://www.ibm.com/docs/en/api-connect/10.0.8.x_lts', label: 'API Connect v10.0.8 Docs', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'CLI Docs',
            items: [
              {
                label: 'CLI Docs',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'IBM Documentation Centers',
            items: [
              {
                label: 'IBM API Connect v10.0.8 LTS',
                to: 'https://www.ibm.com/docs/en/api-connect/10.0.8.x_lts',
              },
                            {
                label: 'IBM API Connect v10.0.10 CD',
                to: 'https://www.ibm.com/docs/en/api-connect/10.0.x_cd',
              },
            ],
          },
        ],
        copyright: `Copyright © IBM Corporation ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
