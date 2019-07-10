# Dubbo-go Website
Apache Dubbo-go documents

## Environment

* Golang

## Install Hugo

1. download

    https://github.com/gohugoio/hugo/releases
    
2. put binary file to $GOPATH/bin

## How to edit it?

> https://themes.gohugo.io/theme/dot-hugo-documentation-theme/

1. create a new document

```bash
hugo new [directory]/[filename].[language].md
```

2. edit your document

> You need to refer to files in `content`.

3. preview

```bash
hugo server
```

4. generate docs

```bash
hugo -d docs
```
