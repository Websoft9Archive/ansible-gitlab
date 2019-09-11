# 服务启停

使用由Websoft9提供的GitLab部署方案，可能需要用到的服务（[官方文档](https://docs.gitlab.com/omnibus/maintenance/README.html#get-service-status)）如下：


-Nginx：静态web服务器。  
-gitlab-shell：用于处理Git命令和修改authorized keys列表。  
-gitlab-workhorse: 轻量级的反向代理服务器。  
-logrotate：日志文件管理工具。  
-postgresql：数据库。  
-redis：缓存数据库。  
-sidekiq：用于在后台执行队列任务（异步执行）。  
-unicorn：An HTTP server for Rack applications，GitLab Rails应用是托管在这个服务器上面的。


### GitLab

```shell
sudo gitlab-ctl start 
sudo gitlab-ctl stop 
sudo gitlab-ctl restart 
sudo gitlab-ctl status 
sudo gitlab-ctl reconfigure
```

### Nginx

```shell
sudo gitlab-ctl start nginx
sudo gitlab-ctl stop nginx
sudo gitlab-ctl restart nginx
sudo gitlab-ctl status nginx
```

### Unicorn
```shell
sudo gitlab-ctl start unicorn
sudo gitlab-ctl stop unicorn
sudo gitlab-ctl restart unicorn
sudo gitlab-ctl status unicorn
```

### Sidekiq
```shell
sudo gitlab-ctl start sidekiq
sudo gitlab-ctl stop sidekiq
sudo gitlab-ctl restart sidekiq
sudo gitlab-ctl status sidekiq
```

### PostgreSQL

```shell
sudo gitlab-ctl start postgresql 
sudo gitlab-ctl stop postgresql 
sudo gitlab-ctl restart postgresql 
sudo gitlab-ctl status postgresql 
```

### Redis

```shell
sudo gitlab-ctl start redis
sudo gitlab-ctl stop redis
sudo gitlab-ctl restart redis
sudo gitlab-ctl status redis
```


### 全局

等同于 GitLab 服务的效果，仅供参考

```shell
systemctl start gitlab-runsvdir.service
systemctl stop gitlab-runsvdir.service
systemctl status gitlab-runsvdir.service
systemctl restart gitlab-runsvdir.service
```