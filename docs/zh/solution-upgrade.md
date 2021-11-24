# 更新升级

网站技术日新月异，**更新升级**是维护工作之一，长时间不升级的程序，就如长时间不维护的建筑物一样，会加速老化、功能逐渐缺失直至无法使用。  

这里注意更新与升级这两词的差异（[延伸阅读](https://support.websoft9.com/docs/faq/zh/tech-upgrade.html#更新-vs-升级)），例如：
- 操作系统打个补丁常称之为**更新**，Ubuntu 20.04 变更为 Ubuntu 21.04，称之为**升级**
- MySQL5.6.25-->MySQL5.6.30 常称之为**更新**，MySQL5.6->MySQL5.7 称之为**升级**

GitLab 完整的更新升级包括：系统级更新（操作系统和运行环境）和 GitLab 程序升级两种类型

## 系统级更新

运行一条更新命令，即可完成系统级更新：

``` shell
#For Ubuntu
apt update && apt upgrade -y

#For Centos&Redhat
yum update -y
```
> 本部署包已预配置一个用于自动更新的计划任务。如果希望去掉自动更新，请删除对应的Cron


## GitLab升级

GitLab 是一个企业级软件，它所采用了大量的第三方开源组件，它的升级是一个系统化工程。  

所幸，GitLab 官方提供了一个稳妥可靠的 **逐级** [升级方案](https://docs.gitlab.com/omnibus/update/README.html#updating-using-the-official-repositories) 以弥补由于当前版本与最新版本之间的跨度太大儿无法升级的问题。

下面以 Gitlab 13.0.14 升级至 GitLab 14.1.6 为例，介绍详细的升级方案：  

1. 查询官方[升级路径](https://docs.gitlab.com/ee/update/index.html#upgrade-paths)文档，确认升级路径
   ```
   13.0.14 -> 13.1.11 -> 13.8.8 -> 13.12.10 -> 13.12.12 -> 14.0.11 -> 14.1.6
   ```

2. 可选步骤：检索当前升级库是否提供上述路径的各种版本（ce 可替换成 ee）
   ```
   # Ubuntu/Debian
   sudo apt-cache madison gitlab-ce

   # RHEL/CentOS 6 and 7
   yum --showduplicates list gitlab-ce

   # RHEL/CentOS 8
   dnf --showduplicates list gitlab-ce
   ```

3. 根据升级路径，一级一级逐渐向上升
   ```
   # Ubuntu/Debian
   sudo apt install gitlab-ce-<version>

   # RHEL/CentOS 6 and 7
   yum install gitlab-ce-<version>

   # RHEL/CentOS 8
   dnf install gitlab-ce-<version>
   ```

> 如果不填写版本号，例如：yum install gitlab-ce，即表明升级到最新版本。


## CE升级到EE

GitLab Community Edition (CE) 升级到同版本的 GitLab Enterprise Edition 的操作步骤如下：

1. 获取当前CE的版本号
   ```
   # For Debian/Ubuntu
   sudo apt-cache policy gitlab-ce | grep Installed

   # For CentOS/RHEL
   sudo rpm -q gitlab-ce
   ```
2. 匹配EE版本号。例如获取的CE版本号为 *8.6.7-ce.0*，那么应该升级的EE版本号为：*8.6.7-ee.0*
3. Add the gitlab-ee Apt or Yum repository
   ```
   # For Debian/Ubuntu
   curl -s https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash

   # For CentOS/RHEL
   curl -s https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh | sudo bash
   ```
4. 安装 gitlab-ee 版本（同时系统自动卸载ce版）
   ```
   ........................................
   # For Debian/Ubuntu
   ........................................
   ## Make sure the repositories are up-to-date
   sudo apt-get update

   ## Install the package using the version you wrote down from step 1
   sudo apt-get install gitlab-ee=8.6.7-ee.0

   ## Reconfigure GitLab
   sudo gitlab-ctl reconfigure
   
   ........................................
   # For CentOS/RHEL
   ........................................
   ## Install the package using the version you wrote down from step 1
   sudo yum install gitlab-ee-8.6.7-ee.0.el7.x86_64

   ## Reconfigure GitLab
   sudo gitlab-ctl reconfigure
   ```
5. Go to the GitLab admin panel of your server (/admin/license/new) and upload your license file.
6. After you confirm that GitLab is working as expected, you may remove the old Community Edition repository:
   ```
   # For Debian/Ubuntu
   sudo rm /etc/apt/sources.list.d/gitlab_gitlab-ce.list

   # For CentOS/RHEL
   sudo rm /etc/yum.repos.d/gitlab_gitlab-ce.repo
   ```
以上操作更详细说明请参考官方文档：[Updating Community Edition to Enterprise Edition](https://docs.gitlab.com/omnibus/update/README.html#updating-community-edition-to-enterprise-edition)
