# 初始化安装

在云服务器上部署 GitLab 预装包之后，请参考下面的步骤快速入门。

## 准备

1. 在云控制台获取您的 **服务器公网IP地址** 
2. 在云控制台安全组中，检查 **Inbound（入）规则** 下的 **TCP:80** 端口是否开启
3. 若想用域名访问 GitLab，请先到 **域名控制台** 完成一个域名解析

## GitLab 安装向导

1. 使用本地电脑的 Chrome 或 Firefox 浏览器访问网址：*http://域名* 或 *http://Internet IP*, 就进入了GitLab引导页面。开始重置管理员密码。
   ![GitLab初始化页面](http://libs.websoft9.com/Websoft9/DocsPicture/zh/gitlab/gitlab-createpw-websoft9.png)

2. 登陆系统（用户名是`root`，密码是上一步自行设置的） 
   ![Gitlab 登录](http://libs.websoft9.com/Websoft9/DocsPicture/zh/gitlab/gitlab-login-websoft9.png)

3. 进入 Gitlab 控制台，开始使用系统 
   ![GitLab 后台](http://libs.websoft9.com/Websoft9/DocsPicture/zh/gitlab/gitlab-backend-websoft9.png)

> 需要了解更多GitLab的使用，请参考官方文档：[GitLab Documentation](https://metabase.com/docs/latest/)

## 常见问题

#### 浏览器打开IP地址，无法访问 GitLab（白屏没有结果）？

您的服务器对应的安全组80端口没有开启（入规则），导致浏览器无法访问到服务器的任何内容

#### Gitlab能打开，但总是出现502错误？

服务器配置太低导致，GitLab 内存最低为4G

#### 本部署包采用的哪个数据库来存储 GitLab 数据？

是PostgreSQL