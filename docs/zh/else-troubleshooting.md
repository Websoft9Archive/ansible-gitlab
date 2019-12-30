# 故障处理

服务器相关故障的诊断和解决，与云平台密切相关，请参考[云平台文档](https://support.websoft9.com/docs/faq/zh/tech-instance.html)

我们收集使用GitLab过程中最常见的故障，供您参考：

#### 通过公司网络（固定IP）突然不能访问Gitlab？

问题场景：通过公司网络（固定IP）突然（以前可以访问）不能访问Gitlab，而通过自己的手机wifi可以访问。
解决方案：原因是 GitLab 有一个rack-attack安全机制。某种条件下（例如：公司大量并发访问 GitLab）rack-attack安全将你的 IP 错误地拦截，导致了从此不能访问 GitLab，这个时候就需要对 [Gitlab 配置文件](/zh/stack-components.md#gitlab)进行修改

![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/gitlab/gitlab-attachip-websoft9.png)


#### 502 错误
![](https://libs.websoft9.com/Websoft9/DocsPicture/en/gitlab/gitlab-502-websoft9.png)

GitLab 所需内存最低为4G，若服务器配置太低会出现502错误。对于单核CPU的服务器，Unicorn and Sidekiq 服务启动最少需要一分钟，如果没有启动完成，也会报502错误

#### 数据库服务无法启动

数据库服务无法启动最常见的问题包括：磁盘空间不足，内存不足，配置文件错误。  
建议先通过命令进行排查  

```shell
# 查看磁盘空间
df -lh

# 查看内存使用
free -lh
```
