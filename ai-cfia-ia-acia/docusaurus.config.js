// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Artificial Intelligence Lab',
  tagline: 'Reimagining public service',
  favicon: '/img/ai-lab-logo.png',

  // Set the production url of your site here
  url: 'https://ai-cfia-ia-acia.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ai-cfia', // Usually your GitHub org/user name.
  projectName: 'ai-cfia-ia-acia.github.io', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: "deployment",
  trailingSlash: false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      image: 'img/ai-lab-logo.png',
      navbar: {
        title: 'AI LAB',
        logo: {
          alt: 'My Site Logo',
          src: 'img/ai-lab-logo.png',
        },
        items: [
          {
            to: 'docs/about/', // Link to the About page
            label: 'About', // Label for the link
            position: 'left',
          },
          {
            to: 'docs/products/', // Link to the Projects page
            label: 'Products', // Label for the link
            position: 'left',
          },
          {
            to: 'docs/projects/', // Link to the Projects page
            label: 'Projects', // Label for the link
            position: 'left',
          },
          { to: '/blog', label: 'Blog', position: 'left' }, // Blog link
          {
            to: 'docs/contact', // Link to the Projects page
            label: 'Contact Us', // Label for the link
            position: 'left',
          },
          {
            to: 'docs/alpha/', // Link to the Projects page
            label: 'Site is in ALPHA stage', // Label for the link
            position: 'right',
          },
          {
            href: 'https://github.com/ai-cfia',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Products',
            items: [
              {
                label: 'Louis',
                to: '/docs/intro',
              },
              {
                label: 'Nachet',
                to: '/docs/intro',
              },
              {
                label: 'Finesse',
                to: '/docs/intro',
              },
              {
                label: 'Membrane',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ai-cfia',
              },
              {
                label: 'CFIA Website',
                href: 'https://inspection.canada.ca/eng/1297964599443/1297965645317',
              },
            ],
          },
                    {
            title: 'Blog',
            items: [

            ],
          },
          {
            title: 'More',
            items: [

              {
                label: 'Internships',
                to: '/docs/about/team/internships.md',
              }
            ],
          },
        ],
        copyright: `SITE IS IN ALPHA STAGE | Copyright © ${new Date().getFullYear()} A.I. Lab. | SITE IS IN ALPHA STAGE`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          //hideable: true,
        },
      }
    }),

};

module.exports = config;
