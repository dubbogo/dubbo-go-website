---
title: "快速开始"
date: 2019-07-10T14:39:30+08:00
weight: 2
---


### 第一步: 定义 struct 和 provider

> dubbo-go/examples/dubbo/go-client/app/user.go
> dubbo-go/examples/dubbo/go-server/app/user.go

```go
// 所有的struct都必须实现hessian.POJO
type User struct {}
func (User) JavaClassName string {
    return "com.Xxx.User" // same to the java class name
}

// server部分
func init() {
	config.SetProviderService(new(UserProvider))
}
UserProvider struct {}
func (u *UserProvider) YourMethod() (*User, error) {
    // do your any things
}
func (u *UserProvider) Reference() string {
	return "UserProvider"
}

// client部分
func init() {
	config.SetConsumerService(new(UserProvider))
}
type UserProvider struct {
    YourMethod func(*User, error)
}
func (u *UserProvider) Reference() string {
	return "UserProvider"
}
```

### 第二步: 编写 server.go

> go-for-apache-dubbo/examples/dubbo/go-server/app/server.go

1. **参考:** [import package](../package)

```go
// 必须导入你所需要的包
// 如: import _ "github.com/apache/dubbo-go/protocol/dubbo"

// 注册 pojo 
hessian.RegisterPOJO(&User{})
// Load
config.Load()
```

### 第三步: 编写 client.go

> dubbo-go/examples/dubbo/go-client/app/client.go

1. **参考:** [import package](../package)

```go
// 必须导入你所需要的包
// 如: import _ "github.com/apache/dubbo-go/protocol/dubbo"

// 注册 pojo 
hessian.RegisterPOJO(&User{})
// Load
config.Load()
// call
config.GetRPCService("UserProvider").YourMethod(...)
```

### 第四步: 编写 client.yml and server.yml

> ***参考:***

> dubbo-go/examples/dubbo/go-client/profiles

> dubbo-go/examples/dubbo/go-server/profiles



