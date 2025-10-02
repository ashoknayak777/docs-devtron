// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Devtron Docs',
  tagline: 'Accelerate Kubernetes adoption and experience smooth deployment with Devtron',
  favicon: 'img/devtron-favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://ashokdevtron.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs-devtron/',

  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ashokdevtron', // Usually your GitHub org/user name.
  projectName: 'docs-devtron', // Usually your repo name.

  onBrokenLinks: 'throw',
  // onBrokenMarkdownLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexDocs: true,
        indexPages: true,
        language: ['en'],
        hashed: true,
        docsRouteBasePath: '/docs', // or '/' if you're using docs-only mode
      },
    ],
  ],  

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/devtron-social-card.jpg',
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     'Try Devtron Enterprise! <a target="_blank" href="https://license.devtron.ai/dashboard">Start Free Trial</a>',
      //   backgroundColor: '#D2EEE5',
      //   textColor: '#091E42',
      //   isCloseable: false,
      // },
      navbar: {
        title: '',
        logo: {
          alt: 'Devtron Logo',
          src: 'img/hlogos/devtron-logo-horizontal-dual.svg',
          srcDark: 'img/hlogos/devtron-logo-horizontal-white.svg',
        },
        items: [
          { label: 'Docs', className: 'navbar-docs-link', type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left' },
          // { label: 'GitHub Repo', href: 'https://github.com/devtron-labs/devtron', position: 'right' },
          // { label: 'Join Discord', href: 'https://discord.gg/devtron', position: 'right' },
          { label: 'Website', href: 'https://devtron.ai', position: 'right' },
          { label: 'Sandbox', href: 'https://preview.devtron.ai/', position: 'right' },
          {
            href: 'https://license.devtron.ai/dashboard',
            label: 'Get Devtron Freemium',
            position: 'right',
            className: 'shimmer-button-freemium',
          },
          {
            href: 'https://devtron.ai/contact-sales',
            label: 'Get Devtron Enterprise',
            position: 'right',
            className: 'shimmer-button-enterprise',
          },
          { type: 'search', position: 'right' },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'light', // switch from 'dark' to 'light'
        // logo: {
        //   alt: 'Devtron Logo',
        //   src: 'img/hlogos/devtron-logo-horizontal-black.svg',
        //   href: '/', // optional: go to homepage
        //   width: 160, // adjust as needed
        // },
        links: [
          {
            html: `
              <div style="text-align: center;">
                <div style="margin-bottom: 1rem;">
                  <a href="/" style="display: inline-block;">
                    <img src="img/hlogos/devtron-logo-horizontal-black.svg" alt="Devtron Logo" width="160" class="footer-logo light-mode-only" />
                    <img src="img/hlogos/devtron-logo-horizontal-white.svg" alt="Devtron Logo" width="160" class="footer-logo dark-mode-only" />
                  </a>
                </div>
                <p class="footer-desc" style="margin: 1rem 0; font-size: 0.95rem;">
                  Unlock the full value of K8s, and bridge the gap between development and operations team.
                </p>
                <div style="margin-bottom: 1rem;">
                  <a href="https://discord.gg/jsRG5qx2gp" target="_blank" style="margin: 0 8px;">
                    <img class="footer-icon" src="img/socials/discord.svg" alt="Join Discord" height="24"/>
                  </a>
                  <a href="https://github.com/devtron-labs/devtron" target="_blank" style="margin: 0 8px;">
                    <img class="footer-icon" src="img/socials/github.svg" alt="GitHub" height="24"/>
                  </a>
                  <a href="https://linkedin.com/company/devtron-labs" target="_blank" style="margin: 0 8px;">
                    <img class="footer-icon" src="img/socials/linkedin.svg" alt="LinkedIn" height="24"/>
                  </a>
                  <a href="https://x.com/DevtronL" target="_blank" style="margin: 0 8px;">
                    <img class="footer-icon" src="img/socials/x.svg" alt="X" height="24"/>
                  </a>
                  <a href="https://devtron.ai/blog/" target="_blank" style="margin: 0 8px;">
                    <img class="footer-icon" src="img/socials/blog.svg" alt="Devtron Blogs" height="24"/>
                  </a>
                </div>
                <div style="margin-bottom: 1rem;">
                  <a href="https://devtron.ai/privacy-policy" target="_blank" style="margin: 0 12px;">Privacy</a>
                  <a href="https://devtron.ai/terms-of-use" target="_blank" style="margin: 0 12px;">Terms</a>
                  <a href="https://devtron.ai/about" target="_blank" style="margin: 0 12px;">About Us</a>
                </div>
              </div>
            `,
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Devtron Inc.`,
      },
      
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         {
      //           label: 'Tutorial',
      //           to: '/docs/intro',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Join Discord Channel',
      //           href: 'https://discord.gg/jsRG5qx2gp',
      //         },
      //         {
      //           label: 'X',
      //           href: 'https://x.com/DevtronL',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'Blog',
      //           href: 'https://devtron.ai/blog/',
      //         },
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/devtron-labs/devtron',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} Devtron Inc.`,
      // },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
