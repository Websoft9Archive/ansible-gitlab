# 更多...

下面每一个方案，都经过实践证明行之有效，希望能够对你有帮助

## 域名绑定

绑定域名的前置条件是：GitLab已经可以通过解析后的域名访问。  

虽然如此，从服务器安全和后续维护考量，**域名绑定**步骤不可省却  

GitLab 域名绑定操作步骤（[官方文档](https://docs.gitlab.com/omnibus/settings/configuration.html#configuring-the-external-url-for-gitlab)）：

1. 通过 SSH 或 SFTP 登录云服务器
2. 修改 [GitLab 配置文件](/zh/stack-components.md#gitlab)：*/etc/gitlab/gitlab.rb*，将其中的 **external_url** 项的值 *http://gitlab.example.com* 修改为你的域名
   ```text
   external_url "http://gitlab.example.com" # 改为自定义域名
   ...
   ``` 
3. 保存配置文件，重启下面的服务
   ```
   sudo gitlab-ctl reconfigure
   ```


## 迁移

暂无

## 重置管理员密码

待更新
