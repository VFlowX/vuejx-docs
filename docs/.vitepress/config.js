// module.exports = {
//   title: 'Documentation',
//   description: 'where everything begins',
//   lang: 'vi-VN',
//   them
// }
import 'dotenv/config'
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
      indexName: 'vfxdocs'
    },
  },
  markdown: {
    lineNumbers: true,
    config: MermaidPlugin,
  },
  lastUpdated: true
})

function nav() {
  return [
    { text: 'Home', link: '/' },
    { text: 'Docs', link: '/docs/' },
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
        text: 'Component',
        link: '/docs/vuejx/component'
      }, {
        text: 'Template',
        link: '/docs/vuejx/template'
      }, {
        text: 'Snippet',
        link: '/docs/vuejx/snippet'
      }, {
        text: 'Form config',
        link: '/docs/vuejx/formconfig'
      }]
    }
  ]
}