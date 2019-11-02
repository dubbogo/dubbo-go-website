export default {
    'en-us': {
        sidemenu: [
            {
                title: 'User guide',
                children: [
                    {
                        title: 'Preface',
                        children: [
                            {
                                title: 'Architecture',
                                link: '/en-us/docs/user/preface/architecture.html'
                            }
                        ],
                    },
                    {
                        title: 'Quick start',
                        link: '/en-us/docs/user/quick-start.html'
                    },
                    {
                        title: 'Configuration',
                        children: [
                        ],
                    },
                    {
                        title: 'Registry configuration reference',
                        children: [
                            {
                                title: 'Introduction',
                                link: '/en-us/docs/user/registry/introduction.html',
                            },
                            {
                                title: 'Zookeeper registry',
                                link: '/en-us/docs/user/registry/zookeeper.html',
                            },
                            {
                                title: 'Nacos registry',
                                link: '/en-us/docs/user/registry/nacos.html',
                            },
                            {
                                title: 'Consul registry',
                                link: '/en-us/docs/user/registry/consul.html',
                            },
                            {
                                title: 'Etcdv3 registry',
                                link: '/en-us/docs/user/registry/etcdv3.html',
                            }
                        ]
                    }
                ],
            },
            {
                title: 'Developer guide',
                children: [
                    {
                        title: 'Design',
                        link: '/en-us/docs/developer/design.html'
                    }
                ],
            },
            {
                title: 'Source code guide',
                children: [
                    {
                        title: 'Extension',
                        link: '/en-us/docs/source_code/extension.html'
                    }
                ]
            }
        ],
        barText: 'Documentation',
    },
    'zh-cn': {
        sidemenu: [
            {
                title: '用户指南',
                children: [
                    {
                        title: '入门',
                        children: [
                            {
                                title: '架构',
                                link: '/zh-cn/docs/user/preface/architecture.html'
                            }
                        ],
                    },
                    {
                        title: '快速启动',
                        link: '/zh-cn/docs/user/quick-start.html'
                    },
                    {
                        title: '配置',
                        children: [
                        ],
                    },
                    {
                        title: '注册中心参考手册',
                        children: [
                            {
                                title: '介绍',
                                link: '/zh-cn/docs/user/registry/introduction.html',
                            },
                            {
                                title: 'Zookeeper 注册中心',
                                link: '/zh-cn/docs/user/registry/zookeeper.html',
                            },
                            {
                                title: 'Nacos 注册中心',
                                link: '/zh-cn/docs/user/registry/nacos.html',
                            },
                            {
                                title: 'Consul 注册中心',
                                link: '/zh-cn/docs/user/registry/consul.html',
                            },
                            {
                                title: 'Etcdv3 注册中心',
                                link: '/zh-cn/docs/user/registry/etcdv3.html',
                            }
                        ]
                    }
                ],
            },
            {
                title: '开发者指南',
                children: [
                    {
                        title: '框架设计',
                        link: '/zh-cn/docs/developer/design.html'
                    }
                ],
            },
            {
                title: '源码导读',
                children: [
                    {
                        title: '拓展点',
                        link: '/zh-cn/docs/source_code/extension.html'
                    }
                ]
            }
        ],
        barText: '文档',
    }
};
