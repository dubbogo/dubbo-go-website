# Dubbo-go官方站点

此项目包括Dubbo-go官方文档、博客等内容，引导用户正确使用Dubbo-go。

## 先决条件

Dubbo-go 站点由[docsite](https://github.com/txd-team/docsite)提供支持。
如果您的版本低于`1.3.3`，请升级到`1.3.3`。
同时请确保你的node版本是8.x，docsit还不支持高于8.x的版本。

## 构建说明

1. 运行 `npm install docsite -g` 安装开发工具。
2. 在根目录下运行 `npm i` 安装依赖。
3. 在根目录下运行 `docsite start` 启动本地服务, 你可以在 'http://127.0.0.1:8080' 下访问站点。
4. 运行 `docsite build` to build source code。
5. 验证本地修改: `python -m SimpleHTTPServer 8000`, 如果python版本是3则使用 : `python3 -m http.server 8000`。

如果您已经安装了更高的node版本，可以考虑使用 `nvm` 支持多版本的 `node` 同时存在您的机器上。 

1. 跟着 [说明](http://nvm.sh) 来安装nvm
2. 运行 `nvm install v8.16.0` 安装 node v8
3. 运行 `nvm use v8.16.0` 切换工作环境到 node v8
4. 运行 `npm install docsite -g`

然后您就可以运行并构建网站了。详情请遵循上面的构建说明。

## 如何提交PR

1. 不要使用 `git add .` 来提交所有的修改。
2. 只提交您修改过的文件，如:
    * `*.md`
	* blog.js or docs.js or site.js
3. 提交一个PR到 **master** 分支.


## SEO

确保每个 .md 文件开头都有以下内容：

```
---
title: 标题
keywords: 关键词1,关键词2,关键词3
description: 描述
---
```

## 添加文档指南

### 添加一篇新的文档

1. 在 docs/en-us 或 docs/zh-cn 目录下添加一个新的 .md 文件。
2. 更新 site_config/docs.js 文件，添加一个新的条目到 en-us 或 zh-cn。
3. 本地运行 docsite start 验证内容可以正确显示。
4. 提交一个仅包含 .md 和 docs.js 文件的PR。

### 添加一篇新的博客

1. 在 blog/en-us 或 blog/zh-cn 目录下添加一个新的 .md 文件。
2. 更新 site_config/blog.js 文件，添加一个新的条目到 en-us 或 zh-cn。
3. 本地运行 docsite start 验证内容可以正确显示。
4. 提交一个仅包含 .md 和 blog.js 文件的PR。