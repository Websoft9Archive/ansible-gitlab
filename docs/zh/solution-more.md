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

进入gitlab控制台，修改用户密码，保存后，重新登录。
```

root@iZ2zea1ri7y5hqhq9dmh4hZ:~# gitlab-rails console     //进入控制台命令
--------------------------------------------------------------------------------
 Ruby:         ruby 2.7.2p137 (2020-10-01 revision 5445e04352) [x86_64-linux]
 GitLab:       13.8.4 (9fb9cbf50c3) FOSS
 GitLab Shell: 13.15.1
 PostgreSQL:   12.5
--------------------------------------------------------------------------------

Loading production environment (Rails 6.0.3.4)
irb(main):001:0>
irb(main):002:0> user = User.find_by_username 'root'  //找到用户，默认管理员用户名为 root
=> #<User id:1 @root>
irb(main):003:0> user.password='Websoft9'   //修改密码
=> "Websoft9"
irb(main):004:0> user.password_confirmation='Websoft9'  //二次确认密码
=> "Websoft9"
irb(main):006:0>  user.save! //保存更改
Enqueued ActionMailer::MailDeliveryJob (Job ID: 3f4ac447-9869-412a-9b5a-988c06cf          eaa2) to Sidekiq(mailers) with arguments: "DeviseMailer", "password_change_by_ad          min", "deliver_now", {:args=>[#<GlobalID:0x00007fb7e5337990 @uri=#<URI::GID gid:          //gitlab/User/1>>]}
=> true
irb(main):007:0>

```

[gitlab官方文档](https://docs.gitlab.com/13.11/ee/security/reset_user_password.html)
