module.exports = {
    title: '前端面试指南',
    description: 'Just playing around',
    head: [
        ['link', { rel: 'icon', href: '/01.ico' }]
    ],
    themeConfig: {
        logo: '/02.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'github', link: 'https://github.com/cuehuabuleng' },
            { text: '个人博客网站', link: 'http://114.55.93.74:8014/' }
            // {
            //     text: 'Languages',
            //     ariaLabel: 'Language Menu',
            //     items: [
            //         { text: 'Chinese', link: '/language/chinese/' },
            //         { text: 'Japanese', link: '/language/japanese/' }
            //     ]
            // }
        ],
        sidebar: [
            {
                title: 'HTML',
                collapsable: false,
                children: [
                    'pages/HTML/',
                    'pages/HTML/DOM'
                ]
            },
            {
                title: 'css',
                collapsable: true,
                children: [
                    'pages/css/'
                ]
            },
            {
                title: 'js基础',
                collapsable: true,
                children: [
                    {
                        title: 'es5',
                        collapsable: true,
                        children: [
                            'pages/js/es5/',
                            'pages/js/es5/this-binding'
                        ]
                    },
                    {
                        title: 'es6',
                        collapsable: true,
                        children: [
                            'pages/js/es6/'
                        ]
                    }
                ]
            },
            {
                title: 'vue',
                collapsable: true,
                children: [
                    'pages/vue/'
                ]
            },
            {
                title: 'react',
                collapsable: true,
                children: [
                    'pages/react/'
                ]
            },
            {
                title: 'node',
                collapsable: true,
                children: [
                    'pages/node/'
                ]
            },
            {
                title: 'webpack',
                collapsable: true,
                children: [
                    'pages/webpack/'
                ]
            },
            {
                title: '计算机网络',
                collapsable: true,
                children: [
                    'pages/computer-network/'
                ]
            },
            {
                title: '操作系统',
                collapsable: true,
                children: [
                    'pages/operating-system/'
                ]
            },
            {
                title: '算法',
                collapsable: true,
                children: [
                    'pages/algorithm/'
                ]
            },
            {
                title: '前端性能优化',
                collapsable: true,
                children: [
                    'pages/performance-optimization/'
                ]
            },
            {
                title: '前端工程化',
                collapsable: true,
                children: [
                    'pages/web-engineering/'
                ]
            }
        ]
    }
}