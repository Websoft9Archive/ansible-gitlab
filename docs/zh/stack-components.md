# 参数

本GitLab采用 [Omnibus GitLab包](https://gitlab.com/gitlab-org/omnibus-gitlab) 的安装方式。Omnibus GitLab 是官方推荐的一种安装方法，它自带了 GitLab 所需的所有组件和服务，并可以省去繁琐的配置，同时它自带 CLI 工具，便于 GitLab 升级和维护。

## 架构

下面是一个简化的架构图，可用于了解GitLab的架构。

![](https://libs.websoft9.com/Websoft9/DocsPicture/en/gitlab/architecture_simplified.png)

## 组件和版本

GitLab 包含数十种组件([查看](https://docs.gitlab.com/ee/development/architecture.html#component-list))，通过 */opt/gitlab/version-manifest.txt* 查看服务器上所有组件名称和版本

## 路径
Gitlab 13.9以前的版本采用的Docker安装方式，持久化文件路径：/data/wwwroot/gitlab  
了解详细，请查看[GitLab Docker 安装](https://docs.gitlab.com/omnibus/docker/README.html)


### GitLab

GitLab 配置文件： */etc/gitlab/gitlab.rb*    
GitLab 及所有组件配置： */opt/gitlab*  
GitLab Repository 存储目录： */var/opt/gitlab/git-data*  
GitLab 备份目录： */var/opt/gitlab/backups*

### Unicorn

Unicorn 日志目录： */var/log/gitlab/unicorn*  

### Sidekiq

Unicorn 日志目录： */var/log/gitlab/sidekiq*

### Nginx

Nginx 日志目录: */var/log/gitlab/nginx*  
Nginx 配置文件: */var/opt/gitlab/nginx/conf/nginx.conf*  
GitLab 核心 Nginx 配置文件:  */var/opt/gitlab/nginx/conf/gitlab-http.conf*

### PostgreSQL

PostgreSQL 安装目录： */var/opt/gitlab/postgresql*  
PostgreSQL 日志目录: */var/log/gitlab/postgresql*   
PostgreSQL-Exporter 日志目录： */var/log/gitlab/postgres-exporter*  
PostgreSQL 数据目录： */var/opt/gitlab/postgresql/data*

### Redis

Redis 安装目录： */var/opt/gitlab/redis*  
Redis 日志目录： */var/log/gitlab/redis*

### Potainer

potainer 安装目录： */data/apps/portainer*  
potainer 数据目录： */data/apps/portainer/data*


## 端口号

系统所用到的端口号，请通过官方文档 [Package defaults](https://docs.gitlab.com/omnibus/package-information/defaults.html) 查阅。在云服务器中，通过 **[安全组设置](https://support.websoft9.com/docs/faq/zh/tech-instance.html)** 来控制（开启或关闭）端口是否可以被外部访问。 

本应用建议开启的端口如下：

| 名称 | 端口号 | 用途 |  必要性 |
| --- | --- | --- | --- |
| HTTP | 80 | 通过http访问GitLab | 必须 |
| HTTPS | 443 | 通过https访问GitLab | 可选 |
| HTTP | 9000 | 通过http访问Portainer | 必须 |

## 版本号

组件版本号可以通过云市场商品页面查看。但部署到您的服务器之后，组件会自动进行更新导致版本号有一定的变化，故精准的版本号请通过在服务器上运行命令查看：

```shell
# Linux Version
lsb_release -a

# Nginx version:
nginx -v

# PostgreSQL version:
psql --version

# Dokcer:
docker --version
```
