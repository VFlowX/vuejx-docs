import { withMermaid } from "vitepress-plugin-mermaid";
import { loadEnv } from 'vitepress'
import { generateNav } from "../plugin/vitepress-plugin-custom";

const env = loadEnv('', process.cwd())
export default withMermaid(async () => {
  let config = await generateNav()
  return {
    title: 'Vuejx-doc',
    description: 'Programming with ease',
    lang: 'vi-VN',
    themeConfig: {
      nav: config.nav,
      sidebar: {
        '/docs/vuejx/': await sidebarDocs(),
        '/docs/tips/': await sidebarTips(),
      },
      footer: {
        message: 'Early access.',
        copyright: 'Copyright © 2022-present VFlowX'
      },
      logo: '/vue.svg',
      socialLinks: [
        { icon: 'github', link: 'https://github.com/VFlowX/vuejx-docs' },
        { icon: 'discord', link: 'https://discord.gg/mmA6gBD8EF' },
      ],
      algolia: {
        appId: env.VITE_ALGOLIA_APPLICATION_ID,
        apiKey: env.VITE_ALGOLIA_SEARCH_API_KEY,
        indexName: env.VITE_ALGOLIA_INDEX_NAME,
      },
      lastUpdatedText: 'Sửa lần cuối',
      outlineTitle: 'Trong trang này',
      editLink: {
        pattern: 'https://github.com/VFlowX/vuejx-docs/edit/master/docs/:path',
        text: 'Sửa trang này trên GitHub'
      }
    },
    markdown: {
      lineNumbers: true,
      langPrefix: 'a',
      attrs: {
        allowedAttributes: []
      },
    },
    lastUpdated: true,
  }
}

)

// function nav() {
// return [
//   { text: 'Home', link: '/' },
//   { text: 'Docs', link: '/docs/' },
//   { text: 'Tips', link: '/tips/' },
//   { text: 'About', link: '/about' }
// ]
// }
async function sidebarDocs() {
  return [
    {
      text: 'Vuejx-binhth',
      collapsible: true,
      items: [{
        text: "What's vuejx",
        link: '/docs/vuejx/'
      }, {
        text: 'Api',
        link: '/docs/vuejx/api/'
      }, {
        text: 'Component',
        link: '/docs/vuejx/component/',
        items: [{
          text: 'Config',
          collapsible: true,
          link: '/docs/vuejx/component/config/'
        }, {
          text: 'Form',
          items: [{
            text: 'text',
            link: '/docs/vuejx/component/form/text',
          },
          {
            text: 'number',
            link: '/docs/vuejx/component/form/number',
          },
          {
            text: 'label',
            link: '/docs/vuejx/component/form/label',
          },
          {
            text: 'textarea',
            link: '/docs/vuejx/component/form/textarea',
          },
          {
            text: 'autocomplete',
            link: '/docs/vuejx/component/form/autocomplete',
          },
          {
            text: 'teleport',
            link: '/docs/vuejx/component/form/teleport',
          },
          {
            text: 'table',
            link: '/docs/vuejx/component/form/table',
          },]
        }, {
          text: 'Layout',
          items: [{
            text: 'vuejx-screen',
            link: '/docs/vuejx/component/layout/vuejx-screen',
          },
          ]
        }]
      }, {
        text: 'Template',
        link: '/docs/vuejx/template/'
      },
        // {
        // text: 'Tips',
        // link: '/docs/vuejx/tips'
        // }
      ]
    },
    // {
    //   text: "Deverloper's Tips",
    //   collapsible: true,
    //   items: [{
    //     text: 'Javascript',
    //     link: '/tips/javascript',
    //   }, {
    //     text: 'Mongodb',
    //     link: '/tips/mongodb',
    //   },]
    // },
  ];
}
async function sidebarTips() {
  return [
    {
      text: 'JS',
      // collapsible: true,
      link: '/docs/tips/javascript'
    },
    {
      text: "Mongodb",
      link: '/docs/tips/mongodb'
      // collapsible: true,
      // items: [{
      //   text: 'Javascript',
      //   link: '/tips/javascript',
      // }, {
      //   text: 'Mongodb',
      //   link: '/tips/mongodb',
      // },]
    },
  ];
}