# Username and Password

Use the **SSH** to connect your Server and run the command `sudo cat /credentials/password.txt` to get the username and password of this deployment solution.

![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/common/catdbpassword-websoft9.png)

Here are the required username and password for RabbitMQ installation and configuration.

## GitLab

Administrator username：`root`  
Administrator password：stored in the file of your server */credentials/password.txt*  

## PostgreSQL

Omnibus GitLab use the PostgreSQL Peer Authentication mode for local connection, not need username and password of PostgreSQL

## Linux

* Host Name: Server's Internet IP or Public IP of your Instance
* Connect by: Online SSH on Cloud Console or SFTP/SSH tools on your local computer
* Password: It was set by yourself when created instance.
* Username: Different Cloud Platform has differences.
   |  Cloud Platform   | OS |  Administrator Username   | Other |
   | --- | --- | --- | --- |
   |  Azure   | ALL |  It was set by yourself when created instance.   | [How to enable root access?](https://support.websoft9.com/docs/azure/server-login.html#sample2-enable-the-root-username) |
   |  AWS  | CentOS |  centos   | [How to enable root access?](https://support.websoft9.com/docs/aws/server-login.html#sample2-enable-the-root-username) |
   |  AWS   | Amazon Linux |  ec2-user   | [How to enable root access?](https://support.websoft9.com/docs/aws/server-login.html#sample2-enable-the-root-username) |
   |  AWS   | Ubuntu |  ubuntu   | [How to enable root access?](https://support.websoft9.com/docs/aws/server-login.html#sample2-enable-the-root-username) |
   |  Alibaba Cloud, HUAWEI CLOUD, Tencent Cloud | ALL |  root   ||

   > If you forgot the password of Linux, reset it on Cloud Console.