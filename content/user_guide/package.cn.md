---
title: "包"
date: 2019-07-10T14:46:06+08:00
weight: 3
---

由于 `extension` 机制，使用dubbo-go时我们需要导入一些包。

#### 必须导入

```go
_ "github.com/apache/dubbo-go/common/proxy/proxy_factory"
_ "github.com/apache/dubbo-go/registry/protocol"
_ "github.com/apache/dubbo-go/filter/impl"
_ "github.com/apache/dubbo-go/cluster/cluster_impl"
_ "github.com/apache/dubbo-go/cluster/loadbalance"
```

#### 必要时导入

1. 如果你使用了其他的 `extension` ，你必须导入你需要的包

```go
_ "github.com/apache/dubbo-go/protocol/dubbo" // when using dubbo protocol
_ "github.com/apache/dubbo-go/protocol/jsonrpc" // when using dubbo protocol
_ "github.com/apache/dubbo-go/registry/zookeeper" // when using zookeeper registry
```

