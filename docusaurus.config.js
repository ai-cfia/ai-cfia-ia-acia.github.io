// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;
const baseUrl = process.env.BASE_URL || '/';


const config = {
  title: 'Artificial Intelligence Lab',
  tagline: '',
  favicon: '/img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ai-cfia-ia-acia.github.io',

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: baseUrl,

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
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      }
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
    },
  },
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          id: 'articles',
          routeBasePath: 'articles',
          path: './articles',
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          blogTitle: 'Articles',
          blogDescription: 'Scientific articles written by AI Lab members',
          postsPerPage: 'ALL',
          blogSidebarTitle: 'All our articles',
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
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
    ({
      colorMode: {
        disableSwitch: true
      },
      // Replace with your project's social card

      image: 'img/favicon.icon',
      navbar: {
        title: 'AI LAB',
        /*
        logo: {
          alt: 'My Site Logo',
          src: '',
        },*/
        items: [
          {
            to: 'docs/about/',
            label: 'About',
            position: 'left',
          },
          {
            to: 'docs/products/',
            label: 'Products',
            position: 'left',
          },
          {
            to: 'docs/projects/',
            label: 'Projects',
            position: 'left',
          },
          /* {
            to: 'docs/dev-rel-docs/',
            label: 'Dev-Rel-Docs',
            position: 'left',
          }, */
          {
            to: 'dev-rel-docs-fetched/',
            label: 'Dev-Rel-Docs',
            position: 'left',
          },
          {
            to: 'articles/',
            label: 'Articles',
            position: 'left',
          },
          {
            to: 'docs/contact',
            label: 'Contact Us',
            position: 'left',
          },
          {
            to: 'docs/alpha/',
            label: 'Site is in ALPHA stage',
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
                label: 'Nachet',
                to: 'docs/products/nachet/introduction',
              },
              {
                label: 'Finesse',
                to: 'docs/products/finesse/introduction',
              },
              {
                label: 'FertiScan',
                to: 'docs/products/fertiscan/introduction',
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

            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Terms and conditions',
                href: 'https://www.canada.ca/en/transparency/terms.html'
              },
              {
                label: 'CFIA Website',
                href: 'https://inspection.canada.ca/eng/1297964599443/1297965645317',
              },
            ],
          },
        ],
        copyright: `${new Date().getFullYear()} AI Lab`,
      },
      prism: {
        theme: lightCodeTheme
            },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          //hideable: true,
        },
      },
      zoom: {},
    }),

    plugins:[
      'docusaurus-plugin-image-zoom'
    ],
};

module.exports = config;
