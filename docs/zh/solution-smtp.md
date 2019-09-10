# SMTP

大量用户实践反馈，使用**第三方 SMTP 服务发送邮件**是一种最稳定可靠的方式。  

请勿尝试在服务器上安装sendmail等发邮件方案，因为邮件系统的路由配置受制与域名、防火墙、路由等多种因素制约，导致不稳定、不易维护、诊断故障困难。

下面以**QQ企业邮箱**为例，提供设置 GitLab 发邮件的步骤：

1. 在QQ邮箱管理控制台获取 SMTP 相关参数
   ```
   SMTP host: smtp.exmail.qq.com
   SMTP port: 465 or 587 for SSL-encrypted email
   SMTP Authentication: must be checked
   SMTP Encryption: must SSL
   SMTP username: xxxx@xx.com
   SMTP password: #wwBJ8    //需要注意的是密码中不能包含单引号，否则出错
   ```
2. 通过 SFTP 工具远程连接服务器，修改 GitLab 配置文件：*/etc/gitlab/gitlab.rb*
   ```
   gitlab_rails['smtp_enable'] = true
   gitlab_rails['smtp_address'] = "smtp.exmail.qq.com"
   gitlab_rails['smtp_port'] = 465
   gitlab_rails['smtp_user_name'] = "xxxx@xx.com"
   gitlab_rails['smtp_password'] = "password"
   gitlab_rails['smtp_authentication'] = "login"
   gitlab_rails['smtp_enable_starttls_auto'] = true
   gitlab_rails['smtp_tls'] = true
   gitlab_rails['gitlab_email_from'] = 'xxxx@xx.com'
   ```
4. 重启服务
   ```
   sudo gitlab-ctl reconfigure
   ```

GitLab 官方提供了数十种不同 SMTP 服务提供商的配置方法，请参考官方文档： [SMTP settings](https://docs.gitlab.com/omnibus/settings/smtp.html)