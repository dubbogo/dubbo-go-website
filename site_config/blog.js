export default {
    'en-us': {
        barText: 'Blog',
        postsTitle: 'All posts',
        list: [
            {
                title: '涂鸦智能 dubbo-go 亿级流量的实践与探索',
                author: '@panty',
                dateStr: 'June 13th, 2020',
                desc: '本文分为实践和快速接入两部分，分享在涂鸦智能的 dubbo-go 实战经验，意在帮助用户快速接入 dubbo-go RPC 框架，希望能让大家少走些弯路',
                link: '/zh-cn/blog/dubbo-go-practice-exploration.html',
            },
            {
                title: 'dubbo-go 可信调用实现',
                author: '@郑泽超',
                dateStr: 'May 22th, 2020',
                desc: '本文将讲解如何在 Dubbo/Dubbo-Go 中实现灵活，安全和高效的身份验证和授权方案',
                link: '/zh-cn/blog/dubbo-go-rusted-call-implementation.html',
            },
            {
                title: 'dubbo-go 中将 Kubernets 原⽣作为注册中⼼的设计和实现',
                author: '@王翔',
                dateStr: 'May 16th, 2020',
                desc: '介绍 dubbo-go 以 Kubernetes 为中⼼的服务注册的初衷，设计⽅案，以及具体实现',
                link: '/zh-cn/blog/dubbo-go-k8s-registry.html',
            },
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
    'zh-cn': {
        barText: '博客',
        postsTitle: '所有文章',
        list: [
            {
                title: '涂鸦智能 dubbo-go 亿级流量的实践与探索',
                author: '@panty',
                dateStr: 'June 13th, 2020',
                desc: '本文分为实践和快速接入两部分，分享在涂鸦智能的 dubbo-go 实战经验，意在帮助用户快速接入 dubbo-go RPC 框架，希望能让大家少走些弯路',
                link: '/zh-cn/blog/dubbo-go-practice-exploration.html',
            },
            {
                title: 'dubbo-go 可信调用实现',
                author: '@郑泽超',
                dateStr: 'May 22th, 2020',
                desc: '本文将讲解如何在 Dubbo/Dubbo-Go 中实现灵活，安全和高效的身份验证和授权方案',
                link: '/zh-cn/blog/dubbo-go-rusted-call-implementation.html',
            },
            {
                title: 'dubbo-go 中将 Kubernets 原⽣作为注册中⼼_的设计和实现',
                author: '@王翔',
                dateStr: 'May 16th, 2020',
                desc: '介绍 dubbo-go 以 Kubernetes 为中⼼的服务注册的初衷，设计⽅案，以及具体实现',
                link: '/zh-cn/blog/dubbo-go-k8s-registry.html',
            },
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
            {
                title: 'dubbo-go 的开发、设计与功能介绍',
                author: '@何鑫铭',
                dateStr: 'Nov 7th, 2020',
                desc: 'dubbo-go 的开发、设计与功能介绍',
                link: '/zh-cn/docs/md/arch/dubbo-go-design-implement-and-featrues.html',
            },
            {
                title: 'Go 版本入 Dubbo 生态一周年：已和 Spring Cloud、gRPC 互通',
                author: '@邓明',
                dateStr: 'May 28th, 2020',
                desc: '介绍dubbogo进入dubbo生态',
                link: '/zh-cn/docs/md/arch/dubbo-go-one-year.html',
            },
            {
                title: 'dubbogo 回顾与展望',
                author: '@dubbogo社区',
                dateStr: 'Dec 14th, 2019',
                desc: '介绍dubbo-go项目发展历程和未来规划',
                link: '/zh-cn/docs/md/arch/dubbo-go-review-and-future.html',
            },
            {
                title: 'dubbo-go 中如何实现远程配置管理',
                author: '@邹毅贤',
                dateStr: 'Mar 6th, 2020',
                desc: 'dubbo-go 的开发、设计与功能介绍',
                link: '/zh-cn/docs/md/config-center/how-to-implement-remote-configuration-management-in-dubbo-go.html',
            },
            {
                title: 'Dubbo-go 应用维度注册模型',
                author: '@邓明',
                dateStr: 'Sep 12th, 2020',
                desc: '介绍dubbo-go项目的注册模型',
                link: '/zh-cn/docs/md/course/dubbo-go-application-dimension-registration-model.html',
            },
            {
                title: '曹大谈 dubbo mesh : 在 MOSN 中玩转 dubbo-go',
                author: '@曹春晖',
                dateStr: 'Jun 12th, 2020',
                desc: '在 MOSN 中使用 dubbo-go',
                link: '/zh-cn/docs/md/course/mosn-dubbo-go.html',
            },
            {
                title: '涂鸦智能 dubbo-go 亿级流量的实践与探索',
                author: '@潘天颖',
                dateStr: 'Jun 10th, 2020',
                desc: '涂鸦智能使用 dubbo-go 的一些实践与探索',
                link: '/zh-cn/docs/md/course/practice-and-exploration-of-dubbo-go.html',
            },
            {
                title: '快速上手 dubbo-go',
                author: '@dubbogo社区',
                dateStr: 'Jun 9th, 2020',
                desc: 'dubbo-go 快速接入方式介绍',
                link: '/zh-cn/docs/md/course/quick-start-dubbo-go.html',
            },
            {
                title: '快速开始 dubbogo',
                author: '@',
                dateStr: 'Nov 7th, 2020',
                desc: '快速上手dubbo-go，编写一个简单的hellowworld应用',
                link: '/zh-cn/docs/md/course/quick-start.html',
            },
            {
                title: '都已经十岁的 Apache Dubbo，还能再乘风破浪吗？',
                author: '@刘军',
                dateStr: 'Jul 7th, 2020',
                desc: '介绍 dubbo 项目和 dubbogo 项目发展历程和未来规划',
                link: '/zh-cn/docs/md/course/ten-year-dubbo.html',
            },
            {
                title: '写在 Dubbo go 的第五年',
                author: '@于雨',
                dateStr: 'Nov 7th, 2020',
                desc: '介绍 Dubbo go 的五年发展史',
                link: '/zh-cn/docs/md/course/the-5th-years-of-dubbo-go.html',
            },
            {
                title: 'Dubbo-go 的成长与蜕变之路',
                author: '@邹毅贤',
                dateStr: 'Jul 9th, 2020',
                desc: '视频介绍',
                link: '/zh-cn/docs/md/course/the-growth-of-dubbo-go.html',
            },
            {
                title: 'getty 开发日志',
                author: '@于雨',
                dateStr: 'Mar 19th, 2018',
                desc: '介绍getty 的开发过程',
                link: '/zh-cn/docs/md/getty/getty-development-log.html',
            },
            {
                title: '记一次对 dubbo-go-hessian2 的性能优化',
                author: '@张慧仁',
                dateStr: 'Apr 28th, 2020',
                desc: '对 dubbo-go-hessian2 的性能优化的过程复盘记录',
                link: '/zh-cn/docs/md/hessian2/dubbo-go-hessian2-performance-optimization.html',
            },
            {
                title: '记一次在 mosn 对 dubbo、dubbo-go-hessian2 的性能优化',
                author: '@诣极',
                dateStr: 'Jun 3th, 2020',
                desc: '在 mosn 对 dubbo、dubbo-go-hessian2 的性能优化过程分析记录和整理',
                link: '/zh-cn/docs/md/hessian2/mosn-performance-optimization.html',
            },
            {
                title: 'What\'s new in Dubbo-go-hessian2 v1.6.0',
                author: '@望哥',
                dateStr: 'Nov 7th, 2020',
                desc: '介绍 dubbo-go-hessian2的v1.6.0版本新功能',
                link: '/zh-cn/docs/md/hessian2/what\'s-new-in-dubbo-go-hessian2-v1.6.0.html',
            },
            {
                title: 'Dubbo-go-hessian2 v1.7.0 发布',
                author: '@dubbo-go社区',
                dateStr: 'Nov 7th, 2020',
                desc: '介绍 dubbo-go-hessian2的v1.7.0版本新功能',
                link: '/zh-cn/docs/md/hessian2/what\'s-new-in-dubbo-go-hessian2-v1.7.0.html',
            },
            {
                title: '冲上云原生，Dubbo 发布 Go 版本',
                author: '@何鑫铭',
                dateStr: 'Jun 3th, 2019',
                desc: 'dubbo-go项目介绍',
                link: '/zh-cn/docs/md/interview/dubbo-go-published.html',
            },
            {
                title: 'dubbo-go 1.4.0 版本发布，支持 K8s 注册中心、rest 协议',
                author: '@dubbogo社区',
                dateStr: 'Nov 7th, 2020',
                desc: 'dubbo-go的v1.4.0版本介绍',
                link: '/zh-cn/docs/md/interview/what\'s-new-in -dubbo-go-v1.4.0.html',
            },
            {
                title: 'Dubbo-go v1.5.1 发布，Apache Dubbo 的 Go 实现',
                author: '@dubbogo社区',
                dateStr: 'Nov 7th, 2020',
                desc: 'dubbo-go的v1.5.0版本介绍',
                link: '/zh-cn/docs/md/interview/what\'s-new-in -dubbo-go-v1.5.1.html',
            },
            {
                title: 'Dubbo-go 发布 1.5 版，朝云原生迈出关键一步',
                author: '@dubbogo社区',
                dateStr: 'Nov 7th, 2020',
                desc: 'dubbo-go的v1.5.0版本介绍 打通云原生',
                link: '/zh-cn/docs/md/interview/what\'s-new-in -dubbo-go-v1.5.html',
            },
            {
                title: 'dubbo-go 踩坑记',
                author: '@dubbogo社区',
                dateStr: 'Nov 3th, 2019',
                desc: 'dubbo-go的接入过程记录',
                link: '/zh-cn/docs/md/practice/dubbo-go-experience.html',
            },
            {
                title: 'dubbogo 快速开始',
                author: '@dubbogo社区',
                dateStr: 'Jan 20th, 2020',
                desc: '介绍dubbo-go快速开始的过程',
                link: '/zh-cn/docs/md/practice/dubbo-go-quick-start.html',
            },
            {
                title: 'dubbo-go K8s 注册中心的设计方案与实现',
                author: '@王翔',
                dateStr: 'May 14th, 2020',
                desc: '介绍了dubbo-go对接K8s的注册中心的设计方案与实现',
                link: '/zh-cn/docs/md/registry-center/design-and-implementation-of-dubbo-go-and-k8s-registry.html',
            },
            {
                title: '解构 Dubbo-go 的核心注册引擎 Nacos',
                author: '@李志鹏',
                dateStr: 'Nov 7th, 2020',
                desc: '介绍dubbo-go项目核心注册引擎 Nacos',
                link: '/zh-cn/docs/md/registry-center/dubbo-go-registry-center--nacos.html',
            },
            {
                title: 'dubbo-go 中如何实现路由规则功能',
                author: '@dubbogo社区',
                dateStr: 'Apr 23th, 2020',
                desc: '介绍了在 dubbo-go 中如何实现路由规则功能',
                link: '/zh-cn/docs/md/routing-rule/how-to-implement-routing-rule-in-dubbo-go.html',
            },
            {
                title: '无缝衔接 gRPC 与 dubbo-go',
                author: '@邓明',
                dateStr: 'Jan 19th, 2020',
                desc: '介绍了如何无缝衔接 gRPC 与 dubbo-go',
                link: '/zh-cn/docs/md/rpc/dubb-go-adaptive-grpc.html',
            },
            {
                title: 'dubbo-go 可信 RPC 调用实现',
                author: '@郑泽超',
                dateStr: 'May 21th, 2020',
                desc: '介绍 dubbo-go 可信 RPC 调用实现',
                link: '/zh-cn/docs/md/rpc/dubbo-go-trusted-RPC-call-implementation.html',
            },
            {
                title: 'dubbo-go 中 metrics 的设计',
                author: '@邓明',
                dateStr: 'Jan 2th, 2020',
                desc: '介绍了dubbo-go 中 metrics 的设计',
                link: '/zh-cn/docs/md/service-governance/dubbo-go-metrics-design.html',
            },
            {
                title: '在dubbo-go中使用sentinel',
                author: '@dubbogo社区',
                dateStr: 'Nov 7th, 2020',
                desc: '介绍在 dubbo-go 中使用 sentinel',
                link: '/zh-cn/docs/md/service-governance/dubbo-go-sentinel.html',
            },
            {
                title: 'dubbogo中的TPS Limit设计与实现',
                author: '@dubbogo社区',
                dateStr: 'Nov 1th, 2019',
                desc: '介绍了 dubbogo 中的TPS Limit设计与实现',
                link: '/zh-cn/docs/md/service-governance/dubbo-go-tps-limit-design-and-implement.html',
            },
            {
                title: 'dubbo-go 中 REST 协议实现',
                author: '@蒋超',
                dateStr: 'May 13th, 2020',
                desc: '介绍dubbo-go 中 REST 协议实现',
                link: '/zh-cn/docs/md/service-governance/implementation-of-rest-protocol-in-dubbo-go.html',
            },
            {
                title: 'Dubbo/Dubbo-go 应用零成本接入 MOSN',
                author: '@dubbogo社区',
                dateStr: 'Jun 6th, 2020',
                desc: '介绍 Dubbo/Dubbo-go 应用如何接入 MOSN',
                link: '/zh-cn/docs/md/service-governance/zero-cost-access-to-mosn-for-dubbo-go.html',
            }
        ]
    },
};
