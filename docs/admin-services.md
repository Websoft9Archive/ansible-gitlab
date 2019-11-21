# Start or Stop the Services

These service's commands you must know when you using the GitLab of Websoft9, more service please refer to [Official docs](https://docs.gitlab.com/omnibus/maintenance/README.html#get-service-status)

# TEST # TEST# TEST# TEST

---

-Nginx：Web server 
-gitlab-shell：Used to process Git commands and modify the authorized keys list.    
-gitlab-workhorse: Lightweight reverse proxy server.   
-logrotate：Log file management tool.  
-postgresql：database   
-redis：cache database  
-sidekiq：Used to perform queue tasks (asynchronous execution) in the background.
-unicorn：An HTTP server for Rack applications


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


### Other

These command is equivalent to the effect of the GitLab service, for reference only

```shell
systemctl start gitlab-runsvdir.service
systemctl stop gitlab-runsvdir.service
systemctl status gitlab-runsvdir.service
systemctl restart gitlab-runsvdir.service
```
