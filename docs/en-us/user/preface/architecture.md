---
title: architecture
keywords: architecture
description: a brief description of Dubbo-go's overall architecture
---

# Architecture
![architecture](../../../../img/dubbo-go-architecture.png)

#### Explain for node
* `Registry` : the registry is responsible for service registration and discovery in Dubbo-go
* `Consumer` : the consumer calls remote service
* `Provider` : the provider exposes remote services

#### Explain for process
* `0. register` : the provider automatically registers its services to the registry while starting
* `1. subscribe` : the consumer subscribes to the services it need from the registration center while starting
* `2. notify` : the registration center returns the service registration information to the consumer, and when the subscribed service changes, it will push the changed data to the consumer
* `3. invoke` : according to the service address obtained from the registry, the consumer selects a suitable service address through the load balancing algorithm to initiate the request

# Initialization process

### Consumer

![dubbo-go-client](../../../../img/dubbo-go-client.png)

### Provider

![dubbo-go-server](../../../../img/dubbo-go-server.png)