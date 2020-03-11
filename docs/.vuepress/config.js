module.exports = {
    title: '前端收集',  // 设置网站标题
    avatar: '/avatar.jpg',
    description: '笔记本',
    // dest: './dist',  // 设置输出目录
    base: '/vuepress-blog/', // 设置站点服务器目录
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/logo.ico'
            }
        ]
    ],
    themeConfig: {
        // 添加导航栏
        nav: [
            { text: '首页', link: '/' },
            { text: '博客', link: '/blog/' },
            { text: '收藏', link: '/mark/' },
            { text: '书签', link: '/bookmark/' },
            { text: '面试', link: '/interview/' },
            { text: 'leetcode', link: '/leetcode/' },
            { text: 'vue', link: '/.vuepress/vue/' },
            {
                text: 'github', link: 'https://github.com/jackipan/',
                // 这里是下拉列表展现形式。 
                // items: [
                //   { text: 'focus-outside', link: 'https://github.com/jackipan/' }
                // ]
            }
        ],
        // 为以下路由添加侧边栏
        sidebar: {
            '/blog/': [
                'webpack'
            ],
            '/mark/': [],
            '/leetcode/': [
                'info'
            ]
        }
    },
    repo: 'https://github.com/jackipan/vuepress-blog', // 添加github链接
    plugins: ['@vuepress/pwa', {
        serviceWoker: true,
        updatePopup: true
    }]
}