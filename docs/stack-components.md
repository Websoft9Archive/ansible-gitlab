# Parameters

This GitLab pre-configure packages use the [Omnibus GitLab](https://gitlab.com/gitlab-org/omnibus-gitlab) for installation and configuration. Omnibus GitLab is a way to package different services and tools required to run GitLab, so that most users can install it without laborious configuration.

## Architecture

This is a simplified architecture diagram that can be used to understand GitLab’s architecture.

![GitLab Architecture](https://libs.websoft9.com/Websoft9/DocsPicture/en/gitlab/architecture_simplified.png)

## Components and Version

There many componets packaged in GitLab([view lists](https://docs.gitlab.com/ee/development/architecture.html#component-list)), you can see it from the file: */opt/gitlab/version-manifest.txt* on your Server

## Path

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