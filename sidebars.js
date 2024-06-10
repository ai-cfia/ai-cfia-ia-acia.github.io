/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  productsSidebar: [
    {
      type: 'doc',
      label: 'Products',
      id: 'products/products',
    },
    {
      type: 'category',
      label: 'Louis',
      items: ['products/louis/introduction', ],
    },
    {
      type: 'category',
      label: 'Nachet',
      items: ['products/nachet/introduction', ],
    },
    {
      type: 'category',
      label: 'Finesse',
      items: ['products/finesse/introduction',],
    },
    {
      type: 'category',
      label: 'FertiScan',
      items: ['products/fertiscan/introduction',],
    },


  ],

  projectsSidebar: [
    {
      type: 'doc',
      label: 'Projects',
      id: 'projects/projects',
    },
  ],

  sidebar: [

    {
      type: 'doc',
      label: 'About the Lab',
      id: 'about/about',
    },
    {
      type: 'category',
      label: 'About the Team',
      items: ['about/team/the-software-development-team', 'about/team/ds', 'about/team/internships' ],
    },
  ],

};

module.exports = sidebars;
