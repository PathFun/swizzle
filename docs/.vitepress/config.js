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
  logo: `/assets/logo.svg`,
  importMap: {
    'ant-design-vue': 'https://unpkg.com/ant-design-vue@latest/es/index.js',
    '@ant-design/icons-vue': 'https://unpkg.com/@ant-design/icons-vue@6.1.0/lib/index.js',
    'form-render-vue3': 'https://unpkg.com/form-render-vue3@latest/dist/form-render-vue.es.js',
  },
  head: [
    // 设置 描述 和 关键词
    ["meta", { name: "keywords", content: "vue swizzle design components" }],
    ["meta", {
      name: "description",
      content: "基于vue3.0开发的swizzle组件库",
    }]
  ],
  themeConfig: {
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
          { text: "GitHub", link: "https://github.com/PathFun/swizzle.git" }
        ],
        sidebar: {
          '/form-render-vue/': [
            {
              text: '开始使用',
              link: '/form-render-vue/start/'
            },
            {
              text: '协议(schema)',
              children: [
                {
                  text: 'schema 规范',
                  link: '/form-render-vue/agree/schema/'
                },
                {
                  text: 'rules(校验)',
                  link: '/form-render-vue/agree/rules/'
                },
                {
                  text: 'props',
                  link: '/form-render-vue/agree/props/'
                },
                {
                  text: '内置组件',
                  link: '/form-render-vue/agree/inner-widget/'
                }
              ]
            },
            {
              text: '高级用法',
              children: [
                {
                  text: '表单联动',
                  link: '/form-render-vue/advanced/linkage/'
                },
                {
                  text: '自定义组件（widget）',
                  link: '/form-render-vue/advanced/widget/'
                },
                {
                  text: '表单方法（form）',
                  link: '/form-render-vue/advanced/methods/'
                },
                {
                  text: '表单监听（watch）',
                  link: '/form-render-vue/advanced/watch/'
                },
                {
                  text: '展示的最佳实践',
                  link: '/form-render-vue/advanced/display/'
                },
              ]
            },
            {
              text: '常见问题',
              link: '/form-render-vue/faq/'
            }
          ],
          '/parse-chart/': [
            {
              text: '开始使用',
              link: '/parse-chart/start/'
            },
          ]
        },
        lastUpdated: '上次更新'
      },
      '/en/': {
        lang: 'en-US',
        title: 'swizzle',
        description: '_description',
        label: 'English',
        selectText: 'Languages',
        nav: [
          { text: 'FormRenderVue', link: '/en/form-render-vue/start/', activeMatch: '^/en/form-render-vue/' },
          { text: 'ParseChart', link: '/en/parse-chart/start/', activeMatch: '^/en/parse-chart/' },
          { text: "GitHub", link: "https://github.com/PathFun/swizzle.git" }
        ],
        sidebar: {
          '/en/form-render-vue/': [
            {
              text: 'get started',
              link: '/en/form-render-vue/start/'
            },
            {
              text: 'agree(schema)',
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
        lastUpdated: true
      },
    },
    algolia: {
      appId: '1VOVJQ426D',
      apiKey: '3dafa27d099fac841ca513b31d3fdb32',
      indexName: 'form-render-vue3'
    },
    prevLink: true,
    nextLink: true,
  },
};