export default {
    'en-us': {
        barText: 'Blog',
        postsTitle: 'All posts',
        list: [
            // {
            //     title: 'Your First Dubbo Demo',
            //     author: '@Yang Xinru',
            //     dateStr: 'August 7th，2018',
            //     desc: 'Your First Dubbo Demo',
            //     link: '/en-us/blog/dubbo-101.html',
            // }
        ]
    },
    'zh-cn': {
        barText: '博客',
        postsTitle: '所有文章',
        list: [
            {
                title: '在dubbo-go 中使用sentinel',
                author: '@panty',
                dateStr: 'Mar 1st, 2020',
                desc: '如何在dubbo-go中使用sentinel。讨论了adapter如何实现',
                link: '/zh-cn/blog/dubbo-go-sentinel.html',
            },
            {
                title: 'dubbo-go 中如何实现远程配置管理',
                author: '@zouyx',
                dateStr: 'Mar 1st, 2020',
                desc: '在 dubbo-go 中如何实现远程配置管理。讨论了目前已有的实现，以及如何扩展新的配置中心。',
                link: '/zh-cn/blog/dubbogo-configcenter.html',
            },
            {
                title: 'dubbogo中的TPS Limit设计与实现',
                author: '@flycash',
                dateStr: 'Nov 10th, 2019',
                desc: '在dubbogo中的TPS limit的设计与实现。讨论了目前已有的实现，以及可以扩展的接口。',
                link: '/zh-cn/blog/dubbogo-tps-limit-design-implementation.html',
            },
            {
                title: '要优雅退出吗？dubbogo给你',
                author: '@flycash',
                dateStr: 'Nov 21th, 2019',
                desc: '在dubbogo中的优雅退出的设计与实现。讨论了直接退出的存在问题，因此得出优雅退出所需的步骤。',
                link: '/zh-cn/blog/graceful-shutdown.html',
            },
            {
                title: 'dubbo-go中metrics的设计',
                author: '@flycash',
                dateStr: 'Jan 18th, 2020',
                desc: 'metrics是可观测性的核心部分。该文讨论了在dubbo-go中metrics的顶级抽象，通过Prometheus为例子揭示了如何采集和上报数据',
                link: '/zh-cn/blog/dubbogo-metrics-design-implementation.html',
            },
            {
                title: '无缝连接dubbo-go与gRPC',
                author: '@flycash',
                dateStr: 'Jan 18th, 2020',
                desc: '在dubbo-go中接入gRPC的设计与实现。核心在于实现gRPC protocol，作为一个适配器将dubbo-go和gRPC连接起来',
                link: '/zh-cn/blog/grpc-dubbo.html',
            },
            {
                title: 'dubbo-go 踩坑记',
                author: '@扶苏',
                dateStr: 'Feb 23th, 2020',
                desc: '使用dubbo-go的前因后果与踩坑过程',
                link: '/zh-cn/blog/dubbo-go-experience.html',
            },
        ]
    },
};
