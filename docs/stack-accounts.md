# Username and Password

These accounts are required for GitLab image installation and configuration

## GitLab

Administrator username：`root`  
Administrator password：`Is set by yourselft at the time of GitLab installation wizard`   

## PostgreSQL

Omnibus GitLab use the PostgreSQL Peer Authentication mode for local connection, not need username and password of PostgreSQL

## Linux

* Host Name: Internet IP or Public IP of your Instance
* Connect by: Online SSH on Cloud Console or SFTP/SSH tools on your local computer
* Password: It was set by yourself when created instance
* Username: Different Cloud Platform has differences
   |  Cloud Platform   |  Administrator Username   |
   | --- | --- |
   |  Azure   |  It was set by yourself when created instance   |
   |  AWS   |  ubuntu   |
   |  Alibaba Cloud, HUAWEI CLOUD, Tencent Cloud |  root   |

If don't remember the password of Linux, you should reset password on Cloud Console