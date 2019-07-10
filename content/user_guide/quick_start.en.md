---
title: "Quick_start"
date: 2019-07-10T14:39:26+08:00
weight: 2
---

### STEP 1: Define struct and provider

> dubbo-go/examples/dubbo/go-client/app/user.go
> dubbo-go/examples/dubbo/go-server/app/user.go

```go
// all structs must implements hessian.POJO
type User struct {}
func (User) JavaClassName string {
    return "com.Xxx.User" // same to the java class name
}

// for server
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

// for client
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

### STEP 2: Code server.go

> go-for-apache-dubbo/examples/dubbo/go-server/app/server.go

1. **reference:** [import package](../package)

```go
// must import package you will use
// eg: import _ "github.com/apache/dubbo-go/protocol/dubbo"

// register pojo 
hessian.RegisterPOJO(&User{})
// Load
config.Load()
```

### STEP 3: Code client.go

> dubbo-go/examples/dubbo/go-client/app/client.go

1. **reference:** [import package](../package)

```go
// must import package you will use
// eg: import _ "github.com/apache/dubbo-go/protocol/dubbo"

// register pojo 
hessian.RegisterPOJO(&User{})
// Load
config.Load()
// call
config.GetRPCService("UserProvider").YourMethod(...)
```

### STEP 4: Make client.yml and server.yml

> ***Reference:***

> dubbo-go/examples/dubbo/go-client/profiles

> dubbo-go/examples/dubbo/go-server/profiles

