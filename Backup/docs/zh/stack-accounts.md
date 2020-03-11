# 账号密码

使用GitLab，可能会用到的几组账号密码如下：

## GitLab

Administrator username：`root`  
Administrator password：`在初始化安装的时候由用户自行设置`  

## PostgreSQL

Omnibus GitLab 使用的是 Peer 认证模式，即从操作系统获得客户端的操作系统用户，并且检查它是否匹配被请求的数据库用户名，这只对本地连接可用。

## Linux

* 主机地址：服务公网IP地址
* 连接方式：云控制台在线SSH 或 SFTP客户端工具 或 SSH客户端工具
* 管理员密码：创建服务器的时候自行设置，若不记得密码需要通过云控制台重置。
* 管理员账号：不同的云平台有一定的差异
   |  云平台   |  管理员账号   |
   | --- | --- |
   |  Azure   |  创建服务器的时候自行设置   |
   |  AWS   |  ubuntu   |
   |  阿里云，华为云，腾讯云   |  root   |