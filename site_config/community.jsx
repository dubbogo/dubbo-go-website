import React from 'react';

export default {
  'en-us': {
    barText: 'Community',
    events: {
      title: 'Events & News',
      list: [
        {
          img: '/img/dubbo-go.png',
          title: 'Go 版本入 Dubbo 生态一周年：已和 Spring Cloud、gRPC 互通',
          content: 'Go 版本入 Dubbo 生态一周年：已和 Spring Cloud、gRPC 互通',
          dateStr: 'May 29th，2020',
          link: '/zh-cn/blog/dubbo-go-one-year.html',
        },
        {
          img: '/img/dubbo-go.png',
          title: 'dubbo-go 1.4.0 版本发布，支持 K8s 注册中心、rest 协议',
          content: '得益于社区活跃的支持，2020 年 3 月 25 日 我们发布了一个让人兴奋的版本——dubbo-go v1.4.0',
          dateStr: 'Mar 25th，2020',
          link: '/zh-cn/blog/dubbo-go-1.4.0.html',
        },
      ]
    },
    contacts: {
      title: 'Talk To Us',
      desc: 'Feel free to contact us via the following channel.',
      list: [
        {
          img: '/img/mailinglist.png',
          imgHover: '/img/mailinglist_hover.png',
          title: 'Mailing List',
          link: 'mailto:dev-subscribe@dubbo.apache.org'
        },
        {
          img: '/img/dingding.png',
          imgHover: '/img/dingding.png',
          title: 'Ding ding',
          link: '/img/dubbo-go-group.jpg'
        },
      ],
    },
    contributorGuide: {
      title: 'Contributor Guide',
      desc: 'Want to contribute to Dubbo?',
      list: [
        {
          img: '/img/mailinglist.png',
          title: 'Mailing List',
          content: <span>Join the <a href="mailto:dev-subscribe@dubbo.apache.org">mailing list </a>and discussion your ideas with us.</span>,
        },
        {
          img: '/img/issue.png',
          title: 'Issue',
          content: <span>Reporting issues via <a href="https://github.com/apache/dubbo-go/issues">Github issues</a>.</span>,
        },
        {
          img: '/img/documents.png',
          title: 'Documents',
          content: <span>Improve the <a href="/en-us/docs/user/quick-start.html">documentation</a>.</span>,
        },
        {
          img: '/img/pullrequest.png',
          title: 'Pull Request',
          content: <span>Send your awesome enhancement via <a href="https://github.com/apache/dubbo-go/pulls">Pull requests.</a></span>,
        },
      ],
    },
    ecos: {
      title: 'Eco System',
      list: [
        {
          title: 'registry',
          content: <span>dubbo-go supported registries:</span>,
          tags: [
            {
                text: 'zookeeper',
                link: 'https://github.com/apache/dubbo-go/tree/master/registry/zookeeper',
                bgColor: '#7A63FC',
            },
            {
                text: 'etcdv3',
                link: 'https://github.com/apache/dubbo-go/tree/master/registry/etcdv3',
                bgColor: '#7A63FC',
            },
            {
                text: 'consul',
                link: 'https://github.com/apache/dubbo-go/tree/master/registry/consul',
                bgColor: '#7A63FC',
            },
            {
                text: 'kubernetes',
                link: 'https://github.com/apache/dubbo-go/tree/master/registry/kubernetes',
                bgColor: '#7A63FC',
            },
            {
                text: 'nacos',
                link: 'https://github.com/apache/dubbo-go/tree/master/registry/nacos',
                bgColor: '#7A63FC',
            },
          ],
        },
        {
          title: 'configuration center',
          content: <span>dubbo-go supported configuration center:</span>,
          tags: [
            {
                text: 'zookeeper',
                link: 'https://github.com/apache/dubbo-go/tree/master/config_center/zookeeper',
                bgColor: '#7A63FC',
            },
            {
                text: 'nacos',
                link: 'https://github.com/apache/dubbo-go/tree/master/config_center/nacos',
                bgColor: '#7A63FC',
            },
            {
                text: 'apollo',
                link: 'https://github.com/apache/dubbo-go/tree/master/config_center/apollo',
                bgColor: '#7A63FC',
            },
          ],
        },
        {
          title: 'protocol',
          content: <span>dubbo-go supported protocol:</span>,
          tags: [
            {
                text: 'dubbo',
                link: 'https://github.com/apache/dubbo-go/tree/master/protocol/dubbo',
                bgColor: '#7A63FC',
            },
            {
                text: 'grpc',
                link: 'https://github.com/apache/dubbo-go/tree/master/protocol/grpc',
                bgColor: '#7A63FC',
            },
            {
                text: 'jsonrpc',
                link: 'https://github.com/apache/dubbo-go/tree/master/protocol/jsonrpc',
                bgColor: '#7A63FC',
            },
            {
                text: 'rest',
                link: 'https://github.com/apache/dubbo-go/tree/master/protocol/rest',
                bgColor: '#7A63FC',
            },
          ],
        },
        {
          title: 'metrics',
          content: <span>dubbo-go supported metrics:</span>,
          tags: [
            {
                text: 'prometheus',
                link: 'https://github.com/apache/dubbo-go/tree/master/metrics/prometheus',
                bgColor: '#7A63FC',
            },
          ],
        },
      ],
    },
  },
  'zh-cn': {
    barText: '社区',
    events: {
      title: '事件 & 新闻',
      list: [
        {
          img: '/img/dubbo-go.png',
          title: 'Go 版本入 Dubbo 生态一周年：已和 Spring Cloud、gRPC 互通',
          content: 'Go 版本入 Dubbo 生态一周年：已和 Spring Cloud、gRPC 互通',
          dateStr: 'May 29th，2020',
          link: '/zh-cn/blog/dubbo-go-one-year.html',
        },
        {
          img: '/img/dubbo-go.png',
          title: 'dubbo-go 1.4.0 版本发布，支持 K8s 注册中心、rest 协议',
          content: '得益于社区活跃的支持，2020 年 3 月 25 日 我们发布了一个让人兴奋的版本——dubbo-go v1.4.0',
          dateStr: 'Mar 25th，2020',
          link: '/zh-cn/blog/dubbo-go-1.4.0.html',
        }
      ]
    },
    contacts: {
      title: '联系我们',
      desc: '有问题需要反馈？请通过以下方式联系我们。',
      list: [
        {
          img: '/img/mailinglist.png',
          imgHover: '/img/mailinglist_hover.png',
          title: '邮件列表',
          link: 'mailto:dev-subscribe@dubbo.apache.org'
        },
        {
          img: '/img/dingding.png',
          imgHover: '/img/dingding.png',
          title: '钉钉',
          link: '/img/dubbo-go-group.jpg'
        },
      ],
    },
    contributorGuide: {
      title: '贡献指南',
      desc: 'Dubbo社区欢迎任何形式的贡献。',
      list: [
        {
          img: '/img/mailinglist.png',
          title: '邮件列表',
          content: <span>加入 <a href="mailto:dev-subscribe@dubbo.apache.org">邮件列表 </a>参与讨论。</span>,
        },
        {
          img: '/img/issue.png',
          title: '报告缺陷',
          content: <span>通过<a href="https://github.com/apache/dubbo-go/issues"> Github issues </a>报告缺陷。</span>,
        },
        {
          img: '/img/documents.png',
          title: '文档',
          content: <span>优化Dubbo <a href="/zh-cn/docs/user/quick-start.html"> 文档</a>。</span>,
        },
        {
          img: '/img/pullrequest.png',
          title: 'Pull Request',
          content: <span>提交 <a href="https://github.com/apache/dubbo-go/pulls"> Pull requests </a>来修复问题。</span>,
        },
      ],
    },
    ecos: {
      title: '生态系统',
      list: [
        {
          title: '注册中心',
          content: <span>dubbo-go支持的注册中心:</span>,
          tags: [
            {
                text: 'zookeeper',
                link: 'https://github.com/apache/dubbo-go/tree/master/registry/zookeeper',
                bgColor: '#7A63FC',
            },
            {
                text: 'etcdv3',
                link: 'https://github.com/apache/dubbo-go/tree/master/registry/etcdv3',
                bgColor: '#7A63FC',
            },
            {
                text: 'consul',
                link: 'https://github.com/apache/dubbo-go/tree/master/registry/consul',
                bgColor: '#7A63FC',
            },
            {
                text: 'kubernetes',
                link: 'https://github.com/apache/dubbo-go/tree/master/registry/kubernetes',
                bgColor: '#7A63FC',
            },
            {
                text: 'nacos',
                link: 'https://github.com/apache/dubbo-go/tree/master/registry/nacos',
                bgColor: '#7A63FC',
            },
          ],
        },
        {
          title: '配置中心',
          content: <span>dubbo-go支持的配置中心:</span>,
          tags: [
            {
                text: 'zookeeper',
                link: 'https://github.com/apache/dubbo-go/tree/master/config_center/zookeeper',
                bgColor: '#7A63FC',
            },
            {
                text: 'nacos',
                link: 'https://github.com/apache/dubbo-go/tree/master/config_center/nacos',
                bgColor: '#7A63FC',
            },
            {
                text: 'apollo',
                link: 'https://github.com/apache/dubbo-go/tree/master/config_center/apollo',
                bgColor: '#7A63FC',
            },
          ],
        },
        {
          title: '协议',
          content: <span>dubbo-go支持的协议:</span>,
          tags: [
            {
                text: 'dubbo',
                link: 'https://github.com/apache/dubbo-go/tree/master/protocol/dubbo',
                bgColor: '#7A63FC',
            },
            {
                text: 'grpc',
                link: 'https://github.com/apache/dubbo-go/tree/master/protocol/grpc',
                bgColor: '#7A63FC',
            },
            {
                text: 'jsonrpc',
                link: 'https://github.com/apache/dubbo-go/tree/master/protocol/jsonrpc',
                bgColor: '#7A63FC',
            },
            {
                text: 'rest',
                link: 'https://github.com/apache/dubbo-go/tree/master/protocol/rest',
                bgColor: '#7A63FC',
            },
          ],
        },
        {
          title: '监控',
          content: <span>dubbo-go支持的监控系统:</span>,
          tags: [
            {
                text: 'prometheus',
                link: 'https://github.com/apache/dubbo-go/tree/master/metrics/prometheus',
                bgColor: '#7A63FC',
            },
          ],
        },
      ],
    },
  },
};
