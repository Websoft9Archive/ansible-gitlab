# SMTP

Sending mail is a common feature for GitLab. After a large number of user practice feedback, only one way is recommended, that is, using the **third-party STMP service** to send the email.

> Do not try to install **Sendmail** or other Mail server software on your Cloud Server for sending mail, because it is very difficulty in maintenance.

Follow is the sample using **SendGrid's SMTP Service** to configure sending mail for GitLab:

1. Log in SendGrid console, prepare your SMTP settings like the follow sample
   ```
   SMTP host: smtp.sendgrid.net
   SMTP port: 25 or 587 for unencrypted/TLS email, 465 for SSL-encrypted email
   SMTP Authentication: must be checked
   SMTP Encryption: must SSL
   SMTP username: websoft9smpt
   SMTP password: #fdfwwBJ8f    
   ```
2. Use SSH or SFTP to connect Server, modify the GitLab configuration file: */etc/gitlab/gitlab.rb*
   ```
   gitlab_rails['smtp_enable'] = true
   gitlab_rails['smtp_address'] = "smtp.sendgrid.net"
   gitlab_rails['smtp_port'] = 587
   gitlab_rails['smtp_user_name'] = "a_sendgrid_crendential"
   gitlab_rails['smtp_password'] = "a_sendgrid_password"
   gitlab_rails['smtp_domain'] = "smtp.sendgrid.net"
   gitlab_rails['smtp_authentication'] = "login"
   gitlab_rails['smtp_enable_starttls_auto'] = true
   gitlab_rails['smtp_tls'] = false
   ```
4. Restart Service
   ```
   sudo gitlab-ctl reconfigure
   ```

GitLab provides configuration methods for dozens of different SMTP service providers, please refer to the official documentation:[SMTP settings](https://docs.gitlab.com/omnibus/settings/smtp.html)