# GitLab 自动化安装与部署

本项目是由 [Websoft9](http://www.websoft9.com) 研发的 [GitLab](https://about.gitlab.com/) 自动化安装程序，开发语言是 Ansible。使用本项目，只需要用户在 Linux 上运行一条命令，即可自动化安装 GitLab，让原本复杂的安装过程变得没有任何技术门槛。  

本项目是开源项目，支持MIT开源协议。

## 配置要求

操作系统：目支持Ubuntu18.x 或 CentOS7.x 以上部署此脚本  
硬件配置：最低2核4G，40G系统盘空间，否则无法运行

## 组件

包含的核心组件为：GitLab-CE 12.2.4, Omnibus package installation on Ubuntu 18.04

更多请阅读[参数表](/docs/zh/stack-components.md)

## 本项目安装的是 GitLab 最新版吗？

本 Graylog 项目采用官方提供的 Omnibus package 安装包，GitLab 官方会定期维护 Omnibus package 中 GitLab 的版本，即每一次安装均可保证为 GitLab 官方发布的最新稳定版。

## 安装指南

以 root 用户登录 Linux，运行下面的命令即可启动自动化部署，然后耐心等待，直至安装成功。

```
# coming soon
```  

如果以非 root 用户身份登录 Linux，请先通过 sudo 或 su 提升权限，再运行脚本。

> 自动化安装过程中有大量下载任务，可能会出现网络不通（或速度太慢）导致下载失败而终止自动化安装。此时，请多试几次，若仍然无法完成，请使用我们在公有云上提供的 [GitLab 镜像](https://apps.websoft9.com/gitlab) 部署方式

## 管理指南

详情请参考文档链接：https://support.websoft9.com/docs/gitlab

