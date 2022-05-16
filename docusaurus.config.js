const path = require('path');

module.exports = {
  title: "datacraft's blog",  // 'datacraft blog',
  tagline: 'datablog - The blog of the datacraft community. A blog for rocky discussions.',
  url: 'https://datacraft-paris.github.io/',
  deploymentBranch: 'gh-pages',
  baseUrl: '/',
  organizationName: 'datacraft-paris',         // Usually your GitHub org/user name.
  projectName: 'datacraft-paris.github.io',    // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/datacraft_logo.png',
  themeConfig: {
    image:"img/datablog-illustration.jpg",    // This changes the previsualisation image some apps display (WhatsApp, Slack...) display when you send the link of the website.
    prism: {theme: require('prism-react-renderer/themes/dracula'), additionalLanguages: ['python'],},
    colorMode:{defaultMode:"dark", disableSwitch:true,},
    googleAnalytics: {trackingID: 'UA-124520099-9',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    logo: {
      alt: 'datacraft Logo',
      src: 'img/datacraft_logo.png',                  // This changes the logo that appears in the browser tab.
      // href: 'https://opensource.facebook.com/',
    },
    navbar: {
      title: '',
      logo: {
        alt: ' ',
        src: 'img/datacraft_logo_full-petit.png',             // This changes the logo that appears side-to-side with the 'datacraft' button in the navigation bar.
      },
      items: [
        {to: 'blog/', label: 'Belzebuth', position: 'left'},
        /*{to: 'docs/', label: 'Docs', position: 'left'},*/
        {to: 'opensource/', label: 'Open Source', position: 'left',},

        {to: 'https://datacraft.paris/', label: 'datacraft website', position: 'right'},
        {to: 'http://eepurl.com/hfkB9z', label: 'Newsletter', position: 'right'},
        {to: 'https://github.com/datacraft-paris', label: 'Github', position: 'right',},
      ],
    },
    footer: {
/*      logo: {alt: 'datacraft Logo', src: 'img/datacraft_logo.png',},*/
      links: [
        {
          title: 'About us',
          items: [
            {label: 'Who we are ?', to: 'https://datacraft.paris/about-us/',},
            /*{label: 'Our team', to: 'https://datacraft.paris/about-us/',},*/
            {label: 'Subscribe to our newsletter', to: 'http://eepurl.com/hfkB9z',},
          ],
        },
/*        {
          title: 'Find us',
          items: [
            {label: 'Github', to: 'https://github.com/datacraft-paris'},
            {label: 'Careers', href: 'https://ekimetrics.com/careers/',},
            {label: 'datacraft on Welcome to the jungle', to: 'https://www.welcometothejungle.com/fr/companies/ekimetrics',},
          ],
        },*/
/*        {
          title: 'Made by kapichu & Co.',
        },*/
      ],
      
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        /*docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/DrKapichu/drkapichu.github.io',
        },*/
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/DrKapichu/drkapichu.github.io/tree/main/blog',
          /*sidebarPath: require.resolve('./blog_sidebars.js'),*/
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
