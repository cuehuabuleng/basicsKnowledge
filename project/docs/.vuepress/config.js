module.exports = {
    title: '前端基础知识',
    description: 'Just playing around',
    head: [
        ['link', { rel: 'icon', href: '/01.ico' }]
    ],
    themeConfig: {
        logo: '/02.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'github', link: 'https://github.com/cuehuabuleng' },
            { text: 'personal-website', link: 'http://114.55.93.74:8009/#/home' }
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
                            'pages/js/es5/this的五种绑定'
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
                    'pages/计算机网络/'
                ]
            },
            {
                title: '操作系统',
                collapsable: true,
                children: [
                    'pages/操作系统/'
                ]
            },
            {
                title: '算法',
                collapsable: true,
                children: [
                    'pages/算法/'
                ]
            },
            {
                title: '前端性能优化',
                collapsable: true,
                children: [
                    'pages/前端性能优化/'
                ]
            },
            {
                title: '前端工程化',
                collapsable: true,
                children: [
                    'pages/前端工程化/'
                ]
            }
        ]
    }
}