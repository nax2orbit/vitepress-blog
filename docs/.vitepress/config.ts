import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Vitepress blog",
  description: "A VitePress Site",
  base: "/",
  head: [
    [
      'link',
      {rel: 'stylesheet',href: "https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Ubuntu+Sans+Mono:ital,wght@0,400..700;1,400..700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"}
    ],
    [
      'link',
      { rel: 'stylesheet', href: '/custom.css' } // ★ここを追加（後でファイルを作成）
    ]
  ],
  themeConfig: {
    logo: 'logogif.gif',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'blog', link: '/blog/' },
      { text: 'til', link: '/til/' },
    //  {
    //     text: 'Dropdown Menu',
    //     items: [
    //       {text: 'Item A', link: '/item-1'},
    //       {text: 'Item A', link: '/item-2'},
    //       {text: 'Item A', link: '/item-3'}
    //     ]
    //   }
    ],

    outline: {
      level: [2, 3], // ##と###を目次に出す
    },

    // sidebar: {
    //   '/':[
    //     {text: 'blog', link:'/blog/'}
    //   ]
    // },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nax2orbit' }
    ],
    footer: {
      // message: 'Released under the MIT License.',
      copyright: '©nax2'
    }

  }
})
