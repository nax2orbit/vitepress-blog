import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Vitepress blog",
  description: "A VitePress Site",
  base: "/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'blog', link: '/blog/' },
    //  {
    //     text: 'Dropdown Menu',
    //     items: [
    //       {text: 'Item A', link: '/item-1'},
    //       {text: 'Item A', link: '/item-2'},
    //       {text: 'Item A', link: '/item-3'}
    //     ]
    //   }
    ],

    sidebar: {
      '/':[
        {text: 'blog', link:'/blog/'}
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nax2orbit' }
    ],
    footer: {
      // message: 'Released under the MIT License.',
      copyright: '©nax2'
    }

  }
})
