---
title: Quick start
keywords: quick start, hellowworld, Provider
description: quickly start Dubbo-go and code a simple hellowworld application
---

# Quick start

Let's take you to the Dubbo-go framework through a `hellowworld` example.

protocal: Dubbo     
coding: Hessian2  
registry: Zookeeper 

## Environment

* Go programming environment
* Start zookeeper server, or use a remote instance of zookeeper

## Start from the server

### Step 1: coding the `Provider` struct and methods to provide service编写 `Provider` 结构体和提供服务的方法

> https://github.com/dubbogo/dubbogo-samples/blob/master/helloworld/dubbo/go-server/app/user.go

1. Coding the structure to be encoded, because `Hessian2` is used as the encoding protocol, `User` needs to implement the `JavaClassName` method, and its return value corresponds to the class name of User class in Dubbo.

```go
type User struct {
	Id   string
	Name string
	Age  int32
	Time time.Time
}

func (u User) JavaClassName() string {
	return "com.ikurento.user.User"
}
```

2. Coding the business logic, and `UserProvider` is equivalent to one of implementations of one service in Dubbo. It needs implement the `Reference` method whose return value is unique identification of this service, and return value corresponds to the `beans` and `path` fields of Dubbo.

```go
type UserProvider struct {
}

func (u *UserProvider) GetUser(ctx context.Context, req []interface{}) (*User, error) {
	println("req:%#v", req)
	rsp := User{"A001", "hellowworld", 18, time.Now()}
	println("rsp:%#v", rsp)
	return &rsp, nil
}

func (u *UserProvider) Reference() string {
	return "UserProvider"
}
```

3. Register services and objects

```go
func init() {
	config.SetProviderService(new(UserProvider))
	// ------for hessian2------
	hessian.RegisterPOJO(&User{})
}
```

### Step 2：Coding main program

> https://github.com/dubbogo/dubbogo-samples/blob/master/helloworld/dubbo/go-server/app/server.go

1. Import the required Dubbo-go package

```go
import (
	hessian "github.com/apache/dubbo-go-hessian2"
	"github.com/apache/dubbo-go/config"
	_ "github.com/apache/dubbo-go/registry/protocol"
	_ "github.com/apache/dubbo-go/common/proxy/proxy_factory"
	_ "github.com/apache/dubbo-go/filter/impl"
	_ "github.com/apache/dubbo-go/cluster/cluster_impl"
	_ "github.com/apache/dubbo-go/cluster/loadbalance"
	_ "github.com/apache/dubbo-go/registry/zookeeper"

	_ "github.com/apache/dubbo-go/protocol/dubbo"
)

```

2. main method

```go
func main() {
	config.Load()
}
```

### Step 3：Coding configuration files and configure environment variables

1. Follow [log](https://github.com/dubbogo/dubbogo-samples/blob/master/helloworld/dubbo/go-server/profiles/release/log.yml) and [server](https://github.com/dubbogo/dubbogo-samples/blob/master/helloworld/dubbo/go-server/profiles/release/server.yml) to edit configuration files.

Edit the following configurations: 

* The number and address of zk to be configured under the node `registries`.

* To configure the specific informations of the service under the node `services`, you need to configure the `interface` -- change it to the interface name of the corresponding service, and the key of service is return value of `Reference` method of `Provider` in Step 1.

2. Configure the above two configuration files as environment variables

```shell
export CONF_PROVIDER_FILE_PATH="xxx"
export APP_LOG_CONF_FILE="xxx"
```

## The second is client

### Step 1：coding the `Provider` of client

> https://github.com/dubbogo/dubbogo-samples/blob/master/helloworld/dubbo/go-client/app/user.go

1. Refer to the first point of step 1 in `Start from the server`.

2. Different from the server, methods to provide services are the parameters of the structure, and they don't need to code some special business logic。In addition, `Provider` does not correspond to the interface in Dubbo, but to an implementation.

```go
type UserProvider struct {
	GetUser func(ctx context.Context, req []interface{}, rsp *User) error
}

func (u *UserProvider) Reference() string {
	return "UserProvider"
}
```

3. Register services and objects

```go
func init() {
	config.SetConsumerService(userProvider)
	hessian.RegisterPOJO(&User{})
}
```

### Step 2：Coding main program of client

> https://github.com/dubbogo/dubbogo-samples/blob/master/helloworld/dubbo/go-client/app/client.go

1. Import the required Dubbo-go package

```go
import (
	hessian "github.com/apache/dubbo-go-hessian2"
	"github.com/apache/dubbo-go/config"
	_ "github.com/apache/dubbo-go/registry/protocol"
	_ "github.com/apache/dubbo-go/common/proxy/proxy_factory"
	_ "github.com/apache/dubbo-go/filter/impl"
	_ "github.com/apache/dubbo-go/cluster/cluster_impl"
	_ "github.com/apache/dubbo-go/cluster/loadbalance"
	_ "github.com/apache/dubbo-go/registry/zookeeper"

	_ "github.com/apache/dubbo-go/protocol/dubbo"
)
```

2. main method

```go
func main() {
	config.Load()
	time.Sleep(3e9)

	println("\n\n\nstart to test dubbo")
	user := &User{}
	err := userProvider.GetUser(context.TODO(), []interface{}{"A001"}, user)
	if err != nil {
		panic(err)
	}
	println("response result: %v\n", user)
}
func println(format string, args ...interface{}) {
	fmt.Printf("\033[32;40m"+format+"\033[0m\n", args...)
}
```

### Step 3：Coding configuration files and configure environment variables

1. Follow [log](https://github.com/dubbogo/dubbogo-samples/blob/master/helloworld/dubbo/go-client/profiles/release/log.yml) and  [client](https://github.com/dubbogo/dubbogo-samples/blob/master/helloworld/dubbo/go-client/profiles/release/client.yml) to edit configuration files.

Edit the following configurations: 

* The number and address of zk to be configured under the node `registries`.

* To configure the specific informations of the service under the node `references`, you need to configure the `interface` -- change it to the interface name of the corresponding service, and the key of service is return value of `Reference` method of `Provider` in Step 1.

2. Configure the above two configuration files as environment variables, in order to prevent the conflict between the log environment variables client and server, it is recommended that all the environment variables should not be configured globally, which will take effect at present.

```shell
export CONF_CONSUMER_FILE_PATH="xxx"
export APP_LOG_CONF_FILE="xxx"
```
