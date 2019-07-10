---
title: "Package"
date: 2019-07-10T14:46:03+08:00
weight: 3
---

Because of `extension`, we need to import some package when using dubbo-go.

#### must import

```go
_ "github.com/apache/dubbo-go/common/proxy/proxy_factory"
_ "github.com/apache/dubbo-go/registry/protocol"
_ "github.com/apache/dubbo-go/filter/impl"
_ "github.com/apache/dubbo-go/cluster/cluster_impl"
_ "github.com/apache/dubbo-go/cluster/loadbalance"
```

#### when necessary

1. If you use other `extension`, you must import package which you need.

```go
_ "github.com/apache/dubbo-go/protocol/dubbo" // when using dubbo protocol
_ "github.com/apache/dubbo-go/protocol/jsonrpc" // when using dubbo protocol
_ "github.com/apache/dubbo-go/registry/zookeeper" // when using zookeeper registry
```
