# Troubleshooting

We collect the most common troubleshooting of using GitLab for your reference:

## Gitlab
#### 502 error
![](https://libs.websoft9.com/Websoft9/DocsPicture/en/gitlab/gitlab-502-websoft9.png)

The minimum required free memory for GitLab is 4G. If the Server memory is limit, a 502 error will occur. For a single-core CPU server, the Unicorn and Sidekiq service starts up to a minute, and if it is not started, it will report a 502 error.

## Database related

#### Database service could not be started?

Insufficient disk space, insufficient memory, and configuration file errors can make database service could not be started  

It is recommended to first check through the command.

```shell

# view disk space
df -lh

# view memory rate
free -lh
```

#### phpMyAdmin page access blank?

Please try another browser, such as chrome or firefox. If the phpMyAdmin can be opened normally before, and now appears to be incomplete or blank, it is recommended to clean up the browser cache, cookies and other information

## Instance related

Instance troubleshooting is closely related to the Instance provider that is Cloud Platform   
Please refer to [Cloud Platform Documentation](https://support.websoft9.com/docs/faq/tech-instance.html)

## Network related

## Other