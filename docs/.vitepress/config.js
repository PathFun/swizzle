const base = process.env.NODE_ENV === 'production' ? '/swizzle' : '';
const { resolve } = require('path');

module.exports = {
  title: 'swizzle',
  srcIncludes: ['src'],
  alias: {
    // 为了能在demo中正确的使用  import { X } from 'swizzle'
    [`swizzle`]: resolve('./src'),
  },
  base,
  // importMap: {
  //   导入
  // },
  head: [
    // 设置 描述 和 关键词
    ["meta", { name: "keywords", content: "vue swizzle design components" }],
    ["meta", {
      name: "description",
      content: "基于vue3.0开发的swizzle组件库",
    }]
  ],
  themeConfig: {
    logo: '../logo.svg',
    lang: 'zh-CN',
    locales: {
      '/': {
        lang: 'zh-CN',
        title: 'swizzle',
        description: '_description',
        label: '中文',
        selectText: '语言',
        nav: [
          { text: 'FormRenderVue', link: '/form-render-vue/start/', activeMatch: '^/form-render-vue/' },
          { text: 'ParseChart', link: '/parse-chart/start/', activeMatch: '^/parse-chart/' },
          { text: "GitHub", link: "https://github.com/PathFun/ali-react-table" }
        ],
        sidebar: {
          '/form-render-vue/': [
            {
              text: '开始使用',
              link: '/form-render-vue/start/'
            },
            {
              text: '协议（schema）',
              children: [
                {
                  text: 'schema 规范',
                  link: '/form-render-vue/agree/schema/'
                }
              ]
            },
          ],
          '/parse-chart/': [
            {
              text: '开始使用',
              link: '/parse-chart/start/'
            },
          ]
        },
      },
      '/en/': {
        lang: 'en-US',
        title: 'swizzle',
        description: '_description',
        label: 'English',
        selectText: 'Languages',
        nav: [
          { text: 'FormRenderVue', link: '/form-render-vue/start/', activeMatch: '^/form-render-vue/' },
          { text: 'ParseChart', link: '/parse-chart/start/', activeMatch: '^/parse-chart/' },
          { text: "GitHub", link: "https://github.com/PathFun/ali-react-table" }
        ],
        sidebar: {
          '/en/form-render-vue/': [
            {
              text: 'get started',
              link: '/en/form-render-vue/start/'
            },
            {
              text: 'agree（schema）',
              children: [
                {
                  text: 'schema standard',
                  link: '/en/form-render-vue/agree/schema/'
                }
              ]
            },
          ],
          '/en/parse-chart/': [
            {
              text: 'get started',
              link: '/en/parse-chart/start/'
            },
          ]
        },
      },
    },
    search: {
      searchMaxSuggestions: 10,
    },
    lastUpdated: true,
    prevLink: true,
    nextLink: true,
  },
};