import MermaidPlugin from "vitepress-plugin-mermaid";
import { defineConfig } from 'vitepress'
export default defineConfig({
  title: 'Vuejx-doc',
  description: 'Programming with ease',
  lang: 'vi-VN',
  themeConfig: {
    nav: nav(),
    sidebar: {
      '/docs/vuejx/': sidebarDocs(),
      '/tips/': sidebarDocs(),
    },
    footer: {
      message: 'Early access.',
      copyright: 'Copyright © 2022-present VFlowX'
    },
    logo: '/cave.gif',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/VFlowX/vuejx-docs' },
      { icon: 'discord', link: 'https://discord.gg/mmA6gBD8EF' },
    ],
    algolia: {
      appId: process.env.ALGOLIA_APPLICATION_ID,
      apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
      indexName: 'netlify_938869e8-c8c5-481e-9f44-e82221fa7fcf_master_all',
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
    config: MermaidPlugin,
    langPrefix: 'a'
  },
  lastUpdated: true,
})

function nav() {
  return [
    { text: 'Home', link: '/' },
    { text: 'Docs', link: '/docs/' },
    { text: 'Tips', link: '/tips/' },
    { text: 'About', link: '/about' }
  ]
}
function sidebarProject() {
  return [
    {
      text: 'Core app',
      collapsible: true,
      items: [{
        text: 'Why?',
        link: '/projects/core/'
      }, {
        text: 'Workflow',
        link: '/projects/core/workflow'
      }, {
        text: 'Tech Stack',
        link: '/projects/core/techstack'
      }, {
        text: 'TODO',
        link: '/projects/core/todo'
      }]
    }
  ]
}
function sidebarDocs() {
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
        link: '/docs/vuejx/component',
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
        link: '/docs/vuejx/template'
      }, {
        text: 'Tips',
        link: '/docs/vuejx/tips'
      }]
    },
    {
      text: "Deverloper's Tips",
      collapsible: true,
      items: [{
        text: 'Javascript',
        link: '/tips/javascript',
      }, {
        text: 'Mongodb',
        link: '/tips/mongodb',
      },]
    },
  ]
}