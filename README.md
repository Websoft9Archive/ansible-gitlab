# GitLab 自动化安装与部署

本项目是由 [Websoft9](http://www.websoft9.com) 研发的 [GitLab](https://about.gitlab.com/) 自动化安装程序，开发语言是 Ansible。使用本项目，只需要用户在 Linux 上运行一条命令，即可自动化安装 GitLab，让原本复杂的安装过程变得没有任何技术门槛。  

本项目是开源项目，采用 LGPL3.0 开源协议。

## 配置要求

安装本项目，确保符合如下的条件：

| 条件       | 详情       | 备注  |
| ------------ | ------------ | ----- |
| 操作系统       | CentOS7.x, Ubuntu18.04, AmazonLinux  |  可选  |
| 公有云| AWS, Azure, 阿里云, 华为云, 腾讯云 | 可选 |
| 私有云|  KVM, VMware, VirtualBox, OpenStack | 可选 |
| 服务器配置 | 最低1核1G，安装时所需的带宽不低于10M |  建议采用按量100M带宽 |

## 组件

包含的核心组件为：GitLab-CE 或 GitLab-EE, Omnibus package installation

更多请见[参数表](/docs/zh/stack-components.md)

## 本项目安装的是 GitLab 最新版吗？

本 Gitlab 项目采用官方提供的 Omnibus package 安装包，GitLab 官方会定期维护 Omnibus package 中 GitLab 的版本，即每一次安装均可保证为 GitLab 官方发布的最新稳定版。

安装过程中，安装脚本会提示用户选择 CE 或 EE  

> GitLab-EE 包含 GitLab-CE 功能，当安装EE后，系统会提示导入 EE 的license文件，如果不导入，系统默认就使用 CE 的功能。详情请见：[GitLab-EE vs GitLab-CE](https://about.gitlab.com/install/ce-or-ee/)

如何获取版本信息？打开Gitlab下载页面后，点击操作系统版本，就可以看到Gitlab的版本号：  
![](https://libs.websoft9.com/Websoft9/DocsPicture/en/gitlab/gitlab-getdownloadurl-websoft9.png)

## 安装指南

以 root 用户登录 Linux，运行下面的**一键自动化安装命令**即可启动自动化部署。若没有 root 用户，请以其他用户登录 Linux 后运行 `sudo su -` 命令提升为 root 权限，然后再运行下面的脚本。

```
wget -N https://raw.githubusercontent.com/Websoft9/ansible-linux/master/scripts/install.sh; bash install.sh -r gitlab
```

脚本后启动，就开始了自动化安装，必要时需要用户做出交互式选择，然后耐心等待直至安装成功。

**安装中的注意事项：**  

1. 操作不慎或网络发生变化，可能会导致SSH连接被中断，安装就会失败，此时请重新安装
2. 安装缓慢、停滞不前或无故中断，主要是网络不通（或网速太慢）导致的下载问题，此时请重新安装

多种原因导致无法顺利安装，请使用我们在公有云上发布的 [Gitlab 镜像](https://apps.websoft9.com/gitlab) 的部署方式


## 文档

文档链接：https://support.websoft9.com/docs/gitlab/zh

## FAQ

- 命令脚本部署与镜像部署有什么区别？请参考[镜像部署-vs-脚本部署](https://support.websoft9.com/docs/faq/zh/bz-product.html#镜像部署-vs-脚本部署)
- 本项目支持在 Ansible Tower 上运行吗？支持
