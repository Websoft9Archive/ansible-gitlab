# FAQ

#### GitLab支持多语言吗？

支持多语言（包含中文），通过控制台即可修改语言

#### GitLab数据库连接配置信息在哪里？

数据库配置信息在GitLab安装目录下的 */etc/gitlab/gitlab.rb* 中，[查阅安装目录路径](/zh/stack-components.md#gitlab)

#### 此预装包中的 PostgreSQL 是否可以远程访问？

不可以。默认缺情况下，GitLab 用户使用的是 Peer Authentication， 这意味着客户端只能以 PostgreSQL 所在主机上的Linux系统账号访问数据库， 无法远程访问。

#### 如果没有域名是否可以部署 GitLab？

可以，访问`http://服务器公网IP` 即可

#### 使用 SSH 的方式克隆GitLab的项目，默认端口是多少？

默认端口是22

#### 数据库密码是多少？

GitLab 使用的 Peer Authentication 方式连接 PostgreSQL, 没有设置数据库密码

#### 是否有可视化的数据库管理工具？

无

#### 是否可以修改 GitLab Repository 存储目录？

可以，参考官方文档 [Repository storage paths](https://docs.gitlab.com/ee/administration/repository_storage_paths.html)

#### 部署和安装有什么区别？

部署是将一序列软件按照不同顺序，先后安装并配置到服务器的过程，是一个复杂的系统工程。  
安装是将单一的软件拷贝到服务器之后，启动安装向导完成初始化配置的过程。  
安装相对于部署来说更简单一些。 

#### 云平台是什么意思？

云平台指提供云计算服务的平台厂家，例如：Azure,AWS,阿里云,华为云,腾讯云等

#### 实例，云服务器，虚拟机，ECS，EC2，CVM，VM有什么区别？

没有区别，只是不同厂家所采用的专业术语，实际上都是云服务器