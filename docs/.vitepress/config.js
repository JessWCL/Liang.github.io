export default {
  title: 'GLZ', //站点标题
  description: '一个vue3组件库', //mate标签description，多用于搜索引擎抓取摘要
  themeConfig: {
    siteTitle: 'GLZ',
    logo: '/logo.png',
    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/geeksdidi' },
      { icon: 'twitter', link: '...' },
      // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
        },
        link: '...',
      },
    ],
    nav: [
      { text: '博客', link: '/articles/组件库环境搭建' },
      { text: 'GuideTest', link: '/guide/test' },
      { text: 'gitee', link: 'https://gitee.com/geeksdidi' },
      {
        text: 'Drop Menu',
        items: [
          {
            items: [
              { text: 'Item A1', link: '/item-A1' },
              { text: 'Item A2', link: '/item-A2' },
            ],
          },
          {
            items: [
              { text: 'Item B1', link: '/item-B1' },
              { text: 'Item B2', link: '/item-B2' },
            ],
          },
        ],
      },
    ],
    sidebar: {
      '/articles/': [
        {
          text: '组件库源码实现',
          collapsible: true,
          items: [
            {
              text: '组件库环境搭建',
              link: '/articles/组件库环境搭建',
            },
            { text: 'gulp的使用', link: '/articles/gulp的使用' },
          ],
        },
        {
          text: 'vue教程',
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: 'pina和vuex',
              link: '/articles/pina和vuex',
            },
          ],
        },
        {
          text: 'js学习',
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: '8个JavaScript数组操作',
              link: '/articles/js/8个JavaScript数组操作',
            },
            {
              text: '22个超详细的 JS 数组方法',
              link: '/articles/js/22个超详细的 JS 数组方法',
            },
            {
              text: '25个适用于Web开发人员有用的JavaScript技巧',
              link: '/articles/js/25个适用于Web开发人员有用的JavaScript技巧',
            },
            {
              text: '33个JavaScript常用函数封装方法汇总',
              link: '/articles/js/33个JavaScript常用函数封装方法汇总',
            },
            {
              text: '52个JavaScript常用工具函数整理',
              link: '/articles/js/52个JavaScript常用工具函数整理',
            },
            {
              text: '127个javascript代码片段',
              link: '/articles/js/127个javascript代码片段',
            },
            {
              text: '269个JavaScript工具函数',
              link: '/articles/js/269个JavaScript工具函数',
            },
          ],
        },
      ],
    },
  },
};
