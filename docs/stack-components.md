# Parameters

This GitLab pre-configure packages use the [Omnibus GitLab](https://gitlab.com/gitlab-org/omnibus-gitlab) for installation and configuration. Omnibus GitLab is a way to package different services and tools required to run GitLab, so that most users can install it without laborious configuration.

## Architecture

This is a simplified architecture diagram that can be used to understand GitLab’s architecture.

![GitLab Architecture](https://libs.websoft9.com/Websoft9/DocsPicture/en/gitlab/architecture_simplified.png)

## Components and Version

There many componets packaged in GitLab([view lists](https://docs.gitlab.com/ee/development/architecture.html#component-list)), you can see it from the file: */opt/gitlab/version-manifest.txt* on your Server

## Path

Gitlab version before 13.9 adopts the docker installation mode, and volumes path：/data/wwwroot/gitlab  
For details, please check[GitLab Docker installation](https://docs.gitlab.com/omnibus/docker/README.html)

### GitLab

GitLab configuration file: */etc/gitlab/gitlab.rb*    
GitLab and all components: */opt/gitlab*  
GitLab Repository storage directory: */var/opt/gitlab/git-data*  
GitLab backup directory: */var/opt/gitlab/backups*

### Unicorn

Unicorn logs direcotry: */var/log/gitlab/unicorn*  

### Sidekiq

Unicorn logs directory: */var/log/gitlab/sidekiq*

### Nginx

Nginx logs directory: */var/log/gitlab/nginx*  
Nginx configuration file: */var/opt/gitlab/nginx/conf/nginx.conf*  
GitLab core Nginx configuration file:  */var/opt/gitlab/nginx/conf/gitlab-http.conf*

### PostgreSQL

PostgreSQL installation directory: */var/opt/gitlab/postgresql*  
PostgreSQL logs directory: */var/log/gitlab/postgresql*   
PostgreSQL-Exporter logs directory: */var/log/gitlab/postgres-exporter*  
PostgreSQL data direcoty: */var/opt/gitlab/postgresql/data*

### Redis

Redis installation directory: */var/opt/gitlab/redis*  
Redis logs directory: */var/log/gitlab/redis*


## Ports

You can view all the used ports from the official docs [Package defaults](https://docs.gitlab.com/omnibus/package-information/defaults.html) . You can control(open or shut down) ports by **[Security Group Setting](https://support.websoft9.com/docs/faq/zh/tech-instance.html)** of your Cloud Server whether the port can be accessed from Internet.

These ports should be opened for this application:

| Name | Number | Use |  Necessity |
| --- | --- | --- | --- |
| HTTP | 80 | HTTP requests for Metabase | Required |
| HTTPS | 443 | HTTPS requests Metabase | Optional |

## Version

You can see the version from product page of Marketplace. However, after being deployed to your server, the components will be automatically updated, resulting in a certain change in the version number. Therefore, the exact version number should be viewed by running the command on the server:

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