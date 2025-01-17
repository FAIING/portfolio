export const site = {
    author: 'Hwe',
    slogan: '努力成为一个很哇塞的人',
    description: '',
    keywords: '',
    favicon: '/favicon-h.ico',
    url: 'https://ahwe.link'
}
export const footer = {
    beian: {
        enabled: true,
        value: '浙ICP备20009485号-10'
    },
    live: {
        enabled: true,
        from: '2023-02-26'
    }
}
export const navs = [
    {
        name: 'Quick link',
        links: [
            {
                name: '博客',
                icon: '<img class="icon" src="/images/blog.png" alt="博客" />',
                href: 'https://blog.ahwe.top',
            },{
                name: 'Github',
                icon: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11887" width="128" height="128"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" p-id="11888"></path></svg>',
                href: 'https://github.com/FAIING'
            }
        ]
    }
]

export const aboutMe = {
    avatar_url: 'https://q.qlogo.cn/g?b=qq&nk=1960296310&s=640',
    left_tags: [
        '🤖️ 数码科技爱好者',
        '🔍 分享与热心帮助',
        '💻 独立开发学习者'
    ],
    right_tags: [
        '普普通通打工人  🥳',
        '吃饭睡觉玩电脑 🎮',
        '热爱动漫无边际 ✨'
    ]
}

export const project = {
    github_name: 'FAIING',
    filter_readme: true,
    filter_fork: true
}

// use 内容在view/UseTech.astro里面改，svg图片动态导入的话页面需要加载一下，所以硬编码了

export const mediaLink = {
    links: [
        {
            name: 'Github',
            icon: '/svg/github.svg',
            href: 'https://github.com/FAIING'
        },{
            name: '博客',
            icon: '/images/blog.png',
            href: 'https://blog.ahwe.top'
        },{
            name: 'mail',
            icon: '/svg/mail.svg',
            href: 'mailto:agooden@163.com'
        }
    ]
}

export const third = {
    use51la: {
        enabled: true,
        id: 'K3qzYIHm5AsP81Tg',
        ck: 'K3qzYIHm5AsP81Tg'
    }
}
